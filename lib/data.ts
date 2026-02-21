import {
  SiJavascript,
  SiTypescript,
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
  SiGodotengine,
  SiGraphql,
  SiPrisma,
  SiMysql,
  SiSqlite,
  SiBun,
  SiGithub,
  SiLinkedin,
  SiFacebook,
  SiApple,
} from "react-icons/si";
import { Mail, Code2 } from "lucide-react";
import { type IconType } from "react-icons";
import { type LucideIcon } from "lucide-react";

// ─── Personal Info ───────────────────────────────────────────────

export const personalInfo = {
  name: "VU DUC TUAN",
  nickname: "KURO",
  email: "tuanvd14622@gmail.com",
  location: "Hanoi, Vietnam",
  bio: `I'm a Web Developer with 4+ years of experience building scalable web applications using modern technologies. I specialize in TypeScript, React/Next.js, and Node.js/NestJS with expertise in GraphQL, RESTful APIs, and microservices. Passionate about game development with Go & Godot Engine, and building AI-powered tools.`,
  avatarUrl: "/images/avatar.webp",
  resumeUrl: "#",
  roles: [
    "Web Developer",
    "TypeScript & Go Developer",
    "Game Developer",
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
    url: "mailto:tuanvd14622@gmail.com",
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
  { name: "Go", icon: SiGo, category: "Languages" },
  { name: "React", icon: SiReact, category: "Frontend" },
  { name: "Next.js", icon: SiNextdotjs, category: "Frontend" },
  { name: "Tailwind CSS", icon: SiTailwindcss, category: "Frontend" },
  { name: "Node.js", icon: SiNodedotjs, category: "Backend" },
  { name: "NestJS", icon: SiNestjs, category: "Backend" },
  { name: "Bun", icon: SiBun, category: "Backend" },
  { name: "GraphQL", icon: SiGraphql, category: "Backend" },
  { name: "PostgreSQL", icon: SiPostgresql, category: "Database" },
  { name: "MongoDB", icon: SiMongodb, category: "Database" },
  { name: "MySQL", icon: SiMysql, category: "Database" },
  { name: "Redis", icon: SiRedis, category: "Database" },
  { name: "SQLite", icon: SiSqlite, category: "Database" },
  { name: "Prisma", icon: SiPrisma, category: "Database" },
  { name: "Firebase", icon: SiFirebase, category: "Database" },
  { name: "Git", icon: SiGit, category: "Tools" },
  { name: "Docker", icon: SiDocker, category: "Tools" },
  { name: "Godot Engine", icon: SiGodotengine, category: "Tools" },
  { name: "VS Code", icon: Code2 as unknown as IconType, category: "Tools" },
  { name: "macOS", icon: SiApple, category: "Tools" },
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
    title: "Baby Name Numerology",
    description:
      "Vietnamese baby name suggestion tool based on Pythagorean numerology & Five Elements (Ngũ Hành). Analyzes 6 numerology indices, suggests compatible names, and supports name comparison.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    category: "Full Stack",
    githubUrl: "https://github.com/kurovu146/baby-name-numerology",
    liveUrl: "https://baby-name-numerology.vercel.app",
  },
  {
    title: "My Assistant",
    description:
      "Personal AI-powered Telegram bot built with Claude Agent SDK. Features streaming responses, persistent memory, Gmail integration, web monitoring, and news digest.",
    tags: ["Bun", "TypeScript", "grammY", "Claude SDK", "SQLite"],
    category: "Full Stack",
    githubUrl: "https://github.com/kurovu146/my-assistant",
  },
  {
    title: "Genexus Tools",
    description:
      "Internal developer tools to help low-code developers save time and improve productivity. Built for GMO-Z.com Runsystem JSC.",
    tags: ["NestJS", "ReactJS", "Prisma", "Supabase"],
    category: "Full Stack",
    githubUrl: "https://github.com/kurovu146/GenexusTools",
  },
  {
    title: "Free To Earn",
    description:
      "Freelance project with features including image upload, giftcode, missions, and Telegram chatbot integration.",
    tags: ["Node.js", "TypeScript", "PostgreSQL", "GraphQL", "Prisma", "Firebase"],
    category: "Full Stack",
  },
  {
    title: "Tournament – Playcore",
    description:
      "Gaming tournament platform with Telegram chatbot, friend invites, missions, and real-time features. Built at Lucis Network.",
    tags: ["NestJS", "Redis", "GraphQL", "Prisma", "S3"],
    category: "Backend",
  },
  {
    title: "Portfolio Website",
    description:
      "This portfolio website built with Next.js, Tailwind CSS, and Framer Motion with smooth animations and responsive design.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    category: "Frontend",
    githubUrl: "https://github.com/kurovu146/portfolio",
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
    title: "Web Developer",
    company: "GMO-Z.com RUNSYSTEM JSC",
    location: "Hanoi, Vietnam",
    period: "Oct 2023 - Present",
    description: [
      "Develop and maintain internal tools (Genexus Tools) to improve developer productivity",
      "Build web applications including Huyndai Ev-Showroom and WeSmile platforms",
      "Work with Chuseki low-code platform for rapid application development",
      "Collaborate in teams of 2–16 members across multiple projects",
    ],
    technologies: ["NestJS", "ReactJS", "Prisma", "Supabase", "MongoDB", "Bubble.io"],
  },
  {
    title: "Web Developer",
    company: "Vitex Software JSC (OnSite)",
    location: "Hanoi, Vietnam",
    period: "Nov 2024 - May 2025",
    description: [
      "Converted backend service from Nocode platform (Bubble.io) to NestJS",
      "Built scalable REST APIs with TypeORM and PostgreSQL",
      "Integrated real-time features using Bubble.io WebSocket",
    ],
    technologies: ["NestJS", "TypeORM", "PostgreSQL", "Bubble.io"],
  },
  {
    title: "Web Developer",
    company: "Freelancer",
    location: "Ho Chi Minh City, Vietnam",
    period: "May 2023 - Sep 2023",
    description: [
      "Built full-stack application with image upload, giftcode, and mission features",
      "Implemented Telegram chatbot integration",
      "Designed GraphQL APIs with Prisma ORM and Firebase integration",
    ],
    technologies: ["Node.js", "TypeScript", "PostgreSQL", "GraphQL", "Prisma", "Firebase"],
  },
  {
    title: "Backend Developer",
    company: "TDT Asia",
    location: "Hanoi, Vietnam",
    period: "Dec 2022 - Apr 2023",
    description: [
      "Implemented authentication, 2FA, and chart/analytics features",
      "Built RESTful APIs using NestJS with Sequelize ORM",
      "Worked in a team of 8 on financial information systems",
    ],
    technologies: ["NestJS", "PostgreSQL", "Sequelize", "RESTful"],
  },
  {
    title: "Backend Developer",
    company: "Lucis Network",
    location: "Hanoi, Vietnam",
    period: "Jul 2022 - Nov 2022",
    description: [
      "Built Tournament – Playcore platform with Telegram chatbot and mission system",
      "Designed NFT service with third-party integration (Alchemy, Moralis)",
      "Optimized performance with scale up, batch processing, and Redis caching",
    ],
    technologies: ["NestJS", "Redis", "GraphQL", "Prisma", "S3", "MongoDB", "Kafka"],
  },
  {
    title: "Web Developer",
    company: "Misa JSC",
    location: "Hanoi, Vietnam",
    period: "Jun 2021 - Dec 2021",
    description: [
      "Developed MisaCukCuk web application for restaurant management",
      "Built frontend using HTML, CSS, JavaScript, and VueJS",
      "Worked with C# SQL and MySQL for backend services",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "VueJS", "C#", "MySQL"],
  },
];
