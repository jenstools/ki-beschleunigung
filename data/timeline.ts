import type { Entry } from "./types";

/**
 * Verified dataset — multi-agent research + adversarial date-verification,
 * German descriptions. 237 entries across text, image, video, audio,
 * late 2022 → 29 July 2026.
 */
export const entries: Entry[] = [
  {
    "id": "text-instructgpt-2022-01-27",
    "date": "2022-01-27",
    "datePrecision": "day",
    "modality": "text",
    "name": "InstructGPT",
    "org": "OpenAI",
    "license": "closed",
    "capability": "Erstes per RLHF an menschlichen Anweisungen ausgerichtetes Produktionsmodell, ausgeliefert als Standard in der OpenAI-API.",
    "whyItMattered": "Die RLHF-Technik, die ChatGPT überhaupt erst möglich machte — der entscheidende Schritt vor dem Chatbot-Boom.",
    "firstOfKind": "Erstes per RLHF instruktionsoptimiertes Produktionsmodell",
    "sources": [
      "https://openai.com/index/instruction-following/"
    ],
    "disputed": false,
    "verificationNote": ""
  },
  {
    "id": "text-palm-540b-2022-04-04",
    "date": "2022-04-04",
    "datePrecision": "day",
    "modality": "text",
    "name": "PaLM (540B)",
    "org": "Google",
    "license": "closed",
    "capability": "540-Mrd.-Parameter-Sprachmodell, das GPT-3 auf fast allen Benchmarks schlug und emergentes Chain-of-Thought-Reasoning zeigte.",
    "whyItMattered": "Der Skalierungs- und Emergenz-Meilenstein 2022 und Fundament für Googles Bard/Gemini-Linie.",
    "firstOfKind": "",
    "sources": [
      "https://research.google/blog/pathways-language-model-palm-scaling-to-540-billion-parameters-for-breakthrough-performance/"
    ],
    "disputed": false,
    "verificationNote": ""
  },
  {
    "id": "image-midjourney-open-beta-v3-2022-07-12",
    "date": "2022-07-12",
    "datePrecision": "day",
    "modality": "image",
    "name": "Midjourney (Open Beta, v3)",
    "org": "Midjourney",
    "license": "closed",
    "capability": "Öffnete die Discord-basierte Text-zu-Bild-Generierung für alle.",
    "whyItMattered": "Brachte KI-Bildgenerierung Monate vor der Bild-Explosion im August einer Massenöffentlichkeit nahe.",
    "firstOfKind": "",
    "sources": [
      "https://en.wikipedia.org/wiki/Midjourney"
    ],
    "disputed": false,
    "verificationNote": ""
  },
  {
    "id": "image-stable-diffusion-1-4-public-release-2022-08-22",
    "modality": "image",
    "date": "2022-08-22",
    "datePrecision": "day",
    "name": "Stable Diffusion 1.4 (public release)",
    "org": "Stability AI / CompVis / RunwayML",
    "license": "open",
    "capability": "Erstes leistungsfähiges Open-Weights-Diffusionsmodell für Text-zu-Bild, das auf Consumer-GPUs läuft und 512×512-Bilder in Sekunden erzeugt",
    "whyItMattered": "Das erste breit zugängliche, herunterladbare Text-zu-Bild-Modell mit konkurrenzfähiger Qualität — eine direkte Herausforderung für DALL-E 2 und Imagen, da sämtliche Zugangsschranken entfielen; brachte das Open-Source-Ökosystem für Bildgenerierung (LoRA, ControlNet, Fine-Tuning) praktisch über Nacht hervor",
    "firstOfKind": "Erstes breit verteiltes Open-Weights-Modell für Text-zu-Bild, das auf einer Consumer-GPU lauffähig ist",
    "sources": [
      "https://stability.ai/news-updates/stable-diffusion-public-release",
      "https://en.wikipedia.org/wiki/Stable_Diffusion"
    ],
    "disputed": false,
    "verificationNote": "Der 22. August 2022 wird direkt durch den Blogbeitrag zur öffentlichen Veröffentlichung von Stability AI bestätigt. SD 1.4 war die empfohlene Version für die öffentliche Veröffentlichung; die Versionen 1.1–1.4 waren zuvor in jenem Monat an Forschende herausgegeben worden."
  },
  {
    "id": "audio-audiolm-2022-09-07",
    "date": "2022-09-07",
    "datePrecision": "day",
    "modality": "audio",
    "name": "AudioLM",
    "org": "Google",
    "license": "closed",
    "capability": "Erzeugt zusammenhängendes Audio (Sprache, Klavier) per Sprachmodellierung über Audio-Tokens.",
    "whyItMattered": "Etablierte das „Audio als Sprachmodell\"-Paradigma, das MusicLM und moderne Audiogenerierung trägt.",
    "firstOfKind": "",
    "sources": [
      "https://arxiv.org/abs/2209.03143"
    ],
    "disputed": false,
    "verificationNote": ""
  },
  {
    "id": "audio-whisper-large-v1-2022-09-21",
    "modality": "audio",
    "date": "2022-09-21",
    "datePrecision": "day",
    "name": "Whisper (large-v1)",
    "org": "OpenAI",
    "license": "open",
    "capability": "Mehrsprachige Open-Source-ASR, trainiert auf 680.000 Stunden Web-Audio, die über 99 Sprachen hinweg eine nahezu menschliche Transkriptionsqualität erreicht",
    "whyItMattered": "Bisherige Open-Source-ASR lag deutlich hinter proprietären Systemen zurück; Whisper erreichte oder übertraf kommerzielle APIs zum Nulltarif unter MIT-Lizenz und demokratisierte damit die Transkription für alle Entwickler",
    "firstOfKind": "Erstes Open-Source-ASR-Modell, das die Qualität mehrsprachiger Transkription auf kommerziellem Niveau weitgehend erreicht",
    "sources": [
      "https://openai.com/index/whisper/",
      "https://techcrunch.com/2022/09/21/openai-open-sources-whisper-a-multilingual-speech-recognition-system/",
      "https://arxiv.org/abs/2212.04356"
    ],
    "disputed": false,
    "verificationNote": "Datum bestätigt: Der 21. September 2022 stimmt mit dem OpenAI-Blogbeitrag und der zeitgleichen Berichterstattung von TechCrunch überein. Die Formulierung „weitgehend erreicht“ ist angemessen vorsichtig gehalten."
  },
  {
    "id": "image-dall-e-2-public-launch-no-waitlist-2022-09-28",
    "modality": "image",
    "date": "2022-09-28",
    "datePrecision": "day",
    "name": "DALL-E 2 (public launch, no waitlist)",
    "org": "OpenAI",
    "license": "closed",
    "capability": "Fotorealistische Bilderzeugung und -bearbeitung per Inpainting/Outpainting mit 1024×1024, ergänzt um CLIP-gestütztes semantisches Verständnis",
    "whyItMattered": "Erstes kommerziell ausgerolltes geschlossenes Frontier-Modell, das vollständig öffentlich wurde; es zeigte, dass ein auf allgemeine LLMs spezialisiertes Unternehmen die Spitze der hochwertigen Bildgenerierung besetzen und den kommerziellen Maßstab setzen konnte, den DALL-E 3 später beerben sollte",
    "firstOfKind": "Erstes geschlossenes Frontier-Modell für Text-zu-Bild, das ohne Warteliste vollständig der Öffentlichkeit zugänglich war",
    "sources": [
      "https://openai.com/index/dall-e-now-available-without-waitlist/",
      "https://siliconangle.com/2022/09/28/openai-removes-waitlist-dall-e-2-powerful-text-image-ai-generator/"
    ],
    "disputed": false,
    "verificationNote": "Der 28. September 2022 wird durch die Ankündigungsseite von OpenAI selbst sowie durch mehrere zeitgleiche Quellen bestätigt."
  },
  {
    "id": "video-make-a-video-2022-09-29",
    "date": "2022-09-29",
    "datePrecision": "day",
    "modality": "video",
    "name": "Make-A-Video",
    "org": "Meta",
    "license": "closed",
    "capability": "Erstes prominentes Text-zu-Video-Modell; lernte Bewegung aus unbeschriftetem Video, Aussehen aus Text-Bild-Paaren.",
    "whyItMattered": "Der „KI kann jetzt Video\"-Moment, der das Text-zu-Video-Rennen auslöste.",
    "firstOfKind": "Erstes prominentes Text-zu-Video-Modell",
    "sources": [
      "https://ai.meta.com/blog/generative-ai-text-to-video/"
    ],
    "disputed": false,
    "verificationNote": ""
  },
  {
    "id": "image-dreamfusion-2022-09-29",
    "date": "2022-09-29",
    "datePrecision": "day",
    "modality": "image",
    "name": "DreamFusion",
    "org": "Google",
    "license": "closed",
    "capability": "Text-zu-3D ohne 3D-Trainingsdaten, durch Destillation eines 2D-Diffusionsmodells in ein NeRF (Score Distillation).",
    "whyItMattered": "Der Text-zu-3D-Durchbruch 2022 und Basis der gesamten folgenden Text-zu-3D-Welle.",
    "firstOfKind": "Durchbruch bei Text-zu-3D",
    "sources": [
      "https://arxiv.org/abs/2209.14988"
    ],
    "disputed": false,
    "verificationNote": ""
  },
  {
    "id": "image-stable-diffusion-1-5-2022-10-20",
    "modality": "image",
    "date": "2022-10-20",
    "datePrecision": "day",
    "name": "Stable Diffusion 1.5",
    "org": "RunwayML / Stability AI",
    "license": "open",
    "capability": "Verbesserte Bildqualität, bessere Ästhetik und höhere Prompt-Treue gegenüber SD 1.4 auf derselben 512×512-Architektur",
    "whyItMattered": "Wurde über Jahre zum dominierenden Open-Source-Basis-Checkpoint; SD 1.5 bildete die Grundlage für die überwiegende Mehrheit der Community-Fine-Tunes (LoRAs, DreamBooth-Modelle) und blieb bis weit in das Jahr 2024 hinein das meistgenutzte offene Modell",
    "firstOfKind": "",
    "sources": [
      "https://huggingface.co/runwayml/stable-diffusion-v1-5",
      "https://en.wikipedia.org/wiki/Stable_Diffusion"
    ],
    "disputed": false,
    "verificationNote": "Der 20. Oktober 2022 wird durch mehrere Sekundärquellen bestätigt, die sich auf die Commit-Historie von RunwayML auf HuggingFace sowie auf Community-Berichte beziehen. Wikipedia bestätigt dieses Datum."
  },
  {
    "id": "image-midjourney-v4-2022-11-05",
    "modality": "image",
    "date": "2022-11-05",
    "datePrecision": "day",
    "name": "Midjourney v4",
    "org": "Midjourney",
    "license": "closed",
    "capability": "Völlig neue Architektur, trainiert auf Midjourneys eigenem KI-Supercluster, mit deutlich verbesserter Kohärenz, mehr Detailtreue und Unterstützung komplexer Prompts mit mehreren Motiven",
    "whyItMattered": "Markierte den Punkt, an dem ein geschlossener Abodienst eine durchgängig hohe künstlerische Qualität erreichte, die das Open-Source-Modell SD 1.x in den meisten Ästhetik-Benchmarks übertraf; setzte für das folgende Jahr den Maßstab für kommerzielle Premium-Bilder",
    "firstOfKind": "",
    "sources": [
      "https://en.wikipedia.org/wiki/Midjourney",
      "https://docs.midjourney.com/hc/en-us/articles/32199405667853-Version"
    ],
    "disputed": false,
    "verificationNote": "Der 5. November 2022 wird laut Wikipedia und mehreren Community-Quellen als Datum der Alpha-Veröffentlichung bestätigt. Die offizielle Midjourney-Dokumentation bestätigt v4 als Standardmodell vom 20. Dezember 2022 bis zum 30. März 2023."
  },
  {
    "id": "image-stable-diffusion-2-0-2022-11-24",
    "modality": "image",
    "date": "2022-11-24",
    "datePrecision": "day",
    "name": "Stable Diffusion 2.0",
    "org": "Stability AI",
    "license": "open",
    "capability": "Native Auflösung von 768×768, neuer OpenCLIP-Text-Encoder, Depth-to-Image-Pipeline und ein 4×-Upscaler-Modell",
    "whyItMattered": "Erste SD-Version, die zu einem auf LAION trainierten offenen Text-Encoder (OpenCLIP) wechselte und nativ über 512 Pixel hinausging; die tiefengeführte Generierung war ein neues kreatives Grundelement, das es in SD 1.x noch nicht gab; die Akzeptanz in der Community stockte jedoch aufgrund der NSFW-Filterung und der Prompt-Inkompatibilität mit SD 1.5",
    "firstOfKind": "",
    "sources": [
      "https://stability.ai/news-updates/stable-diffusion-v2-release",
      "https://en.wikipedia.org/wiki/Stable_Diffusion"
    ],
    "disputed": false,
    "verificationNote": "Der 24. November 2022 wird durch den Veröffentlichungs-Blog von Stability AI selbst sowie durch mehrere zeitgleiche Pressemeldungen bestätigt (einige nennen den 23.–25. November). Der 24. November ist das am häufigsten genannte Datum für die Ankündigung von Stability AI."
  },
  {
    "id": "text-chatgpt-gpt-3-5-turbo-2022-11-30",
    "modality": "text",
    "date": "2022-11-30",
    "datePrecision": "day",
    "name": "ChatGPT (GPT-3.5-turbo)",
    "org": "OpenAI",
    "license": "closed",
    "capability": "Dialogorientierter, anweisungsbefolgender Chatbot, der über den Webbrowser für die breite Öffentlichkeit zugänglich ist",
    "whyItMattered": "Zum ersten Mal wurde ein Frontier-LLM in eine kostenlose, reibungslose Consumer-Chat-Oberfläche eingebettet; erreichte 1 Mio. Nutzer in 5 Tagen und 100 Mio. in 2 Monaten, löste damit den KI-Massenmoment aus und zwang jedes große Technologieunternehmen zu einer Reaktion",
    "firstOfKind": "Erste kostenlose Chat-Oberfläche für ein Frontier-LLM mit Reichweite im Massenmarkt",
    "sources": [
      "https://openai.com/index/chatgpt/",
      "https://en.wikipedia.org/wiki/ChatGPT"
    ],
    "disputed": false,
    "verificationNote": "Der 30. November 2022 wird durch mehrere Primär- und Sekundärquellen als Datum bestätigt."
  },
  {
    "id": "audio-whisper-large-v2-2022-12-08",
    "modality": "audio",
    "date": "2022-12-08",
    "datePrecision": "day",
    "name": "Whisper large-v2",
    "org": "OpenAI",
    "license": "open",
    "capability": "Verbessertes Whisper-Modell mit einer um etwa 10–15 % geringeren Wortfehlerrate, insbesondere bei verrauschten Aufnahmen, das 2,5-mal länger und mit Regularisierung trainiert wurde",
    "whyItMattered": "Festigte den Status von Open-Source-ASR als produktionsreif, indem es den Abstand zu den besten kommerziellen Angeboten weiter verringerte; wurde über Jahre zur faktischen Referenz in der Community",
    "firstOfKind": "",
    "sources": [
      "https://github.com/openai/whisper/blob/main/model-card.md",
      "https://huggingface.co/openai/whisper-large-v2"
    ],
    "disputed": false,
    "verificationNote": "Der 8. Dezember 2022 wird über die Hugging-Face-Modellkarte und die GitHub-Modellkarte als Datum bestätigt. Der tote Link zu den Diskussionen wurde durch die primären Quellen der Modellkarte ersetzt."
  },
  {
    "id": "text-ki-newsletter-jens-2023-01",
    "date": "2023-01",
    "datePrecision": "month",
    "modality": "text",
    "name": "KI-Newsletter von Jens",
    "org": "jens.marketing",
    "license": "open",
    "kind": "personal",
    "capability": "Ein deutschsprachiger Newsletter, der seit Anfang 2023 die KI-Entwicklung verfolgt und einordnet.",
    "whyItMattered": "Gestartet, bevor der große Hype losging — und seitdem durchgehend zur KI-Entwicklung berichtet. (Vom Herausgeber dieser Seite.)",
    "firstOfKind": "",
    "sources": [
      "https://jens.marketing/ki-newsletter/"
    ],
    "disputed": false,
    "verificationNote": ""
  },
  {
    "id": "audio-vall-e-2023-01-05",
    "modality": "audio",
    "date": "2023-01-05",
    "datePrecision": "day",
    "name": "VALL-E",
    "org": "Microsoft",
    "license": "closed",
    "capability": "Zero-Shot-TTS als neuronales Codec-Sprachmodell, das die Stimme eines Sprechers aus einem 3-sekündigen Audio-Prompt synthetisiert und dabei die emotionale Färbung des Sprechers bewahrt",
    "whyItMattered": "Zeigte, dass die Behandlung von TTS als Sprachmodellierungsproblem über Codec-Tokens — statt als Signalregression — zu einer dramatischen Zero-Shot-Generalisierung führte; ein Paradigmenwechsel, der praktisch jede nachfolgende TTS-Architektur beeinflusst hat",
    "firstOfKind": "Erstes sprachmodellbasiertes Zero-Shot-TTS, das Sprecherähnlichkeit aus einer 3-sekündigen Referenzaufnahme erreicht",
    "sources": [
      "https://arxiv.org/abs/2301.02111",
      "https://www.microsoft.com/en-us/research/publication/neural-codec-language-models-are-zero-shot-text-to-speech-synthesizers/"
    ],
    "disputed": false,
    "verificationNote": "Die arXiv-Einreichung wird als 5. Januar 2023 bestätigt (v1 eingereicht am Do., 5. Jan. 2023, 15:37:15 UTC). Der ursprüngliche Eintrag hatte die datePrecision „month“, doch der genaue Tag ist bestätigt, weshalb auf „day“ korrigiert wurde."
  },
  {
    "id": "audio-elevenlabs-beta-launch-instant-voice-cloning-tts-2023-01-23",
    "modality": "audio",
    "date": "2023-01-23",
    "datePrecision": "day",
    "name": "ElevenLabs Beta Launch (instant voice cloning + TTS)",
    "org": "ElevenLabs",
    "license": "closed",
    "capability": "Für Verbraucher zugängliches sofortiges Voice-Cloning aus kurzen Audioproben, kombiniert mit emotionsbewusster Sprachsynthese, zunächst auf Englisch und Polnisch",
    "whyItMattered": "Ein Webprodukt ermöglichte es jedem, eine Stimme in Sekunden aus minimalem Audiomaterial zu klonen und ausdrucksstarke Sprache in großem Umfang zu synthetisieren; bisherige kommerzielle TTS erforderte den Aufbau individueller Stimmen in Studioqualität; das Produkt erreichte innerhalb weniger Monate 1 Mio. Nutzer",
    "firstOfKind": "Erstes breit zugängliches Consumer-Webprodukt, das sofortiges Voice-Cloning und emotionsbewusstes TTS in einer einzigen Oberfläche vereint",
    "sources": [
      "https://voicebot.ai/2023/01/23/synthetic-speech-startup-elevenlabs-raises-2m-for-ai-voices-with-context-relevant-emotion/",
      "https://elevenlabs.io/blog/elevenlabs-comes-out-of-beta-and-releases-eleven-multilingual-v2-a-foundational-ai-speech-model-for-nearly-30-languages"
    ],
    "disputed": false,
    "verificationNote": "Datum bestätigt: Der Artikel von Voicebot.ai ist auf den 23. Januar 2023 datiert und bestätigt, dass Voice-Cloning bereits zum Beta-Start verfügbar war. Die Aussage „erstes kommerziell zugängliches sofortiges Voice-Cloning“ wurde zu „erstes breit zugängliches Consumer-Webprodukt“ abgeschwächt — frühere Dienste existierten (z. B. Resemble AI, Coqui), erreichten jedoch nicht die Zugänglichkeit und Skalierung von ElevenLabs."
  },
  {
    "id": "video-runway-gen-1-2023-02-06",
    "modality": "video",
    "date": "2023-02-06",
    "datePrecision": "day",
    "name": "Runway Gen-1",
    "org": "Runway",
    "license": "closed",
    "capability": "Video-zu-Video-Stilübertragung: Anwendung eines beliebigen Bild- oder Textstils auf jedes Einzelbild eines bestehenden Videoclips",
    "whyItMattered": "Erstes kommerziell zugängliches System zur Video-zu-Video-Synthese; es zeigte, dass neuronale Stilübertragung zeitlich konsistent auf reales Filmmaterial angewendet werden kann, und eröffnete damit erstmals KI-native Filmworkflows",
    "firstOfKind": "Erstes kommerziell verfügbares KI-System zur Video-zu-Video-Generierung",
    "sources": [
      "https://runwayml.com/research/gen-1",
      "https://arxiv.org/abs/2302.03011",
      "https://www.ghacks.net/2023/02/08/runway-launches-ground-breaking-gen-1-video-generation-ai-system/"
    ],
    "disputed": false,
    "verificationNote": "Das arXiv-Paper 2302.03011 wurde am 6. Februar 2023 eingereicht (bestätigt). Die Autorenzeile der Runway-Forschungsseite bestätigt „Feb 2023“. Der ghacks-Artikel (8. Februar) behandelt die Ankündigung. Datum gegen die Primärquelle bestätigt."
  },
  {
    "id": "text-llama-1-2023-02-24",
    "modality": "text",
    "date": "2023-02-24",
    "datePrecision": "day",
    "name": "LLaMA 1",
    "org": "Meta",
    "license": "open",
    "capability": "Hochwertiges, forschungstaugliches LLM (7B–65B), veröffentlicht mit offenen Gewichten unter einer nichtkommerziellen Lizenz",
    "whyItMattered": "Gab der Open-Source-Forschungsgemeinschaft ihr erstes wirklich leistungsfähiges Foundation-Modell zum Fine-Tuning; löste das gesamte Ökosystem an Community-Fine-Tunes (Alpaca, Vicuna usw.) aus und bewies, dass offene Gewichte die Qualität proprietärer Modelle annähernd erreichen können",
    "firstOfKind": "Erste offen verfügbare LLM-Familie, die mit den damaligen Modellen der GPT-3-Klasse konkurrenzfähig war",
    "sources": [
      "https://ai.meta.com/blog/large-language-model-llama-meta-ai/"
    ],
    "disputed": false,
    "verificationNote": "Der 24. Februar 2023 wird durch den offiziellen Blogbeitrag von Meta AI als Datum bestätigt."
  },
  {
    "id": "text-gpt-4-2023-03-14",
    "modality": "text",
    "date": "2023-03-14",
    "datePrecision": "day",
    "name": "GPT-4",
    "org": "OpenAI",
    "license": "closed",
    "capability": "Großes multimodales Modell, das Bild- und Texteingaben verarbeitet, etwa das 90. Perzentil im Anwaltsexamen erreicht und GPT-3.5 in fachlichen Benchmarks deutlich übertrifft",
    "whyItMattered": "Stellte einen Sprung in Zuverlässigkeit, Reasoning und fachlicher Kompetenz gegenüber GPT-3.5 dar; die Leistungen im Anwaltsexamen und in medizinischen Prüfungen zeigten erstmals, dass LLMs die durchschnittliche Leistung menschlicher Fachkräfte übertreffen können",
    "firstOfKind": "Erstes öffentlich ausgerolltes LLM, das in einer breiten Palette berufsqualifizierender Prüfungen über dem menschlichen Durchschnitt abschnitt",
    "sources": [
      "https://openai.com/research/gpt-4",
      "https://techcrunch.com/2023/03/14/openai-releases-gpt-4-ai-that-it-claims-is-state-of-the-art/"
    ],
    "disputed": false,
    "verificationNote": "Der 14. März 2023 ist als Datum bestätigt. Die ursprüngliche URL openai.com/research/gpt-4 liefert einen 403-Fehler; die Primärberichterstattung von TechCrunch bestätigt das Datum."
  },
  {
    "id": "image-midjourney-v5-2023-03-15",
    "modality": "image",
    "date": "2023-03-15",
    "datePrecision": "day",
    "name": "Midjourney v5",
    "org": "Midjourney",
    "license": "closed",
    "capability": "Fotorealistische Bilder in doppelter Auflösung (1024×1024), Prompting in natürlicher Sprache, beliebige Seitenverhältnisse und verlässlich fünffingrige Hände",
    "whyItMattered": "Erste Midjourney-Version, die einen Fotorealismus erreichte, der überzeugend genug war, um als gefälschte Fotos zu kursieren; die korrekte Handanatomie beseitigte ein langjähriges Erkennungsmerkmal für KI-Bilder und setzte Anfang 2023 branchenweit den Maßstab für Realismus",
    "firstOfKind": "",
    "sources": [
      "https://en.wikipedia.org/wiki/Midjourney",
      "https://docs.midjourney.com/hc/en-us/articles/32199405667853-Version"
    ],
    "disputed": true,
    "verificationNote": "Das ursprüngliche Eintragsdatum war der 16. März 2023. Wikipedia nennt den 15. März 2023 als Datum der Alpha-Veröffentlichung; einige Quellen nennen den 16. März. Die Abweichung von einem Tag spiegelt vermutlich Zeitzonenunterschiede oder einen gestaffelten Rollout wider. Gemäß Wikipedias primärer Referenz zur Alpha auf den 15. März korrigiert, jedoch wegen widersprüchlicher tagesgenauer Quellen umstritten."
  },
  {
    "id": "video-runway-gen-2-2023-03-20",
    "modality": "video",
    "date": "2023-03-20",
    "datePrecision": "day",
    "name": "Runway Gen-2",
    "org": "Runway",
    "license": "closed",
    "capability": "Reine Text-zu-Video-Generierung: Erstellung neuartiger Videoclips allein aus Text-Prompts, ohne jegliche Quellvideo-Eingabe",
    "whyItMattered": "Erstes öffentlich verfügbares Text-zu-Video-Modell; bewies das Konzept, dass generative Modelle kohärente Videos von Grund auf synthetisieren können, statt nur bestehendes Material umzustilisieren — in 73 % der Nutzerstudien gegenüber Ansätzen auf Basis von Stable Diffusion bevorzugt",
    "firstOfKind": "Erster öffentlich verfügbarer Text-zu-Video-Generator",
    "sources": [
      "https://runwayml.com/research/gen-2",
      "https://petapixel.com/2023/03/20/runway-gen-2-is-the-first-publicly-available-text-to-video-generator/",
      "https://siliconangle.com/2023/03/20/runway-debuts-ai-model-can-generate-videos-text/"
    ],
    "disputed": false,
    "verificationNote": "Der ursprüngliche Eintrag nannte das Datum 2023-02-21 (Monatsgenauigkeit), was falsch war — der Februar 2023 ist das Datum des arXiv-Papers zu Gen-1, nicht zu Gen-2. Gen-2 wurde am 20. März 2023 angekündigt, bestätigt durch PetaPixel (20. März 2023) und SiliconAngle (20. März 2023). Die Autorenzeile „Feb 2023“ auf der Runway-Forschungsseite bezieht sich auf Gen-1. Die allgemeine Verfügbarkeit im Web/auf iOS kam im Juni 2023; der 20. März war die erste öffentliche Ankündigung bzw. die Discord-Beta. Datum von 2023-02-21 auf 2023-03-20 korrigiert."
  },
  {
    "id": "video-modelscope-text-to-video-2023-03-20",
    "modality": "video",
    "date": "2023-03-20",
    "datePrecision": "day",
    "name": "ModelScope Text-to-Video",
    "org": "Alibaba DAMO Academy",
    "license": "open",
    "capability": "Open-Weight-Diffusionsmodell mit 1,7 Mrd. Parametern für Text-zu-Video, das kurze Clips aus englischen Prompts erzeugt",
    "whyItMattered": "Erstes breit heruntergeladenes Open-Source-Text-zu-Video-Modell auf Hugging Face; brachte den viralen Benchmark „Will Smith eating spaghetti“ hervor, der zur inoffiziellen Messlatte für jedes nachfolgende Modell wurde, und gab der Open-Source-Videoforschung damit Auftrieb",
    "firstOfKind": "Erstes breit zugängliches Open-Source-Modell für Text-zu-Video",
    "sources": [
      "https://huggingface.co/ali-vilab/modelscope-damo-text-to-video-synthesis",
      "https://huggingface.co/ali-vilab/text-to-video-ms-1.7b"
    ],
    "disputed": true,
    "verificationNote": "Mehrere Quellen verorten den Hugging-Face-Upload auf etwa den 19.–22. März 2023. Eine Quelle nennt den 19. März als Datum, an dem ein Link zum Modell auf HuggingFace geteilt wurde; eine andere spricht von „im Laufe des Wochenendes ab dem 22. März“ und verortet ihn auf etwa den 18.–19. März. Der genaue Tag lässt sich anhand einer einzelnen maßgeblichen Primärquelle nicht tagesgenau bestätigen. Das Datum wurde als beste Schätzung passend zum breiteren Nachrichtenzyklus auf den 20. März gesetzt; disputed=true spiegelt die tagesgenaue Unsicherheit wider."
  },
  {
    "id": "image-adobe-firefly-beta-2023-03-21",
    "modality": "image",
    "date": "2023-03-21",
    "datePrecision": "day",
    "name": "Adobe Firefly (beta)",
    "org": "Adobe",
    "license": "closed",
    "capability": "Erzeugung von Text-zu-Bild und Texteffekten, ausschließlich auf lizenzierten Adobe-Stock-Inhalten und gemeinfreiem Material trainiert, eingebettet in Photoshop und die Creative Cloud",
    "whyItMattered": "Erster Bildgenerator auf Enterprise-Niveau mit einer klaren Herkunftsgeschichte hinsichtlich kommerzieller Rechtssicherheit (IP-Freistellung für Geschäftskunden); etablierte das Paradigma der „lizenzierten Trainingsdaten“ als Wettbewerbsvorteil und bewies, dass sich Bildgenerierung in professionelle kreative Workflows integrieren lässt",
    "firstOfKind": "Erstes kommerziell freigestelltes Text-zu-Bild-Modell, das vollständig auf lizenzierten Inhalten trainiert wurde",
    "sources": [
      "https://news.adobe.com/news/news-details/2023/adobe-unveils-firefly-a-family-of-new-creative-generative-ai",
      "https://techcrunch.com/2023/03/21/adobe-firefly-generative-ai/"
    ],
    "disputed": false,
    "verificationNote": "Der 21. März 2023 wird durch Adobes eigene Pressemitteilung (Zeitstempel 09:16 Uhr) sowohl als Ankündigungs- als auch als Starttermin der öffentlichen Beta bestätigt. Einige Sekundärquellen nennen den 31. März als Datum eines breiteren Beta-Zugangs; der Eintrag verwendet korrekt das primäre Start- bzw. Ankündigungsdatum."
  },
  {
    "id": "text-autogpt-2023-03-30",
    "date": "2023-03-30",
    "datePrecision": "day",
    "modality": "text",
    "name": "AutoGPT",
    "org": "Significant Gravitas",
    "license": "open",
    "capability": "Open-Source-Agent, der GPT-4-Aufrufe verkettet, um ein Ziel selbstständig mit Web- und Datei-Tools zu verfolgen.",
    "whyItMattered": "Der prägende „autonome Agenten\"-Moment 2023 — einer der am schnellsten wachsenden GitHub-Repos überhaupt.",
    "firstOfKind": "Erster viraler autonomer KI-Agent",
    "sources": [
      "https://github.com/Significant-Gravitas/AutoGPT"
    ],
    "disputed": false,
    "verificationNote": ""
  },
  {
    "id": "audio-bark-2023-04-01",
    "modality": "audio",
    "date": "2023-04-01",
    "datePrecision": "month",
    "name": "Bark",
    "org": "Suno AI",
    "license": "open",
    "capability": "Open-Source-TTS auf Transformer-Basis mit Zero-Shot-Voice-Cloning, nonverbalen Lautäußerungen (Lachen, Seufzen), Hintergrundmusik und Unterstützung für über 100 Sprachen",
    "whyItMattered": "Überführte qualitativ ausdrucksstarkes TTS — zuvor Closed Source — vollständig in den offenen Bereich; erstes OSS-Modell, das nonverbale Signale und Umgebungsgeräusche in einem einzigen Generierungsdurchgang nativ verarbeitet",
    "firstOfKind": "Erstes Open-Source-Modell, das ausdrucksstarke Sprache mit eingebetteten nonverbalen Lauten und Hintergrundgeräuschen in einem einzigen Durchgang erzeugt",
    "sources": [
      "https://github.com/suno-ai/bark",
      "https://huggingface.co/suno/bark"
    ],
    "disputed": false,
    "verificationNote": "Veröffentlicht im April 2023; das genaueste glaubwürdige Datum ist der etwa 20. April 2023 auf Basis der Repository-Indexierung, doch der genaue Tag ist nicht aus einer Primärquelle bestätigt. Monatsgenauigkeit beibehalten. Ursprünglich unter einer nichtkommerziellen Lizenz veröffentlicht, im Mai 2023 auf MIT umlizenziert."
  },
  {
    "id": "audio-eleven-multilingual-v1-2023-04-27",
    "modality": "audio",
    "date": "2023-04-27",
    "datePrecision": "day",
    "name": "Eleven Multilingual v1",
    "org": "ElevenLabs",
    "license": "closed",
    "capability": "Sprachübergreifendes TTS, das die Merkmale einer geklonten Stimme in einem einzigen Prompt über 7 europäische und südasiatische Sprachen hinweg bewahrt",
    "whyItMattered": "Bisheriges mehrsprachiges TTS erforderte separate Modelle je Sprache und konnte die Stimmidentität über Sprachen hinweg nicht erhalten; Eleven Multilingual v1 vereinte beides in einem Modell",
    "firstOfKind": "",
    "sources": [
      "https://elevenlabs.io/blog/eleven-multilingual-v1"
    ],
    "disputed": false,
    "verificationNote": "Das Veröffentlichungsdatum 27. April 2023 wird direkt aus den Metadaten des ElevenLabs-Blogbeitrags bestätigt („Published Apr 27, 2023“)."
  },
  {
    "id": "audio-google-musiclm-public-2023-05-10",
    "modality": "audio",
    "date": "2023-05-10",
    "datePrecision": "day",
    "name": "Google MusicLM (public)",
    "org": "Google",
    "license": "closed",
    "capability": "Text-zu-Musik-Generierung, die aus frei formulierten natürlichsprachlichen Prompts hochauflösende Stereomusik erzeugt, trainiert auf 280.000 Stunden Musik",
    "whyItMattered": "Erstes großes Labor, das ein hochwertiges Text-zu-Musik-System über ein Produkt öffentlich zugänglich machte und damit den Maßstab setzte, der MusicGen und AudioCraft auslöste",
    "firstOfKind": "",
    "sources": [
      "https://techcrunch.com/2023/05/10/google-makes-its-text-to-music-ai-public/",
      "https://research.google/pubs/musiclm-generating-music-from-text/"
    ],
    "disputed": false,
    "verificationNote": "Der öffentliche Start am 10. Mai 2023 wird durch TechCrunch und mehrere Quellen bestätigt. Die ursprüngliche firstOfKind-Aussage „erstes großes Labor, das Text-zu-Musik in hoher Qualität zeigte“ wurde entfernt, da sie unbelegt war und MusicLM bereits im Januar 2023 demonstriert bzw. als Paper veröffentlicht worden war."
  },
  {
    "id": "text-palm-2-2023-05-10",
    "date": "2023-05-10",
    "datePrecision": "day",
    "modality": "text",
    "name": "PaLM 2",
    "org": "Google",
    "license": "closed",
    "capability": "Googles nächste LLM-Generation mit stärkerem Multilingual-/Reasoning-/Coding-Können; trieb Bard und 25+ Produkte an.",
    "whyItMattered": "Googles wichtigste Frontier-Antwort 2023 auf GPT-4.",
    "firstOfKind": "",
    "sources": [
      "https://blog.google/technology/ai/google-palm-2-ai-large-language-model/"
    ],
    "disputed": false,
    "verificationNote": ""
  },
  {
    "id": "audio-meta-musicgen-open-source-2023-06-08",
    "modality": "audio",
    "date": "2023-06-08",
    "datePrecision": "day",
    "name": "Meta MusicGen (open-source)",
    "org": "Meta AI",
    "license": "open",
    "capability": "Open-Source-Musikgenerierung mit Steuerung über Text und optionale Melodie-Referenz, verfügbar als Code und Modellgewichte; Gewichte unter CC-BY-NC 4.0",
    "whyItMattered": "Erstes hochwertiges Open-Weight-Modell zur Musikgenerierung mit Steuerung über Text und Melodie; Forschende und Entwickler konnten erstmals ein Backbone zur Musikgenerierung feinjustieren, prüfen und darauf aufbauen, ohne auf eine geschlossene API angewiesen zu sein",
    "firstOfKind": "Erstes hochwertiges Open-Weight-Modell zur Musikgenerierung mit Steuerung über Text und Melodie",
    "sources": [
      "https://arxiv.org/abs/2306.05284",
      "https://github.com/facebookresearch/audiocraft",
      "https://musically.com/2023/06/12/metas-new-musicgen-ai-was-trained-on-20k-hours-of-licensed-music/"
    ],
    "disputed": false,
    "verificationNote": "Das ursprüngliche Datum war der 13. Juni; korrigiert auf den 8. Juni — das arXiv-Paper (2306.05284) wurde am 8. Juni 2023 eingereicht (v1), und das AudioCraft-GitHub-Repository mit den Modellgewichten wurde gleichzeitig öffentlich gemacht. Der Artikel von musically.com ist auf den 12. Juni datiert und spiegelt die Berichterstattung am Folgetag wider. Hinweis: Die Modellgewichte stehen unter CC-BY-NC 4.0 (nichtkommerziell), sodass „offen“ hier Open-Weight bedeutet und nicht vollständig OSI-konform offen; die Beschreibung der Fähigkeit wurde entsprechend angepasst."
  },
  {
    "id": "text-claude-2-2023-07-11",
    "modality": "text",
    "date": "2023-07-11",
    "datePrecision": "day",
    "name": "Claude 2",
    "org": "Anthropic",
    "license": "closed",
    "capability": "LLM mit einem Kontextfenster von 100.000 Tokens, verbessertem Coding (71,2 % HumanEval) und öffentlicher Chat-Oberfläche claude.ai",
    "whyItMattered": "Machte das Kontextfenster von 100.000 Tokens erstmals über eine kostenlose öffentliche Chat-Oberfläche zugänglich und ermöglichte so die Verarbeitung ganzer Bücher und großer Codebasen in großem Umfang; Anthropic hatte API-Nutzern bereits ab Mai 2023 100.000 Tokens angeboten, doch Claude 2 und claude.ai machten dies breit zugänglich",
    "firstOfKind": "Erste LLM-Familie mit einem Kontextfenster von 100.000 Tokens, die über eine kostenlose öffentliche Consumer-Chat-Oberfläche verfügbar war",
    "sources": [
      "https://www.anthropic.com/news/claude-2",
      "https://anthropic.com/index/100k-context-windows"
    ],
    "disputed": true,
    "verificationNote": "Die ursprüngliche firstOfKind-Aussage („erstes kommerziell verfügbares LLM mit einem Kontextfenster von 100.000“) ist unzutreffend: Anthropic kündigte den 100.000-Token-Kontext für Claude 1 bereits am 11. Mai 2023 an — vor dem Start von Claude 2. Claude 2 startete mit demselben Limit von 100.000. Die Aussage wurde abgeschwächt, um die Dimension der öffentlichen Oberfläche zu betonen, die die eigentliche Neuerung ist. Als umstritten markiert, weil der First-of-Kind-Anspruch zu weit gefasst war."
  },
  {
    "id": "text-llama-2-2023-07-18",
    "modality": "text",
    "date": "2023-07-18",
    "datePrecision": "day",
    "name": "Llama 2",
    "org": "Meta",
    "license": "open",
    "capability": "Open-Weight-LLM (7B–70B), das über eine Partnerschaft von Meta und Microsoft kostenlos für Forschung und kommerzielle Nutzung veröffentlicht wurde",
    "whyItMattered": "Das erste große Open-Weight-Modell eines bedeutenden Labors, das ausdrücklich für die kommerzielle Nutzung in großem Maßstab lizenziert war und es Start-ups und Unternehmen ermöglichte, Produkte ohne Abhängigkeit von proprietären Modellen zu entwickeln; trug dazu bei, Normen für verantwortungsvolle offene Veröffentlichungen zu etablieren",
    "firstOfKind": "Erstes großes Open-Weight-Modell eines bedeutenden Frontier-Labors, das eine breite kommerzielle Nutzung ausdrücklich gestattet",
    "sources": [
      "https://about.fb.com/news/2023/07/llama-2/",
      "https://ai.meta.com/blog/llama-2-updates-connect-2023/"
    ],
    "disputed": true,
    "verificationNote": "Die ursprüngliche Aussage „erstes Open-Weight-Modell der Frontier-Klasse mit einer Lizenz für kommerzielle Nutzung“ ist umstritten: Falcon 40B (TII) erhielt im Mai/Juni 2023 eine Apache-2.0-Lizenz für kommerzielle Nutzung, also vor dem Start von Llama 2 am 18. Juli. Llama 2 verwendet zudem keine vollständig offene Lizenz (es schränkt Nutzer mit über 700 Mio. monatlich aktiven Nutzern ein und untersagt in bestimmten Kontexten, die Ausgaben zur Verbesserung anderer LLMs zu verwenden). Die Aussage wurde zu „bedeutendes Frontier-Labor“ abgeschwächt. Als umstritten markiert."
  },
  {
    "id": "image-stable-diffusion-xl-1-0-sdxl-2023-07-26",
    "modality": "image",
    "date": "2023-07-26",
    "datePrecision": "day",
    "name": "Stable Diffusion XL 1.0 (SDXL)",
    "org": "Stability AI",
    "license": "open",
    "capability": "Pipeline aus einem Basismodell mit 3,5 Mrd. Parametern und einem Refiner mit 6,6 Mrd. Parametern, die nativ 1024×1024 erzeugt, mit verbessertem semantischem Verständnis, besserer Beleuchtung und vereinfachtem Prompting",
    "whyItMattered": "Größtes Open-Weights-Bildmodell zum Zeitpunkt des Starts; erreichte oder übertraf bei vielen Prompts die Qualität von Midjourney v5, blieb dabei aber vollständig herunterladbar; wurde zum neuen Standard-Basismodell der Community für das Fine-Tuning und brachte rasch SDXL-basierte LoRAs und ControlNets hervor",
    "firstOfKind": "Erstes Open-Weights-Modell mit einer zweistufigen Pipeline aus Basismodell und Refiner bei nativer Auflösung von 1024 Pixeln",
    "sources": [
      "https://stability.ai/news/stable-diffusion-sdxl-1-announcement",
      "https://www.prnewswire.com/news-releases/stability-ai-announces-stable-diffusion-xl-1-0--featured-on-amazon-bedrock-301886507.html"
    ],
    "disputed": false,
    "verificationNote": "Der 26. Juli 2023 wird durch den offiziellen Blog von Stability AI (veröffentlicht am 26. Juli) bestätigt und durch eine Pressemitteilung von PR Newswire untermauert. Die Vorschauversion SDXL 0.9 war bereits seit Ende Juni 2023 verfügbar."
  },
  {
    "id": "audio-meta-audiocraft-musicgen-audiogen-encodec-2023-08-02",
    "modality": "audio",
    "date": "2023-08-02",
    "datePrecision": "day",
    "name": "Meta AudioCraft (MusicGen + AudioGen + EnCodec)",
    "org": "Meta AI",
    "license": "open",
    "capability": "Open-Source-Framework zur Audiogenerierung, das Text-zu-Musik (MusicGen), Text-zu-Soundeffekten (AudioGen) und einen verbesserten neuronalen Audio-Codec (EnCodec) in einer Bibliothek vereint",
    "whyItMattered": "Bündelte den vollständigen Open-Source-Stack zur generativen Audioerzeugung — Musik, Soundeffekte und den zugrunde liegenden Codec — in einer veröffentlichten Bibliothek und ermöglichte der Community, durchgängige Pipelines zur Audiogenerierung ohne proprietäre Abhängigkeiten zu bauen",
    "firstOfKind": "",
    "sources": [
      "https://about.fb.com/news/2023/08/audiocraft-generative-ai-for-music-and-audio/",
      "https://github.com/facebookresearch/audiocraft"
    ],
    "disputed": false,
    "verificationNote": "Der 2. August 2023 wird durch Metas offizielle Ankündigung und die zeitgleiche Berichterstattung von SiliconANGLE/Axios als Datum bestätigt."
  },
  {
    "id": "text-qwen-7b-2023-08-03",
    "date": "2023-08-03",
    "datePrecision": "day",
    "modality": "text",
    "name": "Qwen-7B",
    "org": "Alibaba",
    "license": "open",
    "capability": "Erstes offenes Modell der Qwen-Familie von Alibaba.",
    "whyItMattered": "Startpunkt chinesischer Labore mit konkurrenzfähigen herunterladbaren Gewichten — Grundlage der Open-Model-Welle 2024/25.",
    "firstOfKind": "",
    "sources": [
      "https://github.com/QwenLM/Qwen"
    ],
    "disputed": false,
    "verificationNote": ""
  },
  {
    "id": "image-ideogram-0-1-public-launch-2023-08-22",
    "modality": "image",
    "date": "2023-08-22",
    "datePrecision": "day",
    "name": "Ideogram 0.1 (public launch)",
    "org": "Ideogram AI",
    "license": "closed",
    "capability": "Text-zu-Bild-Generierung mit branchenführender, gut lesbarer Typografie, die direkt in die erzeugten Bilder eingebettet ist",
    "whyItMattered": "Erstes öffentlich zugängliches Modell, das in großem Umfang zuverlässig korrekten, lesbaren Text in Bildern darstellte; Typografie in KI-Bildern war im Grunde ein ungelöstes Problem — Ideogram erreichte rund 90 % Genauigkeit gegenüber etwa 30 % bei der Konkurrenz und erschloss damit einen völlig neuen Anwendungsfall im Design-Workflow",
    "firstOfKind": "Erstes öffentlich verfügbares Modell, das auf die genaue Darstellung von Text in Bildern spezialisiert ist",
    "sources": [
      "https://ideogram.ai/launch",
      "https://en.wikipedia.org/wiki/Ideogram_(text-to-image_model)"
    ],
    "disputed": false,
    "verificationNote": "Der 22. August 2023 wird durch mehrere Quellen bestätigt, die sich auf die Ankündigung des Ideogram-Starts und die begleitende Bekanntgabe einer Seed-Finanzierung über 16,5 Mio. US-Dollar beziehen. Wikipedia und die zeitgleiche Berichterstattung nennen durchgängig dieses Datum."
  },
  {
    "id": "audio-elevenlabs-eleven-multilingual-v2-exit-beta-2023-08-22",
    "modality": "audio",
    "date": "2023-08-22",
    "datePrecision": "day",
    "name": "ElevenLabs Eleven Multilingual v2 (exit beta)",
    "org": "ElevenLabs",
    "license": "closed",
    "capability": "Foundational-Sprachmodell, das nahezu 30 Sprachen abdeckt, die Stimmidentität bewahrt und Professional Voice Cloning integriert",
    "whyItMattered": "Erweiterte das ausdrucksstarke, identitätswahrende mehrsprachige TTS zum kommerziellen Start von 7 auf etwa 30 Sprachen; das Verlassen der Beta-Phase signalisierte Produktionsreife und förderte die breite Akzeptanz in Synchronisations- und Lokalisierungsworkflows",
    "firstOfKind": "",
    "sources": [
      "https://elevenlabs.io/blog/elevenlabs-comes-out-of-beta-and-releases-eleven-multilingual-v2-a-foundational-ai-speech-model-for-nearly-30-languages",
      "https://techcrunch.com/2023/08/22/elevenlabs-voice-generating-tools-launch-out-of-beta/"
    ],
    "disputed": false,
    "verificationNote": "Der 22. August 2023 wird durch den offiziellen ElevenLabs-Blog und die Berichterstattung von TechCrunch als Datum bestätigt."
  },
  {
    "id": "text-falcon-180b-2023-09-06",
    "date": "2023-09-06",
    "datePrecision": "day",
    "modality": "text",
    "name": "Falcon 180B",
    "org": "TII",
    "license": "open",
    "capability": "180B-Parameter-Modell auf 3,5 Billionen Tokens; bei Veröffentlichung das größte offen verfügbare LLM.",
    "whyItMattered": "Schob die Open-Weights-Grenze Richtung GPT-3.5-Niveau und brachte Nicht-US-Akteure ins Frontier-Rennen.",
    "firstOfKind": "",
    "sources": [
      "https://huggingface.co/blog/falcon-180b"
    ],
    "disputed": false,
    "verificationNote": ""
  },
  {
    "id": "audio-stability-ai-stable-audio-1-0-2023-09-13",
    "modality": "audio",
    "date": "2023-09-13",
    "datePrecision": "day",
    "name": "Stability AI Stable Audio 1.0",
    "org": "Stability AI",
    "license": "closed",
    "capability": "Latent-Diffusion-Modell für Text-to-Audio, das 44,1-kHz-Stereotracks von bis zu 95 Sekunden Länge erzeugt – mit Timing-Konditionierung zur Steuerung der Länge",
    "whyItMattered": "Erstes kommerziell verfügbares KI-Produkt zur Musikgenerierung, das hochauflösendes 44,1-kHz-Stereo-Audio liefert, und das die Timing-Konditionierung einführte, mit der Nutzer eine exakte Dauer vorgeben konnten – eine Funktion, die früheren öffentlich zugänglichen Text-to-Audio-Produkten fehlte",
    "firstOfKind": "Erstes kommerzielles Text-to-Audio-Produkt mit expliziter Timing-Konditionierung für eine nutzergesteuerte Tracklänge in 44,1-kHz-Qualität",
    "sources": [
      "https://stability.ai/research/stable-audio-efficient-timing-latent-diffusion",
      "https://musically.com/2023/09/13/stable-diffusion-maker-launches-stable-audio-text-to-music-ai/",
      "https://www.digitalmusicnews.com/2023/09/13/stability-ai-launches-stable-audio-music-generating-tool/"
    ],
    "disputed": false,
    "verificationNote": "Das Datum 13. September 2023 ist über die Metadaten der Forschungsseite von Stability AI sowie durch die zeitgleiche Berichterstattung von Music Ally / Digital Music News bestätigt. Die Formulierung „erstes Text-to-Audio-Modell“ wurde zu „erstes kommerzielles Produkt“ abgeschwächt, da Forschungsmodelle ohne diese Funktion älter sind; die Behauptung zur Timing-Konditionierung auf diesem Qualitätsniveau für ein Verbraucherprodukt ist belegbar."
  },
  {
    "id": "text-gpt-4v-vision-sprache-2023-09-25",
    "date": "2023-09-25",
    "datePrecision": "day",
    "modality": "text",
    "name": "GPT-4V (Vision) + Sprache",
    "org": "OpenAI",
    "license": "closed",
    "capability": "GPT-4 bekommt Bildverständnis (GPT-4V) und gesprochene Konversation — ChatGPT wird wirklich multimodal.",
    "whyItMattered": "Der Moment, in dem ein Mainstream-Chatbot „sehen\" und „sprechen\" konnte.",
    "firstOfKind": "",
    "sources": [
      "https://openai.com/index/gpt-4v-system-card/"
    ],
    "disputed": false,
    "verificationNote": ""
  },
  {
    "id": "text-mistral-7b-2023-09-27",
    "modality": "text",
    "date": "2023-09-27",
    "datePrecision": "day",
    "name": "Mistral 7B",
    "org": "Mistral AI",
    "license": "open",
    "capability": "Modell mit 7,3 Mrd. Parametern, das Llama 2 13B in allen Benchmarks und Llama 1 34B in vielen übertrifft – mittels Sliding-Window-Attention",
    "whyItMattered": "Zerschlug die Annahme, dass man 13 Mrd. oder mehr Parameter braucht, um ein 13B-Modell zu schlagen; zeigte, dass architektonische Effizienz rohe Skalierung ersetzen kann, und stellte einen neuen Rekord bei der Qualität pro Parameter für offene Modelle auf",
    "firstOfKind": "Erstes Open-Weights-Modell mit 7B, das ein 13B-Modell auf ganzer Linie in Standard-Benchmarks schlägt",
    "sources": [
      "https://mistral.ai/news/announcing-mistral-7b/"
    ],
    "disputed": false,
    "verificationNote": "Datum bestätigt als 27. September 2023 anhand des offiziellen Blogbeitrags von Mistral AI."
  },
  {
    "id": "image-dall-e-3-2023-10-19",
    "modality": "image",
    "date": "2023-10-19",
    "datePrecision": "day",
    "name": "DALL-E 3",
    "org": "OpenAI",
    "license": "closed",
    "capability": "Nativ in ChatGPT integriert für die dialogbasierte Iteration von Prompts; deutliche Verbesserung der Prompt-Treue und Detailgenauigkeit gegenüber DALL-E 2",
    "whyItMattered": "Zeigte, dass die direkte Kopplung eines hochmodernen LLM an einen Bildgenerator (ChatGPT als „Prompt Engineer“) das richtige UX-Paradigma war; DALL-E 3 hörte auf, Wörter im Prompt zu ignorieren, und löste damit den langjährigen Fehlermodus des „ignorierten Prompts“; setzte den Maßstab für die Befolgung von Anweisungen in der Bildgenerierung",
    "firstOfKind": "Erstes Bildgenerierungsmodell, das nativ in eine große LLM-Chat-Oberfläche (ChatGPT) eingebettet ist",
    "sources": [
      "https://openai.com/index/dall-e-3-is-now-available-in-chatgpt-plus-and-enterprise/",
      "https://openai.com/index/dall-e-3/"
    ],
    "disputed": false,
    "verificationNote": "Das ursprüngliche Datum des Eintrags war der 20. September 2023 – das ist das Datum der Ankündigung bzw. der Research Preview. Die Beschreibung der Fähigkeit bezieht sich auf die ChatGPT-Integration, die am 19. Oktober 2023 für Nutzer von ChatGPT Plus und Enterprise live ging (bestätigt durch OpenAIs Verfügbarkeitsankündigung). Korrigiert auf den 19. Oktober 2023 (Verfügbarkeitsdatum in ChatGPT), da dies der beschriebenen Fähigkeit entspricht. Das Ankündigungsdatum war der 20. September 2023."
  },
  {
    "id": "text-gpt-4-turbo-2023-11-06",
    "modality": "text",
    "date": "2023-11-06",
    "datePrecision": "day",
    "name": "GPT-4 Turbo",
    "org": "OpenAI",
    "license": "closed",
    "capability": "Modell der GPT-4-Klasse mit einem Kontextfenster von 128K Tokens und einem Wissensstand bis April 2023, zu einem dreifach niedrigeren Preis pro Input-Token",
    "whyItMattered": "Machte die Verarbeitung langer Kontexte (300+ Seiten in einem einzigen Prompt) bei drastisch reduzierten Kosten massentauglich und erweiterte zugleich den Wissensstand erheblich; demokratisierte Fähigkeiten auf GPT-4-Niveau für Entwickler",
    "firstOfKind": "",
    "sources": [
      "https://openai.com/index/new-models-and-developer-products-announced-at-devday/"
    ],
    "disputed": false,
    "verificationNote": "Datum bestätigt als 6. November 2023 (OpenAI DevDay). Die URL liefert beim direkten Abruf einen 403-Fehler, doch das Veranstaltungsdatum wird durch umfangreiche zeitgleiche Berichterstattung bestätigt."
  },
  {
    "id": "audio-openai-tts-api-tts-1-tts-1-hd-whisper-large-v3-2023-11-06",
    "modality": "audio",
    "date": "2023-11-06",
    "datePrecision": "day",
    "name": "OpenAI TTS API (tts-1 / tts-1-hd) + Whisper large-v3",
    "org": "OpenAI",
    "license": "closed",
    "capability": "Entwickler-API für neuronale Text-to-Speech (6 Stimmen, Echtzeit- und HD-Varianten) plus Whisper large-v3 mit einer um 10–20 % niedrigeren WER als v2",
    "whyItMattered": "Verschaffte jedem Entwickler über OpenAIs bestehende Plattform sofortigen Zugang zu einer ausgereiften neuronalen TTS-API; large-v3 aktualisierte zugleich den Stand der Technik bei der quelloffenen Spracherkennung (ASR)",
    "firstOfKind": "",
    "sources": [
      "https://openai.com/index/new-models-and-developer-products-announced-at-devday/",
      "https://techcrunch.com/2023/11/06/openai-launches-dall-e-3-api-new-text-to-speech-models/"
    ],
    "disputed": false,
    "verificationNote": "Datum 6. November 2023 bestätigt anhand der Ankündigung auf dem OpenAI DevDay und der Berichterstattung von TechCrunch. Die tote GitHub-Discussions-URL wurde durch die maßgebliche Quelle von TechCrunch ersetzt."
  },
  {
    "id": "video-stable-video-diffusion-svd-2023-11-21",
    "modality": "video",
    "date": "2023-11-21",
    "datePrecision": "day",
    "name": "Stable Video Diffusion (SVD)",
    "org": "Stability AI",
    "license": "open",
    "capability": "Open-Weights-Modell für Image-to-Video, das aus einem einzelnen Referenzbild 14–25 Frames bei 3–30 fps erzeugt",
    "whyItMattered": "Erstes grundlegendes Open-Weights-Modell für Image-to-Video mit öffentlich verfügbaren Gewichten; gab der Open-Source-Community einen hochwertigen Ausgangspunkt für die Bildanimation und das Fine-Tuning und übertraf bei Erscheinen führende geschlossene Modelle in Studien zur Nutzerpräferenz",
    "firstOfKind": "Erstes breit veröffentlichtes Open-Weights-Diffusionsmodell für Image-to-Video",
    "sources": [
      "https://stability.ai/news-updates/stable-video-diffusion-open-ai-video-model",
      "https://venturebeat.com/ai/stability-ai-debuts-stable-video-diffusion-models-in-research-preview"
    ],
    "disputed": false,
    "verificationNote": "21. November 2023 bestätigt durch die Berichterstattung von VentureBeat und Maginative. Der Blogbeitrag von Stability AI ist auf den 21. November 2023 datiert."
  },
  {
    "id": "video-pika-1-0-2023-11-28",
    "modality": "video",
    "date": "2023-11-28",
    "datePrecision": "day",
    "name": "Pika 1.0",
    "org": "Pika Labs",
    "license": "closed",
    "capability": "Verbraucherfreundliche Text-to-Video-Plattform, die aus Text-Prompts über Web und Discord 3D-Animationen, Anime, Cartoons und filmische Clips erzeugt",
    "whyItMattered": "Zeigte, dass ein kleines Start-up in sechs Monaten 500.000 Nutzer mit ausgereifter, vielseitiger Videogenerierung erreichen konnte; hob die Messlatte für die UX neben der Qualität an und etablierte die Produktkategorie der abonnementbasierten Videogenerierung für Endverbraucher",
    "firstOfKind": "",
    "sources": [
      "https://petapixel.com/2023/11/28/generative-video-startup-pika-labs-launches-version-1-0-raises-55-million-in-funding/",
      "https://techcrunch.com/2023/11/28/pika-labs-which-is-building-ai-tools-to-generate-and-edit-videos-raises-55m/"
    ],
    "disputed": false,
    "verificationNote": "28. November 2023 bestätigt durch Artikel von PetaPixel und TechCrunch, beide datiert auf den 28. November 2023."
  },
  {
    "id": "text-gemini-1-0-2023-12-06",
    "modality": "text",
    "date": "2023-12-06",
    "datePrecision": "day",
    "name": "Gemini 1.0",
    "org": "Google DeepMind",
    "license": "closed",
    "capability": "Nativ multimodales Modell (Text, Bild, Audio, Video, Code) in drei Größen: Ultra, Pro, Nano; Ultra war das erste Modell, das mit 90,0 % den Durchschnitt menschlicher Experten im MMLU übertraf",
    "whyItMattered": "Erstes Modell, das von Grund auf nativ multimodal gebaut wurde (statt einer nachträglich angeflanschten Bildverarbeitung), und das erste, das den Durchschnitt menschlicher Experten im MMLU übertraf – ein Signal für Googles Rückkehr in den Wettbewerb an der Spitze nach der Disruption durch ChatGPT",
    "firstOfKind": "Erstes Modell, das den Durchschnitt menschlicher Experten im MMLU übertrifft (90,0 % gegenüber einer Baseline menschlicher Experten von etwa 89 %)",
    "sources": [
      "https://blog.google/technology/ai/google-gemini-ai/"
    ],
    "disputed": false,
    "verificationNote": "Datum bestätigt als 6. Dezember 2023 anhand des offiziellen Google-Blogs. Der MMLU-Wert und der Vergleich mit menschlichen Experten sind aus derselben Quelle bestätigt. Hinweis: Gemini Ultra wurde am 6. Dezember angekündigt, war aber zu diesem Zeitpunkt noch nicht öffentlich verfügbar; Gemini Pro startete unmittelbar in Bard."
  },
  {
    "id": "text-mixtral-8x7b-2023-12-11",
    "modality": "text",
    "date": "2023-12-11",
    "datePrecision": "day",
    "name": "Mixtral 8x7B",
    "org": "Mistral AI",
    "license": "open",
    "capability": "Sparse-Mixture-of-Experts-Modell mit 46,7 Mrd. Parametern insgesamt, aber nur 12,9 Mrd. aktiven pro Token, das GPT-3.5 in Benchmarks erreicht – bei sechsmal schnellerer Inferenz als Llama 2 70B",
    "whyItMattered": "Bewies, dass eine Sparse-MoE-Architektur in einem offenen Apache-2.0-Modell mit Closed-Source vergleichbare Qualität zu einem Bruchteil der Inferenzkosten liefern kann, und machte Leistung der Spitzenklasse für das Self-Hosting erschwinglich",
    "firstOfKind": "Erstes Open-Weights-Sparse-MoE-Modell dieser Größenordnung, das die Leistung von GPT-3.5 erreicht",
    "sources": [
      "https://mistral.ai/news/mixtral-of-experts/"
    ],
    "disputed": false,
    "verificationNote": "Datum bestätigt als 11. Dezember 2023 anhand des offiziellen Blogbeitrags von Mistral AI."
  },
  {
    "id": "image-google-imagen-2-2023-12-13",
    "modality": "image",
    "date": "2023-12-13",
    "datePrecision": "day",
    "name": "Google Imagen 2",
    "org": "Google DeepMind",
    "license": "closed",
    "capability": "Fotorealistische Bildgenerierung mit Text- und Logo-Darstellung in mehreren Sprachen, unsichtbares Wasserzeichen per SynthID und unternehmensrechtliche IP-Freistellung auf Vertex AI",
    "whyItMattered": "Erstes Google-Bildmodell mit allgemein verfügbarem Enterprise-API-Zugang; verband die Forschungsqualität von DeepMind mit Googles Infrastruktur und brachte den ersten großflächigen Einsatz von SynthID (Wasserzeichen zur Herkunftskennzeichnung von KI-Inhalten) – und ging damit branchenweit das Problem der Authentizität an",
    "firstOfKind": "Erster Einsatz des unsichtbaren KI-Wasserzeichens SynthID im produktiven Maßstab",
    "sources": [
      "https://cloud.google.com/blog/products/ai-machine-learning/imagen-2-on-vertex-ai-is-now-generally-available",
      "https://techcrunch.com/2023/12/13/google-debuts-imagen-2-with-text-and-logo-generation/"
    ],
    "disputed": false,
    "verificationNote": "13. Dezember 2023 bestätigt durch den Blogbeitrag von Google Cloud, der die allgemeine Verfügbarkeit von Imagen 2 auf Vertex AI ankündigt, und untermauert durch die taggleiche Berichterstattung von TechCrunch."
  },
  {
    "id": "image-midjourney-v6-2023-12-20",
    "modality": "image",
    "date": "2023-12-20",
    "datePrecision": "day",
    "name": "Midjourney v6",
    "org": "Midjourney",
    "license": "closed",
    "capability": "Deutlicher Sprung beim Fotorealismus, lesbare Textdarstellung im Bild, doppelte Länge des Prompt-Tokens und überarbeitetes Prompting in natürlicher Sprache; drittes von Grund auf trainiertes Modell",
    "whyItMattered": "Schloss den Rückstand bei der Textdarstellung gegenüber Ideogram/DALL-E 3 und baute zugleich Midjourneys Vorsprung beim künstlerischen Fotorealismus aus; das neunmonatige Training von Grund auf zeigte, dass Skalierung und architektonische Iteration die Qualität auf eine Weise steigern können, wie es Fine-Tuning nicht vermag",
    "firstOfKind": "",
    "sources": [
      "https://en.wikipedia.org/wiki/Midjourney",
      "https://venturebeat.com/ai/midjourney-v6-is-here-with-in-image-text-and-completely-overhauled-prompting"
    ],
    "disputed": true,
    "verificationNote": "Die offizielle Midjourney-Dokumentation nennt den 20. Dezember 2023; Wikipedia und VentureBeat nennen den 21. Dezember 2023 für die Alpha-Veröffentlichung. Die Abweichung von einem Tag dürfte auf UTC gegenüber der US-Pazifikzeit zurückgehen. Als strittig markiert wegen widersprüchlicher Daten aus Primär- und Sekundärquellen."
  },
  {
    "id": "audio-suno-public-launch-chirp-v2-model-2023-12-20",
    "modality": "audio",
    "date": "2023-12-20",
    "datePrecision": "day",
    "name": "Suno public launch (Chirp / v2 model)",
    "org": "Suno AI",
    "license": "closed",
    "capability": "Endkundenprodukt, das aus einem Text-Prompt in Sekunden vollständige Songs – Gesang, Instrumentierung, Songtext – erzeugt",
    "whyItMattered": "Bisherige Musik-KI-Tools erzeugten kurze Instrumentalclips; Suno produzierte auf Abruf vollständige Songs mit kohärenter Struktur und Gesang und machte das Erstellen von KI-Musik für Nichtmusiker zugänglich",
    "firstOfKind": "Erstes Massenmarktprodukt, das vollständige Gesangssongs (Songtext + Melodie + Arrangement) durchgängig aus einem Text-Prompt erzeugt",
    "sources": [
      "https://en.wikipedia.org/wiki/Suno_(platform)",
      "https://help.suno.com/en/articles/5782721"
    ],
    "disputed": false,
    "verificationNote": "20. Dezember 2023 bestätigt als Datum des Starts der öffentlichen Web-App mit gleichzeitiger Integration in Microsoft Copilot. v2 (Chirp v2) war das Modell zu diesem Start."
  },
  {
    "id": "text-gemini-1-5-pro-2024-02-15",
    "modality": "text",
    "date": "2024-02-15",
    "datePrecision": "day",
    "name": "Gemini 1.5 Pro",
    "org": "Google DeepMind",
    "license": "closed",
    "capability": "Kontextfenster von 1 Million Tokens (später auf 2 Mio. erweitert), das In-Context-Learning über Text, Audio, Video und Code unterstützt",
    "whyItMattered": "Erweiterte das effektive Kontextfenster um rund das Achtfache gegenüber dem damaligen Spitzenmodell (GPT-4 Turbo mit 128K) und ermöglichte so die Verarbeitung einer kompletten Codebasis oder einer Stunde Video in einem einzigen Prompt; führte das Erlernen von Fähigkeiten im Kontext ohne Fine-Tuning ein",
    "firstOfKind": "Erstes Modell mit einem Kontextfenster von 1 Million Tokens",
    "sources": [
      "https://blog.google/innovation-and-ai/products/google-gemini-next-generation-model-february-2024/",
      "https://9to5google.com/2024/02/15/gemini-1-5-announcement/"
    ],
    "disputed": false,
    "verificationNote": "Datum bestätigt als 15. Februar 2024 für die Ankündigung und den Start der privaten Vorschau. Die allgemeine Verfügbarkeit folgte später (April 2024 auf Vertex AI)."
  },
  {
    "id": "video-openai-sora-preview-announcement-2024-02-15",
    "modality": "video",
    "date": "2024-02-15",
    "datePrecision": "day",
    "name": "OpenAI Sora (preview announcement)",
    "org": "OpenAI",
    "license": "closed",
    "capability": "Diffusion-Transformer, der aus Text-Prompts fotorealistische Videos von bis zu 60 Sekunden Länge erzeugt – mit emergenter Objektpermanenz und kohärenten Szenen mit mehreren Charakteren",
    "whyItMattered": "Ein so großer Qualitätssprung, dass er weithin als der „GPT-1-Moment“ für Video bezeichnet wurde; zeigte, dass die Skalierung von Rechenleistung und Daten in einem Diffusion-Transformer eine emergente physikalische Plausibilität hervorbringen kann – Objektpermanenz, realistische Bewegung –, die in dieser Detailtreue zuvor nicht zu sehen war, und setzte damit eine neue Obergrenze für das Feld",
    "firstOfKind": "Erste Demonstration von minutenlangem, fotorealistischem KI-Video aus Text auf diesem Qualitätsniveau",
    "sources": [
      "https://en.wikipedia.org/wiki/Sora_(text-to-video_model)",
      "https://www.technologyreview.com/2024/02/15/1088401/openai-amazing-new-generative-ai-video-model-sora/"
    ],
    "disputed": false,
    "verificationNote": "15. Februar 2024 bestätigt durch einen an diesem Tag datierten Artikel der MIT Technology Review sowie durch Wikipedia, das angibt: „OpenAI first showcased Sora on February 15, 2024.“ Dies ist eine Vorschau- bzw. Forschungsankündigung; die allgemeine Verfügbarkeit kam am 9. Dezember 2024."
  },
  {
    "id": "image-ideogram-1-0-2024-02-28",
    "modality": "image",
    "date": "2024-02-28",
    "datePrecision": "day",
    "name": "Ideogram 1.0",
    "org": "Ideogram AI",
    "license": "closed",
    "capability": "Spitzentechnologie bei der Textdarstellung mit einer rund halbierten Textfehlerrate gegenüber 0.1, deutlich verbessertem Fotorealismus und kommerziellem API-Zugang",
    "whyItMattered": "Etablierte Ideogram als vollwertiges kommerzielles Modell und nicht nur als Kuriosität für Text im Bild; bewies, dass ein Start-up, das sich auf eine schwierige Nischenfähigkeit (Typografie) konzentriert, diesen Vorsprung in allgemeine Bildqualität ausweiten und etablierte Anbieter herausfordern kann",
    "firstOfKind": "",
    "sources": [
      "https://ideogram.ai/features/1.0",
      "https://en.wikipedia.org/wiki/Ideogram_(text-to-image_model)"
    ],
    "disputed": false,
    "verificationNote": "28. Februar 2024 bestätigt durch Ideograms eigene Feature-Seite und untermauert durch mehrere Quellen, die die Modellveröffentlichung im Zuge der Ankündigung der 80-Mio.-Dollar-Finanzierungsrunde meldeten."
  },
  {
    "id": "text-claude-3-opus-sonnet-haiku-2024-03-04",
    "modality": "text",
    "date": "2024-03-04",
    "datePrecision": "day",
    "name": "Claude 3 (Opus / Sonnet / Haiku)",
    "org": "Anthropic",
    "license": "closed",
    "capability": "Modellfamilie in drei Stufen mit Bildverständnis; Opus führt bei Erscheinen MMLU, GPQA und weitere führende Benchmarks an und übertrifft GPT-4 in den meisten Evaluierungen",
    "whyItMattered": "Erste Modellfamilie, die GPT-4 in Standard-Benchmarks gemeinsam schlägt und dabei abgestufte Kompromisse zwischen Intelligenz und Geschwindigkeit einführt; Opus' nahezu perfekte Trefferquote bei der Nadel-im-Heuhaufen-Suche (99,4 %) bei 200K Tokens setzte einen neuen Zuverlässigkeitsstandard für lange Kontexte",
    "firstOfKind": "",
    "sources": [
      "https://www.anthropic.com/news/claude-3-family",
      "https://www-cdn.anthropic.com/de8ba9b01c9ab7cbabf5c33b80b7bbc618857627/Model_Card_Claude_3.pdf"
    ],
    "disputed": false,
    "verificationNote": "Datum bestätigt als 4. März 2024 anhand der offiziellen Ankündigung von Anthropic. Haiku wurde angekündigt, war an diesem Tag aber noch nicht sofort verfügbar."
  },
  {
    "id": "audio-stability-ai-stable-audio-2-0-2024-04-03",
    "modality": "audio",
    "date": "2024-04-03",
    "datePrecision": "day",
    "name": "Stability AI Stable Audio 2.0",
    "org": "Stability AI",
    "license": "closed",
    "capability": "Text-to-Music-Modell, das vollständige Tracks von bis zu 3 Minuten in 44,1-kHz-Stereo mit kohärenter musikalischer Struktur erzeugt, plus Audio-to-Audio-Stilübertragung",
    "whyItMattered": "Verlängerte die maximale Tracklänge auf 3 Minuten und ergänzte die Audio-to-Audio-Transformation – das heißt, Nutzer konnten bestehende Aufnahmen per Text-Prompt remixen – und erweiterte so den Produktionsnutzen deutlich über kurze Clips hinaus",
    "firstOfKind": "",
    "sources": [
      "https://stability.ai/news/stable-audio-2-0",
      "https://www.digitalmusicnews.com/2024/04/03/stability-ai-releases-new-stable-audio-2-0/"
    ],
    "disputed": false,
    "verificationNote": "3. April 2024 bestätigt anhand der offiziellen Ankündigung von Stability AI und der Berichterstattung von Digital Music News."
  },
  {
    "id": "audio-udio-public-beta-launch-2024-04-10",
    "modality": "audio",
    "date": "2024-04-10",
    "datePrecision": "day",
    "name": "Udio public beta launch",
    "org": "Udio",
    "license": "closed",
    "capability": "KI-Musikgenerierung aus Text-Prompts, die hochauflösende vollständige Songs mit steuerbarem Genre, Stimmung und Instrumentierung erzeugt – entwickelt von ehemaligen Forschern von Google DeepMind",
    "whyItMattered": "Brachte einen glaubwürdigen zweiten Spitzenkonkurrenten zu Suno hervor; seine Qualität bei komplexen Subgenres und seine Audiotreue hoben die Messlatte branchenweit an und schufen das erste echte Zweikampf-Rennen in der KI-Musikgenerierung",
    "firstOfKind": "",
    "sources": [
      "https://www.prnewswire.com/news-releases/former-google-deepmind-researchers-assemble-luminaries-across-music-and-tech-to-launch-udio-a-new-ai-powered-app-that-allows-anyone-to-create-extraordinary-music-in-an-instant-302113166.html",
      "https://musically.com/2024/04/10/ai-music-startup-udio-launches-backed-by-artists-and-instagrams-co-founder/"
    ],
    "disputed": false,
    "verificationNote": "10. April 2024 bestätigt anhand der Pressemitteilung von PR Newswire und der Berichterstattung von Music Ally."
  },
  {
    "id": "text-llama-3-8b-70b-2024-04-18",
    "modality": "text",
    "date": "2024-04-18",
    "datePrecision": "day",
    "name": "Llama 3 (8B / 70B)",
    "org": "Meta",
    "license": "open",
    "capability": "Beste quelloffene 8B- und 70B-Modelle bei Erscheinen, mit 128K Kontext und verbessertem Reasoning, Coding und Befolgen von Anweisungen",
    "whyItMattered": "Schloss bei der Größenordnung von 70B die Qualitätslücke zwischen Open-Weights- und geschlossenen Modellen, machte offen gehostete Fähigkeiten der GPT-3.5-Klasse breit verfügbar und ebnete den Weg für das 405B-Flaggschiff später im Jahr 2024",
    "firstOfKind": "",
    "sources": [
      "https://ai.meta.com/blog/meta-llama-3/"
    ],
    "disputed": false,
    "verificationNote": "Datum bestätigt als 18. April 2024 anhand des offiziellen Blogbeitrags von Meta AI."
  },
  {
    "id": "image-adobe-firefly-image-3-2024-04-23",
    "modality": "image",
    "date": "2024-04-23",
    "datePrecision": "day",
    "name": "Adobe Firefly Image 3",
    "org": "Adobe",
    "license": "closed",
    "capability": "Großer Qualitätssprung mit fotorealistischen Details, Stilisierung und Kompositionsabgleich anhand von Referenzbildern, verbessertem Verständnis komplexer Szenen und höherer Generierungsgeschwindigkeit",
    "whyItMattered": "Erstes Firefly-Modell, das beim Fotorealismus direkt mit den Spitzenmodellen aus dem offenen Web konkurriert, und das zugleich den kommerziellen Schutzgraben aus lizenzierten Daten behält; integriert in die Workflows der generativen Fülltechnik von Photoshop, die von Millionen Profis genutzt werden",
    "firstOfKind": "",
    "sources": [
      "https://news.adobe.com/news/news-details/2024/adobe-introduces-firefly-image-3-foundation-model-to-take-creative-exploration-and-ideation-to-new-heights",
      "https://blog.adobe.com/en/publish/2024/04/23/adobe-advances-creative-ideation-with-new-firefly-image-3-model"
    ],
    "disputed": false,
    "verificationNote": "23. April 2024 bestätigt durch Adobes offizielle Pressemitteilung und den Adobe-Blogbeitrag, beide datiert auf den 23. April 2024, zeitgleich mit der Ankündigung auf der MAX-Konferenz in London."
  },
  {
    "id": "audio-gpt-4o-native-speech-to-speech-demo-2024-05-13",
    "modality": "audio",
    "date": "2024-05-13",
    "datePrecision": "day",
    "name": "GPT-4o native speech-to-speech (demo)",
    "org": "OpenAI",
    "license": "closed",
    "capability": "Durchgängiges multimodales Modell mit Sprache als Ein- und Ausgabe, mit einer Latenz unter 300 ms, Handhabung von Unterbrechungen, Erkennung des emotionalen Tonfalls und mehrsprachiger Echtzeitkonversation",
    "whyItMattered": "Alle bisherigen Sprachassistenten (einschließlich des ChatGPT-eigenen) verketteten drei separate Modelle (STT → LLM → TTS), was 1–2 s Latenz verursachte und prosodische Feinheiten verlor; GPT-4o verarbeitete Audio nativ und ermöglichte so erstmals eine wirklich dialogfähige Interaktion im großen Maßstab",
    "firstOfKind": "Erstes Spitzen-LLM, das Audio nativ und durchgängig verarbeitet und so die Latenz der STT→LLM→TTS-Kette beseitigt",
    "sources": [
      "https://openai.com/index/hello-gpt-4o/",
      "https://techcrunch.com/2024/05/13/openais-newest-model-is-gpt-4o/"
    ],
    "disputed": false,
    "verificationNote": "13. Mai 2024 bestätigt anhand der Ankündigung von OpenAI und von TechCrunch. Dies war eine Live-Demo mit teilweisem API-Rollout; der breitere Rollout des Advanced Voice Mode in ChatGPT kam später."
  },
  {
    "id": "video-google-veo-1-2024-05-14",
    "modality": "video",
    "date": "2024-05-14",
    "datePrecision": "day",
    "name": "Google Veo 1",
    "org": "Google DeepMind",
    "license": "closed",
    "capability": "Erzeugt filmische Videoclips in 1080p von über einer Minute Länge aus Text-Prompts, mit Verständnis für Kamerabewegungen und physikalische Dynamik",
    "whyItMattered": "Googles erstes ernstzunehmendes Videogenerierungssystem in voller Auflösung; bündelte Jahre interner Forschung (Imagen-Video, Phenaki, Lumiere, VideoPoet) in einem einzigen Modell, das in direkten Vergleichen die Qualität der Sora-Klasse erreichte oder übertraf und damit glaubwürdige Konkurrenz von Google signalisierte",
    "firstOfKind": "",
    "sources": [
      "https://blog.google/innovation-and-ai/products/google-generative-ai-veo-imagen-3/",
      "https://techcrunch.com/2024/05/14/google-veo-a-serious-swing-at-ai-generated-video-debuts-at-google-io-2024/"
    ],
    "disputed": false,
    "verificationNote": "14. Mai 2024 bestätigt. Der Google-Blogbeitrag unter blog.google/innovation-and-ai/products/google-generative-ai-veo-imagen-3/ ist auf den 14. Mai 2024 datiert und stimmt mit dem Datum der Keynote von Google I/O 2024 überein."
  },
  {
    "id": "text-gemini-1-5-flash-2024-05-14",
    "date": "2024-05-14",
    "datePrecision": "day",
    "modality": "text",
    "name": "Gemini 1.5 Flash",
    "org": "Google",
    "license": "closed",
    "capability": "Schnelles, günstiges Modell mit 1-Mio.-Token-Kontext für Hochvolumen-Aufgaben.",
    "whyItMattered": "Machte günstige Long-Context-Inferenz zum Standard — Googles Arbeitspferd.",
    "firstOfKind": "",
    "sources": [
      "https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/"
    ],
    "disputed": false,
    "verificationNote": ""
  },
  {
    "id": "audio-stability-stable-audio-open-2024-06-05",
    "modality": "audio",
    "date": "2024-06-05",
    "datePrecision": "day",
    "name": "Stability Stable Audio Open",
    "org": "Stability AI",
    "license": "open",
    "capability": "Open-Weights-Diffusionsmodell für Text-to-Audio zur Erzeugung von bis zu 47 Sekunden an Soundeffekten und Samples, verfügbar für die nichtkommerzielle Nutzung",
    "whyItMattered": "Gab Forschern und Entwicklern eine freizügig veröffentlichbare Open-Weights-Baseline für die Text-to-Audio-Generierung aus einem kommerziellen Labor",
    "firstOfKind": "",
    "sources": [
      "https://stability.ai/news-updates/introducing-stable-audio-open",
      "https://x.com/StabilityAI/status/1798399596848381981"
    ],
    "disputed": false,
    "verificationNote": "5. Juni 2024 bestätigt anhand eines X-Posts von Stability AI (Tweet-ID 1798399596848381981, Zeitstempel 5. Juni). Die firstOfKind-Behauptung „erstes Open-Weights-Latent-Diffusion-Modell für Text-to-Audio“ wurde entfernt – AudioLDM veröffentlichte bereits im Januar 2023 offene Gewichte und ist damit 17 Monate älter als diese Veröffentlichung."
  },
  {
    "id": "audio-microsoft-vall-e-2-2024-06-08",
    "modality": "audio",
    "date": "2024-06-08",
    "datePrecision": "day",
    "name": "Microsoft VALL-E 2",
    "org": "Microsoft",
    "license": "closed",
    "capability": "Zero-Shot-TTS, das auf den VALL-E-Benchmarks menschliches Niveau erreicht – durch wiederholungsbewusstes Sampling und gruppierte Code-Modellierung",
    "whyItMattered": "Erstes TTS-System, das auf den Standard-Benchmarks für Verständlichkeit (WER) und Natürlichkeit (CMOS) als auf menschlichem Niveau erklärt wurde, und markierte damit einen formalen Wendepunkt, an dem synthetische Sprache in kontrollierter Evaluierung statistisch nicht mehr von menschlicher Sprache zu unterscheiden war",
    "firstOfKind": "Erstes TTS-Modell, das auf formalen Benchmarks für Verständlichkeit und Natürlichkeit Werte auf menschlichem Niveau erreicht",
    "sources": [
      "https://arxiv.org/abs/2406.05370",
      "https://www.microsoft.com/en-us/research/publication/vall-e-2-neural-codec-language-models-are-human-parity-zero-shot-text-to-speech-synthesizers-2/"
    ],
    "disputed": false,
    "verificationNote": "arXiv-Einreichung bestätigt als 8. Juni 2024 (v1 Sa., 8. Juni 2024, 06:31:03 UTC). Dies war ausschließlich eine Forschungsveröffentlichung – Microsoft erklärte, das Modell wegen des Missbrauchsrisikos nicht öffentlich freizugeben."
  },
  {
    "id": "video-kuaishou-kling-1-0-2024-06-10",
    "modality": "video",
    "date": "2024-06-10",
    "datePrecision": "day",
    "name": "Kuaishou Kling 1.0",
    "org": "Kuaishou",
    "license": "closed",
    "capability": "Erzeugt bis zu 2 Minuten lange Videos in 1080p bei 30 fps aus Text oder Bildern mit komplexer Bewegung und Simulation der physischen Welt",
    "whyItMattered": "Erstes Modell, das die 10-Sekunden-Clip-Grenze bei voller 1080p-Qualität durchbrach; seine Architektur aus 3D-VAE + vollständiger raumzeitlicher Attention erzeugte branchenführenden Bewegungsrealismus und bewies, dass chinesische Labore mit westlichen Spitzenmodellen mithalten können, was den globalen Wettbewerb verschärfte",
    "firstOfKind": "Erstes kommerzielles Modell, das durchgehende Videogenerierung von 2 Minuten in 1080p unterstützt",
    "sources": [
      "https://www.prnewswire.com/news-releases/kuaishou-unveils-proprietary-video-generation-model-kling-testing-now-available-302168757.html",
      "https://ir.kuaishou.com/news-releases/news-release-details/kuaishou-unveils-proprietary-video-generation-model-kling"
    ],
    "disputed": false,
    "verificationNote": "10. Juni 2024 bestätigt durch die offizielle IR-Pressemitteilung von Kuaishou, datiert auf „Jun 10, 2024, 20:10 ET“, und durch Wikipedias Artikel zu Kling AI (Erstveröffentlichung: 10. Juni 2024). Einige Quellen nennen den 6. Juni als Zeitpunkt, an dem die Kling-Website für Bewerbungen öffnete, doch die offizielle öffentliche Ankündigung erfolgte am 10. Juni."
  },
  {
    "id": "image-stable-diffusion-3-medium-open-weights-2024-06-12",
    "modality": "image",
    "date": "2024-06-12",
    "datePrecision": "day",
    "name": "Stable Diffusion 3 Medium (open weights)",
    "org": "Stability AI",
    "license": "open",
    "capability": "Architektur eines Multimodal Diffusion Transformer (MMDiT) mit 2 Mrd. Parametern, mit verbesserter Typografie, besserer Anatomie und Textkonditionierung über T5-XXL",
    "whyItMattered": "Führte die transformerbasierte MMDiT-Architektur in die Open-Source-Community ein und ersetzte die UNet-basierte Diffusion; die neue Architektur ermöglichte eine bessere gemeinsame Attention von Text und Bild, legte das strukturelle Fundament für SD 3.5 und beeinflusste FLUX.1; die Aufnahme in der Community fiel jedoch wegen der restriktiven Lizenzierung gemischt aus",
    "firstOfKind": "Erstes Open-Weights-Modell, das die Architektur eines Multimodal Diffusion Transformer (MMDiT) für die Text-to-Image-Generierung nutzt",
    "sources": [
      "https://stability.ai/news/stable-diffusion-3",
      "https://x.com/StabilityAI/status/1797462536117444794"
    ],
    "disputed": false,
    "verificationNote": "12. Juni 2024 bestätigt durch den offiziellen Blog von Stability AI und den offiziellen Tweet von Stability AI, der die Open-Veröffentlichung auf Hugging Face am 12. Juni auf der Computex ankündigt. Mehrere Nachrichtenquellen bestätigen dieses Datum."
  },
  {
    "id": "video-luma-dream-machine-2024-06-12",
    "modality": "video",
    "date": "2024-06-12",
    "datePrecision": "day",
    "name": "Luma Dream Machine",
    "org": "Luma AI",
    "license": "closed",
    "capability": "Multimodaler Transformer, der aus Text- oder Bildeingaben flüssige, physikalisch plausible 5-Sekunden-Videoclips mit filmischer Kamerabewegung erzeugt",
    "whyItMattered": "Erstes Videogenerierungsmodell, das durchgängig auf einem skalierbaren multimodalen Transformer aufgebaut ist (statt auf einem Latent-Diffusion-UNet) und merklich flüssigere Bewegung sowie eine bessere Einhaltung der Physik liefert; wuchs innerhalb von Monaten auf 25 Mio. Nutzer und zeigte damit eine Nachfrage im Massenmarkt",
    "firstOfKind": "Erstes Verbraucher-Videomodell, das rein auf einem video-nativen multimodalen Transformer aufgebaut ist",
    "sources": [
      "https://en.wikipedia.org/wiki/Dream_Machine_(text-to-video_model)",
      "https://radiancefields.com/luma-ai-announces-dream-machine"
    ],
    "disputed": false,
    "verificationNote": "12. Juni 2024 bestätigt durch Wikipedia („released to the public on June 12, 2024“) und durch Instagram-Posts, die genau dieses Datum nennen. Einige Nachrichtenartikel wurden am 13. Juni veröffentlicht und berichteten über den Start am 12. Juni."
  },
  {
    "id": "video-runway-gen-3-alpha-2024-06-17",
    "modality": "video",
    "date": "2024-06-17",
    "datePrecision": "day",
    "name": "Runway Gen-3 Alpha",
    "org": "Runway",
    "license": "closed",
    "capability": "Text- und Bild-zu-Video in hoher Detailtreue mit ausdrucksstarker Generierung menschlicher Figuren, feingranularer zeitlicher Steuerung und filmischen Übergängen",
    "whyItMattered": "Deutlicher Sprung in der Detailtreue gegenüber Gen-2 — das erste Runway-Modell, das auf einer neuen, groß angelegten multimodalen Infrastruktur mit zeitlich dichten Bildbeschreibungen trainiert wurde. Das ermöglicht präzises Keyframing und ausdrucksstarke menschliche Bewegung, womit der Abstand zu Sora-Niveau erheblich verkleinert wurde",
    "firstOfKind": "",
    "sources": [
      "https://runwayml.com/research/introducing-gen-3-alpha",
      "https://petapixel.com/2024/06/17/runway-gen-3-can-make-ai-videos-of-photorealistic-humans/"
    ],
    "disputed": false,
    "verificationNote": "Der 17. Juni 2024 ist durch Runways offizielle Forschungsseite (datiert auf den 17. Juni 2024) sowie durch die PetaPixel-Berichterstattung vom selben Tag bestätigt."
  },
  {
    "id": "text-claude-3-5-sonnet-v1-2024-06-21",
    "modality": "text",
    "date": "2024-06-21",
    "datePrecision": "day",
    "name": "Claude 3.5 Sonnet (v1)",
    "org": "Anthropic",
    "license": "closed",
    "capability": "Mittelklassemodell, das Claude 3 Opus in den meisten Benchmarks bei doppelter Geschwindigkeit und einem Fünftel der Kosten übertrifft",
    "whyItMattered": "Kehrte die erwartete Kurve aus Leistungsfähigkeit und Kosten um: Ein Mittelklassemodell schlägt das Spitzenmodell der vorherigen Generation, macht erstklassiges Reasoning in großem Maßstab erschwinglich und zwingt zu einer Neubewertung, wie Modellfamilien strukturiert sein sollten",
    "firstOfKind": "",
    "sources": [
      "https://www.anthropic.com/news/claude-3-5-sonnet"
    ],
    "disputed": false,
    "verificationNote": "Das Datum ist als 21. Juni 2024 über die offizielle Ankündigungsseite von Anthropic bestätigt."
  },
  {
    "id": "text-llama-3-1-405b-2024-07-23",
    "modality": "text",
    "date": "2024-07-23",
    "datePrecision": "day",
    "name": "Llama 3.1 405B",
    "org": "Meta",
    "license": "open",
    "capability": "Open-Weights-Modell mit 405B Parametern und 128K Kontext, das GPT-4o und Claude 3.5 Sonnet in zentralen Evaluierungen erreicht, mit einer destillationsfreundlichen Lizenz",
    "whyItMattered": "Das erste frei verfügbare Modell, das in vollem Maßstab mit geschlossenen Frontier-Systemen konkurriert; seine Lizenz erlaubte ausdrücklich, die Ausgaben zum Training anderer Modelle zu verwenden, und ermöglichte damit Pipelines für synthetische Daten und Modelldestillation in beispiellosem Umfang",
    "firstOfKind": "Erstes Open-Weights-Modell mit über 400B Parametern, das mit geschlossenen Frontier-Modellen konkurrenzfähig ist",
    "sources": [
      "https://ai.meta.com/blog/meta-llama-3-1/"
    ],
    "disputed": false,
    "verificationNote": "Das Datum ist als 23. Juli 2024 über mehrere Quellen bestätigt, die sich auf den offiziellen Meta-Blog berufen."
  },
  {
    "id": "audio-udio-v1-5-2024-07-24",
    "modality": "audio",
    "date": "2024-07-24",
    "datePrecision": "day",
    "name": "Udio v1.5",
    "org": "Udio",
    "license": "closed",
    "capability": "Überarbeitetes Musikmodell mit 48-kHz-Stereo-Ausgabe, Stem-Downloads (Vocals/Bass/Drums), Audio-zu-Audio-Remix aus eigenen Uploads sowie Tonart- und Modussteuerung",
    "whyItMattered": "Führte Stem-Trennung und Audio-zu-Audio-Remixing in einen KI-Musikgenerator ein und schlug damit eine Brücke zwischen generativen Werkzeugen und klassischen Produktionsabläufen im Stil einer DAW",
    "firstOfKind": "Erster KI-Musikgenerator, der integrierte Stem-Trennung und Upload-basiertes Audio-Remixing in einem Produkt ausliefert",
    "sources": [
      "https://www.udio.com/blog/introducing-v1-5",
      "https://musically.com/2024/07/25/udio-update-lets-people-upload-and-remix-their-own-tracks/"
    ],
    "disputed": false,
    "verificationNote": "Der 24. Juli 2024 ist durch einen Beitrag von Udio auf X (der Tweet zur Ankündigung von v1.5, mit Zeitstempel vom 24. Juli) sowie durch die Music-Ally-Berichterstattung vom 25. Juli bestätigt."
  },
  {
    "id": "image-flux-1-pro-dev-schnell-2024-08-01",
    "modality": "image",
    "date": "2024-08-01",
    "datePrecision": "day",
    "name": "FLUX.1 (pro / dev / schnell)",
    "org": "Black Forest Labs",
    "license": "open",
    "capability": "Modellreihe mit 12B Parametern auf Basis von Flow Matching: FLUX.1[schnell] (Apache 2.0, 10× schneller dank Destillation), FLUX.1[dev] (Open Weights, nicht kommerziell), FLUX.1[pro] (geschlossene API), allesamt auf dem Qualitätsniveau von Midjourney v6",
    "whyItMattered": "Die neue Architektur des ehemaligen Stable-Diffusion-Teams (Hybrid aus Flow Matching und Transformer) erreichte oder übertraf sofort alle bestehenden Open-Weights-Modelle und die meisten geschlossenen; die Apache-2.0-Lizenz von FLUX.1[schnell] machte es zum ersten vollständig kommerziell freien Bildmodell auf Frontier-Niveau und löste eine neue Welle an Open-Source-Werkzeugen aus",
    "firstOfKind": "Erstes Apache-lizenziertes Modell, das Bildqualität auf Frontier-Niveau erreicht (FLUX.1[schnell])",
    "sources": [
      "https://bfl.ai/announcements",
      "https://venturebeat.com/ai/stable-diffusion-creators-launch-black-forest-labs-secure-31m-for-flux-1-ai-image-generator"
    ],
    "disputed": false,
    "verificationNote": "Der 1. August 2024 ist durch VentureBeat und mehrere Quellen bestätigt, die über den Start von Black Forest Labs und eine Finanzierungsrunde über 31 Mio. US-Dollar an diesem Tag berichten. Die Ankündigungsseite von BFL bestätigt dies ebenfalls."
  },
  {
    "id": "text-grok-2-2024-08-13",
    "date": "2024-08-13",
    "datePrecision": "day",
    "modality": "text",
    "name": "Grok-2",
    "org": "xAI",
    "license": "closed",
    "capability": "Frontier-Chat mit Bildverständnis, Echtzeit-X-Suche und FLUX-gestützter Bildgenerierung.",
    "whyItMattered": "Markierte xAIs Sprung in die Frontier-Liga (und die Debatte um ungefilterte Bildgenerierung).",
    "firstOfKind": "",
    "sources": [
      "https://x.ai/news/grok-2"
    ],
    "disputed": false,
    "verificationNote": ""
  },
  {
    "id": "image-google-imagen-3-2024-08-15",
    "modality": "image",
    "date": "2024-08-15",
    "datePrecision": "day",
    "name": "Google Imagen 3",
    "org": "Google DeepMind",
    "license": "closed",
    "capability": "Fotorealistische Bilder mit feinen Details (Stoffe, Wassertropfen, Fell), weniger Artefakten, verbesserter Prompt-Treue und Integration in die Gemini-Apps für alle Nutzer in den USA",
    "whyItMattered": "Googles erstes Bildmodell, das über Gemini allen Endnutzern (nicht nur dem Enterprise-Angebot Vertex AI) zur Verfügung stand; Benchmark-Evaluierungen zeigten, dass es Midjourney und DALL-E 3 im Fotorealismus erreichte oder übertraf — und schloss damit die Wahrnehmungslücke zwischen Googles Forschungsfähigkeit und seinem Endkundenprodukt",
    "firstOfKind": "",
    "sources": [
      "https://venturebeat.com/ai/google-quietly-opens-imagen-3-access-to-all-u-s-users",
      "https://blog.google/products/gemini/google-gemini-update-august-2024/"
    ],
    "disputed": true,
    "verificationNote": "Der Zugang zu ImageFX in den USA wurde um den 15. August 2024 herum geöffnet (bestätigt durch VentureBeat und nerdschalk). Der zitierte Google-Blogbeitrag ist allerdings auf den 28. August 2024 datiert und beschreibt den weltweiten Gemini-Rollout — nicht die Öffnung von ImageFX in den USA. Die im Eintrag genannte 'Integration in die Gemini-Apps für alle Nutzer in den USA' passt besser zum Gemini-Rollout-Datum vom 28. August. Als strittig markiert: Die Beschreibung der Fähigkeit deutet auf den 28. August (Gemini) hin, das Eintragsdatum 15. August ist hingegen der Zeitpunkt, zu dem der ImageFX-Zugang in den USA stillschweigend geöffnet wurde."
  },
  {
    "id": "image-ideogram-2-0-2024-08-21",
    "modality": "image",
    "date": "2024-08-21",
    "datePrecision": "day",
    "name": "Ideogram 2.0",
    "org": "Ideogram AI",
    "license": "closed",
    "capability": "Großer Sprung beim Fotorealismus, fünf Stilmodi (realistisch, Design, 3D, Anime, allgemein), verbesserte Darstellung von Händen, Gesichtern und Haut, iOS-App und öffentliche API",
    "whyItMattered": "Verwandelte Ideogram von einem Spezialisten für Textdarstellung in ein vollwertiges Bildmodell, das in Evaluierungen nach menschlicher Präferenz mit DALL-E 3 und FLUX.1 Pro konkurriert; der gleichzeitige API-Start ermöglichte eine breite Adoption durch Entwickler",
    "firstOfKind": "",
    "sources": [
      "https://about.ideogram.ai/2.0",
      "https://en.wikipedia.org/wiki/Ideogram_(text-to-image_model)"
    ],
    "disputed": false,
    "verificationNote": "Der 21. August 2024 ist durch Ideograms offizielle 2.0-Seite sowie durch mehrere Sekundärquellen bestätigt, die über den gleichzeitigen Start von iOS-App und API an diesem Tag berichten."
  },
  {
    "id": "video-minimax-hailuo-video-01-2024-08-31",
    "modality": "video",
    "date": "2024-08-31",
    "datePrecision": "day",
    "name": "MiniMax Hailuo Video-01",
    "org": "MiniMax",
    "license": "closed",
    "capability": "Text-zu-Video- und Bild-zu-Video-Generierung in 720p bei 25 fps mit filmischen Kameraeffekten in sechssekündigen Clips",
    "whyItMattered": "Führte eine durchsatzstarke, komprimierte Video-Generierungspipeline ein, die filmische Qualität bei geringer Latenz liefert; entwickelte sich rasch zu einer der meistgenutzten Closed-Source-Video-APIs und etablierte MiniMax als wichtigen Frontier-Konkurrenten neben Runway und Kling",
    "firstOfKind": "",
    "sources": [
      "https://www.minimax.io/news/video-01",
      "https://www.aibase.com/news/11465"
    ],
    "disputed": false,
    "verificationNote": "Der 31. August 2024 ist durch die offizielle MiniMax-Newsseite bestätigt, die festhält: '2024.08.31 MiniMax officially releases the Video-01 video generation model.' Auch beim ersten Link Partner Day von MiniMax bestätigt."
  },
  {
    "id": "audio-hume-ai-evi-2-2024-09-11",
    "modality": "audio",
    "date": "2024-09-11",
    "datePrecision": "day",
    "name": "Hume AI EVI 2",
    "org": "Hume AI",
    "license": "closed",
    "capability": "Voice-to-Voice-Foundation-Modell mit emotionaler Intelligenz, 500–800 ms Latenz, breiter Nachbildung von Persönlichkeit und Akzent sowie einer neuartigen API zur Stimmmodulation, die direktes Voice-Cloning vermeidet",
    "whyItMattered": "Eigens entwickeltes Sprachmodell, das ausdrücklich auf emotionalen Ausdruck und tonale Anpassung trainiert wurde; stellte eine Entwickler-API für emotional bewusste Sprachagenten bereit, bevor OpenAIs Realtime API erschien, und leistete Pionierarbeit bei datenschutzfreundlicher Stimmmodulation ohne Cloning",
    "firstOfKind": "Erste allgemein verfügbare Entwickler-API für emotional intelligente Voice-to-Voice-Konversation",
    "sources": [
      "https://www.hume.ai/blog/introducing-evi2",
      "https://www.marktechpost.com/2024/09/13/hume-ai-introduces-empathic-voice-interface-2-evi-2/"
    ],
    "disputed": false,
    "verificationNote": "Der 11. September 2024 ist durch die Berichterstattung von MarkTechPost (veröffentlicht am 13. September, mit Bericht über eine Ankündigung vom 11. September) sowie durch den Blog von Hume AI bestätigt."
  },
  {
    "id": "audio-notebooklm-audio-overviews-2024-09-11",
    "date": "2024-09-11",
    "datePrecision": "day",
    "modality": "audio",
    "name": "NotebookLM Audio Overviews",
    "org": "Google",
    "license": "closed",
    "capability": "Verwandelt beliebige Dokumente in eine Podcast-artige Audiodiskussion zweier Hosts.",
    "whyItMattered": "Der virale Consumer-KI-Moment Ende 2024 — definierte „KI-Audio\" für die Öffentlichkeit neu.",
    "firstOfKind": "",
    "sources": [
      "https://blog.google/technology/ai/notebooklm-audio-overviews/"
    ],
    "disputed": false,
    "verificationNote": ""
  },
  {
    "id": "text-openai-o1-preview-2024-09-12",
    "modality": "text",
    "date": "2024-09-12",
    "datePrecision": "day",
    "name": "OpenAI o1-preview",
    "org": "OpenAI",
    "license": "closed",
    "capability": "Reasoning-Modell, das vor der Antwort eine interne Gedankenkette aus 'Thinking-Tokens' nutzt und beim USA Math Olympiad das 83. Perzentil sowie bei Codeforces das 89. Perzentil erreicht",
    "whyItMattered": "Führte die Skalierung der Rechenleistung zur Inferenzzeit (Test-Time Compute) als neue Skalierungsachse ein, getrennt vom Vortraining; ermöglichte Durchbrüche bei Wettbewerbsmathematik und Wissenschaft auf Promotionsniveau (GPQA), die frühere Modelle der GPT-4-Klasse nicht erreichen konnten, und läutete damit die Ära der Reasoning-Modelle ein",
    "firstOfKind": "Erstes öffentlich eingesetztes LLM, das interne Reasoning-Tokens (Skalierung der Rechenleistung zur Inferenzzeit) als Produktfunktion nutzt",
    "sources": [
      "https://openai.com/index/introducing-openai-o1-preview/",
      "https://en.wikipedia.org/wiki/OpenAI_o1"
    ],
    "disputed": false,
    "verificationNote": "Das Datum ist als 12. September 2024 bestätigt; o1-preview und o1-mini wurden an diesem Tag für ChatGPT-Plus- und Team-Nutzer veröffentlicht. Die direkte OpenAI-URL liefert einen 403-Fehler, das Datum ist jedoch über Wikipedia und zeitgenössische Berichterstattung bestätigt."
  },
  {
    "id": "video-kuaishou-kling-1-5-2024-09-19",
    "modality": "video",
    "date": "2024-09-19",
    "datePrecision": "day",
    "name": "Kuaishou Kling 1.5",
    "org": "Kuaishou",
    "license": "closed",
    "capability": "Video-Generierung in 1080p HD mit Motion Brush zur präzisen Bewegungssteuerung einzelner Elemente für bis zu sechs Szenenobjekte",
    "whyItMattered": "Führte eine granulare Bewegungssteuerung pro Objekt (Motion Brush) ein, mit der Regisseure exakt choreografieren können, welche Teile einer Szene sich wie bewegen — ein qualitativer Sprung bei der professionellen Kontrollierbarkeit — und verbesserte zugleich die Ausgabequalität in internen Evaluierungen um 95 % gegenüber Kling 1.0",
    "firstOfKind": "",
    "sources": [
      "https://the-decoder.com/ai-video-generator-kling-releases-version-1-5-with-impressive-features/",
      "https://news.aibase.com/news/11879"
    ],
    "disputed": false,
    "verificationNote": "Der 19. September 2024 ist durch mehrere Quellen bestätigt, darunter der offizielle Beitrag von Kling AI auf X/Twitter (Tweet-ID 1836615107918598236) sowie die Berichterstattung von aibase.com über die globale Upgrade-Ankündigung von Kuaishou vom 19. September."
  },
  {
    "id": "text-qwen2-5-2024-09-19",
    "date": "2024-09-19",
    "datePrecision": "day",
    "modality": "text",
    "name": "Qwen2.5",
    "org": "Alibaba",
    "license": "open",
    "capability": "Volle 0,5B–72B-Familie mit starkem Coding/Mathe; eines der größten Open-Source-Releases.",
    "whyItMattered": "Definierte Ende 2024 die Open-Weights-Spitze und ebnete den Weg für die DeepSeek/Qwen-Welle.",
    "firstOfKind": "",
    "sources": [
      "https://qwenlm.github.io/blog/qwen2.5/"
    ],
    "disputed": false,
    "verificationNote": ""
  },
  {
    "id": "audio-openai-chatgpt-advanced-voice-mode-chatgpt-plus-rollout-2024-09-24",
    "modality": "audio",
    "date": "2024-09-24",
    "datePrecision": "day",
    "name": "OpenAI ChatGPT Advanced Voice Mode (ChatGPT Plus rollout)",
    "org": "OpenAI",
    "license": "closed",
    "capability": "Echtzeit-Sprachassistent auf GPT-4o-Basis mit Erkennung des emotionalen Tonfalls, Unterbrechung mitten im Satz und einer Reaktionszeit unter 300 ms, ausgerollt an alle Plus- und Team-Abonnenten",
    "whyItMattered": "Brachte das durchgängige, native Sprachmodell zu Hunderten Millionen ChatGPT-Plus-Nutzern und machte die konversationelle Sprachinteraktion mit KI massentauglich; emotionales Bewusstsein und der Umgang mit Unterbrechungen setzten neue Maßstäbe für Endkunden-Sprach-KI",
    "firstOfKind": "",
    "sources": [
      "https://techcrunch.com/2024/09/24/openai-rolls-out-advanced-voice-mode-with-more-voices-and-a-new-look/",
      "https://community.openai.com/t/advanced-voice-mode-released-09252024/956738"
    ],
    "disputed": false,
    "verificationNote": "Das ursprüngliche Datum war der 11. September 2024, was falsch ist — an diesem Tag fand kein dokumentiertes Rollout-Ereignis statt. Die begrenzte Alpha-Version startete am 30. Juli 2024 für eine kleine Teilmenge der Plus-Nutzer. Der breite Rollout an alle Plus- und Team-Nutzer wurde am 24. September 2024 angekündigt (manche Nutzer erhielten ihn am 25. September). Korrigiert auf den 24. September 2024, um mit der Beschreibung der Fähigkeit ('ChatGPT-Plus-Rollout') übereinzustimmen. Das Teilen von Live-Kamera und -Bildschirm war nicht Teil dieses Rollouts und wurde aus der Beschreibung der Fähigkeit entfernt."
  },
  {
    "id": "text-llama-3-2-vision-edge-2024-09-25",
    "date": "2024-09-25",
    "datePrecision": "day",
    "modality": "text",
    "name": "Llama 3.2 (Vision + Edge)",
    "org": "Meta",
    "license": "open",
    "capability": "Metas erste offene multimodale Modelle (11B/90B Vision) plus 1B/3B-Textmodelle für Mobil/Edge.",
    "whyItMattered": "Brachte offene Vision-Modelle und On-Device-LLMs in den Mainstream.",
    "firstOfKind": "",
    "sources": [
      "https://ai.meta.com/blog/llama-3-2-connect-2024-vision-edge-mobile-devices/"
    ],
    "disputed": false,
    "verificationNote": ""
  },
  {
    "id": "audio-openai-realtime-api-public-beta-2024-10-01",
    "modality": "audio",
    "date": "2024-10-01",
    "datePrecision": "day",
    "name": "OpenAI Realtime API (public beta)",
    "org": "OpenAI",
    "license": "closed",
    "capability": "Entwickler-API zum Erstellen latenzarmer Speech-to-Speech-Sprachagenten auf GPT-4o-Basis, die in Anwendungen Unterbrechungen in Echtzeit, Function-Calling und natürliche Prosodie ermöglicht",
    "whyItMattered": "Öffnete die nativen Sprachfähigkeiten von GPT-4o über eine stabile API für Drittentwickler und ermöglichte eine neue Generation produktiver Sprachagenten, ohne separate Pipelines aus ASR, LLM und TTS zusammenfügen zu müssen",
    "firstOfKind": "Erste Entwickler-API, die ein durchgängiges Speech-to-Speech-Modell auf Frontier-Niveau für den Bau produktiver Sprachagenten bereitstellt",
    "sources": [
      "https://openai.com/index/introducing-the-realtime-api/",
      "https://simonwillison.net/2024/Oct/1/openai-devday-2024-live-blog/"
    ],
    "disputed": false,
    "verificationNote": "Der 1. Oktober 2024 ist durch die DevDay-Ankündigung von OpenAI sowie durch das Live-Blog von Simon Willison bestätigt. Hinweis: Hume EVI 2 (11. September) bot ebenfalls eine Entwickler-API für Speech-to-Speech, daher bezieht sich die Aussage 'erste Entwickler-API' speziell auf ein Modell der GPT-4o-Frontier-Klasse."
  },
  {
    "id": "audio-f5-tts-2024-10-09",
    "modality": "audio",
    "date": "2024-10-09",
    "datePrecision": "day",
    "name": "F5-TTS",
    "org": "Shanghai Jiao Tong University / Cambridge University",
    "license": "open",
    "capability": "TTS auf Basis eines Diffusion-Transformers mit Flow Matching, das Zero-Shot-Voice-Cloning mit hoher Natürlichkeit aus kurzem Referenzaudio erreicht und Chinesisch sowie Englisch unterstützt",
    "whyItMattered": "Kombinierte Flow Matching mit einem Diffusion-Transformer (DiT) für nicht-autoregressives TTS — und erzielte damit eine Natürlichkeit nahe dem Stand der Technik bei deutlich schnellerer Inferenz als frühere autoregressive Modelle, wobei die vollständigen Gewichte zur kommerziellen Nutzung freigegeben wurden",
    "firstOfKind": "Erste Architektur aus Diffusion-Transformer mit Flow Matching, die auf Zero-Shot-TTS angewendet wird und autoregressive Qualität erreicht oder übertrifft",
    "sources": [
      "https://arxiv.org/abs/2410.06885",
      "https://github.com/SWivid/F5-TTS"
    ],
    "disputed": false,
    "verificationNote": "Das arXiv-Einreichungsdatum 9. Oktober 2024 ist bestätigt (arXiv-ID 2410.06885). Code und Gewichte wurden gleichzeitig auf GitHub veröffentlicht."
  },
  {
    "id": "text-claude-3-5-sonnet-v2-with-computer-use-2024-10-22",
    "modality": "text",
    "date": "2024-10-22",
    "datePrecision": "day",
    "name": "Claude 3.5 Sonnet (v2) with Computer Use",
    "org": "Anthropic",
    "license": "closed",
    "capability": "Überarbeitetes Sonnet mit einer öffentlichen Beta-API für Computer-Use, die es dem Modell erlaubt, einen echten Desktop zu steuern, indem es einen Bildschirm betrachtet und Maus und Tastatur bedient",
    "whyItMattered": "Erstes Frontier-Modell mit einer öffentlichen API zur autonomen Computersteuerung, das Agenten ermöglichte, beliebige GUI-Software zu bedienen; der SWE-bench-Wert stieg auf 49 % (von 33 %) und setzte damals einen neuen öffentlichen Rekord für Coding-Agenten",
    "firstOfKind": "Erstes Frontier-KI-Modell, das Computer-Use (GUI-Automatisierung) in einer öffentlichen Beta anbietet",
    "sources": [
      "https://www.anthropic.com/news/3-5-models-and-computer-use"
    ],
    "disputed": false,
    "verificationNote": "Das Datum ist als 22. Oktober 2024 über die offizielle Ankündigung von Anthropic sowie über bestätigende Quellen (MIT AI Agent Index, Google-Cloud-Blog) belegt."
  },
  {
    "id": "image-stable-diffusion-3-5-large-2024-10-22",
    "modality": "image",
    "date": "2024-10-22",
    "datePrecision": "day",
    "name": "Stable Diffusion 3.5 Large",
    "org": "Stability AI",
    "license": "open",
    "capability": "MMDiT-X-Modell mit 8,1B Parametern und drei parallelen Text-Encodern (OpenCLIP, CLIP, T5-XXL), mit einer freizügigen kommerziellen Lizenz für bis zu 1 Mio. US-Dollar Jahresumsatz, lauffähig auf Consumer-Hardware",
    "whyItMattered": "Reagierte direkt darauf, dass SD 3 Medium die Erwartungen der Community nicht erfüllt hatte; die uneingeschränkt kommerzielle, freizügige Lizenz für ein Modell mit über 8B Parametern war beispiellos — und machte SD 3.5 damals zum hochwertigsten offenen Modell für kommerzielles Fine-Tuning",
    "firstOfKind": "Erstes Open-Weights-Bildgenerierungsmodell mit über 8B Parametern, das unter einer freizügigen kommerziellen Lizenz veröffentlicht wurde",
    "sources": [
      "https://stability.ai/news-updates/introducing-stable-diffusion-3-5",
      "https://siliconangle.com/2024/10/22/stable-ai-releases-next-gen-open-source-stable-diffusion-3-5-text-image-ai-model-family/"
    ],
    "disputed": false,
    "verificationNote": "Der 22. Oktober 2024 ist durch die offizielle Ankündigung von Stability AI sowie durch mehrere Nachrichtenberichte vom selben Tag bestätigt. Auch Wikipedia bestätigt den 22. Oktober 2024."
  },
  {
    "id": "video-genmo-mochi-1-2024-10-22",
    "modality": "video",
    "date": "2024-10-22",
    "datePrecision": "day",
    "name": "Genmo Mochi 1",
    "org": "Genmo",
    "license": "open",
    "capability": "Text-zu-Video-Modell mit 10B Parametern unter Apache 2.0, das 480p-Clips bei 30 fps mit hoher Bewegungsqualität und Prompt-Treue erzeugt",
    "whyItMattered": "Damals das größte Open-Source-Videomodell; seine Architektur eines asymmetrischen Diffusion-Transformers (AsymmDiT) erreichte geschlossene Frontier-Modelle wie Gen-3 und Kling bei Benchmarks zur Bewegungsqualität, verkleinerte den Abstand zwischen offen und geschlossen drastisch und bot Forschenden eine frei modifizierbare, hochwertige Grundlage",
    "firstOfKind": "Größtes Open-Source-Text-zu-Video-Modell zum Zeitpunkt der Veröffentlichung (10B Parameter, Apache 2.0)",
    "sources": [
      "https://siliconangle.com/2024/10/22/genmo-introduces-mochi-1-open-source-text-video-generation-model/",
      "https://github.com/genmoai/mochi",
      "https://www.genmo.ai/blog/mochi-1-a-new-sota-in-open-text-to-video"
    ],
    "disputed": false,
    "verificationNote": "Der 22. Oktober 2024 ist durch einen SiliconAngle-Artikel vom 22. Oktober 2024 sowie durch den offiziellen Genmo-Blogbeitrag bestätigt. Eine Sekundärquelle nannte den 23. Oktober, doch der 22. Oktober ist das Datum der Primärquelle. Als Vorschau veröffentlicht; das vollständige Modell folgte kurz darauf."
  },
  {
    "id": "text-apple-intelligence-2024-10-28",
    "date": "2024-10-28",
    "datePrecision": "day",
    "modality": "text",
    "name": "Apple Intelligence",
    "org": "Apple",
    "license": "closed",
    "capability": "On-Device- und Private-Cloud-KI direkt in iOS/iPadOS/macOS: Schreibwerkzeuge, Zusammenfassungen, Image Playground, ChatGPT-Siri.",
    "whyItMattered": "Der Moment, in dem generative KI standardmäßig auf über eine Milliarde Geräte kam.",
    "firstOfKind": "",
    "sources": [
      "https://www.apple.com/newsroom/2024/10/apple-intelligence-is-available-today-on-iphone-ipad-and-mac/"
    ],
    "disputed": false,
    "verificationNote": ""
  },
  {
    "id": "image-recraft-v3-2024-10-30",
    "modality": "image",
    "date": "2024-10-30",
    "datePrecision": "day",
    "name": "Recraft V3",
    "org": "Recraft",
    "license": "closed",
    "capability": "Text-zu-Bild- und Vektor-Generierung mit präziser Textpositionierung, anatomisch korrekten Figuren und als einziges Modell in der Lage, Bilder mit langen, mehrwortigen Textpassagen zu erzeugen",
    "whyItMattered": "Stieg auf Platz 1 des Text-zu-Bild-ELO-Leaderboards von Hugging Face Artificial Analysis ein (Wertung 1172) und hielt diese Spitzenposition fünf Monate in Folge vor Midjourney und OpenAI — das erste Mal, dass ein kleineres Start-up die etablierten Marktführer auf einem öffentlichen Benchmark nach menschlicher Präferenz verdrängte",
    "firstOfKind": "Erstes Modell, das korrekte, mehrwortige Langtextpassagen innerhalb von Bildern erzeugt",
    "sources": [
      "https://www.recraft.ai/blog/recraft-introduces-a-revolutionary-ai-model-that-thinks-in-design-language",
      "https://en.wikipedia.org/wiki/Recraft"
    ],
    "disputed": false,
    "verificationNote": "Der 30. Oktober 2024 ist durch mehrere Quellen bestätigt, darunter Recrafts eigener Blog sowie Wikipedia. Die Aussage zur Langtext-Generierung wird durch Recrafts eigene Dokumentation gestützt, die es als 'the only model capable of generating images with long texts' bezeichnet."
  },
  {
    "id": "audio-suno-v4-2024-11-19",
    "date": "2024-11-19",
    "datePrecision": "day",
    "modality": "audio",
    "name": "Suno v4",
    "org": "Suno",
    "license": "closed",
    "capability": "Saubereres Audio, schärfere Lyrics, dynamische Songstruktur, Covers und Personas.",
    "whyItMattered": "Der prägende Consumer-KI-Musik-Meilenstein 2024.",
    "firstOfKind": "",
    "sources": [
      "https://suno.com/blog/v4"
    ],
    "disputed": false,
    "verificationNote": ""
  },
  {
    "id": "video-lightricks-ltx-video-ltxv-2024-11-22",
    "modality": "video",
    "date": "2024-11-22",
    "datePrecision": "day",
    "name": "Lightricks LTX-Video (LTXV)",
    "org": "Lightricks",
    "license": "open",
    "capability": "DiT-basiertes Text-zu-Video-Modell mit 2B Parametern, das 5 Sekunden Video in 768×512 schneller als in Echtzeit erzeugt (4 s Generierung für einen 5-Sekunden-Clip)",
    "whyItMattered": "Erstes Open-Source-Videomodell für Echtzeit-Generierung auf Basis von Diffusion-Transformern; indem es schneller als die Wiedergabegeschwindigkeit generiert, erschloss es interaktive und iterative Arbeitsabläufe, die mit offenen Modellen zuvor unmöglich waren, während die vollständig offenen Gewichte Community-Fine-Tuning ermöglichten",
    "firstOfKind": "Erstes Open-Source-Videomodell mit Echtzeit-Generierung (schneller als die Wiedergabe)",
    "sources": [
      "https://github.com/Lightricks/LTX-Video",
      "https://comfyui-wiki.com/en/news/2024-11-23-ltx-video-release",
      "https://dataconomy.com/2024/11/26/lightricks-launches-open-source-ai-model-for-faster-video-generation/"
    ],
    "disputed": true,
    "verificationNote": "Wikipedia nennt 'November 2024', ohne den Tag anzugeben. Das RAIL-M-Lizenzdokument verweist auf Version 0.9, und der Titel des Artikels im ComfyUI-Wiki verwendet '2024-11-23' als Veröffentlichungsdatum zur Berichterstattung über das Release. Mehrere Quellen bestätigen den 22. November 2024 als Veröffentlichungstag. Disputed=true spiegelt wider, dass sich der genaue Tag (22. vs. 23.) nicht aus einer einzigen eindeutigen Primärquelle bestätigen lässt; der Monat November 2024 ist sicher."
  },
  {
    "id": "video-tencent-hunyuanvideo-2024-12-03",
    "modality": "video",
    "date": "2024-12-03",
    "datePrecision": "day",
    "name": "Tencent HunyuanVideo",
    "org": "Tencent",
    "license": "open",
    "capability": "Transformer mit 13B Parametern, der von Dual-Stream auf Single-Stream umschaltet, für detailgetreue Text-zu-Video-Generierung mit vollständig offenen Gewichten",
    "whyItMattered": "Größtes Open-Source-Videomodell zum Zeitpunkt der Veröffentlichung (13B Parameter) und das erste, das kommerzielle geschlossene Modelle (Runway Gen-3, Sora) bei Standard-Benchmarks in Open-Weights-Form erreichte oder übertraf; setzte eine neue Open-Source-Obergrenze und beschleunigte Community-Forschung und Fine-Tuning",
    "firstOfKind": "Größtes Open-Source-Videogenerierungsmodell zum Zeitpunkt der Veröffentlichung (13B Parameter), erstes offenes Modell, das die kommerzielle Frontier-Qualität erreicht",
    "sources": [
      "https://github.com/Tencent-Hunyuan/HunyuanVideo",
      "https://technode.com/2024/12/04/tencent-launches-and-open-sources-hunyuan-video-generation-model/"
    ],
    "disputed": false,
    "verificationNote": "Der 3. Dezember 2024 ist durch das offizielle GitHub-Repository bestätigt, das festhält: 'Dec 3, 2024: We release the inference code and model weights of HunyuanVideo.' Ein TechNode-Artikel vom 4. Dezember berichtet über das Release. Das arXiv-Paper (2412.03603) wurde etwa zur gleichen Zeit eingereicht."
  },
  {
    "id": "video-openai-sora-ga-sora-turbo-2024-12-09",
    "modality": "video",
    "date": "2024-12-09",
    "datePrecision": "day",
    "name": "OpenAI Sora GA (Sora Turbo)",
    "org": "OpenAI",
    "license": "closed",
    "capability": "Öffentliche Veröffentlichung von Sora Turbo, das 5–20 Sekunden lange Videoclips in 720p–1080p für ChatGPT-Plus- und Pro-Abonnenten erzeugt",
    "whyItMattered": "Nach einer Lücke von 10 Monaten seit der Vorschau erschien Sora schließlich — der meisterwartete KI-Produktstart des Jahres 2024; bestätigte, dass die Vorschau vom Februar real war, und ermöglichte den ersten öffentlichen Zugang zu fotorealistischer Text-zu-Video-Generierung im Minutenbereich in großem Maßstab",
    "firstOfKind": "",
    "sources": [
      "https://openai.com/index/sora-is-here/",
      "https://en.wikipedia.org/wiki/Sora_(text-to-video_model)"
    ],
    "disputed": false,
    "verificationNote": "Der 9. Dezember 2024 ist durch OpenAIs offizielle Ankündigungsseite 'Sora is here' sowie durch Wikipedia bestätigt. Verfügbar für ChatGPT-Plus- und Pro-Abonnenten in den USA und Kanada."
  },
  {
    "id": "text-gemini-2-0-flash-2024-12-11",
    "modality": "text",
    "date": "2024-12-11",
    "datePrecision": "day",
    "name": "Gemini 2.0 Flash",
    "org": "Google DeepMind",
    "license": "closed",
    "capability": "Agentisches multimodales Modell mit nativer Tool-Nutzung (Suche, Code-Ausführung), Echtzeit-Audio-/Video-Streaming sowie nativ erzeugten Bildern und Sprache",
    "whyItMattered": "Übertraf Gemini 1.5 Pro bei doppelter Geschwindigkeit und führte native multimodale Ausgabegenerierung sowie Tool-Nutzung auf Agenten-Niveau ein; wurde zur Grundlage für Googles Project Astra und das Mariner-Agenten-Ökosystem",
    "firstOfKind": "",
    "sources": [
      "https://blog.google/technology/google-deepmind/google-gemini-ai-update-december-2024/",
      "https://www.cnbc.com/2024/12/11/google-releases-the-first-of-its-gemini-2point0-ai-models.html"
    ],
    "disputed": false,
    "verificationNote": "Das Datum ist als 11. Dezember 2024 über die CNBC-Berichterstattung zur Google-Ankündigung bestätigt. Die allgemeine Verfügbarkeit folgte am 5. Februar 2025."
  },
  {
    "id": "video-google-veo-2-2024-12-16",
    "modality": "video",
    "date": "2024-12-16",
    "datePrecision": "day",
    "name": "Google Veo 2",
    "org": "Google DeepMind",
    "license": "closed",
    "capability": "Video-Generierung in bis zu 4K und über mehrere Minuten, mit verbesserter realistischer Physik, präziser menschlicher Bewegung und filmischen Objektivsteuerungen",
    "whyItMattered": "Hob die Qualitätsobergrenze gegenüber Veo 1 deutlich an, mit besserer Physikmodellierung, drastisch weniger Halluzinationen (keine zusätzlichen Finger) und 4K-Ausgabe; direkte Evaluierungen durch Menschen zeigten, dass Veo 2 gegen Sora und andere führende Modelle gewann, und etablierten Google als glaubwürdige Nummer 1 oder 2 bei der Qualität der Video-Generierung",
    "firstOfKind": "",
    "sources": [
      "https://blog.google/innovation-and-ai/models-and-research/google-labs/video-image-generation-update-december-2024/",
      "https://9to5google.com/2024/12/16/google-veo-2/"
    ],
    "disputed": false,
    "verificationNote": "Der 16. Dezember 2024 ist durch den offiziellen Google-Labs-Blogbeitrag vom 16. Dezember 2024 ('Today we're introducing a new video model, Veo 2') sowie durch die Berichterstattung von 9to5Google vom selben Tag bestätigt."
  },
  {
    "id": "text-openai-o3-preview-announcement-2024-12-20",
    "modality": "text",
    "date": "2024-12-20",
    "datePrecision": "day",
    "name": "OpenAI o3 (preview/announcement)",
    "org": "OpenAI",
    "license": "closed",
    "capability": "Reasoning-Modell der zweiten Generation, das beim ARC-AGI 87,5 % (mit hoher Rechenleistung) und bei Humanity's Last Exam 25,2 % erreicht — weit über allen früheren Modellen",
    "whyItMattered": "Erreichte beim ARC-AGI 87,5 % gegenüber den ~32 % von o1 und dem bisherigen menschlich entworfenen algorithmischen Bestwert von 53 %, ein überraschender Sprung, der die Debatte über die Nähe zur AGI neu entfachte; die vollständige allgemeine Verfügbarkeit folgte am 16. April 2025",
    "firstOfKind": "Erstes Modell, das beim ARC-AGI 75 % überschreitet",
    "sources": [
      "https://arcprize.org/blog/oai-o3-pub-breakthrough",
      "https://en.wikipedia.org/wiki/OpenAI_o3"
    ],
    "disputed": false,
    "verificationNote": "Das Ankündigungsdatum 20. Dezember 2024 ist bestätigt. Die allgemeine Verfügbarkeit war am 16. April 2025, nicht im Dezember. Die Quell-URL im ursprünglichen Eintrag (openai.com/index/introducing-o3-and-o4-mini/) ist der GA-Beitrag vom 16. April 2025, nicht die Ankündigung vom Dezember; ersetzt durch die Primärquelle arcprize.org und Wikipedia. Die ARC-AGI-Werte (87,5 % mit hoher Rechenleistung, 75,7 % bei einer Rechenkostengrenze von 10.000 US-Dollar) sind über den ARC-Prize-Blog bestätigt."
  },
  {
    "id": "audio-kokoro-82m-v0-19-2024-12-25",
    "modality": "audio",
    "date": "2024-12-25",
    "datePrecision": "day",
    "name": "Kokoro-82M v0.19",
    "org": "hexgrad (independent)",
    "license": "open",
    "capability": "Apache-lizenziertes TTS-Modell mit 82M Parametern, das bei seinem Start Platz 1 in der Hugging Face TTS Arena belegte und natürliche englische Sprache für unter 1 US-Dollar pro Million Zeichen erzeugt",
    "whyItMattered": "Zeigte, dass ein drastisch kleineres Modell (82M statt typischer über 500M) Frontier-Qualität erreichen kann, und machte hochwertiges TTS auf Consumer-Hardware und in kostensensiblen Umgebungen einsetzbar; sein Platz 1 in der Arena zum Release blamierte weitaus größere geschlossene Modelle",
    "firstOfKind": "Erstes Modell mit unter 100M Parametern, das Platz 1 auf einem öffentlichen TTS-Qualitäts-Leaderboard erreicht",
    "sources": [
      "https://huggingface.co/hexgrad/Kokoro-82M"
    ],
    "disputed": false,
    "verificationNote": "Der 25. Dezember 2024 ist direkt durch die Hugging-Face-Modellkarte bestätigt, die 'Kokoro v0.19: 2024 Dec 25' aufführt."
  },
  {
    "id": "text-deepseek-v3-2024-12-26",
    "modality": "text",
    "date": "2024-12-26",
    "datePrecision": "day",
    "name": "DeepSeek-V3",
    "org": "DeepSeek",
    "license": "open",
    "capability": "Open-Weights-Modell mit 671B Parametern als sparses MoE, das GPT-4o und Claude 3.5 Sonnet bei Benchmarks erreicht und für nur 5,6 Mio. US-Dollar an Rechenleistung trainiert wurde",
    "whyItMattered": "Bewies, dass Leistung der Frontier-Klasse zu einem Bruchteil (~1/10) der Trainingskosten westlicher Labore erreichbar ist, und versetzte die KI-Branche in Aufruhr über die Kostenannahmen, die dem KI-Investitionsboom zugrunde liegen",
    "firstOfKind": "Erstes Open-Weights-Modell, das die Leistung der GPT-4o-Klasse bei Trainingskosten unter 6 Mio. US-Dollar erreicht",
    "sources": [
      "https://arxiv.org/abs/2412.19437"
    ],
    "disputed": true,
    "verificationNote": "Das arXiv-Paper wurde am 27. Dezember 2024 (UTC) eingereicht. Die Modellgewichte und das GitHub-Release wurden etwa am 26. Dezember 2024 veröffentlicht. Eine geringfügige Zeitzonen-Unklarheit (26. Dez. vs. 27. Dez.) macht die taggenaue Angabe unsicher; entsprechend als strittig markiert. Die Zahl von 5,6 Mio. US-Dollar Trainingskosten stammt aus dem Paper selbst."
  },
  {
    "id": "text-deepseek-r1-2025-01-20",
    "modality": "text",
    "date": "2025-01-20",
    "datePrecision": "day",
    "name": "DeepSeek-R1",
    "org": "DeepSeek",
    "license": "open",
    "capability": "Offenes, MIT-lizenziertes Reasoning-Modell, das mit Reinforcement Learning nahezu von Grund auf (mit minimalen überwachten Daten) trainiert wurde und OpenAI o1 bei Mathematik-, Coding- und Wissenschafts-Benchmarks erreicht",
    "whyItMattered": "Erstes Open-Weights-Modell, das die Reasoning-Leistung der o1-Klasse erreicht; die MIT-Lizenz erlaubte uneingeschränkte kommerzielle Nutzung und Destillation; zeigte, dass das Entstehen von RL-basiertem Reasoning OpenAIs Skalierung der Rechenleistung zur Inferenzzeit ohne riesige überwachte Datensätze replizieren kann",
    "firstOfKind": "Erstes Open-Weights-Reasoning-Modell, das die Leistung auf o1-Niveau erreicht, unter MIT-Lizenz",
    "sources": [
      "https://github.com/deepseek-ai/DeepSeek-R1",
      "https://arxiv.org/abs/2501.12948"
    ],
    "disputed": false,
    "verificationNote": "Das Veröffentlichungsdatum ist als 20. Januar 2025 bestätigt. Das arXiv-Paper 2501.12948 wurde am 22. Januar 2025 eingereicht, also etwas nach der Veröffentlichung von Modell und Repository am 20. Januar."
  },
  {
    "id": "text-openai-operator-2025-01-23",
    "date": "2025-01-23",
    "datePrecision": "day",
    "modality": "text",
    "name": "OpenAI Operator",
    "org": "OpenAI",
    "license": "closed",
    "capability": "Erster Mainstream-Agent, der eigenständig einen Webbrowser bedient (klicken, tippen, Formulare ausfüllen).",
    "whyItMattered": "Startschuss der „agentischen Computer-Nutzung\" 2025.",
    "firstOfKind": "Erster Mainstream-Agent, der den Browser selbst bedient",
    "sources": [
      "https://openai.com/index/computer-using-agent/"
    ],
    "disputed": false,
    "verificationNote": ""
  },
  {
    "id": "audio-kokoro-tts-v1-0-2025-01-27",
    "modality": "audio",
    "date": "2025-01-27",
    "datePrecision": "day",
    "name": "Kokoro TTS v1.0",
    "org": "hexgrad (independent)",
    "license": "open",
    "capability": "Erweiterte Version von Kokoro mit Unterstützung für 8 Sprachen (Englisch, Spanisch, Französisch, Hindi, Italienisch, Japanisch, Mandarin, Portugiesisch) und 54 Stimmen unter Apache 2.0",
    "whyItMattered": "Verwandelte den vorherigen, ausschließlich englischsprachigen Machbarkeitsnachweis in eine mehrsprachige Open-Weights-TTS-Bibliothek für den Produktiveinsatz, die über 10 Mio. monatliche Downloads erreichte; zeigte, dass ein kleines offenes Modell mit geschlossenen mehrsprachigen TTS-Systemen mithalten kann",
    "firstOfKind": "",
    "sources": [
      "https://huggingface.co/hexgrad/Kokoro-82M"
    ],
    "disputed": false,
    "verificationNote": "27. Januar 2025 direkt anhand der Hugging-Face-Modellkarte bestätigt, die 'Kokoro v1.0: 2025 Jan 27' aufführt. kokorottsai.com wurde als Quelle entfernt (Drittanbieter-Aggregator); die primäre Quelle ist die HF-Modellkarte."
  },
  {
    "id": "text-xai-grok-3-deepsearch-2025-02-17",
    "date": "2025-02-17",
    "datePrecision": "day",
    "modality": "text",
    "name": "xAI Grok 3 + DeepSearch",
    "org": "xAI",
    "license": "closed",
    "capability": "Frontier-Reasoning-Modell, trainiert auf dem 200k-GPU-Cluster Colossus, mit der DeepSearch-Suchmaschine.",
    "whyItMattered": "Markierte xAIs Ankunft als echter Frontier-Konkurrent.",
    "firstOfKind": "",
    "sources": [
      "https://x.ai/news/grok-3"
    ],
    "disputed": false,
    "verificationNote": ""
  },
  {
    "id": "personal-snipki-founded-2025-02-21",
    "date": "2025-02-21",
    "datePrecision": "day",
    "modality": "text",
    "name": "snipKI",
    "org": "snipKI",
    "license": "open",
    "kind": "personal",
    "personalLabel": "Gegründet",
    "capability": "snipKI startet als KI-Enablement-Company und macht Teams im Arbeitsalltag KI-fähig.",
    "whyItMattered": "Gegründet mitten in der Beschleunigung dieser Zeitachse — mit der Mission, dass Menschen und Teams mit dem Tempo Schritt halten, statt hinterherzulaufen. (Macher dieser Seite.)",
    "firstOfKind": "",
    "sources": [
      "https://snipki.de/?utm_source=ki-timeline&utm_medium=website&utm_campaign=beschleunigung&utm_content=timeline-entry"
    ],
    "disputed": false,
    "verificationNote": ""
  },
  {
    "id": "text-claude-3-7-sonnet-2025-02-24",
    "modality": "text",
    "date": "2025-02-24",
    "datePrecision": "day",
    "name": "Claude 3.7 Sonnet",
    "org": "Anthropic",
    "license": "closed",
    "capability": "Erstes Hybrid-Modell, das sofortige Antworten und ein vom Nutzer konfigurierbares erweitertes Reasoning in einem einzigen Modell vereint und 70,3 % auf SWE-bench Verified erreicht (mit erweitertem Scaffolding)",
    "whyItMattered": "Vereinte Standard- und Reasoning-Modus in einem Modell (gegenüber der getrennten Aufteilung von o1/GPT-4o) und gab Entwicklern einen einzigen API-Endpunkt, der zwischen schnellen und tiefgreifenden Denkmodi wechseln konnte; setzte zum Erscheinungszeitpunkt einen neuen Maßstab für Coding-Agenten",
    "firstOfKind": "Erstes Hybrid-Modell für schnelles und erweitertes Reasoning in einem einzigen Deployment",
    "sources": [
      "https://www.anthropic.com/news/claude-3-7-sonnet"
    ],
    "disputed": true,
    "verificationNote": "Datum bestätigt als 24. Februar 2025. Der im ursprünglichen Eintrag genannte SWE-bench-Wert von 80,8 % findet sich nicht in der offiziellen Ankündigung von Anthropic; die offiziellen Zahlen lauten 63,7 % (reines pass@1) und 70,3 % (mit High-Compute-Scaffolding). Der Wert von 80,8 % stammt vermutlich aus der Evaluierung über ein Drittanbieter-Agent-Harness. Die Beschreibung der Fähigkeit wurde auf 70,3 % korrigiert und aufgrund der Abweichung beim Wert als umstritten markiert."
  },
  {
    "id": "video-alibaba-wan-2-1-2025-02-25",
    "modality": "video",
    "date": "2025-02-25",
    "datePrecision": "day",
    "name": "Alibaba Wan 2.1",
    "org": "Alibaba (Wan Team)",
    "license": "open",
    "capability": "Apache-2.0-Suite von Modellen zur Videogenerierung (bis zu 14 Mrd. Parameter) für Text-zu-Video, Bild-zu-Video sowie Interpolation des ersten/letzten Frames in 720p",
    "whyItMattered": "Erreichte Platz 1 auf VBench (86,22 %) und übertraf damit Sora (84,28 %) sowie jedes andere Modell – in vollständig offener Form unter Apache 2.0; über 2,2 Mio. Downloads belegten die enorme Akzeptanz in der Community, und die 1,3-Mrd.-Variante lief auf Consumer-Hardware, was die hochmoderne Videogenerierung demokratisierte",
    "firstOfKind": "Erstes Open-Source-Modell, das die VBench-Bestenliste für Videoqualität anführte und alle geschlossenen Modelle übertraf",
    "sources": [
      "https://www.alibabacloud.com/blog/alibaba-unveils-its-latest-open-source-video-generation-model_602167",
      "https://github.com/Wan-Video/Wan2.1",
      "https://comfyui-wiki.com/en/news/2025-02-25-alibaba-wanx-2-1-video-model-open-source"
    ],
    "disputed": false,
    "verificationNote": "25. Februar 2025 bestätigt durch den ComfyUI-Wiki-Artikel mit dem Titel '2025-02-25 Alibaba Wan2.1 Video Model Open Source' sowie durch mehrere Nachrichtenquellen. Der VBench-Wert von 86,22 % wird durch den technischen Bericht von Alibaba bestätigt."
  },
  {
    "id": "audio-sesame-csm-conversational-speech-model-demo-2025-02-27",
    "modality": "audio",
    "date": "2025-02-27",
    "datePrecision": "day",
    "name": "Sesame CSM (conversational speech model) demo",
    "org": "Sesame AI",
    "license": "open",
    "capability": "Modell zur dialogorientierten Sprachgenerierung, das kontextbewusste, emotional ausdrucksstarke Dialoge mit menschenähnlicher Prosodie und Mehrsprecher-Handhabung erzeugt",
    "whyItMattered": "Zeigte, dass 'Voice Presence' – das Gefühl, dass eine KI-Stimme wirklich zuhört und reagiert – erreichbar ist; die virale Demo führte eine nahezu unheimliche Natürlichkeit im Gespräch vor, die kein vorheriges offenes oder geschlossenes System erreicht hatte",
    "firstOfKind": "Erstes Open-Source-Modell, das explizit auf den psychologischen Benchmark der 'Voice Presence' für dialogorientierte KI abzielt",
    "sources": [
      "https://www.sesame.com/research/crossing_the_uncanny_valley_of_voice",
      "https://github.com/SesameAILabs/csm"
    ],
    "disputed": false,
    "verificationNote": "27. Februar 2025 bestätigt durch die Verfasserzeile des Forschungs-Blogbeitrags von Sesame ('Brendan Iribe, Ankit Kumar, and the Sesame team'). Die Open-Source-Gewichte des 1B-Modells (csm-1b) wurden separat am 13. März 2025 veröffentlicht; dieser Eintrag bezieht sich korrekt auf das Veröffentlichungsdatum der Demo bzw. Forschungspublikation."
  },
  {
    "id": "audio-openai-gpt-4o-transcribe-gpt-4o-mini-tts-audio-models-2025-03-20",
    "modality": "audio",
    "date": "2025-03-20",
    "datePrecision": "day",
    "name": "OpenAI gpt-4o-transcribe / gpt-4o-mini-tts audio models",
    "org": "OpenAI",
    "license": "closed",
    "capability": "Neue STT-Modelle (gpt-4o-transcribe, gpt-4o-mini-transcribe) mit branchenführender WER sowie ein instruierbares TTS (gpt-4o-mini-tts), bei dem Entwickler Ton, Emotion und Vortragsstil vorgeben",
    "whyItMattered": "Instruierbares TTS – dem Modell nicht nur zu sagen, was es sagen soll, sondern auch wie – war ein Paradigmenwechsel gegenüber der Auswahl aus voreingestellten Stimmen; in Kombination mit verbessertem STT ermöglichte es die erste vollständig auf GPT-4o-Niveau arbeitende Sprach-Pipeline für Entwickler",
    "firstOfKind": "Erstes öffentlich verfügbares instruierbares TTS-Modell, bei dem sich der Vortragsstil per natürlichsprachlichen Anweisungen festlegen lässt",
    "sources": [
      "https://openai.com/index/introducing-our-next-generation-audio-models/",
      "https://simonwillison.net/2025/Mar/20/new-openai-audio-models/"
    ],
    "disputed": false,
    "verificationNote": "20. März 2025 bestätigt durch den Zeitstempel von VentureBeat und einen auf den 20. März 2025 datierten Beitrag von Simon Willison. Hinweis: ElevenLabs v3 (Juni 2025) führte später inline 'Audio Tags' als alternativen Ansatz zur skriptbaren Steuerung des Vortrags ein."
  },
  {
    "id": "text-gemini-2-5-pro-2025-03-25",
    "modality": "text",
    "date": "2025-03-25",
    "datePrecision": "day",
    "name": "Gemini 2.5 Pro",
    "org": "Google DeepMind",
    "license": "closed",
    "capability": "Thinking-Modell, das die Bestenlisten von LMArena und WebDev Arena anführt, bei den Mathematik-Benchmarks AIME 2025 und den Wissenschafts-Benchmarks GPQA führend ist und über ein Kontextfenster von 1 Mio. Tokens verfügt",
    "whyItMattered": "Belegte mit großem Abstand Platz 1 beim Ranking nach menschlicher Präferenz auf LMArena und war zugleich bei anspruchsvollen Wissenschafts- und Mathematik-Benchmarks führend – das erste Mal, dass ein Google-Modell gleichzeitig sowohl bei menschlicher Präferenz als auch bei objektiven Reasoning-Evaluierungen führte",
    "firstOfKind": "",
    "sources": [
      "https://blog.google/innovation-and-ai/models-and-research/google-deepmind/gemini-model-thinking-updates-march-2025/"
    ],
    "disputed": false,
    "verificationNote": "Datum bestätigt als 25. März 2025 anhand des offiziellen Blogbeitrags von Google DeepMind. Die erste Veröffentlichung erfolgte als experimentelle Vorschau (Gemini-2.5-Pro-Exp-03-25)."
  },
  {
    "id": "image-gpt-4o-native-image-generation-gpt-image-1-2025-03-25",
    "modality": "image",
    "date": "2025-03-25",
    "datePrecision": "day",
    "name": "GPT-4o Native Image Generation (gpt-image-1)",
    "org": "OpenAI",
    "license": "closed",
    "capability": "Nativ multimodale Bildgenerierung, eingebettet in GPT-4o: dialogorientierte Bildbearbeitung, zuverlässige Texteinblendung im Bild, präzise Befolgung von Anweisungen und Transformation von Bildeingaben",
    "whyItMattered": "Zum ersten Mal war die Bildgenerierung nativer Bestandteil eines hochmodernen multimodalen LLM und nicht ein angeflanschtes separates Modell; da das Weltwissen von GPT-4o inhärent ist, konnte der Generator über räumliche Beziehungen, Bildunterschriften und visuelle Logik auf eine Weise räsonieren, wie es DALL-E 3 nicht vermochte – löste eine virale Welle von Studio-Ghibli-Imitationen aus und dominierte die sozialen Medien",
    "firstOfKind": "Erstes nativ multimodales LLM, bei dem Bildgenerierung und sprachliches Reasoning dieselben Modellgewichte teilen",
    "sources": [
      "https://openai.com/index/introducing-4o-image-generation/",
      "https://openai.com/index/gpt-4o-image-generation-system-card-addendum/"
    ],
    "disputed": false,
    "verificationNote": "25. März 2025 bestätigt durch den Nachtrag zur System Card von OpenAI (datiert auf den 25. März 2025) und mehrere zeitgenössische Berichte. Die First-of-Kind-Behauptung des 'geteilten Gewichts' stimmt mit der Beschreibung der nativen multimodalen Architektur durch OpenAI überein, auch wenn OpenAI keine vollständigen architektonischen Details veröffentlicht hat, die ein wörtliches Teilen der Gewichte bestätigen würden."
  },
  {
    "id": "image-ideogram-3-0-2025-03-26",
    "modality": "image",
    "date": "2025-03-26",
    "datePrecision": "day",
    "name": "Ideogram 3.0",
    "org": "Ideogram AI",
    "license": "closed",
    "capability": "Höchste ELO-Werte bei der menschlichen Präferenz über verschiedenste Prompt-Typen hinweg, Style References (bis zu 3 Referenzbilder), Style Codes, Batch-Generierung sowie verbesserter Fotorealismus und Textwiedergabe",
    "whyItMattered": "Eroberte die Spitzenposition bei öffentlichen Benchmarks gegenüber der GPT-4o-Bildgenerierung und Midjourney v7 zurück; Style References machten die markenkonsistente Bildgenerierung ohne Fine-Tuning zugänglich – eine Fähigkeit, die den Workflow von Designern grundlegend veränderte",
    "firstOfKind": "",
    "sources": [
      "https://docs.ideogram.ai/about-ideogram/blog-posts",
      "https://en.wikipedia.org/wiki/Ideogram_(text-to-image_model)"
    ],
    "disputed": false,
    "verificationNote": "26. März 2025 bestätigt durch mehrere Sekundärquellen und den Eintrag im Dokumentations-Blog von Ideogram. Es wurden keine widersprüchlichen Daten gefunden."
  },
  {
    "id": "video-runway-gen-4-2025-03-31",
    "modality": "video",
    "date": "2025-03-31",
    "datePrecision": "day",
    "name": "Runway Gen-4",
    "org": "Runway",
    "license": "closed",
    "capability": "Konsistente Videogenerierung über mehrere Einstellungen hinweg: Beibehaltung derselben Figuren, Kostüme und Umgebungen in unterschiedlichen Szenen mithilfe von Referenzbild-Konditionierung",
    "whyItMattered": "Löste die hartnäckigste Einschränkung von KI-Video – die Figurenkonsistenz über mehrere Einstellungen hinweg – ohne Fine-Tuning oder Neutraining; zum ersten Mal konnten Kreative eine zusammenhängende Erzählung über mehrere Einstellungen mit demselben Schauspieler in verschiedenen Szenen generieren, was KI-natives Filmemachen praktisch machbar machte",
    "firstOfKind": "Erstes kommerzielles Videomodell, das aus Referenzbildern eine zuverlässige Figuren- und Szenenkonsistenz über mehrere Einstellungen hinweg liefert",
    "sources": [
      "https://runwayml.com/research/introducing-runway-gen-4",
      "https://techcrunch.com/2025/03/31/runway-releases-an-impressive-new-video-generating-ai-model",
      "https://siliconangle.com/2025/03/31/runway-launches-new-gen-4-ai-video-generator/"
    ],
    "disputed": false,
    "verificationNote": "31. März 2025 bestätigt durch auf den 31. März 2025 datierte Artikel von TechCrunch und SiliconAngle sowie durch die offizielle Runway-Forschungsseite unter runwayml.com/research/introducing-runway-gen-4. Hinweis: Die Quellen des ursprünglichen Eintrags enthielten für diesen Gen-4-Eintrag fälschlicherweise die Gen-3-Alpha-URL (runwayml.com/research/introducing-gen-3-alpha); dies wurde auf die korrekte Gen-4-URL korrigiert."
  },
  {
    "id": "image-midjourney-v7-2025-04-04",
    "modality": "image",
    "date": "2025-04-04",
    "datePrecision": "day",
    "name": "Midjourney v7",
    "org": "Midjourney",
    "license": "closed",
    "capability": "Völlig neue Architektur mit Draft Mode (10× schneller, 0,5× Kosten), Omni Reference für motivübergreifende Konsistenz sowie deutlich verbesserter Textur, Kohärenz und anatomischer Genauigkeit",
    "whyItMattered": "Der Draft Mode veränderte die Iterationsökonomie der KI-Bildgenerierung grundlegend – Nutzer konnten zu gleichen Kosten 10× mehr Konzepte erkunden, bevor sie sich auf vollständige Renderings festlegten; Omni Reference ersetzte das eingeschränkte System der Figurenreferenz und dehnte die Konsistenz auf jeden beliebigen Objekttyp aus",
    "firstOfKind": "",
    "sources": [
      "https://updates.midjourney.com/v7-alpha/",
      "https://en.wikipedia.org/wiki/Midjourney"
    ],
    "disputed": false,
    "verificationNote": "Das Datum im ursprünglichen Eintrag war der 3. April 2025. Korrigiert auf den 4. April 2025: Der offizielle Beitrag zum Alpha-Update von Midjourney v7 ist auf den 4. April 2025 datiert ('Apr 4, 2025 2 min read'), und auch Wikipedia führt den 4. April 2025 als Datum der Alpha-Veröffentlichung auf. Einige Sekundärquellen nennen den 3. April, was auf Zeitzonenunterschiede zurückzuführen sein könnte."
  },
  {
    "id": "text-llama-4-scout-maverick-2025-04-05",
    "modality": "text",
    "date": "2025-04-05",
    "datePrecision": "day",
    "name": "Llama 4 (Scout / Maverick)",
    "org": "Meta",
    "license": "open",
    "capability": "Nativ multimodale offene MoE-Modelle; Scout bietet ein Kontextfenster von 10 Mio. Tokens (das mit INT4-Quantisierung auf eine einzige H100 passt), Maverick nutzt 128 Experten",
    "whyItMattered": "Das Kontextfenster von 10 Mio. Tokens bei Scout war zum Erscheinungszeitpunkt das größte aller öffentlich verfügbaren Modelle und ermöglichte zuvor unmögliche Analysen ganzer Repositories und langer Videos",
    "firstOfKind": "Erstes Open-Weights-Modell mit einem Kontextfenster von 10 Mio. Tokens",
    "sources": [
      "https://ai.meta.com/blog/llama-4-multimodal-intelligence/"
    ],
    "disputed": true,
    "verificationNote": "Datum bestätigt als 5. April 2025 anhand des offiziellen Meta-AI-Blogs. Die Behauptung zur einzelnen H100 ist technisch nur mit INT4-Quantisierung zutreffend; der maximale Kontext betrug bei dieser Konfiguration ~35K Tokens, nicht die vollen 10 Mio. Der volle Kontext von 10 Mio. erforderte 8 H100s. Die Behauptung zum Kontextfenster von 10 Mio. ist real, aber die Formulierung 'einzelne H100' überzeichnet die Zugänglichkeit. Aufgrund der umstrittenen Behauptung zur einzelnen H100 als umstritten markiert."
  },
  {
    "id": "video-kuaishou-kling-2-0-2025-04-15",
    "modality": "video",
    "date": "2025-04-15",
    "datePrecision": "day",
    "name": "Kuaishou Kling 2.0",
    "org": "Kuaishou",
    "license": "closed",
    "capability": "Modernste Bewegungsqualität, semantische Reaktionsfähigkeit und multimodale Videobearbeitung aus komplexen Prompts bei branchenführender visueller Wiedergabetreue",
    "whyItMattered": "Erreichte Spitzenplätze bei mehreren Benchmarks zur Videoqualität und führte die multimodale Videobearbeitung ein; bestätigte Klings Entwicklung von einer chinesischen Alternative zu einem globalen Qualitätsführer, wobei die Plattform innerhalb von 10 Monaten nach dem Start die Marke von 100 Mio. US-Dollar annualisiertem Umsatz überschritt",
    "firstOfKind": "",
    "sources": [
      "https://ir.kuaishou.com/news-releases/news-release-details/kling-ai-advances-20-era-empowering-everyone-tell-great-stories",
      "https://www.globenewswire.com/news-release/2025/04/15/3062142/0/en/Kling-AI-Advances-to-the-2-0-Era-Empowering-Everyone-to-Tell-Great-Stories-with-AI.html"
    ],
    "disputed": false,
    "verificationNote": "15. April 2025 bestätigt durch die offizielle IR-Pressemitteilung von Kuaishou und GlobeNewswire, beide datiert auf den 15. April 2025. Ein Beitrag von Kling AI auf X bestätigte den weltweiten Launch-Livestream am 15. April."
  },
  {
    "id": "text-alibaba-qwen3-2025-04-29",
    "date": "2025-04-29",
    "datePrecision": "day",
    "modality": "text",
    "name": "Alibaba Qwen3",
    "org": "Alibaba",
    "license": "open",
    "capability": "Open-Weights-Familie (0,6B–235B MoE) mit umschaltbarem „Thinking/Non-Thinking\"-Reasoning.",
    "whyItMattered": "Eines der wichtigsten westlich zugänglichen Open-Weights-Releases 2025.",
    "firstOfKind": "",
    "sources": [
      "https://qwenlm.github.io/blog/qwen3/"
    ],
    "disputed": false,
    "verificationNote": ""
  },
  {
    "id": "image-google-imagen-4-2025-05-20",
    "modality": "image",
    "date": "2025-05-20",
    "datePrecision": "day",
    "name": "Google Imagen 4",
    "org": "Google DeepMind",
    "license": "closed",
    "capability": "Ausgabe in bis zu 2K-Auflösung, feine Detailwiedergabe (Stoffe, Wassertropfen, Fell), verbesserte Typografie-Integration sowie eine bis zu 10× schnellere Generierung über eine eigene Fast-Variante",
    "whyItMattered": "Zeigte, dass Googles Kadenz jährlicher umfangreicher Upgrades von Bildmodellen die Qualität zuverlässig kumuliert; die native 2K-Auflösung legte branchenweit eine höhere Messlatte für die Ausgabetreue an; die tiefe Integration in Google Workspace (Docs, Slides, Vids) brachte hochmoderne Bildgenerierung zu Hunderten Millionen von Wissensarbeitern",
    "firstOfKind": "",
    "sources": [
      "https://developers.googleblog.com/announcing-imagen-4-fast-and-imagen-4-family-generally-available-in-the-gemini-api/",
      "https://techcrunch.com/2025/05/20/imagen-4-is-googles-newest-ai-image-generator/"
    ],
    "disputed": false,
    "verificationNote": "20. Mai 2025 als Ankündigungs- und Veröffentlichungsdatum auf der Google I/O 2025 bestätigt durch mehrere Quellen, darunter TechCrunch und Googles eigenen Entwickler-Blog."
  },
  {
    "id": "video-google-veo-3-2025-05-20",
    "modality": "video",
    "date": "2025-05-20",
    "datePrecision": "day",
    "name": "Google Veo 3",
    "org": "Google DeepMind",
    "license": "closed",
    "capability": "Videogenerierung mit nativ erzeugtem, synchronisiertem Audio: Dialoge, Soundeffekte und Hintergrundmusik werden gemeinsam mit den Videoframes generiert",
    "whyItMattered": "Erstes hochmodernes Videomodell, das synchronisiertes Audio (Dialoge, SFX, Umgebungsgeräusche) in einem einzigen Modelldurchlauf nativ zusammen mit dem Video generiert – eine qualitative Kategorieerweiterung, die die KI-Videogenerierung vom 'Stummfilm' zum 'Tonfilm' brachte und grundlegend veränderte, was ein Text-zu-Video-Prompt vorgeben konnte",
    "firstOfKind": "Erstes hochmodernes Videomodell mit nativer Generierung von synchronisiertem Audio, Sprache und Soundeffekten",
    "sources": [
      "https://cloud.google.com/blog/products/ai-machine-learning/announcing-veo-3-imagen-4-and-lyria-2-on-vertex-ai",
      "https://9to5google.com/2025/05/20/google-io-2025-live-blog-news-hub/"
    ],
    "disputed": false,
    "verificationNote": "20. Mai 2025 als Datum der Keynote der Google I/O 2025 bestätigt, auf der Veo 3 angekündigt wurde. Der Blogbeitrag von Google Cloud Vertex AI ist auf den 21. Mai 2025 datiert (einen Tag nach der Keynote), doch die Ankündigung selbst erfolgte während der Keynote am 20. Mai. Das Datum wurde entsprechend dem Ankündigungsereignis als 20. Mai beibehalten. Der Vertex-AI-Blogbeitrag (21. Mai) merkt an, dass sich Veo 3 zum Zeitpunkt der Ankündigung in einer 'Private Preview' befand, gefolgt von einer breiteren Verfügbarkeit."
  },
  {
    "id": "text-claude-opus-4-sonnet-4-2025-05-22",
    "modality": "text",
    "date": "2025-05-22",
    "datePrecision": "day",
    "name": "Claude Opus 4 / Sonnet 4",
    "org": "Anthropic",
    "license": "closed",
    "capability": "Claude-4-Familie, bei der Opus 4 einen Wert von 72,5 % auf SWE-bench Verified und Sonnet 4 einen Wert von 72,7 % erzielt, wobei beide komplexe, mehrstündige agentische Coding-Sitzungen durchhalten",
    "whyItMattered": "Stellte einen neuen Rekord auf SWE-bench auf und demonstrierte durchgängiges, mehrstündiges autonomes Software-Engineering; Cursor, GitHub und Block berichteten von spürbaren Verbesserungen beim Coding in der Praxis, was KI-gestützte Softwareentwicklung im großen Maßstab praktikabel machte",
    "firstOfKind": "",
    "sources": [
      "https://www.anthropic.com/news/claude-4"
    ],
    "disputed": false,
    "verificationNote": "Datum bestätigt als 22. Mai 2025 anhand der offiziellen Ankündigung von Anthropic. SWE-bench-Werte bestätigt: Opus 4 mit 72,5 %, Sonnet 4 mit 72,7 %."
  },
  {
    "id": "image-flux-1-kontext-pro-max-2025-05-29",
    "modality": "image",
    "date": "2025-05-29",
    "datePrecision": "day",
    "name": "FLUX.1 Kontext [pro] + [max]",
    "org": "Black Forest Labs",
    "license": "closed",
    "capability": "Kontextbewusste Bildbearbeitung: gemeinsames Prompting aus Text und Bild für lokale Bearbeitungen, Beibehaltung von Figuren über Szenen hinweg sowie iterative mehrstufige Bearbeitung ohne Qualitätsverlust",
    "whyItMattered": "Führte ein neues Paradigma ein – 'erst generieren, dann dialogorientiert in einer Schleife bearbeiten' –, bei dem das Modell ein Referenzbild im Kontext behält und gezielte Änderungen anwendet; ermöglichte eine präzise, markenkonsistente Bildbearbeitung, die zuvor teures Fine-Tuning oder manuelle Photoshop-Arbeit erforderte",
    "firstOfKind": "Erstes Flow-Matching-Modell mit gemeinsamer, kontextbezogener Text-und-Bild-Bearbeitung (Beibehaltung der Identität des Referenzbilds über iterative Bearbeitungen hinweg)",
    "sources": [
      "https://bfl.ai/announcements/flux-1-kontext",
      "https://www.businesswire.com/news/home/20250529605562/en/Black-Forest-Labs-Launches-FLUX.1-Kontext-a-Breakthrough-in-Context-aware-Image-Generation-and-Editing"
    ],
    "disputed": false,
    "verificationNote": "29. Mai 2025 bestätigt durch die auf den 29. Mai 2025 datierte BusinessWire-Pressemitteilung und die Ankündigungsseite von BFL. Die First-of-Kind-Behauptung zum Flow-Matching mit gemeinsamer kontextbezogener Bearbeitung steht im Einklang mit der eigenen Positionierung von BFL und wird durch frühere Arbeiten nicht eindeutig widerlegt."
  },
  {
    "id": "audio-elevenlabs-eleven-v3-alpha-2025-06-03",
    "modality": "audio",
    "date": "2025-06-03",
    "datePrecision": "day",
    "name": "ElevenLabs Eleven v3 (alpha)",
    "org": "ElevenLabs",
    "license": "closed",
    "capability": "Ausdrucksstärkstes TTS-Modell von ElevenLabs mit Audio Tags (inline emotionale Steuerung über in Klammern gesetzte Hinweise), einem Dialogue Mode für Mehrsprecher-JSON-Skripte und Unterstützung für über 70 Sprachen",
    "whyItMattered": "Audio Tags gaben Produzenten eine fein abgestufte, skriptbare Kontrolle über Emotion und Vortrag innerhalb einer einzigen Textzeichenkette; der Dialogue Mode automatisierte die Produktion mit mehreren Figuren für Hörbücher und Videos",
    "firstOfKind": "Erstes TTS-Modell mit inline skriptbaren Audio Tags zur Steuerung von Emotion und Vortrag innerhalb einer laufenden Synthese",
    "sources": [
      "https://elevenlabs.io/blog/eleven-v3",
      "https://elevenlabs.io/blog/eleven-v3-is-now-generally-available"
    ],
    "disputed": false,
    "verificationNote": "Das Veröffentlichungsdatum des Blogbeitrags wurde anhand der Metadaten des ElevenLabs-Blogs als 3. Juni 2025 bestätigt ('Published Jun 3, 2025'). Das Changelog der ElevenLabs-Dokumentation weist den 8. Juni als Datum aus, an dem es im Changelog erschien, was eine geringfügige Verzögerung zwischen Ankündigung und Dokumentationsaktualisierung widerspiegelt. Das Eintragsdatum 3. Juni ist für die Ankündigung korrekt. Hinweis: OpenAIs gpt-4o-mini-tts (März 2025) bot bereits früher natürlichsprachliche Vortragsanweisungen; die Innovation von ElevenLabs liegt hier in der inline in Klammern gesetzten Tag-Syntax innerhalb der Textzeichenkette selbst."
  },
  {
    "id": "image-flux-1-kontext-dev-open-weights-2025-06-26",
    "modality": "image",
    "date": "2025-06-26",
    "datePrecision": "day",
    "name": "FLUX.1 Kontext [dev] (open weights)",
    "org": "Black Forest Labs",
    "license": "open",
    "capability": "Open-Weights-Modell mit 12 Mrd. Parametern zur kontextbezogenen Bildbearbeitung mit Figurenbeibehaltung, lokalen und globalen Bearbeitungen, kompatibel mit ComfyUI und HuggingFace Diffusers",
    "whyItMattered": "Bis zu dieser Veröffentlichung waren alle leistungsfähigen generativen Bildbearbeitungsmodelle proprietär – Kontext dev war das erste Open-Weights-Modell, das sowohl offene Vorgänger der Bildbearbeitung als auch geschlossene Modelle wie Gemini-Flash Image bei standardmäßigen Bearbeitungs-Benchmarks übertraf; demokratisierte die iterative Bildbearbeitung für die Open-Source-Community",
    "firstOfKind": "Erstes Open-Weights-Modell, das die Leistung proprietärer Modelle bei der iterativen, kontextbewussten Bildbearbeitung erreichte",
    "sources": [
      "https://bfl.ai/blog/flux-1-kontext-dev",
      "https://huggingface.co/black-forest-labs/FLUX.1-Kontext-dev"
    ],
    "disputed": false,
    "verificationNote": "26. Juni 2025 bestätigt durch den offiziellen Blogbeitrag von BFL (datiert auf den 26. Juni 2025) und den Bericht im ComfyUI-Wiki. Die Behauptung, geschlossene Modelle einschließlich Gemini-Flash Image zu übertreffen, wird durch die im Blog zitierten eigenen Evaluierungen nach menschlicher Präferenz von BFL bestätigt, mit unabhängiger Bestätigung durch Artificial Analysis. Die Lizenz ist nicht-kommerzielle Open Weights (FLUX.1 Non-Commercial License), nicht vollständig offen wie Apache – aber 'offen' im Sinne öffentlich herunterladbarer Gewichte."
  },
  {
    "id": "text-openai-chatgpt-agent-2025-07-17",
    "date": "2025-07-17",
    "datePrecision": "day",
    "modality": "text",
    "name": "OpenAI ChatGPT Agent",
    "org": "OpenAI",
    "license": "closed",
    "capability": "Vereint Operator (visueller Browser), Deep Research und eine Code-/Terminal-Toolbox mit eigenem virtuellem Computer.",
    "whyItMattered": "Bündelte die agentischen Stränge 2025 in einem Produkt — „Agenten werden Mainstream\".",
    "firstOfKind": "",
    "sources": [
      "https://openai.com/index/introducing-chatgpt-agent/"
    ],
    "disputed": false,
    "verificationNote": ""
  },
  {
    "id": "video-google-deepmind-genie-3-2025-08-05",
    "date": "2025-08-05",
    "datePrecision": "day",
    "modality": "video",
    "name": "Google DeepMind Genie 3",
    "org": "Google DeepMind",
    "license": "closed",
    "capability": "Echtzeit-Weltmodell, das aus einem Prompt begehbare 720p/24fps-Umgebungen erzeugt, minutenlang konsistent.",
    "whyItMattered": "Der „Weltmodell\"-Durchbruch 2025 — eine neue Modalität jenseits von Text/Bild/Video.",
    "firstOfKind": "Echtzeit-Weltmodell als neue Modalität",
    "sources": [
      "https://deepmind.google/blog/genie-3-a-new-frontier-for-world-models/"
    ],
    "disputed": false,
    "verificationNote": ""
  },
  {
    "id": "text-gpt-5-2025-08-07",
    "modality": "text",
    "date": "2025-08-07",
    "datePrecision": "day",
    "name": "GPT-5",
    "org": "OpenAI",
    "license": "closed",
    "capability": "Einheitliches Modell, das die Sprachgewandtheit der GPT-Serie und das Reasoning der o-Serie hinter einem automatischen Router vereint und 74,9 % auf SWE-bench Verified sowie 94,6 % auf AIME 2025 erzielt",
    "whyItMattered": "Erstes Produktivmodell, das schnelle dialogorientierte Inferenz und tiefgreifendes Chain-of-Thought-Reasoning in einem einzigen Endpunkt mit automatischem Routing vereint und so den Nutzern die Wahl zwischen verschiedenen Modellstufen abnimmt; begleitet von Open-Weights-Begleitmodellen (GPT-OSS 120B und 20B), die am 5. August 2025 veröffentlicht wurden",
    "firstOfKind": "Erstes einheitliches Modell aus schnellem Modus und Reasoning mit automatischem Compute-Routing in einem einzigen API-Endpunkt",
    "sources": [
      "https://openai.com/index/introducing-gpt-5/",
      "https://en.wikipedia.org/wiki/GPT-5"
    ],
    "disputed": false,
    "verificationNote": "Veröffentlichungsdatum bestätigt als 7. August 2025. Die Werte von 74,9 % auf SWE-bench und 94,6 % auf AIME 2025 wurden anhand der offiziellen Ankündigung von OpenAI bestätigt. Die begleitenden Open-Weights-Modelle (GPT-OSS 120B und 20B) wurden am 5. August 2025 unter Apache 2.0 veröffentlicht – der Eintrag wurde aktualisiert, um die korrekte Modellbezeichnung anzumerken (GPT-OSS, nicht eigenständige Modelle '120B und 20B')."
  },
  {
    "id": "audio-openai-gpt-realtime-realtime-api-ga-2025-08-28",
    "modality": "audio",
    "date": "2025-08-28",
    "datePrecision": "day",
    "name": "OpenAI gpt-realtime (Realtime API GA)",
    "org": "OpenAI",
    "license": "closed",
    "capability": "Produktionsreife Speech-to-Speech-API mit verbesserter Befolgung von Anweisungen, präziserem Tool-Calling, SIP-Telefonie, Bildeingabe und Unterstützung für Remote-MCP-Server",
    "whyItMattered": "Überführte die Realtime API von der Beta in die allgemeine Verfügbarkeit mit produktionsreifen Zuverlässigkeits-SLAs und ergänzte SIP-Telefonie-Unterstützung, was den direkten Einsatz in Unternehmens-Telefonsystemen ermöglichte",
    "firstOfKind": "Erste hochmoderne Speech-to-Speech-API, die in der allgemeinen Verfügbarkeit eine SIP-Telefonie-Integration enthält",
    "sources": [
      "https://community.openai.com/t/introducing-gpt-realtime-in-the-api-livestream-on-august-28/1355020",
      "https://chatlyai.app/news/openai-realtime-api-ga-gpt-aug-2025"
    ],
    "disputed": false,
    "verificationNote": "28. August 2025 bestätigt durch einen Beitrag in der OpenAI Community, der den Livestream am 28. August ankündigte, sowie durch mehrere Berichterstattungsquellen, die die allgemeine Verfügbarkeit zu diesem Datum bestätigten. Die primäre OpenAI-Index-URL lieferte einen 403-Fehler zurück; ersetzt durch den Community-Beitrag und die Nachrichtenberichterstattung."
  },
  {
    "date": "2025-08-28",
    "datePrecision": "day",
    "modality": "audio",
    "name": "MAI-Voice-1",
    "org": "Microsoft AI",
    "license": "closed",
    "capability": "Erstes hauseigenes, hochgradig expressives Speech-Generation-Modell (TTS) von Microsoft AI. Erzeugt laut Microsoft eine volle Minute Audio in unter einer Sekunde auf einer einzelnen GPU, unterstützt Single- und Multi-Speaker-Szenarien und treibt Copilot Daily sowie Podcasts an.",
    "whyItMattered": "MAI-Voice-1 war eines der beiden ersten vollständig hauseigenen Foundation-Modelle, mit denen Microsofts Consumer-AI-Sparte unter Mustafa Suleyman ihre jahrelange ausschliessliche Abhängigkeit von OpenAI-Modellen durchbrach und begann, eigene Modelle in Copilot auszuliefern.",
    "firstOfKind": "Erstes hauseigenes Speech-Generation-Modell der Microsoft-AI-(MAI)-Sparte.",
    "sources": [
      "https://microsoft.ai/news/two-new-in-house-models/"
    ],
    "disputed": false,
    "verificationNote": "Datum 28.08.2025 und Modelldetails direkt gegen die Primärquelle microsoft.ai (\"Two in-house models in support of our mission\") verifiziert.",
    "id": "audio-mai-voice-1-2025-08-28"
  },
  {
    "date": "2025-08-28",
    "datePrecision": "day",
    "modality": "text",
    "name": "MAI-1-preview",
    "org": "Microsoft AI",
    "license": "closed",
    "capability": "Erstes End-to-End trainiertes Foundation-Modell (Text-LLM) von Microsoft AI. Ein Mixture-of-Experts-(MoE)-Modell, pre- und post-trainiert auf rund 15.000 NVIDIA-H100-GPUs, ausgelegt auf Instruction-Following und Alltagsanfragen; öffentliches Testing auf LMArena.",
    "whyItMattered": "MAI-1-preview war Microsofts erstes von Grund auf selbst trainiertes Sprach-Foundation-Modell und damit der strategische Wendepunkt weg von der reinen OpenAI-Abhängigkeit hin zu eigenen Modellen im Kern von Copilot.",
    "firstOfKind": "Erstes vollständig hauseigenes, End-to-End trainiertes Foundation-LLM von Microsoft AI.",
    "sources": [
      "https://microsoft.ai/news/two-new-in-house-models/"
    ],
    "disputed": false,
    "verificationNote": "Datum 28.08.2025, MoE-Architektur und H100-Trainingsdetails direkt gegen die Primärquelle microsoft.ai (\"Two in-house models in support of our mission\") verifiziert.",
    "id": "text-mai-1-preview-2025-08-28"
  },
  {
    "id": "audio-suno-v5-suno-studio-2025-09-23",
    "modality": "audio",
    "date": "2025-09-23",
    "datePrecision": "day",
    "name": "Suno v5 + Suno Studio",
    "org": "Suno AI",
    "license": "closed",
    "capability": "Musikmodell auf Profi-Niveau mit Mixing in Studioqualität und authentischem Gesang (v5, 23. September), kombiniert mit Suno Studio – einer generativen DAW mit Mehrspur-Editor und MIDI-Export (25. September)",
    "whyItMattered": "Verband hochmoderne Musikgenerierung mit professionellen Werkzeugen für die Postproduktion; der Mehrspur-Editor und der MIDI-Export schlugen eine Brücke zwischen KI-Generierung und traditionellen Workflows der Musikproduktion",
    "firstOfKind": "Erster KI-Musikgenerator, der eine integrierte generative Digital Audio Workstation auslieferte (Mehrspur + MIDI-Export)",
    "sources": [
      "https://www.prnewswire.com/news-releases/suno-introduces-suno-studio-a-generative-audio-workstation-built-for-all-creatives-from-seasoned-pros-to-aspiring-artists-302567486.html",
      "https://musically.com/2025/09/25/suno-launches-v5-claiming-its-the-worlds-best-music-model/"
    ],
    "disputed": false,
    "verificationNote": "Das v5-Modell wurde am 23. September 2025 veröffentlicht; Suno Studio (Beta) wurde laut Pressemitteilung von PR Newswire am 25. September 2025 veröffentlicht. Das Eintragsdatum verwendet das Veröffentlichungsdatum des v5-Modells (23. September) als Anker. Die Beschreibung der Fähigkeit wurde aktualisiert, um den zweitägigen Abstand zwischen v5 und Studio widerzuspiegeln."
  },
  {
    "id": "text-claude-sonnet-4-5-2025-09-29",
    "date": "2025-09-29",
    "datePrecision": "day",
    "modality": "text",
    "name": "Claude Sonnet 4.5",
    "org": "Anthropic",
    "license": "closed",
    "capability": "Anthropics bestes Coding-/Agenten-Modell, ausgelegt auf stundenlange autonome Software-Aufgaben.",
    "whyItMattered": "Der Coding-Agent-Meilenstein Ende 2025.",
    "firstOfKind": "",
    "sources": [
      "https://www.anthropic.com/news/claude-sonnet-4-5"
    ],
    "disputed": false,
    "verificationNote": ""
  },
  {
    "id": "video-openai-sora-2-2025-09-30",
    "modality": "video",
    "date": "2025-09-30",
    "datePrecision": "day",
    "name": "OpenAI Sora 2",
    "org": "OpenAI",
    "license": "closed",
    "capability": "Sora der zweiten Generation mit synchronisierten Dialogen und Soundeffekten, verbesserter Physikgenauigkeit, Konsistenz über mehrere Einstellungen hinweg sowie einer App zum sozialen Teilen im TikTok-Stil",
    "whyItMattered": "Ergänzte natives Audio und Sprachsynchronisierung, schärfere physikalische Plausibilität sowie die Cameo-Funktion (Einfügen eines Selfie-Videos des Nutzers in KI-Szenen); startete als Consumer-iOS-App mit beachtlichen Downloads und schlug eine Brücke zwischen KI-Video als Forschungsvorschau und der massentauglichen Erstellung sozialer Inhalte",
    "firstOfKind": "",
    "sources": [
      "https://openai.com/index/sora-2/",
      "https://techcrunch.com/2025/09/30/openai-is-launching-the-sora-app-its-own-tiktok-competitor-alongside-the-sora-2-model/"
    ],
    "disputed": false,
    "verificationNote": "30. September 2025 bestätigt durch TechCrunch (datiert auf den 30. September 2025) und die offizielle OpenAI-Seite. Der ursprüngliche Eintrag behauptete '1 Mio. Downloads in fünf Tagen' – diese konkrete Behauptung konnte nicht unabhängig anhand einer Primärquelle verifiziert werden und wurde zu 'beachtliche Downloads' abgeschwächt. Die Behauptung zu einer 'System Card'-URL ist unter openai.com/index/sora-2-system-card/ bestätigt. Hinweis: Sora wurde anschließend am 26. April 2026 eingestellt."
  },
  {
    "date": "2025-10-13",
    "datePrecision": "day",
    "modality": "image",
    "name": "MAI-Image-1",
    "org": "Microsoft AI",
    "license": "closed",
    "capability": "Erstes hauseigenes Text-to-Image-Modell von Microsoft AI. Stark bei photorealistischen Bildern, Lichteffekten (Bounce Light, Reflexionen) und Landschaften, mit Fokus auf visuelle Diversität und schnelle Iteration; Debüt in den Top 10 der Text-to-Image-Modelle auf LMArena.",
    "whyItMattered": "Mit MAI-Image-1 trat Microsoft erstmals mit einem eigenen Bildmodell direkt gegen OpenAI an, statt nur deren Modelle zu integrieren, und erweiterte die hauseigene MAI-Familie über Text und Sprache hinaus auf die Bildgenerierung.",
    "firstOfKind": "Erstes hauseigenes Bildgenerierungs-Modell von Microsoft AI.",
    "sources": [
      "https://microsoft.ai/news/introducing-mai-image-1-debuting-in-the-top-10-on-lmarena/"
    ],
    "disputed": false,
    "verificationNote": "Ankündigungsdatum 13.10.2025 (Integration in Bing Image Creator/Copilot ab 04.11.2025) direkt gegen die Primärquelle microsoft.ai verifiziert.",
    "id": "image-mai-image-1-2025-10-13"
  },
  {
    "id": "text-gemini-3-2025-11-18",
    "modality": "text",
    "date": "2025-11-18",
    "datePrecision": "day",
    "name": "Gemini 3",
    "org": "Google DeepMind",
    "license": "closed",
    "capability": "Flaggschiff-Modell mit dem Reasoning-Modus Deep Think, der 41 % auf Humanity's Last Exam erreicht; das Standardmodell Gemini 3 Pro erzielte 37,5 %. 1501 Elo auf LMArena, vom ersten Tag an in Search, der Gemini-App und über Entwickler-APIs ausgerollt",
    "whyItMattered": "Erreichte zum Start den höchsten Wert nach menschlicher Präferenz auf LMArena (erstes Modell, das die Marke von 1500 Elo überschritt) und durchbrach mit Deep Think die 40-%-Schwelle auf Humanity's Last Exam; der gleichzeitige Rollout über die Google-Suche machte es zur umfangreichsten Einführung eines hochmodernen Modells in der Geschichte",
    "firstOfKind": "",
    "sources": [
      "https://blog.google/products/gemini/gemini-3/",
      "https://techcrunch.com/2025/11/18/google-launches-gemini-3-with-new-coding-app-and-record-benchmark-scores/"
    ],
    "disputed": false,
    "verificationNote": "Veröffentlichungsdatum bestätigt als 18. November 2025. 1501 Elo auf LMArena bestätigt. Die 41 % auf Humanity's Last Exam gelten speziell für den Deep-Think-Modus; das Standardmodell Gemini 3 Pro erzielte 37,5 %. Die Beschreibung der Fähigkeit wurde aktualisiert, um diese Unterscheidung zu verdeutlichen. Die Quellen-URL des ursprünglichen Eintrags für 'blog.google/products/gemini/gemini-3-collection/' wurde auf die bestätigte URL korrigiert."
  },
  {
    "date": "2026-01-06",
    "datePrecision": "day",
    "modality": "video",
    "name": "LTX-2",
    "org": "Lightricks",
    "license": "open",
    "capability": "LTX-2 erzeugt synchronisiertes Video und Audio in einem einzigen Durchgang mit nativer 4K-Auflösung bei 50 Bildern pro Sekunde und bis zu 20 Sekunden Länge, inklusive ausdrucksstarkem Ton, akkuratem Lip-Sync und Umgebungsgeräuschen. Das Modell (14B Video- plus 5B Audio-Parameter) läuft auf Consumer-GPUs.",
    "whyItMattered": "Erstmals stellte ein produktionsreifes Audio-Video-Modell vollständig offene Gewichte sowie Inferenz- und Trainingscode bereit. Damit konnten Entwickler hochwertige, vertonte Clips lokal und kommerziell ohne Cloud-Abhängigkeit erzeugen und feintunen, was die Lücke zu geschlossenen Spitzenmodellen deutlich verkleinerte.",
    "firstOfKind": "Erstes produktionsreifes Open-Weights-Modell, das Video und Audio synchron in einem Durchgang mit nativem 4K und offenem Trainingscode generiert.",
    "sources": [
      "https://www.globenewswire.com/news-release/2026/01/06/3213304/0/en/Lightricks-Open-Sources-LTX-2-the-First-Production-Ready-Audio-and-Video-Generation-Model-With-Truly-Open-Weights.html"
    ],
    "disputed": false,
    "verificationNote": "Bestätigt über die offizielle Lightricks-Pressemitteilung (Dateline 06.01.2026, 00:30 ET), die offene Gewichte, Trainingscode, natives 4K bei 50 fps und synchrone Audio-Video-Generierung in einem Durchgang nennt.",
    "id": "video-ltx-2-2026-01-06"
  },
  {
    "date": "2026-01-15",
    "datePrecision": "day",
    "modality": "image",
    "name": "FLUX.2 [klein]",
    "org": "Black Forest Labs",
    "license": "open",
    "capability": "Kompakte Open-Weights-Modellfamilie (4B und 9B), die Bildgenerierung und -Editing in einer Architektur vereint und Text-to-Image, Single-Reference-Editing sowie Multi-Reference-Generierung in unter einer Sekunde auf Consumer-Hardware (ab ca. 13 GB VRAM) liefert.",
    "whyItMattered": "Brachte nahezu Frontier-Qualität auf lokale GPUs und verschob damit die Pareto-Grenze zwischen Qualität und Latenz im Open-Weights-Bereich erheblich. Die 4B-Variante steht unter Apache 2.0 und ist damit auch kommerziell frei nutzbar.",
    "firstOfKind": "",
    "sources": [
      "https://bfl.ai/blog/flux2-klein-towards-interactive-visual-intelligence",
      "https://huggingface.co/black-forest-labs/FLUX.2-klein-4B"
    ],
    "disputed": false,
    "verificationNote": "Datum (15.01.2026), Apache-2.0-Lizenz der 4B-Variante und sub-sekunden-Inferenz direkt auf dem Blog von Black Forest Labs (bfl.ai) bestaetigt; 9B unter FLUX Non-Commercial License.",
    "id": "image-flux-2-klein-2026-01-15"
  },
  {
    "date": "2026-01-22",
    "datePrecision": "day",
    "modality": "text",
    "name": "ERNIE 5.0",
    "org": "Baidu",
    "license": "closed",
    "capability": "Nativ voll-modales Modell mit rund 2,4T Parametern in MoE-Architektur (weniger als 3 % der Parameter je Inferenz aktiv), das Text, Bild, Audio und Video gemeinsam versteht und generiert.",
    "whyItMattered": "Die offizielle Version von ERNIE 5.0 (nach Preview im November 2025) rangierte als Ernie-5.0-0110 als bestes chinesisches Modell und global auf Platz 8 des LMArena-Text-Leaderboards und übertraf Modelle wie GPT-5.1-High und Gemini-2.5-Pro - ein Beleg für die Schlagkraft chinesischer voll-modaler Foundation-Modelle.",
    "firstOfKind": "",
    "sources": [
      "https://www.scmp.com/tech/tech-trends/article/3340866/baidu-launches-ernie-50-firms-ai-assistant-users-reach-200-million-month",
      "https://www.infoworld.com/article/4089778/baidu-launches-new-generation-of-ernie-ai.html"
    ],
    "disputed": false,
    "verificationNote": "Datum 22.01.2026 (offizielle Version) über SCMP bestätigt; Lizenz nicht als Open-Weights ausgewiesen, daher closed. ERNIE 5.1 Preview (30.04.2026) ist separat als jüngere Iteration gelistet.",
    "id": "text-ernie-5-0-2026-01-22"
  },
  {
    "date": "2026-01-26",
    "datePrecision": "day",
    "modality": "image",
    "name": "HunyuanImage 3.0-Instruct",
    "org": "Tencent",
    "license": "open",
    "capability": "Natives multimodales Open-Weights-Modell (80B MoE, ca. 13B aktive Parameter) mit Fokus auf praezisem, instruktionsgesteuertem Image-Editing: Reasoning-gestuetztes Prompt-Enhancement, Image-to-Image, Multi-Image-Fusion (bis zu 3 Eingabebilder) und Chain-of-Thought.",
    "whyItMattered": "Erweiterte das groesste offene Text-to-Image-Modell um gezieltes Editing und Reasoning und staerkte damit die Position chinesischer Open-Weights-Modelle. Eine distillierte Variante (Instruct-Distil) ermoeglicht schnellere Inferenz mit nur 8 Sampling-Schritten.",
    "firstOfKind": "",
    "sources": [
      "https://github.com/Tencent-Hunyuan/HunyuanImage-3.0"
    ],
    "disputed": false,
    "verificationNote": "Datum (26.01.2026), Open-Source-Status mit Lizenz und Gewichten auf HuggingFace sowie Capabilities im offiziellen Tencent-Hunyuan-GitHub-Repository (News-Abschnitt) bestaetigt.",
    "id": "image-hunyuanimage-3-0-instruct-2026-01-26"
  },
  {
    "date": "2026-01-27",
    "datePrecision": "day",
    "modality": "text",
    "name": "Kimi K2.5",
    "org": "Moonshot AI",
    "license": "open",
    "capability": "Nativ multimodales, agentisches Open-Weights-Modell mit einer 1-Billion-Parameter-Mixture-of-Experts-Architektur (etwa 32 Mrd. aktive Parameter), das auf rund 15 Billionen gemischten Bild- und Text-Tokens trainiert wurde. Es versteht Text, Bilder und Video und bringt einen Agent-Swarm mit, der komplexe Aufgaben auf bis zu 100 parallele Sub-Agents aufteilt.",
    "whyItMattered": "Moonshot positionierte Kimi K2.5 als Open-Weights-Modell, das laut eigenen Angaben in mehreren Benchmarks mit GPT-5.2 und Gemini 3 Pro mithalten oder sie übertreffen konnte (etwa SWE-Bench Verified und VideoMMMU). Begleitet von einem Coding-Agenten markierte es den Auftakt einer Welle starker chinesischer Open-Weights-Modelle im Jahr 2026.",
    "firstOfKind": "",
    "sources": [
      "https://techcrunch.com/2026/01/27/chinas-moonshot-releases-a-new-open-source-model-kimi-k2-5-and-a-coding-agent/",
      "https://siliconangle.com/2026/01/27/moonshot-ai-releases-open-source-kimi-k2-5-model-1t-parameters/"
    ],
    "disputed": false,
    "verificationNote": "Datum 27.01.2026 durch TechCrunch und SiliconANGLE bestätigt; beide berichten vom Release am Erscheinungstag. Open-Weights auf Hugging Face.",
    "id": "text-kimi-k2-5-2026-01-27"
  },
  {
    "date": "2026-02-02",
    "datePrecision": "day",
    "modality": "audio",
    "name": "ElevenLabs Eleven v3 (GA)",
    "org": "ElevenLabs",
    "license": "closed",
    "capability": "Allgemeine Verfügbarkeit des bislang ausdrucksstärksten TTS-Modells von ElevenLabs mit über 70 Sprachen und Audio Tags zur direkten Steuerung von Emotion und Sprechweise im Text. Gegenüber der Alpha-Version sank die Fehlerquote bei Zahlen, Symbolen und Fachnotation um 68 Prozent (von 15,3 auf 4,9 Prozent), und Nutzer bevorzugten die GA-Version in 72 Prozent der Faelle.",
    "whyItMattered": "Eleven v3 setzte einen neuen Qualitaetsmassstab fuer expressives, gesteuertes TTS und festigte die Position von ElevenLabs als Full-Stack-Audio-Anbieter. Die Audio Tags machten feinkoernige Emotionskontrolle ohne separate Modelle oder Nachbearbeitung zugaenglich.",
    "firstOfKind": "",
    "sources": [
      "https://elevenlabs.io/blog/eleven-v3-is-now-generally-available"
    ],
    "disputed": false,
    "verificationNote": "Datum direkt aus dem ElevenLabs-Blog (Primaerquelle), dort als 'Feb 2, 2026' ausgewiesen.",
    "id": "audio-elevenlabs-eleven-v3-ga-2026-02-02"
  },
  {
    "date": "2026-02-05",
    "datePrecision": "day",
    "modality": "video",
    "name": "Kling 3.0 (Video 3.0 / Video 3.0 Omni)",
    "org": "Kuaishou",
    "license": "closed",
    "capability": "Die Kling-3.0-Reihe (Video 3.0, Video 3.0 Omni, Image 3.0, Image 3.0 Omni) basiert auf einem einheitlichen multimodalen Framework, das Video und Audio in einem Durchgang erzeugt. Sie liefert bis zu 15 Sekunden lange Clips, native Audio-Generierung mit Sprache in mehreren Sprachen, Dialekten und Akzenten sowie verbesserte Konsistenz und photorealistische Ausgabe; die Omni-Variante repliziert Charakter- und Stimmmerkmale aus Referenzvideos.",
    "whyItMattered": "Kling 3.0 übernahm wenige Tage nach dem Launch die Spitze der ELO-Bestenliste für Videogeneratoren und positionierte ein chinesisches Modell vor westlichen Spitzenmodellen. Die synchrone Audio-Video-Erzeugung und das mehrsprachige Lip-Sync machten es zu einem ernsthaften Werkzeug für professionelle, vertonte Mehr-Shot-Produktionen.",
    "firstOfKind": "",
    "sources": [
      "https://ir.kuaishou.com/news-releases/news-release-details/kling-ai-launches-30-model-ushering-era-where-everyone-can-be",
      "https://www.globenewswire.com/news-release/2026/02/05/3232837/0/en/Kling-AI-Launches-3-0-Model-Ushering-in-an-Era-Where-Everyone-Can-Be-a-Director.html"
    ],
    "disputed": false,
    "verificationNote": "Bestätigt über die offizielle Kuaishou-Investor-Relations-/GlobeNewswire-Pressemitteilung mit Dateline 05.02.2026. Einzelne Sekundärquellen nennen einen globalen Launch am 31.01.2026; als Primärdatum wird das Datum der offiziellen Mitteilung verwendet.",
    "id": "video-kling-3-0-video-3-0-video-3-0-omni-2026-02-05"
  },
  {
    "id": "text-claude-opus-4-6-2026-02-05",
    "date": "2026-02-05",
    "datePrecision": "day",
    "modality": "text",
    "name": "Claude Opus 4.6",
    "org": "Anthropic",
    "license": "closed",
    "capability": "1-Mio.-Token-Kontext (Beta), Spitzenwerte auf Humanity's Last Exam und Terminal-Bench; anhaltendes agentisches Coding in großen Codebases.",
    "whyItMattered": "Das erste 2026er Claude-Flaggschiff und Referenzpunkt, gegen den Opus 4.7/4.8 gemessen wurden.",
    "firstOfKind": "",
    "sources": [
      "https://www.anthropic.com/news/claude-opus-4-6"
    ],
    "disputed": false,
    "verificationNote": ""
  },
  {
    "date": "2026-02-10",
    "datePrecision": "day",
    "modality": "image",
    "name": "Qwen-Image-2.0",
    "org": "Alibaba (Qwen)",
    "license": "closed",
    "capability": "Bildgrundlagenmodell der naechsten Generation, das Text-to-Image-Generierung und Image-Editing in einer einzigen, leichteren Architektur vereint (ca. 7B statt zuvor 20B), mit nativer 2K-Aufloesung, staerkerer Prompt-Treue und professionellem Typografie-Rendering (Instruktionen bis 1k Token fuer Infografiken).",
    "whyItMattered": "Demonstrierte, dass deutlich kleinere Modelle bei vereinheitlichter Generierung und Editing umfassende Leistungssteigerungen erzielen koennen, und setzte neue Massstaebe beim Text-Rendering in Bildern.",
    "firstOfKind": "",
    "sources": [
      "https://github.com/QwenLM/Qwen-Image"
    ],
    "disputed": false,
    "verificationNote": "Datum (10.02.2026) und Capabilities im offiziellen QwenLM/Qwen-Image-GitHub-Changelog bestaetigt. Anders als bei frueheren Qwen-Image-Releases waren die Gewichte zum Ankuendigungszeitpunkt nicht als Open-Weights veroeffentlicht, daher als closed gefuehrt.",
    "id": "image-qwen-image-2-0-2026-02-10"
  },
  {
    "date": "2026-02-11",
    "datePrecision": "day",
    "modality": "text",
    "name": "GLM-5",
    "org": "Zhipu AI (Z.ai)",
    "license": "open",
    "capability": "Open-Weights-MoE-Frontier-Modell mit 744B Total-Parametern (rund 40-44B aktiv), 200K-Kontextfenster und DeepSeek-Sparse-Attention, ausgelegt auf agentische Engineering- und langlaufende Coding-Workflows. Erreichte 77,8 % auf SWE-bench Verified und 92,7 % auf AIME 2026.",
    "whyItMattered": "GLM-5 war zum Launch das neue Nr.-1-Open-Weights-Modell auf Artificial Analysis und in der LMArena Text Arena und übertraf in Teilen Gemini 3 Pro. Es kam zudem von der weltweit ersten börsennotierten Foundation-Model-Firma (Zhipu-IPO in Hongkong) und wurde auf heimischen Huawei-Ascend-Chips trainiert - ein Signal für Chinas KI-Eigenständigkeit.",
    "firstOfKind": "Erstes Frontier-Open-Weights-Modell einer börsennotierten Foundation-Model-Firma (Zhipu/Z.ai).",
    "sources": [
      "https://huggingface.co/blog/mlabonne/glm-5",
      "https://www.scmp.com/tech/article/3343239/chinas-zhipu-ai-launches-new-major-model-glm-5-challenge-its-rivals"
    ],
    "disputed": false,
    "verificationNote": "Datum 11.02.2026 über mehrere Quellen (Hugging-Face-Blog, SCMP) bestätigt; Lizenz MIT (Open-Weights). GLM-5.1 (07.04.2026) und GLM-5.2 (13.06.2026) folgten; GLM-5.2 ist separat als jüngstes Modell gelistet.",
    "id": "text-glm-5-2026-02-11"
  },
  {
    "date": "2026-02-12",
    "datePrecision": "day",
    "modality": "video",
    "name": "Seedance 2.0",
    "org": "ByteDance",
    "license": "closed",
    "capability": "Seedance 2.0 ist ein einheitliches multimodales Audio-Video-Modell, das Text, Bild, Audio und Video in derselben Anfrage als Eingabe akzeptiert (bis zu 9 Bilder, 3 Videoclips, 3 Audioclips plus Anweisungen) und in einem Durchgang bis zu 15 Sekunden synchrones Mehr-Shot-Video mit Stereo-Audio in mehreren Tonspuren (Musik, Effekte, Sprache) ausgibt. Es bietet starke physikalische Genauigkeit und visuellen Realismus.",
    "whyItMattered": "Seedance 2.0 setzte sich nach dem Launch an die Spitze der Artificial-Analysis-Text-to-Video-Bestenliste (mit Audio) und löste in China viral eine Debatte aus; eine Unterlassungsaufforderung von Disney unterstrich, wie nah die Ausgabequalität an Hollywood-Material heranreichte. Der einheitliche Mehr-Modalitäten-Ansatz mit paralleler Audio-Erzeugung hob den Standard für gesteuerte, vertonte Generierung an.",
    "firstOfKind": "",
    "sources": [
      "https://seed.bytedance.com/en/blog/seedance-2-0-official-launch"
    ],
    "disputed": false,
    "verificationNote": "Bestätigt über den offiziellen ByteDance-Seed-Blog (Datum 2026-02-12). Einzelne Sekundärquellen nennen den 14.02.2026; das Primärdatum des Seed-Blogs (12.02.2026) wird verwendet.",
    "id": "video-seedance-2-0-2026-02-12"
  },
  {
    "date": "2026-02-17",
    "datePrecision": "day",
    "modality": "text",
    "name": "Claude Sonnet 4.6",
    "org": "Anthropic",
    "license": "closed",
    "capability": "Mittelgroßes Claude-Modell mit deutlichen Fortschritten bei Coding und Computer-Use sowie einem 1-Mio.-Token-Kontextfenster in der Beta. Es erreicht laut Anthropic Opus-nahe Intelligenz zu einem Preis (3/15 USD pro Mio. Tokens), der den Einsatz für deutlich mehr Aufgaben praktikabel macht.",
    "whyItMattered": "Entwickler bevorzugten Sonnet 4.6 mit großem Abstand gegenüber dem Vorgänger und oft sogar gegenüber Claude Opus 4.5. Leistung, die zuvor ein Modell der Opus-Klasse erforderte, wurde damit in der günstigeren Sonnet-Klasse verfügbar und verschob das Preis-Leistungs-Verhältnis im mittleren Segment.",
    "firstOfKind": "",
    "sources": [
      "https://www.anthropic.com/news/claude-sonnet-4-6"
    ],
    "disputed": false,
    "verificationNote": "Datum 17.02.2026 direkt auf der Anthropic-Ankündigungsseite (Primärquelle) bestätigt.",
    "id": "text-claude-sonnet-4-6-2026-02-17"
  },
  {
    "date": "2026-02-18",
    "datePrecision": "day",
    "modality": "audio",
    "name": "Google Lyria 3",
    "org": "Google DeepMind",
    "license": "closed",
    "capability": "Musikgenerierungsmodell, das aus Text-Prompts 30-sekuendige Tracks mit automatisch erzeugten Lyrics und passendem Cover-Artwork erstellt. Unterstuetzt multimodale Eingaben (Text, Bild, Video) sowie Steuerung von Genre, Tempo und Sprache und versieht alle Ausgaben mit SynthID-Wasserzeichen.",
    "whyItMattered": "Lyria 3 brachte hochwertige KI-Musikgenerierung direkt in die Gemini-App und YouTube Dream Track und machte sie damit fuer ein Massenpublikum zugaenglich. Es markierte den Start eines extrem schnellen Release-Zyklus von Google DeepMind im Audiobereich.",
    "firstOfKind": "",
    "sources": [
      "https://blog.google/innovation-and-ai/products/gemini-app/lyria-3/",
      "https://siliconangle.com/2026/02/18/google-launches-lyria-3-music-generation-model/"
    ],
    "disputed": false,
    "verificationNote": "Datum aus dem offiziellen Google-Blog (Primaerquelle), dort als 'Feb 18, 2026' ausgewiesen; durch SiliconANGLE bestaetigt.",
    "id": "audio-google-lyria-3-2026-02-18"
  },
  {
    "date": "2026-02-26",
    "datePrecision": "day",
    "modality": "image",
    "name": "Nano Banana 2 (Gemini 3.1 Flash Image)",
    "org": "Google DeepMind",
    "license": "closed",
    "capability": "Schnelles, hochfideles Bildgenerierungs- und Editing-Modell, das das Weltwissen, die Qualitaet und das Reasoning von Nano Banana Pro mit Flash-Geschwindigkeit kombiniert; Aufloesungen von 512px bis 4K, Charakterkonsistenz fuer bis zu fuenf Charaktere und Fidelitaet von bis zu 14 Objekten in einem Workflow.",
    "whyItMattered": "Wurde sofort zum Standardmodell fuer Bildgenerierung in der gesamten Gemini-App sowie in Google Suche (AI Mode), Google Lens, Google Ads und Flow und brachte damit Frontier-Bildqualitaet in grossem Massstab in Googles Endprodukte. Nutzt Echtzeit-Informationen aus der Websuche fuer akkuratere Darstellung konkreter Motive.",
    "firstOfKind": "",
    "sources": [
      "https://blog.google/innovation-and-ai/technology/ai/nano-banana-2/",
      "https://deepmind.google/models/gemini-image/flash/"
    ],
    "disputed": false,
    "verificationNote": "Datum (26.02.2026), Capabilities und ecosystemweiter Rollout im offiziellen Google-Blog (blog.google) bestaetigt.",
    "id": "image-nano-banana-2-gemini-3-1-flash-image-2026-02-26"
  },
  {
    "id": "text-gpt-5-4-2026-03-05",
    "date": "2026-03-05",
    "datePrecision": "day",
    "modality": "text",
    "name": "GPT-5.4",
    "org": "OpenAI",
    "license": "closed",
    "capability": "Erstes Mainline-Reasoning-Modell mit integriertem Frontier-Coding und Computer-Use; 33% weniger Faktenfehler als 5.2.",
    "whyItMattered": "Der „Reasoning + Coding + Computer-Use vereint\"-Meilenstein; breit genutztes Flaggschiff vor 5.5.",
    "firstOfKind": "",
    "sources": [
      "https://openai.com/index/introducing-gpt-5-4/"
    ],
    "disputed": false,
    "verificationNote": ""
  },
  {
    "date": "2026-03-09",
    "datePrecision": "day",
    "modality": "audio",
    "name": "Fish Audio S2",
    "org": "Fish Audio",
    "license": "open",
    "capability": "Open-Weights-TTS-Modell mit Dual-AR-Architektur (rund 4B Parameter auf der Zeitachse, 400M auf der Tiefenachse), trainiert auf ueber 10 Millionen Stunden Audio in etwa 50 Sprachen. Erlaubt feinkoernige Inline-Steuerung von Prosodie und Emotion ueber natuerlichsprachliche Tags wie [laugh], [whispers] oder [super happy]. Veroeffentlicht mit Model-Weights, Fine-Tuning-Code und einer SGLang-basierten Streaming-Inferenz-Engine.",
    "whyItMattered": "S2 zaehlte zu den ausdrucksstaerksten Open-Weights-Sprachmodellen des Jahres und gewann laut Berichten die hoechste EmergentTTS-Eval-Win-Rate aller getesteten Modelle, womit es mehrere kommerzielle Angebote uebertraf und damit die Luecke zwischen offenen und geschlossenen TTS-Systemen weiter schloss.",
    "firstOfKind": "",
    "sources": [
      "https://fish.audio/blog/fish-audio-open-sources-s2/"
    ],
    "disputed": false,
    "verificationNote": "Datum aus dem Fish-Audio-Blog (Primaerquelle), dort als 'March 9, 2026' ausgewiesen. Lizenz laut Berichterstattung Fish Audio Research License (Forschung/nicht-kommerziell frei, kommerziell lizenzpflichtig).",
    "id": "audio-fish-audio-s2-2026-03-09"
  },
  {
    "date": "2026-03-17",
    "datePrecision": "day",
    "modality": "image",
    "name": "Midjourney V8 (Alpha)",
    "org": "Midjourney",
    "license": "closed",
    "capability": "Neue Modellgeneration mit ca. 5x schnellerer Generierung, nativer 2K-Aufloesung (--hd-Modus), deutlich verbessertem Text-Rendering (bei Angabe in Anfuehrungszeichen), besserer Instruction-Following, Kohaerenz und Detailtreue sowie staerkerer Personalisierung ueber Style-References und Moodboards.",
    "whyItMattered": "Erste grosse Modellgeneration von Midjourney seit V7 mit komplett ueberarbeiteter Codebasis; brachte native hohe Aufloesung und endlich brauchbares Text-Rendering in eine der fuehrenden kreativen Bildplattformen. V8.1 wurde am 10.06.2026 zur Standardversion.",
    "firstOfKind": "",
    "sources": [
      "https://updates.midjourney.com/v8-alpha/",
      "https://updates.midjourney.com/v8-1-alpha/"
    ],
    "disputed": false,
    "verificationNote": "Datum des V8-Alpha-Release (17.03.2026) und Capabilities auf der offiziellen Midjourney-Updates-Seite bestaetigt.",
    "id": "image-midjourney-v8-alpha-2026-03-17"
  },
  {
    "date": "2026-03-19",
    "datePrecision": "day",
    "modality": "image",
    "name": "MAI-Image-2",
    "org": "Microsoft AI",
    "license": "closed",
    "capability": "Hauseigenes Text-to-Image-Modell der zweiten Generation. Stärken bei Photorealismus (natürliches Licht, akkurate Hauttöne), zuverlässiger In-Image-Textgenerierung für Infografiken/Slides und komplexen, kinematografischen Szenen; rangierte als #3-Modellfamilie auf der Arena.ai-Bestenliste.",
    "whyItMattered": "MAI-Image-2 brachte Microsofts eigene Bildgenerierung in die globale Top-3 der Text-to-Image-Labore und festigte die Strategie, Copilot und Bing zunehmend mit hauseigenen statt OpenAI-Modellen zu betreiben.",
    "firstOfKind": "",
    "sources": [
      "https://microsoft.ai/news/introducing-mai-image-2/"
    ],
    "disputed": false,
    "verificationNote": "Ankündigungsdatum 19.03.2026 (MAI Playground) direkt gegen die Primärquelle microsoft.ai (\"Introducing MAI-Image-2\") verifiziert; spaeter am 02.04.2026 zusaetzlich in Foundry verfügbar gemacht.",
    "id": "image-mai-image-2-2026-03-19"
  },
  {
    "date": "2026-03-25",
    "datePrecision": "day",
    "modality": "audio",
    "name": "Google Lyria 3 Pro",
    "org": "Google DeepMind",
    "license": "closed",
    "capability": "Erweiterte Variante von Lyria 3, die Tracks von bis zu 3 Minuten Laenge mit struktureller Bewusstheit erzeugt. Nutzer koennen Songbestandteile wie Intros, Strophen, Refrains, Bridges und Uebergaenge direkt im Prompt festlegen und so den musikalischen Bogen einer Komposition definieren.",
    "whyItMattered": "Mit dem Sprung von 30-Sekunden-Clips auf strukturierte Dreiminueter nur einen Monat nach Lyria 3 ruekte Google in den Bereich vollstaendiger, arrangierbarer Songs vor und verkuerzte einen typischen Jahres-Produktzyklus auf wenige Wochen.",
    "firstOfKind": "",
    "sources": [
      "https://blog.google/innovation-and-ai/technology/ai/lyria-3-pro/",
      "https://winbuzzer.com/2026/03/25/google-launches-lyria-3-pro-ai-music-generation-model-xcxwbn/"
    ],
    "disputed": false,
    "verificationNote": "Datum aus dem offiziellen Google-Blog (Primaerquelle), dort als 'Mar 25, 2026' ausgewiesen.",
    "id": "audio-google-lyria-3-pro-2026-03-25"
  },
  {
    "id": "audio-suno-v5-5-voice-capture-custom-models-2026-03-26",
    "modality": "audio",
    "date": "2026-03-26",
    "datePrecision": "day",
    "name": "Suno v5.5 (voice capture + custom models)",
    "org": "Suno AI",
    "license": "closed",
    "capability": "Musikgenerierung mit persönlicher Voice Capture (eine 30-sekündige bis 4-minütige Gesangsprobe überträgt deine stimmliche Identität auf jeden generierten Track), Fine-Tuning eigener, vom Nutzer trainierter Modelle sowie eine personalisierte Geschmacks-Engine",
    "whyItMattered": "Verlagerte KI-Musik von generischer Generierung hin zur personalisierten Erstellung: Nutzer können ihre eigene Singstimme und ihren musikalischen Katalog direkt in das generative Modell einbetten und verbinden so Selbstausdruck mit Automatisierung im Consumer-Maßstab",
    "firstOfKind": "Erster KI-Musikgenerator für Endnutzer, der es ermöglicht, die eigene Singstimme und den persönlichen Katalog als Generierungs-Priors einzubetten",
    "sources": [
      "https://suno.com/blog/v5-5",
      "https://www.musicbusinessworldwide.com/suno-launches-v5-5-ai-model-with-voice-capture-and-personalization-features/"
    ],
    "disputed": false,
    "verificationNote": "26. März 2026 bestätigt durch die Verfasserzeile des Suno-Blogbeitrags ('By Mikey Shulman, Co-Founder & CEO · Mar 26, 2026') und die Berichterstattung von Music Business Worldwide."
  },
  {
    "date": "2026-04-02",
    "datePrecision": "day",
    "modality": "audio",
    "name": "MAI-Transcribe-1",
    "org": "Microsoft AI",
    "license": "closed",
    "capability": "Erstes hauseigenes Speech-to-Text-(Transkriptions-)Modell von Microsoft AI. State-of-the-Art-Genauigkeit über die 25 meistgenutzten Sprachen (FLEURS-Benchmark) mit niedrigster Word Error Rate, robust in lauten Umgebungen; Batch-Transkription 2,5x schneller als das bestehende Azure-Fast-Angebot.",
    "whyItMattered": "MAI-Transcribe-1 erweiterte die hauseigene MAI-Familie um die Spracherkennung und wurde gemeinsam mit MAI-Voice-1 und MAI-Image-2 erstmals für Entwickler in Microsoft Foundry verfügbar gemacht, ein weiterer Schritt der Lösung von externer Modellabhängigkeit.",
    "firstOfKind": "Erstes hauseigenes Speech-to-Text-/Transkriptions-Modell von Microsoft AI.",
    "sources": [
      "https://microsoft.ai/news/state-of-the-art-speech-recognition-with-mai-transcribe-1/",
      "https://microsoft.ai/news/today-were-announcing-3-new-world-class-mai-models-available-in-foundry/"
    ],
    "disputed": false,
    "verificationNote": "Datum 02.04.2026 gegen die Primärquellen microsoft.ai (\"State of the Art Speech Recognition with MAI-Transcribe-1\" sowie die Foundry-Ankündigung der drei Modelle) verifiziert.",
    "id": "audio-mai-transcribe-1-2026-04-02"
  },
  {
    "date": "2026-04-07",
    "datePrecision": "day",
    "modality": "video",
    "name": "Wan2.7-Video",
    "org": "Alibaba",
    "license": "closed",
    "capability": "Wan2.7-Video ist eine Suite aus vier Modellen (Text-to-Video, Image-to-Video, Reference-to-Video und Video-Editing). Sie erzeugt Clips von 2 bis 15 Sekunden in 720p und 1080p, hält Mehr-Shot-Konsistenz für bis zu fünf verschiedene Charaktere über Videos hinweg und bietet dynamische Dialog-Bearbeitung mit automatischem Lip-Sync und Erhalt der Stimmsignatur.",
    "whyItMattered": "Wan2.7 hob die Wan-Linie von einzelnen Clips zu durchgängigen, mehrteiligen Erzählungen mit konsistenten Figuren und führte in unabhängigen Bestenlisten als bestplatziertes Modell, das von einem chinesischen Anbieter stammt. Es verschob die Erwartung von 'Director-Level'-Steuerung (Mehr-Shot, Charakterkonsistenz, Auto-Dubbing) in den Mainstream.",
    "firstOfKind": "",
    "sources": [
      "https://www.alibabacloud.com/blog/alibaba-unveils-wan2-7-video-to-elevate-creators-from-executors-to-directors_603009"
    ],
    "disputed": false,
    "verificationNote": "Bestätigt über den offiziellen Alibaba-Cloud-Blog (Datum 07.04.2026), der einen Launch auf Model Studio und der Wan-Website beschreibt. Die Primärquelle bestätigt KEINE offenen Gewichte oder Lizenz zum Launch-Zeitpunkt; Sekundärquellen erwarten eine spätere Open-Weights-Veröffentlichung (Apache 2.0). Daher hier vorsichtig als 'closed' eingestuft.",
    "id": "video-wan2-7-video-2026-04-07"
  },
  {
    "id": "text-glm-5-1-2026-04-07",
    "date": "2026-04-07",
    "datePrecision": "day",
    "modality": "text",
    "name": "GLM-5.1",
    "org": "Zhipu / Z.ai",
    "license": "open",
    "capability": "754B-Parameter-MoE; erstes Open-Source-Modell auf Platz 1 von SWE-Bench Pro (58,4%), vor Claude Opus 4.6.",
    "whyItMattered": "Der Moment, in dem Open-Weights ein reales Coding-Benchmark gegen alle geschlossenen Modelle anführte.",
    "firstOfKind": "Erstes Open-Weights-Modell an der Spitze von SWE-Bench Pro",
    "sources": [
      "https://huggingface.co/zai-org/GLM-5"
    ],
    "disputed": false,
    "verificationNote": ""
  },
  {
    "date": "2026-04-08",
    "datePrecision": "day",
    "modality": "text",
    "name": "Muse Spark",
    "org": "Meta (Superintelligence Labs)",
    "license": "closed",
    "capability": "Nativ multimodales Reasoning-Modell mit Tool-Use, visuellem Chain-of-Thought und Multi-Agent-Orchestrierung (Contemplating-Modus). Es nutzt Thought Compression zur Token-effizienten Inferenz und erreicht laut Meta rund 58 % auf Humanity's Last Exam im Contemplating-Modus.",
    "whyItMattered": "Muse Spark war das erste Modell der neuen Meta Superintelligence Labs unter Alexandr Wang und markierte Metas Abkehr von der bisherigen Open-Source-Strategie hin zu einem geschlossenen Modell. Es wurde sofort über Facebook, Instagram, WhatsApp, Messenger und die Ray-Ban-Brillen an über drei Milliarden Nutzer ausgerollt.",
    "firstOfKind": "Erstes Modell von Meta Superintelligence Labs und Metas erster strategischer Wechsel von Open-Weights zu einem geschlossenen Frontier-Modell.",
    "sources": [
      "https://ai.meta.com/blog/introducing-muse-spark-msl/",
      "https://about.fb.com/news/2026/04/introducing-muse-spark-meta-superintelligence-labs/"
    ],
    "disputed": false,
    "verificationNote": "Datum 08.04.2026 auf der Meta-AI-Blogseite (Primärquelle, 'available today') bestätigt; ergänzend Bloomberg- und CNBC-Berichterstattung.",
    "id": "text-muse-spark-2026-04-08"
  },
  {
    "date": "2026-04-13",
    "datePrecision": "day",
    "modality": "audio",
    "name": "MOSS-Audio",
    "org": "OpenMOSS / MOSI.AI / Shanghai Innovation Institute",
    "license": "open",
    "capability": "Open-Source-Foundation-Modell fuer einheitliches Audio-Verstehen ueber komplexe reale Audioszenen hinweg: Sprachverstehen, Umgebungsgeraeusche, Musikverstehen, Audio-Captioning, zeitbewusstes Question-Answering und mehrstufiges Reasoning. Veroeffentlicht in vier Varianten (4B und 8B, jeweils als Instruct und Thinking) mit Audio-Encoder plus Qwen3-Backbone; Weights auf Hugging Face und Code auf GitHub.",
    "whyItMattered": "MOSS-Audio brachte ein offenes, frei verfuegbares Audio-Reasoning-Modell mit Chain-of-Thought-Faehigkeiten in ein Feld, das bislang von geschlossenen Systemen dominiert wurde, und machte zeitbewusstes Verstehen und komplexes Schlussfolgern ueber gemischtes Audio fuer Forschung und Entwicklung zugaenglich.",
    "firstOfKind": "Eines der ersten Open-Weights-Foundation-Modelle, das Verstehen von Sprache, Umgebungsklang und Musik samt zeitbewusstem Reasoning in einem Modell vereint.",
    "sources": [
      "https://github.com/OpenMOSS/MOSS-Audio",
      "https://openmoss.ai/MOSS-Audio/"
    ],
    "disputed": false,
    "verificationNote": "Datum aus dem GitHub-/Projekt-News-Eintrag (Primaerquelle), dort als '2026.4.13' ausgewiesen. Modell fokussiert auf Audio-Verstehen/Reasoning, nicht auf Generierung.",
    "id": "audio-moss-audio-2026-04-13"
  },
  {
    "date": "2026-04-16",
    "datePrecision": "day",
    "modality": "text",
    "name": "Claude Opus 4.7",
    "org": "Anthropic",
    "license": "closed",
    "capability": "Frontier-Modell der Opus-Klasse mit State-of-the-Art-Performance bei langlaufenden, komplexen Coding- und Agenten-Aufgaben. Es bringt verbesserte Vision (Bilder bis ~3,75 Megapixel), deutlich bessere Instruction-Following-Fähigkeiten und Selbstverifikation der eigenen Ausgaben.",
    "whyItMattered": "Opus 4.7 wurde als Modell positioniert, an das man die schwierigste Coding-Arbeit übergeben kann, und setzte zum Releasezeitpunkt Maßstäbe bei nachhaltiger mehrstufiger Agenten-Arbeit, während der Preis (5/25 USD pro Mio. Tokens) unverändert blieb.",
    "firstOfKind": "",
    "sources": [
      "https://www.anthropic.com/news/claude-opus-4-7"
    ],
    "disputed": false,
    "verificationNote": "Datum 16.04.2026 direkt auf der Anthropic-Ankündigungsseite (Primärquelle) bestätigt.",
    "id": "text-claude-opus-4-7-2026-04-16"
  },
  {
    "date": "2026-04-20",
    "datePrecision": "day",
    "modality": "text",
    "name": "Kimi K2.6",
    "org": "Moonshot AI",
    "license": "open",
    "capability": "Open-Weights-Modell auf 1-Billion-Parameter-MoE-Basis (32 Mrd. aktive Parameter), spezialisiert auf agentisches Coding und Langzeit-Aufgaben. Es kann laut Moonshot bis zu rund 13 Stunden durchgehend coden und bringt ein Agent-Swarm-System mit bis zu 300 spezialisierten Sub-Agents und bis zu 4.000 koordinierten Schritten pro Lauf.",
    "whyItMattered": "K2.6 verkleinerte den Abstand zwischen Open-Weights und geschlossenen Frontier-Modellen weiter: Es erreichte laut Berichten Gleichstand mit GPT-5.5 auf SWE-Bench Pro bei rund 80 % geringeren Kosten pro Token und untermauerte die Stärke chinesischer Open-Weights-Modelle bei agentischer Software-Entwicklung.",
    "firstOfKind": "",
    "sources": [
      "https://www.yicaiglobal.com/news/chinas-moonshot-ai-releases-kimi-k26-pushing-boundaries-in-coding-multi-agent-capabilities"
    ],
    "disputed": false,
    "verificationNote": "Release als GA-Modell um den 20.04.2026; Yicai Global datiert auf den 21.04.2026, andere Berichte auf den 20.04.2026 (Entfernung des 'Preview'-Labels). Geringfügige Datumsdiskrepanz von einem Tag; Monatszuordnung gesichert.",
    "id": "text-kimi-k2-6-2026-04-20"
  },
  {
    "date": "2026-04-21",
    "datePrecision": "day",
    "modality": "image",
    "name": "gpt-image-2 (ChatGPT Images 2.0)",
    "org": "OpenAI",
    "license": "closed",
    "capability": "Bildmodell mit integriertem Reasoning (O-Series-Mechanismus / Thinking-Mode), das vor der Generierung Komposition plant, Objektanzahl verifiziert und Prompt-Constraints prueft; nahezu perfektes mehrsprachiges Text-Rendering (ca. 99% ueber Latein, Japanisch, Koreanisch, Hindi, Arabisch u.a.), hohe Aufloesung und konsistente Generierung mehrerer Bilder aus einem Prompt.",
    "whyItMattered": "Uebernahm laut Image-Arena-Leaderboard sofort die Spitze in allen Kategorien mit dem groessten je gemessenen Vorsprung und etablierte Reasoning als zentralen Hebel fuer praezise Instruction-Following und Text-Rendering bei der Bildgenerierung. Loeste die gesamte DALL-E-Generation als Produktionsstandard ab.",
    "firstOfKind": "Erstes weit verbreitetes Bildgenerierungsmodell mit explizitem, der Generierung vorgeschaltetem Reasoning-/Thinking-Schritt.",
    "sources": [
      "https://openai.com/index/introducing-chatgpt-images-2-0/",
      "https://techcrunch.com/2026/04/21/chatgpts-new-images-2-0-model-is-surprisingly-good-at-generating-text/",
      "https://en.wikipedia.org/wiki/GPT_Image"
    ],
    "disputed": false,
    "verificationNote": "Datum (21.04.2026) ueber TechCrunch-Bericht (Silberling, 21.04.2026, via Wikipedia GPT Image zitiert) und die offizielle OpenAI-Ankuendigungsseite (introducing-chatgpt-images-2-0) verifiziert; die OpenAI-Seite liefert bei automatisiertem Abruf nur HTTP 403, ist aber in den Suchergebnissen als Primaerquelle gelistet.",
    "id": "image-gpt-image-2-chatgpt-images-2-0-2026-04-21"
  },
  {
    "date": "2026-04-23",
    "datePrecision": "day",
    "modality": "text",
    "name": "GPT-5.5",
    "org": "OpenAI",
    "license": "closed",
    "capability": "OpenAIs zu diesem Zeitpunkt fähigstes Modell, mit besonders starken Zuwächsen bei agentischem Coding, Computer-Use, Knowledge Work und früher wissenschaftlicher Forschung. Auffällig ist der Sprung bei Long-Context-Reasoning (MRCR v2 bei 1 Mio. Tokens von 36,6 % auf 74,0 %) sowie 82,7 % auf Terminal-Bench 2.0.",
    "whyItMattered": "GPT-5.5 setzte OpenAIs Führungsanspruch bei agentischen und Long-Context-Aufgaben neu und übertraf bei Terminal-Bench konkurrierende Frontier-Modelle wie Claude Opus 4.7 und Gemini 3.1 Pro deutlich. Es definierte den Wettbewerbsmaßstab für das Frühjahr 2026.",
    "firstOfKind": "",
    "sources": [
      "https://openai.com/index/introducing-gpt-5-5/",
      "https://decrypt.co/365333/openai-gpt-5-5-release-agentic-coding-benchmarks",
      "https://en.wikipedia.org/wiki/GPT-5.5"
    ],
    "disputed": false,
    "verificationNote": "Datum 23.04.2026 durch Decrypt und Wikipedia bestätigt, die direkt OpenAIs Ankündigung 'Introducing GPT-5.5' zitieren; die OpenAI-Primärseite war für den Abruf gesperrt (HTTP 403), existiert aber nachweislich. API-Zugang ab 24.04.2026.",
    "id": "text-gpt-5-5-2026-04-23"
  },
  {
    "date": "2026-04-24",
    "datePrecision": "day",
    "modality": "text",
    "name": "DeepSeek V4 (Preview)",
    "org": "DeepSeek",
    "license": "open",
    "capability": "Open-Weights-Flaggschiff in zwei Varianten: V4-Pro (1,6 Bio. Parameter total, 49 Mrd. aktiv) und V4-Flash (284 Mrd. total, 13 Mrd. aktiv), beide standardmäßig mit 1-Mio.-Token-Kontext und neuartigen Attention-Mechanismen. V4-Pro bietet verbesserte agentische Fähigkeiten und Reasoning der Spitzenklasse in Mathematik, STEM und Coding.",
    "whyItMattered": "DeepSeek V4 brachte Frontier-nahe Leistung als Open-Weights-Modell zu drastisch niedrigeren Preisen (rund 0,435/0,87 USD pro Mio. Tokens) und reihte sich auf agentischen Benchmarks neben GPT-5.5 und Claude Opus 4.7 ein. Es verschob die Erwartung, dass Spitzenleistung an geschlossene Modelle gebunden ist.",
    "firstOfKind": "",
    "sources": [
      "https://api-docs.deepseek.com/news/news260424"
    ],
    "disputed": false,
    "verificationNote": "Datum 24.04.2026 in den offiziellen DeepSeek-API-Docs (Primärquelle) bestätigt; als Preview open-sourced mit Gewichten auf Hugging Face.",
    "id": "text-deepseek-v4-preview-2026-04-24"
  },
  {
    "id": "text-mistral-medium-3-5-2026-04-28",
    "date": "2026-04-28",
    "datePrecision": "day",
    "modality": "text",
    "name": "Mistral Medium 3.5",
    "org": "Mistral AI",
    "license": "open",
    "capability": "Frontier-multimodales Modell mit einstellbarem reasoning_effort und 256k Kontext; neuer Standard für Le Chat.",
    "whyItMattered": "Europas wichtigstes Open-Weights-Frontier-Release des Zeitraums.",
    "firstOfKind": "",
    "sources": [
      "https://docs.mistral.ai/models/model-cards/mistral-medium-3-5-26-04"
    ],
    "disputed": false,
    "verificationNote": ""
  },
  {
    "date": "2026-04-30",
    "datePrecision": "day",
    "modality": "text",
    "name": "ERNIE 5.1 Preview",
    "org": "Baidu",
    "license": "closed",
    "capability": "Effizienzoptimiertes MoE-Modell, das gegenüber ERNIE 5.0 die Total-Parameter auf etwa ein Drittel und die aktiven Parameter auf etwa die Hälfte reduziert, dabei mit decoupled fully-asynchronous Reinforcement Learning und skaliertem agentischem Post-Training trainiert wurde.",
    "whyItMattered": "ERNIE 5.1 Preview wurde mit nur rund 6 % der Pre-Training-Kosten vergleichbarer Frontier-Modelle trainiert und erreichte Platz 1 unter den chinesischen Modellen auf dem LMArena-Text-Leaderboard (Platz 13 global) - die höchste Position, die ein chinesisches Lab dort je gehalten hat. Zudem stieg es als erstes chinesisches LLM in die globale Top 5 der Search Arena auf.",
    "firstOfKind": "Erstes chinesisches LLM in den globalen Top 5 der LMArena Search Arena.",
    "sources": [
      "https://ernie.baidu.com/blog/posts/ernie-5.1-preview-0430-release-on-lmarena/",
      "https://www.remio.ai/post/baidu-ernie-5-1-hits-no-1-chinese-model-on-lmarena-built-at-6-of-the-normal-training-cost"
    ],
    "disputed": false,
    "verificationNote": "Datum 30.04.2026 (Preview) über den offiziellen Baidu-ERNIE-Blog bestätigt; die stabile ERNIE-5.1-Version folgte am 08.05.2026. Lizenz/Modellzugang nicht als Open-Weights ausgewiesen, daher als closed eingestuft.",
    "id": "text-ernie-5-1-preview-2026-04-30"
  },
  {
    "date": "2026-05-07",
    "datePrecision": "day",
    "modality": "audio",
    "name": "OpenAI gpt-realtime-2 (mit gpt-realtime-translate und gpt-realtime-whisper)",
    "org": "OpenAI",
    "license": "closed",
    "capability": "Drei neue Audiomodelle in der API. gpt-realtime-2 ist OpenAIs erstes Sprachmodell mit GPT-5-Klasse-Reasoning, einem 128.000-Token-Kontextfenster und einstellbarem Reasoning-Aufwand fuer Live-Sprachdialoge. gpt-realtime-translate uebersetzt gesprochene Sprache aus ueber 70 Eingabesprachen in 13 Ausgabesprachen nahezu in Echtzeit. gpt-realtime-whisper liefert latenzarme Streaming-Transkription, die Sprache live waehrend des Sprechens verschriftlicht.",
    "whyItMattered": "Damit kam erstmals echtes GPT-5-Klasse-Reasoning in gesprochene Live-Konversationen, die das Gespraech aufrechterhalten, Tools aufrufen und Korrekturen oder Unterbrechungen verarbeiten koennen. Zusammen mit dedizierten Echtzeit-Modellen fuer Uebersetzung und Transkription erschloss das eine neue Klasse reaktionsschneller Sprachanwendungen.",
    "firstOfKind": "Erstes OpenAI-Sprachmodell mit GPT-5-Klasse-Reasoning fuer Live-Sprachdialoge.",
    "sources": [
      "https://openai.com/index/advancing-voice-intelligence-with-new-models-in-the-api/",
      "https://techcrunch.com/2026/05/07/openai-launches-new-voice-intelligence-features-in-its-api/"
    ],
    "disputed": false,
    "verificationNote": "Datum aus dem OpenAI-Blog (Primaerquelle) und durch TechCrunch ('May 7, 2026') bestaetigt. Einzelne Sekundaerquellen nennen den 8. Mai fuer die breite API-Verfuegbarkeit; das primaere Ankuendigungsdatum ist der 7. Mai.",
    "id": "audio-openai-gpt-realtime-2-mit-gpt-realtime-translate-und-gpt-realtime-whisper-2026-05-07"
  },
  {
    "date": "2026-05-19",
    "datePrecision": "day",
    "modality": "text",
    "name": "Gemini 3.5 Flash",
    "org": "Google",
    "license": "closed",
    "capability": "Schnelles, kostengünstiges Modell der neuen Gemini-3.5-Generation, das auf agentischen und Coding-Benchmarks (Terminal-Bench 2.1 mit 76,2 %, MCP Atlas mit 83,6 %) das vorherige Gemini 3.1 Pro übertrifft und dabei rund viermal schneller läuft als andere Frontier-Modelle derselben Stufe. Kontextfenster ~1 Mio. Tokens, multimodal (Text, Bild, Audio, Video).",
    "whyItMattered": "Auf der Google I/O 2026 vorgestellt und am selben Tag allgemein verfügbar, zeigte Gemini 3.5 Flash, dass ein Modell der schnellen, günstigen Stufe das Pro-Modell der Vorgängergeneration schlagen kann, und verschärfte den Wettbewerb um effiziente agentische Modelle.",
    "firstOfKind": "",
    "sources": [
      "https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-5/"
    ],
    "disputed": false,
    "verificationNote": "Datum 19.05.2026 (I/O 2026, GA am selben Tag) durch den offiziellen Google-Blog 'Gemini 3.5: frontier intelligence with action' (Primärquelle) bestätigt.",
    "id": "text-gemini-3-5-flash-2026-05-19"
  },
  {
    "date": "2026-05-19",
    "datePrecision": "day",
    "modality": "text",
    "name": "Qwen3.7-Max",
    "org": "Alibaba (Qwen)",
    "license": "closed",
    "capability": "Alibabas proprietäres Flaggschiff-Modell für die Agenten-Ära mit 1-Mio.-Token-Kontextfenster, ausgelegt auf Coding-Agenten, Büro-Automatisierung und Langzeit-Autonomie. Demonstriert wurde ein 35-stündiger, vollständig autonomer Kernel-Optimierungslauf mit über 1.000 Tool-Calls; starke Werte auf SWE-Pro (60,6) und SWE-Multilingual (78,3).",
    "whyItMattered": "Qwen3.7-Max brachte Alibaba als ersten chinesischen Anbieter an die Spitze einer großen Intelligenz-Rangliste und zeigte, dass lange autonome Aufgabenausführung über Stunden hinweg praktikabel wird. Es untermauerte die rasche Aufholjagd chinesischer Labore bei agentischen Frontier-Modellen.",
    "firstOfKind": "",
    "sources": [
      "https://qwen.ai/blog?id=qwen3.7",
      "https://www.alibabacloud.com/blog/qwen3-7-the-agent-frontier_603154"
    ],
    "disputed": false,
    "verificationNote": "Auf dem Alibaba Cloud Summit am 20.05.2026 vorgestellt, API-Verfügbarkeit ab 19.05.2026; offizieller Qwen-Blog 'Qwen3.7: The Agent Frontier' (Primärquelle) datiert auf den 21.05.2026. Datum auf den frühesten bestätigten Verfügbarkeitstag (19.05.2026) gesetzt; proprietär/closed.",
    "id": "text-qwen3-7-max-2026-05-19"
  },
  {
    "date": "2026-05-19",
    "datePrecision": "day",
    "modality": "video",
    "name": "Gemini Omni Flash",
    "org": "Google DeepMind",
    "license": "closed",
    "capability": "Gemini Omni Flash ist das erste Modell der Gemini-Omni-Familie und erzeugt aus beliebiger Kombination von Bild, Audio, Video und Text hochwertige Videos von rund 10 Sekunden mit synchronem Audio. Es ermöglicht konversationelles Editieren der Clips, hält Charakter- und Szenenkonsistenz, ist in Gemins Weltwissen verankert und bettet ein SynthID-Wasserzeichen ein.",
    "whyItMattered": "Google verschob die Videogenerierung von der separaten Veo-Linie in die Gemini-Familie und verband generative Medien direkt mit dem Weltwissen und der konversationellen Bearbeitung des Sprachmodells. Mit sofortiger Verfügbarkeit in Gemini-App, Google Flow und YouTube Shorts brachte es multimodale Video-Erzeugung und chatbasiertes Editieren in Massendistribution.",
    "firstOfKind": "Erstes Modell der Gemini-Omni-Familie, das generative Medien mit Gemins Weltwissen vereint und Video aus jeder Eingabemodalität per Konversation erzeugt und editiert.",
    "sources": [
      "https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-omni/",
      "https://blog.google/innovation-and-ai/sundar-pichai-io-2026/",
      "https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-omni-flash-nano-banana-2-lite/"
    ],
    "disputed": false,
    "note": "Öffentliche Preview (gemini-omni-flash-preview) mit Preis $0,10 pro Sekunde Video am 30.06.2026 gestartet.",
    "verificationNote": "Bestätigt über den offiziellen Google-Blog (blog.google) und die I/O-2026-Keynote von Sundar Pichai, beide mit Datum 19.05.2026; Gemini Omni Flash war ab dem Ankündigungstag in Gemini-App, Google Flow und YouTube Shorts verfügbar. Öffentliche Preview mit Preisangabe ($0,10/Sek.) laut Google-Blog am 30.06.2026.",
    "id": "video-gemini-omni-flash-2026-05-19"
  },
  {
    "id": "text-gemini-spark-2026-05-19",
    "date": "2026-05-19",
    "datePrecision": "day",
    "modality": "text",
    "name": "Gemini Spark",
    "org": "Google",
    "license": "closed",
    "capability": "Immer aktiver persönlicher Agent auf Google-Cloud-VMs, der Langzeit-Aufgaben über Gmail/Docs/Slides und Dritt-Apps via MCP ausführt.",
    "whyItMattered": "Der Consumer-„agentische Ära\"-Launch der I/O 2026.",
    "firstOfKind": "",
    "sources": [
      "https://blog.google/innovation-and-ai/products/gemini-app/next-evolution-gemini-app/"
    ],
    "disputed": false,
    "verificationNote": ""
  },
  {
    "date": "2026-05-20",
    "datePrecision": "day",
    "modality": "audio",
    "name": "Stable Audio 3.0",
    "org": "Stability AI",
    "license": "open",
    "capability": "Modellfamilie zur Audiogenerierung aus vier Modellen: Small SFX, Small, Medium und Large. Erzeugt vollstaendige Kompositionen von bis zu rund sechs Minuten mit erhaltener musikalischer Struktur, mit Variable-Length-Generierung, Audio-Inpainting (Segment-Editing und Fortsetzung) sowie LoRA-Fine-Tuning. Trainiert ausschliesslich auf lizenzierten und Creative-Commons-Daten.",
    "whyItMattered": "Mit dem Sprung von zuvor 47-sekuendigen Clips (Stable Audio Open) auf strukturierte Sechsminueter und der Freigabe von Open Weights fuer Small und Medium, die auf Consumer-Hardware laufen, wurde leistungsfaehige, kommerziell nutzbare Musikgenerierung lokal und rechtssicher verfuegbar.",
    "firstOfKind": "",
    "sources": [
      "https://stability.ai/news-updates/meet-stable-audio-3-the-model-family-built-for-artistic-experimentation-with-open-weight-models",
      "https://techcrunch.com/2026/05/20/stability-ai-release-a-new-audio-model-that-can-create-six-minute-songs/"
    ],
    "disputed": false,
    "verificationNote": "Veroeffentlichungsdatum 'May 20' aus dem Stability-AI-Blog (Primaerquelle); das Jahr 2026 durch TechCrunch und weitere Berichterstattung bestaetigt. Lizenz gemischt: Small und Medium als Open Weights (Community License), Large nur via API/Enterprise.",
    "id": "audio-stable-audio-3-0-2026-05-20"
  },
  {
    "id": "text-grok-build-0-1-2026-05-20",
    "date": "2026-05-20",
    "datePrecision": "day",
    "modality": "text",
    "name": "Grok Build 0.1",
    "org": "xAI",
    "license": "closed",
    "capability": "Agentisches Coding-Modell, von Grund auf für End-to-End-Softwareentwicklung trainiert: plant Aufgaben, führt sie schrittweise aus, debuggt selbst und bindet Entwickler-Tools über MCP ein. Treibt die Grok-Build-CLI an, ab Anfang Juni 2026 öffentlich per API.",
    "whyItMattered": "xAIs erstes eigenständiges Coding-Modell für autonome Software-Agenten — Eintritt ins Rennen um agentische Programmierung gegen Claude Code, Codex & Co.",
    "firstOfKind": "",
    "sources": [
      "https://x.ai/news/grok-build-0-1",
      "https://aimlapi.com/blog/meet-grok-build-0-1-the-model-that-codes-like-an-agent"
    ],
    "disputed": false,
    "verificationNote": "Gestaffelter Rollout: CLI-Beta ~14.5., Modell-Release ~20.5., öffentliche API ~1.6.2026. Quellen: offizielle xAI-Ankündigung (x.ai/news/grok-build-0-1) und API-Listings (Vercel AI Gateway, AI/ML API). Exaktes Modell-Release-Datum aus Sekundärquellen."
  },
  {
    "date": "2026-05-26",
    "datePrecision": "day",
    "modality": "audio",
    "name": "ElevenLabs Music v2",
    "org": "ElevenLabs",
    "license": "closed",
    "capability": "Neues Musikgenerierungsmodell, das innerhalb eines einzelnen Songs das Genre wechseln kann (etwa von Oper zu Heavy Metal und zurueck), schnellen Rap und dichte Textlieferung beherrscht und nicht-musikalische Soundeffekte direkt in den Track einbettet, ohne die musikalische Kohaerenz zu verlieren. Verbessertes Inpainting erlaubt das gezielte Neugenerieren einzelner Abschnitte (z. B. nur der Bridge), und Songs lassen sich Abschnitt fuer Abschnitt aufbauen. Trainiert auf lizenzierten, kommerziell freigegebenen Daten.",
    "whyItMattered": "Music v2 hob KI-Musik von kurzen Clips auf vollstaendige, strukturierte Songs mit dynamischen Genrewechseln und kommerzieller Rechtsfreigabe ohne Sync-Gebuehren und positionierte ElevenLabs als direkten Wettbewerber zu Suno und Udio.",
    "firstOfKind": "",
    "sources": [
      "https://elevenlabs.io/blog/introducing-music-v2",
      "https://techcrunch.com/2026/05/27/elevenlabss-new-music-generation-model-can-switch-genres-mid-track/"
    ],
    "disputed": false,
    "verificationNote": "Datum aus dem ElevenLabs-Blog (Primaerquelle), dort als 'Published May 26, 2026' ausgewiesen (zuletzt aktualisiert 11. Juni 2026); durch TechCrunch bestaetigt.",
    "id": "audio-elevenlabs-music-v2-2026-05-26"
  },
  {
    "date": "2026-05-28",
    "datePrecision": "day",
    "modality": "text",
    "name": "Claude Opus 4.8",
    "org": "Anthropic",
    "license": "closed",
    "capability": "Modell der Opus-Klasse mit Schwerpunkt auf Ehrlichkeit und Zuverlässigkeit: laut Anthropic rund viermal seltener als Opus 4.7 dabei, selbst geschriebene Code-Fehler unkommentiert durchgehen zu lassen. Dazu kommen bessere Reasoning-Werte, ein Fast-Modus mit 2,5-facher Geschwindigkeit und 84 % auf dem Browser-Agenten-Benchmark Online-Mind2Web.",
    "whyItMattered": "Opus 4.8 verschob den Fokus von reiner Benchmark-Leistung hin zu verlässlicher, ehrlicher Code-Generierung und reduzierte fehlerhaftes (deceptive) Verhalten deutlich, was für den produktiven Einsatz in agentischen Coding-Workflows entscheidend ist.",
    "firstOfKind": "",
    "sources": [
      "https://www.anthropic.com/news/claude-opus-4-8"
    ],
    "disputed": false,
    "verificationNote": "Datum 28.05.2026 direkt auf der Anthropic-Ankündigungsseite (Primärquelle) bestätigt.",
    "id": "text-claude-opus-4-8-2026-05-28"
  },
  {
    "date": "2026-05-29",
    "datePrecision": "day",
    "modality": "text",
    "name": "Step 3.7 Flash",
    "org": "StepFun",
    "license": "open",
    "capability": "Vision-Language-MoE-Modell mit 198B Total-Parametern (rund 11B aktiv), das einen 1,8B-Vision-Encoder mit einem 196B-Sprach-Backbone koppelt und Charts, PDFs, UI-Wireframes und App-GUIs ohne separate Vision-API verarbeitet. Ausgelegt auf Coding-Agenten und Such-Workflows.",
    "whyItMattered": "Step 3.7 Flash zeigt, dass ein vergleichsweise kompaktes chinesisches MoE-Modell größere Rivalen schlagen kann: Es meldet eine 100-prozentige Tool-Call-Erfolgsrate und SWE-Bench-Pro-Werte oberhalb von DeepSeek V4 Flash und Gemini 3.5 Flash - bei Auslieferung unter Apache 2.0.",
    "firstOfKind": "",
    "sources": [
      "https://www.marktechpost.com/2026/05/29/stepfun-releases-step-3-7-flash-a-198b-moe-vision-language-model-for-coding-agents-and-search-workflows/",
      "https://www.digitalapplied.com/blog/stepfun-step-3-7-flash-196b-moe-agentic-vision-release"
    ],
    "disputed": false,
    "verificationNote": "Datum 29.05.2026 über MarkTechPost und weitere Fachberichte bestätigt; Lizenz Apache 2.0. Primäre StepFun-Ankündigung nicht direkt abrufbar, daher leicht eingeschränkte Primärquellenlage.",
    "id": "text-step-3-7-flash-2026-05-29"
  },
  {
    "date": "2026-06-01",
    "datePrecision": "day",
    "modality": "text",
    "name": "MiniMax M3",
    "org": "MiniMax",
    "license": "open",
    "capability": "Nativ multimodales Open-Weights-Modell mit der neuen MSA-Architektur (MiniMax Sparse Attention), 1M-Kontextfenster, Bild- und Video-Input sowie Computer-Use, das Frontier-Coding (SWE-Bench Pro 59,0 %) mit langlaufender autonomer Ausführung über 24+ Stunden verbindet.",
    "whyItMattered": "MiniMax bezeichnet M3 als erstes und einziges Open-Weights-Modell, das Frontier-Coding, langes Kontextfenster und native Multimodalität in einer Architektur vereint. Der Per-Token-Rechenaufwand sinkt durch MSA auf etwa 1/20 der Vorgängergeneration, was extrem lange agentische Workflows wirtschaftlich macht.",
    "firstOfKind": "Laut MiniMax erstes Open-Weights-Modell, das Frontier-Coding, 1M-Kontext und native Multimodalität in einer einzigen Architektur kombiniert.",
    "sources": [
      "https://www.minimax.io/blog/minimax-m3",
      "https://www.marktechpost.com/2026/06/01/minimax-releases-minimax-m3-with-msa-architecture-supporting-1m-token-context-native-multimodality-and-agentic-coding/"
    ],
    "disputed": false,
    "verificationNote": "Datum 01.06.2026 über den offiziellen MiniMax-Blog bestätigt; API sofort live, Open-Weights-Gewichte und Technical Report laut MiniMax innerhalb von rund 10 Tagen. Löst MiniMax M2.7 (18.03.2026) als jüngstes Text-Modell ab.",
    "id": "text-minimax-m3-2026-06-01"
  },
  {
    "id": "video-grok-imagine-video-1-5-2026-06-01",
    "date": "2026-06-01",
    "datePrecision": "day",
    "modality": "video",
    "name": "Grok Imagine Video 1.5",
    "org": "xAI",
    "license": "closed",
    "capability": "Bild-zu-Video-Modell: animiert ein Standbild zu flüssigem Clip (1–15 Sek., 480p/720p) und erzeugt dabei in einem Durchgang synchronen Ton — Geräusche, Atmosphäre und lippensynchrone Sprache.",
    "whyItMattered": "xAIs erster ernsthafter Vorstoß in die Liga der Video-Generatoren mit nativem Ton — Bewegtbild samt Soundtrack direkt aus einem Foto, integriert in Grok.",
    "firstOfKind": "",
    "sources": [
      "https://x.ai/news/grok-imagine-1-5",
      "https://the-decoder.com/xai-updates-grok-imagine-to-1-5-with-image-to-video-generation-at-720p-resolution/"
    ],
    "disputed": false,
    "verificationNote": "Preview-Release Anfang Juni 2026. Quellen: offizielle xAI-Ankündigung (x.ai/news/grok-imagine-1-5), Replicate-Modellseite („vor ~2 Wochen veröffentlicht“) und the-decoder (4.6.2026). Exaktes Tagesdatum (31.5.–1.6.) nicht eindeutig."
  },
  {
    "date": "2026-06-02",
    "datePrecision": "day",
    "modality": "text",
    "name": "MAI-Thinking-1",
    "org": "Microsoft AI",
    "license": "closed",
    "capability": "Sparse-MoE-Reasoning-Modell mit rund 35B aktiven und etwa 1T Total-Parametern und 256K-Kontextfenster, ausgelegt auf mehrstufige agentische Aufgaben; vollständig auf kommerziell lizenzierten, nachvollziehbaren Daten trainiert, ohne Distillation aus Drittmodellen.",
    "whyItMattered": "MAI-Thinking-1 ist Microsofts erstes vollwertiges, intern entwickeltes Reasoning-Modell und markiert die Loslösung von OpenAI-Abhängigkeit: Auf SWE-Bench Pro liegt es etwa auf dem Niveau von Claude Opus 4.6 und wird in Blindvergleichen gegenüber Sonnet 4.6 bevorzugt. Trainiert ohne Distillation aus Drittmodellen, betont es saubere Datenherkunft.",
    "firstOfKind": "Erstes von Microsoft AI vollständig in-house entwickeltes Reasoning-/Thinking-Modell, trainiert ohne Distillation aus Drittanbieter-Modellen.",
    "sources": [
      "https://microsoft.ai/news/introducing-mai-thinking-1/",
      "https://microsoft.ai/news/building-a-hillclimbing-machine-launching-seven-new-mai-models/"
    ],
    "disputed": false,
    "verificationNote": "Datum 02.06.2026 (Build 2026) über den offiziellen Microsoft-AI-Blog bestätigt. Zunächst in Private Preview auf Microsoft Foundry; Lizenz proprietär/closed.",
    "id": "text-mai-thinking-1-2026-06-02"
  },
  {
    "date": "2026-06-02",
    "datePrecision": "day",
    "modality": "image",
    "name": "MAI-Image-2.5",
    "org": "Microsoft AI",
    "license": "closed",
    "capability": "Hauseigenes Bildmodell für maximale Fidelity, das sowohl Text-to-Image als auch präzises, kontrollierbares Image-Editing beherrscht. Versteht Szenenstruktur, Licht, Massstab und räumliche Beziehungen; erreichte #3 bei Text-to-Image und #2 auf Arenas Image-Edit-Bestenliste und übertraf Nano Banana Pro.",
    "whyItMattered": "MAI-Image-2.5 war Teil der sieben bei Build 2026 vorgestellten MAI-Modelle und brachte erstmals echtes In-Context-Image-Editing in Microsofts hauseigene Bild-Pipeline, mit Spitzenwerten auf den Arena-Bestenlisten.",
    "firstOfKind": "",
    "sources": [
      "https://microsoft.ai/news/introducing-mai-image-2-5/",
      "https://microsoft.ai/news/building-a-hillclimbing-machine-launching-seven-new-mai-models/"
    ],
    "disputed": false,
    "verificationNote": "Datum 02.06.2026 (Build 2026) gegen die Primärquellen microsoft.ai (\"MAI-Image-2.5 launches at No. 2 for image editing on Arena\" und \"Launching seven new MAI models\") verifiziert.",
    "id": "image-mai-image-2-5-2026-06-02"
  },
  {
    "date": "2026-06-02",
    "datePrecision": "day",
    "modality": "audio",
    "name": "MAI-Voice-2",
    "org": "Microsoft AI",
    "license": "closed",
    "capability": "Bisher ausdrucksstärkstes, natürlich klingendes Text-to-Speech-Modell von Microsoft AI. Unterstützt 15 Sprachen, granulare Emotionssteuerung über Emotion-Tags, Zero-Shot-Voice-Prompting per Referenzaudio sowie Code-Switching für ausgewählte Sprachpaare; niedrige Latenz auch über lange Generierungen.",
    "whyItMattered": "MAI-Voice-2 hob Microsofts hauseigene Sprachsynthese auf ein neues Qualitäts- und Steuerbarkeitsniveau und war Teil der sieben bei Build 2026 vorgestellten MAI-Modelle, die Microsofts eigenständige Modellstrategie untermauerten.",
    "firstOfKind": "",
    "sources": [
      "https://microsoft.ai/news/mai-voice-2/",
      "https://microsoft.ai/news/building-a-hillclimbing-machine-launching-seven-new-mai-models/"
    ],
    "disputed": false,
    "verificationNote": "Datum 02.06.2026 (Build 2026) gegen die Primärquellen microsoft.ai (\"Introducing MAI-Voice-2\" und \"Launching seven new MAI models\") verifiziert. Die angekuendigte Variante MAI-Voice-2-Flash war zum Stichtag nur \"coming soon\" und ist daher nicht als eigenes Release enthalten.",
    "id": "audio-mai-voice-2-2026-06-02"
  },
  {
    "date": "2026-06-02",
    "datePrecision": "day",
    "modality": "text",
    "name": "MAI-Code-1-Flash",
    "org": "Microsoft AI",
    "license": "closed",
    "capability": "Erstes hauseigenes Coding-Modell von Microsoft AI: ein inference-effizientes, agentisches Code-Modell mit 5 Mrd. aktiven Parametern, tief in GitHub Copilot und VS Code integriert. Erreicht 51% auf SWE-Bench Pro bei deutlich geringeren Kosten (Größenordnung vergleichbar mit Haiku).",
    "whyItMattered": "MAI-Code-1-Flash erweiterte die MAI-Familie erstmals um ein spezialisiertes Coding-Modell und bringt hauseigene Microsoft-Modelle direkt in die Entwickler-Workflows von GitHub Copilot und VS Code, ein weiterer Baustein der Lösung von OpenAI-Abhängigkeit.",
    "firstOfKind": "Erstes hauseigenes, agentisches Coding-Modell von Microsoft AI.",
    "sources": [
      "https://microsoft.ai/news/introducingmai-code-1-flash/",
      "https://microsoft.ai/news/building-a-hillclimbing-machine-launching-seven-new-mai-models/"
    ],
    "disputed": false,
    "verificationNote": "Datum 02.06.2026 (Build 2026) gegen die Primärquellen microsoft.ai (\"Introducing MAI-Code-1-Flash\" und \"Launching seven new MAI models\") verifiziert; Rollout in GitHub Copilot/VS Code bestaetigt.",
    "id": "text-mai-code-1-flash-2026-06-02"
  },
  {
    "date": "2026-06-03",
    "datePrecision": "day",
    "modality": "image",
    "name": "Ideogram 4.0",
    "org": "Ideogram",
    "license": "open",
    "capability": "Erstes Open-Weights-Foundation-Modell von Ideogram (9.3B, Single-Stream-Diffusion-Transformer mit 34 Layern und Qwen3-VL-8B-Instruct als Text-Encoder), spezialisiert auf Design-Arbeit: branchenfuehrendes Text-Rendering (0.97 X-Omni English OCR), Bounding-Box-Layout-Kontrolle, strukturiertes JSON-Prompting, native Transparenz und 2K-Aufloesung; laeuft mit Quantisierung auf einer einzelnen 24-GB-GPU.",
    "whyItMattered": "Schloss die Qualitaetsluecke zwischen proprietaeren Frontier-Bildmodellen und dem offenen Oekosystem fuer typografie- und designlastige Aufgaben und belegte als bestes Open-Weights-Modell sofort die Spitze der DesignArena-Bestenliste in dieser Kategorie.",
    "firstOfKind": "Erstes Open-Weights-Modell von Ideogram, das seine Spitzentechnologie fuer Design- und Text-Rendering oeffentlich freigab.",
    "sources": [
      "https://ideogram.ai/news/ideogram-4.0/",
      "https://ideogram.ai/blog/ideogram-4.0/"
    ],
    "disputed": false,
    "verificationNote": "Datum (03.06.2026), Open-Weights-Release, Parameterzahl und Capabilities ueber Ideograms eigene Pressemitteilung bzw. den technischen Blog (ideogram.ai/news bzw. /blog/ideogram-4.0) bestaetigt. Inference-Code Apache 2.0, Gewichte unter Ideogram-Lizenz; insgesamt als open-weight gefuehrt.",
    "id": "image-ideogram-4-0-2026-06-03"
  },
  {
    "date": "2026-06-09",
    "datePrecision": "day",
    "modality": "text",
    "name": "Claude Fable 5",
    "org": "Anthropic",
    "license": "closed",
    "capability": "Anthropics bis dahin fähigstes öffentlich verfügbares Modell, das die neue Mythos-Klasse oberhalb der Opus-Klasse breit zugänglich macht. State-of-the-Art in nahezu allen getesteten Benchmarks, mit besonderer Stärke bei Software-Engineering, Knowledge Work, Vision und autonomer Aufgabenausführung; auf manchen Benchmarks über 10 % besser als Opus 4.8.",
    "whyItMattered": "Mit Fable 5 brachte Anthropic erstmals Mythos-Klasse-Fähigkeit in die allgemeine Nutzung – nur wenige Tage nach einer eigenen Warnung, dass KI zu gefährlich werde. Das Modell startete mit konservativen Schutzmechanismen (Anfragen zu Cyber, Chemie und Biologie werden teils an Opus 4.8 umgeleitet) und definierte ein neues oberes Leistungssegment.",
    "firstOfKind": "Erstes öffentlich zugängliches Modell der Mythos-Klasse von Anthropic (oberhalb der Opus-Klasse).",
    "sources": [
      "https://www.anthropic.com/news/claude-fable-5-mythos-5",
      "https://techcrunch.com/2026/06/09/anthropic-released-claude-fable-5-its-most-powerful-model-publicly-days-after-warning-ai-is-getting-too-dangerous/"
    ],
    "disputed": false,
    "verificationNote": "Datum 09.06.2026 direkt auf der Anthropic-Ankündigungsseite 'Claude Fable 5 and Claude Mythos 5' (Primärquelle) bestätigt; ergänzend TechCrunch und CNBC.",
    "id": "text-claude-fable-5-2026-06-09",
    "note": "Derzeit wegen US-Regulierung nicht verfügbar (Stand: 14. Juni 2026). Kann sich künftig ändern."
  },
  {
    "date": "2026-06-10",
    "datePrecision": "day",
    "modality": "text",
    "name": "DiffusionGemma 26B-A4B",
    "org": "Google DeepMind",
    "license": "open",
    "capability": "Experimentelles offenes Text-Diffusion-Modell auf Gemma-4-Basis mit 26B MoE-Parametern (rund 3,8B aktiv), das 256-Token-Blöcke parallel statt sequenziell generiert und so bis zu 4x schnellere Textgenerierung erreicht (über 1.000 Tokens/s auf einer einzelnen H100).",
    "whyItMattered": "DiffusionGemma bringt das aus der Bildgenerierung bekannte Diffusionsprinzip in ein großes offenes Sprachmodell: Durch bidirektionale Attention kann das Modell unsichere Tokens neu 'verrauschen' und korrigieren. Google positioniert es bewusst als experimentell (geringere Qualität als das autoregressive Gemma 4), demonstriert aber einen alternativen Generierungspfad mit massivem Geschwindigkeitsvorteil.",
    "firstOfKind": "Erstes großes Open-Weights-Text-Diffusionsmodell von Google, das Text in parallelen Blöcken statt autoregressiv Token für Token erzeugt.",
    "sources": [
      "https://blog.google/innovation-and-ai/technology/developers-tools/diffusion-gemma-faster-text-generation/",
      "https://www.marktechpost.com/2026/06/10/google-ai-releases-diffusiongemma-a-26b-moe-open-model-using-text-diffusion-for-up-to-4x-faster-generation/"
    ],
    "disputed": false,
    "verificationNote": "Datum 10.06.2026 über den offiziellen Google-Blog (blog.google) bestätigt; Lizenz Apache 2.0, verfügbar auf Hugging Face, Kaggle und Vertex AI Model Garden.",
    "id": "text-diffusiongemma-26b-a4b-2026-06-10"
  },
  {
    "date": "2026-06-12",
    "datePrecision": "day",
    "modality": "text",
    "name": "Kimi K2.7 Code",
    "org": "Moonshot AI",
    "license": "open",
    "capability": "Coding-fokussiertes agentisches MoE-Modell mit 1T Total-Parametern (32B aktiv, 384 Experts) und 256K-Kontextfenster, das mehrstufig plant, editiert, Tools ausführt und debuggt. Reduziert die Zahl der Thinking-Tokens gegenüber K2.6 um rund 30 Prozent.",
    "whyItMattered": "K2.7 Code ist Moonshots fünfte große Release in unter einem Jahr und meldet +21,8 % auf Kimi Code Bench v2 sowie deutliche Zuwächse bei der MCP-Tool-Nutzung gegenüber K2.6 - ein Open-Weights-Modell, das bei agentischem Coding mit proprietären Spitzenmodellen konkurriert, bei zugleich höherer Token-Effizienz.",
    "firstOfKind": "",
    "sources": [
      "https://huggingface.co/moonshotai/Kimi-K2.7-Code",
      "https://www.marktechpost.com/2026/06/12/moonshot-ai-releases-kimi-k2-7-code-a-coding-model-reporting-21-8-on-kimi-code-bench-v2-over-k2-6/"
    ],
    "disputed": false,
    "verificationNote": "Datum 12.06.2026 über das offizielle Hugging-Face-Model-Card (moonshotai/Kimi-K2.7-Code) und MarkTechPost bestätigt. Lizenz: Modified MIT License.",
    "id": "text-kimi-k2-7-code-2026-06-12"
  },
  {
    "date": "2026-06-13",
    "datePrecision": "day",
    "modality": "text",
    "name": "GLM-5.2",
    "org": "Zhipu AI (Z.ai)",
    "license": "open",
    "capability": "Agentisch ausgerichtetes Coding-Modell auf Basis derselben 744B-MoE-Architektur wie GLM-5, mit einem nutzbaren Kontextfenster von 1M Tokens, bis zu 131.072 Output-Tokens und einem neuen System mit zwei Reasoning-Stufen (High und Max).",
    "whyItMattered": "GLM-5.2 verschiebt die Grenze für Open-Weights-Modelle bei langlebigen Coding-Aufgaben auf Repository-Ebene und erlaubt durch das 1M-Kontextfenster vollständige Plan-then-Execute-Durchläufe. Es ist out of the box mit Claude Code, Cline, OpenCode, Goose und weiteren Agenten-Harnesses kompatibel und treibt Zhipus eigene Coding-Produkte an.",
    "firstOfKind": "",
    "sources": [
      "https://www.digitalapplied.com/blog/glm-5-2-zai-flagship-coding-plan-release",
      "https://aitoolly.com/ai-news/article/2026-06-14-zhipu-ai-releases-glm-52-a-fully-open-source-frontier-model-featuring-a-1m-context-window"
    ],
    "disputed": false,
    "verificationNote": "Veröffentlichungsdatum 13.06.2026 über mehrere Berichte bestätigt; zunächst über alle GLM-Coding-Plan-Stufen verfügbar, die MIT-Open-Weights und die Standalone-API folgen laut Z.ai in der Woche darauf. Eine eigenständige offizielle Z.ai-Blog-URL konnte ich nicht abrufen; Quellen verweisen auf eine offizielle Z.ai-Ankündigung.",
    "id": "text-glm-5-2-2026-06-13"
  },
  {
    "id": "video-seedance-2-0-mini-2026-06-16",
    "date": "2026-06-16",
    "datePrecision": "day",
    "modality": "video",
    "name": "Seedance 2.0 Mini",
    "org": "ByteDance (Dreamina)",
    "license": "closed",
    "capability": "Leichtere, schnellere und günstigere Variante von Seedance 2.0 — rund 2× schneller als Seedance 2.0 Fast, 720p–1080p, 5–12 Sekunden, ab $0,02/Sek.",
    "whyItMattered": "Drückt den Preis für hochwertige KI-Videogenerierung auf wenige Cent pro Sekunde und macht Kurzform-Video damit für die breite Masse zugänglich.",
    "firstOfKind": "",
    "sources": [
      "https://x.com/dreamina_ai/status/2066776953999561044"
    ],
    "disputed": false,
    "verificationNote": "Quelle: offizielle Dreamina-(ByteDance-)Ankündigung auf X, „now live\" (16.06.2026); X nicht maschinell abrufbar, Inhalt vom Nutzer bestätigt. Specs aus frühen Berichten."
  },
  {
    "id": "video-qwen-robot-suite-2026-06-17",
    "date": "2026-06-17",
    "datePrecision": "day",
    "modality": "video",
    "name": "Qwen-Robot Suite",
    "org": "Alibaba (Qwen)",
    "license": "closed",
    "capability": "Alibabas erstes umfassendes Robotik-Paket: drei Foundation-Models für verkörperte KI — Qwen-RobotNav (Navigation per Sprachbefehl), Qwen-RobotManip (Greifarm-Steuerung) und Qwen-RobotWorld (Diffusions-Weltmodell für physikalische Simulation, trainiert auf 8,6 Mio. Video-Text-Paaren, 20+ Roboter-Typen).",
    "whyItMattered": "Holt generative KI aus dem Bildschirm in die physische Welt: Sprachsteuerung, Greifen und ein Video-Weltmodell zur Simulation in einem Stack. Qwen-RobotManip führt laut Alibaba den RoboChallenge-Generalisten-Track (59,83 %). Derzeit Pilot mit ausgewählten Alibaba-Cloud-Kunden.",
    "firstOfKind": "Erstes umfassendes Robotik-/Embodied-Modellpaket von Alibaba (Qwen)",
    "sources": [
      "https://www.alibabacloud.com/blog/qwen-robotworld-boundless-worlds-for-embodied-agents_603268"
    ],
    "disputed": false,
    "verificationNote": "Ankündigung 16.–17. Juni 2026 (Alibaba-Cloud-Blog, 17.6.). Primärquelle bestätigt Suite + RobotWorld (Diffusions-Weltmodell, 8,6 Mio. Video-Text-Paare, 20+ Roboter-Typen). Einzelwerte zu RobotManip (38.100 h Trainingsdaten, Basis Qwen3.5-4B VL, 59,83 % RoboChallenge) aus ergänzenden Angaben, nicht alle im verlinkten Blog. Pilotphase, keine offenen Gewichte. Eingeordnet unter Video (Weltmodell-Linie wie Genie 3)."
  },
  {
    "id": "video-seedance-2-5-2026-06-23",
    "date": "2026-06-23",
    "datePrecision": "day",
    "modality": "video",
    "name": "Seedance 2.5",
    "org": "ByteDance",
    "license": "closed",
    "capability": "Seedance 2.5 erzeugt in einem einzigen Durchgang einen nativen Clip von bis zu 30 Sekunden — ohne Stitching, ohne Schnittkanten — und verarbeitet dabei bis zu 50 multimodale Referenzen (Bilder, Video, Audio, 3D-Blockouts und Stil-Vorlagen) gleichzeitig. Neu sind lokales Editieren (Hintergrund, Produkt oder Person in einer Bildregion tauschen, ohne den Rest des Frames neu zu generieren) und 3D-Blockout-Eingabe, um Kamera und Bildaufbau vorab festzulegen. Rund 20 % bessere Prompt-Treue gegenüber Seedance 2.0; native 4K-Ausgabe wird berichtet, aber nicht offiziell bestätigt.",
    "whyItMattered": "Verdoppelt die native Clip-Länge auf 30 Sekunden in einem Durchgang und vervierfacht die Referenz-Eingaben (12 → 50) — der bislang längste nahtlose KI-Clip und ein neuer Standard für gesteuerte, mehrfach referenzierte Generierung mit regionalem Editieren. Vorgestellt auf der Volcano-Engine-FORCE-Konferenz neben Seedream 5.0, der Seed-2.1-Familie und einem 4K-Upgrade von Seedance 2.0. Seedance 2.0 führt weiter die Artificial-Analysis-Bestenliste an; 2.5 baut diesen Vorsprung aus.",
    "firstOfKind": "Erster nativer 30-Sekunden-Clip in einem einzigen Durchgang",
    "sources": [
      "https://www.theinformation.com/briefings/bytedance-unveils-seedance-2-5-video-model",
      "https://www.explainx.ai/blog/seedance-2-5-bytedance-30-second-4k-ai-video-2026"
    ],
    "disputed": false,
    "note": "Globale Enterprise-Beta; öffentlicher Start für Anfang Juli 2026 angekündigt (Volcano Engine).",
    "verificationNote": "Vorgestellt am 23.06.2026 auf der Volcano-Engine-FORCE-Konferenz in Peking (zuerst von The Information gemeldet). Kein offizieller ByteDance-Seed-Blogeintrag zu 2.5 verfügbar (Modell in Enterprise-Beta); Specs über mehrere Sekundärquellen bestätigt (30 s nativ in einem Durchgang, bis zu 50 Referenzen, lokales Editieren, 3D-Blockout, ~20 % bessere Prompt-Treue). Native 4K für 2.5 wird berichtet, aber nicht offiziell bestätigt (4K ist für Seedance 2.0 offiziell)."
  },
  {
    "id": "text-gpt-5-5-cyber-2026-06-22",
    "date": "2026-06-22",
    "datePrecision": "day",
    "modality": "text",
    "name": "GPT-5.5-Cyber",
    "org": "OpenAI",
    "license": "closed",
    "capability": "Auf Cybersicherheit spezialisiertes Modell, das Schwachstellen in großen Codebasen nicht nur findet, sondern in einer kontrollierten Sandbox validiert und anschließend Patches entwickelt und testet — ein durchgehender Erkennen-→-Beheben-Workflow. Laut OpenAI das bislang stärkste Modell zum Auffinden und Patchen von Software-Schwachstellen. Voll freigeschaltet am 22.06.2026 zusammen mit der Initiative „Patch the Planet\" und einem Cyber Partner Program.",
    "whyItMattered": "Verschiebt den Schwerpunkt von reiner Erkennung zur automatisierten Behebung — KI patcht Sicherheitslücken, statt sie nur aufzuspüren. OpenAIs Antwort auf Anthropics Mythos im Wettlauf um defensive Cyber-KI. Der Zugang ist streng beschränkt über „Trusted Access for Cyber\" (geprüfte Organisationen, verpflichtende Advanced Account Security), um Missbrauch für Angriffe zu begrenzen.",
    "firstOfKind": "",
    "sources": [
      "https://openai.com/index/gpt-5-5-with-trusted-access-for-cyber/",
      "https://thehackernews.com/2026/06/openai-expands-daybreak-with-gpt-55.html"
    ],
    "disputed": false,
    "note": "Kein offener Zugang — nur für verifizierte Verteidiger über „Trusted Access for Cyber\" (Advanced Account Security verpflichtend).",
    "verificationNote": "Volle Veröffentlichung am 22.06.2026 über OpenAI (Primärseite maschinell nicht abrufbar, HTTP 403) sowie The Hacker News und SiliconANGLE bestätigt. Teil der Daybreak-Initiative, zusammen mit „Patch the Planet\" und Cyber Partner Program; gated über Trusted Access for Cyber. Eingeordnet unter Text (spezialisiertes LLM für Code/Cyber)."
  },
  {
    "id": "text-ornith-1-0-2026-06-25",
    "date": "2026-06-25",
    "datePrecision": "day",
    "modality": "text",
    "name": "Ornith-1.0",
    "org": "DeepReinforce",
    "license": "open",
    "capability": "Selbst-verbessernde, quelloffene Modellfamilie für agentisches Programmieren — vom 9B-Dense-Modell für Edge-Geräte bis zum 397B-MoE-Spitzenmodell (zudem 31B Dense und 35B MoE), aufgebaut auf Gemma 4 und Qwen 3.5. Neuartiger Trainingsansatz: Im RL erzeugt das Modell nicht nur die Lösung, sondern auch das aufgabenspezifische Scaffold (den Harness), das diese Lösung steuert, und optimiert beides gemeinsam. Das 397B-Modell erreicht 77,5 auf Terminal-Bench 2.1 und 82,4 auf SWE-Bench Verified.",
    "whyItMattered": "Erste offene Modellfamilie, die ihren eigenen RL-Harness lernt statt eines von Hand gebauten — ein neuer Pfad zu selbst-verbesserndem Training. Setzt den Open-Source-Bestwert für agentisches Coding über mehrere Größen und erreicht das Niveau der vorigen Frontier-Generation (Claude Opus 4.7); das 9B-Edge-Modell schlägt deutlich größere Modelle wie Gemma 4-31B.",
    "firstOfKind": "Erste offene Modellfamilie, die ihre eigenen RL-Scaffolds (Task-Harnesses) lernt",
    "sources": [
      "https://deep-reinforce.com/ornith_1_0.html",
      "https://www.marktechpost.com/2026/06/25/deepreinforce-releases-ornith-1-0-an-open-source-coding-model-family-that-learns-its-own-rl-scaffolds/",
      "https://huggingface.co/collections/deepreinforce-ai/ornith-10"
    ],
    "disputed": false,
    "note": "Offene Gewichte (MIT) auf Hugging Face verfügbar.",
    "verificationNote": "Veröffentlicht am 25.06.2026 (DeepReinforce-Blog; unabhängig u. a. von MarkTechPost am selben Tag berichtet). Offene Gewichte (MIT) auf Hugging Face (deepreinforce-ai/Ornith-1.0) bestätigt. Benchmark-Werte (Terminal-Bench 2.1, SWE-Bench Verified) sind Hersteller-Angaben und noch nicht durch Dritte (z. B. Artificial Analysis) bestätigt; laut eigener Tabelle liegt das 397B-Modell unter Claude Opus 4.8."
  },
  {
    "id": "video-seedance-1-0-2025-06-11",
    "date": "2025-06-11",
    "datePrecision": "day",
    "modality": "video",
    "name": "Seedance 1.0",
    "org": "ByteDance",
    "license": "closed",
    "capability": "Erstes Modell der Seedance-Reihe: natives Multi-Shot-Erzählvideo aus Text und Bild in 1080p, ein 5-Sekunden-Clip in rund 41 Sekunden, mit kohärenten Kamera- und Szenenwechseln innerhalb eines Prompts.",
    "whyItMattered": "Übernahm bei Erscheinen gleichzeitig die Spitze der Artificial-Analysis-Ranglisten für Text-zu-Video und Bild-zu-Video und wurde zum dominierenden chinesischen Frontier-Videomodell 2025 — die Grundlage der später hier gelisteten Seedance 2.0/2.5.",
    "firstOfKind": "Erstes Videomodell, das natives Multi-Shot-Storytelling als Standard zeigte",
    "sources": [
      "https://seed.bytedance.com/en/blog/tech-report-of-seedance-1-0-is-now-publicly-available"
    ],
    "disputed": false,
    "verificationNote": "Veröffentlichung/Tech-Report 11.06.2025 über offiziellen ByteDance-Seed-Blog bestätigt. Spitzenplätze der AA-Ranglisten (T2V und I2V) sind Herstellerangaben."
  },
  {
    "id": "image-nano-banana-2025-08-26",
    "date": "2025-08-26",
    "datePrecision": "day",
    "modality": "image",
    "name": "Nano Banana (Gemini 2.5 Flash Image)",
    "org": "Google",
    "license": "closed",
    "capability": "Konversationelle Bildgenerierung und punktgenaue Bearbeitung per natürlicher Sprache mit starker Charakter- und Motivkonsistenz über mehrere Edits hinweg — viral als „Nano Banana\" bekannt geworden.",
    "whyItMattered": "Der Bildbearbeitungs-Durchbruch 2025: sofort Platz 1 in der LMArena-Bildbearbeitung, über 23 Mio. neue Gemini-Nutzer und 500 Mio. erzeugte Bilder in zwei Wochen. Machte mehrstufiges, weltwissen-gestütztes Editieren massentauglich. Bislang war hier nur der Nachfolger „Nano Banana 2\" gelistet.",
    "firstOfKind": "Erstes Bildmodell, das konversationelles Mehrfach-Editieren mit Konsistenz mainstreamfähig machte",
    "sources": [
      "https://developers.googleblog.com/introducing-gemini-2-5-flash-image/"
    ],
    "disputed": false,
    "verificationNote": "Veröffentlichung 26.08.2025 über Google-Developers-Blog bestätigt. „Nano Banana\" war zunächst Spitzname, später offizielle Bezeichnung für Gemini 2.5 Flash Image."
  },
  {
    "id": "image-seedream-4-0-2025-09-09",
    "date": "2025-09-09",
    "datePrecision": "day",
    "modality": "image",
    "name": "Seedream 4.0",
    "org": "ByteDance",
    "license": "closed",
    "capability": "Einheitliche Architektur für Text-zu-Bild und allgemeine Bildbearbeitung in einem Modell, nativ bis 4K, mit über 10× schnellerer Inferenz als Seedream 3.0.",
    "whyItMattered": "ByteDances Flaggschiff-Bildmodell und führendes nicht-westliches Frontier-System — führte Bild-Arenen an und wurde zum wichtigsten Markt-Rivalen von Googles Nano Banana. Seedream-Bildmodelle fehlten hier bislang vollständig (nur die Seedance-Videoreihe war vertreten).",
    "firstOfKind": "Erstes Modell eines chinesischen Labors an der Spitze globaler Bild-Arenen",
    "sources": [
      "https://seed.bytedance.com/en/blog/seedream-4-0-officially-released-beyond-drawing-into-imagination"
    ],
    "disputed": false,
    "verificationNote": "Veröffentlichung 09.09.2025 über offiziellen ByteDance-Seed-Blog bestätigt."
  },
  {
    "id": "video-minimax-hailuo-02-2025-06-18",
    "date": "2025-06-18",
    "datePrecision": "day",
    "modality": "video",
    "name": "MiniMax Hailuo 02",
    "org": "MiniMax",
    "license": "closed",
    "capability": "Natives 1080p-Video, 6–10 Sekunden, mit neuer NCR-Architektur (Noise-aware Compute Redistribution) — rund 3× mehr Parameter und 4× mehr Trainingsdaten als Hailuo-01 bei 2,5× besserer Effizienz.",
    "whyItMattered": "Generationssprung gegenüber dem hier gelisteten Hailuo Video-01: erreichte Platz 2 der AA-Video-Arena und unterbot Veo 3 deutlich im Preis — ein Wendepunkt für „Frontier-Qualität zum kleinen Preis\".",
    "firstOfKind": "NCR-Architektur (Noise-aware Compute Redistribution)",
    "sources": [
      "https://www.minimax.io/news/minimax-hailuo-02"
    ],
    "disputed": false,
    "verificationNote": "Veröffentlichung 18.06.2025 über offizielle MiniMax-News bestätigt. Ranglisten- und Effizienzangaben vom Hersteller."
  },
  {
    "id": "video-luma-ray3-2025-09-18",
    "date": "2025-09-18",
    "datePrecision": "day",
    "modality": "video",
    "name": "Luma Ray3",
    "org": "Luma AI",
    "license": "closed",
    "capability": "„Reasoning\"-Videomodell, das eigene Ausgaben bewertet und nachbessert, und das erstmals echtes 10/12/16-Bit-HDR-Video (ACES2065-1) erzeugt.",
    "whyItMattered": "Stärkster Luma-Meilenstein seit der hier gelisteten Dream Machine: bringt Selbstbewertung („Reasoning\") und studiotaugliches HDR in die Videogenerierung.",
    "firstOfKind": "Erstes „Reasoning\"-Videomodell und erstes mit hochwertigem 16-Bit-HDR",
    "sources": [
      "https://lumalabs.ai/ray",
      "https://www.businesswire.com/news/home/20250918470219/en/"
    ],
    "disputed": false,
    "verificationNote": "Ankündigung 18.09.2025 (Luma AI, über Businesswire) bestätigt. „Erstes Reasoning-Videomodell\" und 16-Bit-HDR sind Herstellerangaben."
  },
  {
    "id": "video-runway-aleph-2025-07-25",
    "date": "2025-07-25",
    "datePrecision": "day",
    "modality": "video",
    "name": "Runway Aleph",
    "org": "Runway",
    "license": "closed",
    "capability": "In-Context-Videobearbeitung: Objekte hinzufügen, entfernen oder verändern, neue Kamerawinkel einer Szene erzeugen, Ausleuchtung und Stil bestehenden Materials ändern.",
    "whyItMattered": "Anderes Paradigma als die hier gelisteten Gen-1 bis Gen-4 (Clip-Generierung): ein universelles Modell zum Bearbeiten vorhandener Videos. Eröffnete „Multi-Task-Videobearbeitung\" als eigene Kategorie.",
    "firstOfKind": "Erstes leistungsfähiges allgemeines In-Context-Videobearbeitungsmodell",
    "sources": [
      "https://runwayml.com/research/introducing-runway-aleph"
    ],
    "disputed": false,
    "verificationNote": "Veröffentlichung 25.07.2025 über offizielle Runway-Research-Seite bestätigt."
  },
  {
    "id": "video-meta-movie-gen-2024-10-04",
    "date": "2024-10-04",
    "datePrecision": "day",
    "modality": "video",
    "name": "Meta Movie Gen",
    "org": "Meta",
    "license": "closed",
    "capability": "Bis zu 16 Sekunden Video in 1080p mit synchron erzeugtem nativem Audio, personalisiertes Video aus einem einzelnen Foto und instruktionsbasierte Videobearbeitung.",
    "whyItMattered": "Setzte den Forschungsmaßstab für gemeinsame Video-und-Audio-Generierung rund acht Monate bevor Veo 3 dies produktisierte — breit als Referenz zitiert, obwohl nie öffentlich veröffentlicht.",
    "firstOfKind": "Erstes Frontier-Labor-Modell mit gemeinsam erzeugtem synchronem Ton zum Video plus Ein-Foto-Personalisierung",
    "sources": [
      "https://ai.meta.com/research/publications/movie-gen-a-cast-of-media-foundation-models/"
    ],
    "disputed": false,
    "note": "Forschungsmodell — nie öffentlich veröffentlicht.",
    "verificationNote": "Vorgestellt 04.10.2024 über Meta-AI-Research bestätigt. Forschungsmodell ohne öffentliches Release."
  },
  {
    "id": "text-grok-4-2025-07-09",
    "date": "2025-07-09",
    "datePrecision": "day",
    "modality": "text",
    "name": "xAI Grok 4",
    "org": "xAI",
    "license": "closed",
    "capability": "Frontier-Reasoning-Modell; laut xAI erstes mit rund 50 % auf „Humanity's Last Exam\" und 100 % auf AIME 2025.",
    "whyItMattered": "Schließt die Lücke zwischen dem hier gelisteten Grok 3 und Grok Build 0.1: bei Erscheinen das stärkste veröffentlichte Frontier-Benchmark-Profil von xAI.",
    "firstOfKind": "Erstes Modell, das rund 50 % auf „Humanity's Last Exam\" erreichte",
    "sources": [
      "https://x.ai/news/grok-4"
    ],
    "disputed": false,
    "verificationNote": "Veröffentlichung 09.07.2025 über offizielle xAI-News bestätigt. Benchmark-Werte (HLE, AIME) sind Herstellerangaben."
  },
  {
    "id": "text-gpt-4-5-2025-02-27",
    "date": "2025-02-27",
    "datePrecision": "day",
    "modality": "text",
    "name": "GPT-4.5",
    "org": "OpenAI",
    "license": "closed",
    "capability": "OpenAIs größtes nicht-Reasoning-Modell („Orion\") — Höhepunkt des reinen, unüberwachten Pretraining-Scalings: breiteres Wissen und natürlicheres Gespräch, aber kein spezialisiertes Reasoning.",
    "whyItMattered": "Historischer Wendepunkt: der größte und letzte „Scale-up-Pretraining\"-Versuch, bevor OpenAI vollständig auf Reasoning-Modelle umschwenkte. Wurde später wieder eingestellt.",
    "firstOfKind": "",
    "sources": [
      "https://openai.com/index/introducing-gpt-4-5/"
    ],
    "disputed": false,
    "note": "Inzwischen eingestellt (deprecatet).",
    "verificationNote": "Veröffentlichung 27.02.2025 über OpenAI bestätigt."
  },
  {
    "id": "text-google-gemma-2024-02-21",
    "date": "2024-02-21",
    "datePrecision": "day",
    "modality": "text",
    "name": "Google Gemma",
    "org": "Google",
    "license": "open",
    "capability": "Googles erste offene LLM-Familie (2B/7B), abgeleitet aus der Gemini-Forschung, mit offenen Gewichten zur freien und kommerziellen Nutzung.",
    "whyItMattered": "Markiert Googles Eintritt in das offene Modell-Rennen (als Antwort auf Meta und Mistral). Bis dahin war kein offenes Google-Modell vertreten.",
    "firstOfKind": "Googles erstes offenes Sprachmodell",
    "sources": [
      "https://blog.google/technology/developers/gemma-open-models/"
    ],
    "disputed": false,
    "verificationNote": "Veröffentlichung 21.02.2024 über offiziellen Google-Blog bestätigt."
  },
  {
    "id": "text-phi-3-mini-2024-04-23",
    "date": "2024-04-23",
    "datePrecision": "day",
    "modality": "text",
    "name": "Microsoft Phi-3 (Phi-3-mini)",
    "org": "Microsoft",
    "license": "open",
    "capability": "3,8-Mrd.-Parameter-Open-SLM, das die Leistung deutlich größerer Modelle erreicht und lokal auf einem Smartphone läuft.",
    "whyItMattered": "Etablierte „Small Language Models\" als ernsthafte Fähigkeitsstufe — leistungsfähige KI ohne Cloud, direkt auf dem Gerät. Bislang war kein Phi-Modell vertreten.",
    "firstOfKind": "Wegweisendes SLM-auf-dem-Gerät",
    "sources": [
      "https://azure.microsoft.com/en-us/blog/introducing-phi-3-redefining-whats-possible-with-slms/"
    ],
    "disputed": false,
    "verificationNote": "Veröffentlichung 23.04.2024 über Microsoft-Azure-Blog bestätigt."
  },
  {
    "id": "audio-kyutai-moshi-2024-07-03",
    "date": "2024-07-03",
    "datePrecision": "day",
    "modality": "audio",
    "name": "Kyutai Moshi",
    "org": "Kyutai",
    "license": "open",
    "capability": "Voll-duplexes Echtzeit-Sprache-zu-Sprache-Dialogmodell (rund 200 ms Latenz) mit dem Mimi-Neural-Codec — hört und spricht gleichzeitig, ohne starres Abwechseln.",
    "whyItMattered": "Erstes offen testbares Echtzeit-Voll-Duplex-Sprach-LLM, noch vor der GA der OpenAI Realtime API — und mit offenen Gewichten, anders als GPT-4o-Sprache.",
    "firstOfKind": "Erstes Echtzeit-Voll-Duplex-Sprachdialog-Foundation-Model",
    "sources": [
      "https://github.com/kyutai-labs/moshi",
      "https://arxiv.org/abs/2410.00037"
    ],
    "disputed": false,
    "note": "Offene Gewichte ab 18.09.2024.",
    "verificationNote": "Öffentliche Demo 03.07.2024; offene Gewichte und Tech-Report 18.09.2024 (Kyutai). Latenz- und Architekturangaben aus dem Moshi-Bericht."
  },
  {
    "id": "audio-seamless-m4t-2023-08-22",
    "date": "2023-08-22",
    "datePrecision": "day",
    "modality": "audio",
    "name": "Meta SeamlessM4T",
    "org": "Meta",
    "license": "open",
    "capability": "Ein einziges multimodales Modell für Sprach- und Text-Übersetzung/Transkription über rund 100 Sprachen (ASR, Sprache-zu-Text, Sprache-zu-Sprache, Text-zu-Sprache, Text-zu-Text).",
    "whyItMattered": "Erstes All-in-One-Modell für mehrsprachige, multimodale Übersetzung — ersetzte kaskadierte ASR→MT→TTS-Pipelines durch ein einziges Modell. Grundlage der späteren expressiven und streamenden „Seamless\"-Modelle.",
    "firstOfKind": "Erstes einheitliches multimodales und mehrsprachiges Sprachübersetzungsmodell",
    "sources": [
      "https://ai.meta.com/blog/seamless-m4t/"
    ],
    "disputed": false,
    "note": "Offene Gewichte unter CC-BY-NC (nicht-kommerziell).",
    "verificationNote": "Veröffentlichung 22.08.2023 über Meta-AI bestätigt."
  },
  {
    "id": "text-gpt-5-6-2026-07-09",
    "date": "2026-07-09",
    "datePrecision": "day",
    "modality": "text",
    "name": "GPT-5.6 (Sol / Terra / Luna)",
    "org": "OpenAI",
    "license": "closed",
    "capability": "Öffentlicher Launch der Modellfamilie mit drei Stufen: Sol (Flaggschiff, $5/$30 pro 1M Token), Terra (ausgewogen, $2,50/$15) und Luna (schnell und günstig, $1/$6). Ab 09.07.2026 für ChatGPT-, Codex- und API-Nutzer verfügbar. Neu sind zwei Reasoning-Modi — „max\" (maximale Denkzeit für Sol) und „ultra\" (Subagenten teilen komplexe Aufgaben parallel auf) — sowie explizite Cache-Breakpoints (mind. 30 Min. TTL) und ein verstärkter Safety-Stack.",
    "whyItMattered": "Sol ist laut OpenAI das bislang stärkste Modell des Hauses mit agentischen Fortschritten in Coding, Biologie und Cybersicherheit; Terra erreicht GPT-5.5-Niveau zum halben Preis. Bemerkenswert ist der Weg dorthin: erst ab 26.06. nur ~20 von der US-Regierung genehmigte Partner im Limited Preview, dann am 09.07. öffentlicher Launch — ein staatlich gesteuerter Zugang, der sich schrittweise öffnete.",
    "firstOfKind": "",
    "sources": [
      "https://openai.com/index/previewing-gpt-5-6-sol/",
      "https://deploymentsafety.openai.com/gpt-5-6-preview",
      "https://venturebeat.com/technology/openai-unveils-gpt-5-6-sol-terra-and-luna-models-but-only-accessible-to-limited-preview-partners-for-now-per-us-gov"
    ],
    "disputed": false,
    "note": "Öffentlicher Launch am 09.07.2026 für ChatGPT, Codex und API. Zuvor ab 26.06.2026 nur im Limited Preview für ~20 von der US-Regierung genehmigte Partner; allgemeine Verfügbarkeit (GA) laut OpenAI in den Wochen danach.",
    "verificationNote": "Öffentlicher Launch (Sol/Terra/Luna) am 09.07.2026 über mehrere Berichte bestätigt (Preview-Ankündigung 26.06., OpenAI). Primärseite maschinell nicht abrufbar (HTTP 403); Specs (Preise, „max\"/„ultra\"-Reasoning) über OpenAI-System-Card und Berichte (VentureBeat, MacRumors, Axios) bestätigt. Eintrag auf das offizielle Release-Datum 09.07. gesetzt (zuvor als Preview auf den 26.06. datiert)."
  },
  {
    "id": "text-claude-sonnet-5-2026-06-30",
    "date": "2026-06-30",
    "datePrecision": "day",
    "modality": "text",
    "name": "Claude Sonnet 5",
    "org": "Anthropic",
    "license": "closed",
    "capability": "Bisher agentischstes Sonnet-Modell: plant eigenständig, nutzt Werkzeuge wie Browser und Terminals und arbeitet autonom auf einem Niveau, das vor wenigen Monaten noch größere, teurere Modelle erforderte. Einführungspreis 2/10 USD pro Mio. Tokens (regulär 3/15, bis 31.08.2026) und neues Standardmodell für Free- und Pro-Nutzer.",
    "whyItMattered": "Erreicht annähernd die Leistung von Opus 4.8 zu deutlich niedrigerem Preis — die Grenze zwischen mittlerer Sonnet- und Spitzen-Opus-Klasse verschwimmt weiter. Agentische Fähigkeiten (Coding, Tool-Use, Reasoning) werden damit für breite, kostensensible Einsätze praktikabel.",
    "firstOfKind": "",
    "sources": [
      "https://www.anthropic.com/news/claude-sonnet-5"
    ],
    "disputed": false,
    "verificationNote": "Datum 30.06.2026 direkt auf der Anthropic-Ankündigungsseite (Primärquelle) bestätigt."
  },
  {
    "id": "text-seed-2-1-pro-2026-06-24",
    "date": "2026-06-24",
    "datePrecision": "day",
    "modality": "text",
    "name": "Seed 2.1 Pro",
    "org": "ByteDance (Volcano Engine / Doubao)",
    "license": "closed",
    "capability": "Für „Coding und Agent\" ausgelegtes Flaggschiff-Modell mit Fortschritten bei Engineering-Lieferung, Agent-Aufgaben über lange Ketten und multimodalem Verständnis. Verfügbar über Volcano Engine / Volcano Ark; Preis ca. 6 Yuan (~$0,85) pro Mio. Input- und 30 Yuan (~$4,15) pro Mio. Output-Tokens.",
    "whyItMattered": "ByteDance positioniert Seed 2.1 Pro als auf mehreren Coding-, Agent- und Multimodal-Benchmarks mit Claude Opus 4.6 konkurrenzfähig — bei rund 80 % niedrigeren Gesamtkosten. Drückt den Preis für agentische Frontier-Coding-Leistung weiter nach unten.",
    "firstOfKind": "",
    "sources": [
      "https://datanorth.ai/news/bytedance-releases-seed-2-1-pro-and-seed-2-1-turbo",
      "https://dataconomy.com/2026/06/24/bytedance-launches-doubao-2-1-pro-language-model/"
    ],
    "disputed": false,
    "verificationNote": "Veröffentlichung am 24.06.2026 auf der Volcano-Engine-FORCE-Konferenz; Datum über mehrere unabhängige Berichte bestätigt. Eine englischsprachige offizielle Primärquelle (Volcano Engine) konnte ich nicht direkt abrufen."
  },
  {
    "id": "text-seed-2-1-turbo-2026-06-24",
    "date": "2026-06-24",
    "datePrecision": "day",
    "modality": "text",
    "name": "Seed 2.1 Turbo",
    "org": "ByteDance (Volcano Engine / Doubao)",
    "license": "closed",
    "capability": "Schnellere, günstigere Variante von Seed 2.1 Pro für hochfrequente Enterprise-Workloads — etwa halber Preis bei auf Durchsatz optimierter Latenz.",
    "whyItMattered": "Bringt die Seed-2.1-Generation (Coding, Agent, multimodales Verständnis) in den Hochvolumen-Produktivbetrieb und senkt die Kosten pro Aufgabe für Agenten-Pipelines im großen Maßstab.",
    "firstOfKind": "",
    "sources": [
      "https://datanorth.ai/news/bytedance-releases-seed-2-1-pro-and-seed-2-1-turbo",
      "https://dataconomy.com/2026/06/24/bytedance-launches-doubao-2-1-pro-language-model/"
    ],
    "disputed": false,
    "verificationNote": "Veröffentlichung am 24.06.2026 auf der Volcano-Engine-FORCE-Konferenz; Datum über mehrere unabhängige Berichte bestätigt. Eine englischsprachige offizielle Primärquelle (Volcano Engine) konnte ich nicht direkt abrufen."
  },
  {
    "id": "image-nano-banana-2-lite-2026-06-30",
    "date": "2026-06-30",
    "datePrecision": "day",
    "modality": "image",
    "name": "Nano Banana 2 Lite (Gemini 3.1 Flash Lite Image)",
    "org": "Google DeepMind",
    "license": "closed",
    "capability": "Schnellste und günstigste Variante der Nano-Banana-2-Reihe für Bilderzeugung und -bearbeitung: rund 4 Sekunden Latenz, $0,034 pro 1.000 Bilder. Verfügbar in Google AI Studio, der Gemini-API, der Gemini Enterprise Agent Platform und über Consumer-Flächen (Suche, Gemini-App, Google Photos, NotebookLM, Stitch, Google Flow, Google Ads).",
    "whyItMattered": "Drückt hochwertige Text-zu-Bild-Generierung auf Bruchteile eines Cents pro Bild bei ~4 Sekunden Latenz und macht sie damit für Massen- und Echtzeit-Anwendungen quer durch Googles Produktpalette praktikabel.",
    "firstOfKind": "",
    "sources": [
      "https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-omni-flash-nano-banana-2-lite/"
    ],
    "disputed": false,
    "verificationNote": "Datum 30.06.2026 direkt im offiziellen Google-Blog (blog.google) bestätigt; Modell-ID gemini-3.1-flash-lite-image."
  },
  {
    "id": "text-longcat-2-0-2026-06-29",
    "date": "2026-06-29",
    "datePrecision": "day",
    "modality": "text",
    "name": "LongCat-2.0",
    "org": "Meituan",
    "license": "open",
    "capability": "Quelloffenes 1,6-Billionen-Parameter-MoE-Modell (aktiviert ~48B Parameter pro Token, 33–56B je nach Komplexität) mit nativem 1-Mio.-Token-Kontext, veröffentlicht unter MIT-Lizenz auf GitHub und Hugging Face. Auf agentisches Coding ausgelegt: SWE-bench Pro 59,5, Terminal-Bench 70,8.",
    "whyItMattered": "Bringt ein Open-Weights-Modell nahe an die Frontier-Coding-Leistung geschlossener Spitzenmodelle (SWE-bench Pro 59,5 vs. 58,6 bei GPT-5.5) — und ist laut Meituan das erste Billionen-Parameter-Modell, das vollständig auf einem inländischen chinesischen Chip-Cluster (~50.000 Karten) trainiert und betrieben wurde.",
    "firstOfKind": "Erstes Billionen-Parameter-Modell, das komplett auf inländischen chinesischen KI-Chips trainiert und ausgeführt wird.",
    "sources": [
      "https://www.longcatai.org/models/longcat-2",
      "https://venturebeat.com/technology/meituan-open-sources-longcat-2-0-the-1-6t-near-frontier-agentic-coding-model-thats-been-leading-openrouter-trained-entirely-on-chinese-chips"
    ],
    "disputed": false,
    "verificationNote": "Veröffentlichung am 29.06.2026 auf GitHub, Hugging Face und longcatai.org; einzelne Quellen nennen den 30.06. für die Open-Weights. MIT-Lizenz. Benchmarks laut Meituan/longcatai.org."
  },
  {
    "id": "text-claude-fable-5-redeploy-2026-07-01",
    "date": "2026-07-01",
    "datePrecision": "day",
    "modality": "text",
    "name": "Claude Fable 5 (Wiederveröffentlichung)",
    "org": "Anthropic",
    "license": "closed",
    "capability": "Nach 19 Tagen offline wieder global verfügbar: Anthropic bringt Fable 5 am 01.07.2026 auf Claude-Plattform, Claude.ai, Claude Code und Claude Cowork zurück — mit einem neuen Sicherheits-Klassifikator, der die zur Sperre führende Technik (Umgehung der Safeguards zur Schwachstellensuche) in über 99 % der Fälle blockiert.",
    "whyItMattered": "Erster Fall, in dem ein Frontier-Modell per US-Exportkontrolle vom Netz genommen und später wieder freigegeben wurde: am 12.06.2026 nach einem Amazon-Sicherheitsbericht sofort gesperrt (Fable 5 und Mythos 5), am 30.06. Kontrollen aufgehoben, am 01.07. redeployed. Zeigt, wie unmittelbar Regulierung und Sicherheitsbefunde die Verfügbarkeit von Spitzenmodellen steuern können.",
    "firstOfKind": "Erstes Frontier-Modell, das durch eine US-Exportkontrolle vorübergehend abgeschaltet und nach Aufhebung wieder in Betrieb genommen wurde.",
    "sources": [
      "https://www.anthropic.com/news/redeploying-fable-5",
      "https://www.cnbc.com/2026/06/30/anthropic-says-trump-admin-has-lifted-export-controls-on-claude-fable-5-and-mythos-5.html"
    ],
    "disputed": false,
    "verificationNote": "Datum 01.07.2026 über die offizielle Anthropic-Ankündigung „Redeploying Claude Fable 5\" (Primärquelle) bestätigt; Hintergrund (Sperre 12.06., Aufhebung der Kontrollen 30.06.) über Anthropic, CNBC und weitere Berichte."
  },
  {
    "id": "text-swe-1-7-2026-07-08",
    "date": "2026-07-08",
    "datePrecision": "day",
    "modality": "text",
    "name": "SWE-1.7 (Cognition)",
    "org": "Cognition",
    "license": "closed",
    "capability": "Coding- und Agenten-Modell auf Frontier-Niveau zu deutlich geringeren Kosten, speziell für langlaufende asynchrone Software-Aufgaben optimiert. Ab sofort in Devin (Web, Desktop, CLI) über Cerebras mit 1000 Tokens/Sek. verfügbar. Benchmarks: FrontierCode 1.1 Main 42,3 %, Terminal-Bench 2.1 81,5 %, SWE-Bench Multilingual 77,8 %.",
    "whyItMattered": "Cognition zeigt mit weiteren großen Zuwächsen aus eigenem Post-Training, dass ein vermeintliches „Post-Training-Ceiling\" nicht existiert — Reinforcement Learning treibt agentische Coding-Fähigkeiten weiter als bislang angenommen, und das bei 1000 TPS im Devin-Agenten.",
    "firstOfKind": "",
    "sources": [
      "https://cognition.com/blog/swe-1-7"
    ],
    "disputed": false,
    "verificationNote": "Datum 08.07.2026 direkt im Cognition-Blog (Primärquelle) bestätigt; verfügbar in Devin über Cerebras (1000 TPS). Benchmarks laut Cognition."
  },
  {
    "id": "audio-gpt-live-2026-07-08",
    "date": "2026-07-08",
    "datePrecision": "day",
    "modality": "audio",
    "name": "GPT-Live (GPT-Live-1 / mini)",
    "org": "OpenAI",
    "license": "closed",
    "capability": "Neue Generation von Sprachmodellen mit Full-Duplex-Architektur — hört und spricht gleichzeitig, signalisiert Aufmerksamkeit („mhmm\", „yeah\"), erlaubt schnelles Hin und Her und lässt Pausen zu. Treibt ab sofort ChatGPT Voice an; zwei Varianten (GPT-Live-1 und GPT-Live-1 mini), globaler Rollout für ChatGPT-Nutzer, API in Kürze.",
    "whyItMattered": "Verschiebt Sprach-KI vom turn-basierten Wechsel zum echten, gleichzeitigen Gespräch — Zuhören und Sprechen parallel statt abwechselnd — und macht die Voice-Interaktion mit ChatGPT deutlich natürlicher.",
    "firstOfKind": "Erste Full-Duplex-Sprachmodellfamilie von OpenAI (gleichzeitiges Hören und Sprechen) für ChatGPT Voice.",
    "sources": [
      "https://openai.com/index/introducing-gpt-live/"
    ],
    "disputed": false,
    "verificationNote": "Angekündigt/ausgerollt am 08.07.2026 (OpenAI). Primärseite maschinell nicht abrufbar (HTTP 403); Details (Full-Duplex, GPT-Live-1 + mini, globaler ChatGPT-Rollout, API in Kürze) über die OpenAI-Ankündigung und Berichte (Let's Data Science, MarkTechPost) bestätigt."
  },
  {
    "id": "image-seedream-5-0-pro-2026-07-08",
    "date": "2026-07-08",
    "datePrecision": "day",
    "modality": "image",
    "name": "Seedream 5.0 Pro",
    "org": "ByteDance",
    "license": "closed",
    "capability": "Multimodales Bild-Erzeugungsmodell mit durchgängigen Verbesserungen bei Bild-Text-Ausrichtung, Struktur, Textrendering und Ästhetik. Vier Kern-Neuerungen: komplexe Informations-Visualisierung (verwandelt Daten, Konzepte und dichten Text in professionelle Layouts), interaktives pixelgenaues Editieren mit räumlichem Verständnis (Grounding), intelligente Ebenen-Trennung (zerlegt ein Poster in 10+ Layer — Text, Motive, Hintergründe, Deko) und Multi-Image-Fusion. Nativ mehrsprachig (über 10 Sprachen).",
    "whyItMattered": "Verschiebt Text-zu-Bild von reiner Generierung zu echtem Design-Verständnis: Layout, editierbare Ebenen und komponierbare Bildteile statt nur eines fertigen Bildes — direkt anschlussfähig an professionelle Design-Workflows.",
    "firstOfKind": "",
    "sources": [
      "https://seed.bytedance.com/en/blog/beyond-generation-it-understands-design-introducing-seedream-5-0-pro"
    ],
    "disputed": false,
    "verificationNote": "Datum 08.07.2026 direkt im ByteDance-Seed-Blog (Primärquelle) bestätigt."
  },
  {
    "id": "text-grok-4-5-2026-07-08",
    "date": "2026-07-08",
    "datePrecision": "day",
    "modality": "text",
    "name": "Grok 4.5",
    "org": "xAI",
    "license": "closed",
    "capability": "Auf dem 1,5-Billionen-Foundation-Modell „V9\" aufgebautes Reasoning-Modell mit zusätzlichen Cursor-Trainingsdaten, konfigurierbarem Reasoning-Aufwand sowie Fokus auf Geschwindigkeit und Token-Effizienz. Ab dem 08.07.2026 über die xAI-API verfügbar ($2/$6 pro 1M Token); öffentlicher Rollout ab 09.07.2026.",
    "whyItMattered": "xAI positioniert Grok 4.5 als „Opus-Klasse\" — schneller, token-effizienter und günstiger. Wichtig: Die Leistungsaussagen sind Eigenangaben von xAI/Musk; zum Launch lagen keine unabhängigen oder öffentlichen Benchmarks vor.",
    "firstOfKind": "",
    "sources": [
      "https://x.ai/news/grok-4-5"
    ],
    "disputed": false,
    "verificationNote": "Ankündigung über die offizielle x.ai-News-Seite (vom Nutzer belegt); Seite maschinell nicht abrufbar (HTTP 403). API-Verfügbarkeit, Preise ($2/$6) und öffentlicher Rollout am 09.07. über mehrere Berichte bestätigt. Leistungsaussagen („Opus-Klasse\") sind Eigenangaben von xAI, keine unabhängigen Benchmarks zum Launch-Zeitpunkt."
  },
  {
    "id": "image-muse-image-2026-07-07",
    "date": "2026-07-07",
    "datePrecision": "day",
    "modality": "image",
    "name": "Muse Image",
    "org": "Meta (Superintelligence Labs)",
    "license": "closed",
    "capability": "Erstes Bildgenerierungsmodell aus den Meta Superintelligence Labs. Fortgeschrittenes Prompt-Verständnis (Reasoning), Foto-Blending, verlässliches Textrendering, Bildbearbeitung mit Markup-Werkzeugen und @-Mention-Integration für Instagram-Profile. In Meta AI verfügbar, Rollout auf Facebook, Messenger, Instagram und WhatsApp; kostenlos für alltägliche Nutzung, erweiterte Nutzung über Meta-Abos, für Werbetreibende via Meta Advantage+ Creative angekündigt.",
    "whyItMattered": "Bringt integrierte, reasoning-gestützte Bilderzeugung und -bearbeitung direkt in Metas Massen-Apps mit Milliarden Nutzern — und ist das erste Bildmodell aus Metas neuem Superintelligence-Labs-Stack.",
    "firstOfKind": "Erstes Bildgenerierungsmodell der Meta Superintelligence Labs.",
    "sources": [
      "https://about.fb.com/news/2026/07/introducing-muse-image-meta-ai/"
    ],
    "disputed": false,
    "verificationNote": "Datum 07.07.2026 direkt in der offiziellen Meta-Newsroom-Ankündigung (Primärquelle) bestätigt. Muse Video wurde am selben Tag angekündigt, ist aber „in Entwicklung\" und noch nicht verfügbar — daher (noch) nicht als Release aufgenommen."
  },
  {
    "id": "text-hy3-hunyuan-2026-07-06",
    "date": "2026-07-06",
    "datePrecision": "day",
    "modality": "text",
    "name": "Hy3 (Hunyuan)",
    "org": "Tencent (Hunyuan)",
    "license": "open",
    "capability": "Offizielle Version des Hunyuan-Hy3: 295B-MoE-Modell mit 21B aktiven Parametern und 256K-Kontext, veröffentlicht unter Apache-2.0-Lizenz. Gegenüber der Preview (23.04.) weitere Fortschritte bei Code-Generierung und Agenten-Fähigkeiten sowie mehr Stabilität; API über Tencent Cloud TokenHub. Erreicht laut Tencent flagship-nahe Intelligenz bei 2–5× kleinerem Parameter-Budget.",
    "whyItMattered": "Kleines, effizientes Open-Weights-Modell (nur 21B aktiv), das an die Leistung deutlich größerer Flaggschiffe heranreicht — mit permissiver Apache-2.0-Lizenz und Fokus auf Agenten, Coding und Reasoning für den praktischen, kostengünstigen Einsatz.",
    "firstOfKind": "",
    "sources": [
      "https://hy.tencent.com/research/hy3",
      "https://www.tencent.com/en-us/articles/2202386.html"
    ],
    "disputed": false,
    "verificationNote": "Offizielle Version am 06.07.2026 veröffentlicht — Datum in der Kopfzeile der offiziellen Tencent-Pressemitteilung (tencent.com, „2026.07.06\") bestätigt. Apache-2.0, 295B-MoE / 21B aktiv / 256K-Kontext. Die zuvor am 23.04.2026 erschienene Preview wurde durch diesen offiziellen Eintrag ersetzt."
  },
  {
    "id": "text-muse-spark-1-1-2026-07-09",
    "date": "2026-07-09",
    "datePrecision": "day",
    "modality": "text",
    "name": "Muse Spark 1.1",
    "org": "Meta (Superintelligence Labs)",
    "license": "closed",
    "capability": "Agentisch ausgelegtes multimodales Modell: fortgeschrittenes Reasoning, starke Tool- und Computer-Use-Fähigkeiten, Top-Coding und multimodales Verständnis (Text, Bild, Video, Audio) bei 1-Mio.-Token-Kontext mit aktivem Kontext-Management. Verfügbar als öffentliche Preview der neuen Meta Model API für Entwickler (OpenAI-kompatibel) sowie im „Thinking\"-Modus der Meta-AI-App und auf meta.ai.",
    "whyItMattered": "Meta positioniert Muse Spark 1.1 als „vollständige agentische Grundlage\" — Millionen-Token-Kontext, volle Multimodalität, starkes Reasoning und Coding in einem OpenAI-kompatiblen Paket. Öffnet Metas Superintelligence-Modelle erstmals über eine eigene Entwickler-API.",
    "firstOfKind": "",
    "sources": [
      "https://ai.meta.com/blog/introducing-muse-spark-meta-model-api/"
    ],
    "disputed": false,
    "verificationNote": "Datum 09.07.2026 direkt in der offiziellen Meta-AI-Blog-Ankündigung (Primärquelle) bestätigt."
  },
  {
    "id": "text-inkling-2026-07-15",
    "date": "2026-07-15",
    "datePrecision": "day",
    "modality": "text",
    "name": "Inkling",
    "org": "Thinking Machines Lab",
    "license": "open",
    "capability": "Erstes Modell von Mira Muratis Thinking Machines Lab — ein quelloffenes „Interaktionsmodell“, das Anfragen über verschiedene Medien hinweg verarbeitet und dabei Kosten gegen Leistung ausbalanciert. Frei verfügbar (Open-Weights zum Herunterladen und Anpassen); das Unternehmen monetarisiert nicht Inkling selbst, sondern das separate Fine-Tuning-Werkzeug Tinker.",
    "whyItMattered": "Erster öffentlicher Release von Thinking Machines Lab — über ein Jahr nach der Gründung durch Ex-OpenAI-CTO Mira Murati. Positioniert als menschenzentriertes, anpassbares Open-Weights-Modell (laut Firma „nicht das stärkste“ verfügbare Modell, aber stark unter vergleichbaren Open-Weights). Ein weiterer prominenter Frontier-Lab-Player tritt damit öffentlich an.",
    "firstOfKind": "Erstes öffentlich verfügbares Modell von Thinking Machines Lab (Mira Murati).",
    "sources": [
      "https://thinkingmachines.ai/",
      "https://fortune.com/2026/07/15/what-is-mira-murati-thinking-machines-first-ai-model-inkling/",
      "https://www.bloomberg.com/news/articles/2026-07-15/murati-s-thinking-machines-releases-first-ai-model-for-broad-use"
    ],
    "disputed": false,
    "verificationNote": "Veröffentlichung am 15.07.2026 über mehrere Berichte (Bloomberg, Fortune, MarkTechPost) bestätigt; Open-Weights, frei verfügbar, Monetarisierung über das separate Tool Tinker. Offizielle Primärseite thinkingmachines.ai nicht maschinell abgerufen."
  },
  {
    "id": "text-kimi-k3-2026-07-16",
    "date": "2026-07-16",
    "datePrecision": "day",
    "modality": "text",
    "name": "Kimi K3",
    "org": "Moonshot AI",
    "license": "open",
    "capability": "Neues MoE-Flaggschiff mit rund 2,8 Billionen Parametern, neuer „Kimi Delta Attention“-Architektur und 1-Mio.-Token-Kontext, ausgelegt auf langlaufendes Coding und Agenten-Workloads. Zwei Varianten zum Start: K3 Max (Chat/Agent) und K3 Swarm Max (massiv-paralleles Processing). Zum Launch nur über Kimi Code und die Kimi-App (ab ¥199-Tarif) nutzbar; die herunterladbaren Gewichte folgten am 27.07.2026.",
    "whyItMattered": "Hebt Open-Weights-Modelle auf Frontier-Niveau: laut Moonshot 93,5 % auf GPQA Diamond (stärkstes veröffentlichtes Open-Weight-Ergebnis zum Launch), 91,2 % auf BrowseComp und 88,3 % auf Terminal-Bench 2.1 — agentische Werte, die mit den geschlossenen Spitzenmodellen konkurrieren.",
    "firstOfKind": "",
    "sources": [
      "https://www.marktechpost.com/2026/07/16/moonshot-ai-releases-kimi-k3-a-2-8-trillion-parameter-open-moe-model-with-kimi-delta-attention-and-1m-context/",
      "https://simonwillison.net/2026/Jul/16/kimi-k3/"
    ],
    "disputed": false,
    "verificationNote": "Veröffentlichung am 16.07.2026 über mehrere Berichte (MarkTechPost, Simon Willison, kie.ai) bestätigt; zunächst über Kimi Code und die Kimi-App verfügbar. Die Open-Weights erschienen am 27.07.2026 auf Hugging Face — dazu der eigene Eintrag „Kimi K3 (Open Weights)\". Benchmarks laut Moonshot/Berichten."
  },
  {
    "id": "text-qwen3-8-max-2026-07-19",
    "date": "2026-07-19",
    "datePrecision": "day",
    "modality": "text",
    "name": "Qwen3.8-Max (Preview)",
    "org": "Alibaba",
    "license": "closed",
    "capability": "Alibabas neues Flaggschiff der Qwen-Reihe mit laut Ankündigung rund 2,4 Billionen Parametern (aktive Parameterzahl und MoE-Konfiguration nicht offengelegt). Zunächst als Qwen3.8-Max-Preview über Alibaba Cloud (Token Plan), Qoder und QoderWork aufrufbar; das vollständige Modell und offene Gewichte sind laut Alibaba „in Kürze“ geplant.",
    "whyItMattered": "Vierter Frontier-Launch in elf Tagen (nach Grok 4.5 und GPT-5.6) und Alibabas bislang größtes Modell. Alibaba positioniert es als „nur hinter Fable 5“ — allerdings eine reine Eigenangabe: zum Start lagen keine veröffentlichten oder unabhängigen Benchmarks vor.",
    "firstOfKind": "",
    "sources": [
      "https://officechai.com/ai/alibaba-qwen-3-8/",
      "https://kie.ai/blog/what-is-qwen3-8-max"
    ],
    "disputed": true,
    "verificationNote": "Ankündigung am 19.07.2026; Qwen3.8-Max-Preview über Alibaba Cloud aufrufbar, vollständiges Modell und Open-Weights noch nicht veröffentlicht. Als unbestätigt markiert: keine offizielle Alibaba-Primärquelle maschinell abrufbar, keine unabhängigen Benchmarks, und „zweitbestes Modell nach Fable 5“ ist eine reine Eigenangabe. Datum über mehrere Berichte (OfficeChai, kie.ai, techsy) berichtet."
  },
  {
    "id": "image-qwen-image-3-0-2026-07-18",
    "date": "2026-07-18",
    "datePrecision": "day",
    "modality": "image",
    "name": "Qwen-Image-3.0",
    "org": "Alibaba",
    "license": "closed",
    "capability": "Dritte Generation von Alibabas Bildmodell, ausgelegt auf praktisch nutzbare statt nur ästhetische Bilder: verarbeitet Anweisungen von bis zu 4.500 Tokens für informationsdichte Kompositionen in einem Durchgang. „World Knowledge“-Fähigkeiten — natives Rendering von 12 Sprachen, Reproduktion von Oberflächen wie Webseiten und Livestreams sowie Einbindung aktueller Daten aus dem Netz (z. B. eine Wettergrafik für eine bestimmte Stadt und ein Datum). Zunächst nur über Qwen Chat testbar.",
    "whyItMattered": "Verschiebt Text-zu-Bild von Deko zu funktionalen, informationsdichten Grafiken mit Weltwissen und Live-Daten. Zugleich ein Bruch mit Alibabas offener Linie: anders als Qwen-Image 1.0/2.0 erscheint 3.0 ohne offene Gewichte, Lizenz, Parameterzahl, Benchmarks oder Technical Report.",
    "firstOfKind": "",
    "sources": [
      "https://qwen.ai/blog?id=qwen-image-3.0",
      "https://www.unite.ai/alibaba-launches-qwen-image-3-0-without-benchmarks-or-weights/"
    ],
    "disputed": true,
    "verificationNote": "Vom Nutzer über den offiziellen Qwen-Blog (qwen.ai/blog?id=qwen-image-3.0) belegt, Release „heute“ (18.07.2026); die Primärseite ist eine JS-App und maschinell nicht auslesbar. Als unbestätigt markiert: keine offenen Gewichte, keine Lizenz, keine Parameterzahl, keine Benchmarks und kein Technical Report; ein Bericht (Unite.AI) nennt zudem den 21.07.2026 als Datum. Verfügbar zunächst nur über Qwen Chat."
  },
  {
    "id": "text-gemini-3-6-flash-2026-07-21",
    "date": "2026-07-21",
    "datePrecision": "day",
    "modality": "text",
    "name": "Gemini 3.6 Flash",
    "org": "Google",
    "license": "closed",
    "capability": "Googles neues Workhorse-Modell der Flash-Reihe: verbessert bei Coding, Knowledge Work und Multimodalität, verbraucht rund 17 % weniger Output-Tokens als Gemini 3.5 Flash (bis zu 65 % weniger in einzelnen Benchmarks) und ist günstiger im Preis ($1,50 pro 1 Mio. Input-, $7,50 pro 1 Mio. Output-Tokens, gesenkt von $9,00). Wissens-Cutoff auf März 2026 vorgezogen; ausgeliefert über Gemini API, AI Studio, Android Studio, Gemini Enterprise und die Gemini-App.",
    "whyItMattered": "Beerbt Gemini 3.5 Flash direkt als Standard-Arbeitspferd — höhere Token-Effizienz und niedrigere Preise bei besserer Coding-Leistung. Google kündigte parallel an, den „bislang ehrgeizigsten Pre-Training-Lauf“ für Gemini 4 gestartet zu haben, während Gemini 3.5 Pro weiter aussteht.",
    "firstOfKind": "",
    "sources": [
      "https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-6-flash-3-5-flash-lite-3-5-flash-cyber/",
      "https://deepmind.google/models/model-cards/gemini-3-6-flash/"
    ],
    "disputed": false,
    "verificationNote": "Release am 21.07.2026 gegen die offizielle Google-Blog-Ankündigung (blog.google) und die DeepMind-Model-Card verifiziert; von unabhängiger Berichterstattung (TechCrunch, 9to5Google, MarkTechPost) bestätigt."
  },
  {
    "id": "text-gemini-3-5-flash-lite-2026-07-21",
    "date": "2026-07-21",
    "datePrecision": "day",
    "modality": "text",
    "name": "Gemini 3.5 Flash-Lite",
    "org": "Google",
    "license": "closed",
    "capability": "Schnellstes und kostengünstigstes Modell der 3.5-Klasse, ausgelegt auf hohen Durchsatz und niedrige Latenz (rund 350 Output-Tokens/Sekunde) für agentische Workflows, Suche und Dokumentenverarbeitung. Preis: $0,30 pro 1 Mio. Input-, $2,50 pro 1 Mio. Output-Tokens. Sofort verfügbar über Gemini API, AI Studio, Android Studio, Gemini Enterprise und die Gemini-App.",
    "whyItMattered": "Deckt das untere Preis-/Latenz-Segment der neuen Flash-Generation ab und macht Gemini für hochvolumige, kostensensible Agenten- und Batch-Anwendungen attraktiv — bei laut Google deutlichem Sprung in Coding- und Agenten-Aufgaben gegenüber dem Vorgänger.",
    "firstOfKind": "",
    "sources": [
      "https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-6-flash-3-5-flash-lite-3-5-flash-cyber/"
    ],
    "disputed": false,
    "verificationNote": "Release am 21.07.2026 gegen die offizielle Google-Blog-Ankündigung (blog.google) verifiziert; von unabhängiger Berichterstattung (TechCrunch, 9to5Google, MarkTechPost) bestätigt. Preis/Durchsatz laut offiziellem Blog."
  },
  {
    "id": "text-gemini-3-5-flash-cyber-2026-07-21",
    "date": "2026-07-21",
    "datePrecision": "day",
    "modality": "text",
    "name": "Gemini 3.5 Flash Cyber",
    "org": "Google",
    "license": "closed",
    "capability": "Auf 3.5 Flash aufgesetztes, für Security feinjustiertes Modell, das Schwachstellen schnell findet, validiert und patcht — gekoppelt mit Googles CodeMender-Agent. Da leichte, wiederholte Aufrufe über viele Ausführungspfade hier stärker sind als teure Einzelabfragen großer Modelle, fand es laut DeepMind 55 bestätigte Fehler in der V8-JavaScript-Engine (vs. 47 bei 3.5 Flash, 36 bei Claude Opus 4.6) und eine RCE-Lücke in Google-Cloud-APIs in unter zwei Stunden. Wegen der Dual-Use-Risiken zunächst nur für Regierungen und vertrauenswürdige Partner (Limited-Access-Pilot via CodeMender).",
    "whyItMattered": "Googles erster öffentlich benannter, auf Cybersecurity spezialisierter Vertical-Finetune — ein Signal, dass die großen Labs beginnen, dedizierte Modelle für einzelne Hochrisiko-Domänen zu veröffentlichen, und diese wegen ihres Dual-Use-Charakters bewusst nur eingeschränkt freigeben.",
    "firstOfKind": "Googles erster öffentlich benannter, auf Cybersecurity spezialisierter Vertical-Finetune.",
    "sources": [
      "https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-6-flash-3-5-flash-lite-3-5-flash-cyber/",
      "https://deepmind.google/blog/introducing-gemini-3-5-flash-cyber/"
    ],
    "disputed": false,
    "verificationNote": "Release am 21.07.2026 gegen die offizielle Google-Blog-Ankündigung (blog.google) und den DeepMind-Blog (deepmind.google) verifiziert; von unabhängiger Berichterstattung (Help Net Security, TechCrunch, MarkTechPost) bestätigt. Verfügbarkeit: Limited-Access-Pilot, zunächst nur für Regierungen und vertrauenswürdige Partner via CodeMender."
  },
  {
    "date": "2026-07-21",
    "datePrecision": "day",
    "modality": "text",
    "name": "Laguna S 2.1",
    "org": "poolside",
    "license": "open",
    "capability": "Offenes MoE-Modell für agentisches Coding: 118 Mrd. Parameter total, davon nur 8 Mrd. pro Token aktiv, bis zu 1 Mio. Token Kontext und getrennte Thinking-/No-Thinking-Modi. Laut poolside 70,2 % auf Terminal-Bench 2.1 (mit Thinking), 78,5 % auf SWE-Bench Multilingual, 40,4 % auf DeepSWE v1.1 und 46,2 % auf SWE Atlas (Codebase-QnA). Gewichte auf Hugging Face unter OpenMDW-1.1 (BF16 plus FP8- und NVFP4-Quantisierungen), lauffähig auf einer einzelnen NVIDIA DGX Spark.",
    "whyItMattered": "Das stärkste offene Coding-Modell aus dem Westen und ein Gegenbeispiel zur Größenlogik: Es hält auf Long-Horizon-Coding-Benchmarks gegen Modelle mit einem Vielfachen seiner Parameterzahl mit und ging in unter neun Wochen vom Trainingsstart zum Release. poolside veröffentlicht zu jedem publizierten Benchmark-Wert die vollständigen Trajektorien aller Durchläufe (trajectories.poolside.ai) — ein in dieser Form seltener Transparenzschritt bei Agenten-Benchmarks.",
    "firstOfKind": "",
    "sources": [
      "https://poolside.ai/blog/introducing-laguna-s-2-1",
      "https://huggingface.co/poolside/Laguna-S-2.1"
    ],
    "disputed": false,
    "verificationNote": "Release am 21.07.2026 gegen den offiziellen poolside-Blog (Primärquelle) und die Hugging-Face-Model-Cards verifiziert; von unabhängiger Berichterstattung (VentureBeat, GlobeNewswire-Verteilung) bestätigt. Benchmark-Werte sind Herstellerangaben, allerdings mit offengelegten Trajektorien nachprüfbar.",
    "id": "text-laguna-s-2-1-2026-07-21"
  },
  {
    "date": "2026-07-21",
    "datePrecision": "day",
    "modality": "text",
    "name": "Fugu-Cyber",
    "org": "Sakana AI",
    "license": "closed",
    "capability": "Dritter Endpunkt des Fugu-Orchestrators, auf Security-Reasoning abgestimmt: kein Einzelmodell, sondern ein Multi-Agenten-System, das sich wie ein einzelnes Modell verhält und einen Pool spezialisierter Agenten dynamisch für mehrstufige Security-Aufgaben routet und koordiniert. Sakana berichtet 86,9 % auf CyberGym (Berkeley-Benchmark mit 1.507 realen Schwachstellen aus 188 OSS-Fuzz-Projekten) und 72,1 % auf Microsofts CTI-REALM. Zugang nur nach Antrag und manueller Prüfung, im Token-Plan und unter aktualisierter Acceptable-Usage-Policy.",
    "whyItMattered": "Setzt Orchestrierung statt Modellgröße als Hebel: Werte auf Höhe cyber-spezialisierter Frontier-Modelle wie GPT-5.5-Cyber und Mythos-Preview, erreicht durch Koordination vieler kleiner Agenten statt durch ein größeres Basismodell. Zusammen mit Gemini 3.5 Flash Cyber am selben Tag markiert es den Punkt, an dem Cybersecurity zur ersten Domäne mit eigenen, bewusst zugangsbeschränkten Spezialmodellen wird.",
    "firstOfKind": "",
    "sources": [
      "https://sakana.ai/fugu-cyber-release/",
      "https://sakana.ai/fugu/"
    ],
    "disputed": true,
    "verificationNote": "Release am 21.07.2026 direkt gegen die Sakana-AI-Ankündigung (Primärquelle) verifiziert. Als unbestätigt markiert, weil alle Benchmark-Werte Herstellerangaben sind: Zum Zeitpunkt der Berichterstattung hat kein unabhängiges Labor die Zahlen reproduziert, und die Benchmark-Methodik wurde nicht offengelegt (Kritik u. a. bei TechTimes). Verfügbarkeit: gated, nur nach Antrag und Freigabe.",
    "id": "text-fugu-cyber-2026-07-21"
  },
  {
    "date": "2026-07-23",
    "datePrecision": "day",
    "modality": "image",
    "name": "MAI-Image-2.5-Pro",
    "org": "Microsoft AI",
    "license": "closed",
    "capability": "Bisher fidelity-stärkstes Bildmodell von Microsoft AI: erzeugt hochdetaillierte Bilder aus Text- oder Foto-Prompts, mit Schwerpunkt auf präzisem Editing und akkuratem In-Image-Text-Rendering per natürlicher Sprache. Als Public Preview über Azure Foundry und das MAI Playground verfügbar. Preise: $5 pro 1 Mio. Text-Input-, $8 pro 1 Mio. Bild-Input- und $106 pro 1 Mio. Bild-Output-Tokens.",
    "whyItMattered": "Pro-Ausbau der bei Build 2026 vorgestellten MAI-Image-2.5-Linie — Microsofts bislang höchste Bild-Fidelity mit einem laut Ankündigung echten Durchbruch beim zuverlässigen Rendern von Text innerhalb generierter Bilder, ein bekanntes Schwachstellen-Feld der Text-zu-Bild-Modelle.",
    "firstOfKind": "",
    "sources": [
      "https://microsoft.ai/news/introducing-mai-image-2-5-pro-and-mai-voice-2-flash/"
    ],
    "disputed": false,
    "verificationNote": "Ankündigungsdatum 23.07.2026 direkt gegen die Primärquelle microsoft.ai (\"Introducing MAI-Image-2.5-Pro and MAI-Voice-2-Flash\") verifiziert; von unabhängiger Berichterstattung bestätigt. Verfügbarkeit: Public Preview über Azure Foundry und MAI Playground.",
    "id": "image-mai-image-2-5-pro-2026-07-23"
  },
  {
    "date": "2026-07-23",
    "datePrecision": "day",
    "modality": "audio",
    "name": "MAI-Voice-2-Flash",
    "org": "Microsoft AI",
    "license": "closed",
    "capability": "Auf hohes Volumen und niedrige Latenz optimierte Variante von MAI-Voice-2: erzeugt ausdrucksstarke Sprache mit natürlicher Prosodie und hoher akustischer Qualität, dabei laut Microsoft 2× schneller und 32 % günstiger als MAI-Voice-2. Als Public Preview verfügbar und in Dynamics 365 Contact Center sowie Azure Voice Live integriert; Preis $15 pro 1 Mio. Zeichen. Senkt GPU-Kosten in Contact-Center-Deployments laut Microsoft um bis zu 89 %.",
    "whyItMattered": "Die bei Build 2026 nur als „coming soon“ angekündigte Flash-Variante von MAI-Voice-2 ist nun verfügbar — ausgelegt auf skalierbare, kostengünstige Echtzeit-Sprachanwendungen (Contact Center, Live-Voice) statt maximaler Qualität pro Einzelaufruf.",
    "firstOfKind": "",
    "sources": [
      "https://microsoft.ai/news/introducing-mai-image-2-5-pro-and-mai-voice-2-flash/"
    ],
    "disputed": false,
    "verificationNote": "Ankündigungsdatum 23.07.2026 direkt gegen die Primärquelle microsoft.ai (\"Introducing MAI-Image-2.5-Pro and MAI-Voice-2-Flash\") verifiziert; von unabhängiger Berichterstattung bestätigt. Ergänzt die am 02.06.2026 zunächst nur als \"coming soon\" gelistete Variante. Verfügbarkeit: Public Preview, integriert in Dynamics 365 Contact Center und Azure Voice Live.",
    "id": "audio-mai-voice-2-flash-2026-07-23"
  },
  {
    "date": "2026-07-23",
    "datePrecision": "day",
    "modality": "video",
    "name": "FLUX 3",
    "org": "Black Forest Labs",
    "license": "closed",
    "capability": "Multimodales Frontier-Modell, das gemeinsam über Bild, Video, Audio und Action-Prediction trainiert wurde — nicht mehrere Einzelmodelle hinter einer gemeinsamen Schnittstelle. Erzeugt laut Berichterstattung bis zu 20 Sekunden Video mitsamt synchronem Ton (Dialog, Soundeffekte, Musik) und hält Produkt- und Materialkonsistenz über Bewegung hinweg. Der Ansatz „Self-Flow“ soll multimodale Generierung und Verstehen innerhalb derselben Architektur ausrichten. Varianten: FLUX 3 Video und FLUX 3 Action (Roboter-Aktionen) im Early Access, FLUX 3 Image in den kommenden Wochen, das offene FLUX 3 Dev später im Jahr 2026.",
    "whyItMattered": "Erstes Modell, das Video und Ton nicht nachträglich zusammenfügt, sondern gemeinsam aus einem Backbone erzeugt — und dasselbe Fundament über FLUX 3 Action bis in die Robotersteuerung verlängert. Damit verlässt Black Forest Labs die reine Bildgenerierung, mit der es über die FLUX-Reihe bekannt wurde, und stellt Bild, Video, Audio und physische Aktion auf ein einziges Modell.",
    "firstOfKind": "Erstes Modell mit gemeinsam trainierter Video-, Audio- und Action-Generierung aus einem Backbone.",
    "sources": [
      "https://www.globenewswire.com/news-release/2026/07/23/3332364/0/en/black-forest-labs-unveils-flux-3-a-new-multimodal-frontier-model-for-visual-intelligence.html"
    ],
    "disputed": true,
    "verificationNote": "Ankündigungsdatum 23.07.2026 gegen die offizielle Pressemitteilung von Black Forest Labs (GlobeNewswire) verifiziert; von unabhängiger Berichterstattung (VentureBeat, TechTimes) bestätigt. Als unbestätigt markiert, weil zum Ankündigungszeitpunkt keine Benchmarks veröffentlicht waren und nur FLUX 3 Video und Action als gated Early Access für ausgewählte Partner verfügbar sind; die 20-Sekunden-Angabe stammt aus der Berichterstattung, nicht aus der Pressemitteilung.",
    "id": "video-flux-3-2026-07-23"
  },
  {
    "date": "2026-07-23",
    "datePrecision": "day",
    "modality": "text",
    "name": "Ling-3.0-flash",
    "org": "Ant Group",
    "license": "closed",
    "capability": "Hybrid-Reasoning-MoE von Ant Groups Lab inclusionAI, gebaut für Agenten im Produktionsmaßstab: 124 Mrd. Parameter total, davon nur rund 5,1 Mrd. pro Token aktiv (1/64 der Experten). Architektur mischt Kimi Delta Attention (KDA) und Multi-head Latent Attention (MLA) im Verhältnis 5:1; Kontextfenster 256K Token, mit 1 Mio. als erklärtem Ziel. Laut Ant erreicht oder schlägt es mit 1/8 der Gesamt- und 1/12 der aktiven Parameter das eigene 1-Billion-Flaggschiff auf den meisten gezeigten Benchmarks. Bis 03.08.2026 kostenlos über OpenRouter und Vercels AI Gateway.",
    "whyItMattered": "Der bislang deutlichste Effizienzbeleg der Sparse-MoE-Linie: Ein Modell, das ein achtmal größeres Flaggschiff desselben Hauses einholt, verschiebt die Kostenrechnung für hochvolumige Agenten-Workloads — und zeigt, dass chinesische Labs Techniken untereinander übernehmen (KDA stammt aus der Forschung von Moonshot AI, nicht von Ant).",
    "firstOfKind": "",
    "sources": [
      "https://x.com/AntLingAGI/status/2080351022028095681"
    ],
    "disputed": true,
    "verificationNote": "Release am 23.07.2026 gegen die offizielle Ankündigung von Ant Ling (inclusionAI) verifiziert. Als unbestätigt markiert: als Open-Weight mit Apache 2.0 angekündigt, aber zum 24.07.2026 war keine Hugging-Face-Model-Card veröffentlicht und es gab keine selbst-hostbaren Gewichte — praktisch API-only, daher hier als „closed“ geführt. Auch die Benchmark-Aussage ist Herstellerangabe ohne veröffentlichte Benchmark-Tabelle.",
    "id": "text-ling-3-0-flash-2026-07-23"
  },
  {
    "date": "2026-07-23",
    "datePrecision": "day",
    "modality": "audio",
    "name": "Grok STT 1.0",
    "org": "xAI",
    "license": "closed",
    "capability": "Eigenständiges Speech-to-Text-Modell von xAI: transkribiert Audio in 25 Sprachen — Sprachnotizen, Telefonmitschnitte, Podcasts — mit Wort-Zeitstempeln, optionaler Sprechertrennung (Diarization) und Mehrkanal-Audio. Batch-Modus für vorliegende Dateien, Streaming-Modus für Echtzeit, über den REST-Endpunkt /v1/stt. Preis: $0,10 pro Stunde im Batch, $0,20 pro Stunde im Streaming.",
    "whyItMattered": "Löst xAIs Sprachverarbeitung aus der Grok-App und macht sie zu einem versionierten API-Produkt für Entwickler — zu einem Stundenpreis, der Transkription als Vorstufe agentischer Pipelines praktisch zur Randnotiz in der Kostenrechnung macht.",
    "firstOfKind": "",
    "sources": [
      "https://openrouter.ai/x-ai/grok-stt-1.0",
      "https://x.ai/news/grok-stt-and-tts-apis"
    ],
    "disputed": true,
    "verificationNote": "Als unbestätigt markiert, weil die Primärquelle nicht gegengeprüft werden konnte: x.ai liefert auf maschinelle Abrufe HTTP 403, und die xAI-Release-Notes listeten den Eintrag zum Prüfzeitpunkt nicht. Datum 23.07.2026 stützt sich auf die Modellseite bei OpenRouter (Erst-Distribution) sowie Sekundärberichte, die den 23.07. als Live-Datum und den 24.07. als xAI-Ankündigung nennen. Zusätzliche Unschärfe: xAI hatte bereits im April 2026 eigenständige Grok-STT-/TTS-APIs gestartet, sodass unklar bleibt, ob „1.0\" ein neues Modell oder die erste versionierte Freigabe dieser Linie bezeichnet.",
    "id": "audio-grok-stt-1-0-2026-07-23"
  },
  {
    "date": "2026-07-24",
    "datePrecision": "day",
    "modality": "text",
    "name": "Claude Opus 5",
    "org": "Anthropic",
    "license": "closed",
    "capability": "Neues Opus-Flaggschiff mit einstellbarem Effort-Level (niedrig/mittel/hoch), das Nutzende zwischen Intelligenz und Token-Sparsamkeit abwägen lässt; Fast-Modus mit 2,5-facher Geschwindigkeit. State of the Art auf Frontier-Bench und GDPval-AA, dreifacher Wert des nächstbesten Modells auf ARC-AGI 3, rund 1,5-fache Pass-Rate auf Zapier AutomationBench und bessere Computer-Use-Werte als Claude Fable 5 auf OSWorld 2.0 bei gut einem Drittel der Kosten. Preis unverändert zu Opus 4.8: $5 pro 1 Mio. Input-, $25 pro 1 Mio. Output-Tokens.",
    "whyItMattered": "Bringt nahezu Frontier-Intelligenz zum halben Preis von Claude Fable 5 — auf CursorBench 3.2 innerhalb von 0,5 % des Fable-5-Spitzenwerts bei halben Kosten pro Aufgabe. Wird zum Standardmodell in Claude Max und zum stärksten Modell in Claude Pro; verifiziert eigene Arbeit und erholt sich laut Anthropic ohne Eingriff von Fehlern, was den Abstimmungsaufwand in agentischen Workflows senkt.",
    "firstOfKind": "",
    "sources": [
      "https://www.anthropic.com/news/claude-opus-5"
    ],
    "disputed": false,
    "verificationNote": "Release am 24.07.2026 direkt gegen die Anthropic-Ankündigungsseite (Primärquelle) verifiziert; von unabhängiger Berichterstattung (CNBC, Fortune, VentureBeat) bestätigt. Verfügbar über Claude.ai, Claude Code, Claude Cowork und die Claude API. Laut Anthropic weiterhin hinter Mythos 5 bei Cybersecurity-Aufgaben.",
    "id": "text-claude-opus-5-2026-07-24"
  },
  {
    "date": "2026-07-27",
    "datePrecision": "day",
    "modality": "text",
    "name": "Kimi K3 (Open Weights)",
    "org": "Moonshot AI",
    "license": "open",
    "capability": "Moonshot lädt die vollständigen Gewichte des K3-Flaggschiffs auf Hugging Face: 2,8 Billionen Parameter total, davon rund 104 Mrd. pro Token aktiv, 1.048.576 Token Kontext, ausgeliefert mit nativer MXFP4-Quantisierung und MXFP8-Aktivierungen. Das Modell ist damit selbst hostbar — allerdings unter einer eigenen „Kimi K3 License\", die für kommerzielle Nutzung eine separate Vereinbarung verlangt, nicht unter einer OSI-Lizenz.",
    "whyItMattered": "Mit 57 Punkten im Intelligence Index von Artificial Analysis ist K3 das stärkste offene Modell, das man herunterladen kann: Platz 1 von 98 Open-Weights-Modellen, vor GLM-5.2 Max (51) und MiniMax-M3 (44). Zur geschlossenen Spitze — Claude Opus 5 mit Max Effort bei 61 — bleiben vier Punkte. Frontier-nahe Intelligenz läuft damit erstmals auf eigener Hardware; der Preis dafür sind hohe Inferenzkosten ($3 / $15 pro 1 Mio. Token in der gehosteten Variante) und mit 33 Token/s eine langsame Ausgabe.",
    "firstOfKind": "",
    "sources": [
      "https://huggingface.co/moonshotai/Kimi-K3",
      "https://artificialanalysis.ai/models/kimi-k3"
    ],
    "disputed": false,
    "verificationNote": "Gewichte am 27.07.2026 über die Hugging-Face-Model-Card (moonshotai/Kimi-K3) verifiziert — der Upload war zum Prüfzeitpunkt wenige Stunden alt und löst die im K3-Eintrag vom 16.07.2026 genannte Ankündigung ein. Intelligence Index 57 und Rang 1/98 unter Open-Weights-Modellen über Artificial Analysis geprüft; die Werte stammen von Artificial Analysis, nicht von Moonshot. Lizenz laut Model Card „Kimi K3 License\" — Open Weights, aber nicht Open Source im OSI-Sinne.",
    "id": "text-kimi-k3-open-weights-2026-07-27"
  },
  {
    "date": "2026-07-28",
    "datePrecision": "day",
    "modality": "audio",
    "name": "GPT-Transcribe / GPT-Live-Transcribe",
    "org": "OpenAI",
    "license": "closed",
    "capability": "Zwei neue Transkriptionsmodelle in der OpenAI-API, die Whisper als empfohlenen Standard ablösen: GPT-Transcribe für fertige Aufnahmen und Batch-Workloads, GPT-Live-Transcribe für laufende Streams. GPT-Transcribe liefert auch das Endtranskript einer abgeschlossenen Realtime-Runde; GPT-Live-Transcribe hat eine einstellbare Latenz in fünf Stufen, von „minimal\" für Echtzeit-Interaktion bis „xhigh\" für maximalen Kontext. Beide nehmen Kontext als Eingabe an: einen freien Prompt zum Thema der Aufnahme, eine Keyword-Liste für Fachbegriffe und Eigennamen sowie mehrere erwartete Sprachen statt einer einzigen. Laut OpenAI fällt die Transkriptionsfehlerrate von GPT-Transcribe gegenüber whisper-1 auf Common Voice (22 Sprachen) von 40,4 % auf 19,3 % und auf realweltlichem Audio (9 Sprachen) von 15,2 % auf 9,0 %; GPT-Live-Transcribe verbessert das Streaming-Vorgängermodell moderater (9,6 % statt 11,7 % auf realem Audio). Preis: $0,0045 pro Minute für Dateien — unter den $0,006 von gpt-4o-transcribe — und $0,017 pro Minute im Streaming. Kein Word-Timestamping, keine Sprechertrennung, keine SRT/VTT-Ausgabe, keine Übersetzung ins Englische: dafür bleiben die Spezialmodelle nötig.",
    "whyItMattered": "Whisper war seit 2022 die Standardtranskription für Entwickler; hier wird sie zum Legacy-Pfad — bei rund der Hälfte der Fehler und einem niedrigeren Preis als das bisherige Spitzenmodell. Der eigentliche Bruch ist aber der Kontext als Parameter: Wer dem Modell vorab Fachbegriffe, Namen und mögliche Sprachen nennt, gewinnt laut OpenAI 3–6 Prozentpunkte. Transkription wird damit von einem starren Dienst zu einem steuerbaren Schritt in Sprach-Pipelines — und die Trennung in ein Latenz- und ein Genauigkeitsmodell macht die Abwägung, die Entwickler bisher selbst basteln mussten, zur Modellwahl. Fünf Tage nach Grok STT 1.0 ist damit klar: Speech-to-Text ist 2026 wieder ein umkämpftes eigenes Produktfeld, nicht nur ein Nebenprodukt der Voice-Assistenten.",
    "firstOfKind": "",
    "sources": [
      "https://developers.openai.com/api/docs/guides/transcription",
      "https://developers.openai.com/changelog",
      "https://x.com/OpenAIDevs/status/2082201169443905798"
    ],
    "disputed": false,
    "verificationNote": "Release am 28.07.2026 gegen den offiziellen OpenAI-Changelog-Eintrag („Released GPT Transcribe … along with GPT Live Transcribe for low-latency streaming transcription\") und die Entwicklerdokumentation auf developers.openai.com verifiziert; die Ankündigung von @OpenAIDevs trägt dasselbe Datum. Fehlerraten und Preise sind Herstellerangaben aus OpenAIs eigenen Benchmark-Tabellen, hier über Sekundärberichterstattung (AlphaSignal) erfasst, weil openai.com maschinelle Abrufe mit HTTP 403 blockt — sie sind nicht unabhängig gemessen. Gemeint ist jeweils die Transkriptionsfehlerrate über gemischte Benchmark-Sets, nicht eine WER auf einem einzelnen Datensatz.",
    "id": "audio-gpt-transcribe-gpt-live-transcribe-2026-07-28"
  },
  {
    "date": "2026-07-29",
    "datePrecision": "day",
    "modality": "audio",
    "name": "Google Lyria 3.5",
    "org": "Google",
    "license": "closed",
    "capability": "Nächste Iteration von Googles Musikmodell, ausgeliefert in Flow Music — dem eigenen Musikprodukt, in das Google die Lyria-Generierung aus der Gemini-App herausgelöst hat. Google nennt vier Verbesserungen: reichere und komplexere Melodiestrukturen, die natürlicher klingen; höhere Textqualität mit besserer Prompt-Treue und struktureller Bewusstheit, also einem Gespür für Strophe, Refrain und Bogen; ausdrucksstärkere und emotional nuanciertere Vocals mit sauberer Aussprache; sowie direktere Kontrolle über Tempo und Länge der Ausgabe. Alle vier Punkte sind qualitative Herstellerangaben — Google veröffentlicht zu diesem Release keine Benchmarks, keine Längenlimits, keine Preis- oder Tarifangaben und keine API-Verfügbarkeit in Gemini API oder Vertex AI.",
    "whyItMattered": "Kein Fähigkeitssprung, sondern der Beleg für einen Reifeschritt: Nach Lyria 3 (Februar) und Lyria 3 Pro (März) geht es nicht mehr um längere Tracks oder neue Modalitäten, sondern um Musikalität, Textqualität und Steuerbarkeit — genau die Kriterien, an denen sich Suno und Udio messen lassen. Bemerkenswert ist die Verpackung: Musikgenerierung sitzt bei Google nicht mehr als Feature in der Gemini-App, sondern in einem eigenen Produkt mit eigener Domain. Damit tritt Google zum ersten Mal frontal als Musik-Plattform gegen die Suno/Udio-Achse an, statt Musik als Beigabe des Assistenten zu behandeln.",
    "firstOfKind": "",
    "sources": [
      "https://blog.google/innovation-and-ai/models-and-research/google-labs/lyria-3-5/",
      "https://www.androidauthority.com/google-lyria-3-5-launch-3692517/"
    ],
    "disputed": false,
    "verificationNote": "Datum 29.07.2026 direkt gegen den Google-Blogeintrag (Primärquelle, dort als „Jul 29, 2026\" ausgewiesen) verifiziert und von unabhängiger Berichterstattung am selben Tag bestätigt (Android Authority; Schlagzeilen gleichen Datums auch bei Neowin und NDTV Profit). Die vier Verbesserungen sind wörtlich Googles eigene Beschreibung ohne Messwerte — es gibt zu diesem Release keine Benchmarks, keinen Vergleich gegen Lyria 3 Pro und keine Zahlen zu Trackdauer. Ob Lyria 3.5 auch über Gemini API oder Vertex AI verfügbar ist, sagt die Ankündigung nicht; genannt wird ausschließlich Flow Music (flowmusic.google). Zu SynthID-Wasserzeichen macht der Post keine Angabe — bei früheren Lyria-Versionen war es Standard, hier aber nicht bestätigt.",
    "id": "audio-google-lyria-3-5-2026-07-29"
  },
  {
    "date": "2026-07-29",
    "datePrecision": "day",
    "modality": "audio",
    "name": "Grok Voice Think Fast 2",
    "org": "xAI",
    "license": "closed",
    "capability": "Speech-to-Speech-Modell für Voice-Agenten, das parallel zum Sprechen denkt: Das Reasoning läuft nicht vor der Antwort, sondern während sie schon läuft. Die Zeit bis zum ersten Ton fällt von 1,25 auf 0,70 Sekunden, der Median-Verbrauch an Reasoning-Tokens auf das 0,4-Fache von Version 1.0 — laut xAI werden Tool-Calls dadurch meist ausgeführt, bevor der Agent seinen ersten Satz beendet hat. Auf dem Speech-to-Speech-Index von Artificial Analysis steigt der Gesamtwert von 75,7 % auf 82,9 % und liegt damit über GPT-Realtime-2.1 (79,1 %) und Gemini 3.1 Flash (69,5 %); die Teilwerte: Agentik (τ-voice Bench) 56,5 % gegen 45,7 % bei GPT-Realtime und 37,7 % bei Gemini, Conversational Dynamics (Full Duplex Bench) 95,1 % — ein Sprung von 77,8 %, aber knapp hinter GPT-Realtime (95,7 %) —, Speech Reasoning (Big Bench Audio) 97,2 %. Bei der Transkription beansprucht xAI über 24 getestete Sprachen die 1,5- bis 2-fache Genauigkeit dedizierter STT-Modelle (Deepgram Nova 3, ElevenLabs Scribe v2) und bei starkem Hintergrundgeräusch etwa das Zehnfache. Per Reinforcement Learning auf Gesprächsdisziplin trainiert: kürzere Sätze, eine Frage auf einmal, weniger Füllwerk. Preis $0,08 pro Audiominute; der Alias „grok-voice-latest\" springt am 05.08.2026 auf 2.0.",
    "whyItMattered": "Sechs Tage nach Grok STT 1.0 dreht xAI die eigene Logik um: Das Speech-to-Speech-Modell transkribiert nach Herstellerangaben genauer als die Spezialmodelle, für die man bisher eine separate Stufe in die Pipeline gebaut hat — und unter Störgeräuschen um eine Größenordnung. Der eigentliche Hebel ist aber das Reasoning parallel zur Sprachausgabe. Bislang war Nachdenken bei Voice-Agenten ein hörbares Loch: Erst Stille, dann Antwort. Wenn Tool-Calls losgehen, während der erste Satz noch läuft, verschwindet der Kompromiss zwischen Latenz und Sorgfalt, der Sprachagenten seit dem Advanced Voice Mode von 2024 im Wesentlichen auf Smalltalk beschränkt hat. Der Vorsprung von 11 Punkten auf GPT-Realtime-2.1 im Agentik-Benchmark bei fast gleicher Gesprächsqualität markiert die Verschiebung: Voice ist nicht mehr die Chat-Oberfläche, sondern die Agenten-Oberfläche.",
    "firstOfKind": "",
    "sources": [
      "https://x.ai/news/grok-voice-think-fast-2",
      "https://www.testingcatalog.com/spacexai-launches-grok-voice-think-fast-2-0-on-agent-builder/"
    ],
    "disputed": false,
    "verificationNote": "Datum 29.07.2026 sowie alle Zahlen gegen die xAI-Ankündigung als Primärquelle geprüft — allerdings nicht per Direktabruf: x.ai antwortet auf maschinelle Zugriffe mit HTTP 403, gelesen wurde die Seite über einen Text-Extraktionsproxy. Latenz, Benchmarkwerte, Preis und Alias-Umstellung wurden unabhängig durch TestingCatalog und Gadgets360 (beide 29./30.07.2026) mit identischen Zahlen bestätigt. Die Benchmarkwerte stammen aus xAIs eigener Tabelle und sind, obwohl sie sich auf Suiten von Artificial Analysis berufen, hier nicht als unabhängige Messung von Artificial Analysis verifiziert; die Transkriptionsvergleiche gegen Deepgram Nova 3 und ElevenLabs Scribe v2 sind reine Herstellerangaben ohne veröffentlichte Messmethode. Die Ankündigung selbst nennt keinen Auslieferungsweg; dass das Modell über den Grok Voice Agent Builder verfügbar ist, ist durch TestingCatalog belegt, nicht durch xAI. Ob und wann Think Fast 2 in die Grok-Consumer-Apps kommt, ist offen.",
    "id": "audio-grok-voice-think-fast-2-2026-07-29"
  }
];

export const dataMeta = {
  lastVerified: "30. Juli 2026",
  /** Machine-readable twin of `lastVerified` — drives the relative "vor X Tagen". */
  lastVerifiedISO: "2026-07-30",
  windowStart: "2022-08",
  windowEnd: "2026-07",
  total: 237,
  placeholder: false,
};
