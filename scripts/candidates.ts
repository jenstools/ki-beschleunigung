/**
 * Kandidaten-Trichter: was steht im Artificial-Analysis-Changelog, das noch
 * nicht im Datensatz ist?
 *
 *   npm run candidates                 letzte 14 Tage
 *   npm run candidates -- --days 30    anderes Fenster
 *   npm run candidates -- --all        das ganze geladene Fenster (~2 Monate)
 *   npm run candidates -- --json       maschinenlesbar
 *
 * Das ist ein Suchhilfsmittel, keine Quelle. Der Changelog datiert den Tag, an
 * dem Artificial Analysis ein Modell *ausgewertet* hat — nicht den Tag, an dem
 * es erschienen ist. Die beiden liegen regelmäßig Tage auseinander. Deshalb
 * schreibt dieses Skript nichts in data/timeline.ts und gibt das Datum
 * ausdrücklich als "gesehen am" aus: `date` bleibt handgeprüft gegen die
 * Primärquelle des Labors, wie jeder Eintrag im Datensatz.
 *
 * Ebenfalls bewusst nicht gebaut: ein Abgleich gegen die freie AA-Modell-API.
 * Die liefert Namen, Anbieter, Preise und Benchmarks — aber kein
 * Veröffentlichungsdatum. Ohne Datum lässt sich ihr Bestand nicht auf ein
 * Zeitfenster eingrenzen, und ein Diff über den gesamten Bestand meldet vor
 * allem die Punkt-Releases und Größenvarianten, die dieser Datensatz absichtlich
 * nicht führt.
 *
 * Abdeckung: der Changelog führt Bild, Video und Sprache erst ab dem
 * 24.12.2025, und im aktuellen Fenster trägt er ausschließlich
 * Sprachmodell-Auswertungen. Für die anderen drei Modalitäten bleibt die
 * eigene Recherche die Hauptquelle.
 *
 * Daten von Artificial Analysis (https://artificialanalysis.ai/) — deren
 * Nutzungsbedingungen verlangen Attribution, sobald etwas davon veröffentlicht
 * wird.
 *
 * Läuft mit plain node (`node scripts/candidates.ts`): node 22 strippt die
 * Typen, der Datensatz ist ein abhängigkeitsfreies Modul, geparst wird mit
 * Regex statt mit einem DOM — der Changelog ist serverseitig gerendert, das
 * Markup liegt also im ersten Response.
 */
import { entries } from "../data/timeline.ts";
import type { Entry } from "../data/types.ts";

const URL_CHANGELOG = "https://artificialanalysis.ai/changelog";
const DEFAULT_DAYS = 14;

// ------------------------------------------------------------------ parsing

/**
 * Jedes Signal im Changelog steht in einem Block mit genau dieser Kennung als
 * erstem Element — die Anbieter-Zeilen ("<Anbieter> performance results now
 * available", im aktuellen Fenster gut zwei Drittel aller Zeilen) haben keine
 * und fallen damit von selbst heraus. Genau richtig: die melden, dass ein
 * Inferenz-Anbieter einen Endpunkt für ein längst erschienenes Modell
 * dazugeschaltet hat.
 */
const RE_LABEL = /<span class="text-xs">([^<]{5,120})<\/span>/g;
const RE_DATE_HEADING = /<h4 class="[^"]*">(\d{1,2} [A-Za-z]+ \d{4})<\/h4>/g;
const RE_NAME = /<h3 class="[^"]*">([^<]+)<\/h3>/;
const RE_BLURB = /<p>([^<]{3,400})<\/p>/;
const RE_HREF = /href="(\/(?:models|articles)\/[^"]+)"/g;

/** "New language model evaluation results available" -> Modalitätswort. */
const RE_MODEL_LABEL = /^New ([a-z-]+) model evaluation results available$/;

const MONTHS: Record<string, number> = {
  jan: 1, feb: 2, mar: 3, apr: 4, may: 5, jun: 6,
  jul: 7, aug: 8, sep: 9, oct: 10, nov: 11, dec: 12,
};

const ENTITIES: Record<string, string> = {
  "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"',
  "&#x27;": "'", "&#39;": "'", "&nbsp;": " ",
};

