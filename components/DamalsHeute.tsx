"use client";

import { motion, useReducedMotion } from "motion/react";
import type { Modality } from "@/data/types";
import { MODALITY_META } from "@/data/types";
import { MODALITY_COLOR, modalityTint } from "@/lib/ui";

type Row = {
  m: Modality;
  metricBefore: string;
  metricAfter: string;
  unit: string;
  damals: string;
  heute: string;
};

const ROWS: Row[] = [
  {
    m: "text",
    metricBefore: "4.000",
    metricAfter: "1 Mio.+",
    unit: "Tokens Kontext",
    damals: "Stichwortsuche und Autovervollständigung. Verlor nach ein paar Sätzen den Faden.",
    heute: "Schreibt Software, besteht Examen, arbeitet stundenlang eigenständig als Agent.",
  },
  {
    m: "image",
    metricBefore: "512 px",
    metricAfter: "2K + Text",
    unit: "Bildqualität",
    damals: "Verschmierte Gesichter, sechs Finger, unlesbare Buchstaben.",
    heute: "Fotorealismus mit korrekter Typografie — in wenigen Sekunden.",
  },
  {
    m: "video",
    metricBefore: "4 Sek.",
    metricAfter: "Minuten + Ton",
    unit: "Bewegtbild",
    damals: "Vier Sekunden stummes Flackern (das „Will Smith isst Spaghetti“-Meme).",
    heute: "Filmreife Clips mit lippensynchronem Dialog und Geräuschen.",
  },
  {
    m: "audio",
    metricBefore: "Vorlese-Roboter",
    metricAfter: "Echtzeit < 1 Sek.",
    unit: "Stimme & Klang",
    damals: "Roboterhaftes Vorlesen mit hörbarer Verzögerung.",
    heute: "Natürliches Gespräch in Echtzeit — und ganze Songs aus einem Satz.",
  },
];

export function DamalsHeute() {
  const reduce = useReducedMotion();

  return (
    <section className="relative mx-auto max-w-5xl px-6 py-20">
      <div className="relative">
        <div className="border-t border-ink pt-6">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-ink-faint">Damals → Heute</p>
          <h2 className="font-display mt-3 max-w-3xl text-4xl font-bold leading-tight tracking-tight md:text-5xl">
            Wie viel besser? Sieh selbst.
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-soft">
            Vier Dimensionen, dreieinhalb Jahre. Links der Stand 2022, rechts heute.
          </p>
        </div>

        <div className="mt-10 space-y-px">
          {ROWS.map((r, i) => {
            const color = MODALITY_COLOR[r.m];
            const reveal = reduce
              ? {}
              : {
                  initial: { opacity: 0, y: 18 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: true, amount: 0.4 },
                  transition: { duration: 0.5, delay: i * 0.05 },
                };
            const wipe = reduce
              ? {}
              : {
                  initial: { opacity: 0, x: -28 },
                  whileInView: { opacity: 1, x: 0 },
                  viewport: { once: true, amount: 0.4 },
                  transition: { duration: 0.55, delay: 0.15, ease: "easeOut" as const },
                };
            return (
              <motion.div key={r.m} {...reveal} className="border-t border-rule py-7">
                {/* Label + metric */}
                <div className="mb-4 flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <span className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full" style={{ background: color }} />
                    <span className="font-mono text-xs font-bold uppercase tracking-widest" style={{ color }}>
                      {MODALITY_META[r.m].short}
                    </span>
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-widest text-ink-faint">{r.unit}</span>
                  <span className="font-display ml-auto text-2xl font-bold tracking-tight md:text-3xl">
                    <span className="text-ink-faint">{r.metricBefore}</span>
                    <motion.span
                      className="mx-2 inline-block origin-left text-ink-faint"
                      {...(reduce
                        ? {}
                        : {
                            initial: { opacity: 0, scaleX: 0 },
                            whileInView: { opacity: 1, scaleX: 1 },
                            viewport: { once: true, amount: 0.6 },
                            transition: { duration: 0.4, delay: 0.25 },
                          })}
                    >
                      →
                    </motion.span>
                    <motion.span
                      className="inline-block"
                      style={{ color }}
                      {...(reduce
                        ? {}
                        : {
                            initial: { opacity: 0, scale: 0.7 },
                            whileInView: { opacity: 1, scale: 1 },
                            viewport: { once: true, amount: 0.6 },
                            transition: { duration: 0.45, delay: 0.45, ease: "backOut" as const },
                          })}
                    >
                      {r.metricAfter}
                    </motion.span>
                  </span>
                </div>

                {/* Damals vs Heute */}
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-5">
                  <div className="rounded-sm border border-rule px-4 py-3" style={{ background: "var(--paper-2)", filter: "saturate(0.3)" }}>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-ink-faint">2022</div>
                    <p className="mt-1 text-[15px] leading-snug text-ink-soft">{r.damals}</p>
                  </div>
                  <motion.div
                    {...wipe}
                    className="rounded-sm border-y border-r border-rule-soft px-4 py-3"
                    style={{ borderLeft: `4px solid ${color}`, background: modalityTint(r.m, 0.08) }}
                  >
                    <div className="font-mono text-[10px] uppercase tracking-widest" style={{ color }}>Heute</div>
                    <p className="mt-1 text-[15px] font-medium leading-snug text-ink">{r.heute}</p>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
