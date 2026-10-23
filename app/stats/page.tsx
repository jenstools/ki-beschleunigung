import type { Metadata } from "next";
import { analyticsEnabled, countsKey, dayKey, hashKey, redis } from "@/lib/analytics";

export const metadata: Metadata = { title: "Statistik", robots: { index: false, follow: false } };

const DAYS = 30;

function top(totals: Map<string, number>, prefix: string, n = 10) {
  return [...totals]
    .filter(([k]) => k.startsWith(prefix))
    .map(([k, v]) => [k.slice(prefix.length), v] as const)
    .sort((a, b) => b[1] - a[1])
    .slice(0, n);
}

export default async function StatsPage({
  searchParams,
}: {
  searchParams: Promise<{ key?: string }>;
}) {
  const { key } = await searchParams;
  if (!process.env.STATS_KEY || key !== process.env.STATS_KEY) {
    return <main className="p-10 font-mono text-sm">Kein Zugriff.</main>;
  }
  if (!analyticsEnabled) {
    return <main className="p-10 font-mono text-sm">UPSTASH_REDIS_REST_URL/TOKEN nicht gesetzt.</main>;
  }

  const days = Array.from({ length: DAYS }, (_, i) => dayKey(new Date(Date.now() - i * 86400000)));
  const res = await redis(days.flatMap((d) => [["HGETALL", countsKey(d)], ["PFCOUNT", hashKey(d)]]));

  const totals = new Map<string, number>();
  const rows = days.map((d, i) => {
    const flat = (res[i * 2] as string[] | null) ?? [];
    let views = 0;
    for (let j = 0; j < flat.length; j += 2) {
      const v = Number(flat[j + 1]);
      if (flat[j] === "views") views = v;
      else totals.set(flat[j], (totals.get(flat[j]) ?? 0) + v);
    }
    return { day: d, views, visitors: Number(res[i * 2 + 1] ?? 0) };
  });
  const sum = (k: "views" | "visitors") => rows.reduce((a, r) => a + r[k], 0);

  const lists: [string, readonly (readonly [string, number])[]][] = [
    ["Seiten", top(totals, "path:", 15)],
    ["Quellen", top(totals, "ref:")],
    ["Länder", top(totals, "country:")],
    ["Geräte", top(totals, "dev:")],
  ];

  return (
    <main className="mx-auto max-w-3xl space-y-10 p-6 font-mono text-sm md:p-10">
      <h1 className="text-xl">Statistik · letzte {DAYS} Tage</h1>
      <p>
        {sum("views")} Aufrufe · {sum("visitors")} Besucher-Tage (pro Tag eindeutig, über Tage
        nicht zusammenführbar)
      </p>
      <section className="grid gap-8 md:grid-cols-2">
        {lists.map(([title, items]) => (
          <div key={title}>
            <h2 className="mb-2 font-semibold">{title}</h2>
            <ul>
              {items.map(([k, v]) => (
                <li key={k} className="flex justify-between gap-4 border-b border-black/10 py-0.5">
                  <span className="truncate">{k}</span>
                  <span>{v}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
      <section>
        <h2 className="mb-2 font-semibold">Pro Tag</h2>
        <table className="w-full text-left">
          <thead><tr><th>Tag</th><th>Aufrufe</th><th>Besucher</th></tr></thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.day} className="border-b border-black/10"><td>{r.day}</td><td>{r.views}</td><td>{r.visitors}</td></tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
}
