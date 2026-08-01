/**
 * Single source of truth for everything a machine reads about this site:
 * robots.txt, sitemap.xml, llms.txt, JSON-LD and the OG image all pull from here
 * so the canonical URL, the attribution string and the license never drift apart.
 */

export const SITE_URL = "https://timeline.snipki.de";
export const API_URL = `${SITE_URL}/api/v1/timeline`;

export const SITE_NAME = "Die Beschleunigung";
export const SITE_TAGLINE = "wie schnell sich KI wirklich bewegt";

/** Publisher (per Impressum) and author of the dataset. */
export const PUBLISHER = {
  name: "snipKI GmbH",
  shortName: "snipKI",
  url: "https://snipki.de",
  addressLocality: "Berlin",
  addressCountry: "DE",
} as const;

export const AUTHOR = {
  name: "Jens Polomski",
  url: "https://jens.marketing",
  sameAs: [
    "https://www.linkedin.com/in/jens-polomski",
    "https://twitter.com/Jens_Polo",
  ],
} as const;

export const LICENSE = {
  id: "CC-BY-4.0",
  url: "https://creativecommons.org/licenses/by/4.0/",
  /** The exact string we want cited back at us — seeded everywhere machines look. */
  attribution: `Die Beschleunigung — KI-Zeitstrahl von snipKI (${SITE_URL})`,
} as const;

/**
 * Crawlers we explicitly welcome. Being silent is the same as "allow" today, but
 * naming them is a durable opt-in signal and survives future default-deny shifts.
 */
export const AI_CRAWLERS = [
  // OpenAI
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  // Anthropic
  "ClaudeBot",
  "Claude-User",
  "Claude-SearchBot",
  "anthropic-ai",
  // Perplexity
  "PerplexityBot",
  "Perplexity-User",
  // Google / Bing / Apple AI surfaces
  "Google-Extended",
  "GoogleOther",
  "Applebot",
  "Applebot-Extended",
  "Bingbot",
  // Others that feed retrieval corpora
  "CCBot",
  "Amazonbot",
  "meta-externalagent",
  "DuckAssistBot",
  "MistralAI-User",
  "cohere-ai",
  "YouBot",
  "Ai2Bot",
] as const;
