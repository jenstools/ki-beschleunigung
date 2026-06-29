"use client";

import { useMemo, useRef, useState } from "react";
import type { Entry, Modality } from "@/data/types";
import { MODALITY_META, MODALITY_ORDER } from "@/data/types";
import { daysBetween, formatDate } from "@/lib/metrics";
import { MODALITY_COLOR, modalityTint } from "@/lib/ui";
import { thresholds } from "@/data/thresholds";

const START = "2022-08-01";
const END = "2026-06-14";
const PX_PER_DAY = 2.6;
const LEFT_PAD = 28;
const BAND_H = 176; // top band for threshold callouts
const LANE_H = 74;
const AXIS_H = 30;
const LANES_TOP = BAND_H;
const LANES_H = LANE_H * MODALITY_ORDER.length;
const TOTAL_H = BAND_H + LANES_H + AXIS_H;

const TOTAL_DAYS = daysBetween(START, END);
const INNER_W = LEFT_PAD + TOTAL_DAYS * PX_PER_DAY + 48;

function x(date: string): number {
  return LEFT_PAD + daysBetween(START, date) * PX_PER_DAY;
}
function laneCenter(m: Modality): number {
  return LANES_TOP + MODALITY_ORDER.indexOf(m) * LANE_H + LANE_H / 2;
}
function jitter(id: string): number {
  let s = 0;
  for (let i = 0; i < id.length; i++) s += id.charCodeAt(i);
  return ((s % 3) - 1) * 11;
}

const YEARS = [2022, 2023, 2024, 2025, 2026];

