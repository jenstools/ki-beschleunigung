"use client";

import type { Entry } from "@/data/types";
import { EntryCard } from "./EntryCard";

function Row({ items, reverse }: { items: Entry[]; reverse?: boolean }) {
  if (items.length === 0) return null;
  const loop = [...items, ...items];
  return (
    <div className="overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_5%,#000_95%,transparent)]">
      <div className={`marquee-track flex gap-4 ${reverse ? "rev" : ""}`}>
        {loop.map((e, i) => (
          <div key={`${e.id}-${i}`} className="w-[320px] shrink-0">
            <EntryCard entry={e} />
          </div>
        ))}
      </div>
    </div>
  );
}

export function CardShowcase({ entries }: { entries: Entry[] }) {
  // The milestones (first-of-kind) are the most striking cards — show those.
  const picks = entries
    .filter((e) => e.firstOfKind && e.firstOfKind.trim().length > 0)
    .sort((a, b) => (a.date < b.date ? -1 : 1));
  if (picks.length < 4) return null;

  const mid = Math.ceil(picks.length / 2);
  const row1 = picks.slice(0, mid);
  const row2 = picks.slice(mid);

  return (
    <section className="overflow-hidden py-12">
      <div className="marquee-pause space-y-4">
        <Row items={row1} />
        <Row items={row2} reverse />
      </div>
    </section>
  );
}
