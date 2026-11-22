import type { CaseStudyProject } from "@/types/content";

export const uniYatwonProject = {
  slug: "uni-yatwon",
  title: "Uni Yatwon",
  category: "Campus Social Platform",
  presentation: "case-study",
  visualIdentity: "yellow",
  cover: {
    kind: "abstract",
    variant: "yellow",
  },
  overview:
    "A university-focused social application where students can share campus activities, connect with friends, buy and sell textbooks, create posts, like, comment, save posts, and search profiles.",
  cardSummary:
    "A campus social platform for sharing university activities, connecting with friends, and exchanging textbooks.",
  cardContribution:
    "Co-developed the React and React Native frontend and independently handled production deployment on AWS EC2, including CI/CD.",
  cardOutcome:
    "Approximately 90 students registered and used it during a university showcase.",
  purpose:
    "Its purpose is to support university students sharing campus activities, connecting with friends, buying and selling textbooks, and discovering profiles.",
  coreFeatures: [
    "Campus activity sharing",
    "Friend connections",
    "Textbook buying and selling",
    "Post creation",
    "Post likes, comments, and saves",
    "Profile search",
  ],
  techStack: [
    "React",
    "React Native",
    "PHP",
    "MySQL",
    "AWS EC2",
    "GitHub Actions",
    "Expo",
    "Namecheap",
  ],
  contributions: [
    "Contributed to React and React Native UI development as one of two frontend developers.",
    "Participated in backend and frontend integration.",
    "Independently handled AWS EC2 deployment of the frontend, backend, and database.",
    "Configured domain and DNS.",
    "Worked on CI/CD and Android APK packaging with Expo.",
    "Owned nearly all production deployment work.",
  ],
  outcome:
    "Approximately 90 students registered and used the application during the university project showcase. They created posts, commented, and explored profiles.",
  repositories: [
    {
      label: "aungsiphyo/uniyatwon_rn",
      href: "https://github.com/aungsiphyo/uniyatwon_rn",
    },
    {
      label: "aungsiphyo/uniyatwon_main",
      href: "https://github.com/aungsiphyo/uniyatwon_main",
    },
    {
      label: "Sitt1Aung10/UniYatWoon_adminPanel",
      href: "https://github.com/Sitt1Aung10/UniYatWoon_adminPanel",
    },
  ],
  statusNote: "The live website is currently offline.",
} as const satisfies CaseStudyProject;
