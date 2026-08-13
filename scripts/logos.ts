/**
 * Provider logos: fetch once here, so no reader's browser ever fetches them.
 *
 *   npm run logos              fetch every icon that is missing
 *   npm run logos -- --force   refetch all of them (e.g. after a rebrand)
 *   npm run logos -- --check   verify only; runs before `next build`
 *
 * Source is Google's favicon service, which is the same place the cards used to
 * hit at runtime — the point of this script is not to stop using it, it is to
 * hit it once from a developer machine instead of from every visitor. The icons
 * themselves are each provider's own favicon, used to identify the provider next
 * to its own name.
 *
 * Everything is normalised to `<slug>.png`, which is what lets lib/logos.ts
 * derive the path instead of maintaining a second registry beside `DOMAIN`.
 *
 * Run with plain node (`node scripts/logos.ts`): node 22 strips the types, and
 * both imports below are dependency-free modules, so nothing needs a bundler.
 */
import { execFileSync } from "node:child_process";
import { mkdirSync, readdirSync, readFileSync, rmSync, statSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { providerDomains } from "../lib/providers.ts";
import { LOGO_DIR, logoSlug } from "../lib/logos.ts";

const ICON_SIZE = 128; // rendered at 18px, so this survives a 3x display
const CRISP_AT = 36; // 18px CSS on a 2x display; below this the icon goes soft
const OUT_DIR = join(import.meta.dirname, "..", LOGO_DIR);

/** Magic bytes, because the service answers with several formats. */
const SIGNATURES: { kind: "png" | "jpeg" | "webp"; magic: Buffer; at: number }[] = [
  { kind: "png", magic: Buffer.from([0x89, 0x50, 0x4e, 0x47]), at: 0 },
  { kind: "jpeg", magic: Buffer.from([0xff, 0xd8, 0xff]), at: 0 },
  { kind: "webp", magic: Buffer.from("WEBP", "ascii"), at: 8 },
];

/**
 * Houses whose recorded domain serves no favicon, with the surface whose icon is
 * used instead.
 *
 * Hand-checked and deliberately separate from `DOMAIN` in lib/providers.ts:
 * that map records where a house publishes, which is an editorial fact, while
 * this one works around a gap in an icon service. bytedance.com carries no
 * favicon at all, so the icon comes from ByteDance's AI lab, which is also the
 * name their releases in this dataset ship under.
 */
const ICON_SOURCE: Record<string, string> = {
  ByteDance: "seed.bytedance.com",
};

const iconUrl = (domain: string) =>
  `https://www.google.com/s2/favicons?domain=${encodeURIComponent(domain)}&sz=${ICON_SIZE}`;

function formatOf(buf: Buffer): "png" | "jpeg" | "webp" | null {
  for (const s of SIGNATURES) {
    if (buf.subarray(s.at, s.at + s.magic.length).equals(s.magic)) return s.kind;
  }
  return null;
}

/**
 * Pixel width from the PNG header — the icon service answers with the largest
 * size the provider actually publishes, which for a few of them is well under
 * the 128 requested. Read rather than decoded: IHDR puts it at byte 16.
 */
function pngWidth(buf: Buffer): number {
  return buf.length > 20 ? buf.readUInt32BE(16) : 0;
}

type Icon = { buf: Buffer; kind: "png" | "jpeg" | "webp" };

async function download(domain: string): Promise<Icon> {
  const res = await fetch(iconUrl(domain), { signal: AbortSignal.timeout(20_000) });
  const buf = Buffer.from(await res.arrayBuffer());

  // The service answers 404 *with a valid image body* — a 16px grey globe — when
  // it has no icon for the domain. Writing that would commit a placeholder that
  // looks like a real logo, so the status is the signal, not the body.
  if (res.status === 404) throw new Error("kein Favicon unter dieser Domain");
  if (!res.ok) throw new Error(`HTTP ${res.status}`);

  const kind = formatOf(buf);
  if (!kind) throw new Error(`unbekanntes Bildformat (${buf.length} Bytes)`);
  return { buf, kind };
}

/**
 * Normalise to PNG. Not every provider's favicon is one — Meta's is a JPEG on
 * every Meta-owned domain — and the derived `<slug>.png` path only holds if the
 * bytes match. Uses macOS `sips`, since this runs once on a developer machine
 * and the result is committed; on anything else it says what to do by hand.
 */
function toPng(icon: Icon, slug: string): Buffer {
  if (icon.kind === "png") return icon.buf;

  const src = join(tmpdir(), `${slug}.${icon.kind}`);
  const dst = join(tmpdir(), `${slug}.converted.png`);
  try {
    writeFileSync(src, icon.buf);
    execFileSync("sips", ["-s", "format", "png", src, "--out", dst], { stdio: "ignore" });
    return readFileSync(dst);
  } catch {
    throw new Error(
      `${icon.kind.toUpperCase()} statt PNG, Konvertierung fehlgeschlagen ` +
        `(sips nicht verfügbar?) — Icon von Hand als PNG ablegen`,
    );
  } finally {
    rmSync(src, { force: true });
    rmSync(dst, { force: true });
  }
}

/** House -> filename, plus the collision check that the derived slug needs. */
function targets(): { house: string; domain: string; slug: string; file: string }[] {
  const list = providerDomains().map(([house, domain]) => {
    const slug = logoSlug(house);
    return {
      house,
      domain: ICON_SOURCE[house] ?? domain,
      slug,
      file: join(OUT_DIR, `${slug}.png`),
    };
  });

  const bySlug = new Map<string, string[]>();
  for (const t of list) bySlug.set(t.slug, [...(bySlug.get(t.slug) ?? []), t.house]);
  const clashes = [...bySlug.entries()].filter(([, houses]) => houses.length > 1);
  if (clashes.length) {
    fail(
      clashes
        .map(([slug, houses]) => `  ${houses.join(" + ")} ergeben beide "${slug}.png"`)
        .join("\n"),
      "Namenskollision: zwei Häuser teilen sich eine Datei.",
    );
  }
  return list.sort((a, b) => (a.house < b.house ? -1 : 1));
}

function fail(detail: string, headline: string): never {
  console.error(`\n✖ ${headline}\n${detail}\n`);
  process.exit(1);
}

function readIfPresent(file: string): Buffer | null {
  try {
    return statSync(file).size > 0 ? readFileSync(file) : Buffer.alloc(0);
  } catch {
    return null;
  }
}

// ------------------------------------------------------------------ check

function check(): void {
  const list = targets();
  const missing: string[] = [];
  const broken: string[] = [];
  const soft: string[] = [];

  for (const t of list) {
    const buf = readIfPresent(t.file);
    if (!buf) missing.push(`  ${t.house} (${t.domain}) -> ${t.slug}.png`);
    else if (formatOf(buf) !== "png") {
      broken.push(`  ${t.slug}.png ist kein PNG (${buf.length} Bytes)`);
    } else if (pngWidth(buf) < CRISP_AT) {
      soft.push(`${t.house} ${pngWidth(buf)}px`);
    }
  }

  if (missing.length || broken.length) {
    fail(
      [...missing, ...broken, "", "  Zu beheben mit: npm run logos"].join("\n"),
      `Logos fehlen oder sind defekt (${missing.length + broken.length} von ${list.length}).`,
    );
  }

  // Not an error: a house that lost its DOMAIN entry leaves its file behind, and
  // a stale file costs nothing but is worth naming once.
  const known = new Set(list.map((t) => `${t.slug}.png`));
  const orphans = readdirSync(OUT_DIR).filter((f) => f.endsWith(".png") && !known.has(f));
  if (orphans.length) {
    console.warn(`⚠ Verwaiste Logos in ${LOGO_DIR}: ${orphans.join(", ")}`);
  }
  // Also only a warning: these providers publish no larger favicon, so failing
  // the build would block a release over an icon nobody can improve.
  if (soft.length) {
    console.warn(
      `⚠ Unter ${CRISP_AT}px, auf HiDPI leicht weich: ${soft.join(", ")}`,
    );
  }

  console.log(`✓ ${list.length} Provider-Logos liegen lokal in ${LOGO_DIR}`);
}

// ------------------------------------------------------------------ fetch

async function sync(force: boolean): Promise<void> {
  const list = targets();
  mkdirSync(OUT_DIR, { recursive: true });

  const failures: string[] = [];
  let written = 0;
  let skipped = 0;

  for (const t of list) {
    if (!force && readIfPresent(t.file)?.length) {
      skipped++;
      continue;
    }
    try {
      const icon = await download(t.domain);
      const png = toPng(icon, t.slug);
      writeFileSync(t.file, png);
      written++;
      const note = icon.kind === "png" ? "" : `  (aus ${icon.kind.toUpperCase()})`;
      console.log(
        `  ✓ ${t.slug}.png  ${String(png.length).padStart(6)} B  ${t.domain}${note}`,
      );
    } catch (err) {
      failures.push(`  ${t.house} (${t.domain}): ${(err as Error).message}`);
    }
  }

  console.log(
    `\n${written} geladen, ${skipped} unverändert, ${failures.length} offen ` +
      `(von ${list.length})`,
  );

  if (failures.length) {
    fail(
      [
        ...failures,
        "",
        `  Entweder das Icon von Hand nach ${LOGO_DIR}/<slug>.png legen (PNG, ${ICON_SIZE}px),`,
        "  oder in scripts/logos.ts eine ICON_SOURCE-Domain für das Haus eintragen.",
      ].join("\n"),
      "Nicht jedes Logo konnte geladen werden.",
    );
  }
}

const args = process.argv.slice(2);
if (args.includes("--check")) check();
else await sync(args.includes("--force"));
