import type {
  NavigationItem,
  SiteConfig,
} from "@/types/content";

export const siteConfig = {
  name: "Bunny",
  alternateName: "Ko Si",
  positioning: "Software Engineer | Cloud & DevOps Enthusiast",
  email: "aungsiphyoit@gmail.com",
  hero: {
    eyebrow: "SOFTWARE ENGINEER · CLOUD & DEVOPS ENTHUSIAST",
    headline: ["I craft the experience.", "I engineer the rest."],
    supportingText:
      "From expressive interfaces to reliable infrastructure — bringing ideas to life through code.",
    primaryCta: {
      label: "View My Work",
      href: "#work",
    },
    secondaryCta: {
      label: "Get in Touch",
      href: "#contact",
    },
  },
  socialLinks: [
    {
      label: "GitHub",
      href: "https://github.com/aungsiphyo",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/aung-si-phyo-958658219",
    },
  ],
} as const satisfies SiteConfig;

export const primaryNavigation = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
] as const satisfies readonly NavigationItem[];

export const homeSections = [
  { label: "Selected Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
] as const satisfies readonly NavigationItem[];
