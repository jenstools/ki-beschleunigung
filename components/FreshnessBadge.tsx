"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { motion, useReducedMotion } from "motion/react";
import { dataMeta, entries } from "@/data/timeline";

/**
 * Turns the ISO verification date into a plain-German "how fresh is this".
 * Deliberately honest: if the dataset goes stale it says so out loud.
 */
function relativeLabel(iso: string, now: Date): string | null {
  const then = new Date(`${iso}T00:00:00`);
  if (Number.isNaN(then.getTime())) return null;
  const days = Math.floor(
    (Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()) -
      Date.UTC(then.getFullYear(), then.getMonth(), then.getDate())) /
      86_400_000,
  );
  if (days < 0) return null; // date in the future — show the absolute one only
  if (days === 0) return "heute aktualisiert";
  if (days === 1) return "gestern aktualisiert";
  if (days < 7) return `vor ${days} Tagen aktualisiert`;
  const weeks = Math.floor(days / 7);
  if (weeks === 1) return "vor 1 Woche aktualisiert";
  if (days < 28) return `vor ${weeks} Wochen aktualisiert`;
  const months = Math.floor(days / 30);
  if (months <= 1) return "vor 1 Monat aktualisiert";
  if (months < 12) return `vor ${months} Monaten aktualisiert`;
  const years = Math.floor(days / 365);
  return years === 1 ? "vor 1 Jahr aktualisiert" : `vor ${years} Jahren aktualisiert`;
}

/** The date never changes on its own, so there is nothing to subscribe to. */
const noSubscribe = () => () => {};

export function FreshnessBadge() {
  const reduce = useReducedMotion();

  // The threshold is measured in pixels, not page fractions: the page is ~120k px
  // tall and grows with every release, so a percentage would drift ever deeper
  // into the timeline. The dark hero is exactly 200vh, so that is the anchor —
  // the badge appears just before the light page starts.
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const sync = () => setVisible(window.scrollY > window.innerHeight * 1.9);
    sync(); // also covers deep links that land mid-page
    window.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync);
    return () => {
      window.removeEventListener("scroll", sync);
      window.removeEventListener("resize", sync);
    };
  }, []);

  // Client-only value: reading the clock during SSR would hydrate-mismatch, so
  // the server snapshot is `null` and the absolute date carries the first paint.
  const relative = useSyncExternalStore(
    noSubscribe,
    () => relativeLabel(dataMeta.lastVerifiedISO, new Date()),
    () => null,
  );

  const goNewest = () => {
    const el =
      document.getElementById(dataMeta.windowEnd) ??
      document.getElementById("timeline");
    el?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  };

  return (
    <button
      onClick={goNewest}
      style={{ background: "var(--brand)", color: "#0b0f0d" }}
      className={`group fixed bottom-[4.25rem] left-4 z-50 flex items-center gap-2.5 rounded-full py-1.5 pl-3 pr-3.5 text-left shadow-[0_6px_20px_-8px_rgba(47,155,115,0.75)] transition-[opacity,transform] duration-500 hover:scale-[1.03] sm:bottom-4 sm:gap-3 sm:py-2 sm:pl-3.5 sm:pr-4 ${
        visible
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none translate-y-2 opacity-0"
      }`}
      tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}
      aria-label={`Datenstand: ${dataMeta.lastVerified}. Zum neuesten Eintrag springen.`}
      title="Zum neuesten Eintrag springen"
    >
      {/* live dot */}
      <span className="relative flex h-2.5 w-2.5 shrink-0" aria-hidden>
        {!reduce ? (
          <motion.span
            className="absolute inset-0 rounded-full"
            style={{ background: "#0b0f0d" }}
            animate={{ scale: [1, 2.4], opacity: [0.5, 0] }}
            transition={{ duration: 1.9, repeat: Infinity, ease: "easeOut" }}
          />
        ) : null}
        <span className="h-2.5 w-2.5 rounded-full" style={{ background: "#0b0f0d" }} />
      </span>

      <span className="flex flex-col leading-tight">
        <span className="font-mono text-[11px] font-bold uppercase tracking-[0.14em] sm:text-[12px]">
          {relative ?? `Stand ${dataMeta.lastVerified}`}
        </span>
        <span className="font-mono text-[9px] uppercase tracking-[0.12em] opacity-70 sm:text-[10px]">
          {relative ? `${dataMeta.lastVerified} · ` : ""}
          {entries.length} Releases
        </span>
      </span>

      <span
        aria-hidden
        className="shrink-0 pl-0.5 text-sm font-bold transition-transform group-hover:translate-x-0.5"
      >
        →
      </span>
    </button>
  );
}
