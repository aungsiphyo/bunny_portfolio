import type { PrimeCityProject } from "@/types/content";

export const primeCityProject = {
  slug: "prime-city",
  title: "Prime City",
  category: "Smart Residential Management & IoT System",
  presentation: "case-study",
  visualIdentity: "black-and-yellow",
  cover: {
    kind: "image",
    src: "/projects/prime-city/images/hardware-showcase-landscape.jpg",
    alt: "Prime City physical smart-residential model presented at the university showcase",
    width: 1280,
    height: 575,
    fit: "cover",
    background: "black-and-yellow",
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
  media: {
    logo: {
      src: "/projects/prime-city/images/prime-city-logo.jpg",
      alt: "Prime City gold and silver building logo on a black background",
      caption: "Prime City project mark",
      width: 1254,
      height: 1254,
    },
    brandGuide: {
      src: "/projects/prime-city/images/brand-guideline.png",
      alt: "Prime City brand guideline showing the project logo, Graphik typography, and black and gold color palette",
      caption: "The project’s black, gold, and warm-white visual identity.",
      width: 1672,
      height: 941,
    },
    mobileScreens: [
      {
        src: "/projects/prime-city/images/mobile-home.png",
        alt: "Prime City resident mobile home screen with quick actions for bills, helpers, visitors, parking, wallet, playground, and announcements",
        caption: "Resident home and service shortcuts.",
        width: 853,
        height: 1844,
      },
      {
        src: "/projects/prime-city/images/mobile-assistant.jpg",
        alt: "Prime City HomeMate assistant conversation about opening a water bill",
        caption: "HomeMate resident-support assistant flow.",
        width: 607,
        height: 1280,
      },
      {
        src: "/projects/prime-city/images/mobile-billing.png",
        alt: "Prime City admin screen for creating a monthly residential bill",
        caption: "Administrative monthly billing workflow.",
        width: 853,
        height: 1844,
      },
    ],
    hardwarePhotos: [
      {
        src: "/projects/prime-city/images/physical-model.jpg",
        alt: "Prime City physical model with residential towers, access points, roads, parking, and connected hardware",
        caption: "The physical smart-residential prototype and its connected components.",
        width: 960,
        height: 1280,
      },
      {
        src: "/projects/prime-city/images/hardware-presentation.jpg",
        alt: "Prime City physical model and software displayed during a presentation",
        caption: "The integrated software and hardware prototype presented together.",
        width: 960,
        height: 1280,
      },
    ],
    showcasePhotos: [
      {
        src: "/projects/prime-city/images/showcase-team.jpg",
        alt: "Prime City project team gathered around the physical residential model at the university showcase",
        caption: "The Prime City team with the working physical prototype.",
        width: 2560,
        height: 1920,
      },
    ],
  },
} as const satisfies PrimeCityProject;
