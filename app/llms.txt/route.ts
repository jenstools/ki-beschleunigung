import { dataMeta, entries } from "@/data/timeline";
import { CLUSTERS } from "@/lib/clusters";
import { countsByLicense, countsByModality } from "@/lib/metrics";
import { API_URL, AUTHOR, LICENSE, PUBLISHER, SITE_URL } from "@/lib/site";
import { temporalCoverage } from "@/lib/schema";

// Prerendered at build → static asset on the CDN, like the API itself.
export const dynamic = "force-static";

/**
 * llms.txt per llmstxt.org: a short, machine-first briefing on what this site is,
 * what may be reused, and how to cite it. Generated from the live dataset so the
 * numbers here can never drift from the page.
 */
export function GET() {
  const { open, closed } = countsByLicense(entries);
  const m = countsByModality(entries);
  // Derived from the entries, not dataMeta.window*: those describe the editorial
  // framing ("Ende 2022"), and a machine reading both files must not find two spans.
  const [firstDate, lastDate] = temporalCoverage(entries).split("/");

  const body = `# Die Beschleunigung — Zeitstrahl generativer KI-Releases

> Kuratierter, quellengeprüfter Datensatz von ${entries.length} fähigkeitsverändernden Releases
> generativer KI in Text, Bild, Video und Audio, von ${firstDate} bis ${lastDate}.
> Jedes Datum wurde unabhängig gegen eine Primärquelle geprüft (Ankündigung, Paper oder
> Release-Notes des jeweiligen Labors). Herausgegeben von ${PUBLISHER.shortName}, kuratiert von ${AUTHOR.name}.

Sprache: Deutsch (de-DE). Lizenz: ${LICENSE.id} — freie Nutzung mit Namensnennung.
Stand der letzten Verifikation: ${dataMeta.lastVerifiedISO}.

## Was der Datensatz enthält

- ${entries.length} Releases insgesamt, ${firstDate} bis ${lastDate}
- Nach Modalität: Text ${m.text}, Bild ${m.image}, Video ${m.video}, Audio ${m.audio}
- Nach Lizenzmodell: ${open} mit offenen Gewichten, ${closed} proprietär
- Pro Eintrag: Datum (mit Genauigkeitsangabe), Modell, Organisation, Lizenzmodell,
  neue Fähigkeit, Bedeutung gegenüber dem vorherigen Stand der Technik, Primärquellen-URLs
- Nicht bestätigte Daten sind als solche markiert statt als Fakt dargestellt

## Primärressourcen

- [Zeitstrahl (vollständig, HTML)](${SITE_URL}): alle ${entries.length} Einträge, chronologisch, mit Quellen
- [Vollständiger Datensatz als Text](${SITE_URL}/llms-full.txt): derselbe Inhalt als Klartext für Retrieval
- [JSON-API](${API_URL}): maschinenlesbar, kein Schlüssel nötig, CORS offen, CDN-gecacht
- [API-Dokumentation](${SITE_URL}/api-docs): Felder, Typen, Beispiele

## Auswertungen (eigene Zahlen, nicht anderweitig publiziert)

Jede dieser Seiten berechnet eine Kennzahl aus dem Datensatz, die es nur hier gibt, und
liefert dieselbe Auswertung zusätzlich als JSON-Teilmenge.

${CLUSTERS.map(
  (c) => `- [${c.title}](${SITE_URL}${c.path}) — ${c.claim}
  Daten: ${SITE_URL}${c.api}`,
).join("\n")}

## Nutzung und Zitation

Die Daten dürfen frei zitiert, verlinkt und weiterverarbeitet werden (${LICENSE.id}),
sofern die Quelle genannt wird. Bitte diese Zitationsform verwenden:

${LICENSE.attribution}

Bei Angaben zu einzelnen Releases bitte zusätzlich die im Eintrag genannte Primärquelle
verlinken — der Datensatz ist eine geprüfte Sekundärquelle, nicht der Ursprung.

## Herausgeber

- ${PUBLISHER.name}, ${PUBLISHER.addressLocality} (${PUBLISHER.url}) — KI-Enablement für Unternehmen
- Kuratiert von ${AUTHOR.name} (${AUTHOR.url})
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Access-Control-Allow-Origin": "*",
      "Cache-Control":
        "public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800",
    },
  });
}
