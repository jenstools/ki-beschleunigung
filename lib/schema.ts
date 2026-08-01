import type { Entry } from "@/data/types";
import type { Cluster } from "@/lib/clusters";
import { countsByLicense } from "@/lib/metrics";
import {
  API_URL,
  AUTHOR,
  LICENSE,
  PUBLISHER,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_URL,
} from "@/lib/site";

/**
 * JSON-LD for the whole site. Stable `@id`s let every page reference the same
 * Organization / Person / Dataset nodes instead of re-declaring near-duplicates,
 * which is what lets engines merge them into one entity.
 */

const ORG_ID = `${PUBLISHER.url}/#organization`;
const AUTHOR_ID = `${AUTHOR.url}/#person`;
const WEBSITE_ID = `${SITE_URL}/#website`;
export const DATASET_ID = `${SITE_URL}/#dataset`;

type Json = Record<string, unknown>;

function organization(): Json {
  return {
    "@type": "Organization",
    "@id": ORG_ID,
    name: PUBLISHER.name,
    alternateName: PUBLISHER.shortName,
    url: PUBLISHER.url,
    description:
      "KI-Enablement für Unternehmen: Schulungen, KI-Führerschein und Lernplattform für Teams.",
    address: {
      "@type": "PostalAddress",
      addressLocality: PUBLISHER.addressLocality,
      addressCountry: PUBLISHER.addressCountry,
    },
  };
}

function author(): Json {
  return {
    "@type": "Person",
    "@id": AUTHOR_ID,
    name: AUTHOR.name,
    url: AUTHOR.url,
    sameAs: [...AUTHOR.sameAs],
    jobTitle: "KI-Berater",
    worksFor: { "@id": ORG_ID },
    knowsAbout: [
      "Generative KI",
      "Große Sprachmodelle",
      "KI-Bildgenerierung",
      "KI-Videogenerierung",
      "KI-Enablement",
    ],
  };
}

function website(): Json {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE_URL,
    name: `${SITE_NAME} — ${SITE_TAGLINE}`,
    inLanguage: "de-DE",
    publisher: { "@id": ORG_ID },
    author: { "@id": AUTHOR_ID },
    license: LICENSE.url,
  };
}

/** ISO 8601 interval covering the real first and last entry in the dataset. */
export function temporalCoverage(entries: Entry[]): string {
  const dates = entries.map((e) => e.date).sort();
  return `${dates[0]}/${dates[dates.length - 1]}`;
}

function dataset(entries: Entry[], lastVerifiedISO: string): Json {
  const { open, closed } = countsByLicense(entries);
  return {
    "@type": "Dataset",
    "@id": DATASET_ID,
    name: "Die Beschleunigung — Zeitstrahl generativer KI-Releases",
    alternateName: "KI-Zeitstrahl",
    description:
      `Kuratierter Datensatz von ${entries.length} fähigkeitsverändernden Releases generativer KI ` +
      `in Text, Bild, Video und Audio, von Januar 2022 bis ${lastVerifiedISO}. ` +
      `${open} Releases mit offenen Gewichten, ${closed} proprietär. ` +
      "Jedes Datum wurde unabhängig gegen eine Primärquelle (Ankündigung, Paper oder Release-Notes des Labors) geprüft.",
    url: SITE_URL,
    sameAs: `${SITE_URL}/api-docs`,
    inLanguage: "de-DE",
    isAccessibleForFree: true,
    license: LICENSE.url,
    creditText: LICENSE.attribution,
    creator: { "@id": AUTHOR_ID },
    publisher: { "@id": ORG_ID },
    maintainer: { "@id": ORG_ID },
    dateModified: lastVerifiedISO,
    datePublished: "2026-06-14",
    temporalCoverage: temporalCoverage(entries),
    measurementTechnique:
      "Manuelle Kuration mit unabhängiger Datumsverifikation gegen Primärquellen",
    keywords: [
      "Generative KI",
      "KI-Zeitstrahl",
      "KI-Releases",
      "Große Sprachmodelle",
      "Text-zu-Bild",
      "Text-zu-Video",
      "Sprachsynthese",
      "Open-Weights-Modelle",
    ],
    variableMeasured: [
      "Releasedatum",
      "Modalität",
      "Modellname",
      "Organisation",
      "Lizenzmodell (offen/geschlossen)",
      "Neue Fähigkeit",
      "Bedeutung gegenüber dem vorherigen Stand der Technik",
      "Primärquelle",
    ],
    distribution: [
      {
        "@type": "DataDownload",
        name: "Timeline API v1 (JSON)",
        encodingFormat: "application/json",
        contentUrl: API_URL,
        license: LICENSE.url,
      },
    ],
  };
}

// ------------------------------------------------------------- cluster pages

/**
 * A cluster page's own Dataset node: a *subset* of the master dataset, with its
 * own `@id` so it can be cited on its own, and `isPartOf` pointing back at
 * `#dataset` so engines merge the two instead of treating them as rivals.
 */
