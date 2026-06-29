"use client";

import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView, useReducedMotion } from "motion/react";
import type { Entry } from "@/data/types";
import { MODALITY_ORDER, MODALITY_META } from "@/data/types";
import { MODALITY_COLOR } from "@/lib/ui";
import { daysBetween } from "@/lib/metrics";

function CountUp({
  to,
  decimals = 0,
  suffix = "",
}: {
  to: number;
  decimals?: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const reduce = useReducedMotion();
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setVal(to);
      return;
    }
    const controls = animate(0, to, {
      duration: 1.3,
      ease: "easeOut",
      onUpdate: (v) => setVal(v),
    });
    return () => controls.stop();
  }, [inView, to, reduce]);

  const text =
    decimals > 0
      ? val.toLocaleString("de-DE", {
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals,
        })
      : Math.round(val).toLocaleString("de-DE");

  return (
    <span ref={ref}>
      {text}
      {suffix}
    </span>
  );
}

export function KeyStats({
  entries,
  today,
}: {
  entries: Entry[];
  today: string;
}) {
  const total = entries.length;
  const byModality = MODALITY_ORDER.map((m) => ({
    m,
    count: entries.filter((e) => e.modality === m).length,
  }));

  const open = entries.filter((e) => e.license === "open").length;
  const openShare = total ? Math.round((open / total) * 100) : 0;

  // Days since ChatGPT — live, recomputed per visitor. SSR uses the build-time
  // `today` as a hydration-safe fallback, then we update to the real date on mount.
  const [days, setDays] = useState(() => daysBetween("2022-11-30", today));
  useEffect(() => {
    setDays(daysBetween("2022-11-30", new Date().toISOString().slice(0, 10)));
  }, []);
  const years = days / 365;

  return (
    <section className="mx-auto max-w-6xl px-6 pb-8 pt-20">
      <div className="border-t border-ink pt-6">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-ink-faint">
          Das Wichtigste in Zahlen
        </p>
      </div>

      {/* Modality cluster — total + per-discipline breakdown */}
      <div className="mt-8">
        <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-2">
          <div>
            <div className="font-display text-6xl font-bold leading-none tracking-tight text-ink md:text-7xl">
              <CountUp to={total} />
            </div>
            <div className="mt-2 text-sm font-medium text-ink">
              verfolgte Meilensteine
            </div>
          </div>
          <div className="font-mono text-[11px] uppercase tracking-widest text-ink-faint">
            {open} offen · {total - open} geschlossen
          </div>
        </div>

        {/* Stacked proportion bar */}
        <div className="mt-5 flex h-3 w-full overflow-hidden rounded-full">
          {byModality.map(({ m, count }) => (
            <span
              key={m}
              style={{ width: `${(count / total) * 100}%`, background: MODALITY_COLOR[m] }}
              title={`${MODALITY_META[m].short}: ${count}`}
            />
          ))}
        </div>

        {/* Per-modality counts */}
        <div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-4">
          {byModality.map(({ m, count }) => (
            <div key={m} className="flex items-baseline gap-2">
              <span
                className="h-2.5 w-2.5 shrink-0 translate-y-[-1px] rounded-full"
                style={{ background: MODALITY_COLOR[m] }}
              />
              <span
                className="font-display text-2xl font-bold tracking-tight"
                style={{ color: MODALITY_COLOR[m] }}
              >
                {count}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-ink-faint">
                {MODALITY_META[m].short}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Supporting stats */}
      <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-10 border-t border-rule pt-8 sm:grid-cols-2">
        <Stat
          value={<CountUp to={days} />}
          label="Tage seit ChatGPT"
          sub={`≈ ${years.toLocaleString("de-DE", { maximumFractionDigits: 1 })} Jahre`}
        />
        <Stat
          value={<CountUp to={openShare} suffix=" %" />}
          label="laufen auf Open-Weights"
          sub={`${open} von ${total} Modellen`}
        />
      </div>
    </section>
  );
}

function Stat({
  value,
  label,
  sub,
}: {
  value: React.ReactNode;
  label: string;
  sub?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
    >
      <div className="font-display text-5xl font-bold leading-none tracking-tight text-ink md:text-6xl">
        {value}
      </div>
      <div className="mt-2 text-sm font-medium text-ink">{label}</div>
      {sub ? (
        <div className="mt-0.5 font-mono text-[10px] uppercase tracking-widest text-ink-faint">
          {sub}
        </div>
      ) : null}
    </motion.div>
  );
}
