import { dataMeta, entries } from "@/data/timeline";
import {
  cadenceByHalfYear,
  cadenceByYear,
  cluster,
  densestWeeks,
  longestPauses,
  releases,
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

const C = cluster("/tempo");
const rel = releases(entries);

const payload = {
  meta: {
    ...dataMeta,
    version: "v1",
    slice: "tempo",
    claim: C.claim,
    page: `${SITE_URL}${C.path}`,
    license: LICENSE.id,
    attribution: LICENSE.attribution,
    source: SITE_URL,
    // The two `kind: "personal"` markers are editorial signposts, not releases.
    basis: `${rel.length} Releases (redaktionelle Marker ausgenommen)`,
  },
  /** Mean days between consecutive releases, per calendar year. */
  byYear: cadenceByYear(rel).map((y) => ({
    year: y.year,
    gaps: y.count,
    meanGapDays: Number(y.meanGap.toFixed(2)),
  })),
  /** The same measure per half-year — sharper, but noisier at the edges. */
  byHalfYear: cadenceByHalfYear(rel).map((h) => ({
    period: h.key,
    gaps: h.count,
    meanGapDays: Number(h.meanGap.toFixed(2)),
  })),
  longestPauses: longestPauses(rel, 6).map((p) => ({
    days: p.days,
    from: p.before.date,
    to: p.after.date,
    endedBy: { id: p.after.id, name: p.after.name, org: p.after.org },
  })),
  densestWeeks: densestWeeks(rel, 5).map((w) => ({
    start: w.start,
    end: w.end,
    count: w.entries.length,
    releases: w.entries.map((e) => ({
      id: e.id,
      date: e.date,
      name: e.name,
      org: e.org,
      modality: e.modality,
    })),
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
