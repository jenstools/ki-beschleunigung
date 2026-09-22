/**
 * data/SOURCES.md, generated from the dataset.
 *
 *   npm run sources              write data/SOURCES.md
 *   npm run sources -- --check   verify only; runs before `next build`
 *
 * Every number in that document used to be typed by hand, and by September 2026
 * all of them had drifted: it claimed 105 releases and a June 2026 cutoff for a
 * dataset holding 278 through 15 September, and its disputed table listed 10 of
 * 20 flagged entries. Nothing in the app reads the file, so nothing caught it —
 * the same failure mode `Cluster.verify()` exists to prevent on the pages that
 * do get read.
 *
 * So the counts are derived and the prose lives here as a template. Editing the
 * markdown directly is a dead end: `--check` fails the build on any difference,
 * and the next `npm run sources` overwrites it. Change this file instead.
 *
 * Run with plain node (`node scripts/sources.ts`): node 22 strips the types, and
 * both imports are dependency-free modules.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { entries, dataMeta } from "../data/timeline.ts";
import type { Entry, Modality } from "../data/types.ts";
import { providerCountry, providerRegion, JOINT_CREDITS } from "../lib/providers.ts";

const OUT_FILE = join(import.meta.dirname, "..", "data", "SOURCES.md");

const MODALITY_ORDER: Modality[] = ["text", "image", "video", "audio"];
const MODALITY_LABEL: Record<Modality, string> = {
  text: "Text",
  image: "Bild",
  video: "Video",
  audio: "Audio",
};

const MONTHS_DE = [
  "Januar", "Februar", "März", "April", "Mai", "Juni",
  "Juli", "August", "September", "Oktober", "November", "Dezember",
];

/** "2026-09-15" -> "15. September 2026"; "2026-09" -> "September 2026". */
function longDate(iso: string): string {
  const month = MONTHS_DE[Number(iso.slice(5, 7)) - 1];
  const year = iso.slice(0, 4);
  const day = Number(iso.slice(8, 10));
  return day ? `${day}. ${month} ${year}` : `${month} ${year}`;
}

/**
 * The two `kind: "personal"` markers are not releases, and every figure in this
 * document counts releases — the same split `releases()` makes in lib/clusters.ts.
 */
const releases = entries.filter((e) => e.kind !== "personal");
const markers = entries.length - releases.length;
const chronological = [...releases].sort((a, b) => (a.date < b.date ? -1 : 1));

const byModality = MODALITY_ORDER.map((m) => ({
  modality: m,
  count: releases.filter((e) => e.modality === m).length,
}));
const open = releases.filter((e) => e.license === "open").length;
const houses = [...new Set(releases.map((e) => e.house))].sort();
const disputed = chronological.filter((e) => e.disputed);
const firsts = releases.filter((e) => e.firstOfKind);
const sourceCount = releases.reduce((n, e) => n + e.sources.length, 0);
const monthPrecision = releases.filter((e) => e.datePrecision === "month").length;

const regions = (() => {
  const counts = new Map<string, number>();
  for (const h of houses) {
    const key = providerRegion(h) ?? "unmapped";
    counts.set(key, (counts.get(key) ?? 0) + 1);
  }
  const label: Record<string, string> = {
    US: "US", CN: "China", EU: "EU", OTHER: "sonstige",
    unmapped: "Sitz nicht bestätigt",
  };
  return ["US", "CN", "EU", "OTHER", "unmapped"]
    .filter((k) => counts.get(k))
    .map((k) => `${label[k]} ${counts.get(k)}`)
    .join(" · ");
})();

const countries = new Set(
  houses.map((h) => providerCountry(h)).filter((c): c is string => Boolean(c)),
).size;

/** Pipes would break the row; nothing else in the notes needs escaping. */
function cell(s: string): string {
  return s.replace(/\|/g, "\\|").replace(/\s*\n\s*/g, " ").trim();
}

function disputedRow(e: Entry): string {
  const note = e.verificationNote?.trim()
    ? cell(e.verificationNote)
    : "Markiert, ohne hinterlegte Notiz.";
  return `| ${e.date} | ${cell(e.name)} (${cell(e.org)}) | ${note} |`;
}

