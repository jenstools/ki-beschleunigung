import type { Entry, Modality } from "@/data/types";
import { MODALITY_ORDER } from "@/data/types";
import { daysBetween, parseYear } from "@/lib/metrics";
import { providerRegion } from "@/lib/providers";

/**
 * Statistics layer for the cluster pages.
 *
 * Every function here takes the *release* set, not the raw entries: the two
 * `kind: "personal"` markers (the newsletter, the snipKI entry) are editorial
 * signposts on the timeline and would otherwise be counted as AI releases in
 * every published figure.
 */

/**
 * Registry of cluster pages. One entry per published URL, read by the sitemap,
 * by llms.txt and by the page itself, so a new cluster cannot ship half-wired.
 *
 * `claim` is the number that exists on no other page. A cluster without one is
 * a slice of an existing page and does not get a URL.
 */
export type Cluster = {
  path: string;
  /** <h1> and og:title. */
  title: string;
  /** Short label for cross-links and the llms.txt index. */
  short: string;
  /** The unique, citable finding, as one sentence. */
  claim: string;
  description: string;
  /** JSON slice that lets a machine verify the claim. */
  api: string;
  /**
   * Build-time guard for the hand-written numbers in `claim` and `title`.
   *
   * The claim is editorial prose, so its figures are typed by hand — which means
   * that adding entries to the dataset can quietly turn a headline into a false
   * statement. Every cluster re-derives its own numbers here and throws, so a
   * stale claim fails `next build` instead of shipping.
   */
  verify: (rel: Entry[]) => void;
};

function expect(label: string, actual: number, claimed: number): void {
  if (actual !== claimed) {
    throw new Error(
      `Cluster-Claim veraltet: ${label} steht als ${claimed} im Text, ` +
        `berechnet sind ${actual}. Bitte den Claim aktualisieren.`,
    );
  }
}

export const CLUSTERS: Cluster[] = [
  {
    path: "/tempo",
    title: "Das Tempo: aus 24 Tagen Abstand wurden 2,7",
    short: "Tempo",
    claim:
      "2022 lagen zwischen zwei fähigkeitsverändernden KI-Releases im Schnitt 24,2 Tage. 2026 sind es 2,7. Im Juli 2026 waren es 0,97 — 15 der 32 Releases des Monats fielen auf einen Tag, an dem es noch ein weiteres gab.",
    description:
      "Wie stark der Abstand zwischen zwei fähigkeitsverändernden KI-Releases geschrumpft ist: 24,2 Tage im Jahr 2022, 2,7 im Jahr 2026. Halbjahresweise gemessen an 239 primärgeprüften Releases, mit den längsten Pausen und den dichtesten Wochen.",
    api: "/api/v1/tempo",
    verify: (rel) => {
      const years = cadenceByYear(rel);
      const halves = cadenceByHalfYear(rel);
      const round = (n: number, d: number) => Math.round(n * 10 ** d) / 10 ** d;
      expect("Abstand 2022", round(years[0].meanGap, 1), 24.2);
      expect("Abstand 2026", round(years[years.length - 1].meanGap, 1), 2.7);
      expect(
        "Abstand laufendes Halbjahr",
        round(halves[halves.length - 1].meanGap, 2),
        0.97,
      );
      const july = chronological(rel).filter((e) => e.date >= "2026-07-01");
      expect("Releases Juli 2026", july.length, 32);
      expect(
        "Releases Juli 2026 mit Tagesdublette",
        july.filter((e, i) => i > 0 && e.date === july[i - 1].date).length,
        15,
      );
      expect("Releases gesamt", rel.length, 239);
    },
  },
  {
    path: "/erstmalig",
    title: "Erstmalig: 113 belegte Premieren",
    short: "Erstmalig",
    claim:
      "113 von 239 Releases tragen einen belegten „Erster, der …“-Anspruch: 39 in Text, 27 in Audio, 26 in Video, 21 in Bild. 41 davon kamen mit offenen Gewichten. Bei 8 ist der Anspruch oder das Datum strittig — mit Begründung, warum.",
    description:
      "Wer konnte zuerst was? 113 dokumentierte Premieren generativer KI in Text, Bild, Video und Audio — jede mit Releasedatum, Labor und Link auf die Primärquelle, strittige Fälle offen als strittig markiert.",
    api: "/api/v1/erstmalig",
    verify: (rel) => {
      const firsts = rel.filter((e) => e.firstOfKind);
      const byModality = new Map(
        firstsByModality(rel).map((g) => [g.modality, g.entries.length]),
      );
      expect("Premieren gesamt", firsts.length, 113);
      expect("Releases gesamt", rel.length, 239);
      expect("Premieren Text", byModality.get("text") ?? 0, 39);
      expect("Premieren Audio", byModality.get("audio") ?? 0, 27);
      expect("Premieren Video", byModality.get("video") ?? 0, 26);
      expect("Premieren Bild", byModality.get("image") ?? 0, 21);
      expect("Premieren offen", firsts.filter((e) => e.license === "open").length, 41);
      expect("Premieren strittig", firsts.filter((e) => e.disputed).length, 8);
    },
  },
];

