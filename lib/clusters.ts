import type { Entry, Modality } from "@/data/types";
import { MODALITY_ORDER } from "@/data/types";
import { daysBetween, parseYear } from "@/lib/metrics";
import { assertKnownHouses, JOINT_CREDITS, providerRegion } from "@/lib/providers";

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

function expect(label: string, actual: number | string, claimed: number | string): void {
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
    title: "Das Tempo: aus 24 Tagen Abstand wurden 2,4",
    short: "Tempo",
    claim:
      "2022 lagen zwischen zwei fähigkeitsverändernden KI-Releases im Schnitt 24,2 Tage. 2026 sind es 2,4. Im laufenden Halbjahr sind es 1,09 — gut ein Tag; 15 der 32 Releases im Juli 2026 fielen auf einen Tag, an dem es noch ein weiteres gab.",
    description:
      "Wie stark der Abstand zwischen zwei fähigkeitsverändernden KI-Releases geschrumpft ist: 24,2 Tage im Jahr 2022, 2,4 im Jahr 2026. Halbjahresweise gemessen an 266 primärgeprüften Releases, mit den längsten Pausen und den dichtesten Wochen.",
    api: "/api/v1/tempo",
    verify: (rel) => {
      const years = cadenceByYear(rel);
      const halves = cadenceByHalfYear(rel);
      const round = (n: number, d: number) => Math.round(n * 10 ** d) / 10 ** d;
      expect("Abstand 2022", round(years[0].meanGap, 1), 24.2);
      expect("Abstand 2026", round(years[years.length - 1].meanGap, 1), 2.4);
      expect(
        "Abstand laufendes Halbjahr",
        round(halves[halves.length - 1].meanGap, 2),
        1.09,
      );
      // Bounded on both sides: the claim names July, not "everything since July".
      const july = chronological(rel).filter(
        (e) => e.date >= "2026-07-01" && e.date < "2026-08-01",
      );
      expect("Releases Juli 2026", july.length, 32);
      expect(
        "Releases Juli 2026 mit Tagesdublette",
        july.filter((e, i) => i > 0 && e.date === july[i - 1].date).length,
        15,
      );
      expect("Releases gesamt", rel.length, 266);
    },
  },
  {
    path: "/erstmalig",
    title: "Erstmalig: 115 belegte Premieren",
    short: "Erstmalig",
    claim:
      "115 von 266 Releases tragen einen belegten „Erster, der …“-Anspruch: 40 in Text, 27 in Audio, 27 in Video, 21 in Bild. 41 davon kamen mit offenen Gewichten. Bei 8 ist der Anspruch oder das Datum strittig — mit Begründung, warum.",
    description:
      "Wer konnte zuerst was? 115 dokumentierte Premieren generativer KI in Text, Bild, Video und Audio — jede mit Releasedatum, Labor und Link auf die Primärquelle, strittige Fälle offen als strittig markiert.",
    api: "/api/v1/erstmalig",
    verify: (rel) => {
      const firsts = rel.filter((e) => e.firstOfKind);
      const byModality = new Map(
        firstsByModality(rel).map((g) => [g.modality, g.entries.length]),
      );
      expect("Premieren gesamt", firsts.length, 115);
      expect("Releases gesamt", rel.length, 266);
      expect("Premieren Text", byModality.get("text") ?? 0, 40);
      expect("Premieren Audio", byModality.get("audio") ?? 0, 27);
      expect("Premieren Video", byModality.get("video") ?? 0, 27);
      expect("Premieren Bild", byModality.get("image") ?? 0, 21);
      expect("Premieren offen", firsts.filter((e) => e.license === "open").length, 41);
      expect("Premieren strittig", firsts.filter((e) => e.disputed).length, 8);
    },
  },
  {
    path: "/offenheit",
    title: "Offenheit: die Lücke von 194 Tagen",
    short: "Offenheit",
    claim:
      "Der Anteil offener Gewichte erreichte 2023 mit 38 % seinen Höchststand und fiel 2025 auf 17 %. Zwischen dem 26. Juni 2025 und dem 6. Januar 2026 liegen 194 Tage, in denen dieser Datensatz keinen einzigen Release mit offenen Gewichten verzeichnet — bei 16 geschlossenen, davon 12 mit Premierenanspruch. Trotzdem stammen 41 der 115 belegten Premieren von offenen Modellen.",
    description:
      "Offene gegen geschlossene Gewichte über vier Jahre: Höchststand 38 % im Jahr 2023, Tiefpunkt 17 % im Jahr 2025, dazwischen eine Lücke von 194 Tagen ohne einen einzigen offenen Release. Mit allen 84 offenen Releases, Primärquellen und der Aufschlüsselung nach Modalität und Haus.",
    api: "/api/v1/offenheit",
    verify: (rel) => {
      // This page counts houses, so an unregistered one would silently become
      // its own house here. Guarded on the page that publishes the figure.
      assertKnownHouses(rel.map((e) => e.house));
      // Every joint credit must still be present under that exact org label,
      // or the caveat box names a case the dataset no longer contains.
      for (const j of JOINT_CREDITS) {
        if (!rel.some((e) => e.org === j.org)) {
          throw new Error(
            `Offenheit: Gemeinschaftsnennung "${j.org}" steht in JOINT_CREDITS, ` +
              `kommt im Datensatz aber nicht mehr vor. Eintrag prüfen.`,
          );
        }
      }

      const open = rel.filter((e) => e.license === "open");
      const firsts = rel.filter((e) => e.firstOfKind);
      const byYear = new Map(licenseByYear(rel).map((y) => [y.year, y.openShare]));
      expect("Anteil offen 2023", byYear.get(2023) ?? 0, 38);
      expect("Anteil offen 2025", byYear.get(2025) ?? 0, 17);
      expect("Offene Releases gesamt", open.length, 84);
      expect("Releases gesamt", rel.length, 266);

      // The gap is the headline, so both its length and what filled it are guarded.
      const gap = longestPauses(open, 1)[0];
      expect("Länge der Lücke", gap.days, 194);
      expect("Beginn der Lücke", gap.before.date, "2025-06-26");
      expect("Ende der Lücke", gap.after.date, "2026-01-06");
      const inGap = rel.filter((e) => e.date > gap.before.date && e.date < gap.after.date);
      expect("Releases in der Lücke", inGap.length, 16);
      expect("Premieren in der Lücke", inGap.filter((e) => e.firstOfKind).length, 12);

      expect("Premieren gesamt", firsts.length, 115);
      expect("Premieren offen", firsts.filter((e) => e.license === "open").length, 41);

      // The hand-checked pending-weights annotation only holds while those
      // entries still exist and are still marked open. If one is re-licensed or
      // removed, the adjusted figure on the page is wrong and must be revisited.
      for (const { id } of OPEN_WEIGHTS_PENDING) {
        const entry = rel.find((e) => e.id === id);
        if (!entry) {
          throw new Error(
            `Offenheit: Eintrag ${id} steht in OPEN_WEIGHTS_PENDING, ist aber ` +
              `nicht mehr im Datensatz. Anmerkung prüfen und entfernen.`,
          );
        }
        expect(`Lizenz von ${id}`, entry.license, "open");
      }
      expect(
        "Offene Releases mit vorliegenden Gewichten",
        open.length - OPEN_WEIGHTS_PENDING.length,
        81,
      );
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

export type LicenseModality = {
  modality: Modality;
  open: number;
  total: number;
  /** Share of releases with open weights, 0–100, rounded. */
  openShare: number;
};

/** The same split per modality, most open first. */
export function licenseByModality(entries: Entry[]): LicenseModality[] {
  return MODALITY_ORDER.map((modality) => {
    const list = entries.filter((e) => e.modality === modality);
    const open = list.filter((e) => e.license === "open").length;
    return {
      modality,
      open,
      total: list.length,
      openShare: Math.round((open / list.length) * 100),
    };
  })
    .filter((m) => m.total > 0)
    .sort((a, b) => b.openShare - a.openShare);
}

export type OrgPolicy = {
  /** Houses that only ever shipped open weights. */
  onlyOpen: string[];
  onlyClosed: string[];
  /** Houses that shipped both — the only ones for whom openness is a decision per release. */
  mixed: string[];
};

/** Distinct houses in a release set, most releases first. */
export function houseCounts(entries: Entry[]): [string, number][] {
  const counts = new Map<string, number>();
  for (const e of entries) counts.set(e.house, (counts.get(e.house) ?? 0) + 1);
  return [...counts.entries()].sort((a, b) =>
    b[1] - a[1] || (a[0] < b[0] ? -1 : 1),
  );
}

/** How many distinct houses are behind a release set. */
export function houseCount(entries: Entry[]): number {
  return new Set(entries.map((e) => e.house)).size;
}

/**
 * The joint credits actually present in a release set, with the release count
 * each carries.
 *
 * Everything else about the free-text `org` field is now resolved in the data
 * by `Entry.house`, so this is all that is left to disclose: where several
 * companies are credited together, the release counts for the lead house only.
 */
export function jointCredits(
  entries: Entry[],
): { org: string; lead: string; alsoCredited: string[]; hidden: string[]; count: number }[] {
  return JOINT_CREDITS.map((j) => ({
    ...j,
    count: entries.filter((e) => e.org === j.org).length,
  })).filter((j) => j.count > 0);
}

/**
 * Releases carrying `license: "open"` whose weights were not actually
 * downloadable on the dataset's verification date.
 *
 * Hand-checked and listed by id rather than derived: nothing in the schema
 * distinguishes "weights are published" from "weights were announced", and a
 * regex over German capability prose would start and stop matching as entries
 * get copy-edited. The openness figures are published with this adjustment
 * attached instead of quietly counting releases nobody could download yet.
 */
export const OPEN_WEIGHTS_PENDING: { id: string; why: string }[] = [
  {
    // The weights landed on 2026-07-27, which is its own entry in the dataset —
    // counting both makes one open release count twice.
    id: "text-kimi-k3-2026-07-16",
    why: "Zum Launch nur über App und API; die Gewichte folgten am 27. Juli 2026 als eigener Eintrag.",
  },
  {
    // Same double-count as Kimi K3: the weights landed on 2026-08-05 under a
    // territorially restricted licence and carry their own entry.
    id: "video-minimax-h3-2026-07-31",
    why: "Als Open-Weights-Modell angekündigt; die Gewichte folgten am 5. August 2026 als eigener Eintrag — in der EU allerdings nicht lizenziert.",
  },
  {
    // Unlike the two above, this one has no twin entry yet: the weights were
    // announced for two weeks after launch and the zai-org HuggingFace
    // organisation carried no GLM-5.3 repository on the verification date.
    id: "text-glm-5-3-2026-08-14",
    why: "Gewichte laut Z.ai erst zwei Wochen nach dem Launch, nach Abschluss von Sicherheitsprüfung und Hardening — am 14. August 2026 nicht herunterladbar.",
  },
];

/**
 * Whether openness is a house policy or a per-release decision. Counted over
 * houses rather than releases, because the release count is dominated by a
 * handful of prolific labs and hides how most houses behave.
 *
 * Keyed on `house`, not `org`: counting the display credit split Meta into
 * three and Zhipu into two, which inflated every bucket below.
 */
export function orgPolicy(entries: Entry[]): OrgPolicy {
  const houses = new Map<string, { open: number; closed: number }>();
  for (const e of entries) {
    const bucket = houses.get(e.house) ?? { open: 0, closed: 0 };
    bucket[e.license] += 1;
    houses.set(e.house, bucket);
  }
  const policy: OrgPolicy = { onlyOpen: [], onlyClosed: [], mixed: [] };
  for (const [house, { open, closed }] of houses) {
    if (open && closed) policy.mixed.push(house);
    else if (open) policy.onlyOpen.push(house);
    else policy.onlyClosed.push(house);
  }
  for (const list of [policy.onlyOpen, policy.onlyClosed, policy.mixed]) {
    list.sort((a, b) => (a < b ? -1 : 1));
  }
  return policy;
}

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
    const key = providerRegion(e.house) ?? "unbekannt";
    counts.set(key, (counts.get(key) ?? 0) + 1);
  }
  return [...counts.entries()]
    .map(([region, count]) => ({ region, count }))
    .sort((a, b) => b.count - a.count);
}
