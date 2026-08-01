import { ImageResponse } from "next/og";
import { dataMeta, entries } from "@/data/timeline";
import { countsByLicense } from "@/lib/metrics";

export const alt =
  "Die Beschleunigung — Zeitstrahl generativer KI-Releases, primärgeprüft";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Satori needs an explicit `display: flex` on any element with several children,
// so every wrapper below sets it deliberately.
export default function Image() {
  const { open } = countsByLicense(entries);
  const openShare = Math.round((open / entries.length) * 100);
  const years = (
    (Date.UTC(2026, 6, 31) - Date.UTC(2022, 10, 30)) /
    (365.25 * 86_400_000)
  )
    .toFixed(1)
    .replace(".", ",");

  const stats: [string, string][] = [
    [String(entries.length), "Meilensteine"],
    [`${openShare} %`, "offene Gewichte"],
    [years, "Jahre Zeitraum"],
  ];

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          background: "#fbfcfb",
          padding: "72px 80px",
          justifyContent: "space-between",
          borderTop: "18px solid #7ed9b1",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 22,
              letterSpacing: 6,
              textTransform: "uppercase",
              color: "#2f9b73",
              fontWeight: 600,
            }}
          >
            Generative KI · Ende 2022 → heute
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 92,
              lineHeight: 1.02,
              fontWeight: 700,
              color: "#18201d",
              marginTop: 24,
              letterSpacing: -2,
            }}
          >
            Die Beschleunigung
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 34,
              lineHeight: 1.3,
              color: "#45504b",
              marginTop: 20,
              maxWidth: 900,
            }}
          >
            Jedes Datum gegen eine Primärquelle geprüft.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", gap: 56 }}>
            {stats.map(([value, label]) => (
              <div
                key={label}
                style={{ display: "flex", flexDirection: "column" }}
              >
                <div
                  style={{
                    display: "flex",
                    fontSize: 60,
                    fontWeight: 700,
                    color: "#18201d",
                  }}
                >
                  {value}
                </div>
                <div
                  style={{
                    display: "flex",
                    fontSize: 20,
                    color: "#8a938d",
                    textTransform: "uppercase",
                    letterSpacing: 2,
                    marginTop: 4,
                  }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
            }}
          >
            <div style={{ display: "flex", fontSize: 26, color: "#18201d", fontWeight: 600 }}>
              timeline.snipki.de
            </div>
            <div style={{ display: "flex", fontSize: 20, color: "#8a938d", marginTop: 6 }}>
              Stand: {dataMeta.lastVerified}
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