function clusterDataset(
  c: Cluster,
  subset: Entry[],
  lastVerifiedISO: string,
): Json {
  const url = `${SITE_URL}${c.path}`;
  return {
    "@type": "Dataset",
    "@id": `${url}#dataset`,
    name: c.title,
    description: `${c.claim} Teilmenge aus ${subset.length} von insgesamt kuratierten KI-Releases.`,
    url,
    isPartOf: { "@id": DATASET_ID },
    inLanguage: "de-DE",
    isAccessibleForFree: true,
    license: LICENSE.url,
    creditText: LICENSE.attribution,
    creator: { "@id": AUTHOR_ID },
    publisher: { "@id": ORG_ID },
    dateModified: lastVerifiedISO,
    temporalCoverage: temporalCoverage(subset),
    measurementTechnique:
      "Manuelle Kuration mit unabhängiger Datumsverifikation gegen Primärquellen",
    distribution: [
      {
        "@type": "DataDownload",
        name: `${c.short} als JSON`,
        encodingFormat: "application/json",
        contentUrl: `${SITE_URL}${c.api}`,
        license: LICENSE.url,
      },
    ],
  };
}

/** One release as a list item — named, dated, and linked to its primary source. */
function listItem(entry: Entry, position: number): Json {
  return {
    "@type": "ListItem",
    position,
    name: `${entry.name} (${entry.org})`,
    item: {
      "@type": "SoftwareApplication",
      name: entry.name,
      applicationCategory: "Generative KI",
      datePublished: entry.date,
      author: { "@type": "Organization", name: entry.org },
      description: entry.firstOfKind || entry.capability,
      ...(entry.sources[0] ? { sameAs: entry.sources[0] } : {}),
    },
  };
}

/**
 * JSON-LD for a cluster page. Every cluster emits the same five-node shape —
 * Organization, Person, subset Dataset, the page, and an ItemList of the
 * releases it names — so a machine that has parsed one page can parse all of them.
 *
 * `pageType` is "CollectionPage" when the page *is* the list (`/erstmalig`) and
 * "Article" when the list only supports an argument (`/tempo`).
 */
export function clusterGraph(opts: {
  cluster: Cluster;
  subset: Entry[];
  listed: Entry[];
  lastVerifiedISO: string;
  pageType: "CollectionPage" | "Article";
}): Json {
  const { cluster: c, subset, listed, lastVerifiedISO, pageType } = opts;
  const url = `${SITE_URL}${c.path}`;
  const datasetId = `${url}#dataset`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      organization(),
      author(),
      clusterDataset(c, subset, lastVerifiedISO),
      {
        "@type": pageType,
        "@id": `${url}#webpage`,
        url,
        name: c.title,
        headline: c.title,
        abstract: c.claim,
        description: c.description,
        isPartOf: { "@id": WEBSITE_ID },
        about: { "@id": datasetId },
        mainEntity: { "@id": `${url}#list` },
        inLanguage: "de-DE",
        dateModified: lastVerifiedISO,
        author: { "@id": AUTHOR_ID },
        publisher: { "@id": ORG_ID },
        license: LICENSE.url,
        citation: { "@id": DATASET_ID },
      },
      {
        "@type": "ItemList",
        "@id": `${url}#list`,
        name: c.title,
        itemListOrder: "https://schema.org/ItemListOrderAscending",
        numberOfItems: listed.length,
        itemListElement: listed.map((e, i) => listItem(e, i + 1)),
      },
    ],
  };
}

/** Homepage: the site graph plus the dataset it exists to present. */
export function homeGraph(entries: Entry[], lastVerifiedISO: string): Json {
  return {
    "@context": "https://schema.org",
    "@graph": [
      organization(),
      author(),
      website(),
      dataset(entries, lastVerifiedISO),
      {
        "@type": "CollectionPage",
        "@id": `${SITE_URL}/#webpage`,
        url: SITE_URL,
        name: `${SITE_NAME} — ${SITE_TAGLINE}`,
        description:
          `Scrollbare Zeitleiste von ${entries.length} primärgeprüften Releases generativer KI ` +
          "in Text, Bild, Video und Audio — von Ende 2022 bis heute.",
        isPartOf: { "@id": WEBSITE_ID },
        about: { "@id": DATASET_ID },
        mainEntity: { "@id": DATASET_ID },
        inLanguage: "de-DE",
        dateModified: lastVerifiedISO,
        author: { "@id": AUTHOR_ID },
        publisher: { "@id": ORG_ID },
        license: LICENSE.url,
      },
    ],
  };
}

/** API docs: the same dataset node, plus the endpoint as a described API. */
export function apiDocsGraph(entries: Entry[], lastVerifiedISO: string): Json {
  return {
    "@context": "https://schema.org",
    "@graph": [
      organization(),
      author(),
      dataset(entries, lastVerifiedISO),
      {
        "@type": "WebAPI",
        "@id": `${API_URL}#api`,
        name: "Timeline API v1",
        description:
          "Öffentliche, kostenlose JSON-API mit dem vollständigen KI-Release-Datensatz. CC-BY-4.0, CORS offen, kein Schlüssel nötig.",
        url: `${SITE_URL}/api-docs`,
        documentation: `${SITE_URL}/api-docs`,
        endpointUrl: API_URL,
        provider: { "@id": ORG_ID },
        license: LICENSE.url,
        isAccessibleForFree: true,
        about: { "@id": DATASET_ID },
      },
      {
        "@type": "TechArticle",
        "@id": `${SITE_URL}/api-docs#webpage`,
        url: `${SITE_URL}/api-docs`,
        headline: "API — Die Beschleunigung",
        description:
          "Dokumentation der öffentlichen JSON-API des KI-Zeitstrahls: Endpunkt, Felder, Beispiele, Lizenz.",
        isPartOf: { "@id": WEBSITE_ID },
        inLanguage: "de-DE",
        dateModified: lastVerifiedISO,
        author: { "@id": AUTHOR_ID },
        publisher: { "@id": ORG_ID },
      },
    ],
  };
}
