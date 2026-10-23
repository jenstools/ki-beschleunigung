import {
  KEEP_SECONDS, analyticsEnabled, countsKey, dayKey, deviceOf, hashKey, isBot, redis, visitorHash,
} from "@/lib/analytics";

const OWN_HOST = "timeline.snipki.de";

export async function POST(req: Request) {
  if (!analyticsEnabled) return new Response(null, { status: 204 });
  const ua = req.headers.get("user-agent") ?? "";
  if (isBot(ua)) return new Response(null, { status: 204 });

  let body: { p?: unknown; r?: unknown };
  try {
    body = JSON.parse(await req.text());
  } catch {
    return new Response(null, { status: 400 });
  }
  const path = typeof body.p === "string" ? body.p : "";
  if (!path.startsWith("/") || path.length > 120) return new Response(null, { status: 400 });

  let ref = "";
  if (typeof body.r === "string" && body.r) {
    try {
      ref = new URL(body.r).hostname.replace(/^www\./, "");
    } catch {}
    if (ref === OWN_HOST) ref = "";
  }

  const day = dayKey();
  const ip = (req.headers.get("x-forwarded-for") ?? "").split(",")[0].trim();
  const country = (req.headers.get("x-vercel-ip-country") ?? "??").slice(0, 2);
  const c = countsKey(day);
  const hash = await visitorHash(ip, ua, day);

  await redis([
    ["HINCRBY", c, "views", 1],
    ["HINCRBY", c, `path:${path}`, 1],
    ["HINCRBY", c, `ref:${ref || "direkt"}`, 1],
    ["HINCRBY", c, `country:${country}`, 1],
    ["HINCRBY", c, `dev:${deviceOf(ua)}`, 1],
    ["EXPIRE", c, KEEP_SECONDS],
    ["PFADD", hashKey(day), hash],
    ["EXPIRE", hashKey(day), KEEP_SECONDS],
  ]).catch(() => {});
  return new Response(null, { status: 204 });
}
