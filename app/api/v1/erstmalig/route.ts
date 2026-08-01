import { dataMeta, entries } from "@/data/timeline";
import { chronological, cluster, firstsByModality, releases } from "@/lib/clusters";
import { LICENSE, SITE_URL } from "@/lib/site";

// Prerendered at build → static asset on the CDN. The API is static by design,
// so a cluster slice is its own path rather than a query parameter.
export const dynamic = "force-static";

const CORS: Record<string, string> = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

const C = cluster("/erstmalig");
const rel = releases(entries);
const firsts = chronological(rel).filter((e) => e.firstOfKind);

const payload = {
  meta: {
    ...dataMeta,
    version: "v1",
    slice: "erstmalig",
    claim: C.claim,
    page: `${SITE_URL}${C.path}`,
    license: LICENSE.id,
    attribution: LICENSE.attribution,
    source: SITE_URL,
    basis: `${rel.length} Releases (redaktionelle Marker ausgenommen)`,
    byModality: Object.fromEntries(
      firstsByModality(rel).map((g) => [g.modality, g.entries.length]),
    ),
  },
  count: firsts.length,
  /**
   * `disputed` and `verificationNote` ship here even though the main timeline
   * endpoint withholds them: on this slice the audit trail *is* the payload —
   * a first-of-kind claim without its caveat would be the misleading version.
   */
  firsts: firsts.map((e) => ({
    id: e.id,
    date: e.date,
    datePrecision: e.datePrecision,
    modality: e.modality,
    name: e.name,
    org: e.org,
    license: e.license,
    firstOfKind: e.firstOfKind,
    sources: e.sources,
    disputed: e.disputed ?? false,
    ...(e.disputed && e.verificationNote
      ? { verificationNote: e.verificationNote }
      : {}),
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
