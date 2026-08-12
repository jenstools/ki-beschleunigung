import type { Metadata } from "next";
import Link from "next/link";
import { dataMeta, entries } from "@/data/timeline";
import { StructuredData } from "@/components/StructuredData";
import { apiDocsGraph } from "@/lib/schema";

export const metadata: Metadata = {
  title: "API — Die Beschleunigung",
  description:
    "Öffentliche, kostenlose JSON-API des KI-Zeitstrahls: alle Meilenstein-Releases generativer KI als maschinenlesbarer Datensatz. CC-BY-4.0, kein API-Key.",
  // Must be set explicitly: an unset `alternates` would inherit the root layout's
  // canonical and point this page at `/`.
  alternates: { canonical: "/api-docs" },
  openGraph: {
    title: "API — Die Beschleunigung",
    description:
      "Der komplette KI-Release-Datensatz als offene JSON-API. CC-BY-4.0, kein API-Key.",
    url: "/api-docs",
    type: "website",
  },
};

const ENDPOINT = "https://timeline.snipki.de/api/v1/timeline";

const FETCH_EXAMPLE = `const res = await fetch("${ENDPOINT}");
const { meta, count, entries } = await res.json();

// nur Video-Releases
const video = entries.filter((e) => e.modality === "video");`;

const CURL_EXAMPLE = `curl -s ${ENDPOINT} | jq '.entries[0]'`;

// Interpolated from `dataMeta` rather than typed out: a hand-written sample
// payload silently goes stale with every entry added, and this one had been
// publishing a total 6 releases short of the live API.
const RESPONSE_SHAPE = `{
  "meta": {
    "lastVerified": "${dataMeta.lastVerified}",
    "lastVerifiedISO": "${dataMeta.lastVerifiedISO}",
    "windowStart": "${dataMeta.windowStart}",
    "windowEnd": "${dataMeta.windowEnd}",
    "total": ${dataMeta.total},
    "version": "v1",
    "license": "CC-BY-4.0",
    "attribution": "KI-Zeitstrahl von snipKI",
    "source": "https://timeline.snipki.de"
  },
  "count": ${dataMeta.total},
  "entries": [ /* Entry[] */ ]
}`;

const ENTRY_SHAPE = `{
  "id": "video-seedance-2-5-2026-06-23",
  "date": "2026-06-23",
  "datePrecision": "day",            // "day" | "month"
  "modality": "video",               // "text" | "image" | "video" | "audio"
  "name": "Seedance 2.5",
  "org": "ByteDance",                // Urhebernennung, wie in der Quelle
  "house": "ByteDance",              // die Firma — dieses Feld zählen
  "license": "closed",               // "open" | "closed"
  "capability": "…",                 // was es neu konnte
  "whyItMattered": "…",              // Delta zum vorherigen Stand
  "firstOfKind": "…",                // optional, sonst ""
  "sources": ["https://…"],          // Primärquellen
  "note": "…",                       // optional: Verfügbarkeits-Hinweis
  "kind": "release"                  // optional: "release" | "personal"
}`;

const FIELDS: { name: string; type: string; desc: string }[] = [
  { name: "id", type: "string", desc: "Stabiler, eindeutiger Schlüssel." },
  { name: "date", type: "string", desc: "ISO: YYYY-MM-DD oder YYYY-MM." },
  { name: "datePrecision", type: '"day" | "month"', desc: "Genauigkeit des Datums." },
  { name: "modality", type: "Modality", desc: "text · image · video · audio." },
  { name: "name", type: "string", desc: "Produkt-/Modellname." },
  {
    name: "org",
    type: "string",
    desc: "Urhebernennung, wortgleich zur Primärquelle („Alibaba (Qwen)“). Freitext — nicht zum Zählen.",
  },
  {
    name: "house",
    type: "string",
    desc: "Die Firma dahinter, als kanonischer Schlüssel („Alibaba“). Für jede Zählung nach Organisation dieses Feld verwenden.",
  },
  { name: "license", type: '"open" | "closed"', desc: "Offene Gewichte oder proprietär." },
  { name: "capability", type: "string", desc: "Was das Release neu konnte." },
  { name: "whyItMattered", type: "string", desc: "Der Fortschritt gegenüber dem Stand davor." },
  { name: "firstOfKind", type: "string?", desc: '"Erster …"-Anspruch; sonst leer.' },
  { name: "sources", type: "string[]", desc: "Primärquellen-URLs." },
  { name: "note", type: "string?", desc: "Optionaler Status-/Verfügbarkeits-Hinweis." },
  { name: "kind", type: '"release" | "personal"?', desc: 'Eintragstyp; meist "release".' },
];

function Code({ children }: { children: string }) {
  return (
    <pre className="mt-4 overflow-x-auto rounded-xl border border-rule bg-paper-2 p-5 font-mono text-[13px] leading-relaxed text-ink">
      <code>{children}</code>
    </pre>
  );
}

