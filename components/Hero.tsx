"use client";

import { motion } from "motion/react";

export function Hero({
  total,
  windowLabel,
}: {
  total: number;
  windowLabel: string;
}) {
  return (
    <header className="relative mx-auto flex min-h-[92vh] max-w-5xl flex-col justify-center px-6 py-24">
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="font-mono text-xs uppercase tracking-[0.3em] text-ink-faint"
      >
        Generative KI · {windowLabel}
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.05 }}
        className="font-display mt-6 max-w-4xl text-balance text-[clamp(2.25rem,6.5vw,5.25rem)] font-black leading-[0.96] tracking-tight"
      >
        Die Beschleunigung, die wir alle unterschätzen.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="font-display mt-8 max-w-2xl text-balance text-2xl leading-snug text-ink-soft md:text-3xl"
      >
        Wir vergessen, wie schnell sich das bewegt. Hier ist, was Maschinen
        gelernt haben — in{" "}
        <span className="italic text-ink">Text, Bild, Video und Ton</span> —
        Release für Release.
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.35 }}
        className="mt-10 max-w-xl text-base leading-relaxed text-ink-faint"
      >
        {total} Meilenstein-Releases. Jedes Datum gegen eine Primärquelle
        geprüft. Scrolle, und sieh zu, wie die Abstände zwischen den Durchbrüchen
        schrumpfen.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="absolute bottom-10 left-6 flex items-center gap-3 text-ink-faint"
      >
        <span className="font-mono text-xs uppercase tracking-[0.25em]">
          Scrollen
        </span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden
        >
          ↓
        </motion.span>
      </motion.div>
    </header>
  );
}
