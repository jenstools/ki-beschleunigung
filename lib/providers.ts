//
// Provider metadata, keyed on `Entry.house`.
//
// `house` is hand-decided per entry (see data/types.ts), so every lookup in
// this file is an exact map read. An earlier version derived the company from
// the free-text `org` string with an ordered list of substring tests, which was
// wrong in a way that only showed up in aggregate: "RunwayML / Stability AI"
// matched `stability` before `runway` and filed Stable Diffusion 1.5 — a
// release Runway published — under a British company. Substring order is not
// an editorial decision, so the decision moved into the data.
//

/**
 * Credits that name several genuinely distinct companies. `house` records the
 * lead — the party that published the release — so the co-credited houses
 * listed here are not counted anywhere.
 *
 * Hand-written, because no rule separates these from a house-plus-division
 * label: "Alibaba (Qwen)" and "RunwayML / Stability AI" both contain a
 * separator, but only one of them is two companies. `hidden` names the
 * co-credited houses that appear nowhere else in the dataset and therefore
 * drop out of the house count entirely.
 */
export const JOINT_CREDITS: {
  org: string;
  lead: string;
  alsoCredited: string[];
  /** Co-credited houses that appear under no other org label. */
  hidden: string[];
}[] = [
  {
    org: "OpenMOSS / MOSI.AI / Shanghai Innovation Institute",
    lead: "OpenMOSS",
    alsoCredited: ["MOSI.AI", "Shanghai Innovation Institute"],
    hidden: ["MOSI.AI", "Shanghai Innovation Institute"],
  },
  {
    // Published from the `runwayml/` HuggingFace repo, so Runway is the lead
    // credit even though Stability AI trained the base model.
    org: "RunwayML / Stability AI",
    lead: "Runway",
    alsoCredited: ["Stability AI"],
    hidden: [],
  },
  {
    org: "Shanghai Jiao Tong University / Cambridge University",
    lead: "Shanghai Jiao Tong University",
    alsoCredited: ["Cambridge University"],
    hidden: ["Cambridge University"],
  },
  {
    org: "Stability AI / CompVis / RunwayML",
    lead: "Stability AI",
    alsoCredited: ["CompVis", "Runway"],
    hidden: ["CompVis"],
  },
];

const PALETTE: Record<string, string> = {
  OpenAI: "#10a37f",
  Google: "#3b82f6",
  Anthropic: "#cc785c",
  Microsoft: "#7a5af5",
  Meta: "#0866ff",
  Alibaba: "#ff6a00",
  Moonshot: "#6d28d9",
  DeepSeek: "#4d6bfe",
  Zhipu: "#2f9b73",
  MiniMax: "#e11d48",
  ByteDance: "#0ea5e9",
  Tencent: "#16a34a",
  Baidu: "#2932e1",
  "Stability AI": "#b91c1c",
  "Black Forest Labs": "#334155",
  Midjourney: "#7c3aed",
  Runway: "#db2777",
  Kuaishou: "#f97316",
  ElevenLabs: "#111827",
  Suno: "#f59e0b",
  xAI: "#1f2937",
  Mistral: "#fa520f",
  NVIDIA: "#76b900",
};

/** Brand colour for a house, or a neutral grey when it has none. */
export function providerColor(house: string): string {
  return PALETTE[house] ?? "#8a938d";
}

const DOMAIN: Record<string, string> = {
  OpenAI: "openai.com",
  Google: "deepmind.google",
  Anthropic: "anthropic.com",
  Microsoft: "microsoft.ai",
  Meta: "ai.meta.com",
  Alibaba: "qwen.ai",
  Moonshot: "moonshot.ai",
  DeepSeek: "deepseek.com",
  Zhipu: "z.ai",
  MiniMax: "minimax.io",
  ByteDance: "bytedance.com",
  Tencent: "tencent.com",
  Baidu: "baidu.com",
  "Stability AI": "stability.ai",
  "Black Forest Labs": "bfl.ai",
  Midjourney: "midjourney.com",
  Runway: "runwayml.com",
  Kuaishou: "klingai.com",
  ElevenLabs: "elevenlabs.io",
  Suno: "suno.com",
  xAI: "x.ai",
  Mistral: "mistral.ai",
  NVIDIA: "nvidia.com",
  Lightricks: "lightricks.com",
  StepFun: "stepfun.com",
  "Fish Audio": "fish.audio",
  Ideogram: "ideogram.ai",
  Adobe: "adobe.com",
  Genmo: "genmo.ai",
  "jens.marketing": "jens.marketing",
  snipKI: "snipki.de",
};