function Section({
  kicker,
  title,
  children,
}: {
  kicker: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-14 border-t border-rule pt-8">
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-ink-faint">
        {kicker}
      </p>
      <h2 className="font-display mt-2 text-2xl font-bold tracking-tight md:text-3xl">
        {title}
      </h2>
      <div className="mt-4 text-[15px] leading-relaxed text-ink-soft">
        {children}
      </div>
    </section>
  );
}

export default function ApiDocsPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 pb-32 pt-20">
      <StructuredData json={apiDocsGraph(entries, dataMeta.lastVerifiedISO)} />
      <Link
        href="/"
        className="font-mono text-xs uppercase tracking-[0.25em] text-brand-deep transition-opacity hover:opacity-70"
      >
        ← Zurück zum Zeitstrahl
      </Link>

      <header className="mt-8">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-brand-deep">
          API · v1
        </p>
        <h1 className="font-display mt-3 text-4xl font-bold leading-tight tracking-tight md:text-6xl">
          Der Datensatz als API
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-ink-soft">
          Jeder Meilenstein dieses Zeitstrahls ist als offene, kostenlose
          JSON-API abrufbar — geprüft gegen Primärquellen, frei nutzbar in
          eigenen Projekten. Keine Anmeldung, kein API-Key.
        </p>
      </header>

      <Section kicker="Endpoint" title="Ein GET, alles drin">
        <p>
          Read-only. Liefert den kompletten Datensatz in einer Antwort. CORS ist
          offen (<code className="font-mono text-ink">Access-Control-Allow-Origin: *</code>),
          du kannst also direkt aus dem Browser fetchen.
        </p>
        <Code>{`GET ${ENDPOINT}`}</Code>
      </Section>

      <Section kicker="Beispiel" title="In drei Zeilen eingebunden">
        <Code>{FETCH_EXAMPLE}</Code>
        <p className="mt-6">Oder per cURL:</p>
        <Code>{CURL_EXAMPLE}</Code>
      </Section>

      <Section kicker="Antwort" title="Struktur">
        <Code>{RESPONSE_SHAPE}</Code>
      </Section>

      <Section kicker="Schema" title="Ein Eintrag (Entry)">
        <Code>{ENTRY_SHAPE}</Code>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-rule">
                <th className="py-2 pr-4 font-mono text-xs uppercase tracking-wider text-ink-faint">
                  Feld
                </th>
                <th className="py-2 pr-4 font-mono text-xs uppercase tracking-wider text-ink-faint">
                  Typ
                </th>
                <th className="py-2 font-mono text-xs uppercase tracking-wider text-ink-faint">
                  Beschreibung
                </th>
              </tr>
            </thead>
            <tbody>
              {FIELDS.map((f) => (
                <tr key={f.name} className="border-b border-rule-soft align-top">
                  <td className="py-2 pr-4 font-mono text-[13px] text-ink">
                    {f.name}
                  </td>
                  <td className="py-2 pr-4 font-mono text-[13px] text-brand-deep">
                    {f.type}
                  </td>
                  <td className="py-2 text-ink-soft">{f.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section kicker="Caching" title="Edge-gecacht, sekundenschnell">
        <p>
          Die Antwort wird zur Build-Zeit erzeugt und vom CDN ausgeliefert —
          keine Funktion pro Anfrage.{" "}
          <code className="font-mono text-ink">
            Cache-Control: public, max-age=3600, s-maxage=86400,
            stale-while-revalidate=604800
          </code>{" "}
          (1&nbsp;h Browser, 24&nbsp;h Edge, 7&nbsp;Tage SWR). Der Datensatz
          aktualisiert sich mit jedem Deploy. Versionierung über den Pfad
          (<code className="font-mono text-ink">/api/v1/</code>) — ältere
          Versionen bleiben stabil.
        </p>
      </Section>

      <Section kicker="Lizenz" title="CC-BY-4.0 — frei mit Namensnennung">
        <p>
          Nutze die Daten frei, auch kommerziell. Bedingung: Namensnennung mit
          Link auf{" "}
          <a
            href="https://timeline.snipki.de"
            className="text-brand-deep underline decoration-2 underline-offset-4 transition-opacity hover:opacity-70"
          >
            timeline.snipki.de
          </a>
          . Die Daten sind eine kuratierte Auswahl fähigkeitsverändernder
          Releases und gegen Primärquellen geprüft — ohne Gewähr auf
          Vollständigkeit oder Richtigkeit.
        </p>
      </Section>

      <p className="mt-16 font-mono text-[11px] uppercase tracking-widest text-ink-faint">
        KI-Zeitstrahl von snipKI · the KI Enablement Company
      </p>
      <p className="mt-4 font-mono text-[11px] uppercase tracking-widest text-ink-faint">
        <a
          href="https://snipki.de/impressum/"
          target="_blank"
          rel="noreferrer"
          className="text-brand-deep underline decoration-from-font underline-offset-4 transition-opacity hover:opacity-70"
        >
          Impressum
        </a>{" "}
        ·{" "}
        <a
          href="https://snipki.de/datenschutz/"
          target="_blank"
          rel="noreferrer"
          className="text-brand-deep underline decoration-from-font underline-offset-4 transition-opacity hover:opacity-70"
        >
          Datenschutz
        </a>
      </p>
    </main>
  );
}
