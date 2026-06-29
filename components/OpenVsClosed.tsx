"use client";

import { motion } from "motion/react";
import type { Entry } from "@/data/types";
import { parseYear } from "@/lib/metrics";

const OPEN = "#0e857a";
const CLOSED = "#1a1814";

export function OpenVsClosed({ entries }: { entries: Entry[] }) {
  const years = Array.from(
    new Set(entries.map((e) => parseYear(e.date))),
  ).sort();

  const rows = years.map((year) => {
    const inYear = entries.filter((e) => parseYear(e.date) === year);
    const open = inYear.filter((e) => e.license === "open").length;
    return { year, open, closed: inYear.length - open, total: inYear.length };
  });

  const maxTotal = Math.max(1, ...rows.map((r) => r.total));
  const totalOpen = entries.filter((e) => e.license === "open").length;
  const openShare = entries.length
    ? Math.round((totalOpen / entries.length) * 100)
    : 0;

  return (
    <section className="mx-auto max-w-5xl px-6 py-24">
      <div className="border-t border-ink pt-6">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-ink-faint">
          Offen vs. geschlossen
        </p>
        <h2 className="font-display mt-3 max-w-3xl text-4xl font-bold leading-tight tracking-tight md:text-5xl">
          Die Speerspitze ist kein geschlossener Club mehr
        </h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-soft">
          Geschlossene Labore bringen weiterhin die meisten Modelle heraus, daher
          laufen {openShare}% dieser Meilensteine auf Open-Weights. Die
          Verschiebung dreht sich um Qualität, nicht um Anzahl: 2025 lieferten
          sich offene Releases wie DeepSeek-R1, Qwen und Llama einen Schlagabtausch
          mit den besten geschlossenen Systemen. Jeder Balken unten ist ein Jahr,
          seine Länge die Zahl der Meilensteine, aufgeteilt nach Lizenz.
        </p>
      </div>

      <div className="mt-12 space-y-4">
        {rows.map((r) => {
          const lengthPct = (r.total / maxTotal) * 100;
          const openPct = r.total ? (r.open / r.total) * 100 : 0;
          return (
            <div key={r.year} className="flex items-center gap-4">
              <div className="w-12 shrink-0 font-mono text-sm text-ink-soft">
                {r.year}
              </div>
              <div className="h-7 flex-1">
                <motion.div
                  className="flex h-full overflow-hidden rounded-sm"
                  style={{ width: `${lengthPct}%`, transformOrigin: "left" }}
                  initial={{ scaleX: 0, opacity: 0.5 }}
                  whileInView={{ scaleX: 1, opacity: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                >
                  <div style={{ width: `${openPct}%`, background: OPEN }} title={`${r.open} open`} />
                  <div style={{ width: `${100 - openPct}%`, background: CLOSED }} title={`${r.closed} closed`} />
                </motion.div>
              </div>
              <div className="w-24 shrink-0 text-right font-mono text-xs text-ink-faint">
                {r.open}/{r.total} offen
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 flex gap-6 font-mono text-[11px] uppercase tracking-widest text-ink-faint">
        <span className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-sm" style={{ background: OPEN }} />
          Open-Weights
        </span>
        <span className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-sm" style={{ background: CLOSED }} />
          Geschlossen
        </span>
        <span className="ml-auto hidden sm:inline">
          Balkenlänge = Releases pro Jahr
        </span>
      </div>
    </section>
  );
}
