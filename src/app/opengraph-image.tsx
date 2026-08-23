import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";
import { SITE } from "@/content/site";

export const alt = `${SITE.name} — doctor-led care, read as one system`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * The share card. Ink ground, the wordmark with its Pepper 500 period, and the
 * regulatory line in the mono layer — the same three elements the header
 * carries.
 *
 * The wordmark is set in Funnel Display, read off disk at build time — the
 * share card is the one place the brand face has to be embedded rather than
 * linked, because a social crawler renders the PNG and never loads a stylesheet.
 */
export default async function OpengraphImage() {
  const display = await readFile(
    path.join(process.cwd(), "src/app/_fonts/FunnelDisplay-Medium.ttf"),
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0A0A0B",
          color: "#FDFDFC",
          padding: "72px 80px",
          fontFamily: "Funnel Display, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 22,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#93A6FF",
          }}
        >
          {SITE.regulatoryLine}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ display: "flex", fontSize: 108, fontWeight: 600, letterSpacing: "-0.03em" }}>
            pepper me<span style={{ color: "#DC3D27" }}>.</span>
          </div>
          <div style={{ fontSize: 34, color: "rgba(253,253,252,0.72)", maxWidth: 900 }}>
            {SITE.tagline}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(253,253,252,0.2)",
            paddingTop: 24,
            fontSize: 22,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "rgba(253,253,252,0.72)",
          }}
        >
          <span>$149 to start</span>
          <span>14 AHPRA-registered Australian doctors</span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Funnel Display", data: display, style: "normal", weight: 500 },
      ],
    },
  );
}
