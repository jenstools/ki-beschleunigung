"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { MODALITY_COLOR } from "@/lib/ui";
import type { Modality } from "@/data/types";

const MODS: { key: Modality; label: string; state: string }[] = [
  { key: "text", label: "Text", state: "Autovervollständigung. Kein echtes Gespräch." },
  { key: "image", label: "Bild", state: "Verschmierte Gesichter, sechs Finger." },
  { key: "video", label: "Video", state: "Gab es praktisch nicht." },
  { key: "audio", label: "Audio", state: "Roboterhaftes Vorlesen, mit Verzögerung." },
];

export function BootIntro() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.55, 0.85], [1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.85], [0, -50]);
  const cueOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const start = () => {
    const el = ref.current;
    if (el) window.scrollTo({ top: el.offsetTop + el.offsetHeight, behavior: "smooth" });
  };
  const toTimeline = () =>
    document.getElementById("timeline")?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <section ref={ref} className="relative h-[200vh]" style={{ background: "var(--ink)" }}>
      <motion.div
        style={{ opacity, y }}
        className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden px-6"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 2px, #fff 3px)",
          }}
        />

        <div className="mx-auto w-full max-w-3xl" style={{ color: "var(--paper)" }}>
          <p className="text-xs font-medium uppercase tracking-[0.35em]" style={{ color: "var(--brand)" }}>
            Die Beschleunigung
          </p>

          <h2 className="mt-5 text-balance text-[clamp(2rem,5.5vw,4rem)] font-bold leading-[1.05] tracking-tight">
            So weit war KI im Jahr 2022.
          </h2>

          <p className="mt-4 text-lg" style={{ color: "#cfcabf" }}>
            Der komplette Stand der Technik — in vier Disziplinen:
          </p>

          {/* Modalities — the bleak 2022 baseline, color-coded */}
          <div className="mt-9 grid grid-cols-2 gap-x-8 gap-y-6 md:grid-cols-4">
            {MODS.map((m) => (
              <div key={m.key}>
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full" style={{ background: MODALITY_COLOR[m.key] }} />
                  <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: MODALITY_COLOR[m.key] }}>
                    {m.label}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-snug" style={{ color: "#b3aea3" }}>
                  {m.state}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-10 max-w-xl text-lg leading-relaxed" style={{ color: "#cfcabf" }}>
            Und dann ging alles ganz schnell. Was 2022 noch{" "}
            <span style={{ color: "var(--paper)" }}>unmöglich</span> schien, ist heute{" "}
            <span style={{ color: "var(--paper)" }}>Alltag</span> — sieh selbst.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              onClick={toTimeline}
              className="group flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-transform hover:scale-[1.03]"
              style={{ background: "var(--brand)", color: "#0b0f0d" }}
            >
              Direkt zur Zeitachse
              <span className="transition-transform group-hover:translate-y-0.5">↓</span>
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.button
          onClick={start}
          style={{ opacity: cueOpacity }}
          className="group absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3"
        >
          <span className="text-xs font-medium uppercase tracking-[0.3em]" style={{ color: "#cfcabf" }}>
            Scrolle und sieh, was geschah
          </span>
          <motion.span
            animate={{ y: [0, 7, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex h-12 w-12 items-center justify-center rounded-full border-2 text-lg"
            style={{ borderColor: "var(--brand)", color: "var(--brand)" }}
            aria-hidden
          >
            ↓
          </motion.span>
        </motion.button>
      </motion.div>
    </section>
  );
}
