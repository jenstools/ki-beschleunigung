"use client";

import { motion } from "motion/react";
import type { Entry } from "@/data/types";
import { MODALITY_META } from "@/data/types";
import { formatDate } from "@/lib/metrics";
import { MODALITY_COLOR, modalityTint } from "@/lib/ui";

export function Firsts({ entries }: { entries: Entry[] }) {
  const firsts = entries
    .filter((e) => e.firstOfKind && e.firstOfKind.trim().length > 0)
    .sort((a, b) => (a.date < b.date ? -1 : 1));

  if (firsts.length === 0) return null;

  return (
    <section
      className="py-24"
      style={{ background: "var(--paper-2)" }}
    >
      <div className="mx-auto max-w-5xl px-6">
        <div className="border-t border-ink pt-6">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-ink-faint">
            Premieren
          </p>
          <h2 className="font-display mt-3 max-w-3xl text-4xl font-bold leading-tight tracking-tight md:text-5xl">
            Dinge, die zuvor keine Maschine konnte
          </h2>
        </div>

        <div className="mt-14 space-y-12">
          {firsts.map((e, i) => {
            const color = MODALITY_COLOR[e.modality];
            return (
              <motion.div
                key={e.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 gap-3 border-b border-rule pb-12 md:grid-cols-[160px_1fr]"
              >
                <div>
                  <div className="font-mono text-sm text-ink-soft">
                    {formatDate(e.date, e.datePrecision)}
                  </div>
                  <span
                    className="mt-2 inline-block rounded-full px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-widest"
                    style={{ background: modalityTint(e.modality, 0.16), color }}
                  >
                    {MODALITY_META[e.modality].short}
                  </span>
                </div>
                <div>
                  <p className="font-display text-2xl font-medium leading-snug text-ink md:text-3xl">
                    {e.firstOfKind}
                  </p>
                  <p className="mt-3 text-base text-ink-soft">
                    <span className="font-semibold text-ink">{e.name}</span>
                    <span className="text-ink-faint"> · {e.org}</span>
                    {" — "}
                    {e.capability}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
