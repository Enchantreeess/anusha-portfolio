
export type ExperienceData = {
  title: string;
  role: string;
  dates: string;
  location: string;
  src: string;
  type?: string;
  imageFit?: "contain" | "cover";
  imageBleed?: boolean;
  imageZoom?: number;
  description: string;
  tech: string[];
  metrics?: { label: string; value: string }[];
  links?: { label: string; href: string }[];
  screenshot?: string;
};

export const experiences: ExperienceData[] = [
  {
    title: "Infosys Springboard",
    role: "AI Intern",
    dates: "Oct 2025 - Jan 2026",
    location: "Remote",
     src: "/Experience-image/infosys.png",
    type: "Internship",
    imageFit: "contain",
    description: `
      Worked on AI-focused learning and project work as part of the Infosys Springboard internship.
      Explored emotion detection and music recommendation as application areas for artificial intelligence and machine learning.
      Applied Python and machine learning concepts to practical project development.
    `,
    tech: [
      "Python",
      "Artificial Intelligence",
      "Machine Learning",
    ],
  },
  {
    title: "Querencia",
    role: "Graphics Lead",
    dates: "Dates to be added",
    location: "MITS Gwalior, India",
    src: "/Experience-image/querencia.png",
   description: `
      Led graphics-related work and contributed to the visual identity of the organisation.
      Worked on creative design and visual communication for activities and initiatives.
      Contributed design direction and supported the presentation of content through visual assets.
    `,
    tech: [
      "Graphic Design",
      "Visual Communication",
      "Creative Direction",
      "Design",
    ],
  },
  {
    title: "Google Developer Groups",
    role: "Public Relations Member",
    dates: "Dates to be added",
    location: "MITS Gwalior, India",
    src: "/Experience-image/gdg.webp",
    type: "Community",
    imageFit: "contain",
    description: `
      Contribute to public relations and community engagement activities.
      Support communication and outreach for developer-focused initiatives and events.
      Help promote technical learning opportunities and community participation.
    `,
    tech: [
      "Public Relations",
      "Community Outreach",
      "Communication",
      "Developer Community",
    ],
  },
  {
    title: "College Magazine",
    role: "Editor-in-Chief",
    dates: "2026",
    location: "MITS Gwalior, India",
    src: "/Experience-image/mits gwalior.png",
    type: "Editorial Leadership",
    imageFit: "contain",
    description: `
      Lead the editorial work and content development for the college magazine.
      Coordinate contributions across editorial, research, student spotlight, alumni, and institutional sections.
      Work with the design team to organise content and maintain consistency across the publication.
      Review written material and coordinate with contributors and faculty during the publication process.
    `,
    tech: [
      "Editorial Leadership",
      "Content Writing",
      "Editing",
      "Research Communication",
      "Team Coordination",
    ],
  },
];

