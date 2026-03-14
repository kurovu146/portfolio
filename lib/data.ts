import {
  SiJavascript,
  SiTypescript,
  SiCplusplus,
  SiRust,
  SiGo,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiNestjs,
  SiMongodb,
  SiPostgresql,
  SiRedis,
  SiGit,
  SiFirebase,
  SiDocker,
  SiTailwindcss,
  SiPostman,
  SiJira,
  SiApple,
  SiGithub,
  SiLinkedin,
  SiFacebook,
} from "react-icons/si";
import { Mail, Monitor, Code2 } from "lucide-react";
import { type IconType } from "react-icons";
import { type LucideIcon } from "lucide-react";

// ─── Personal Info ───────────────────────────────────────────────

export const personalInfo = {
  name: "VU DUC TUAN",
  nickname: "KURO",
  email: "kurovu146@gmail.com",
  location: "Vietnam",
  bio: `I'm a Software Engineer passionate about building AI-powered tools, CLI utilities, and web applications. I work across TypeScript, Rust, and Go — from Telegram bots and MCP servers to game backends and terminal tools. I love turning ideas into open source projects that solve real problems.`,
  avatarUrl: "/images/avatar.webp",
  resumeUrl: "#",
  roles: [
    "Software Engineer",
    "Full Stack Developer",
    "Open Source Contributor",
  ],
};

// ─── Social Links ────────────────────────────────────────────────

export interface SocialLink {
  name: string;
  url: string;
  icon: IconType | LucideIcon;
}

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/kurovu146",
    icon: SiGithub,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/kuro-vu",
    icon: SiLinkedin,
  },
  {
    name: "Facebook",
    url: "https://facebook.com/ductuan1406",
    icon: SiFacebook,
  },
  {
    name: "Email",
    url: "mailto:kurovu146@gmail.com",
    icon: Mail as unknown as IconType,
  },
];

// ─── Skills ──────────────────────────────────────────────────────

export type SkillCategory =
  | "Languages"
  | "Frontend"
  | "Backend"
  | "Database"
  | "Tools";

export interface Skill {
  name: string;
  icon: IconType;
  category: SkillCategory;
}

export const skills: Skill[] = [
  { name: "JavaScript", icon: SiJavascript, category: "Languages" },
  { name: "TypeScript", icon: SiTypescript, category: "Languages" },
  { name: "Rust", icon: SiRust, category: "Languages" },
  { name: "Go", icon: SiGo, category: "Languages" },
  { name: "C++", icon: SiCplusplus, category: "Languages" },
  { name: "React", icon: SiReact, category: "Frontend" },
  { name: "Next.js", icon: SiNextdotjs, category: "Frontend" },
  { name: "Tailwind CSS", icon: SiTailwindcss, category: "Frontend" },
  { name: "Node.js", icon: SiNodedotjs, category: "Backend" },
  { name: "NestJS", icon: SiNestjs, category: "Backend" },
  { name: "MongoDB", icon: SiMongodb, category: "Database" },
  { name: "PostgreSQL", icon: SiPostgresql, category: "Database" },
  { name: "Redis", icon: SiRedis, category: "Database" },
  { name: "Firebase", icon: SiFirebase, category: "Database" },
  { name: "Git", icon: SiGit, category: "Tools" },
  { name: "Docker", icon: SiDocker, category: "Tools" },
  { name: "VS Code", icon: Code2 as unknown as IconType, category: "Tools" },
  { name: "Postman", icon: SiPostman, category: "Tools" },
  { name: "Jira", icon: SiJira, category: "Tools" },
  { name: "macOS", icon: SiApple, category: "Tools" },
  { name: "Windows", icon: Monitor as unknown as IconType, category: "Tools" },
];

export const skillCategories: SkillCategory[] = [
  "Languages",
  "Frontend",
  "Backend",
  "Database",
  "Tools",
];

// ─── Projects ────────────────────────────────────────────────────

export type ProjectCategory = "Full Stack" | "Frontend" | "Backend" | "Other";

