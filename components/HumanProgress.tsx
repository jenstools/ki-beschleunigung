"use client";

import { motion } from "motion/react";

const ROWS = [
  {
    era: "Das Web",
    span: "ca. 1993 – 2000",
    note: "Vom ersten Browser bis zur alltäglichen Massennutzung vergingen rund sieben Jahre.",
  },
  {
    era: "Das Smartphone",
    span: "ca. 2007 – 2012",
    note: "Vom ersten iPhone bis zur App-Wirtschaft, die den Alltag umbaute: etwa fünf Jahre.",
  },
  {
    era: "Generative KI",
    span: "2022 – 2026",
    note: "Dieselben dreieinhalb Jahre: von Stichwortsuche zu autonomen Agenten, Video mit Ton und Songs auf Zuruf.",
    highlight: true,
  },
];

export function HumanProgress() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-24">
      <div className="border-t border-ink pt-6">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-ink-faint">
          Tempo im Vergleich
        </p>
        <h2 className="font-display mt-3 max-w-3xl text-4xl font-bold leading-tight tracking-tight md:text-5xl">
          Frühere Umbrüche brauchten ein Jahrzehnt.
        </h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-soft">
          Grobe Maßstäbe zum Einordnen, kein exakter Vergleich — aber die
          Größenordnung stimmt.
        </p>
      </div>

      <div className="mt-12 space-y-px">
        {ROWS.map((r, i) => (
          <motion.div
            key={r.era}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="grid grid-cols-1 gap-2 border-t border-rule py-6 md:grid-cols-[220px_1fr] md:gap-8"
            style={r.highlight ? { borderTopColor: "var(--ink)" } : undefined}
          >
            <div>
              <div
                className="font-display text-2xl font-bold tracking-tight"
                style={{ color: r.highlight ? "var(--ink)" : "var(--ink-soft)" }}
              >
                {r.era}
              </div>
              <div className="mt-1 font-mono text-[11px] uppercase tracking-widest text-ink-faint">
                {r.span}
              </div>
            </div>
            <p
              className="text-lg leading-relaxed"
              style={{ color: r.highlight ? "var(--ink)" : "var(--ink-soft)" }}
            >
              {r.note}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