/** Domain for a house (for favicon logos); empty string when none is recorded. */
export function providerDomain(house: string): string {
  return DOMAIN[house] ?? "";
}

/**
 * Country of the lab's headquarters, ISO 3166-1 alpha-2.
 *
 * Deliberately incomplete: a provider missing from this map resolves to
 * `undefined`, never to a default bucket. An earlier draft defaulted unknowns
 * to "US/other" and silently misfiled Kyutai, Meituan, Ant Group and OpenMOSS —
 * a published country claim has to be verified, not inferred from a name.
 */
const COUNTRY: Record<string, string> = {
  // USA
  OpenAI: "US",
  Google: "US",
  Anthropic: "US",
  Meta: "US",
  Microsoft: "US",
  xAI: "US",
  Apple: "US",
  Adobe: "US",
  Midjourney: "US",
  Runway: "US",
  Suno: "US",
  Udio: "US",
  "Luma AI": "US",
  "Pika Labs": "US",
  "Hume AI": "US",
  "Sesame AI": "US",
  Cognition: "US",
  "Thinking Machines Lab": "US",
  Genmo: "US",
  ElevenLabs: "US",
  NVIDIA: "US",
  // China
  Alibaba: "CN",
  ByteDance: "CN",
  Moonshot: "CN",
  DeepSeek: "CN",
  Zhipu: "CN",
  MiniMax: "CN",
  Tencent: "CN",
  Baidu: "CN",
  Kuaishou: "CN",
  StepFun: "CN",
  "Fish Audio": "CN",
  OpenMOSS: "CN",
  Meituan: "CN",
  "Ant Group": "CN",
  "Shanghai Jiao Tong University": "CN",
  // Europe
  "Stability AI": "GB",
  Recraft: "GB",
  "Black Forest Labs": "DE",
  Mistral: "FR",
  Kyutai: "FR",
  // Rest of world
  Lightricks: "IL",
  "Sakana AI": "JP",
  TII: "AE",
  Ideogram: "CA",
  // Unmapped on purpose — HQ not confirmed against a primary source:
  // poolside, DeepReinforce, Significant Gravitas, hexgrad.
};

const REGION_OF: Record<string, "US" | "CN" | "EU" | "OTHER"> = {
  US: "US",
  CN: "CN",
  GB: "EU",
  DE: "EU",
  FR: "EU",
  IL: "OTHER",
  JP: "OTHER",
  AE: "OTHER",
  CA: "OTHER",
};

/** ISO country of a house's HQ, or undefined when unverified. */
export function providerCountry(house: string): string | undefined {
  return COUNTRY[house];
}

/** Coarse bloc for the origin comparison, or undefined when the country is unverified. */
export function providerRegion(house: string): "US" | "CN" | "EU" | "OTHER" | undefined {
  const country = providerCountry(house);
  return country ? REGION_OF[country] : undefined;
}

/**
 * Build-time guard: every house in the dataset must be a known key here.
 *
 * `house` is typed as `string`, so a typo ("Googe") or a new company added to
 * data/timeline.ts without a registry entry would otherwise fail silently —
 * missing its colour and logo, and counting as a separate house forever. The
 * country map stays deliberately incomplete, so unverified HQs are listed by
 * name rather than tripping this.
 */
export function assertKnownHouses(houses: Iterable<string>): void {
  const known = new Set([
    ...Object.keys(DOMAIN),
    ...Object.keys(COUNTRY),
    ...Object.keys(PALETTE),
    // No HQ confirmed against a primary source, so intentionally absent from
    // COUNTRY — but still real, known houses.
    "poolside",
    "DeepReinforce",
    "Significant Gravitas",
    "hexgrad",
  ]);
  const unknown = [...new Set(houses)].filter((h) => !known.has(h)).sort();
  if (unknown.length) {
    throw new Error(
      `Unbekanntes Haus in data/timeline.ts: ${unknown.join(", ")}. ` +
        `Bitte in lib/providers.ts eintragen (Domain, Land, Farbe) — sonst ` +
        `zählt es als eigenes Haus, ohne Logo und ohne Region.`,
    );
  }
}
