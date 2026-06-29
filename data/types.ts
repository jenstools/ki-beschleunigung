export type Modality = "text" | "image" | "video" | "audio";

export type License = "open" | "closed";

export type Entry = {
  id: string;
  /** ISO date: YYYY-MM-DD, or YYYY-MM when the day is unknown. */
  date: string;
  datePrecision: "day" | "month";
  modality: Modality;
  /** Product / model name, e.g. "Sora", "Claude 3.5 Sonnet". */
  name: string;
  /** Organization, e.g. "OpenAI", "Alibaba". */
  org: string;
  license: License;
  /** One line: what it could newly do. */
  capability: string;
  /** The capability delta vs the prior state of the art. */
  whyItMattered: string;
  /** Notable "first of kind" claim; empty string when not applicable. */
  firstOfKind?: string;
  /** Primary-source URLs (official blog / paper / release notes). */
  sources: string[];
  /** True when the date or claim could not be confirmed against a primary source. */
  disputed?: boolean;
  /** What was corrected or why it is disputed; empty string when clean. */
  verificationNote?: string;
  /** Optional current-status note shown on the card (e.g. availability caveats). */
  note?: string;
  /** "personal" entries (e.g. the author's newsletter) render with a brand marker, not a license badge. */
  kind?: "release" | "personal";
  /** Badge text for "personal" entries (defaults to "Newsletter"). */
  personalLabel?: string;
};

export const MODALITY_META: Record<
  Modality,
  { label: string; short: string; blurb: string }
> = {
  text: {
    label: "Text & Reasoning",
    short: "Text",
    blurb: "Sprachmodelle — Chat, Code und Reasoning.",
  },
  image: {
    label: "Bild",
    short: "Bild",
    blurb: "Text-zu-Bild und Bildbearbeitung.",
  },
  video: {
    label: "Video",
    short: "Video",
    blurb: "Text- und Bild-zu-Video.",
  },
  audio: {
    label: "Audio & Stimme",
    short: "Audio",
    blurb: "Sprache, Voice-Cloning und Musik.",
  },
};

export const MODALITY_ORDER: Modality[] = ["text", "image", "video", "audio"];
