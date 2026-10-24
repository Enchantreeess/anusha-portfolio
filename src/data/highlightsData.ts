
export type Highlight = {
  id: string;
  title: string;
  badge: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  imageFit: "contain" | "cover";
  cardWidth: number;
  link?: string;
};

export const highlightsData: Highlight[] = [
  {
    id: "raisina-dialogue-2026",
    title:
      "Selected to attend Raisina Dialogue 2026 through student accreditation",
    badge: "Raisina Dialogue 2026",
    image: "/highlights/raisina.jpeg",
    imageWidth: 1200,
    imageHeight: 800,
    imageFit: "contain",
    cardWidth: 300,
  },
  {
    id: "indo-china-youth-dialogue-2026",
    title: "Selected for the Indo–China Youth Dialogue 2026",
    badge: "Youth Dialogue 2026",
    image: "/highlights/youth.jpeg",
    imageWidth: 1200,
    imageHeight: 800,
    imageFit: "contain",
    cardWidth: 300,
  },
  {
    id: "bjym-magazine",
    title:
      "Contributed to magazine and editorial initiatives associated with BJYM",
    badge: "Editorial & Media",
    image: "/highlights/article.png",
    imageWidth: 1200,
    imageHeight: 800,
    imageFit: "contain",
    cardWidth: 300,
  },
  {
    id: "second-year-orientation",
    title:
      "Helped conduct the Second-Year Orientation Programme at MITS Gwalior",
    badge: "Student Leadership",
    image: "/highlights/orientation.jpeg",
    imageWidth: 1200,
    imageHeight: 800,
    imageFit: "contain",
    cardWidth: 300,
  },
  {
    id: "amity-mun-best-dressed",
    title: "Won Best Delegate at Amity Model United Nations",
    badge: "Best Dressed and Best Delegate",
    image: "/highlights/best del.jpeg",
    imageWidth: 1200,
    imageHeight: 800,
    imageFit: "contain",
    cardWidth: 280,
  },
];
