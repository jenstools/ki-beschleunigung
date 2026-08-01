import { dataMeta, entries } from "@/data/timeline";
import {
  chronological,
  cluster,
  compositeOrgLabels,
  licenseByModality,
  licenseByYear,
  longestPauses,
  OPEN_WEIGHTS_PENDING,
  orgPolicy,
  releases,
  variantOrgPairs,
} from "@/lib/clusters";
import { LICENSE, SITE_URL } from "@/lib/site";

// Prerendered at build → static asset on the CDN. The API is static by design,
// so a cluster slice is its own path rather than a query parameter.
export const dynamic = "force-static";

const CORS: Record<string, string> = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

const C = cluster("/offenheit");
const rel = releases(entries);
const open = chronological(rel.filter((e) => e.license === "open"));
const policy = orgPolicy(rel);

const gap = longestPauses(open, 1)[0];
const inGap = chronological(
  rel.filter((e) => e.date > gap.before.date && e.date < gap.after.date),
);

const payload = {
  meta: {
    ...dataMeta,
    version: "v1",
    slice: "offenheit",
    claim: C.claim,
    page: `${SITE_URL}${C.path}`,
    license: LICENSE.id,
    attribution: LICENSE.attribution,
    source: SITE_URL,
    // The two `kind: "personal"` markers are editorial signposts, not releases.
    basis: `${rel.length} Releases (redaktionelle Marker ausgenommen)`,
    openCount: open.length,
    openShare: Number(((open.length / rel.length) * 100).toFixed(1)),
    /**
     * `license: "open"` means the weights are downloadable, not that the licence
     * is OSI-approved. These entries carry the open flag but their weights were
     * not yet published on `lastVerified` — a stricter count treats them as
     * closed, which is why both figures ship rather than one.
     */
    pendingWeights: OPEN_WEIGHTS_PENDING.map(({ id, why }) => ({
      id,
      reason: why,
      date: open.find((e) => e.id === id)?.date ?? null,
    })),
    openCountStrict: open.length - OPEN_WEIGHTS_PENDING.length,
  },
  byYear: licenseByYear(rel).map((y) => ({
    year: y.year,
    open: y.open,
    closed: y.closed,
    total: y.total,
    openSharePercent: y.openShare,
  })),
  byModality: licenseByModality(rel).map((m) => ({
    modality: m.modality,
    open: m.open,
    total: m.total,
    openSharePercent: m.openShare,
  })),
  /**
   * The longest stretch without a single open-weights release. Measured over the
   * open subset, so "consecutive" means the next *open* release — and the
   * absence is relative to this dataset's inclusion bar (capability-changing
   * releases), not to everything published under an open license.
   */
  longestGapWithoutOpen: {
    days: gap.days,
    from: gap.before.date,
    to: gap.after.date,
    precededBy: { id: gap.before.id, name: gap.before.name, org: gap.before.org },
    endedBy: { id: gap.after.id, name: gap.after.name, org: gap.after.org },
    closedReleasesInside: inGap.length,
    firstOfKindInside: inGap.filter((e) => e.firstOfKind).length,
    inside: inGap.map((e) => ({
      id: e.id,
      date: e.date,
      name: e.name,
      org: e.org,
      modality: e.modality,
      firstOfKind: e.firstOfKind ?? null,
    })),
  },
  /**
   * Counted over organisations, not releases: for most houses openness is a
   * standing policy rather than a per-release decision, which the release count
   * hides because a few prolific labs dominate it.
   */
  orgPolicy: {
    onlyOpen: policy.onlyOpen.sort(),
    onlyClosed: policy.onlyClosed.sort(),
    mixed: policy.mixed.sort(),
    /**
     * The three groups above count `org` labels, and `org` is free text. Both
     * lists ship so a consumer can reproduce the caveat rather than trust the
     * counts blindly.
     *
     * `compositeLabels` — labels naming more than one thing; where
     * `overlapsWith` is non-empty, that house is also counted under its own
     * name. `variantPairs` — plain labels where one may be the short form of the
     * other. Unresolved on purpose: no rule decides whether "Google DeepMind"
     * is "Google".
     */
    compositeLabels: compositeOrgLabels(rel),
    variantPairs: variantOrgPairs(rel).map(([short, long]) => ({ short, long })),
  },
  count: open.length,
  open: open.map((e) => ({
    id: e.id,
    date: e.date,
    datePrecision: e.datePrecision,
    modality: e.modality,
    name: e.name,
    org: e.org,
    firstOfKind: e.firstOfKind ?? null,
    capability: e.capability,
    sources: e.sources,
  })),
};

export function GET() {
  return Response.json(payload, {
    headers: {
      ...CORS,
      "Cache-Control":
        "public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800",
    },
  });
}
