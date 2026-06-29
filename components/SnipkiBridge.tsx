"use client";

import { motion, useReducedMotion } from "motion/react";

export function SnipkiBridge() {
  const reduce = useReducedMotion();
  const wipe = reduce
    ? {}
    : {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.4 },
        transition: { duration: 0.6, ease: "easeOut" as const },
      };
  return (
    <section style={{ background: "var(--brand)", color: "#0d1a14" }}>
      <div className="mx-auto max-w-4xl px-6 py-28">
        <motion.div {...wipe}>
          <p className="font-mono text-xs uppercase tracking-[0.3em]" style={{ color: "rgba(13,26,20,0.6)" }}>
            Von Wissen zu Handlung
          </p>

          <h2 className="font-display mt-4 text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
            Wissen reicht nicht. Dein Team muss mithalten.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed md:text-xl" style={{ color: "rgba(13,26,20,0.82)" }}>
            Die Tools ändern sich im Wochentakt — du hast es gerade gescrollt. Der
            Vorsprung liegt nicht im nächsten Modell, sondern in der Fähigkeit,
            diese Veränderung einzuordnen und KI im Arbeitsalltag produktiv zu
            nutzen.
          </p>

          <p className="font-display mt-5 text-2xl font-semibold md:text-3xl">
            Genau dafür gibt es snipKI.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
            <a
              href="https://snipki.de/?utm_source=ki-timeline&utm_medium=website&utm_campaign=beschleunigung&utm_content=cta-bridge"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition-transform hover:scale-[1.03]"
              style={{ background: "#0d1a14", color: "var(--brand)" }}
            >
              snipKI für dein Team
              <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </a>
            <a
              href="https://jens.marketing/ki-newsletter/?utm_source=ki-timeline&utm_medium=website&utm_campaign=beschleunigung&utm_content=cta-newsletter"
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium underline decoration-2 underline-offset-4 transition-opacity hover:opacity-70"
              style={{ color: "#0d1a14" }}
            >
              Oder im Bild bleiben: der KI-Newsletter →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
