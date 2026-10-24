
export type Education = {
  school: string;
  degree: string;
  dates: string;
  location: string;
  coursework: string[];
  cgpa?: string;

};

export const education: Education = {
  school: "Madhav Institute of Technology and Science (MITS-DU)",
  degree: "B.Tech. Computer Science and Design",
  dates: "2024 - 2028",
  location: "Gwalior, Madhya Pradesh, India",
  coursework: [
    "Data Structures and Algorithms",
    "Artificial Intelligence",
    "Machine Learning",
    "Database Management Systems",
    "Operating Systems",
    "Computer Networks",
    "Software Engineering",
    "Deep Learning",
  ],
};

export type Certification = {
  name: string;
  issuer: string;
  date: string;
  note?: string;
  link?: string;
};

export const certifications: Certification[] = [
  {
    name: "Machine Learning with Python",
    issuer: "IBM",
    date: "Aug 2025",
  },
  {
    name: "Python for Data Science, AI & Development",
    issuer: "IBM",
    date: "Jul 2025",
  },
  {
    name: "Infosys Springboard AI Internship",
    issuer: "Infosys Springboard",
    date: "Oct 2025 - Jan 2026",
  },
];
