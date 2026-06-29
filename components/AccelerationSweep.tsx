"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";
import type { Entry, Modality } from "@/data/types";
import { MODALITY_META, MODALITY_ORDER } from "@/data/types";
import { daysBetween, monthYear, formatDate } from "@/lib/metrics";
import { MODALITY_COLOR } from "@/lib/ui";

const START = "2022-08-01";
const END = "2026-06-14";
const TOTAL_DAYS = daysBetween(START, END);
const DURATION = 15000; // ms for the full sweep
const LANE_H = 56;
const TOP_PAD = 14;
const TRACK_H = TOP_PAD + LANE_H * MODALITY_ORDER.length;
const YEARS = [2023, 2024, 2025, 2026];

function laneY(m: Modality): number {
  return TOP_PAD + MODALITY_ORDER.indexOf(m) * LANE_H + LANE_H / 2;
}
function jitter(id: string): number {
  let s = 0;
  for (let i = 0; i < id.length; i++) s += id.charCodeAt(i);
  return ((s % 3) - 1) * 9;
}

export function AccelerationSweep({ entries }: { entries: Entry[] }) {
  const reduce = useReducedMotion();
  const dots = useMemo(
    () =>
      entries
        .map((e) => ({
          id: e.id,
          t: Math.max(0, Math.min(1, daysBetween(START, e.date) / TOTAL_DAYS)),
          m: e.modality,
          name: e.name,
          date: e.date,
          precision: e.datePrecision,
          first: !!(e.firstOfKind && e.firstOfKind.trim()),
        }))
        .sort((a, b) => a.t - b.t),
    [entries],
  );

  const [progress, setProgress] = useState(0);
  const [playing, setPlaying] = useState(false);
  const progressRef = useRef(0);
  const started = useRef(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    progressRef.current = progress;
  }, [progress]);

  // Auto-start once in view (skip if reduced motion → show full).
  useEffect(() => {
    if (reduce) {
      setProgress(1);
      return;
    }
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (es) => {
        if (es[0].isIntersecting && !started.current) {
          started.current = true;
          setPlaying(true);
        }
      },
      { threshold: 0.5 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [reduce]);

  // rAF sweep, throttled to ~33fps.
  useEffect(() => {
    if (!playing) return;
    let raf = 0;
    let last: number | null = null;
    let acc = 0;
    let elapsed = progressRef.current * DURATION;
    const tick = (ts: number) => {
      if (last == null) last = ts;
      const dt = ts - last;
      last = ts;
      elapsed += dt;
      acc += dt;
      const p = Math.min(1, elapsed / DURATION);
      if (acc >= 30 || p >= 1) {
        acc = 0;
        progressRef.current = p;
        setProgress(p);
      }
      if (p >= 1) {
        setPlaying(false);
        return;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [playing]);

  const done = progress >= 1;
  const count = dots.filter((d) => d.t <= progress).length;
  const dayNow = Math.round(progress * TOTAL_DAYS);
  const dateNow = (() => {
    const d = new Date(Date.UTC(2022, 7, 1) + dayNow * 86400000);
    return monthYear(`${d.getUTCFullYear()}-${String(d.getUTCMonth() + 1).padStart(2, "0")}-01`);
  })();
  const last = [...dots].reverse().find((d) => d.t <= progress);

  const toggle = () => {
    if (done) {
      setProgress(0);
      progressRef.current = 0;
      setPlaying(true);
    } else setPlaying((p) => !p);
  };

  return (
    <section className="mx-auto max-w-5xl px-6 py-24">
      <div className="border-t border-ink pt-6">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-ink-faint">Der Takt</p>
        <h2 className="font-display mt-3 max-w-3xl text-4xl font-bold leading-tight tracking-tight md:text-5xl">
          Spür die Beschleunigung
        </h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-soft">
          Jeder Punkt ist ein wichtiges KI-Release — auf seiner Spur und an
          seinem Datum, von 2022 bis heute.
        </p>
      </div>

      {/* Dark player panel */}
      <div ref={sectionRef} className="mt-8 overflow-hidden rounded-lg p-5 sm:p-7" style={{ background: "var(--ink)" }}>
        {/* Top bar: play + clock + counter + now-playing */}
        <div className="mb-5 flex items-center gap-4">
          <button
            onClick={toggle}
            aria-label={playing ? "Pause" : done ? "Neu starten" : "Abspielen"}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-sm"
            style={{ background: "var(--brand)", color: "#0b0f0d" }}
          >
            {playing ? "❚❚" : done ? "↻" : "▶"}
          </button>
          <div className="flex-1">
            <div className="flex items-baseline gap-3">
              <span className="font-display text-2xl font-bold tabular-nums" style={{ color: "var(--paper)" }}>
                {dateNow}
              </span>
              <span className="font-mono text-[11px] uppercase tracking-widest" style={{ color: "var(--brand)" }}>
                {count} Releases
              </span>
            </div>
            <div className="mt-0.5 h-4 truncate font-mono text-[11px]" style={{ color: "#8a938d" }}>
              {last ? `${last.name} · ${formatDate(last.date, last.precision)}` : " "}
            </div>
          </div>
        </div>

        {/* Scrubber */}
        <input
          type="range"
          min={0}
          max={1000}
          value={Math.round(progress * 1000)}
          onChange={(e) => {
            setPlaying(false);
            const p = Number(e.target.value) / 1000;
            progressRef.current = p;
            setProgress(p);
          }}
          aria-label="Zeitpunkt"
          className="mb-4 h-1 w-full cursor-pointer accent-[var(--brand)]"
        />

        {/* Lanes */}
        <div className="flex">
          <div className="relative shrink-0" style={{ width: 52, height: TRACK_H }}>
            {MODALITY_ORDER.map((m) => (
              <div
                key={m}
                className="absolute left-0 font-mono text-[9px] font-bold uppercase tracking-widest"
                style={{ top: laneY(m) - 5, color: MODALITY_COLOR[m] }}
              >
                {MODALITY_META[m].short}
              </div>
            ))}
          </div>

          <div className="relative flex-1 overflow-hidden" style={{ height: TRACK_H }}>
            {/* year ticks */}
            {YEARS.map((y) => {
              const x = (daysBetween(START, `${y}-01-01`) / TOTAL_DAYS) * 100;
              return (
                <div key={y} className="absolute bottom-0 top-0" style={{ left: `${x}%` }}>
                  <div className="h-full w-px" style={{ background: "rgba(255,255,255,0.07)" }} />
                  <span className="absolute bottom-0 left-1 font-mono text-[9px]" style={{ color: "#6b7570" }}>
                    {y}
                  </span>
                </div>
              );
            })}
            {/* lane baselines */}
            {MODALITY_ORDER.map((m) => (
              <div
                key={m}
                className="absolute left-0 right-0 h-px"
                style={{ top: laneY(m), background: "rgba(255,255,255,0.06)" }}
              />
            ))}
            {/* dots */}
            {dots.map((d) => {
              const active = d.t <= progress;
              const color = MODALITY_COLOR[d.m];
              const size = d.first ? 13 : 9;
              return (
                <div
                  key={d.id}
                  className="absolute rounded-full"
                  style={{
                    left: `${d.t * 100}%`,
                    top: laneY(d.m) + jitter(d.id),
                    width: size,
                    height: size,
                    marginLeft: -size / 2,
                    marginTop: -size / 2,
                    background: color,
                    boxShadow: active ? `0 0 9px ${color}` : "none",
                    border: d.first ? "2px solid rgba(255,255,255,0.85)" : "none",
                    opacity: active ? 1 : 0,
                    transform: active ? "scale(1)" : "scale(0.2)",
                    transition: reduce ? "none" : "opacity .45s ease, transform .45s cubic-bezier(.2,1.4,.4,1)",
                  }}
                />
              );
            })}
            {/* playhead */}
            <div
              className="absolute bottom-0 top-0 w-[2px]"
              style={{
                left: `${progress * 100}%`,
                background: "var(--brand)",
                boxShadow: "0 0 12px var(--brand)",
                opacity: done ? 0 : 1,
                transition: "opacity .4s ease",
              }}
            />
          </div>
        </div>

        {/* Punchline */}
        <div className="mt-5 h-6 text-center">
          {done ? (
            <span className="font-display text-lg font-semibold" style={{ color: "var(--paper)" }}>
              {dots.length} Meilensteine · dreieinhalb Jahre.{" "}
              <button onClick={toggle} className="font-mono text-xs uppercase tracking-widest" style={{ color: "var(--brand)" }}>
                ↻ nochmal
              </button>
            </span>
          ) : null}
        </div>
      </div>
    </section>
  );
}
