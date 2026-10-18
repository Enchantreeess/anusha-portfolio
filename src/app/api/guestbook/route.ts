import { revalidateTag } from "next/cache";
import { GUESTBOOK_TAG, getGuestbook, getLiveGuestbookTotal } from "@/lib/stats/guestbook";

/**
 * Pinged by the giscus widget on /guestbook whenever it sees the comment count.
 * The homepage renders notes from a cached GitHub fetch, so without this a note
 * only shows up after the cache and the ISR page both expire (up to ~20 min).
 * Only revalidates when the cached count really is behind GitHub's.
 */
export async function POST() {
  try {
    const [cached, live] = await Promise.all([getGuestbook(), getLiveGuestbookTotal()]);
    if (!cached.stale && cached.total === live) {
      return Response.json({ revalidated: false, total: live });
    }

    // expire: 0 so whoever just signed sees their note on the very next load,
    // instead of one more stale render while it regenerates in the background.
    revalidateTag(GUESTBOOK_TAG, { expire: 0 });
    return Response.json({ revalidated: true, total: live });
  } catch (error) {
    console.error("[guestbook] revalidate failed:", error);
    return Response.json({ revalidated: false }, { status: 500 });
  }
}
