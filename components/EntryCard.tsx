"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import type { Entry } from "@/data/types";
import { MODALITY_META } from "@/data/types";
import { dayNumber, monthYear } from "@/lib/metrics";
import { MODALITY_COLOR, modalityTint } from "@/lib/ui";
import { providerDomain } from "@/lib/providers";

function firstSentence(s: string): string {
  const m = s.match(/^.*?[.!?](\s|$)/);
  return (m ? m[0] : s).trim();
}

export function EntryCard({ entry }: { entry: Entry }) {
  const [open, setOpen] = useState(false);
  const personal = entry.kind === "personal";
  const color = personal ? "var(--brand-deep)" : MODALITY_COLOR[entry.modality];
  const isOpen = entry.license === "open";
  const day = dayNumber(entry.date, entry.datePrecision);
  const domain = providerDomain(entry.org);
  const highlight = firstSentence(entry.capability);
  const hasMore =
    highlight.length < entry.capability.length ||
    !!entry.whyItMattered ||
    !!entry.firstOfKind ||
    !!entry.note;

  return (
    <article className="grid grid-cols-[56px_1fr] gap-3 sm:grid-cols-[72px_1fr] sm:gap-5">
      {/* Date rail */}
      <div className="pt-1 text-right">
        {day ? (
          <div className="font-display text-2xl font-bold leading-none text-ink sm:text-3xl">{day}</div>
        ) : (
          <div className="font-display text-xl font-bold leading-none text-ink-faint">·</div>
        )}
        <div className="mt-1 font-mono text-[9px] uppercase tracking-wider text-ink-faint">
          {monthYear(entry.date)}
        </div>
      </div>

      {/* Content (click to expand) */}
      <div
        onClick={() => hasMore && setOpen((o) => !o)}
        className="rounded-r-sm border-y border-r border-rule-soft bg-paper/60 py-3 pl-4 pr-4 transition-colors hover:bg-paper/90"
        style={{ borderLeft: `4px solid ${color}`, cursor: hasMore ? "pointer" : "default" }}
      >
        <div className="flex items-center gap-2">
          {personal ? (
            <span
              className="rounded-full px-2 py-[1px] font-mono text-[9px] uppercase tracking-widest"
              style={{ background: "var(--brand)", color: "#0b0f0d" }}
            >
              ★ {entry.personalLabel ?? "Newsletter"}
            </span>
          ) : (
            <>
              <span
                className="rounded-full px-2 py-[1px] font-mono text-[9px] uppercase tracking-widest"
                style={{ background: modalityTint(entry.modality, 0.16), color }}
              >
                {MODALITY_META[entry.modality].short}
              </span>
              <span
                className="rounded-full px-2 py-[1px] font-mono text-[9px] uppercase tracking-widest"
                style={isOpen ? { background: color, color: "var(--paper)" } : { border: `1px solid ${color}`, color }}
              >
                {isOpen ? "Offen" : "Geschlossen"}
              </span>
            </>
          )}
          {entry.disputed ? (
            <span className="font-mono text-[9px] uppercase tracking-widest text-video">⚠</span>
          ) : null}
          {hasMore ? (
            <span className="ml-auto font-mono text-[10px] text-ink-faint">{open ? "▾" : "▸"}</span>
          ) : null}
        </div>

        <div className="mt-1.5 flex items-center gap-2">
          {domain ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={`https://www.google.com/s2/favicons?domain=${domain}&sz=64`}
              alt=""
              width={18}
              height={18}
              className="h-[18px] w-[18px] shrink-0 rounded-[3px]"
              loading="lazy"
            />
          ) : null}
          <h4 className="font-display text-lg font-semibold leading-tight text-ink sm:text-xl">
            {entry.name}
          </h4>
        </div>
        <p className="font-mono text-[10px] uppercase tracking-wide text-ink-faint">{entry.org}</p>

        {/* One-line highlight, always visible */}
        <p className="mt-1.5 text-[15px] leading-snug text-ink">{highlight}</p>

        <AnimatePresence initial={false}>
          {open ? (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="overflow-hidden"
            >
              {entry.capability !== highlight ? (
                <p className="mt-2 text-[14px] leading-snug text-ink-soft">{entry.capability}</p>
              ) : null}
              {entry.whyItMattered ? (
                <p className="mt-2 text-[13px] leading-relaxed text-ink-soft">{entry.whyItMattered}</p>
              ) : null}
              {entry.firstOfKind ? (
                <p
                  className="mt-2.5 inline-block rounded-sm px-2.5 py-1 text-[12px] font-medium leading-tight"
                  style={{ background: modalityTint(entry.modality, 0.14), color }}
                >
                  ★ {entry.firstOfKind}
                </p>
              ) : null}
              {entry.note ? (
                <p
                  className="mt-2.5 rounded-sm border px-2.5 py-1.5 text-[12px] leading-snug"
                  style={{ borderColor: "var(--c-video)", color: "var(--c-video)", background: "rgba(210,105,30,0.06)" }}
                >
                  ⓘ {entry.note}
                </p>
              ) : null}
              <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1">
                {entry.sources.slice(0, 2).map((url) => (
                  <a
                    key={url}
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="font-mono text-[10px] uppercase tracking-wide text-ink-faint underline decoration-rule underline-offset-2 hover:text-ink"
                  >
                    Quelle ↗
                  </a>
                ))}
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </article>
  );
}
