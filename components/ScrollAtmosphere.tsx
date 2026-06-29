"use client";

import { motion, useScroll, useSpring, useTransform } from "motion/react";

/**
 * A fixed backdrop that "deepens" with scroll — the surface (2022) is near-white,
 * and the further you dive toward 2026 the more the page sinks into a mint-green
 * depth, with a soft vignette closing in at the edges. Kept light enough that
 * body text stays readable; opaque sections (e.g. the dark intro) paint over it.
 */
export function ScrollAtmosphere() {
  const { scrollYProgress } = useScroll();
  const p = useSpring(scrollYProgress, { stiffness: 70, damping: 30, restDelta: 0.001 });

  const bg = useTransform(
    p,
    [0, 0.18, 0.45, 0.7, 1],
    ["#fbfcfb", "#fbfcfb", "#eef7f1", "#e3f0e9", "#d6ebe1"],
  );
  const vignette = useTransform(p, [0.2, 1], [0, 0.5]);

  return (
    <>
      <motion.div aria-hidden className="fixed inset-0 -z-20" style={{ background: bg }} />
      <motion.div
        aria-hidden
        className="fixed inset-0 -z-10"
        style={{
          opacity: vignette,
          background:
            "radial-gradient(ellipse at 50% 42%, transparent 52%, rgba(18,32,27,0.32) 100%)",
        }}
      />
    </>
  );
}
