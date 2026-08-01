import type { Entry } from "@/data/types";
import { MODALITY_META } from "@/data/types";
import { dayNumber, domainOf, monthYear } from "@/lib/metrics";
import { MODALITY_COLOR, modalityTint } from "@/lib/ui";
import { providerDomain } from "@/lib/providers";

/** German abbreviations whose trailing period must not end the teaser sentence. */
const ABBREV =
  /(?:Mrd|Mio|Mia|Bio|Tsd|ca|bzw|dh|zB|ua|ggf|inkl|exkl|evtl|sog|usw|vs|Nr|Abs|max|min|Std|Mo|Tab|Abb|St|z|B|u|a|d|h)$/;

function firstSentence(s: string): string {
  const re = /[.!?](?=\s|$)/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(s))) {
    const before = s.slice(0, m.index);
    // A period right after "1,7 Mrd" or "ca" is an abbreviation, not a full stop.
    if (m[0] === "." && ABBREV.test(before.split(/[\s(]/).pop() ?? "")) continue;
    return s.slice(0, m.index + 1).trim();
  }
  return s.trim();
}

/**
 * A single release. Rendered as a native <details> rather than React state so the
 * full analysis and every primary-source link exist in the server HTML — the
 * sources are the whole trust basis of this dataset and crawlers never click.
 */
export function EntryCard({ entry }: { entry: Entry }) {
  const personal = entry.kind === "personal";
  const color = personal ? "var(--brand-deep)" : MODALITY_COLOR[entry.modality];
  const isOpen = entry.license === "open";
  const day = dayNumber(entry.date, entry.datePrecision);
  const domain = providerDomain(entry.house);
  const highlight = firstSentence(entry.capability);
  // Only the remainder goes in the disclosure — repeating the teaser reads as a stutter.
  const rest = entry.capability.startsWith(highlight)
    ? entry.capability.slice(highlight.length).trim()
    : entry.capability;
  const hasMore =
    highlight.length < entry.capability.length ||
    !!entry.whyItMattered ||
    !!entry.firstOfKind ||
    !!entry.note ||
    entry.sources.length > 0;

  const shell =
    "rounded-r-sm border-y border-r border-rule-soft bg-paper/60 transition-colors hover:bg-paper/90";
  const shellStyle = { borderLeft: `4px solid ${color}` };

  const head = (
    <>
      <div className="flex items-center gap-2">
        {personal ? (
          <span
            className="rounded-full px-2 py-[1px] font-mono text-[9px] uppercase tracking-widest"
            style={{ background: "var(--brand)", color: "#0b0f0d" }}
          >
            ★ {entry.personalLabel ?? "Newsletter"}
          </span>
        ) : (
          <>
            <span
              className="rounded-full px-2 py-[1px] font-mono text-[9px] uppercase tracking-widest"
              style={{ background: modalityTint(entry.modality, 0.16), color }}
            >
              {MODALITY_META[entry.modality].short}
            </span>
            <span
              className="rounded-full px-2 py-[1px] font-mono text-[9px] uppercase tracking-widest"
              style={
                isOpen
                  ? { background: color, color: "var(--paper)" }
                  : { border: `1px solid ${color}`, color }
              }
            >
              {isOpen ? "Offen" : "Geschlossen"}
            </span>
          </>
        )}
        {entry.disputed ? (
          <span
            className="font-mono text-[9px] uppercase tracking-widest text-video"
            title="Datum unbestätigt"
          >
            ⚠
          </span>
        ) : null}
        {hasMore ? (
          <span className="ml-auto font-mono text-[10px] text-ink-faint">
            <span className="group-open:hidden">▸</span>
            <span className="hidden group-open:inline">▾</span>
          </span>
        ) : null}
      </div>

      <div className="mt-1.5 flex items-center gap-2">
        {domain ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={`https://www.google.com/s2/favicons?domain=${domain}&sz=64`}
            alt=""
            width={18}
            height={18}
            className="h-[18px] w-[18px] shrink-0 rounded-[3px]"
            loading="lazy"
          />
        ) : null}
        <h4 className="font-display text-lg font-semibold leading-tight text-ink sm:text-xl">
          {entry.name}
        </h4>
      </div>
      <p className="font-mono text-[10px] uppercase tracking-wide text-ink-faint">
        {entry.org}
      </p>

      {/* One-line highlight, always visible */}
      <p className="mt-1.5 text-[15px] leading-snug text-ink">{highlight}</p>
    </>
  );

  return (
    <article className="grid grid-cols-[56px_1fr] gap-3 sm:grid-cols-[72px_1fr] sm:gap-5">
      {/* Date rail */}
      <div className="pt-1 text-right">
        {day ? (
          <div className="font-display text-2xl font-bold leading-none text-ink sm:text-3xl">
            {day}
          </div>
        ) : (
          <div className="font-display text-xl font-bold leading-none text-ink-faint">
            ·
          </div>
        )}
        <div className="mt-1 font-mono text-[9px] uppercase tracking-wider text-ink-faint">
          {monthYear(entry.date)}
        </div>
      </div>

      {hasMore ? (
        <details className={`group ${shell}`} style={shellStyle}>
          <summary className="cursor-pointer list-none py-3 pl-4 pr-4 [&::-webkit-details-marker]:hidden">
            {head}
          </summary>

          <div className="reveal px-4 pb-3">
            {rest ? (
              <p className="mt-1 text-[14px] leading-snug text-ink-soft">
                {rest}
              </p>
            ) : null}
            {entry.whyItMattered ? (
              <p className="mt-2 text-[13px] leading-relaxed text-ink-soft">
                {entry.whyItMattered}
              </p>
            ) : null}
            {entry.firstOfKind ? (
              <p
                className="mt-2.5 inline-block rounded-sm px-2.5 py-1 text-[12px] font-medium leading-tight"
                style={{
                  background: modalityTint(entry.modality, 0.14),
                  color,
                }}
              >
                ★ {entry.firstOfKind}
              </p>
            ) : null}
            {entry.note ? (
              <p
                className="mt-2.5 rounded-sm border px-2.5 py-1.5 text-[12px] leading-snug"
                style={{
                  borderColor: "var(--c-video)",
                  color: "var(--c-video)",
                  background: "rgba(210,105,30,0.06)",
                }}
              >
                ⓘ {entry.note}
              </p>
            ) : null}
            {entry.sources.length ? (
              <div className="mt-3 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="font-mono text-[10px] uppercase tracking-wide text-ink-faint">
                  Quelle:
                </span>
                {/* Domain as anchor text, not "Quelle ↗": it names the authority
                    being cited, which is what both readers and engines weigh. */}
                {entry.sources.map((url) => (
                  <a
                    key={url}
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    className="font-mono text-[10px] tracking-wide text-ink-faint underline decoration-rule underline-offset-2 hover:text-ink"
                  >
                    {domainOf(url)} ↗
                  </a>
                ))}
              </div>
            ) : null}
          </div>
        </details>
      ) : (
        <div className={`${shell} py-3 pl-4 pr-4`} style={shellStyle}>
          {head}
        </div>
      )}
    </article>
  );
}
