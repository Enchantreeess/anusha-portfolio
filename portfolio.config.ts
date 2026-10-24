
/**
 * Personal portfolio configuration.
 * Update your identity here; page content lives in src/data/.
 */

export const portfolio = {
  /** Shown in the hero, page titles and social cards. */
  name: "Anusha Singh",

  /** One line under your name. */
  tagline:
    "Computer Science & Design student exploring AI, research, and engineering.",

  /** Longer description for search engines and social sharing. */
  description:
    "Anusha Singh is a Computer Science & Design student at MITS Gwalior, building AI/ML systems, research projects, and thoughtful digital products.",

  location: "Delhi/Gwalior, India",
  timeZone: "Asia/Kolkata",
  utcOffset: "UTC +05:30",

  /** Replace with your final deployed website URL later. */
  url: "http://localhost:3000",

  /** Enter your actual usernames. Empty values hide those profiles. */
  handles: {
    github: "Enchantreeess",
    linkedin: "anusha-singhh",
    x: "anushaandtech",
    leetcode: "Enchantress06",
  },

  /** Giscus guestbook configuration. */
  giscus: {
    repo: "Enchantreeess/Portfolio-",
    repoId: "R_kgDOVKjbA",
    category: "General",
    categoryId: "DIC_kwDOVKjbM4DJe1f",
  },

  /** Replace with your own GitHub repository after creating it. */
  repo: "",

  /** Add your actual contact email. */
  email: "anusha.singh.stem@gmail.com",

  /** Put your own résumé PDF in public/ and enter its path here. */
  resume: "/Anusha_Singh_resume_AI.pdf",

  /** Add a booking link only if you want visitors to schedule calls. */
  bookingLink: "https://cal.com/anusha.tech/15min",

  /** Optional Google Search Console verification token. */
  googleSiteVerification: "",

  /** Optional sections. */
  sections: {
    blog: true,
    anime: false,
  },

  /** Replace these with your own short profile descriptions. */
  bios: {
    github: "AI/ML, software engineering, and research",
    x: "",
    linkedin: "",
  },

  /** Use only real, current follower counts. */
  followers: {
    x: null as string | null,
    linkedin: null as string | null,
  },
} as const;

export type PortfolioConfig = typeof portfolio;
