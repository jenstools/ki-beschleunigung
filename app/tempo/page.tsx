import type { Metadata } from "next";
import { dataMeta, entries } from "@/data/timeline";
import { ClusterSection, ClusterShell } from "@/components/ClusterShell";
import { StructuredData } from "@/components/StructuredData";
import {
  cadenceByHalfYear,
  cadenceByYear,
  chronological,
  cluster,
  densestWeeks,
  houseCount,
  longestPauses,
  releases,
} from "@/lib/clusters";
import { clusterGraph } from "@/lib/schema";
import { MODALITY_COLOR } from "@/lib/ui";

const C = cluster("/tempo");

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

/** German decimals use a comma. */
function num(n: number, digits = 1): string {
  return n.toFixed(digits).replace(".", ",");
}

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

export default function TempoPage() {
  const rel = releases(entries);
  // Throws at build time if the hand-written claim no longer matches the data.
  C.verify(rel);
  const halves = cadenceByHalfYear(rel);
  const years = cadenceByYear(rel);
  const pauses = longestPauses(rel, 6);
  const weeks = densestWeeks(rel, 5);
  const sorted = chronological(rel);

  const slowest = Math.max(...halves.map((h) => h.meanGap));
  const first = halves[0];
  const last = halves[halves.length - 1];
  const byYear = new Map(years.map((y) => [y.year, y]));
  const y2024 = byYear.get(2024)!;
  const y2025 = byYear.get(2025)!;
  const pausesIn2022 = pauses.filter((p) => p.after.date < "2023").length;
  const pausesLate = pauses.filter((p) => p.after.date >= "2025-10-01").length;

  return (
    <>
      <StructuredData
        json={clusterGraph({
          cluster: C,
          subset: rel,
          // The releases this page actually names: the ones that ended the long
          // pauses, plus every release in the densest week.
          listed: [...pauses.map((p) => p.after), ...weeks[0].entries],
          lastVerifiedISO: dataMeta.lastVerifiedISO,
          pageType: "Article",
        })}
      />
      <ClusterShell
        cluster={C}
        kicker="Tempo · Halbjahre"
        lastVerified={dataMeta.lastVerified}
        lede={
          <>
            <p>
              Die verbreitete Frage ist „wie viele KI-Modelle gibt es
              inzwischen?“. Das ist die falsche Zahl. Interessant ist der{" "}
              <strong className="font-semibold text-ink">Abstand</strong>: wie
              viel Zeit zwischen zwei Releases lag, die wirklich etwas Neues
              konnten. Denn dieser Abstand ist das, was Teams als Druck
              erleben — er bestimmt, wie lange eine Entscheidung über einen
              Tool-Stack hält.
            </p>
            <p className="mt-4">
              Gemessen über {sorted.length} primärgeprüfte Releases von{" "}
              {dateLabel(sorted[0].date)} bis {dateLabel(sorted[sorted.length - 1].date)}{" "}
              ist der mittlere Abstand im Jahresschnitt von{" "}
              {num(years[0].meanGap)} auf{" "}
              {num(years[years.length - 1].meanGap)} Tage gefallen — und im
              laufenden Halbjahr auf {num(last.meanGap, 2)}.
            </p>
          </>
        }
      >
        <ClusterSection
          kicker="Kadenz"
          title="Mittlerer Abstand pro Halbjahr"
        >
          <p>
            Jede Zeile ist ein Halbjahr: wie viele Releases es gab und wie viele
            Tage im Mittel zwischen zwei aufeinanderfolgenden lagen. Kürzer ist
            schneller.
          </p>
          <table className="mt-6 w-full border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-rule">
                <th className="py-2 pr-4 font-mono text-xs uppercase tracking-wider text-ink-faint">
                  Halbjahr
                </th>
                <th className="py-2 pr-4 text-right font-mono text-xs uppercase tracking-wider text-ink-faint">
                  Releases
                </th>
                <th className="py-2 pr-4 text-right font-mono text-xs uppercase tracking-wider text-ink-faint">
                  Ø Abstand
                </th>
                <th className="py-2 font-mono text-xs uppercase tracking-wider text-ink-faint">
                  <span className="sr-only">Verhältnis</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {halves.map((h) => (
                <tr key={h.key} className="border-b border-rule-soft">
                  <td className="whitespace-nowrap py-2 pr-4 text-ink">
                    {h.label}
                  </td>
                  <td className="py-2 pr-4 text-right font-mono text-[13px] text-ink">
                    {h.count}
                  </td>
                  <td className="whitespace-nowrap py-2 pr-4 text-right font-mono text-[13px] text-ink">
                    {/* Under two days a single decimal starts rounding away the
                        difference between consecutive half-years, which is the
                        whole point of the table at this end of the range. */}
                    {num(h.meanGap, h.meanGap < 2 ? 2 : 1)} Tage
                  </td>
                  <td className="py-2">
                    {/* Bar in server HTML, width from the data — no client JS,
                        so the shape survives in reader modes and text extraction. */}
                    <span
                      className="block h-2 rounded-sm"
                      style={{
                        width: `${Math.max(2, (h.meanGap / slowest) * 100)}%`,
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
            Zwei Einschränkungen, die zu dieser Tabelle gehören: Der Wert für das
            1. Halbjahr 2022 beruht auf {first.count} einzigen Abstand und ist
            damit kein belastbarer Durchschnitt. Und das 2. Halbjahr 2026 ist
            noch nicht zu Ende; es umfasst bislang nur Juli und die ersten
            Augusttage. Robuster ist der
            Blick auf ganze
            Jahre:{" "}
            {years
              .map((y) => `${num(y.meanGap)} Tage (${y.year})`)
              .join(", ")}
            . Auch dort bleibt der Trend eindeutig — nur {y2025.year} fällt aus
            der Reihe.
          </p>
        </ClusterSection>

        <ClusterSection
          kicker="Gegenbewegung"
          title={`${y2025.year} war langsamer als ${y2024.year}`}
        >
          <p>
            Der interessanteste Wert der Tabelle ist keine Rekordzahl, sondern
            eine Ausnahme: {y2024.year} lag der mittlere Abstand bei{" "}
            {num(y2024.meanGap)} Tagen, {y2025.year} bei {num(y2025.meanGap)}.
            Ein Jahr lang wurde die Kadenz also <em>langsamer</em>. Wer nur die
            Gesamtkurve zeigt, verkauft eine glatte Exponentialgeschichte, die
            die Daten nicht hergeben.
          </p>
          <p className="mt-4">
            Die plausibelste Lesart: 2025 verschob sich der Wettbewerb von
            „neues Modell“ auf „gleiches Modell, mehr Reasoning-Zeit und
            Werkzeuge“ — Arbeit, die nicht als Release sichtbar wird, weil sie
            kein neues Datum erzeugt. 2026 kippt es zurück, und zwar heftig: die
            Kadenz von {num(last.meanGap, 2)} Tagen im laufenden Halbjahr
            bedeutet, dass an den
            meisten Tagen etwas erscheint und an vielen Tagen mehrere Dinge.
            Diese Erklärung steckt nicht im Datensatz — sie ist eine Deutung.
            Prüfbar ist nur die Zahl.
          </p>
        </ClusterSection>

        <ClusterSection kicker="Pausen" title="Die längsten Stillstände">
          <p>
            Das Gegenstück zur Kadenz: Zeiträume, in denen dieser Datensatz
            keinen einzigen fähigkeitsverändernden Release verzeichnet.{" "}
            {pausesIn2022} der {pauses.length} längsten liegen in 2022 — aber{" "}
            {pausesLate} liegen im Spätherbst 2025 und über den Jahreswechsel.
            Ruhe verschwindet also nicht linear; sie tritt bis heute auf, nur
            kürzer und meist unmittelbar vor einem großen Release.
          </p>
          <ul className="mt-6 space-y-4">
            {pauses.map((p) => (
              <li
                key={`${p.before.id}-${p.after.id}`}
                className="border-l-2 border-rule pl-4"
              >
                <p className="font-display text-xl font-bold text-ink">
                  {p.days} Tage
                </p>
                <p className="mt-1 text-[14px] leading-snug text-ink-soft">
                  {dateLabel(p.before.date)} — {dateLabel(p.after.date)}
                </p>
                <p className="mt-1 text-[14px] leading-snug text-ink-soft">
                  Beendet von{" "}
                  <strong className="font-semibold text-ink">
                    {p.after.name}
                  </strong>{" "}
                  ({p.after.org})
                  {p.after.sources[0] ? (
                    <>
                      {" · "}
                      <a
                        href={p.after.sources[0]}
                        target="_blank"
                        rel="noreferrer"
                        className="text-brand-deep underline decoration-1 underline-offset-2"
                      >
                        Quelle ↗
                      </a>
                    </>
                  ) : null}
                </p>
              </li>
            ))}
          </ul>
        </ClusterSection>

        <ClusterSection kicker="Spitzen" title="Die dichtesten Wochen">
          <p>
            Rollierendes 7-Tage-Fenster über alle tagesgenauen Releases. Die
            dichteste Woche des Datensatzes brachte{" "}
            {weeks[0].entries.length} fähigkeitsverändernde Releases aus{" "}
            {houseCount(weeks[0].entries)} Häusern — in sieben
            Tagen fast so viele wie im gesamten Jahr 2022 (
            {rel.filter((e) => e.date < "2023").length}).
          </p>
          <ol className="mt-6 space-y-6">
            {weeks.map((w) => (
              <li key={w.start}>
                <p className="font-mono text-xs uppercase tracking-wider text-ink-faint">
                  {dateLabel(w.start)} — {dateLabel(w.end)}
                </p>
                <p className="font-display mt-1 text-xl font-bold text-ink">
                  {w.entries.length} Releases
                </p>
                <ul className="mt-2 flex flex-wrap gap-x-2 gap-y-1 text-[13px] leading-snug text-ink-soft">
                  {w.entries.map((e, i) => (
                    <li key={e.id}>
                      <span className="text-ink">{e.name}</span>{" "}
                      <span className="text-ink-faint">({e.org})</span>
                      {i < w.entries.length - 1 ? " ·" : ""}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
          <p className="mt-5 text-[14px] leading-relaxed text-ink-faint">
            Ein Release mit nur monatsgenauem Datum ist hier ausgenommen: es
            lässt sich keiner Woche zuordnen, ohne einen Tag zu erfinden.
          </p>
        </ClusterSection>

        <ClusterSection kicker="Konsequenz" title="Was ein Abstand von drei Tagen praktisch bedeutet">
          <p>
            Bei {num(years[0].meanGap)} Tagen Abstand konnte ein Team ein Modell
            evaluieren, eine Entscheidung treffen und sie umsetzen, bevor die
            nächste Option auf dem Tisch lag. Bei{" "}
            {num(years[years.length - 1].meanGap)} Tagen ist die Evaluierung
            selbst der Engpass: Wer sechs Wochen für einen Auswahlprozess
            braucht, entscheidet über ein Feld, in dem in dieser Zeit rund{" "}
            {Math.round(42 / years[years.length - 1].meanGap)} neue Releases
            erschienen sind.
          </p>
          <p className="mt-4">
            Daraus folgt nicht, schneller zu evaluieren. Es folgt, seltener zu
            evaluieren und dafür austauschbar zu bauen: Wenn der Modellwechsel
            eine Konfigurationsänderung ist und nicht ein Projekt, verliert die
            Kadenz ihren Schrecken. Die Organisationen, die 2026 ruhig wirken,
            sind selten die, die alles mitverfolgen — es sind die, deren
            Architektur den Wechsel billig macht.
          </p>
          <p className="mt-4">
            Und ein zweiter, unbequemerer Punkt: Ein kürzerer Abstand ist kein
            Maß für Fortschritt. Diese Seite zählt Releases, die etwas
            Neues konnten — nicht, wie groß der Sprung war. 13 Releases in einer
            Woche können ein Feld bedeuten, das in alle Richtungen aufbricht,
            oder eines, in dem viele Häuser gleichzeitig dieselbe kleine Stufe
            nehmen. Die Kadenz sagt, wie oft sich etwas bewegt. Wie weit, steht{" "}
            <a
              href="/erstmalig"
              className="text-brand-deep underline decoration-2 underline-offset-4"
            >
              auf der Seite über die belegten Premieren
            </a>
            .
          </p>
        </ClusterSection>
      </ClusterShell>
    </>
  );
}
