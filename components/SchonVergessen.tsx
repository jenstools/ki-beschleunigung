"use client";

import { motion } from "motion/react";

const ITEMS = [
  "Mit dem Computer reden — und verstanden werden.",
  "Ein Foto live in jede Sprache übersetzen.",
  "Aus einem Satz ein fertiges Lied mit Gesang.",
  "Eine Idee in Sekunden als fotorealistisches Bild.",
  "Software aus einer Beschreibung schreiben lassen.",
  "Ein Video aus zwei Zeilen Text — mit Ton.",
  "Hunderte Seiten zu einem Gespräch zusammenfassen.",
  "Eine Stimme aus drei Sekunden Audio nachbilden.",
];

export function SchonVergessen() {
  return (
    <section className="py-24" style={{ background: "var(--paper-2)" }}>
      <div className="mx-auto max-w-5xl px-6">
        <div className="border-t border-ink pt-6">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-ink-faint">
            Schon vergessen?
          </p>
          <h2 className="font-display mt-3 max-w-3xl text-4xl font-bold leading-tight tracking-tight md:text-5xl">
            Das fühlte sich gerade noch wie Magie an.
          </h2>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-x-10 gap-y-5 sm:grid-cols-2">
          {ITEMS.map((t, i) => (
            <motion.li
              key={t}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.4, delay: (i % 2) * 0.06 }}
              className="flex items-baseline gap-3 border-b border-rule pb-4"
            >
              <span className="font-display text-xl leading-snug text-ink">{t}</span>
              <span className="ml-auto shrink-0 font-mono text-[10px] uppercase tracking-widest text-ink-faint">
                heute Alltag
              </span>
            </motion.li>
          ))}
        </ul>

        <p className="font-display mt-12 text-2xl leading-snug text-ink-soft md:text-3xl">
          Nichts davon ist älter als dreieinhalb Jahre.
        </p>
      </div>
    </section>
  );
}