export function cluster(path: string): Cluster {
  const found = CLUSTERS.find((c) => c.path === path);
  if (!found) throw new Error(`Unknown cluster: ${path}`);
  return found;
}

/** Releases only — the two personal timeline markers never count as releases. */
export function releases(entries: Entry[]): Entry[] {
  return entries.filter((e) => e.kind !== "personal");
}

/** Oldest first. Month-precision dates sort before any day in the same month. */
export function chronological(entries: Entry[]): Entry[] {
  return [...entries].sort((a, b) => (a.date < b.date ? -1 : a.date > b.date ? 1 : 0));
}

// ---------------------------------------------------------------- cadence

export type HalfYear = {
  /** e.g. "2026-H1" */
  key: string;
  label: string;
  year: number;
  half: 1 | 2;
  count: number;
  /** Mean days between consecutive releases inside this half-year. */
  meanGap: number;
};

function halfYearKey(date: string): string {
  const month = Number(date.slice(5, 7)) || 1;
  return `${date.slice(0, 4)}-H${month <= 6 ? 1 : 2}`;
}

/**
 * Mean days between consecutive releases, per half-year. This is the pace
 * measure the quarterly bar chart on the home page cannot express: bars show
 * how many, this shows how little breathing room there was between them.
 */
export function cadenceByHalfYear(entries: Entry[]): HalfYear[] {
  const sorted = chronological(entries);
  const gaps = new Map<string, number[]>();

  for (let i = 1; i < sorted.length; i++) {
    const key = halfYearKey(sorted[i].date);
    const gap = daysBetween(sorted[i - 1].date, sorted[i].date);
    const list = gaps.get(key);
    if (list) list.push(gap);
    else gaps.set(key, [gap]);
  }

  return [...gaps.entries()]
    .sort(([a], [b]) => (a < b ? -1 : 1))
    .map(([key, list]) => {
      const [year, half] = key.split("-H");
      return {
        key,
        label: `${half === "1" ? "1. Halbjahr" : "2. Halbjahr"} ${year}`,
        year: Number(year),
        half: Number(half) as 1 | 2,
        count: list.length,
        meanGap: list.reduce((a, b) => a + b, 0) / list.length,
      };
    });
}

export type CadenceYear = { year: number; count: number; meanGap: number };

/**
 * The same measure per calendar year. Coarser than half-years but far more
 * robust: the published headline figures use this, because the first half-year
 * of the dataset contains a single gap and would otherwise carry a "mean".
 */
export function cadenceByYear(entries: Entry[]): CadenceYear[] {
  const sorted = chronological(entries);
  const gaps = new Map<number, number[]>();
  for (let i = 1; i < sorted.length; i++) {
    const year = parseYear(sorted[i].date);
    const list = gaps.get(year);
    const gap = daysBetween(sorted[i - 1].date, sorted[i].date);
    if (list) list.push(gap);
    else gaps.set(year, [gap]);
  }
  return [...gaps.entries()]
    .sort(([a], [b]) => a - b)
    .map(([year, list]) => ({
      year,
      count: list.length,
      meanGap: list.reduce((a, b) => a + b, 0) / list.length,
    }));
}