function decode(s: string): string {
  return s.replace(/&(?:amp|lt|gt|quot|nbsp|#x27|#39);/g, (m) => ENTITIES[m] ?? m).trim();
}

/** "17 Sept 2026" -> "2026-09-17". Null, wenn der Monat unbekannt ist. */
function toIso(heading: string): string | null {
  const m = /^(\d{1,2}) ([A-Za-z]+) (\d{4})$/.exec(heading);
  if (!m) return null;
  const month = MONTHS[m[2].slice(0, 3).toLowerCase()];
  if (!month) return null;
  return `${m[3]}-${String(month).padStart(2, "0")}-${m[1].padStart(2, "0")}`;
}

type Signal = {
  /** Tag, an dem AA das Signal veröffentlicht hat — *nicht* das Release-Datum. */
  seen: string;
  kind: "model" | "article";
  /** Modalitätswort aus dem Label ("language", "image", …), leer bei Artikeln. */
  modality: string;
  label: string;
  name: string;
  blurb: string;
  href: string;
};

/**
 * Positionen aller Datums-Überschriften, damit jedes Signal dem Tag zugeordnet
 * werden kann, unter dem es steht. Der Changelog ist absteigend sortiert, die
 * Zuordnung ist also "letzte Überschrift vor dieser Stelle".
 */
function dateIndex(html: string): { at: number; iso: string }[] {
  const out: { at: number; iso: string }[] = [];
  for (const m of html.matchAll(RE_DATE_HEADING)) {
    const iso = toIso(m[1]);
    if (iso) out.push({ at: m.index, iso });
  }
  return out;
}

function dateAt(index: { at: number; iso: string }[], pos: number): string | null {
  let iso: string | null = null;
  for (const d of index) {
    if (d.at > pos) break;
    iso = d.iso;
  }
  return iso;
}

/** Der Link gehört zum Block, steht im Markup aber *vor* dem Label. */
function hrefBefore(html: string, pos: number): string {
  const window = html.slice(Math.max(0, pos - 600), pos);
  const hits = [...window.matchAll(RE_HREF)];
  const last = hits.at(-1)?.[1] ?? "";
  // Anbieter-Blöcke verlinken /models/<slug>/providers — die wollen wir nicht.
  return last.endsWith("/providers") ? "" : last;
}

function parse(html: string): { signals: Signal[]; days: string[]; ignored: number } {
  const index = dateIndex(html);
  const signals: Signal[] = [];
  let ignored = 0;

  for (const m of html.matchAll(RE_LABEL)) {
    const label = decode(m[1]);
    const isArticle = label.includes("New article published");
    const modelLabel = RE_MODEL_LABEL.exec(label);
    if (!isArticle && !modelLabel) {
      ignored++; // Methodik-Updates, Website-Features — kein Modell.
      continue;
    }

    const tail = html.slice(m.index, m.index + 2_000);
    const name = RE_NAME.exec(tail)?.[1];
    const seen = dateAt(index, m.index);
    if (!name || !seen) {
      ignored++;
      continue;
    }

    signals.push({
      seen,
      kind: isArticle ? "article" : "model",
      modality: modelLabel?.[1] ?? "",
      label,
      name: decode(name),
      blurb: decode(RE_BLURB.exec(tail)?.[1] ?? ""),
      href: hrefBefore(html, m.index),
    });
  }

  return { signals, days: index.map((d) => d.iso), ignored };
}

// ------------------------------------------------------------------ matching

/**
 * Namen vergleichbar machen, ohne sie zu verschmelzen: AA hängt die
 * Messkonfiguration an ("GLM-5.3 (max)", "DeepSeek V4.1 Flash (Reasoning, Max
 * Effort)"), der Datensatz führt das Modell. Trennzeichen werden zu Leerzeichen,
 * nicht gelöscht — sonst fielen "Gemma 3 4B" und "Gemma 34B" zusammen.
 */
function norm(name: string): string {
  return name
    .replace(/\([^)]*\)/g, " ")
    .toLowerCase()
    .replace(/[^a-z0-9.]+/g, " ")
    .trim()
    .replace(/\s+/g, " ");
}

function tokens(name: string): string[] {
  return norm(name).split(" ").filter(Boolean);
}

/**
 * Token-Überlappung, für den "sieht aus wie"-Hinweis bei Nicht-Treffern.
 *
 * Der erste Token muss übereinstimmen: er trägt den Familiennamen, und ohne
 * diese Bedingung landet jedes Modell mit "3.0" und "flash" im Namen bei jedem
 * anderen — "Agnes 3.0 Flash" käme auf zwei Drittel Übereinstimmung mit
 * "Ling-3.0-flash", obwohl die beiden nichts miteinander zu tun haben.
 */
function similarity(a: string, b: string): number {
  const ta = tokens(a);
  const tb = tokens(b);
  if (!ta.length || !tb.length || ta[0] !== tb[0]) return 0;
  const set = new Set(tb);
  let shared = 0;
  for (const t of new Set(ta)) if (set.has(t)) shared++;
  return shared / Math.max(new Set(ta).size, set.size);
}

type Match = { entry: Entry; how: "exakt" | "enthalten" };

function findMatch(name: string, dataset: Entry[]): Match | null {
  const n = norm(name);
  if (!n) return null;

  const exact = dataset.find((e) => norm(e.name) === n);
  if (exact) return { entry: exact, how: "exakt" };

  // Nur eine Richtung: ein Eintrag, der mehrere Namen zusammenfasst ("Gemini 3.8
  // Live & 3.8 Live Extended Thinking"), deckt AAs kürzeren Namen ab.
  //
  // Die umgekehrte Richtung wäre ein Fehler. AAs längerer Name ist gerade *kein*
  // Treffer: "Ling-3.0-flash-Fin" und "Ling-3.0-flash-VL" sind eigene Modelle,
  // nicht der Eintrag "Ling-3.0-flash" — sie als abgedeckt zu melden würde genau
  // die Kandidaten verschlucken, die dieses Skript finden soll. AAs
  // Messkonfigurationen ("(max)", "(Reasoning, Max Effort)") fallen schon beim
  // Normalisieren weg und brauchen die Regel nicht.
  const contained = dataset.find((e) => {
    const d = norm(e.name);
    if (!d) return false;
    return d.startsWith(`${n} `) || d.includes(` ${n} `) || d.endsWith(` ${n}`);
  });
  return contained ? { entry: contained, how: "enthalten" } : null;
}

function nearest(name: string, dataset: Entry[]): { entry: Entry; score: number } | null {
  let best: { entry: Entry; score: number } | null = null;
  for (const e of dataset) {
    const score = similarity(name, e.name);
    if (!best || score > best.score) best = { entry: e, score };
  }
  return best && best.score >= 0.5 ? best : null;
}

// ------------------------------------------------------------------ output

const args = process.argv.slice(2);
const asJson = args.includes("--json");
const all = args.includes("--all");
const days = (() => {
  const i = args.indexOf("--days");
  const n = i >= 0 ? Number(args[i + 1]) : DEFAULT_DAYS;
  return Number.isFinite(n) && n > 0 ? Math.floor(n) : DEFAULT_DAYS;
})();

function fail(detail: string, headline: string): never {
  console.error(`\n✖ ${headline}\n${detail}\n`);
  process.exit(1);
}

function pad(s: string, n: number): string {
  return s.length >= n ? s : s + " ".repeat(n - s.length);
}

/** "2026-09-17" -> "17.09.2026", für die Konsole. */
function de(iso: string): string {
  return `${iso.slice(8, 10)}.${iso.slice(5, 7)}.${iso.slice(0, 4)}`;
}

const res = await fetch(URL_CHANGELOG, {
  headers: { "user-agent": "timeline.snipki.de candidate check" },
  signal: AbortSignal.timeout(30_000),
}).catch((err: Error) => fail(`  ${err.message}`, "Changelog nicht erreichbar."));

if (!res.ok) fail(`  HTTP ${res.status} von ${URL_CHANGELOG}`, "Changelog nicht erreichbar.");

const { signals, days: covered, ignored } = parse(await res.text());
if (!signals.length) {
  fail(
    [
      "  Kein einziges Signal geparst. Das Markup ist serverseitig gerendert und",
      "  hat kein stabiles API — sehr wahrscheinlich hat AA die Seite umgebaut.",
      "  Die Regexe oben in diesem Skript sind dann nachzuziehen.",
    ].join("\n"),
    "Changelog erreichbar, aber nichts erkannt.",
  );
}

const newest = covered[0] ?? "";
const oldest = covered.at(-1) ?? "";
const cutoff = (() => {
  if (all) return oldest;
  const d = new Date(`${newest}T00:00:00Z`);
  d.setUTCDate(d.getUTCDate() - (days - 1));
  return d.toISOString().slice(0, 10);
})();

const inWindow = signals.filter((s) => s.seen >= cutoff);
const models = inWindow.filter((s) => s.kind === "model");
const articles = inWindow.filter((s) => s.kind === "article");

// Ein Modell kann an mehreren Tagen auftauchen (Auswertung, dann Artikel) —
// der jüngste Eintrag pro Name gewinnt, der Rest ist Dublette.
const unique = new Map<string, Signal>();
for (const s of models) if (!unique.has(norm(s.name))) unique.set(norm(s.name), s);

const known: { signal: Signal; match: Match }[] = [];
const candidates: { signal: Signal; near: { entry: Entry; score: number } | null }[] = [];
for (const s of unique.values()) {
  const match = findMatch(s.name, entries);
  if (match) known.push({ signal: s, match });
  else candidates.push({ signal: s, near: nearest(s.name, entries) });
}
candidates.sort((a, b) => (a.signal.seen < b.signal.seen ? 1 : -1));

if (asJson) {
  console.log(
    JSON.stringify(
      {
        source: URL_CHANGELOG,
        attribution: "https://artificialanalysis.ai/",
        fetchedWindow: { from: oldest, to: newest, days: covered.length },
        reportedWindow: { from: cutoff, to: newest },
        note: "seen is AAs evaluation date, not the release date",
        candidates: candidates.map(({ signal, near }) => ({
          seen: signal.seen,
          name: signal.name,
          modality: signal.modality,
          url: signal.href ? `https://artificialanalysis.ai${signal.href}` : null,
          nearestInDataset: near ? { name: near.entry.name, score: +near.score.toFixed(2) } : null,
        })),
        alreadyCovered: known.map(({ signal, match }) => ({
          name: signal.name,
          entryId: match.entry.id,
          how: match.how,
        })),
        articles: articles.map((a) => ({
          seen: a.seen,
          title: a.name,
          url: a.href ? `https://artificialanalysis.ai${a.href}` : null,
        })),
      },
      null,
      2,
    ),
  );
  process.exit(0);
}

const span = all ? "ganzes geladenes Fenster" : `letzte ${days} Tage`;
console.log(
  `\nArtificial-Analysis-Changelog · geladen ${de(oldest)} – ${de(newest)} ` +
    `(${covered.length} Tage mit Einträgen)\n` +
    `Bericht: ${span}, ab ${de(cutoff)} · ${unique.size} Modell-Signale, ` +
    `${articles.length} Artikel, ${ignored} Zeilen ohne Modellbezug übersprungen`,
);

console.log(`\n── Kandidaten: nicht im Datensatz (${candidates.length}) ──`);
if (!candidates.length) {
  console.log("  keine — jedes Modell-Signal im Fenster ist abgedeckt");
} else {
  for (const { signal, near } of candidates) {
    const url = signal.href ? `https://artificialanalysis.ai${signal.href}` : "—";
    console.log(`  ${de(signal.seen)}  ${pad(signal.name, 38)} ${url}`);
    if (signal.blurb) console.log(`              ${signal.blurb}`);
    if (near) {
      console.log(
        `              ähnlich zu "${near.entry.name}" ` +
          `(${Math.round(near.score * 100)} % Übereinstimmung) — Variante oder eigenes Release?`,
      );
    }
  }
  console.log(
    "\n  Die Daten oben sind AAs Auswertungstage, keine Release-Daten.\n" +
      "  Vor dem Eintragen: Datum gegen die Primärquelle des Labors prüfen,\n" +
      "  dann entscheiden, ob das Release überhaupt ein Meilenstein ist.",
  );
}

console.log(`\n── Schon im Datensatz (${known.length}) ──`);
for (const { signal, match } of known) {
  const how = match.how === "exakt" ? "" : `  (als "${match.entry.name}")`;
  console.log(`  ${pad(signal.name, 38)} ${match.entry.id}${how}`);
}

if (articles.length) {
  console.log(`\n── Artikel im Fenster (${articles.length}) ──`);
  for (const a of articles) {
    const url = a.href ? `https://artificialanalysis.ai${a.href}` : "—";
    console.log(`  ${de(a.seen)}  ${a.name}`);
    console.log(`              ${url}`);
  }
}

console.log(
  "\nQuelle: Artificial Analysis (https://artificialanalysis.ai/) — " +
    "Attribution ist Pflicht, sobald daraus etwas veröffentlicht wird.\n",
);
