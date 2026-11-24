import type { SkillCategory } from "@/types/content";

export const skillCategories = [
  {
    id: "frontend",
    title: "Frontend",
    skills: ["React", "React Native"],
  },
  {
    id: "backend-databases",
    title: "Backend & Databases",
    skills: [
      "Node.js",
      "Express",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
    ],
  },
  {
    id: "cloud-devops",
    title: "Cloud & DevOps",
    skills: [
      "AWS",
      "Docker",
      "GitHub Actions",
      "Nginx",
      "Linux",
      "DNS",
      "Server Administration",
      "Vercel",
      "Render",
    ],
  },
  {
    id: "cms-iot",
    title: "CMS & IoT",
    skills: ["Payload CMS", "MQTT", "HiveMQ", "HTTP"],
  },
] as const satisfies readonly SkillCategory[];
