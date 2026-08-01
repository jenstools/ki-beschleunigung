import Link from "next/link";
import type { Cluster } from "@/lib/clusters";
import { CLUSTERS } from "@/lib/clusters";
import { LICENSE, SITE_URL } from "@/lib/site";

/**
 * Shared chrome for every cluster page.
 *
 * Deliberately plain and static: no scroll animation, no client components. A
 * cluster page exists to be read and quoted — by people skimming for one number
 * and by retrieval systems that never scroll, never click and never run JS.
 */
export function ClusterShell({
  cluster,
  kicker,
  lede,
  lastVerified,
  children,
}: {
  cluster: Cluster;
  kicker: string;
  lede: React.ReactNode;
  lastVerified: string;
  children: React.ReactNode;
}) {
  const others = CLUSTERS.filter((c) => c.path !== cluster.path);

  return (
    <main className="mx-auto max-w-3xl px-6 pb-32 pt-20">
      <Link
        href="/"
        className="font-mono text-xs uppercase tracking-[0.25em] text-brand-deep transition-opacity hover:opacity-70"
      >
        ← Zurück zum Zeitstrahl
      </Link>

      <header className="mt-8">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-brand-deep">
          {kicker}
        </p>
        <h1 className="font-display mt-3 text-4xl font-bold leading-tight tracking-tight md:text-6xl">
          {cluster.title}
        </h1>
        {/* The claim, verbatim and up top: it is what a citing engine lifts. */}
        <p className="mt-6 border-l-2 border-brand-deep pl-4 text-lg font-medium leading-relaxed text-ink">
          {cluster.claim}
        </p>
        <div className="mt-6 text-lg leading-relaxed text-ink-soft">{lede}</div>
      </header>

      {children}

      <section className="mt-14 border-t border-rule pt-8">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-ink-faint">
          Methode
        </p>
        <h2 className="font-display mt-2 text-2xl font-bold tracking-tight">
          Woher die Zahlen kommen
        </h2>
        <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
          Grundlage ist ein handkuratierter Datensatz fähigkeitsverändernder
          Releases generativer KI. Aufgenommen wird ein Release nur, wenn es
          etwas konnte, was vorher kein öffentlich verfügbares Modell konnte —
          reine Preisänderungen, Rebrands und Punktversionen ohne neue Fähigkeit
          bleiben draußen. Jedes Datum ist gegen eine Primärquelle geprüft
          (Ankündigung, Paper oder Release-Notes des Labors); unbestätigte Daten
          sind als solche markiert statt als Fakt dargestellt. Zwei redaktionelle
          Marker im Zeitstrahl (Newsletter-Start, snipKI-Gründung) sind keine
          Releases und zählen in keiner Zahl auf dieser Seite mit. Stand der
          letzten Verifikation: {lastVerified}.
        </p>
        <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
          Die Auswahl ist kuratiert, also unvermeidlich eine Wertung. Sie ist
          nachprüfbar: jede Zeile hat ein Datum und einen Link.{" "}
          <Link
            href={cluster.api}
            className="text-brand-deep underline decoration-2 underline-offset-4 transition-opacity hover:opacity-70"
          >
            Diese Teilmenge als JSON
          </Link>{" "}
          ·{" "}
          <Link
            href="/api-docs"
            className="text-brand-deep underline decoration-2 underline-offset-4 transition-opacity hover:opacity-70"
          >
            vollständige API
          </Link>
        </p>
      </section>

      <section className="mt-14 border-t border-rule pt-8">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-ink-faint">
          Zitieren
        </p>
        <h2 className="font-display mt-2 text-2xl font-bold tracking-tight">
          Frei nutzbar mit Namensnennung
        </h2>
        <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
          Alle Zahlen und Tabellen dieser Seite stehen unter {LICENSE.id}. Nutze
          sie in Präsentationen, Artikeln, Modellen — mit dieser Zeile:
        </p>
        <pre className="mt-4 overflow-x-auto rounded-xl border border-rule bg-paper-2 p-5 font-mono text-[13px] leading-relaxed text-ink">
          <code>{`${cluster.title} — ${LICENSE.attribution}\n${SITE_URL}${cluster.path}`}</code>
        </pre>
      </section>

      {others.length ? (
        <nav className="mt-14 border-t border-rule pt-8">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-ink-faint">
            Weiter
          </p>
          <ul className="mt-4 space-y-3">
            {others.map((c) => (
              <li key={c.path}>
                <Link
                  href={c.path}
                  className="font-display text-xl font-semibold tracking-tight text-brand-deep underline decoration-1 underline-offset-4 transition-opacity hover:opacity-70"
                >
                  {c.title}
                </Link>
                <p className="mt-1 text-[14px] leading-snug text-ink-soft">
                  {c.claim}
                </p>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}

      <p className="mt-16 font-mono text-[11px] uppercase tracking-widest text-ink-faint">
        KI-Zeitstrahl von snipKI · the KI Enablement Company
      </p>
    </main>
  );
}

/** Section heading pair used by the cluster pages. */
export function ClusterSection({
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
