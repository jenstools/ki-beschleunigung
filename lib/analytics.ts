/**
 * Minimal first-party analytics: page views, referrers, countries, devices and
 * daily unique visitors. No cookies, no stored IPs, no fingerprint that survives
 * the day — a visitor is a hash of IP + user agent + a salt that includes the
 * date, kept only inside a HyperLogLog counter, so it cannot be read back.
 *
 * Storage is Upstash Redis over its REST API (plain fetch, no dependency):
 * Vercel functions have no writable disk. Set in the Vercel project:
 *   UPSTASH_REDIS_REST_URL, UPSTASH_REDIS_REST_TOKEN  storage
 *   ANALYTICS_SALT                                    any long random string
 *   STATS_KEY                                         password for /stats
 * Without the storage variables, collection is a silent no-op.
 */

const URL_ = process.env.UPSTASH_REDIS_REST_URL;
const TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN;

export type Command = (string | number)[];

export const analyticsEnabled = Boolean(URL_ && TOKEN);

/** Runs commands in one round trip; resolves to each command's result. */
export async function redis(commands: Command[]): Promise<unknown[]> {
  if (!URL_ || !TOKEN) return [];
  const res = await fetch(`${URL_}/pipeline`, {
    method: "POST",
    headers: { Authorization: `Bearer ${TOKEN}`, "Content-Type": "application/json" },
    body: JSON.stringify(commands),
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`Redis ${res.status}`);
  const out = (await res.json()) as { result?: unknown; error?: string }[];
  return out.map((o) => o.result);
}

export const dayKey = (d = new Date()) => d.toISOString().slice(0, 10);
export const hashKey = (day: string) => `a:u:${day}`;
export const countsKey = (day: string) => `a:c:${day}`;

export const KEEP_SECONDS = 400 * 24 * 3600;

const BOT = /bot|crawl|spider|slurp|preview|headless|lighthouse|curl|wget|python|node-fetch|axios|monitor|uptime|facebookexternalhit|embedly|whatsapp|telegram/i;
export const isBot = (ua: string) => !ua || BOT.test(ua);
export const deviceOf = (ua: string) =>
  /mobi|android|iphone|ipad/i.test(ua) ? "mobile" : "desktop";

export async function visitorHash(ip: string, ua: string, day: string): Promise<string> {
  const data = new TextEncoder().encode(`${process.env.ANALYTICS_SALT ?? ""}|${day}|${ip}|${ua}`);
  const buf = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(buf).slice(0, 12), (b) => b.toString(16).padStart(2, "0")).join("");
}
