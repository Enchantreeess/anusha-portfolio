
import type { ComponentType } from "react";
import {
  Network,
  Search,
  Radio,
  Sparkles,
  MousePointerClick,
} from "lucide-react";
import {
  SiNextdotjs,
  SiTypescript,
  SiReact,
  SiThreedotjs,
  SiLangchain,
  SiNodedotjs,
  SiTailwindcss,
  SiGithub,
  SiFastapi,
  SiRedis,
  SiPython,
  SiKotlin,
  SiAndroid,
  SiJetpackcompose,
  SiEclipsemosquitto,
  SiSupabase,
  SiDatabricks,
  SiPostgresql,
  SiDocker,
  SiGrafana,
  SiPrometheus,
  SiScikitlearn,
  SiQdrant,
  SiGooglechrome,
  SiGradle,
  SiJunit5,
} from "react-icons/si";

export type TechIcon = ComponentType<{ className?: string }>;

export type TechKey =
  | "next"
  | "ts"
  | "react"
  | "three"
  | "langchain"
  | "langgraph"
  | "rag"
  | "node"
  | "tailwind"
  | "github"
  | "fastapi"
  | "redis"
  | "python"
  | "kotlin"
  | "android"
  | "compose"
  | "mqtt"
  | "supabase"
  | "databricks"
  | "postgres"
  | "docker"
  | "grafana"
  | "prometheus"
  | "sklearn"
  | "qdrant"
  | "chrome"
  | "gradle"
  | "junit"
  | "playwright"
  | "websockets"
  | "llm";

export type TechItem = TechKey | { label: string; tooltip?: string };

export type ProjectStatus = "live" | "building" | "research" | "archived";

export interface Project {
  slug: string;
  title: string;
  imageTitle: string;
  src: string;
  lightModeSrc?: string;
  description: string;
  tech: TechItem[];
  github: string;
  live?: string;
  status: ProjectStatus;
  starsText?: string;
  backgroundImage?: string;
  hasPin: boolean;
}

export const iconMap: Record<TechKey, TechIcon> = {
  next: SiNextdotjs,
  ts: SiTypescript,
  react: SiReact,
  three: SiThreedotjs,
  langchain: SiLangchain,
  langgraph: Network,
  rag: Search,
  node: SiNodedotjs,
  tailwind: SiTailwindcss,
  github: SiGithub,
  fastapi: SiFastapi,
  redis: SiRedis,
  python: SiPython,
  kotlin: SiKotlin,
  android: SiAndroid,
  compose: SiJetpackcompose,
  mqtt: SiEclipsemosquitto,
  supabase: SiSupabase,
  databricks: SiDatabricks,
  postgres: SiPostgresql,
  docker: SiDocker,
  grafana: SiGrafana,
  prometheus: SiPrometheus,
  sklearn: SiScikitlearn,
  qdrant: SiQdrant,
  chrome: SiGooglechrome,
  gradle: SiGradle,
  junit: SiJunit5,
  playwright: MousePointerClick,
  websockets: Radio,
  llm: Sparkles,
};

export const techNames: Record<TechKey, string> = {
  next: "Next.js",
  ts: "TypeScript",
  react: "React",
  three: "Three.js",
  langchain: "LangChain",
  langgraph: "LangGraph",
  rag: "RAG",
  node: "Node.js",
  tailwind: "Tailwind CSS",
  github: "GitHub",
  fastapi: "FastAPI",
  redis: "Redis",
  python: "Python",
  kotlin: "Kotlin",
  android: "Android",
  compose: "Jetpack Compose",
  mqtt: "MQTT",
  supabase: "Supabase",
  databricks: "Databricks",
  postgres: "PostgreSQL",
  docker: "Docker",
  grafana: "Grafana",
  prometheus: "Prometheus",
  sklearn: "scikit-learn",
  qdrant: "Qdrant",
  chrome: "Chrome Extension",
  gradle: "Gradle",
  junit: "JUnit",
  playwright: "Playwright",
  websockets: "WebSockets",
  llm: "LLM",
};

export const projectsData: Project[] = [
  {
    slug: "swasthiyalink",
    title: "SwasthiyaLink",
    imageTitle: "Smart Healthcare Dashboard",
    src: "/project-image/swasthyalink.jpeg",
    description:
      "A smart healthcare dashboard combining patient health information, medical-report OCR, vital tracking, appointment management, and predictive analytics to support more accessible and organised healthcare.",
    tech: [
      "react",
      "ts",
      "tailwind",
      "node",
      "python",
      "fastapi",
      "sklearn",
    ],
    github: "",
    status: "building",
    backgroundImage: "/project-hover-testpilot-ai.webp",
    hasPin: true,
  },
  {
    slug: "skillbridge",
    title: "SkillBridge",
    imageTitle: "Microlearning Platform",
    src: "/project-image/Skillswap.png",
    description:
      "A full-stack microlearning platform designed to help learners access structured learning content and develop skills through a focused digital experience.",
    tech: ["next", "ts", "tailwind", "node", "supabase"],
    github: "",
    status: "building",
    backgroundImage: "/project-hover-campusquest.webp",
    hasPin: true,
  },
  {
    slug: "lunar-photoclinometry",
    title: "Lunar Photoclinometry",
    imageTitle: "Lunar Surface Research",
    src: "/project-image/photoclinometry.png",
    description:
      "A research-oriented project exploring lunar surface analysis through photoclinometry and image-based techniques to study terrain and surface characteristics.",
    tech: ["python", "sklearn"],
    github: "",
    status: "research",
    backgroundImage: "/project-hover-wifi-rtt.webp",
    hasPin: true,
  },
];
