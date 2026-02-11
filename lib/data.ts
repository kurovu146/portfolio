import {
  SiJavascript,
  SiTypescript,
  SiCplusplus,
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
  bio: `I'm a passionate Software Developer with experience building web applications using modern technologies. I specialize in the MERN stack and love creating elegant, performant solutions to complex problems. As an open source contributor, I believe in the power of community-driven development.`,
  avatarUrl: "/images/avatar.webp",
  resumeUrl: "#",
  roles: [
    "Software Developer",
    "MERN Stack Developer",
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
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce platform with user authentication, product management, shopping cart, and payment integration using Stripe.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    category: "Full Stack",
    githubUrl: "https://github.com/kurovu146",
    liveUrl: "#",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, drag-and-drop functionality, and team workspaces.",
    tags: ["Next.js", "NestJS", "PostgreSQL", "WebSocket"],
    category: "Full Stack",
    githubUrl: "https://github.com/kurovu146",
  },
  {
    title: "Social Media Dashboard",
    description:
      "A responsive dashboard for managing multiple social media accounts with analytics, scheduling, and content management.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
    category: "Frontend",
    githubUrl: "https://github.com/kurovu146",
    liveUrl: "#",
  },
  {
    title: "REST API Service",
    description:
      "A scalable RESTful API with authentication, rate limiting, caching, and comprehensive API documentation.",
    tags: ["NestJS", "PostgreSQL", "Redis", "Swagger"],
    category: "Backend",
    githubUrl: "https://github.com/kurovu146",
  },
  {
    title: "Chat Application",
    description:
      "Real-time chat application with private messaging, group chats, file sharing, and read receipts.",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    category: "Full Stack",
    githubUrl: "https://github.com/kurovu146",
  },
  {
    title: "Portfolio Website",
    description:
      "This portfolio website built with Next.js, Tailwind CSS, and Framer Motion with smooth animations and responsive design.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    category: "Frontend",
    githubUrl: "https://github.com/kurovu146/portfolio",
    liveUrl: "#",
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
    title: "Software Developer",
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
