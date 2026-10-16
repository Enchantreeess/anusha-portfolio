export type Highlight = {
  id: string;
  title: string;
  badge: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  imageFit?: "cover" | "contain";
  cardWidth?: number;
  link?: string;
};

/**
 * Real proof, each linked to the post announcing it. Entries without an image
 * render as the blueprint-grid placeholder card, so adding one is optional.
 */
export const highlightsData: Highlight[] = [
  {
    id: "gsoc-2026",
    title: "Selected for Google Summer of Code 2026 with the International Catrobat Association",
    badge: "GSoC 2026",
    image: "/highlights/gsoc-letter.webp",
    imageWidth: 1200,
    imageHeight: 1492,
    imageFit: "contain",
    cardWidth: 200,
    link: "https://lnkd.in/p/gKrFtq7E",
  },
  {
    id: "databricks-hackathon",
    title: "Finalist at the Databricks Campus Hackathon - top 10 of 700+ teams",
    badge: "Databricks",
    image: "/highlights/databricks-hackathon.webp",
    imageWidth: 800,
    imageHeight: 533,
    imageFit: "cover",
    cardWidth: 300,
    link: "https://lnkd.in/p/gytyPAvj",
  },
  {
    id: "sih-2025",
    title: "Shortlisted for the Smart India Hackathon 2025 Grand Finale",
    badge: "SIH 2025",
    image: "/highlights/sih-finalist.webp",
    imageWidth: 539,
    imageHeight: 651,
    imageFit: "contain",
    cardWidth: 205,
    link: "https://lnkd.in/p/gbW-3NDm",
  },
  {
    id: "leetcode-knight",
    title: "Reached LeetCode Knight - top 5.72%",
    badge: "LeetCode",
    image: "/highlights/leetcode-knight.webp",
    imageWidth: 1400,
    imageHeight: 522,
    imageFit: "cover",
    cardWidth: 330,
    link: "https://lnkd.in/p/gsfFB_GU",
  },
  {
    id: "leetcode-tshirt",
    title: "LeetCode sent the shirt",
    badge: "LeetCode",
    image: "/highlights/leetcode-tshirt.webp",
    imageWidth: 480,
    imageHeight: 637,
    imageFit: "cover",
    cardWidth: 195,
    link: "https://lnkd.in/p/gQrD2X6q",
  },
  {
    id: "hacktoberfest",
    title: "Completed Hacktoberfest and received the shirt",
    badge: "Hacktoberfest",
    image: "/highlights/hacktoberfest-tshirt.webp",
    imageWidth: 800,
    imageHeight: 600,
    imageFit: "cover",
    cardWidth: 270,
    link: "https://lnkd.in/p/g9FaJZvx",
  },
  {
    id: "open-source",
    title: "14 merged pull requests across 8 external repositories",
    badge: "Open Source",
    image: "",
    imageWidth: 1200,
    imageHeight: 800,
    imageFit: "contain",
    cardWidth: 250,
    link: "https://github.com/Paras-ydv",
  },
  {
    id: "nutanix-nca",
    title: "Nutanix Certified Associate (NCA) 6",
    badge: "Nutanix",
    image: "",
    imageWidth: 1200,
    imageHeight: 800,
    imageFit: "contain",
    cardWidth: 220,
  },
  {
    id: "google-cloud",
    title: "Google Cloud Engineering Certificate",
    badge: "Google Cloud",
    image: "",
    imageWidth: 1200,
    imageHeight: 800,
    imageFit: "contain",
    cardWidth: 240,
  },
  {
    id: "postman-expert",
    title: "Postman API Fundamentals Student Expert",
    badge: "Postman",
    image: "",
    imageWidth: 1200,
    imageHeight: 800,
    imageFit: "contain",
    cardWidth: 240,
  },
];
