/** Canonical company for an entry's `org` string (collapses qualifiers/sub-labs). */
export function canonicalOrg(org: string): string {
  const o = org.toLowerCase();
  const has = (...ks: string[]) => ks.some((k) => o.includes(k));
  if (has("openai")) return "OpenAI";
  if (has("google", "deepmind")) return "Google";
  if (has("anthropic")) return "Anthropic";
  if (has("microsoft")) return "Microsoft";
  if (has("meta")) return "Meta";
  if (has("alibaba", "qwen")) return "Alibaba";
  if (has("moonshot", "kimi")) return "Moonshot";
  if (has("deepseek")) return "DeepSeek";
  if (has("zhipu", "z.ai", "glm")) return "Zhipu";
  if (has("minimax", "hailuo")) return "MiniMax";
  if (has("bytedance", "seed", "seedance")) return "ByteDance";
  if (has("tencent", "hunyuan")) return "Tencent";
  if (has("baidu", "ernie")) return "Baidu";
  if (has("stability")) return "Stability AI";
  if (has("black forest", "flux")) return "Black Forest Labs";
  if (has("midjourney")) return "Midjourney";
  if (has("runway")) return "Runway";
  if (has("kuaishou", "kling")) return "Kuaishou";
  if (has("elevenlabs")) return "ElevenLabs";
  if (has("suno")) return "Suno";
  if (has("xai", "grok")) return "xAI";
  if (has("mistral")) return "Mistral";
  if (has("lightricks", "ltx")) return "Lightricks";
  if (has("stepfun", "step")) return "StepFun";
  if (has("fish audio")) return "Fish Audio";
  if (has("ideogram")) return "Ideogram";
  if (has("adobe")) return "Adobe";
  if (has("genmo", "mochi")) return "Genmo";
  // Fall back to the first segment of the org name.
  return org.split(/[/(,]/)[0].trim();
}

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
};

export function providerColor(name: string): string {
  return PALETTE[name] ?? "#8a938d";
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
  Lightricks: "lightricks.com",
  StepFun: "stepfun.com",
  "Fish Audio": "fish.audio",
  Ideogram: "ideogram.ai",
  Adobe: "adobe.com",
  Genmo: "genmo.ai",
  "jens.marketing": "jens.marketing",
  snipKI: "snipki.de",
};

/** Best-guess domain for a provider's `org` string (for favicon logos). */
export function providerDomain(org: string): string {
  return DOMAIN[canonicalOrg(org)] ?? "";
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

/** ISO country of the lab behind an `org` string, or undefined when unverified. */
export function providerCountry(org: string): string | undefined {
  return COUNTRY[canonicalOrg(org)];
}

/** Coarse bloc for the origin comparison, or undefined when the country is unverified. */
export function providerRegion(org: string): "US" | "CN" | "EU" | "OTHER" | undefined {
  const country = providerCountry(org);
  return country ? REGION_OF[country] : undefined;
}
