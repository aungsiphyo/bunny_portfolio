import type {
  NavigationItem,
  SiteConfig,
} from "@/types/content";

export const siteConfig = {
  name: "Ko Si",
  alternateName: "Aung Si Phyo",
  positioning: "Software Engineer | Cloud & DevOps Enthusiast",
  email: "aungsiphyoit@gmail.com",
  hero: {
    introduction: "Hello, I'm Aung Si Phyo",
    name: "Ko Si.",
    role: ["Software", "Engineer."],
    positioning: "Software Engineer | Cloud & DevOps Enthusiast",
    supportingText:
      "Building modern web experiences and the infrastructure behind them.",
    primaryCta: {
      label: "View My Work",
      href: "#work",
    },
    secondaryCta: {
      label: "Let's Talk",
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
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const satisfies readonly NavigationItem[];

export const homeSections = [
  { label: "Selected Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
] as const satisfies readonly NavigationItem[];
