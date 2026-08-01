import type { Metadata } from "next";
import type { Entry } from "@/data/types";
import { MODALITY_META } from "@/data/types";
import { dataMeta, entries } from "@/data/timeline";
import { ClusterSection, ClusterShell } from "@/components/ClusterShell";
import { StructuredData } from "@/components/StructuredData";
import { chronological, cluster, firstsByModality, releases } from "@/lib/clusters";
import { domainOf } from "@/lib/metrics";
import { clusterGraph } from "@/lib/schema";
import { MODALITY_COLOR, modalityTint } from "@/lib/ui";

const C = cluster("/erstmalig");

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
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
  timeZone: "UTC",
});

function dateLabel(iso: string): string {
  return iso.length === 7
    ? new Intl.DateTimeFormat("de-DE", { month: "2-digit", year: "numeric", timeZone: "UTC" })
        .format(new Date(`${iso}-01T00:00:00Z`))
    : DE_DATE.format(new Date(`${iso}T00:00:00Z`));
}

/** One documented first: the claim is the headline, the date and source carry it. */
function FirstRow({ entry }: { entry: Entry }) {
  const color = MODALITY_COLOR[entry.modality];
  return (
    <li
      id={entry.id}
      className="scroll-mt-8 border-l-2 py-3 pl-4"
      style={{ borderColor: color }}
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
          style={
            entry.license === "open"
              ? { background: color, color: "var(--paper)" }
              : { border: `1px solid ${color}`, color }
          }
        >
          {entry.license === "open" ? "Offen" : "Geschlossen"}
        </span>
        {entry.disputed ? (
          <a
            href="#strittig"
            className="font-mono text-[9px] uppercase tracking-widest text-video underline decoration-1 underline-offset-2"
          >
            ⚠ strittig
          </a>
        ) : null}
      </div>
      <p
        className="mt-1.5 text-[15px] leading-snug"
        style={{ color: "var(--ink)" }}
      >
        {entry.firstOfKind}
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

export default function ErstmaligPage() {
  const rel = releases(entries);
  // Throws at build time if the hand-written claim no longer matches the data.
  C.verify(rel);
  const groups = firstsByModality(rel);
  const firsts = chronological(rel).filter((e) => e.firstOfKind);
  const disputed = firsts.filter((e) => e.disputed);
  const open = firsts.filter((e) => e.license === "open");
  const sourced = firsts.filter((e) => e.sources.length > 0);

  const countByYear = (list: Entry[]) =>
    list.reduce<Record<string, number>>((acc, e) => {
      const y = e.date.slice(0, 4);
      acc[y] = (acc[y] ?? 0) + 1;
      return acc;
    }, {});
  const byYear = countByYear(firsts);
  const relByYear = countByYear(rel);

  return (
    <>
      <StructuredData
        json={clusterGraph({
          cluster: C,
          subset: firsts,
          listed: firsts,
          lastVerifiedISO: dataMeta.lastVerifiedISO,
          pageType: "CollectionPage",
        })}
      />
      <ClusterShell
        cluster={C}
        kicker="Erstmalig · Premieren"
        lastVerified={dataMeta.lastVerified}
        lede={
          <>
            <p>
              „Erster“ ist die am häufigsten behauptete und am seltensten
              geprüfte Aussage der KI-Branche. Jede Pressemitteilung enthält
              eine; fast keine nennt, gegen welchen Stand sie gemessen wurde.
              Diese Seite hält {firsts.length} solcher Ansprüche fest — mit
              Datum, Labor und Link, und mit einer offenen Kennzeichnung dort, wo
              der Anspruch nicht hält.
            </p>
            <p className="mt-4">
              {sourced.length === firsts.length
                ? `Alle ${firsts.length}`
                : `${sourced.length} von ${firsts.length}`}{" "}
              haben mindestens eine Primärquelle. {open.length} kamen mit
              offenen Gewichten, {disputed.length} sind als strittig markiert —
              inklusive Begründung, warum.
            </p>
          </>
        }
      >
        <ClusterSection kicker="Definition" title="Was hier als „Erster“ zählt">
          <p>
            Aufgenommen wird ein Anspruch nur, wenn eine{" "}
            <strong className="font-semibold text-ink">Fähigkeit</strong> zum
            ersten Mal öffentlich verfügbar war — nicht, wenn eine Zahl auf einem
            Benchmark zum ersten Mal erreicht wurde. Ein Modell, das etwas
            besser kann, ist kein Erster. Ein Modell, das etwas kann, was
            vorher kein öffentlich zugängliches Modell konnte, ist einer.
          </p>
          <p className="mt-4">
            „Öffentlich verfügbar“ ist dabei die härtere Hürde als
            „angekündigt“. Ein Forschungspapier ohne Zugang begründet keinen
            Ersten in diesem Datensatz; eine Wartelisten-Demo, die nachweislich
            Nutzer erreichte, schon. Deshalb steht bei Text nicht GPT-3, sondern
            InstructGPT am Anfang: die Fähigkeit, Anweisungen zuverlässig zu
            folgen, war die Neuerung, die alles Weitere trug.
          </p>
          <p className="mt-4">
            Und: Ein Anspruch gilt nur so weit, wie er belegbar ist. Wo eine
            ursprüngliche Formulierung zu weit ging, wurde sie abgeschwächt
            statt gelöscht — und der Eintrag als strittig markiert. Diese Fälle
            stehen{" "}
            <a
              href="#strittig"
              className="text-brand-deep underline decoration-2 underline-offset-4"
            >
              weiter unten, einzeln begründet
            </a>
            .
          </p>
        </ClusterSection>

        <ClusterSection kicker="Verteilung" title="Wo die Premieren liegen">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-rule">
                <th className="py-2 pr-4 font-mono text-xs uppercase tracking-wider text-ink-faint">
                  Modalität
                </th>
                <th className="py-2 pr-4 text-right font-mono text-xs uppercase tracking-wider text-ink-faint">
                  Premieren
                </th>
                <th className="py-2 pr-4 font-mono text-xs uppercase tracking-wider text-ink-faint">
                  Erste
                </th>
                <th className="py-2 font-mono text-xs uppercase tracking-wider text-ink-faint">
                  Jüngste
                </th>
              </tr>
            </thead>
            <tbody>
              {groups.map((g) => {
                const list = g.entries;
                return (
                  <tr key={g.modality} className="border-b border-rule-soft">
                    <td className="py-2 pr-4">
                      <span
                        className="rounded-full px-2 py-[2px] font-mono text-[10px] uppercase tracking-widest"
                        style={{
                          background: modalityTint(g.modality, 0.16),
                          color: MODALITY_COLOR[g.modality],
                        }}
                      >
                        {MODALITY_META[g.modality].short}
                      </span>
                    </td>
                    <td className="py-2 pr-4 text-right font-mono text-[13px] text-ink">
                      {list.length}
                    </td>
                    <td className="py-2 pr-4 text-[13px] text-ink-soft">
                      {list[0].name}{" "}
                      <span className="font-mono text-[11px] text-ink-faint">
                        {dateLabel(list[0].date)}
                      </span>
                    </td>
                    <td className="py-2 text-[13px] text-ink-soft">
                      {list[list.length - 1].name}{" "}
                      <span className="font-mono text-[11px] text-ink-faint">
                        {dateLabel(list[list.length - 1].date)}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <p className="mt-5 text-[14px] leading-relaxed text-ink-soft">
            Pro Jahr:{" "}
            {Object.entries(byYear)
              .map(([y, n]) => `${y} → ${n}`)
              .join(", ")}
            . Bemerkenswert ist, dass die Zahl der Premieren seit 2023 kaum
            steigt, während die Zahl der Releases sich vervielfacht hat. 2023
            kamen {byYear["2023"]} Premieren auf {relByYear["2023"]} Releases,
            2026 sind es {byYear["2026"]} auf {relByYear["2026"]}. Es erscheint
            also nicht mehr Neues — es
            erscheint dasselbe Neue häufiger und von mehr Häusern.
          </p>
        </ClusterSection>

        {groups.map((g) => (
          <ClusterSection
            key={g.modality}
            kicker={`${MODALITY_META[g.modality].short} · ${g.entries.length} Premieren`}
            title={`Erstmalig in ${MODALITY_META[g.modality].label}`}
          >
            <ol className="space-y-1">
              {g.entries.map((e) => (
                <FirstRow key={e.id} entry={e} />
              ))}
            </ol>
          </ClusterSection>
        ))}

        <section id="strittig" className="mt-14 scroll-mt-8 border-t border-rule pt-8">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-ink-faint">
            Strittig · {disputed.length} Fälle
          </p>
          <h2 className="font-display mt-2 text-2xl font-bold tracking-tight md:text-3xl">
            Ansprüche, die nicht ganz halten
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
            Diese {disputed.length} Einträge tragen einen First-of-Kind-Anspruch,
            der sich bei der Prüfung nicht in seiner ursprünglichen Fassung
            bestätigen ließ — meist, weil ein anderes Release vorher da war oder
            weil eine Zahl aus der Berichterstattung, nicht aus der Primärquelle
            stammte. Der Anspruch wurde dann abgeschwächt und der Eintrag
            markiert. Der Prüfvermerk steht hier ungekürzt: Das ist der
            unbequeme Teil eines kuratierten Datensatzes und gehört öffentlich
            hin, nicht in eine interne Notiz.
          </p>
          <ul className="mt-6 space-y-6">
            {disputed.map((e) => (
              <li key={e.id} className="border-l-2 border-video pl-4">
                <p className="font-mono text-[11px] tracking-wide text-ink-faint">
                  {dateLabel(e.date)} · {e.org}
                </p>
                <p className="font-display mt-1 text-xl font-bold leading-tight text-ink">
                  {e.name}
                </p>
                <p className="mt-1.5 text-[15px] leading-snug text-ink">
                  Anspruch (korrigiert): {e.firstOfKind}
                </p>
                {e.verificationNote ? (
                  <p className="mt-2 text-[14px] leading-relaxed text-ink-soft">
                    {e.verificationNote}
                  </p>
                ) : null}
                {e.sources.length ? (
                  <p className="mt-2 flex flex-wrap gap-x-3">
                    {e.sources.map((url) => (
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
            ))}
          </ul>
        </section>

        <ClusterSection kicker="Lesart" title="Warum Premieren mehr sagen als Releases">
          <p>
            Ein Release beantwortet die Frage „wurde etwas veröffentlicht?“. Eine
            Premiere beantwortet die Frage „hat sich verschoben, was überhaupt
            möglich ist?“. Für Planung zählt die zweite: Wer eine Fähigkeit
            einsetzen will, die es noch nicht gibt, wartet — wer eine einsetzen
            will, die seit zwei Jahren existiert und inzwischen von sechs
            Anbietern kommt, verhandelt Preise.
          </p>
          <p className="mt-4">
            Die Verteilung über die vier Modalitäten sagt dabei etwas, das die
            Gesamtzahl verdeckt. Text hat mit {groups.find((g) => g.modality === "text")?.entries.length}{" "}
            Premieren die meisten, aber Audio und Video liegen mit{" "}
            {groups.find((g) => g.modality === "audio")?.entries.length} und{" "}
            {groups.find((g) => g.modality === "video")?.entries.length} nah
            dahinter — und in Bild sind es nur{" "}
            {groups.find((g) => g.modality === "image")?.entries.length}. Bild
            ist die Modalität, in der am meisten veröffentlicht und am wenigsten
            erstmalig geschafft wird: Der Sprung von „unbrauchbar“ auf
            „einsetzbar“ lag hier früh, danach folgte Qualität, nicht Fähigkeit.
          </p>
          <p className="mt-4">
            Zweite Beobachtung: {open.length} der {firsts.length} Premieren kamen
            mit offenen Gewichten. Offene Modelle sind in diesem Datensatz also
            nicht bloß die günstigere Kopie des Frontiers — sie haben rund ein
            Drittel der dokumentierten Erstmaligkeiten selbst geliefert. Wie sich
            dieser Anteil über die Jahre entwickelt hat, ist eine eigene
            Geschichte, und keine, die sich in Richtung „offen gewinnt“ bewegt.
          </p>
          <p className="mt-4">
            Wer diese Liste als Rangliste liest, liest sie falsch. Sie ist ein
            Protokoll: Diese Fähigkeit war an diesem Tag zum ersten Mal
            erreichbar, und hier steht der Beleg. Alles andere — ob es wichtig
            war, ob es hielt, ob es sich durchsetzte — steht nicht darin.
          </p>
        </ClusterSection>
      </ClusterShell>
    </>
  );
}