export interface Project {
  title: string;
  description: string;
  image?: string;
  tags: string[];
  category: ProjectCategory;
  githubUrl?: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    title: "My Assistant",
    description:
      "Personal AI Telegram bot powered by Claude Agent SDK with streaming responses, persistent memory, Gmail/Google Sheets integration, web monitoring, and daily news digest.",
    tags: ["TypeScript", "Bun", "Claude SDK", "SQLite"],
    category: "Full Stack",
    githubUrl: "https://github.com/kurovu146/my-assistant",
  },
  {
    title: "Free Agent",
    description:
      "Lightweight Telegram AI bot built in Rust (~5-15MB RAM) with multi-provider support (Gemini, Groq, Mistral), smart key rotation, auto-fallback, and 19+ tools including web search and memory.",
    tags: ["Rust", "SQLite", "Telegram", "LLM"],
    category: "Full Stack",
    githubUrl: "https://github.com/kurovu146/free-agent",
  },
  {
    title: "BasoTien",
    description:
      "A 2D multiplayer xianxia MMORPG featuring Chinese cultivation mechanics, real-time combat, and server-authoritative architecture with Go backend and Godot client.",
    tags: ["Go", "Godot", "PostgreSQL", "WebSocket"],
    category: "Full Stack",
    githubUrl: "https://github.com/kurovu146/basotien",
  },
  {
    title: "Shellwise",
    description:
      "Smart command history with inline auto-suggest and fuzzy search for your terminal. Features frecency scoring, daemon mode for sub-millisecond latency, and zero-fork design.",
    tags: ["TypeScript", "Bun", "Zsh", "CLI"],
    category: "Backend",
    githubUrl: "https://github.com/kurovu146/shellwise",
  },
  {
    title: "Bracket Engine",
    description:
      "Tournament bracket generation engine supporting single/double elimination, round-robin, Swiss system, and group stage. Published as an npm package.",
    tags: ["TypeScript", "npm", "Algorithm"],
    category: "Backend",
    githubUrl: "https://github.com/kurovu146/bracket-engine",
  },
  {
    title: "Claude Memory MCP",
    description:
      "Long-term memory MCP server for Claude Code with SQLite FTS5 full-text search, BM25 ranking, upsert support, and categorized memory storage.",
    tags: ["JavaScript", "SQLite", "MCP", "Claude Code"],
    category: "Backend",
    githubUrl: "https://github.com/kurovu146/claude-memory-mcp",
  },
];

export const projectCategories: ProjectCategory[] = [
  "Full Stack",
  "Frontend",
  "Backend",
  "Other",
];

// ─── Experience ──────────────────────────────────────────────────

export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    title: "Software Engineer",
    company: "Tech Company",
    location: "Vietnam",
    period: "2023 - Present",
    description: [
      "Developed and maintained web applications using React, Node.js, and PostgreSQL",
      "Collaborated with cross-functional teams to deliver features on time",
      "Implemented CI/CD pipelines and improved deployment workflows",
      "Mentored junior developers and conducted code reviews",
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Docker"],
  },
  {
    title: "Junior Developer",
    company: "Startup Inc.",
    location: "Vietnam",
    period: "2022 - 2023",
    description: [
      "Built RESTful APIs and microservices using NestJS and MongoDB",
      "Developed responsive frontend interfaces with React and Tailwind CSS",
      "Participated in agile development processes and sprint planning",
      "Wrote unit and integration tests to ensure code quality",
    ],
    technologies: ["NestJS", "MongoDB", "React", "TypeScript"],
  },
  {
    title: "Intern Developer",
    company: "Dev Agency",
    location: "Vietnam",
    period: "2021 - 2022",
    description: [
      "Assisted in developing web applications using the MERN stack",
      "Learned best practices for version control and collaborative development",
      "Contributed to open source projects and internal tooling",
    ],
    technologies: ["JavaScript", "React", "Node.js", "Git"],
  },
];