export type Pause = { days: number; before: Entry; after: Entry };

/** The longest stretches with no release at all, longest first. */
export function longestPauses(entries: Entry[], limit = 6): Pause[] {
  const sorted = chronological(entries);
  const pauses: Pause[] = [];
  for (let i = 1; i < sorted.length; i++) {
    pauses.push({
      days: daysBetween(sorted[i - 1].date, sorted[i].date),
      before: sorted[i - 1],
      after: sorted[i],
    });
  }
  return pauses.sort((a, b) => b.days - a.days).slice(0, limit);
}

export type Burst = { start: string; end: string; entries: Entry[] };

/**
 * The densest 7-day windows, measured with a sliding window over day-precision
 * releases. Month-precision entries are skipped: a release dated "2024-03"
 * cannot be placed inside a specific week without inventing a day.
 */
export function densestWeeks(entries: Entry[], limit = 5, windowDays = 7): Burst[] {
  const sorted = chronological(entries).filter((e) => e.datePrecision === "day");
  const windows: Burst[] = [];

  for (let i = 0; i < sorted.length; i++) {
    const group = [sorted[i]];
    for (let j = i + 1; j < sorted.length; j++) {
      if (daysBetween(sorted[i].date, sorted[j].date) >= windowDays) break;
      group.push(sorted[j]);
    }
    windows.push({
      start: group[0].date,
      end: group[group.length - 1].date,
      entries: group,
    });
  }

  // Keep the fullest window, then drop everything that overlaps it, so the
  // list reads as distinct weeks rather than five offsets of the same one.
  const picked: Burst[] = [];
  for (const w of windows.sort((a, b) => b.entries.length - a.entries.length)) {
    if (picked.some((p) => w.start <= p.end && p.start <= w.end)) continue;
    picked.push(w);
    if (picked.length === limit) break;
  }
  return picked;
}

// ---------------------------------------------------------------- firsts

export type FirstsGroup = { modality: Modality; entries: Entry[] };

/**
 * Entries carrying a "first of kind" claim, grouped by modality and ordered
 * oldest first — the order in which the capability actually arrived.
 */
export function firstsByModality(entries: Entry[]): FirstsGroup[] {
  const firsts = chronological(entries).filter((e) => e.firstOfKind);
  return MODALITY_ORDER.map((modality) => ({
    modality,
    entries: firsts.filter((e) => e.modality === modality),
  })).filter((g) => g.entries.length > 0);
}

// ---------------------------------------------------------------- openness

export type LicenseYear = {
  year: number;
  open: number;
  closed: number;
  total: number;
  /** Share of releases with open weights, 0–100, rounded. */
  openShare: number;
};

export function licenseByYear(entries: Entry[]): LicenseYear[] {
  const years = new Map<number, { open: number; closed: number }>();
  for (const e of entries) {
    const y = parseYear(e.date);
    const bucket = years.get(y) ?? { open: 0, closed: 0 };
    bucket[e.license] += 1;
    years.set(y, bucket);
  }
  return [...years.entries()]
    .sort(([a], [b]) => a - b)
    .map(([year, { open, closed }]) => ({
      year,
      open,
      closed,
      total: open + closed,
      openShare: Math.round((open / (open + closed)) * 100),
    }));
}

// ---------------------------------------------------------------- origin

export type RegionCount = { region: string; count: number };

/**
 * Releases per bloc. Providers whose HQ is not confirmed land in "unbekannt"
 * rather than being folded into a default, so the gap stays visible.
 */
export function countsByRegion(entries: Entry[]): RegionCount[] {
  const counts = new Map<string, number>();
  for (const e of entries) {
    const key = providerRegion(e.org) ?? "unbekannt";
    counts.set(key, (counts.get(key) ?? 0) + 1);
  }
  return [...counts.entries()]
    .map(([region, count]) => ({ region, count }))
    .sort((a, b) => b.count - a.count);
}
