"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import type { Modality } from "@/data/types";
import { MODALITY_COLOR } from "@/lib/ui";
import { entries } from "@/data/timeline";

const TILES: { m: Modality; label: string; then: string; now: string }[] = [
  { m: "text", label: "Text", then: "Autovervollständigung", now: "schreibt Software & besteht Examen" },
  { m: "image", label: "Bild", then: "verschmierte Gesichter", now: "Fotorealismus mit lesbarem Text" },
  { m: "video", label: "Video", then: "gab es praktisch nicht", now: "filmreife Clips — mit Ton" },
  { m: "audio", label: "Audio", then: "Roboter-Vorlesestimme", now: "Echtzeit-Gespräch & ganze Songs" },
];

export function FirstScreen() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const contentY = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6, 0.9], [1, 1, 0]);
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const cueOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const toTimeline = () =>
    document.getElementById("timeline")?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });

  return (
    <section ref={ref} className="relative h-[200vh]" style={{ background: "var(--ink)" }}>
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        {/* Background video (acceleration field) */}
        {reduce ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src="/header-bg-poster.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" style={{ filter: "brightness(0.5)" }} />
        ) : (
          <motion.video
            style={{ scale: videoScale, filter: "brightness(0.45)" }}
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster="/header-bg-poster.jpg"
            onLoadedMetadata={(e) => {
              e.currentTarget.playbackRate = 0.55;
            }}
          >
            <source src="/header-bg.mp4" type="video/mp4" />
          </motion.video>
        )}

        {/* Dark scrim — darker on the left where the headline sits */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(18,29,25,0.92) 0%, rgba(18,29,25,0.78) 42%, rgba(18,29,25,0.5) 100%)",
          }}
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, rgba(18,29,25,0.6) 0%, transparent 22%, transparent 78%, rgba(18,29,25,0.85) 100%)" }}
        />

        {/* Content */}
        <motion.div
          style={{ y: reduce ? 0 : contentY, opacity: reduce ? 1 : contentOpacity }}
          className="relative z-10 mx-auto w-full max-w-5xl px-6"
        >
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs font-semibold uppercase tracking-[0.35em]"
            style={{ color: "var(--brand)" }}
          >
            Generative KI · Ende 2022 → heute
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="mt-5 max-w-4xl text-balance text-[clamp(2.1rem,5.5vw,4.5rem)] font-bold leading-[1.02] tracking-tight"
            style={{ color: "var(--paper)" }}
          >
            Die Beschleunigung, die wir alle unterschätzen.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18 }}
            className="mt-5 max-w-2xl text-lg leading-relaxed md:text-xl"
            style={{ color: "#c4d0ca" }}
          >
            2022 brachte KI kaum einen Satz zu Ende. Heute schreibt sie Software,
            malt Fotos, dreht Filme und spricht wie ein Mensch — alles in
            dreieinhalb Jahren.
          </motion.p>

          <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-7 lg:grid-cols-4">
            {TILES.map((t, i) => {
              const color = MODALITY_COLOR[t.m];
              const base = 1.1 + i * 0.55;
              return (
                <div key={t.m}>
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full" style={{ background: color }} />
                    <span className="font-mono text-xs font-bold uppercase tracking-widest" style={{ color }}>
                      {t.label}
                    </span>
                  </div>
                  <div className="relative mt-2 h-12">
                    <motion.p
                      className="absolute inset-0 text-sm leading-snug line-through"
                      style={{ color: "#7e8b85" }}
                      initial={{ opacity: reduce ? 0 : 1 }}
                      animate={{ opacity: 0 }}
                      transition={{ duration: 0.5, delay: reduce ? 0 : base }}
                    >
                      2022: {t.then}
                    </motion.p>
                    <motion.p
                      className="absolute inset-0 text-[15px] font-medium leading-snug"
                      style={{ color: "var(--paper)" }}
                      initial={{ opacity: reduce ? 1 : 0, y: reduce ? 0 : 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: reduce ? 0 : base + 0.45 }}
                    >
                      <span style={{ color }}>heute:</span> {t.now}
                    </motion.p>
                  </div>
                </div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: reduce ? 0 : 3.4 }}
            className="mt-11 flex flex-wrap items-center gap-x-5 gap-y-3"
          >
            <button
              onClick={toTimeline}
              className="group flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-transform hover:scale-[1.03]"
              style={{ background: "var(--brand)", color: "#0b0f0d" }}
            >
              Sieh die ganze Reise
              <span className="transition-transform group-hover:translate-y-0.5">↓</span>
            </button>
            <a
              href="https://snipki.de/?utm_source=ki-timeline&utm_medium=website&utm_campaign=beschleunigung&utm_content=hero-link"
              target="_blank"
              rel="noreferrer"
              className="group text-sm font-medium underline decoration-1 underline-offset-4 transition-colors hover:opacity-80"
              style={{ color: "var(--brand)" }}
            >
              snipKI für dein Team
              <span className="ml-1 inline-block transition-transform group-hover:translate-x-0.5">→</span>
            </a>
            <span className="font-mono text-[11px] uppercase tracking-widest" style={{ color: "#8c988f" }}>
              {entries.length} Meilensteine · jedes Datum primärgeprüft
            </span>
          </motion.div>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          style={{ opacity: cueOpacity }}
          className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 items-center gap-3"
        >
          <span className="text-xs font-medium uppercase tracking-[0.3em]" style={{ color: "#8c988f" }}>
            Scrollen
          </span>
          <motion.span
            animate={{ y: [0, 7, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            style={{ color: "var(--brand)" }}
            aria-hidden
          >
            ↓
          </motion.span>
        </motion.div>
      </div>
    </section>
  );
}
