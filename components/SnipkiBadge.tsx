export function SnipkiBadge() {
  return (
    <a
      href="https://snipki.de/?utm_source=ki-timeline&utm_medium=website&utm_campaign=beschleunigung&utm_content=badge"
      target="_blank"
      rel="noreferrer"
      aria-label="Gebaut von snipki.de"
      className="fixed bottom-4 right-4 z-50 flex items-center gap-2 rounded-full border border-rule bg-paper/90 px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest text-ink-soft shadow-sm backdrop-blur transition-colors hover:text-ink"
    >
      <span className="h-2 w-2 rounded-full" style={{ background: "var(--brand)" }} />
      gebaut von <span className="font-semibold text-ink">snipki.de</span>
    </a>
  );
}