export function LaneTimeline({ entries }: { entries: Entry[] }) {
  const [filter, setFilter] = useState<Modality | null>(null);
  const [pinned, setPinned] = useState<Entry | null>(null);
  const [hover, setHover] = useState<Entry | null>(null);
  const scroller = useRef<HTMLDivElement>(null);

  const active = pinned ?? hover;
  const sorted = useMemo(
    () => [...entries].sort((a, b) => (a.date < b.date ? -1 : 1)),
    [entries],
  );

  const jumpYear = (y: number) => {
    const el = scroller.current;
    if (!el) return;
    const left = Math.max(0, x(`${y}-01-01`) - 48);
    el.scrollTo({ left, behavior: "smooth" });
  };

  return (
    <section id="timeline" className="mx-auto max-w-6xl px-6 py-20">
      <div className="border-t border-ink pt-6">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-ink-faint">
          Zeitachse
        </p>
        <h2 className="font-display mt-3 max-w-3xl text-4xl font-bold leading-tight tracking-tight md:text-5xl">
          Vier Modalitäten, Seite an Seite
        </h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-soft">
          Jeder Punkt ist ein Release, auf seiner Spur und an seinem Datum.
          Fahre über einen Punkt für Details. Die markierten Bänder zeigen, wann
          etwas möglich wurde, das kurz zuvor undenkbar war.
        </p>
      </div>

      {/* Controls */}
      <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2">
        <button
          onClick={() => setFilter(null)}
          className="font-mono text-[11px] uppercase tracking-widest"
          style={{ color: filter === null ? "var(--ink)" : "var(--ink-faint)", fontWeight: filter === null ? 700 : 400 }}
        >
          Alle
        </button>
        {MODALITY_ORDER.map((m) => {
          const on = filter === m;
          return (
            <button
              key={m}
              onClick={() => setFilter(on ? null : m)}
              className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-widest"
              style={{ opacity: filter && !on ? 0.4 : 1 }}
            >
              <span className="inline-block h-2.5 w-2.5 rounded-full" style={{ background: MODALITY_COLOR[m] }} />
              <span style={{ color: on ? MODALITY_COLOR[m] : "var(--ink-soft)", fontWeight: on ? 700 : 400 }}>
                {MODALITY_META[m].short}
              </span>
            </button>
          );
        })}
        <div className="ml-auto flex items-center gap-1">
          <span className="mr-1 font-mono text-[10px] uppercase tracking-widest text-ink-faint">Springe zu</span>
          {YEARS.map((y) => (
            <button
              key={y}
              onClick={() => jumpYear(y)}
              className="rounded-full px-2 py-1 font-mono text-[10px] tracking-widest text-ink-soft hover:bg-paper-2 hover:text-ink"
            >
              {y}
            </button>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div className="mt-6 flex">
        {/* Fixed lane labels */}
        <div className="relative shrink-0" style={{ width: 56, height: TOTAL_H }}>
          {MODALITY_ORDER.map((m) => (
            <div
              key={m}
              className="absolute left-0 font-mono text-[10px] uppercase tracking-widest"
              style={{
                top: laneCenter(m) - 6,
                color: filter && filter !== m ? "var(--ink-faint)" : MODALITY_COLOR[m],
                opacity: filter && filter !== m ? 0.4 : 1,
                fontWeight: 700,
              }}
            >
              {MODALITY_META[m].short}
            </div>
          ))}
        </div>

        {/* Scrollable plot */}
        <div
          ref={scroller}
          className="relative flex-1 overflow-x-auto overflow-y-hidden pb-3"
          onClick={() => setPinned(null)}
        >
          <div className="relative" style={{ width: INNER_W, height: TOTAL_H }}>
            {/* Year gridlines + labels */}
            {YEARS.map((y) => {
              const lx = x(`${y}-01-01`);
              if (lx < 0 || lx > INNER_W) return null;
              return (
                <div key={y}>
                  <div
                    className="absolute w-px bg-rule"
                    style={{ left: lx, top: LANES_TOP - 10, height: LANES_H + 16 }}
                  />
                  <div
                    className="absolute font-display text-sm font-bold text-ink-faint"
                    style={{ left: lx + 6, top: LANES_TOP + LANES_H + 6 }}
                  >
                    {y}
                  </div>
                </div>
              );
            })}

            {/* Lane baselines */}
            {MODALITY_ORDER.map((m) => (
              <div
                key={m}
                className="absolute left-0 right-0 h-px"
                style={{ top: laneCenter(m), background: "var(--rule-soft)", opacity: filter && filter !== m ? 0.3 : 1 }}
              />
            ))}

            {/* Threshold marker bands */}
            {thresholds.map((t, i) => {
              const tx = x(t.date);
              const color = MODALITY_COLOR[t.modality];
              const cardW = 216;
              const left = Math.min(Math.max(tx - cardW / 2, 4), INNER_W - cardW - 4);
              const top = i % 2 === 0 ? 4 : 92;
              return (
                <div key={t.date}>
                  {/* full-height connector */}
                  <div
                    className="absolute w-px"
                    style={{ left: tx, top: top + 78, height: LANES_TOP + LANES_H - (top + 78), background: color, opacity: 0.35 }}
                  />
                  <div
                    className="absolute h-2 w-2 -translate-x-1/2 rounded-full"
                    style={{ left: tx, top: LANES_TOP + LANES_H - 4, background: color }}
                  />
                  {/* callout card */}
                  <div
                    className="absolute rounded-sm border-y border-r border-rule-soft bg-paper px-3 py-2 shadow-sm"
                    style={{ left, top, width: cardW, borderLeft: `3px solid ${color}` }}
                  >
                    <p className="font-mono text-[8px] uppercase tracking-[0.2em]" style={{ color }}>
                      ● {formatDate(t.date, "month")} · erst jetzt möglich
                    </p>
                    <p className="font-display mt-1 text-[13px] font-semibold leading-snug text-ink">
                      {t.title}
                    </p>
                    <p className="mt-1 text-[11px] leading-snug text-ink-faint">{t.before}</p>
                  </div>
                </div>
              );
            })}

            {/* Release dots */}
            {sorted.map((e) => {
              const dim = filter && filter !== e.modality;
              const color = MODALITY_COLOR[e.modality];
              const cx = x(e.date);
              const cy = laneCenter(e.modality) + jitter(e.id);
              const isActive = active?.id === e.id;
              const isOpen = e.license === "open";
              return (
                <button
                  key={e.id}
                  aria-label={`${e.name} — ${formatDate(e.date, e.datePrecision)}`}
                  onMouseEnter={() => setHover(e)}
                  onMouseLeave={() => setHover((h) => (h?.id === e.id ? null : h))}
                  onClick={(ev) => {
                    ev.stopPropagation();
                    setPinned((p) => (p?.id === e.id ? null : e));
                  }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full transition-transform hover:scale-150"
                  style={{
                    left: cx,
                    top: cy,
                    width: isActive ? 14 : 11,
                    height: isActive ? 14 : 11,
                    background: isOpen ? color : "var(--paper)",
                    border: `2px solid ${color}`,
                    opacity: dim ? 0.18 : 1,
                    zIndex: isActive ? 30 : 10,
                    boxShadow: isActive ? `0 0 0 4px ${modalityTint(e.modality, 0.25)}` : "none",
                  }}
                />
              );
            })}

            {/* Detail popover */}
            {active ? <DetailPopover entry={active} /> : null}
          </div>
        </div>
      </div>

      <p className="mt-3 font-mono text-[10px] uppercase tracking-widest text-ink-faint">
        ← horizontal scrollen · ● offen ○ geschlossen · Punkt antippen für Details
      </p>
    </section>
  );
}

function DetailPopover({ entry }: { entry: Entry }) {
  const color = MODALITY_COLOR[entry.modality];
  const cx = x(entry.date);
  const cy = laneCenter(entry.modality);
  const W = 288;
  const left = Math.min(Math.max(cx - W / 2, 6), INNER_W - W - 6);
  const below = cy < BAND_H + LANES_H / 2;
  const top = below ? cy + 26 : cy - 26;

  return (
    <div
      className="pointer-events-none absolute z-40 rounded-sm border-y border-r border-rule bg-paper px-4 py-3 shadow-lg"
      style={{
        left,
        top,
        width: W,
        transform: below ? "none" : "translateY(-100%)",
        borderLeft: `4px solid ${color}`,
      }}
    >
      <div className="flex items-center gap-2">
        <span className="rounded-full px-2 py-[1px] font-mono text-[8px] uppercase tracking-widest" style={{ background: modalityTint(entry.modality, 0.16), color }}>
          {MODALITY_META[entry.modality].short}
        </span>
        <span
          className="rounded-full px-2 py-[1px] font-mono text-[8px] uppercase tracking-widest"
          style={entry.license === "open" ? { background: color, color: "var(--paper)" } : { border: `1px solid ${color}`, color }}
        >
          {entry.license === "open" ? "Offen" : "Geschlossen"}
        </span>
        <time className="ml-auto font-mono text-[10px] text-ink-faint">
          {formatDate(entry.date, entry.datePrecision)}
        </time>
      </div>
      <h4 className="font-display mt-1.5 text-lg font-semibold leading-tight text-ink">{entry.name}</h4>
      <p className="font-mono text-[10px] uppercase tracking-wide text-ink-faint">{entry.org}</p>
      <p className="mt-1.5 text-[13px] leading-snug text-ink">{entry.capability}</p>
      <p className="mt-1 text-[12px] leading-snug text-ink-soft">{entry.whyItMattered}</p>
      {entry.firstOfKind ? (
        <p className="mt-2 text-[11px] font-medium leading-tight" style={{ color }}>★ {entry.firstOfKind}</p>
      ) : null}
    </div>
  );
}
