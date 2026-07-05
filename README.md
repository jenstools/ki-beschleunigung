<div align="center">

# Die Beschleunigung

### Wie schnell sich generative KI wirklich bewegt

A scroll-driven, primary-source-checked timeline of generative-AI milestones —
from barely finishing a sentence in late 2022 to writing software, painting
photorealistic images, shooting film clips and speaking like a human. All in
about three and a half years.

**→ Live: [timeline.snipki.de](https://timeline.snipki.de)**

<br/>

![Next.js](https://img.shields.io/badge/Next.js-16.2-000000?logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-19-149ECA?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38BDF8?logo=tailwindcss&logoColor=white)
![Motion](https://img.shields.io/badge/Motion-12-FF4D4D)
![Deployed on Vercel](https://img.shields.io/badge/Vercel-deployed-000000?logo=vercel&logoColor=white)

</div>

---

## What this is

A single, long-scrolling page that argues one thing: **the pace of generative-AI
progress is faster than almost anyone internalises — and we forget how new each
capability was the moment it becomes a button.**

It tells that story across four modalities (text, image, video, audio) using a
curated, verified dataset of capability-shifting releases. Each milestone was
researched, then independently checked against a primary source (the lab's
announcement, paper, or release notes). Dates that couldn't be confirmed — or
where sources disagree — are marked **⚠ unbestätigt** rather than presented as fact.

The site doubles as the public face of **[snipKI](https://snipki.de)** — the KI
Enablement Company — whose pitch sits at the emotional peak of the scroll: you
don't need to track every model; your team needs to learn to *work* at this pace.

## The dataset at a glance

| Metric | Value |
|---|---|
| Milestones | **212** |
| Range | InstructGPT (Jan 2022) → Claude Fable 5 redeploy (Jul 2026) |
| Text & Reasoning | 86 |
| Image | 41 |
| Audio & Voice | 47 |
| Video | 38 |
| Open weights / Closed | 66 / 146 |
| Dates flagged ⚠ unverified | 10 |
| Last verified | 5 July 2026 |

> The dataset is the source of truth. Every stat on the page (and in this table)
> is derived from [`data/timeline.ts`](data/timeline.ts) at build time — nothing
> is hard-coded twice.

## Highlights

- **Scrollytelling narrative** — a hero then-vs-now reveal, a release-cadence
  chart by quarter, the full timeline, an open-vs-closed split, and a "you
  already forgot these were new" beat, all driven by scroll position.
- **Motion, done accessibly** — every animation respects
  `prefers-reduced-motion`; the background hero video falls back to a poster.
- **Editorial design system** — a paper-and-ink palette with a faint mint cast,
  Fraunces / Poppins / JetBrains Mono, subtle paper grain, per-modality accents.
- **Verification discipline** — internal `disputed` / `verificationNote` fields
  keep the research trail; unconfirmed dates surface as ⚠ on the card.
- **Public data API** — the whole dataset is served as static JSON under
  **CC-BY-4.0**, free to reuse.

## Public API

The timeline is exposed as a prerendered, CDN-served JSON endpoint (internal
research fields stripped):

```bash
curl https://timeline.snipki.de/api/v1/timeline
```

```jsonc
{
  "meta": { "version": "v1", "license": "CC-BY-4.0", "lastVerified": "5. Juli 2026", … },
  "count": 212,
  "entries": [ { "id": "text-instructgpt-2022-01-27", "date": "2022-01-27", "modality": "text", … } ]
}
```

Human-readable docs live at **[/api-docs](https://timeline.snipki.de/api-docs)**.
CORS is open (`*`); cached `s-maxage=86400`, `stale-while-revalidate` a week.

## Tech stack

| Layer | Choice |
|---|---|
| Framework | Next.js 16 (App Router, Turbopack) |
| UI | React 19 · TypeScript 5 |
| Styling | Tailwind CSS v4 (CSS-first `@theme`) |
| Animation | [`motion`](https://motion.dev) (Framer Motion 12) |
| Fonts | Fraunces (display) · Poppins (sans) · JetBrains Mono |
| Hosting | Vercel — fully static prerender |

## Project structure

```
app/
  page.tsx                 # composes the 14 narrative sections
  layout.tsx               # fonts, metadata, global chrome
  globals.css              # design tokens + keyframes
  api/v1/timeline/route.ts # public CC-BY JSON endpoint (force-static)
  api-docs/page.tsx        # human-readable API docs
components/                # 24 section + chrome components
  FirstScreen · CadenceChart · Timeline · OpenVsClosed · Closing …
data/
  timeline.ts              # ← the live dataset (Entry[] + dataMeta)
  types.ts                 # Entry / Modality / License types
  SOURCES.md               # sourcing notes
lib/
  metrics.ts · providers.ts · ui.ts
```

> ⚠️ **Note:** `data/timeline.ts` is the live dataset that both the page and the
> API import. A `data/timeline.json` file also exists but is **orphaned/stale** —
> nothing reads it. Always edit the `.ts`.

## The data model

Every milestone is a typed [`Entry`](data/types.ts):

```ts
type Entry = {
  id: string;
  date: string;                 // YYYY-MM-DD (or YYYY-MM)
  datePrecision: "day" | "month";
  modality: "text" | "image" | "video" | "audio";
  name: string;                 // e.g. "Claude Sonnet 5"
  org: string;                  // e.g. "Anthropic"
  license: "open" | "closed";
  capability: string;           // what it could newly do
  whyItMattered: string;        // the delta vs prior state of the art
  firstOfKind?: string;
  sources: string[];            // primary-source URLs
  disputed?: boolean;           // date/claim unconfirmed
  verificationNote?: string;    // what was checked / why disputed
};
```

### Adding a milestone

1. Find the **primary source** (the lab's announcement / paper / release notes).
2. Append an `Entry` to `entries` in [`data/timeline.ts`](data/timeline.ts).
   Order doesn't matter — the UI sorts by date at runtime.
3. Bump `dataMeta` (`total`, `lastVerified`, and `windowEnd` if a new month).
4. If the date can't be pinned to a primary source, set `disputed: true` and
   explain in `verificationNote`.

## Local development

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run lint
```

Requires Node 20+.

## Deployment

Deployed to Vercel as a fully static prerender (the API route is
`force-static`, so new data ships on rebuild — no per-request functions).

```bash
vercel --prod
```

Production alias: **[timeline.snipki.de](https://timeline.snipki.de)**.

## Licensing & attribution

- **Data** — the timeline dataset is released under **CC-BY-4.0**. Attribution:
  *„KI-Zeitstrahl von snipKI"* (`https://timeline.snipki.de`).
- **Code** — © snipKI. Internal project; not licensed for redistribution.

<div align="center">
<br/>

**[snipKI](https://snipki.de)** · the KI Enablement Company

<sub>Schritt halten statt hinterherlaufen.</sub>

</div>
