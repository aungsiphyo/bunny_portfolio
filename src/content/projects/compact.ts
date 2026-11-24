import type { HcitepyoeProject, LanpyaProject } from "@/types/content";

export const saikPyoMateSweProject = {
  slug: "saik-pyo-mate-swe",
  title: "Hcitepyoe Matesway",
  context: "ASEAN Geo AI Fusion 2026 Hackathon",
  presentation: "compact",
  detailHref: "/projects/saik-pyo-mate-swe",
  cover: {
    kind: "image",
    src: "/projects/hcitepyoe-matesway/images/crop-recommendation.png",
    alt: "Hcitepyoe Matesway crop recommendation screen with a farmer illustration and Myanmar map",
    width: 2940,
    height: 1912,
    fit: "contain",
    background: "light",
  },
  contributions: [
    "Frontend development",
    "Offline caching",
    "Server infrastructure",
    "CI/CD and deployment",
    "Backend support",
  ],
  repositories: [
    {
      label: "GitHub repository",
      href: "https://github.com/Phyomyatmin646/GEO_AI_Hackathon",
    },
  ],
  media: {
    hero: {
      src: "/projects/hcitepyoe-matesway/images/crop-recommendation.png",
      alt: "Hcitepyoe Matesway crop recommendation screen with a farmer illustration and Myanmar map",
      caption: "Crop recommendation experience.",
      width: 2940,
      height: 1912,
    },
    productScreens: [
      {
        src: "/projects/hcitepyoe-matesway/images/data-review.png",
        alt: "Hcitepyoe Matesway data review interface with dataset details and pilot review controls",
        caption: "Dataset and pilot review interface.",
        width: 2940,
        height: 1912,
      },
      {
        src: "/projects/hcitepyoe-matesway/images/profile-creation.png",
        alt: "Hcitepyoe Matesway profile creation screen",
        caption: "Profile creation flow.",
        width: 1022,
        height: 1358,
      },
      {
        src: "/projects/hcitepyoe-matesway/images/crop-map.png",
        alt: "Hcitepyoe Matesway crop map with pilot cells and crop recommendation details",
        caption: "Crop map and pilot-cell details.",
        width: 2940,
        height: 1912,
      },
      {
        src: "/projects/hcitepyoe-matesway/images/crop-calendar.png",
        alt: "Myanmar crop calendar with regional planting and harvest windows",
        caption: "Regional crop calendar.",
        width: 2940,
        height: 1602,
      },
      {
        src: "/projects/hcitepyoe-matesway/images/evidence-charts.png",
        alt: "Agriculture evidence dashboard with GDP and agriculture value-added charts",
        caption: "Official-source evidence charts.",
        width: 2940,
        height: 1592,
      },
    ],
  },
} as const satisfies HcitepyoeProject;

export const letsTechHackathonProject = {
  slug: "lets-tech-hackathon",
  title: "Lanpya",
  context: "Let’s Tech Hackathon · 48-hour agentic AI hackathon",
  presentation: "compact",
  detailHref: "/projects/lets-tech-hackathon",
  cover: {
    kind: "image",
    src: "/projects/lanpya/images/learning-platform-hero.jpg",
    alt: "Lanpya learning platform hero with a purple AI assistant",
    width: 1262,
    height: 1036,
    fit: "contain",
    background: "dark",
  },
  contributions: [
    "Frontend development",
    "Server work",
    "CI/CD and deployment",
    "Backend support",
  ],
  repositories: [
    {
      label: "GitHub repository",
      href: "https://github.com/aungsiphyo/LanPya",
    },
  ],
  media: {
    hero: {
      src: "/projects/lanpya/images/learning-platform-hero.jpg",
      alt: "Lanpya learning platform hero with a purple AI assistant",
      caption: "Lanpya’s learning-platform hero experience.",
      width: 1262,
      height: 1036,
    },
    productScreens: [
      {
        src: "/projects/lanpya/images/ai-dashboard.jpg",
        alt: "LanPya AI dashboard with learning progress, roadmaps, bookmarks, and lesson suggestions",
        caption: "AI learning dashboard and discovery actions.",
        width: 1280,
        height: 833,
      },
      {
        src: "/projects/lanpya/images/ai-roadmap-chat.jpg",
        alt: "LanPya AI conversation presenting a full-stack web development roadmap",
        caption: "Conversational roadmap guidance.",
        width: 1280,
        height: 881,
      },
      {
        src: "/projects/lanpya/images/course-grid.jpg",
        alt: "Lanpya course cards for design and portfolio topics",
        caption: "Course discovery cards.",
        width: 1280,
        height: 853,
      },
    ],
    teamPhotos: [
      {
        src: "/projects/lanpya/images/hackathon-team-stage.jpg",
        alt: "Lanpya team holding a Let’s Tech Hackathon runner-up presentation board",
        caption: "The Lanpya team at Let’s Tech Hackathon.",
        width: 1242,
        height: 925,
      },
      {
        src: "/projects/lanpya/images/hackathon-team.jpg",
        alt: "Lanpya team taking a group photo during Let’s Tech Hackathon",
        caption: "The team during the 48-hour hackathon.",
        width: 1280,
        height: 853,
      },
    ],
  },
} as const satisfies LanpyaProject;
