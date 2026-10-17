/**
 * The one file to edit when you fork this portfolio.
 *
 * Everything here is identity: who the site is about and where to find them.
 * Page *content* - roles, projects, skills, highlights - lives in `src/data/`.
 * See SETUP.md for the full list and what each file expects.
 */

export const portfolio = {
  /** Shown in the hero, page titles and social cards. */
  name: "Paras",
  /** One line under the name. Keep it short - it is also the meta description. */
  tagline: "Software engineer building concurrent systems, backend services, and production AI/ML.",
  /** Longer form, used for Open Graph and the social hover cards. */
  description:
    "Software engineer building concurrent systems, backend services, and production AI/ML across C++, Python, Java, and Kotlin.",
  location: "Bengaluru, India",
  /** IANA zone for the live clock in the banner. */
  timeZone: "Asia/Kolkata",
  /** UTC offset label shown on the social hover cards. */
  utcOffset: "UTC +05:30",

  /** Canonical origin. NEXT_PUBLIC_SITE_URL overrides this at build time. */
  url: "https://parascodes.is-a.dev",

  /**
   * Usernames only, never full URLs - the code builds the links and the stats
   * fetchers query these directly. Leave a value empty to hide that profile.
   */
  handles: {
    github: "Paras-ydv",
    linkedin: "parascodes",
    x: "parascodes",
    leetcode: "parascodes",
    codeforces: "Paras_ydv",
    codechef: "paras_ydv",
  },

  email: "parasydv77@gmail.com",
  /** Path under /public. Swap the file and this string together. */
  resume: "/Paras_Resume.pdf",
  /** "Book an intro call" button. Set to "" to hide it. */
  bookingLink: "https://cal.com/parascodes/30min",

  /**
   * Search Console verification. Paste the `content` value from Google's
   * "HTML tag" method here - just the token, not the whole <meta> tag. Left
   * empty, no verification tag is emitted.
   */
  googleSiteVerification: "",

  /**
   * Toggle optional sections off without deleting their code. The components
   * and routes stay in place, so flipping one back to true is the whole job.
   */
  sections: {
    /** Off until the first post is written - an empty list reads as neglect. */
    blog: false,
    anime: true,
  },

  /**
   * Profile blurbs for the hover cards. GitHub's is replaced by the live bio
   * when the API answers; the other two are always read from here because
   * X and LinkedIn block unauthenticated requests.
   */
  bios: {
    github: "Concurrent systems, backend services, and production AI/ML",
    x: "GSoC'26 Catrobat | SDE Intern @GoCreditAI | Ex-NatWest, Samsung R&D, Carver Agents",
    linkedin: "Building concurrent systems, backend services, and production AI/ML.",
  },

  /**
   * X and LinkedIn give no public follower count, so there is nothing to fetch.
   * Put real numbers here to show them, or leave null to show no stat row.
   */
  followers: {
    x: "1K+" as string | null,
    linkedin: "5K+" as string | null,
  },
} as const;

export type PortfolioConfig = typeof portfolio;
