"use client";

import { motion, useScroll, useSpring, useTransform } from "motion/react";

export function TimeDepthGauge() {
  const { scrollYProgress } = useScroll();
  const p = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  // Hidden over the dark intro, fades in once on the light page.
  const opacity = useTransform(scrollYProgress, [0.08, 0.16], [0, 1]);
  const fillH = useTransform(p, (v) => `${Math.max(0, Math.min(1, v)) * 100}%`);
  const dotTop = useTransform(p, (v) => `${Math.max(0, Math.min(1, v)) * 100}%`);

  return (
    <motion.div
      aria-hidden
      style={{ opacity }}
      className="fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-2 md:flex"
    >
      <span className="font-mono text-[9px] uppercase tracking-widest text-ink-faint">2022</span>
      <div className="relative h-[40vh] w-[2px] rounded-full bg-rule-soft">
        <motion.div
          className="absolute left-0 top-0 w-full rounded-full"
          style={{ height: fillH, background: "var(--brand)" }}
        />
        <motion.div
          className="absolute left-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full ring-2 ring-paper"
          style={{ top: dotTop, background: "var(--brand-deep)" }}
        />
      </div>
      <span className="font-mono text-[9px] uppercase tracking-widest text-ink-faint">heute</span>
    </motion.div>
  );
}
