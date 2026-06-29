import { entries, dataMeta } from "@/data/timeline";
import type { Entry } from "@/data/types";

// Prerendered at build → served as a static asset from Vercel's CDN.
// No function invocation per request; rebuild ships new data.
export const dynamic = "force-static";

const CORS: Record<string, string> = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

// Internal research fields are not part of the public contract.
const INTERNAL_FIELDS = ["verificationNote", "disputed"] as const;

const publicEntries: Partial<Entry>[] = entries.map((e) => {
  const pub: Partial<Entry> = { ...e };
  for (const k of INTERNAL_FIELDS) delete pub[k];
  return pub;
});

const payload = {
  meta: {
    ...dataMeta,
    version: "v1",
    license: "CC-BY-4.0",
    attribution: "KI-Zeitstrahl von snipKI",
    source: "https://timeline.snipki.de",
  },
  count: publicEntries.length,
  entries: publicEntries,
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