function render(): string {
  const first = chronological[0];
  const last = chronological.at(-1)!;

  return `# Quellen & Methode

${releases.length} Meilenstein-Releases generativer KI, ${longDate(first.date)} → ${longDate(last.date)}, über Text, Bild, Video und Audio.

<!-- Erzeugt von scripts/sources.ts — nicht von Hand bearbeiten. Zu aktualisieren mit \`npm run sources\`. -->

## Methode

Jeder Eintrag wurde von einem Recherche-Agenten pro Modalität entworfen (Websuche + Fetch) und anschließend **unabhängig gegengeprüft**: ein separater, adversarisch arbeitender Fact-Checker hat Release-Datum und jede First-of-Kind-Aussage erneut gegen eine Primärquelle bestätigt — die Ankündigung des Labors selbst, das Paper oder die Release Notes. Wo ein Datum nicht zu bestätigen war oder Quellen sich widersprechen, ist der Eintrag als \`disputed\` markiert, statt als gesicherte Tatsache dargestellt zu werden.

Die Entdeckung — überhaupt zu erfahren, dass ein Release stattgefunden hat — beginnt beim [Changelog von Artificial Analysis](https://artificialanalysis.ai/changelog). \`npm run candidates\` lädt ihn und meldet die dort gelisteten Modelle, zu denen hier noch kein Eintrag existiert. Dieser Feed ist eine Spur, nie eine Quelle: er datiert den Tag, an dem Artificial Analysis ein Modell *ausgewertet* hat, nicht den Tag, an dem es erschienen ist — und er führt Sprachmodelle deutlich vollständiger als die anderen drei Modalitäten. Jeder Kandidat durchläuft davor die Datumsprüfung oben, bevor er ein Eintrag wird.

- Releases gesamt: **${releases.length}**
- Nach Modalität: ${byModality.map((b) => `${MODALITY_LABEL[b.modality]} ${b.count}`).join(", ")}
- Offene Gewichte: ${open} · Geschlossen: ${releases.length - open}
- Als \`disputed\` markiert: ${disputed.length}
- First-of-Kind-Aussagen: ${firsts.length}
- Häuser: ${houses.length} (${regions}), ${countries} Länder erfasst
- Primärquellen-Links: ${sourceCount}
- Tagesgenaue Daten: ${releases.length - monthPrecision} von ${releases.length}${monthPrecision ? ` (${monthPrecision} nur monatsgenau bekannt)` : ""}
- Letzter Prüflauf: ${longDate(dataMeta.lastVerifiedISO)}

Das ist ein **kuratierter** Satz fähigkeitsverschiebender Releases, kein vollständiges Protokoll jedes Punkt-Updates. Größenvarianten, Quantisierungen und Anbieter-Endpunkte fehlen absichtlich.

Gezählt werden hier Releases. Der Datensatz führt ${entries.length} Einträge: ${releases.length} Releases plus ${markers} Marker mit \`kind: "personal"\`, die keine Lizenz tragen und aus jeder Zahl herausfallen.

Organisationszahlen verwenden \`house\`, den pro Eintrag handentschiedenen kanonischen Firmenschlüssel — nie \`org\`, das als Anzeige-Credit wörtlich aus der Quelle übernommen wird und ein Unternehmen über mehrere Schreibweisen verteilen würde. ${JOINT_CREDITS.length} Release${JOINT_CREDITS.length === 1 ? "" : "s"} ${JOINT_CREDITS.length === 1 ? "ist" : "sind"} gemeinsam kreditiert; \`house\` nennt dort nur das führende Haus, die mitkreditierten stehen in \`JOINT_CREDITS\` in lib/providers.ts.

## Als \`disputed\` markierte Einträge

${disputed.length} von ${releases.length} Releases tragen \`disputed: true\` — entweder ließ sich das Datum nicht auf eine einzelne Primärquelle festnageln, oder eine Aussage im Eintrag war zu weit gefasst und musste abgeschwächt werden.

| Datum | Release | Notiz |
|---|---|---|
${disputed.map(disputedRow).join("\n")}
`;
}

// ------------------------------------------------------------------ run

const markdown = render();
const check = process.argv.slice(2).includes("--check");

if (!check) {
  writeFileSync(OUT_FILE, markdown);
  console.log(
    `✓ data/SOURCES.md geschrieben — ${releases.length} Releases, ` +
      `${disputed.length} disputed, Stand ${dataMeta.lastVerified}`,
  );
} else {
  const onDisk = (() => {
    try {
      return readFileSync(OUT_FILE, "utf8");
    } catch {
      return null;
    }
  })();

  if (onDisk !== markdown) {
    const reason = onDisk === null ? "fehlt" : "weicht vom Datensatz ab";
    console.error(
      `\n✖ data/SOURCES.md ${reason}.\n` +
        "  Das Dokument wird aus data/timeline.ts erzeugt und ist von Hand nicht zu pflegen.\n\n" +
        "  Zu beheben mit: npm run sources\n",
    );
    process.exit(1);
  }
  console.log(`✓ data/SOURCES.md deckt sich mit dem Datensatz (${releases.length} Releases)`);
}
