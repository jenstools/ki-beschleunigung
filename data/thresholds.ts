import type { Modality } from "./types";

/**
 * Curated "threshold" moments — the points where a capability crossed from
 * impossible to ordinary. Placed at real dates on the horizontal timeline as
 * full-height marker bands with a before→after contrast. Hand-written German,
 * tied to releases that exist in the dataset.
 */
export type Threshold = {
  date: string; // ISO, anchors the marker on the time axis
  modality: Modality; // colors the marker
  title: string; // the "after" — what became possible
  before: string; // the "before" — what it was shortly before
};

export const thresholds: Threshold[] = [
  {
    date: "2022-11-30",
    modality: "text",
    title: "Zum ersten Mal redet eine Maschine wie ein Mensch.",
    before: "Davor: Stichwortsuche und holprige Autovervollständigung.",
  },
  {
    date: "2023-06-01",
    modality: "image",
    title: "Fotorealistische Bilder auf Zuruf.",
    before: "Wenige Monate zuvor: verschmierte Gesichter und sechs Finger.",
  },
  {
    date: "2024-02-15",
    modality: "video",
    title: "Ein Satz wird zu einer Minute kohärentem Video.",
    before: "Ein Jahr zuvor: vier Sekunden Flackern — der „Will Smith isst Spaghetti“-Clip.",
  },
  {
    date: "2024-05-13",
    modality: "audio",
    title: "Echtzeit-Sprachgespräch, mit Lachen und Unterbrechungen.",
    before: "Davor: roboterhafte Vorlese-Stimmen mit spürbarer Verzögerung.",
  },
  {
    date: "2025-01-20",
    modality: "text",
    title: "Ein frei herunterladbares Modell auf Augenhöhe mit der teuersten Spitze.",
    before: "Davor galt Open-Weights als hoffnungslos abgehängt.",
  },
  {
    date: "2025-05-20",
    modality: "video",
    title: "Video mit synchronem Ton — in einem einzigen Schritt.",
    before: "Zwei Jahre zuvor: stumme Vier-Sekunden-Clips.",
  },
  {
    date: "2026-04-23",
    modality: "text",
    title: "Agenten, die stundenlang eigenständig Aufgaben lösen.",
    before: "2022: ein Chatbot, der auf einzelne Fragen antwortet.",
  },
];
