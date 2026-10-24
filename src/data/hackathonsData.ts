
export type Hackathon = {
  id: string;
  event: string;
  organizer: string;
  placement: string;
  scale: string;
  dates: string;
  project: string;
  problem: string;
  built: string[];
  principle?: string;
  team?: string[];
  tech: string[];
  metrics: { label: string; value: string }[];
  links?: { label: string; href: string }[];
};

export const hackathonsData: Hackathon[] = [
  {
    id: "hackorbit-2025",
    event: "HackOrbit 2025",
    organizer: "HackOrbit",
    placement: "Runner-up",
    scale: "10,000+ participants/entries reported",
    dates: "2025",
    project: "AI/ML Hackathon Project",
    problem:
      "Developing a technology-driven solution to address a real-world problem within a competitive national hackathon.",
    built: [
      "Qualified among the top-performing teams in the national competition.",
      "Worked on solution development, technical implementation, and presenting the project to evaluators.",
    ],
    tech: ["AI/ML", "Software Development"],
    metrics: [
      { label: "National Rank", value: "Runner-up" },
      { label: "Competition Scale", value: "10,000+" },
      { label: "Year", value: "2025" },
    ],
  },
  {
    id: "hackground-2025",
    event: "HackGround 2025",
    organizer: "Thoughtworks, Gurgaon",
    placement: "Finalist (Top-5) among 10,000+ teams.",
    scale: "National-level competition",
    dates: "2025",
    project: "Hackathon Project",
    problem:
      "Working on a practical technology solution as part of a competitive hackathon.",
    built: [
      "Advanced to the final stages of the competition.",
      "Participated through Round 3, developing and presenting the project as part of the competition process.",
    ],
    tech: ["Software Development", "Problem Solving"],
    metrics: [
      { label: "Stage Reached", value: "Finalist (Top-5)" },
      { label: "Year", value: "2025" },
    ],
  },
  {
    id: "iit-guwahati-hackathon",
    event: "IIT Guwahati Hackathon",
    organizer: "Indian Institute of Technology Guwahati",
    placement: "Selected",
    scale: "Hackathon Finalist",
    dates: "2025",
    project: "Hackathon Project",
    problem:
      "Selected to participate in a competitive hackathon focused on technical problem-solving and innovation.",
    built: [
      "Earned selection for the hackathon.",
    ],
    tech: ["Technology", "Problem Solving"],
    metrics: [
      { label: "Achievement", value: "Selected" },
    ],
  },
];
