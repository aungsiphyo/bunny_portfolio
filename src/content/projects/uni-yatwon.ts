import type { UniYatwonProject } from "@/types/content";

export const uniYatwonProject = {
  slug: "uni-yatwon",
  title: "Uni Yatwon",
  category: "University Social Platform",
  presentation: "case-study",
  visualIdentity: "yellow",
  cover: {
    kind: "image",
    src: "/projects/uni-yatwon/images/uni-yatwon-poster.jpg",
    alt: "Uni Yatwon promotional poster showing its yellow identity and mobile social platform",
    width: 2000,
    height: 2000,
    fit: "contain",
    background: "yellow",
  },
  overview:
    "A university-focused social application where students can share campus activities, connect with friends, buy and sell textbooks, create posts, like, comment, save posts, and search profiles.",
  cardSummary:
    "A campus social platform for sharing university activities, connecting with friends, and exchanging textbooks.",
  cardContribution:
    "Collaborated on the React and React Native UI, contributed to integration, and led production infrastructure and deployment.",
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
    "Collaborated on frontend and UI development using React and React Native.",
    "Shared responsibility for UI design with another frontend developer.",
    "Contributed a smaller amount of PHP backend work and worked on frontend-backend integration.",
    "Took primary responsibility for production infrastructure and independently deployed the frontend, backend, and MySQL database to AWS EC2.",
    "Connected the purchased Namecheap domain and configured its DNS.",
    "Set up CI/CD with GitHub Actions and prepared the Android APK package using Expo.",
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
  statusNote:
    "The live site is no longer available after the AWS free credits and Namecheap domain expired.",
  media: {
    logo: {
      src: "/projects/uni-yatwon/images/uni-yatwon-logo.png",
      alt: "Yellow Uni Yatwon U logo",
      caption: "Original Uni Yatwon identity",
      width: 1024,
      height: 1024,
    },
    poster: {
      src: "/projects/uni-yatwon/images/uni-yatwon-poster.jpg",
      alt: "Uni Yatwon promotional poster with Burmese messaging and a mobile app mockup",
      caption: "The original project poster introduces Uni Yatwon as an all-in-one university social platform.",
      width: 2000,
      height: 2000,
    },
    brandMotion: {
      src: "/projects/uni-yatwon/videos/brand-motion.mp4",
      poster: "/projects/uni-yatwon/images/brand-motion-poster.png",
      title: "Uni Yatwon brand motion",
      width: 1280,
      height: 720,
      duration: "6 seconds",
    },
    applicationScreens: [
      {
        src: "/projects/uni-yatwon/images/app-feed.png",
        alt: "Uni Yatwon mobile feed showing campus posts and the app navigation",
        caption: "Campus feed with posts, reactions, comments, and saved items.",
        width: 572,
        height: 1280,
      },
      {
        src: "/projects/uni-yatwon/images/app-notifications.png",
        alt: "Uni Yatwon mobile notifications screen",
        caption: "Notifications keep students aware of activity on their posts.",
        width: 572,
        height: 1280,
      },
    ],
    walkthrough: {
      src: "/projects/uni-yatwon/videos/project-walkthrough.mp4",
      poster: "/projects/uni-yatwon/images/project-walkthrough-poster.png",
      title: "Uni Yatwon mobile application walkthrough",
      width: 568,
      height: 1280,
      duration: "2 minutes 49 seconds",
    },
    showcasePhotos: [
      {
        src: "/projects/uni-yatwon/images/university-showcase-demo.jpg",
        alt: "Uni Yatwon website and mobile application displayed on laptops at the university project showcase",
        caption: "Uni Yatwon running across web and mobile during the university project showcase.",
        width: 1280,
        height: 960,
      },
    ],
  },
} as const satisfies UniYatwonProject;
