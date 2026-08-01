import Link from "next/link";
import { CLUSTERS } from "@/lib/clusters";

export function Closing({
  total,
  disputed,
  lastVerified,
  windowLabel,
}: {
  total: number;
  disputed: number;
  lastVerified: string;
  windowLabel: string;
}) {
  return (
    <footer className="mx-auto max-w-3xl px-6 pb-32 pt-24">
      <div className="border-t border-ink pt-10">
        <h2 className="font-display text-4xl font-bold leading-tight tracking-tight md:text-6xl">
          Das waren etwa drei&nbsp;Jahre.
        </h2>
        <p className="font-display mt-6 text-2xl leading-snug text-ink-soft md:text-3xl">
          Du hast wahrscheinlich vergessen, dass die Hälfte davon je neu war.
        </p>
        <p className="mt-8 text-lg leading-relaxed text-ink-soft">
          Das Gefährliche an schnellem Wandel ist, wie schnell er sich normal
          anfühlt. Jede Fähigkeit hier oben war kurz erstaunlich — und wurde dann
          zum Knopf. Das Tempo auf dieser Seite verlangsamt sich nicht. Es ist
          das langsamste, das es für den Rest deines Lebens sein wird.
        </p>
      </div>

      {/* snipKI conversion — strongest moment, reader just felt the pace */}
      <div className="mt-12 rounded-2xl border border-brand bg-paper-2 p-8 shadow-[0_8px_28px_-16px_rgba(47,155,115,0.5)] md:p-10">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-brand-deep">
          snipKI · the KI Enablement Company
        </p>
        <h3 className="font-display mt-3 text-3xl font-bold leading-tight tracking-tight md:text-4xl">
          Schritt halten statt hinterherlaufen.
        </h3>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-soft">
          Du musst nicht jedes Modell kennen. Dein Team muss lernen, mit diesem
          Tempo zu arbeiten — KI sicher, produktiv und im Alltag einzusetzen.
          Genau dafür gibt es snipKI.
        </p>
        <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
          <a
            href="https://snipki.de/?utm_source=ki-timeline&utm_medium=website&utm_campaign=beschleunigung&utm_content=cta-closing"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition-transform hover:scale-[1.03]"
            style={{ background: "var(--brand-deep)", color: "var(--paper)" }}
          >
            snipKI für dein Team
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </a>
          <a
            href="https://jens.marketing/ki-newsletter/?utm_source=ki-timeline&utm_medium=website&utm_campaign=beschleunigung&utm_content=cta-closing-newsletter"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-brand-deep underline decoration-2 underline-offset-4 transition-opacity hover:opacity-70"
          >
            Oder im Bild bleiben: der KI-Newsletter →
          </a>
        </div>
      </div>

      {/* The only path from the narrative to the analysis pages. Crawlers reach
          them from here, so this block is plain server-rendered links. */}
      <nav className="mt-14 border-t border-rule pt-6">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-ink-faint">
          Ausgewertet
        </p>
        <ul className="mt-4 space-y-4">
          {CLUSTERS.map((c) => (
            <li key={c.path}>
              <Link
                href={c.path}
                className="font-display text-2xl font-bold leading-tight tracking-tight text-brand-deep underline decoration-1 underline-offset-4 transition-opacity hover:opacity-70"
              >
                {c.title}
              </Link>
              <p className="mt-1 text-[15px] leading-snug text-ink-soft">
                {c.claim}
              </p>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-14 border-t border-rule pt-6">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-ink-faint">
          Methode
        </p>
        <p className="mt-3 text-sm leading-relaxed text-ink-soft">
          {total} Meilenstein-Releases über den Zeitraum {windowLabel}. Jeder
          Eintrag wurde in einem Rechercheschritt erstellt und anschließend
          unabhängig gegen eine Primärquelle geprüft (die Ankündigung, das Paper
          oder die Release-Notes des jeweiligen Labors). Daten, die sich nicht
          bestätigen ließen oder bei denen sich Quellen widersprechen, sind als{" "}
          <span className="text-video">⚠ Datum unbestätigt</span> markiert statt
          als gesicherte Tatsache dargestellt
          {disputed > 0 ? ` (${disputed} markiert)` : ""}. Dies ist eine kuratierte
          Auswahl fähigkeitsverändernder Releases — nicht jedes kleine Update.
        </p>
        <p className="mt-4 font-mono text-[11px] uppercase tracking-widest text-ink-faint">
          Quellen geprüft · {lastVerified}
        </p>
        <p className="mt-4 font-mono text-[11px] uppercase tracking-widest text-ink-faint">
          <Link
            href="/api-docs"
            className="text-brand-deep underline decoration-from-font underline-offset-4 transition-opacity hover:opacity-70"
          >
            Daten als API →
          </Link>{" "}
          · frei nutzbar · CC-BY
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
      </div>
    </footer>
  );
}
