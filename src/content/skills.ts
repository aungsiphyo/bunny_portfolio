import type { SkillCategory } from "@/types/content";

export const skillCategories = [
  {
    id: "frontend",
    title: "Frontend",
    skills: ["React", "Next.js", "React Native"],
  },
  {
    id: "backend",
    title: "Backend",
    skills: ["Node.js", "Express", "PHP"],
  },
  {
    id: "databases",
    title: "Databases",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "MongoDB Atlas"],
  },
  {
    id: "cloud",
    title: "Cloud",
    skills: ["AWS", "Vercel", "Render"],
  },
  {
    id: "devops",
    title: "DevOps",
    skills: [
      "Docker",
      "GitHub Actions",
      "Nginx",
      "Linux",
      "DNS",
      "Server Administration",
    ],
  },
  {
    id: "cms",
    title: "CMS",
    skills: ["Payload CMS"],
  },
  {
    id: "iot-communication",
    title: "IoT / Communication",
    skills: ["MQTT", "HiveMQ", "HTTP"],
  },
] as const satisfies readonly SkillCategory[];
