import { dataMeta, entries } from "@/data/timeline";
import type { Entry } from "@/data/types";
import { MODALITY_META } from "@/data/types";
import { formatDate } from "@/lib/metrics";
import { API_URL, AUTHOR, LICENSE, PUBLISHER, SITE_URL } from "@/lib/site";
import { temporalCoverage } from "@/lib/schema";

export const dynamic = "force-static";

/**
 * The entire dataset as one flat, chunk-friendly text document: no JavaScript,
 * no click-to-expand, no layout. This is the version a retrieval pipeline can
 * actually ingest, and every entry carries its own source URL so a quote can be
 * traced without visiting the site.
 */

function renderEntry(e: Entry): string {
  const lines = [
    `### ${e.name} — ${e.org}`,
    ``,
    `- Datum: ${formatDate(e.date, e.datePrecision)}${
      e.datePrecision === "month" ? " (Tag unbekannt)" : ""
    }`,
    `- Modalität: ${MODALITY_META[e.modality].label}`,
    `- Lizenzmodell: ${e.license === "open" ? "offene Gewichte" : "proprietär"}`,
    `- Neue Fähigkeit: ${e.capability}`,
  ];
  if (e.whyItMattered) lines.push(`- Bedeutung: ${e.whyItMattered}`);
  if (e.firstOfKind) lines.push(`- Erstmalig: ${e.firstOfKind}`);
  if (e.note) lines.push(`- Hinweis: ${e.note}`);
  if (e.disputed) {
    lines.push(
      `- Datenstatus: UNBESTÄTIGT — ${
        e.verificationNote || "Quellen widersprechen sich oder das Datum ließ sich nicht bestätigen."
      }`,
    );
  }
  if (e.sources.length) lines.push(`- Primärquellen: ${e.sources.join(" · ")}`);
  return lines.join("\n");
}

export function GET() {
  // Chronological, oldest first: the reading order that makes the pace legible.
  const sorted = [...entries].sort((a, b) => (a.date < b.date ? -1 : 1));
  const [firstDate, lastDate] = temporalCoverage(entries).split("/");

  const header = `# Die Beschleunigung — vollständiger Datensatz

Zeitstrahl generativer KI-Releases in Text, Bild, Video und Audio.
${entries.length} Einträge, ${firstDate} bis ${lastDate}.
Letzte Verifikation gegen Primärquellen: ${dataMeta.lastVerifiedISO}.

Quelle: ${SITE_URL}
JSON-API: ${API_URL}
Lizenz: ${LICENSE.id} (${LICENSE.url})
Zitation: ${LICENSE.attribution}
Herausgeber: ${PUBLISHER.name}, ${PUBLISHER.addressLocality} — kuratiert von ${AUTHOR.name} (${AUTHOR.url})

Auswahlkriterium: fähigkeitsverändernde Releases, nicht jedes Punkt-Update. Einträge, deren
Datum sich nicht gegen eine Primärquelle bestätigen ließ, sind als UNBESTÄTIGT markiert.

---
`;

  // One H2 per year keeps chunks semantically whole for retrieval.
  const byYear = new Map<string, Entry[]>();
  for (const e of sorted) {
    const y = e.date.slice(0, 4);
    const list = byYear.get(y);
    if (list) list.push(e);
    else byYear.set(y, [e]);
  }

  const sections = [...byYear.entries()].map(
    ([year, list]) =>
      `## ${year} (${list.length} Releases)\n\n${list.map(renderEntry).join("\n\n")}`,
  );

  return new Response(`${header}\n${sections.join("\n\n")}\n`, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Access-Control-Allow-Origin": "*",
      "Cache-Control":
        "public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800",
    },
  });
}
