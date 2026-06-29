# Sources & method

105 milestone generative-AI releases, late 2022 → June 2026, across text, image, video, and audio.

## Method

Each entry was drafted by a per-modality research agent (web search + fetch), then **independently re-verified** by a separate adversarial fact-checker that re-confirmed the release date and any first-of-kind claim against a primary source (a lab's own announcement, paper, or release notes). Where a date could not be confirmed or sources conflict, the entry is flagged `disputed` rather than presented as settled fact.

- Total releases: **105**
- By modality: text 26, image 26, video 22, audio 31
- Open weights: 33 · Closed: 72
- Flagged disputed: 10
- Verification run: June 13, 2026 (8 agents, ~648k tokens)

This is a **curated** set of capability-shifting releases, not an exhaustive log of every point update.

## Entries flagged `disputed`

| Date | Release | Note |
|---|---|---|
| 2023-03-15 | Midjourney v5 (Midjourney) | Original entry date was March 16, 2023. Wikipedia cites March 15, 2023 as the alpha release date; some sources cite March 16. The one-day discrepancy likely reflects timezone differences or staged rollout. Corrected to March 15 per Wikipedia's primary reference to the alpha, but disputed due to conflicting day-level sources. |
| 2023-03-20 | ModelScope Text-to-Video (Alibaba DAMO Academy) | Multiple sources place the Hugging Face upload around March 19-22, 2023. One source cites March 19 as the date a link to the model was shared on HuggingFace; another cites 'over the past weekend from March 22' placing it around March 18-19. The exact day cannot be confirmed to the day from a single authoritative primary source. Date set to March 20 as a best estimate matching the broader news cycle; disputed=true reflects day-level uncertainty. |
| 2023-07-11 | Claude 2 (Anthropic) | The original 'firstOfKind' claim ('first commercially available LLM with a 100K context window') is inaccurate: Anthropic announced 100K context for Claude 1 on May 11, 2023 — before Claude 2 launched. Claude 2 launched with the same 100K limit. Claim softened to reflect the public-interface dimension, which is the genuine novelty. Marked disputed because the first-of-kind scope was overstated. |
| 2023-07-18 | Llama 2 (Meta) | The original claim 'first frontier-class open-weight model with a commercial-use license' is disputed: Falcon 40B (TII) received an Apache 2.0 commercial license in May/June 2023, before Llama 2's July 18 release. Llama 2 also does not use a fully open license (restricts users with >700M MAUs and prohibits using outputs to improve other LLMs in some contexts). Claim softened to 'major frontier lab.' Marked disputed. |
| 2023-12-20 | Midjourney v6 (Midjourney) | Official Midjourney documentation cites December 20, 2023; Wikipedia and VentureBeat cite December 21, 2023 for the alpha release. The one-day discrepancy likely reflects UTC vs. US Pacific timezone. Marked disputed due to conflicting primary/secondary source dates. |
| 2024-08-15 | Google Imagen 3 (Google DeepMind) | US ImageFX access opened around August 15, 2024 (confirmed by VentureBeat and nerdschalk). However, the cited Google blog post is dated August 28, 2024 and describes the global Gemini rollout — not the US ImageFX opening. The entry's claim of 'integration into Gemini Apps for all US users' better matches the August 28 Gemini rollout date. Marked disputed: the capability description implies August 28 (Gemini), but the entry date of August 15 is when US ImageFX access was quietly opened. |
| 2024-11-22 | Lightricks LTX-Video (LTXV) (Lightricks) | Wikipedia states 'November 2024' without specifying the day. The RAIL-M license document references version 0.9 and the ComfyUI Wiki article title uses '2024-11-23' as its publication date covering the release. Multiple sources confirm November 22, 2024 as the release day. Disputed=true reflects that the exact day (22 vs 23) cannot be confirmed from a single unambiguous primary source; month of November 2024 is certain. |
| 2024-12-26 | DeepSeek-V3 (DeepSeek) | The arXiv paper was submitted December 27, 2024 (UTC). Model weights and the GitHub release were published ~December 26, 2024. Minor timezone ambiguity (Dec 26 vs Dec 27) makes day-precision uncertain; marked disputed accordingly. The $5.6M training cost figure comes from the paper itself. |
| 2025-02-24 | Claude 3.7 Sonnet (Anthropic) | Date confirmed as February 24, 2025. The original entry's SWE-bench score of 80.8% is not found in Anthropic's official announcement; the official figures are 63.7% (vanilla pass@1) and 70.3% (with high-compute scaffolding). The 80.8% figure likely derives from a third-party agent harness evaluation. Capability description corrected to 70.3% and marked disputed due to the score discrepancy. |
| 2025-04-05 | Llama 4 (Scout / Maverick) (Meta) | Date confirmed as April 5, 2025 from the official Meta AI blog. The single-H100 claim is technically accurate only with INT4 quantization; the maximum context at that configuration was ~35K tokens, not the full 10M. Full 10M context required 8 H100s. The 10M context window claim is real but the 'single H100' framing overstates accessibility. Marked disputed due to contested single-H100 claim. |
