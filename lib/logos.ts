/**
 * Provider logos, served from this origin.
 *
 * The cards used to load every icon from Google's favicon endpoint
 * (`google.com/s2/favicons?domain=…`). That sent each reader's IP address and
 * the queried provider domain to a third party on every page view — 31 distinct
 * icons across 257 cards, on a German-language page with no consent layer. The
 * icons are now fetched once by `npm run logos` and committed to `public/logos/`.
 *
 * The path is derived from the house name, not looked up in a table: keeping a
 * second registry in sync with `DOMAIN` in lib/providers.ts is exactly the kind
 * of bookkeeping that silently rots. `scripts/logos.ts --check` runs before
 * `next build` and fails it when a house has a domain but no file on disk, so a
 * newly added provider cannot ship as a broken <img>.
 */

/**
 * Filename stem for a house. Must round-trip through a URL and a filesystem, so
 * everything that is not a-z0-9 collapses to a single hyphen: "Black Forest
 * Labs" -> "black-forest-labs", "jens.marketing" -> "jens-marketing".
 *
 * Collisions are checked by `scripts/logos.ts --check`, not prevented here — two
 * houses whose names differ only in punctuation would otherwise share one file.
 */
export function logoSlug(house: string): string {
  return house
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/**
 * Public URL of a house's logo. Only meaningful for houses that have a domain
 * in lib/providers.ts — for the other 20 the cards render without an icon, as
 * they always did.
 */
export function logoSrc(house: string): string {
  return `/logos/${logoSlug(house)}.png`;
}

/** Where `scripts/logos.ts` writes, relative to the repo root. */
export const LOGO_DIR = "public/logos";
