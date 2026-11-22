import type { CompactProject } from "@/types/content";

export const saikPyoMateSweProject = {
  slug: "saik-pyo-mate-swe",
  title: "Hcitepyoe Matesway",
  context: "ASEAN Geo AI Fusion 2026",
  presentation: "compact",
  contributions: [
    "Frontend development",
    "Offline caching",
    "Server infrastructure",
    "CI/CD and deployment",
    "Backend support",
  ],
} as const satisfies CompactProject;

export const letsTechHackathonProject = {
  slug: "lets-tech-hackathon",
  title: "Lanpya",
  context: "48-hour agentic AI hackathon",
  presentation: "compact",
  contributions: [
    "Frontend development",
    "Server work",
    "CI/CD and deployment",
    "Backend support",
  ],
} as const satisfies CompactProject;
