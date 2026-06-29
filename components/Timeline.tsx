"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import type { Entry, Modality, License } from "@/data/types";
import { MODALITY_META, MODALITY_ORDER } from "@/data/types";
import { groupByPeriod, formatDate, type Granularity } from "@/lib/metrics";
import { MODALITY_COLOR, modalityTint } from "@/lib/ui";
import { EntryCard } from "./EntryCard";
import { thresholds, type Threshold } from "@/data/thresholds";

export function Timeline({ entries }: { entries: Entry[] }) {
  const [mods, setMods] = useState<Set<Modality>>(() => new Set(MODALITY_ORDER));
  const [lics, setLics] = useState<Set<License>>(() => new Set<License>(["open", "closed"]));
  const [granularity, setGranularity] = useState<Granularity>("month");
  const [activeKey, setActiveKey] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const reduce = useReducedMotion();

  const toggleMod = (m: Modality) =>
    setMods((s) => {
      const n = new Set(s);
      n.has(m) ? n.delete(m) : n.add(m);
      return n;
    });
  const toggleLic = (l: License) =>
    setLics((s) => {
      const n = new Set(s);
      n.has(l) ? n.delete(l) : n.add(l);
      return n;
    });
  const resetFilters = () => {
    setMods(new Set(MODALITY_ORDER));
    setLics(new Set<License>(["open", "closed"]));
    setQuery("");
  };

  const q = query.trim().toLowerCase();
  const shown = useMemo(
    () =>
      entries.filter(
        (e) =>
          mods.has(e.modality) &&
          lics.has(e.license) &&
          (!q ||
            e.name.toLowerCase().includes(q) ||
            e.org.toLowerCase().includes(q)),
      ),
    [entries, mods, lics, q],
  );
  const groups = useMemo(
    () => groupByPeriod(shown, granularity),
    [shown, granularity],
  );
  const filtering =
    q.length > 0 || mods.size !== MODALITY_ORDER.length || lics.size !== 2;

  // Place each threshold before the first group whose start date reaches it,
  // so the "erst jetzt möglich" beats land in the chronological flow.
  const bandsByGroup = useMemo(() => {
    const sorted = [...thresholds].sort((a, b) => (a.date < b.date ? -1 : 1));
    const res: Threshold[][] = groups.map(() => []);
    let ti = 0;
    groups.forEach((g, gi) => {
      const start = g.entries[0]?.date ?? "9999";
      while (ti < sorted.length && sorted[ti].date <= start) res[gi].push(sorted[ti++]);
    });
    while (ti < sorted.length && res.length) res[res.length - 1].push(sorted[ti++]);
    return res;
  }, [groups]);

  const refs = useRef<Map<string, HTMLDivElement>>(new Map());

  // Per-year rollup for the nav rail (chronological, with release counts).
  const years = useMemo(() => {
    const out: { year: number; count: number; firstKey: string }[] = [];
    for (const g of groups) {
      const y = out.find((x) => x.year === g.year);
      if (y) y.count += g.entries.length;
      else out.push({ year: g.year, count: g.entries.length, firstKey: g.key });
    }
    return out;
  }, [groups]);
  const maxYearCount = Math.max(1, ...years.map((y) => y.count));

  // Scroll-spy: the active period is the last group whose top crossed the line.
  useEffect(() => {
    let raf = 0;
    const compute = () => {
      raf = 0;
      let cur = groups[0]?.key ?? null;
      for (const g of groups) {
        const el = refs.current.get(g.key);
        if (el && el.getBoundingClientRect().top <= 140) cur = g.key;
      }
      setActiveKey(cur);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(compute);
    };
    compute();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [groups]);

  // Changing a filter shrinks the list — re-anchor to the timeline top so the
  // user isn't stranded at the (now-missing) old bottom.
  const didMountFilters = useRef(false);
  useEffect(() => {
    if (!didMountFilters.current) {
      didMountFilters.current = true;
      return;
    }
    // Wait two frames so the shorter list has re-laid-out and the browser's
    // scroll-clamp has settled, then re-anchor to the timeline top.
    const id = requestAnimationFrame(() =>
      requestAnimationFrame(() => {
        const el = document.getElementById("timeline");
        if (el && el.getBoundingClientRect().top < -4) el.scrollIntoView({ block: "start" });
      }),
    );
    return () => cancelAnimationFrame(id);
  }, [mods, lics]);

  const activeYear =
    groups.find((g) => g.key === activeKey)?.year ?? years[0]?.year;
  const activePeriods = groups.filter((g) => g.year === activeYear);

  const jump = (key: string) => {
    const el = refs.current.get(key);
    if (el) el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  };

  const renderFilters = () => (
    <div className="flex flex-wrap items-center gap-1.5">
      {MODALITY_ORDER.map((m) => {
        const on = mods.has(m);
        return (
          <button
            key={m}
            onClick={() => toggleMod(m)}
            aria-pressed={on}
            className="flex items-center gap-1.5 rounded-full border-[1.5px] px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-widest transition-colors"
            style={
              on
                ? { borderColor: MODALITY_COLOR[m], color: MODALITY_COLOR[m], background: modalityTint(m, 0.14) }
                : { borderColor: "var(--ink-faint)", color: "var(--ink-soft)", background: "var(--paper)" }
            }
          >
            <span className="h-2 w-2 rounded-full" style={{ background: on ? MODALITY_COLOR[m] : "var(--rule)" }} />
            {MODALITY_META[m].short}
          </button>
        );
      })}
      {([["open", "Offen"], ["closed", "Geschlossen"]] as [License, string][]).map(([l, label]) => {
        const on = lics.has(l);
        const c = l === "open" ? "var(--brand-deep)" : "var(--ink)";
        return (
          <button
            key={l}
            onClick={() => toggleLic(l)}
            aria-pressed={on}
            className="rounded-full border-[1.5px] px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-widest transition-colors"
            style={on ? { borderColor: c, color: c, background: "rgba(0,0,0,0.04)" } : { borderColor: "var(--ink-faint)", color: "var(--ink-soft)", background: "var(--paper)" }}
          >
            {on ? "● " : "○ "}
            {label}
          </button>
        );
      })}
    </div>
  );

  return (
    <section id="timeline" className="relative mx-auto max-w-6xl px-4 sm:px-6">
      {/* Section heading — marks where the timeline begins */}
      <div className="mb-8 border-t border-ink pt-6">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-ink-faint">
          Die Zeitachse
        </p>
        <h2 className="font-display mt-3 max-w-3xl text-4xl font-bold leading-tight tracking-tight md:text-5xl">
          Alles, Monat für Monat.
        </h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-soft">
          Jedes Modell, jedes Datum — von Ende 2022 bis heute. Filtere nach
          Disziplin, such ein Modell, klapp die Details auf.
        </p>
      </div>

      {/* Sticky control bar */}
      <div className="sticky top-0 z-40 -mx-4 mb-2 border-b-2 border-brand bg-paper/95 px-4 py-2.5 shadow-[0_6px_18px_-10px_rgba(47,155,115,0.45)] backdrop-blur sm:-mx-6 sm:px-6">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-2">
          {/* Filters — mobile only (desktop has them in the left rail) */}
          <div className="flex w-full items-center gap-2 lg:hidden">
            <span className="shrink-0 font-mono text-[10px] font-bold uppercase tracking-widest text-brand-deep">
              Filter
            </span>
            {renderFilters()}
          </div>

          {/* Search */}
          <div className="relative ml-1 min-w-[180px] flex-1 sm:max-w-sm">
            <span aria-hidden className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-base text-brand-deep">
              ⌕
            </span>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Modell oder Anbieter suchen …"
              className="w-full rounded-full border-[1.5px] border-ink-faint/60 bg-paper-2 py-1.5 pl-9 pr-7 text-sm font-medium text-ink transition-colors placeholder:font-normal placeholder:text-ink-soft hover:border-brand-deep/60 focus:border-brand-deep focus:bg-paper focus:outline-none focus:ring-2 focus:ring-brand/40"
            />
            {query ? (
              <button
                onClick={() => setQuery("")}
                aria-label="Suche löschen"
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-ink-faint hover:text-ink"
              >
                ×
              </button>
            ) : null}
          </div>
          {q ? (
            <span className="font-mono text-[10px] uppercase tracking-widest text-ink-faint">
              {shown.length} Treffer
            </span>
          ) : null}

          <div className="ml-auto flex items-center gap-2">
            {/* Mobile jump-to-year */}
            <select
              aria-label="Zu Jahr springen"
              className="rounded-full border border-rule bg-transparent px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-ink-soft lg:hidden"
              value={activeYear ?? ""}
              onChange={(e) => {
                const y = years.find((x) => x.year === Number(e.target.value));
                if (y) jump(y.firstKey);
              }}
            >
              {years.map((y) => (
                <option key={y.year} value={y.year}>
                  {y.year} ({y.count})
                </option>
              ))}
            </select>

            {/* Granularity toggle */}
            <div className="flex items-center overflow-hidden rounded-full border border-rule">
              {(["month", "quarter"] as Granularity[]).map((g) => (
                <button
                  key={g}
                  onClick={() => setGranularity(g)}
                  className="px-3 py-1 font-mono text-[10px] uppercase tracking-widest transition-colors"
                  style={{
                    background: granularity === g ? "var(--ink)" : "transparent",
                    color: granularity === g ? "var(--paper)" : "var(--ink-faint)",
                  }}
                >
                  {g === "month" ? "Monat" : "Quartal"}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="lg:grid lg:grid-cols-[150px_minmax(0,1fr)] lg:gap-10">
        {/* Desktop nav rail */}
        <aside className="hidden lg:block">
          <div className="sticky top-[64px] max-h-[calc(100vh-88px)] overflow-y-auto pb-8">
            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.25em] text-ink-faint">
              Springe zu
            </p>
            <ul className="space-y-1">
              {years.map((y) => {
                const isActive = y.year === activeYear;
                return (
                  <li key={y.year}>
                    <button
                      onClick={() => jump(y.firstKey)}
                      className="group flex w-full items-center gap-2 py-1 text-left"
                    >
                      <span
                        className="font-display text-lg tracking-tight transition-colors"
                        style={{ color: isActive ? "var(--ink)" : "var(--ink-faint)", fontWeight: isActive ? 700 : 500 }}
                      >
                        {y.year}
                      </span>
                      <span className="ml-auto h-[3px] w-12 overflow-hidden rounded-full bg-rule-soft">
                        <span
                          className="block h-full rounded-full"
                          style={{
                            width: `${(y.count / maxYearCount) * 100}%`,
                            background: isActive ? "var(--ink)" : "var(--ink-faint)",
                          }}
                        />
                      </span>
                      <span className="w-6 text-right font-mono text-[10px] text-ink-faint">
                        {y.count}
                      </span>
                    </button>

                    {isActive ? (
                      <ul className="mb-2 ml-1 mt-0.5 space-y-0.5 border-l border-rule pl-3">
                        {activePeriods.map((p) => (
                          <li key={p.key}>
                            <button
                              onClick={() => jump(p.key)}
                              className="font-mono text-[10px] uppercase tracking-widest transition-colors hover:text-ink"
                              style={{
                                color: p.key === activeKey ? "var(--ink)" : "var(--ink-faint)",
                                fontWeight: p.key === activeKey ? 700 : 400,
                              }}
                            >
                              {p.label.replace(` ${p.year}`, "")} · {p.entries.length}
                            </button>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </li>
                );
              })}
            </ul>

            {/* Filters — select what to show, reachable while scrolling */}
            <div className="mt-7 rounded-lg border border-brand/50 bg-paper-2 p-3.5 shadow-[0_2px_10px_-6px_rgba(47,155,115,0.35)]">
              <div className="mb-1 flex items-center justify-between gap-2">
                <p className="flex items-center gap-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-brand-deep">
                  <span aria-hidden>⛃</span> Filtern
                </p>
                {filtering ? (
                  <button
                    onClick={resetFilters}
                    className="font-mono text-[10px] uppercase tracking-widest text-brand-deep underline decoration-1 underline-offset-2 hover:text-ink"
                  >
                    Reset
                  </button>
                ) : null}
              </div>
              <p className="mb-3 text-[11px] leading-snug text-ink-soft">
                Disziplin & Lizenz an- oder abwählen:
              </p>
              {renderFilters()}
            </div>
          </div>
        </aside>

        {/* Main column */}
        <div className="relative">
          <div aria-hidden className="absolute bottom-0 left-[20px] top-0 w-px bg-rule" />

          {groups.map((g, gi) => {
            const counts = MODALITY_ORDER.map((m) => ({
              m,
              n: g.entries.filter((e) => e.modality === m).length,
            })).filter((c) => c.n > 0);

            return (
              <div
                key={g.key}
                ref={(el) => {
                  if (el) refs.current.set(g.key, el);
                  else refs.current.delete(g.key);
                }}
                className="relative scroll-mt-[140px] lg:scroll-mt-[60px]"
              >
                {!filtering &&
                  bandsByGroup[gi]?.map((t) => (
                    <ThresholdBand key={t.date} t={t} />
                  ))}
                {/* Sticky period header */}
                <div className="sticky top-[128px] z-30 bg-paper/92 py-5 backdrop-blur lg:top-[52px]">
                  <div className="flex items-end gap-3 pl-10 pr-5 sm:pr-7">
                    <motion.span
                      aria-hidden
                      className="absolute left-[16px] top-[28px] h-3 w-3 rounded-full border-2 border-ink bg-paper"
                      initial={reduce ? false : { scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true, amount: 0.6 }}
                      transition={{ type: "spring", stiffness: 380, damping: 18 }}
                    />
                    <h3 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                      {g.label}
                    </h3>
                    <span className="pb-1 font-mono text-[11px] uppercase tracking-widest text-ink-faint">
                      {g.entries.length} {g.entries.length === 1 ? "Release" : "Releases"}
                    </span>
                    <div className="ml-auto hidden items-center gap-2 pb-1 sm:flex">
                      {counts.map((c) => (
                        <span key={c.m} className="flex items-center gap-1 font-mono text-[10px] text-ink-faint">
                          <span className="inline-block h-2 w-2 rounded-full" style={{ background: MODALITY_COLOR[c.m] }} />
                          {c.n}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Entries, strictly chronological */}
                <div className="space-y-6 py-5 pl-10">
                  {g.entries.map((e, i) => (
                    <motion.div
                      key={e.id}
                      initial={{ opacity: 0, y: 14 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.4, delay: Math.min(i * 0.03, 0.2) }}
                    >
                      <EntryCard entry={e} />
                    </motion.div>
                  ))}
                </div>
              </div>
            );
          })}

          {groups.length === 0 ? (
            <div className="py-20 pl-10">
              <p className="font-display text-2xl text-ink">
                Keine Treffer{q ? ` für „${query}“` : ""}.
              </p>
              <button
                onClick={resetFilters}
                className="mt-3 font-mono text-[11px] uppercase tracking-widest text-brand-deep hover:text-ink"
              >
                Filter zurücksetzen
              </button>
            </div>
          ) : null}

          {groups.length > 0 && !filtering ? <TimelineOutro /> : null}
        </div>
      </div>
    </section>
  );
}

function TimelineOutro() {
  return (
    <div className="relative scroll-mt-[140px] pb-6 pl-10 pt-4">
      {/* pulsing spine marker */}
      <motion.span
        aria-hidden
        className="absolute left-[14px] top-7 h-4 w-4 rounded-full"
        style={{ background: "var(--brand-deep)" }}
        animate={{ scale: [1, 1.5, 1], opacity: [1, 0.4, 1] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
        className="rounded-sm px-5 py-6 sm:px-7 sm:py-7"
        style={{ background: "var(--paper-2)", borderLeft: "4px solid var(--brand-deep)" }}
      >
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-brand-deep">
          Fortsetzung folgt
        </p>
        <h3 className="font-display mt-2 text-2xl font-bold leading-tight tracking-tight text-ink sm:text-3xl">
          Und das war erst der Anfang.
        </h3>
        <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-ink-soft">
          Das Tempo lässt nicht nach — der nächste Durchbruch ist näher, als du
          denkst. Bleib neugierig.
        </p>

        {/* animated "more incoming" dots */}
        <div className="mt-5 flex items-center gap-2">
          {MODALITY_ORDER.map((m, i) => (
            <motion.span
              key={m}
              className="h-3 w-3 rounded-full"
              style={{ background: MODALITY_COLOR[m] }}
              animate={{ scale: [0.6, 1.25, 0.6], opacity: [0.35, 1, 0.35] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut", delay: i * 0.18 }}
            />
          ))}
          <motion.span
            className="ml-1 font-mono text-[11px] uppercase tracking-widest text-ink-faint"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          >
            lädt …
          </motion.span>
        </div>
      </motion.div>
    </div>
  );
}

function ThresholdBand({ t }: { t: Threshold }) {
  const color = MODALITY_COLOR[t.modality];
  const reduce = useReducedMotion();
  const palette = [color, "var(--brand)", "var(--brand-deep)", color, "#f5b301"];
  const sparks = Array.from({ length: 38 }, (_, i) => {
    const wave = i % 2;
    const a = (i / 38) * Math.PI * 2 + wave * 0.16;
    const d = 52 + (i % 5) * 24; // 52 … 148px
    return {
      dx: Math.cos(a) * d,
      dy: Math.sin(a) * d,
      size: 5 + (i % 4) * 3, // 5 … 14px
      c: palette[i % palette.length],
      wave,
    };
  });

  const bandAnim = reduce
    ? { initial: { opacity: 0 }, whileInView: { opacity: 1 }, viewport: { once: true, amount: 0.4 }, transition: { duration: 0.4 } }
    : {
        initial: { opacity: 0, y: 18, scale: 0.97 },
        whileInView: {
          opacity: 1,
          y: 0,
          scale: [0.97, 1.04, 1],
          boxShadow: [
            "0 0 0px rgba(0,0,0,0)",
            `0 0 40px ${modalityTint(t.modality, 0.6)}`,
            "0 0 0px rgba(0,0,0,0)",
          ],
        },
        viewport: { once: true, amount: 0.4 },
        transition: { duration: 1.3, ease: "easeOut" as const },
      };

  return (
    <motion.div
      {...bandAnim}
      className="relative my-8 ml-10 rounded-sm px-5 py-5 sm:px-7 sm:py-6"
      style={{ background: modalityTint(t.modality, 0.1), borderLeft: `4px solid ${color}` }}
    >
      {/* celebratory firework burst on reveal */}
      {!reduce ? (
        <div aria-hidden className="pointer-events-none absolute left-8 top-9 sm:left-10">
          {sparks.map((s, i) => (
            <motion.span
              key={i}
              className="absolute block rounded-full"
              style={{ width: s.size, height: s.size, background: s.c }}
              initial={{ opacity: 0, x: 0, y: 0, scale: 0 }}
              whileInView={{
                opacity: [0, 1, 1, 0],
                x: [0, s.dx, s.dx * 1.12],
                y: [0, s.dy, s.dy + 34],
                scale: [0, 1.15, 0.3],
              }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1.6, delay: 0.1 + s.wave * 0.4 + (i % 6) * 0.03, ease: "easeOut" }}
            />
          ))}
        </div>
      ) : null}

      <p className="relative font-mono text-[10px] uppercase tracking-[0.25em]" style={{ color }}>
        ● {formatDate(t.date, "month")} · erst jetzt möglich
      </p>
      <p className="font-display mt-2 text-xl font-semibold leading-snug text-ink sm:text-2xl">
        {t.title}
      </p>
      <p className="mt-2 text-[15px] leading-snug text-ink-soft">{t.before}</p>
    </motion.div>
  );
}
