"use client";

import { motion, useReducedMotion } from "motion/react";

export function MidCTA() {
  const reduce = useReducedMotion();
  return (
    <section className="mx-auto max-w-3xl px-6 py-12">
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center gap-2 rounded-2xl border border-brand/60 bg-paper-2 px-6 py-5 text-center shadow-[0_4px_18px_-10px_rgba(47,155,115,0.4)] sm:flex-row sm:justify-center sm:gap-4 sm:text-left"
      >
        <p className="text-[15px] leading-snug text-ink-soft">
          Dieses Tempo hält niemand allein. Dein Team muss nicht alles wissen —
          nur mithalten.
        </p>
        <a
          href="https://snipki.de/?utm_source=ki-timeline&utm_medium=website&utm_campaign=beschleunigung&utm_content=cta-cadence"
          target="_blank"
          rel="noreferrer"
          className="group shrink-0 whitespace-nowrap text-sm font-semibold text-brand-deep underline decoration-2 underline-offset-4 transition-colors hover:text-ink"
        >
          snipKI zeigt&nbsp;wie
          <span className="ml-1 inline-block transition-transform group-hover:translate-x-0.5">→</span>
        </a>
      </motion.div>
    </section>
  );
}
