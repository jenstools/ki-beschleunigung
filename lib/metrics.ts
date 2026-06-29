import type { Entry, Modality } from "@/data/types";
import { MODALITY_ORDER } from "@/data/types";

export function parseYear(date: string): number {
  return Number(date.slice(0, 4));
}

export function parseMonth(date: string): number {
  return Number(date.slice(5, 7)) || 1;
}

export function quarterKey(date: string): string {
  const y = parseYear(date);
  const q = Math.floor((parseMonth(date) - 1) / 3) + 1;
  return `${y}-Q${q}`;
}

export function quarterIndex(date: string): number {
  // Quarters since 2022-Q1, used as a monotonic x-axis.
  const y = parseYear(date);
  const q = Math.floor((parseMonth(date) - 1) / 3);
  return (y - 2022) * 4 + q;
}

export type QuarterBucket = {
  key: string;
  year: number;
  quarter: number;
  index: number;
  total: number;
  byModality: Record<Modality, number>;
};

/** Releases per quarter across the full window, gap-filled so empty quarters show. */
export function cadenceByQuarter(entries: Entry[]): QuarterBucket[] {
  if (entries.length === 0) return [];
  const indices = entries.map((e) => quarterIndex(e.date));
  const min = Math.min(...indices);
  const max = Math.max(...indices);

  const buckets = new Map<number, QuarterBucket>();
  for (let i = min; i <= max; i++) {
    const year = 2022 + Math.floor(i / 4);
    const quarter = (i % 4) + 1;
    buckets.set(i, {
      key: `${year}-Q${quarter}`,
      year,
      quarter,
      index: i,
      total: 0,
      byModality: { text: 0, image: 0, video: 0, audio: 0 },
    });
  }

  for (const e of entries) {
    const b = buckets.get(quarterIndex(e.date));
    if (!b) continue;
    b.total += 1;
    b.byModality[e.modality] += 1;
  }

  return [...buckets.values()].sort((a, b) => a.index - b.index);
}

export function countsByModality(entries: Entry[]): Record<Modality, number> {
  const counts: Record<Modality, number> = {
    text: 0,
    image: 0,
    video: 0,
    audio: 0,
  };
  for (const e of entries) counts[e.modality] += 1;
  return counts;
}

export function countsByLicense(entries: Entry[]): { open: number; closed: number } {
  let open = 0;
  let closed = 0;
  for (const e of entries) (e.license === "open" ? open++ : closed++);
  return { open, closed };
}

export type Granularity = "month" | "quarter";

export type PeriodGroup = {
  key: string;
  label: string;
  year: number;
  /** 1-12 in month mode, undefined in quarter mode. */
  month?: number;
  /** 1-4 in quarter mode, undefined in month mode. */
  quarter?: number;
  entries: Entry[];
};

/**
 * Group entries into chronological periods (month or quarter). Entries within a
 * group are sorted strictly by date so the reader sees what came first.
 */
export function groupByPeriod(
  entries: Entry[],
  granularity: Granularity,
): PeriodGroup[] {
  const sorted = [...entries].sort((a, b) => (a.date < b.date ? -1 : 1));
  const groups: PeriodGroup[] = [];
  for (const e of sorted) {
    const year = parseYear(e.date);
    let key: string;
    let label: string;
    let month: number | undefined;
    let quarter: number | undefined;
    if (granularity === "month") {
      month = parseMonth(e.date);
      key = `${year}-${String(month).padStart(2, "0")}`;
      label = `${MONTHS_DE_FULL[month - 1]} ${year}`;
    } else {
      quarter = Math.floor((parseMonth(e.date) - 1) / 3) + 1;
      key = `${year}-Q${quarter}`;
      label = `Q${quarter} ${year}`;
    }
    let g = groups.find((x) => x.key === key);
    if (!g) {
      g = { key, label, year, month, quarter, entries: [] };
      groups.push(g);
    }
    g.entries.push(e);
  }
  return groups;
}

const MONTHS_DE_FULL = [
  "Januar", "Februar", "März", "April", "Mai", "Juni",
  "Juli", "August", "September", "Oktober", "November", "Dezember",
];

const MONTHS_DE_SHORT = [
  "Jan.", "Feb.", "März", "Apr.", "Mai", "Juni",
  "Juli", "Aug.", "Sept.", "Okt.", "Nov.", "Dez.",
];

/** German long date: "14. März 2023" (day) or "März 2023" (month precision). */
export function formatDate(date: string, precision: "day" | "month"): string {
  const y = parseYear(date);
  const m = MONTHS_DE_FULL[parseMonth(date) - 1];
  if (precision === "month") return `${m} ${y}`;
  const d = Number(date.slice(8, 10));
  return `${d}. ${m} ${y}`;
}

/** Day number for the timeline rail, or "" when only the month is known. */
export function dayNumber(date: string, precision: "day" | "month"): string {
  if (precision === "month") return "";
  return String(Number(date.slice(8, 10)));
}

/** Short month + year: "März 2023" / "Sept. 2024". */
export function monthYear(date: string): string {
  return `${MONTHS_DE_SHORT[parseMonth(date) - 1]} ${parseYear(date)}`;
}

/** Whole days between two ISO dates (b - a). Day defaults to the 1st if unknown. */
export function daysBetween(a: string, b: string): number {
  const da = Date.UTC(+a.slice(0, 4), +a.slice(5, 7) - 1, +a.slice(8, 10) || 1);
  const db = Date.UTC(+b.slice(0, 4), +b.slice(5, 7) - 1, +b.slice(8, 10) || 1);
  return Math.round((db - da) / 86_400_000);
}

export function domainOf(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}
