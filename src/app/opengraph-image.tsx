import { ImageResponse } from "next/og";
import { portfolio } from "~/portfolio.config";

export const alt = `${portfolio.name} - ${portfolio.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Generated rather than committed, so a fork gets its own card from
 * `portfolio.config.ts` without opening a design tool. ImageResponse supports
 * flexbox only - no CSS grid, no external stylesheets.
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#09090b",
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.07) 1px, transparent 0)",
          backgroundSize: "32px 32px",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 22,
              letterSpacing: 6,
              textTransform: "uppercase",
              color: "#71717a",
            }}
          >
            {portfolio.location}
          </div>
          <div
            style={{
              fontSize: 104,
              fontWeight: 700,
              color: "#fafafa",
              marginTop: 18,
              letterSpacing: -2,
            }}
          >
            {portfolio.name}
          </div>
          <div
            style={{
              fontSize: 34,
              color: "#a1a1aa",
              marginTop: 20,
              lineHeight: 1.35,
              maxWidth: 900,
            }}
          >
            {portfolio.tagline}
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          <div style={{ height: 3, width: 72, background: "#52525b" }} />
          <div style={{ fontSize: 24, color: "#71717a" }}>
            {portfolio.url.replace(/^https?:\/\//, "")}
          </div>
          <div style={{ fontSize: 24, color: "#3f3f46" }}>·</div>
          <div style={{ fontSize: 24, color: "#71717a" }}>
            {`@${portfolio.handles.github}`}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
