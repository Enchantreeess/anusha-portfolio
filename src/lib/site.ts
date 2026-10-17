/**
 * The canonical origin, in one place. `metadataBase`, the sitemap and robots.txt
 * all read from here - they previously drifted apart and pointed at a vercel.app
 * host that was never deployed.
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://parascodes.is-a.dev";
