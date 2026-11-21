import type { SkillCategory } from "@/types/content";

export const skillCategories = [
  {
    id: "frontend",
    title: "Frontend",
    skills: ["React", "Next.js", "React Native"],
  },
  {
    id: "backend-databases",
    title: "Backend & Databases",
    skills: ["Node.js", "Express", "PHP", "PostgreSQL", "MySQL", "MongoDB"],
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
      "Vercel",
      "Render",
    ],
  },
  {
    id: "cms-iot",
    title: "CMS & IoT",
    skills: ["Payload CMS", "MQTT", "HiveMQ"],
  },
] as const satisfies readonly SkillCategory[];

