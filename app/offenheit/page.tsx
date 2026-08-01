import type { Metadata } from "next";
import type { Entry } from "@/data/types";
import { MODALITY_META } from "@/data/types";
import { dataMeta, entries } from "@/data/timeline";
import { ClusterSection, ClusterShell } from "@/components/ClusterShell";
import { StructuredData } from "@/components/StructuredData";
import {
  cadenceByYear,
  chronological,
  cluster,
  houseCount,
  houseCounts,
  jointCredits,
  licenseByModality,
  licenseByYear,
  longestPauses,
  OPEN_WEIGHTS_PENDING,
  orgPolicy,
  releases,
} from "@/lib/clusters";
import { domainOf } from "@/lib/metrics";
import { clusterGraph } from "@/lib/schema";
import { MODALITY_COLOR, modalityTint } from "@/lib/ui";

const C = cluster("/offenheit");

export const metadata: Metadata = {
  title: `${C.title} — Die Beschleunigung`,
  description: C.description,
  // Must be set explicitly: an unset `alternates` would inherit the root
  // layout's canonical and point this page at `/`.
  alternates: { canonical: C.path },
  openGraph: {
    title: C.title,
    description: C.claim,
    url: C.path,
    type: "article",
  },
};

const DE_DATE = new Intl.DateTimeFormat("de-DE", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

function dateLabel(iso: string): string {
  return iso.length === 7
    ? new Intl.DateTimeFormat("de-DE", { month: "long", year: "numeric", timeZone: "UTC" })
        .format(new Date(`${iso}-01T00:00:00Z`))
    : DE_DATE.format(new Date(`${iso}T00:00:00Z`));
}

/** One release, with the modality colour carrying the license state. */
function ReleaseRow({ entry, tone }: { entry: Entry; tone: "open" | "closed" }) {
  const color = MODALITY_COLOR[entry.modality];
  return (
    <li
      className="border-l-2 py-2.5 pl-4"
      style={{ borderColor: tone === "open" ? color : "var(--rule)" }}
    >
      <div className="flex flex-wrap items-baseline gap-x-2">
        <time
          dateTime={entry.date}
          className="font-mono text-[11px] tracking-wide text-ink-faint"
        >
          {dateLabel(entry.date)}
        </time>
        <span className="font-display text-lg font-semibold leading-tight text-ink">
          {entry.name}
        </span>
        <span className="font-mono text-[10px] uppercase tracking-wide text-ink-faint">
          {entry.org}
        </span>
        <span
          className="rounded-full px-2 py-[1px] font-mono text-[9px] uppercase tracking-widest"
          style={{
            background: modalityTint(entry.modality, 0.16),
            color,
          }}
        >
          {MODALITY_META[entry.modality].short}
        </span>
        {entry.firstOfKind ? (
          <span className="font-mono text-[9px] uppercase tracking-widest text-brand-deep">
            ★ Premiere
          </span>
        ) : null}
      </div>
      <p className="mt-1 text-[14px] leading-snug text-ink-soft">
        {entry.firstOfKind || entry.capability}
      </p>
      {entry.sources.length ? (
        <p className="mt-1.5 flex flex-wrap gap-x-3 gap-y-1">
          {entry.sources.map((url) => (
            <a
              key={url}
              href={url}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-[10px] tracking-wide text-ink-faint underline decoration-rule underline-offset-2 hover:text-ink"
            >
              {domainOf(url)} ↗
            </a>
          ))}
        </p>
      ) : null}
    </li>
  );
}

export default function OffenheitPage() {
  const rel = releases(entries);
  // Throws at build time if the hand-written claim no longer matches the data.
  C.verify(rel);

  const open = chronological(rel.filter((e) => e.license === "open"));
  const years = licenseByYear(rel);
  const mods = licenseByModality(rel);
  const policy = orgPolicy(rel);

  const firsts = rel.filter((e) => e.firstOfKind);
  const openFirsts = firsts.filter((e) => e.license === "open");
  const shareOfReleases = (open.length / rel.length) * 100;
  const shareOfFirsts = (openFirsts.length / firsts.length) * 100;

  // The gap is measured over the open releases only, so consecutive here means
  // "the next open one", not "the next release".
  const gap = longestPauses(open, 1)[0];
  const inGap = chronological(
    rel.filter((e) => e.date > gap.before.date && e.date < gap.after.date),
  );
  const gapFirsts = inGap.filter((e) => e.firstOfKind);
  const gapHouses = houseCount(inGap);

  // The pace inside the gap is compared against the year it mostly falls in, so
  // the comparison figure comes from the same source as /tempo rather than a
  // second, hand-typed number.
  const gapYear = cadenceByYear(rel).find((y) => y.year === Number(gap.before.date.slice(0, 4)))!;
  const gapPaceReference = gapYear.meanGap.toFixed(2).replace(".", ",");

  // Houses, not org labels: `house` is a hand-decided key per entry, so this is
  // a count of companies rather than of the credits they published under.
  const houses = policy.onlyOpen.length + policy.onlyClosed.length + policy.mixed.length;
  // All that is left to disclose: credits naming several companies, where the
  // release counts for the lead house only.
  const joint = jointCredits(rel);
  const hiddenHouses = [...new Set(joint.flatMap((j) => j.hidden))];

  const peak = years.reduce((a, b) => (b.openShare > a.openShare ? b : a));
  const trough = years.reduce((a, b) => (b.openShare < a.openShare ? b : a));
  const current = years[years.length - 1];
  const maxShare = Math.max(...years.map((y) => y.openShare));

  // Open by license field, but the weights were not downloadable on the
  // verification date. Resolved to entries so the box can name them with their
  // own date and reason.
  const pending = OPEN_WEIGHTS_PENDING.map(({ id, why }) => ({
    entry: open.find((e) => e.id === id)!,
    why,
  }));
  // Counting strictly moves these releases to the closed side — they happened,
  // they just were not open on that date — so the denominator stays put.
  const pendingThisYear = pending.filter(
    (p) => Number(p.entry.date.slice(0, 4)) === current.year,
  ).length;
  const strictCurrentShare = Math.round(
    ((current.open - pendingThisYear) / current.total) * 100,
  );

  const topOpen = houseCounts(open);
  const singleShot = topOpen.filter(([, n]) => n === 1).length;

  const byYearOpen = new Map<string, Entry[]>();
  for (const e of open) {
    const y = e.date.slice(0, 4);
    byYearOpen.set(y, [...(byYearOpen.get(y) ?? []), e]);
  }

  return (
    <>
      <StructuredData
        json={clusterGraph({
          cluster: C,
          subset: open,
          // The releases this page names one by one: every open release, plus the
          // closed premieres that filled the gap.
          listed: [...open, ...gapFirsts],
          lastVerifiedISO: dataMeta.lastVerifiedISO,
          pageType: "Article",
        })}
      />
      <ClusterShell
        cluster={C}
        kicker="Offenheit · Gewichte"
        lastVerified={dataMeta.lastVerified}
        lede={
          <>
            <p>
              Über offene Modelle gibt es zwei Erzählungen. Die eine sagt, offene
              Gewichte holten unaufhaltsam auf. Die andere sagt, sie seien
              abgehängt. Über {rel.length} primärgeprüfte Releases gemessen ist{" "}
              <strong className="font-semibold text-ink">keine von beiden</strong>{" "}
              richtig: der Anteil offener Gewichte schwankt seit vier Jahren um
              die 30 Prozent, ohne Trend nach oben — und mit einem Einbruch, der
              nicht dort liegt, wo man ihn vermuten würde.
            </p>
            <p className="mt-4">
              {open.length} der {rel.length} Releases kamen mit offenen
              Gewichten, also {Math.round(shareOfReleases)} Prozent. Sie stammen
              von {topOpen.length} verschiedenen Häusern — und liefern einen
              überproportionalen Anteil der belegten Premieren.
            </p>
          </>
        }
      >
        <ClusterSection kicker="Kurve" title="Der Anteil offener Gewichte pro Jahr">
          <p>
            Jede Zeile ist ein Jahr: wie viele Releases offene Gewichte hatten,
            wie viele proprietär blieben, und der Anteil daraus. Ein Trend nach
            oben wäre hier als Treppe zu sehen. Er ist es nicht.
          </p>
          <table className="mt-6 w-full border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-rule">
                <th className="py-2 pr-4 font-mono text-xs uppercase tracking-wider text-ink-faint">
                  Jahr
                </th>
                <th className="py-2 pr-4 text-right font-mono text-xs uppercase tracking-wider text-ink-faint">
                  Offen
                </th>
                <th className="py-2 pr-4 text-right font-mono text-xs uppercase tracking-wider text-ink-faint">
                  Geschlossen
                </th>
                <th className="py-2 pr-4 text-right font-mono text-xs uppercase tracking-wider text-ink-faint">
                  Anteil offen
                </th>
                <th className="py-2 font-mono text-xs uppercase tracking-wider text-ink-faint">
                  <span className="sr-only">Verhältnis</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {years.map((y) => (
                <tr key={y.year} className="border-b border-rule-soft">
                  <td className="py-2 pr-4 text-ink">{y.year}</td>
                  <td className="py-2 pr-4 text-right font-mono text-[13px] text-ink">
                    {y.open}
                  </td>
                  <td className="py-2 pr-4 text-right font-mono text-[13px] text-ink-faint">
                    {y.closed}
                  </td>
                  <td className="py-2 pr-4 text-right font-mono text-[13px] text-ink">
                    {y.openShare} %
                  </td>
                  <td className="py-2">
                    {/* Bar in server HTML, width from the data — no client JS,
                        so the shape survives in reader modes and text extraction. */}
                    <span
                      className="block h-2 rounded-sm"
                      style={{
                        width: `${Math.max(2, (y.openShare / maxShare) * 100)}%`,
                        background: MODALITY_COLOR.text,
                      }}
                      aria-hidden
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-5 text-[14px] leading-relaxed text-ink-faint">
            Höchststand {peak.openShare} Prozent ({peak.year}), Tiefpunkt{" "}
            {trough.openShare} Prozent ({trough.year}), aktuell{" "}
            {current.openShare} Prozent ({current.year}). Der höchste Wert des
            Datensatzes liegt damit drei Jahre zurück. Das Jahr {current.year}{" "}
            ist noch nicht zu Ende — es umfasst bislang die Monate bis Juli.
          </p>
          <div className="mt-5 rounded-xl border border-rule bg-paper-2 p-5">
            <p className="font-mono text-[11px] uppercase tracking-widest text-ink-faint">
              Was in diesen {open.length} mitzählt
            </p>
            <p className="mt-2 text-[14px] leading-relaxed text-ink-soft">
              „Offen“ heißt hier: die Gewichte sind herunterladbar, nicht: die
              Lizenz ist OSI-konform. „Kimi K3 (Open Weights)“ vom 27. Juli 2026
              zählt mit, obwohl seine Lizenz für kommerzielle Nutzung eine eigene
              Vereinbarung verlangt. Bei {pending.length} der {open.length}{" "}
              Releases waren die Gewichte am Verifikationsdatum außerdem noch
              nicht verfügbar:
              {pending.map((p) => (
                <span key={p.entry.id}>
                  {" "}
                  <strong className="font-semibold text-ink">
                    {p.entry.name}
                  </strong>{" "}
                  ({dateLabel(p.entry.date)}) — {p.why}
                </span>
              ))}{" "}
              Wer streng zählt, kommt also auf {open.length - pending.length}{" "}
              statt {open.length}, und {current.year} auf{" "}
              {strictCurrentShare} statt {current.openShare} Prozent. Beide
              Befunde dieser Seite — die flache Kurve und die Lücke — hängen
              nicht daran.
            </p>
          </div>
        </ClusterSection>

        <ClusterSection
          kicker="Die Lücke"
          title={`${gap.days} Tage ohne ein einziges offenes Modell`}
        >
          <p>
            Der auffälligste Befund dieser Seite ist eine Abwesenheit. Zwischen{" "}
            <strong className="font-semibold text-ink">
              {dateLabel(gap.before.date)}
            </strong>{" "}
            und{" "}
            <strong className="font-semibold text-ink">
              {dateLabel(gap.after.date)}
            </strong>{" "}
            liegen {gap.days} Tage, in denen dieser Datensatz keinen einzigen
            Release mit offenen Gewichten verzeichnet. Davor endete die Serie mit{" "}
            {gap.before.name} ({gap.before.org}), danach begann sie neu mit{" "}
            {gap.after.name} ({gap.after.org}).
          </p>
          <p className="mt-4">
            In dem Fenster erschienen {inGap.length} Releases aus {gapHouses}{" "}
            Häusern — {gapFirsts.length} davon mit einem belegten
            Premierenanspruch, und{" "}
            <strong className="font-semibold text-ink">alle proprietär</strong>.
            Ein halbes Jahr lang verschob sich also, was möglich war, und keine
            dieser Verschiebungen war nachbaubar.
          </p>
          <p className="mt-4">
            Ein Teil der Erklärung liegt allerdings nicht bei der Offenheit,
            sondern im allgemeinen Tempo: {inGap.length} Releases in{" "}
            {gap.days} Tagen sind ein Release alle{" "}
            {(gap.days / inGap.length).toFixed(1).replace(".", ",")} Tage — und
            damit <em>langsamer</em> als der Jahresschnitt {trough.year} von{" "}
            {gapPaceReference} Tagen. Dieses Halbjahr war insgesamt still, nicht
            nur auf der offenen Seite. Die Lücke ist also weniger ein Bruch in
            der Offenheit als die offene Seite einer allgemeinen Pause — nur
            dass die geschlossene Seite in derselben Pause noch{" "}
            {gapFirsts.length} Premieren lieferte und die offene keine.
          </p>

          <div className="mt-6 rounded-xl border border-rule bg-paper-2 p-5">
            <p className="font-mono text-[11px] uppercase tracking-widest text-ink-faint">
              Wichtige Einschränkung
            </p>
            <p className="mt-2 text-[14px] leading-relaxed text-ink-soft">
              „Kein offener Release“ heißt hier: keiner, der die
              Aufnahmeschwelle dieses Datensatzes erreicht — also eine Fähigkeit
              brachte, die vorher kein öffentlich verfügbares Modell hatte. In
              diesem Halbjahr wurden sehr wohl offene Gewichte veröffentlicht,
              darunter Punktversionen und Feintunings etablierter Familien. Die
              Aussage ist also nicht „es gab nichts Offenes“, sondern: es gab
              nichts Offenes, das den Stand der Technik verschoben hätte. Wer die
              Zahl zitiert, sollte diesen Unterschied mitzitieren.
            </p>
          </div>

          <p className="mt-6 font-mono text-xs uppercase tracking-wider text-ink-faint">
            Die {gapFirsts.length} Premieren in der Lücke — alle proprietär
          </p>
          <ol className="mt-3 space-y-1">
            {gapFirsts.map((e) => (
              <ReleaseRow key={e.id} entry={e} tone="closed" />
            ))}
          </ol>
        </ClusterSection>

        <ClusterSection
          kicker="Gegen die Erwartung"
          title="Offene Modelle sind nicht die billige Kopie"
        >
          <p>
            Wenn offene Gewichte hinterherliefen, müssten sie unter den
            Premieren unterrepräsentiert sein: erst macht ein Frontier-Labor
            etwas möglich, dann zieht die offene Welt nach. Die Daten zeigen das
            Gegenteil. Offene Modelle stellen{" "}
            {shareOfReleases.toFixed(1).replace(".", ",")} Prozent der Releases,
            aber {shareOfFirsts.toFixed(1).replace(".", ",")} Prozent der
            belegten Premieren —{" "}
            {openFirsts.length} von {firsts.length}. Das sind{" "}
            {(shareOfFirsts - shareOfReleases).toFixed(1).replace(".", ",")}{" "}
            Prozentpunkte mehr, als ihr Mengenanteil erwarten ließe.
          </p>
          <p className="mt-4">
            {/* No soft hyphen in long compounds: this page is built to be
                extracted as plain text, where U+00AD survives as a stray gap. */}
            Die Lesart, die dazu passt: offene Veröffentlichung ist in diesem
            Datensatz keine Nachhut-Strategie, sondern eine
            Markteintrittsstrategie. Ein Haus ohne Vertriebsapparat und ohne bestehende
            Nutzerbasis kann Aufmerksamkeit am billigsten erzeugen, indem es
            etwas herausgibt, das andere weiterverwenden können. Wer schon
            verteilt, hat diesen Anreiz nicht. Prüfbar ist daran nur die Zahl —
            die Begründung ist eine Deutung.
          </p>
          <p className="mt-4">
            Welche Premieren das im Einzelnen sind, mit Datum und Quelle, steht{" "}
            <a
              href="/erstmalig"
              className="text-brand-deep underline decoration-2 underline-offset-4"
            >
              auf der Seite über die belegten Premieren
            </a>
            .
          </p>
        </ClusterSection>

        <ClusterSection kicker="Hauspolitik" title="Offenheit ist selten eine Entscheidung pro Modell">
          <p>
            Über Häuser gezählt statt über Releases ergibt sich ein klareres
            Bild. Von {houses} Häusern im Datensatz veröffentlichten{" "}
            {policy.onlyOpen.length} ausschließlich offen,{" "}
            {policy.onlyClosed.length} ausschließlich geschlossen — und nur{" "}
            {policy.mixed.length} taten beides. Für die große Mehrheit ist
            Offenheit also keine Abwägung pro Release, sondern eine Festlegung
            des Hauses.
          </p>
          <div className="mt-5 rounded-xl border border-rule bg-paper-2 p-5">
            <p className="font-mono text-[11px] uppercase tracking-widest text-ink-faint">
              Wie hier ein „Haus“ gezählt wird
            </p>
            <p className="mt-2 text-[14px] leading-relaxed text-ink-soft">
              Jeder Eintrag trägt zwei Felder: die Urhebernennung, wie sie in
              der Primärquelle steht („Alibaba (Qwen)“, „Google DeepMind“), und
              daneben das Haus als eigener, von Hand gesetzter Schlüssel. Gezählt
              wird ausschließlich das Haus, also die Firma — Teams, Divisionen
              und Schreibvarianten desselben Unternehmens fallen zusammen.
            </p>
            <p className="mt-3 text-[14px] leading-relaxed text-ink-soft">
              Eine Unschärfe bleibt, und sie ist nicht auflösbar:{" "}
              {joint.length} Nennungen kreditieren mehrere Firmen gemeinsam.
              Dort zählt der Release beim federführenden Haus, also bei dem, das
              ihn veröffentlicht hat —{" "}
              {joint
                .map((j) => `„${j.org}“ bei ${j.lead}`)
                .join("; ")}
              . {hiddenHouses.length} mitkreditierte Häuser kommen unter keiner
              anderen Nennung vor und erscheinen deshalb in dieser Zählung
              überhaupt nicht: {hiddenHouses.join(", ")}. Die Zahl {houses} ist
              damit um bis zu {hiddenHouses.length} zu niedrig, nicht zu hoch.
            </p>
          </div>
          <p className="mt-4">
            Praktisch heißt das: die Frage „wird dieses Modell offen kommen?“
            ist meist schon beantwortet, bevor das Modell existiert. Die{" "}
            {policy.mixed.length} gemischten Häuser sind die interessanten —
            dort ist die Lizenz tatsächlich eine Entscheidung:{" "}
            {policy.mixed.join(", ")}.
          </p>
          <p className="mt-4">
            Gleichzeitig ist die offene Seite weniger konzentriert als erwartet.
            Die {open.length} offenen Releases verteilen sich auf{" "}
            {topOpen.length} Häuser, von denen {singleShot} genau eines
            beigetragen haben. Die drei produktivsten —{" "}
            {topOpen
              .slice(0, 3)
              .map(([org, n]) => `${org} (${n})`)
              .join(", ")}{" "}
            — stellen zusammen nur{" "}
            {Math.round(
              (topOpen.slice(0, 3).reduce((s, [, n]) => s + n, 0) / open.length) * 100,
            )}{" "}
            Prozent. Die geschlossene Seite ist das Gegenteil: dort dominieren
            wenige Häuser mit zweistelligen Release-Zahlen.
          </p>
        </ClusterSection>

        <ClusterSection kicker="Modalitäten" title="Wo offen überhaupt vorkommt">
          <p>
            Der Gesamtanteil verdeckt, wie unterschiedlich die vier Modalitäten
            sind.
          </p>
          <table className="mt-6 w-full border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-rule">
                <th className="py-2 pr-4 font-mono text-xs uppercase tracking-wider text-ink-faint">
                  Modalität
                </th>
                <th className="py-2 pr-4 text-right font-mono text-xs uppercase tracking-wider text-ink-faint">
                  Offen
                </th>
                <th className="py-2 pr-4 text-right font-mono text-xs uppercase tracking-wider text-ink-faint">
                  Gesamt
                </th>
                <th className="py-2 pr-4 text-right font-mono text-xs uppercase tracking-wider text-ink-faint">
                  Anteil
                </th>
                <th className="py-2 font-mono text-xs uppercase tracking-wider text-ink-faint">
                  <span className="sr-only">Verhältnis</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {mods.map((m) => (
                <tr key={m.modality} className="border-b border-rule-soft">
                  <td className="py-2 pr-4">
                    <span
                      className="rounded-full px-2 py-[2px] font-mono text-[10px] uppercase tracking-widest"
                      style={{
                        background: modalityTint(m.modality, 0.16),
                        color: MODALITY_COLOR[m.modality],
                      }}
                    >
                      {MODALITY_META[m.modality].short}
                    </span>
                  </td>
                  <td className="py-2 pr-4 text-right font-mono text-[13px] text-ink">
                    {m.open}
                  </td>
                  <td className="py-2 pr-4 text-right font-mono text-[13px] text-ink-faint">
                    {m.total}
                  </td>
                  <td className="py-2 pr-4 text-right font-mono text-[13px] text-ink">
                    {m.openShare} %
                  </td>
                  <td className="py-2">
                    <span
                      className="block h-2 rounded-sm"
                      style={{
                        width: `${Math.max(2, (m.openShare / mods[0].openShare) * 100)}%`,
                        background: MODALITY_COLOR[m.modality],
                      }}
                      aria-hidden
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-5 text-[14px] leading-relaxed text-ink-soft">
            {MODALITY_META[mods[0].modality].label} ist mit{" "}
            {mods[0].openShare} Prozent die offenste Modalität,{" "}
            {MODALITY_META[mods[mods.length - 1].modality].label} mit{" "}
            {mods[mods.length - 1].openShare} Prozent die geschlossenste. Der
            plausible Grund ist nicht Ideologie, sondern Kostenstruktur: Text
            lässt sich auf einer Consumer-GPU sinnvoll weiterverwenden, ein
            Videomodell nicht. Offene Gewichte, die niemand betreiben kann,
            erzeugen keine Gegenleistung — und damit fällt der Anreiz weg, sie
            herauszugeben.
          </p>
        </ClusterSection>

        {[...byYearOpen.entries()].map(([year, list]) => (
          <ClusterSection
            key={year}
            kicker={`${year} · ${list.length} offene Releases`}
            title={`Offene Gewichte ${year}`}
          >
            <ol className="space-y-1">
              {list.map((e) => (
                <ReleaseRow key={e.id} entry={e} tone="open" />
              ))}
            </ol>
          </ClusterSection>
        ))}

        <ClusterSection kicker="Lesart" title="Was aus einer flachen Kurve folgt">
          <p>
            Die verbreitete Planungsannahme lautet: was heute nur proprietär
            verfügbar ist, gibt es in achtzehn Monaten offen — also lohnt es,
            zu warten. Dieser Datensatz stützt das nicht. Der Anteil offener
            Gewichte ist über vier Jahre nicht gestiegen, und es gab ein halbes
            Jahr, in dem er auf null fiel, während zwölf proprietäre Premieren
            erschienen. Wer 2025 auf die offene Variante gewartet hat, hat sechs
            Monate gewartet und nichts bekommen.
          </p>
          <p className="mt-4">
            Umgekehrt taugt die Zahl auch nicht als Abgesang. {open.length}{" "}
            offene Releases von {topOpen.length} Häusern sind keine
            Nischenerscheinung, und der überproportionale Anteil an den
            Premieren zeigt, dass dort echte Erstleistungen entstehen, nicht nur
            Nachbauten. Die Kurve ist flach, nicht fallend — und im laufenden
            Jahr liegt sie mit {current.openShare} Prozent wieder über dem
            Tiefpunkt von {trough.openShare}.
          </p>
          <p className="mt-4">
            Die praktische Konsequenz ist unbequem, weil sie beide Lager
            enttäuscht: Offenheit ist kein Fahrplan, auf den man eine
            Beschaffungsentscheidung setzen kann. Sie ist eine Eigenschaft, die
            manche Häuser haben und andere nicht, und die sich pro Halbjahr
            spürbar ändern kann. Wer offene Gewichte braucht — aus
            Datenschutzgründen, wegen Betrieb im eigenen Rechenzentrum, wegen
            Abhängigkeitsrisiko —, sollte nach Häusern auswählen, nicht nach
            Zeitpunkten. Und wer sie nicht braucht, sollte die Lizenzfrage nicht
            zur Weltanschauung machen: in{" "}
            {Math.round(100 - shareOfReleases)} Prozent der Fälle stellt sie
            sich ohnehin nicht.
          </p>
          <p className="mt-4">
            Wie sich das Tempo im gleichen Zeitraum entwickelt hat — inklusive
            der Verlangsamung, in die diese Lücke fällt — steht{" "}
            <a
              href="/tempo"
              className="text-brand-deep underline decoration-2 underline-offset-4"
            >
              auf der Seite über die Kadenz
            </a>
            .
          </p>
        </ClusterSection>
      </ClusterShell>
    </>
  );
}
