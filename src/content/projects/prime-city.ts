import type { CaseStudyProject } from "@/types/content";

export const primeCityProject = {
  slug: "prime-city",
  title: "Prime City",
  category: "Smart Residential Management & IoT System",
  presentation: "case-study",
  visualIdentity: "black-and-yellow",
  cover: {
    kind: "abstract",
    variant: "black-and-yellow",
  },
  overview:
    "A functional residential management prototype integrating web and mobile applications with physical IoT hardware.",
  cardSummary:
    "A university residential-management prototype connecting web, mobile, and physical IoT devices.",
  cardContribution:
    "Worked on frontend and mobile development, integrated MQTT with HiveMQ, and handled most server, CI/CD, and deployment work.",
  cardOutcome:
    "A working prototype tested by team members and teachers using real accounts.",
  purpose:
    "The university prototype connects residential management software with physical hardware across access, parking, safety, lighting, payments, visitors, and real-time device communication.",
  coreFeatures: [
    "Smart parking",
    "RFID access",
    "Lighting",
    "LCD display",
    "SOS alerts",
    "Solar charging",
    "Resident payments",
    "Visitor management",
    "Real-time hardware communication",
  ],
  techStack: [
    "React",
    "React Native",
    "Node.js",
    "Express",
    "MongoDB Atlas",
    "HTTP",
    "MQTT",
    "HiveMQ",
    "AWS",
    "Render",
    "Vercel",
    "Docker",
    "GitHub Actions",
    "ESP32",
    "ESP32-CAM",
    "RFID",
  ],
  contributions: [
    "Participated in frontend and mobile development.",
    "Integrated MQTT communication using HiveMQ.",
    "Handled approximately 90% of server, CI/CD, and deployment-related work.",
    "A teammate handled Play Store publishing.",
  ],
  outcome:
    "A working university prototype tested by team members and teachers using real accounts.",
  repositories: [
    {
      label: "aungsiphyo/smart_residential",
      href: "https://github.com/aungsiphyo/smart_residential",
    },
    {
      label: "aungsiphyo/smart_residential_fe",
      href: "https://github.com/aungsiphyo/smart_residential_fe",
    },
    {
      label: "aungsiphyo/prime_city_be",
      href: "https://github.com/aungsiphyo/prime_city_be",
    },
  ],
} as const satisfies CaseStudyProject;
