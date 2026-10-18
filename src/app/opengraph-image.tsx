import fs from "node:fs";
import path from "node:path";
import { ImageResponse } from "next/og";
import { portfolio } from "~/portfolio.config";
import { experiences } from "@/data/experienceData";
import snapshot from "@/data/stats-snapshot.json";

export const alt = `${portfolio.name} - ${portfolio.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Generated rather than committed, so a fork gets its own card from
 * `portfolio.config.ts` and its own data files without opening a design tool.
 *
 * A link preview is rendered small - X shows it around 500px wide - so this is
 * built around three things that survive that: a face, the name, and four
 * numbers. The numbers come from the committed snapshot rather than a live
 * fetch: this route is prerendered at build time, and a card that depends on
 * three third-party APIs being up is a card that sometimes does not exist.
 *
 * ImageResponse renders through Satori: flexbox only, no CSS grid, and every
 * element with more than one child needs an explicit `display: flex`.
 * `radial-gradient` is not supported either - the previous version's dot grid
 * silently rendered as flat black.
 */

/**
 * The media type read from the file's magic bytes, not its extension.
 * `public/avatar.png` is in fact a JPEG - browsers sniff and render it anyway,
 * but Satori trusts the data URI's declared type and silently drew nothing,
 * leaving an empty ring on the card. A fork's avatar may be mislabelled too.
 */
function sniff(buf: Buffer): string | null {
  if (buf.subarray(0, 8).toString("hex") === "89504e470d0a1a0a") return "image/png";
  if (buf.subarray(0, 3).toString("hex") === "ffd8ff") return "image/jpeg";
  if (buf.subarray(0, 4).toString("ascii") === "RIFF" && buf.subarray(8, 12).toString("ascii") === "WEBP")
    return "image/webp";
  if (buf.subarray(0, 4).toString("ascii") === "GIF8") return "image/gif";
  return null;
}

/**
 * Inlined as a data URI because Satori cannot read `/avatar.png` the way the
 * browser can - it has no origin to resolve a root-relative path against.
 */
const avatar = (() => {
  try {
    const file = fs.readFileSync(path.join(process.cwd(), "public", "avatar.png"));
    const type = sniff(file);
    return type ? `data:${type};base64,${file.toString("base64")}` : null;
  } catch {
    return null;
  }
})();

const C = {
  bg: "#09090b",
  ink: "#fafafa",
  mute: "#a1a1aa",
  dim: "#71717a",
  line: "rgba(255,255,255,0.09)",
  tile: "rgba(255,255,255,0.03)",
  accent: "#d6242b",
};

const n = (v: number) => v.toLocaleString("en-US");

/** The four figures worth reading at thumbnail size. */
const STATS: { value: string; label: string }[] = [
  { value: String(experiences.length), label: "ROLES" },
  { value: "GSoC '26", label: "OPEN SOURCE" },
  { value: n(snapshot.leetcode.maxRating), label: "LEETCODE PEAK" },
  { value: n(snapshot.codeforces.maxRating), label: "CODEFORCES" },
];

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
          background: C.bg,
          backgroundImage: `linear-gradient(135deg, #111113 0%, ${C.bg} 55%)`,
          padding: "60px 64px",
          fontFamily: "sans-serif",
        }}
      >
        {/* face + name: the part that reads at any size */}
        <div style={{ display: "flex", alignItems: "center", gap: 34 }}>
          {avatar && (
            <img
              src={avatar}
              width={146}
              height={146}
              style={{ borderRadius: 73, border: `2px solid ${C.line}` }}
            />
          )}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                fontSize: 19,
                letterSpacing: 5,
                color: C.dim,
              }}
            >
              {portfolio.location.toUpperCase()}
            </div>
            <div
              style={{
                fontSize: 86,
                fontWeight: 700,
                color: C.ink,
                letterSpacing: -2,
                marginTop: 8,
                lineHeight: 1,
              }}
            >
              {portfolio.name}
            </div>
          </div>
        </div>

        <div
          style={{
            fontSize: 31,
            color: C.mute,
            lineHeight: 1.35,
            maxWidth: 1010,
          }}
        >
          {portfolio.tagline}
        </div>

        {/* the proof */}
        <div style={{ display: "flex", gap: 14 }}>
          {STATS.map((s) => (
            <div
              key={s.label}
              style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
                padding: "18px 22px",
                borderRadius: 14,
                border: `1px solid ${C.line}`,
                background: C.tile,
              }}
            >
              <div style={{ fontSize: 40, fontWeight: 700, color: C.ink, lineHeight: 1.1 }}>
                {s.value}
              </div>
              <div style={{ fontSize: 16, letterSpacing: 2, color: C.dim, marginTop: 8 }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
          <div style={{ height: 4, width: 54, background: C.accent, borderRadius: 2 }} />
          <div style={{ fontSize: 25, color: C.mute }}>
            {portfolio.url.replace(/^https?:\/\//, "")}
          </div>
          <div style={{ display: "flex", flex: 1 }} />
          <div style={{ fontSize: 25, color: C.dim }}>{`@${portfolio.handles.x}`}</div>
        </div>
      </div>
    ),
    size,
  );
}
