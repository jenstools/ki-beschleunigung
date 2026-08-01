"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import type { Entry } from "@/data/types";
import { monthYear } from "@/lib/metrics";
import { providerColor } from "@/lib/providers";

const START_Y = 2022;
const START_M = 8; // August 2022
const END_Y = 2026;
const END_M = 6; // June 2026
const TOP_N = 10;
const FRAME_MS = 260;

function monthIndex(date: string): number {
  const y = Number(date.slice(0, 4));
  const m = Number(date.slice(5, 7)) || 1;
  return y * 12 + (m - 1) - (START_Y * 12 + (START_M - 1));
}

type Frame = { label: string; counts: Record<string, number>; total: number };

export function ProviderRace({ entries }: { entries: Entry[] }) {
  const reduce = useReducedMotion();

  const frames = useMemo<Frame[]>(() => {
    const months: { y: number; m: number }[] = [];
    for (let y = START_Y; y <= END_Y; y++) {
      const from = y === START_Y ? START_M : 1;
      const to = y === END_Y ? END_M : 12;
      for (let m = from; m <= to; m++) months.push({ y, m });
    }
    const norm = entries.map((e) => ({ p: e.house, idx: monthIndex(e.date) }));
    return months.map(({ y, m }, i) => {
      const counts: Record<string, number> = {};
      let total = 0;
      for (const n of norm) {
        if (n.idx <= i) {
          counts[n.p] = (counts[n.p] || 0) + 1;
          total++;
        }
      }
      return { label: monthYear(`${y}-${String(m).padStart(2, "0")}-01`), counts, total };
    });
  }, [entries]);

  const [frame, setFrame] = useState(0);
  const [playing, setPlaying] = useState(false);
  const started = useRef(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Auto-start once the race scrolls into view.
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (es) => {
        if (es[0].isIntersecting && !started.current) {
          started.current = true;
          setPlaying(true);
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!playing) return;
    if (frame >= frames.length - 1) {
      setPlaying(false);
      return;
    }
    const t = setTimeout(() => setFrame((f) => Math.min(f + 1, frames.length - 1)), FRAME_MS);
    return () => clearTimeout(t);
  }, [playing, frame, frames.length]);

  const cur = frames[frame] ?? frames[frames.length - 1];
  const ranked = Object.entries(cur.counts)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, TOP_N);
  const max = Math.max(1, ...ranked.map((r) => r.count));

  const atEnd = frame >= frames.length - 1;
  const toggle = () => {
    if (atEnd) {
      setFrame(0);
      setPlaying(true);
    } else {
      setPlaying((p) => !p);
    }
  };

  return (
    <section ref={sectionRef} className="mx-auto max-w-5xl px-6 py-24">
      <div className="border-t border-ink pt-6">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-ink-faint">
          Das Rennen
        </p>
        <h2 className="font-display mt-3 max-w-3xl text-4xl font-bold leading-tight tracking-tight md:text-5xl">
          Wer liefert die Meilensteine?
        </h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-soft">
          Kumulierte Releases pro Labor. Drücke Play und sieh zu, wie sich das
          Feld überholt — und wie die chinesischen Labore aufschließen.
        </p>
      </div>

      {/* Controls + clock */}
      <div className="mt-10 flex items-center gap-4">
        <button
          onClick={toggle}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ink text-paper transition-transform hover:scale-105"
          aria-label={playing ? "Pause" : atEnd ? "Neu starten" : "Abspielen"}
        >
          {playing ? "❚❚" : atEnd ? "↻" : "▶"}
        </button>
        <input
          type="range"
          min={0}
          max={frames.length - 1}
          value={frame}
          onChange={(e) => {
            setPlaying(false);
            setFrame(Number(e.target.value));
          }}
          className="h-1 flex-1 cursor-pointer accent-[var(--brand-deep)]"
          aria-label="Zeitpunkt"
        />
        <div className="w-28 text-right">
          <div className="font-display text-2xl font-bold tabular-nums text-ink">{cur.label}</div>
          <div className="font-mono text-[10px] uppercase tracking-widest text-ink-faint">
            {cur.total} gesamt
          </div>
        </div>
      </div>

      {/* Bars */}
      <div className="mt-8 flex flex-col gap-2">
        {ranked.map((r) => {
          const color = providerColor(r.name);
          return (
            <motion.div
              key={r.name}
              layout={!reduce}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="flex items-center gap-3"
            >
              <div className="w-24 shrink-0 truncate text-right text-sm font-medium text-ink sm:w-32">
                {r.name}
              </div>
              <div className="relative h-8 flex-1">
                <motion.div
                  className="absolute left-0 top-0 flex h-full items-center justify-end rounded-r-sm pr-2"
                  style={{ background: color }}
                  animate={{ width: `${(r.count / max) * 100}%` }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                >
                  <span className="font-mono text-xs font-bold text-white tabular-nums">
                    {r.count}
                  </span>
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
