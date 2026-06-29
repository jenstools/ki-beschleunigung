"use client";

import { motion } from "motion/react";
import type { QuarterBucket } from "@/lib/metrics";
import { MODALITY_ORDER, MODALITY_META } from "@/data/types";
import { MODALITY_COLOR } from "@/lib/ui";

export function CadenceChart({ buckets }: { buckets: QuarterBucket[] }) {
  const max = Math.max(1, ...buckets.map((b) => b.total));

  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="border-t border-ink pt-6">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-ink-faint">
          Release-Takt
        </p>
        <h2 className="font-display mt-3 max-w-3xl text-4xl font-bold leading-tight tracking-tight md:text-5xl">
          Bemerkenswerte Releases pro Quartal
        </h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-soft">
          Jeder Balken ist ein Quartal, gestapelt nach Modalität. Die Form ist
          die Geschichte: Was früher ein paar Mal im Jahr kam, kommt heute alle
          paar Wochen.
        </p>
      </div>

      {/* Color legend */}
      <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
        {MODALITY_ORDER.map((m) => (
          <span key={m} className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-ink-soft">
            <span className="h-3 w-3 rounded-sm" style={{ background: MODALITY_COLOR[m] }} />
            {MODALITY_META[m].short}
          </span>
        ))}
      </div>

      {/* Chart */}
      <div className="mt-8">
        <div className="flex h-[clamp(220px,38vh,360px)] gap-[3px] sm:gap-1.5">
          {buckets.map((b, i) => {
            const isFirstOfYear = b.quarter === 1 || i === 0;
            const barHeight = (b.total / max) * 100;
            return (
              <div key={b.key} className="flex flex-1 flex-col">
                <div className="flex flex-1 flex-col justify-end">
                  <motion.div
                    className="relative flex w-full flex-col overflow-hidden rounded-t-[2px]"
                    style={{ height: `${barHeight}%`, transformOrigin: "bottom" }}
                    initial={{ scaleY: 0, opacity: 0.5 }}
                    whileInView={{ scaleY: 1, opacity: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                      duration: 0.5,
                      delay: Math.min(i * 0.05, 1.2),
                      ease: "easeOut",
                    }}
                  >
                    {MODALITY_ORDER.map((m) => {
                      const v = b.byModality[m];
                      if (!v) return null;
                      const seg = (v / b.total) * 100;
                      return (
                        <div
                          key={m}
                          title={`${b.key} · ${MODALITY_META[m].short}: ${v}`}
                          style={{ height: `${seg}%`, background: MODALITY_COLOR[m] }}
                        />
                      );
                    })}
                  </motion.div>
                </div>
                {/* Year tick */}
                <div className="mt-2 h-4 text-center">
                  {isFirstOfYear ? (
                    <span className="font-mono text-[10px] tracking-wider text-ink-faint">
                      {b.year}
                    </span>
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <p className="mt-3 font-mono text-[10px] uppercase tracking-widest text-ink-faint">
        Jeder Balken = ein Quartal · gestapelt nach Modalität · 2026 läuft noch
      </p>
    </section>
  );
}
