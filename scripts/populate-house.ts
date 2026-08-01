/**
 * One-shot codemod: write an explicit `house` onto every entry in
 * data/timeline.ts, derived from the hand-decided table below.
 *
 * Kept in the repo as the audit trail for those 65 editorial decisions — the
 * mapping is not re-derivable from the data, and `house` is hand-maintained
 * from here on. Re-running it is idempotent.
 */
import { readFileSync, writeFileSync } from "node:fs";

/** org label as printed in the primary source -> canonical house. */
const HOUSE_OF: Record<string, string> = {
  Adobe: "Adobe",
  Alibaba: "Alibaba",
  "Alibaba (Qwen)": "Alibaba",
  "Alibaba (Wan Team)": "Alibaba",
  "Alibaba DAMO Academy": "Alibaba",
  "Ant Group": "Ant Group",
  Anthropic: "Anthropic",
  Apple: "Apple",
  Baidu: "Baidu",
  "Black Forest Labs": "Black Forest Labs",
  ByteDance: "ByteDance",
  "ByteDance (Dreamina)": "ByteDance",
  "ByteDance (Volcano Engine / Doubao)": "ByteDance",
  Cognition: "Cognition",
  DeepReinforce: "DeepReinforce",
  DeepSeek: "DeepSeek",
  ElevenLabs: "ElevenLabs",
  "Fish Audio": "Fish Audio",
  Genmo: "Genmo",
  Google: "Google",
  "Google DeepMind": "Google",
  "Hume AI": "Hume AI",
  Ideogram: "Ideogram",
  "Ideogram AI": "Ideogram",
  Kuaishou: "Kuaishou",
  Kyutai: "Kyutai",
  Lightricks: "Lightricks",
  "Luma AI": "Luma AI",
  Meituan: "Meituan",
  Meta: "Meta",
  "Meta (Superintelligence Labs)": "Meta",
  "Meta AI": "Meta",
  Microsoft: "Microsoft",
  "Microsoft AI": "Microsoft",
  Midjourney: "Midjourney",
  MiniMax: "MiniMax",
  "Mistral AI": "Mistral",
  "Moonshot AI": "Moonshot",
  OpenAI: "OpenAI",
  "OpenMOSS / MOSI.AI / Shanghai Innovation Institute": "OpenMOSS",
  "Pika Labs": "Pika Labs",
  Recraft: "Recraft",
  Runway: "Runway",
  "RunwayML / Stability AI": "Runway",
  "Sakana AI": "Sakana AI",
  "Sesame AI": "Sesame AI",
  "Shanghai Jiao Tong University / Cambridge University": "Shanghai Jiao Tong University",
  "Significant Gravitas": "Significant Gravitas",
  "Stability AI": "Stability AI",
  "Stability AI / CompVis / RunwayML": "Stability AI",
  StepFun: "StepFun",
  Suno: "Suno",
  "Suno AI": "Suno",
  TII: "TII",
  Tencent: "Tencent",
  "Tencent (Hunyuan)": "Tencent",
  "Thinking Machines Lab": "Thinking Machines Lab",
  Udio: "Udio",
  xAI: "xAI",
  "Zhipu / Z.ai": "Zhipu",
  "Zhipu AI (Z.ai)": "Zhipu",
  "hexgrad (independent)": "hexgrad",
  poolside: "poolside",
  // The two `kind: "personal"` markers. Never counted as releases, but `house`
  // is required, so they carry their own name rather than a placeholder.
  "jens.marketing": "jens.marketing",
  snipKI: "snipKI",
};

const path = new URL("../data/timeline.ts", import.meta.url).pathname;
const src = readFileSync(path, "utf8");

const missing = new Set<string>();
let written = 0;

// Every entry literal has exactly one `org: "..."` line; `house` goes directly
// after it so the display credit and the canonical key read as a pair.
const out = src.replace(
  /^(\s*)"org": (".*?"),\n(?:\1"house": ".*?",\n)?/gm,
  (_all, indent: string, orgLiteral: string) => {
    const org = JSON.parse(orgLiteral) as string;
    const house = HOUSE_OF[org];
    if (house === undefined) {
      missing.add(org);
      return `${indent}"org": ${orgLiteral},\n`;
    }
    written += 1;
    return `${indent}"org": ${orgLiteral},\n${indent}"house": ${JSON.stringify(house)},\n`;
  },
);

if (missing.size) {
  console.error(`Unmapped org labels:\n  ${[...missing].join("\n  ")}`);
  process.exit(1);
}

writeFileSync(path, out);
console.log(`house written on ${written} entries`);
