/**
 * Server-rendered JSON-LD. Kept out of `next/script` on purpose: structured data
 * has to be in the initial HTML for crawlers that never execute JavaScript.
 */
export function StructuredData({ json }: { json: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // `<` is the only character that can break out of a script element here;
      // the payload is our own build-time data, never user input.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(json).replace(/</g, "\\u003c"),
      }}
    />
  );
}
