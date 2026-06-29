import type { Modality } from "@/data/types";

export const MODALITY_COLOR: Record<Modality, string> = {
  text: "var(--c-text)",
  image: "var(--c-image)",
  video: "var(--c-video)",
  audio: "var(--c-audio)",
};

/** Translucent tint of a modality color, for soft fills. */
export function modalityTint(modality: Modality, alpha = 0.1): string {
  const hex: Record<Modality, string> = {
    text: "31, 95, 214",
    image: "194, 49, 111",
    video: "210, 105, 30",
    audio: "14, 133, 122",
  };
  return `rgba(${hex[modality]}, ${alpha})`;
}
