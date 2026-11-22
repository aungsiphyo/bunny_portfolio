import { freelanceExperience } from "@/content/experience";
import { siteConfig } from "@/data/site";
import type { ProfileContent } from "@/types/content";

export const profileContent = {
  name: siteConfig.name,
  alternateName: siteConfig.alternateName,
  positioning: siteConfig.positioning,
  currentStatus: freelanceExperience.role,
  introduction: [
    "Hey, I'm Bunny (Ko Si), a freelance software engineer working across the full lifecycle of a product — from responsive interfaces and backend integrations to deployment.",
    "I enjoy creating thoughtful user experiences and managing the cloud infrastructure that keeps applications running.",
  ],
  freelanceAreas: [
    "Frontend development",
    "Full-stack web development",
    "Cloud infrastructure and deployment",
  ],
  media: {
    kind: "image",
    src: "/images/bunny-portrait.png",
    alt: "Portrait of Bunny (Ko Si)",
    width: 1254,
    height: 1254,
  },
} as const satisfies ProfileContent;
