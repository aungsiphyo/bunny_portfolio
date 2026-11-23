export type SectionId =
  | "work"
  | "about"
  | "experience"
  | "skills"
  | "contact";

export type NavigationItem = Readonly<{
  label: string;
  href: `#${SectionId}`;
}>;

export type HeroContent = Readonly<{
  introduction: string;
  name: string;
  role: readonly [string, string];
  positioning: string;
  supportingText: string;
  primaryCta: NavigationItem;
  secondaryCta: NavigationItem;
}>;

export type SocialLink = Readonly<{
  label: "GitHub" | "LinkedIn";
  href: `https://${string}`;
}>;

export type SiteConfig = Readonly<{
  name: string;
  alternateName: string;
  positioning: string;
  email: `${string}@${string}`;
  hero: HeroContent;
  socialLinks: readonly SocialLink[];
}>;

export type ProfileMedia =
  | Readonly<{
      kind: "placeholder";
    }>
  | Readonly<{
      kind: "image";
      src: `/${string}`;
      alt: string;
      width: number;
      height: number;
    }>;

export type ProfileContent = Readonly<{
  name: string;
  alternateName: string;
  positioning: string;
  currentStatus: string;
  introduction: NonEmptyReadonlyArray<string>;
  freelanceAreas: NonEmptyReadonlyArray<string>;
  media: ProfileMedia;
}>;

export type DatedExperiencePeriod = Readonly<{
  kind: "dated";
  start: Readonly<{
    label: string;
    dateTime: `${number}-${number}-${number}`;
  }>;
  end: Readonly<{
    label: string;
    dateTime: `${number}-${number}-${number}`;
  }>;
}>;

export type CurrentExperiencePeriod = Readonly<{
  kind: "current";
  label: "Current";
}>;

export type ExperienceEntry = Readonly<{
  id: string;
  role: string;
  organization?: string;
  organizationUrl?: `https://${string}`;
  period: DatedExperiencePeriod | CurrentExperiencePeriod;
  detailsLabel: "Responsibilities" | "Areas of work";
  details: NonEmptyReadonlyArray<string>;
}>;

export type SkillCategory = Readonly<{
  id: string;
  title: string;
  skills: NonEmptyReadonlyArray<string>;
}>;

export type ProjectPresentation = "case-study" | "compact";

export type ProjectVisualIdentity = "yellow" | "black-and-yellow";

export type NonEmptyReadonlyArray<T> = readonly [T, ...T[]];

export type ProjectRepository = Readonly<{
  label: string;
  href: `https://github.com/${string}`;
}>;

export type ProjectCover =
  | Readonly<{
      kind: "abstract";
      variant: ProjectVisualIdentity;
    }>
  | Readonly<{
      kind: "image";
      src: `/${string}`;
      alt: string;
      width: number;
      height: number;
      fit?: "natural" | "contain";
      background?: ProjectVisualIdentity;
    }>;

export type ProjectScreenshot = Readonly<{
  src: `/${string}`;
  alt: string;
  caption: string;
  width: number;
  height: number;
}>;

export type ProjectVideo = Readonly<{
  src: `/${string}`;
  poster: `/${string}`;
  title: string;
  width: number;
  height: number;
  duration: string;
}>;

export type UniYatwonMedia = Readonly<{
  logo: ProjectScreenshot;
  poster: ProjectScreenshot;
  brandMotion: ProjectVideo;
  applicationScreens: NonEmptyReadonlyArray<ProjectScreenshot>;
  walkthrough: ProjectVideo;
  showcasePhotos: NonEmptyReadonlyArray<ProjectScreenshot>;
}>;

export type CaseStudyProject = Readonly<{
  slug: string;
  title: string;
  category: string;
  presentation: "case-study";
  visualIdentity: ProjectVisualIdentity;
  cover: ProjectCover;
  overview: string;
  cardSummary: string;
  cardContribution: string;
  cardOutcome: string;
  purpose: string;
  coreFeatures: NonEmptyReadonlyArray<string>;
  techStack: NonEmptyReadonlyArray<string>;
  contributions: NonEmptyReadonlyArray<string>;
  outcome: string;
  repositories: NonEmptyReadonlyArray<ProjectRepository>;
  screenshots?: NonEmptyReadonlyArray<ProjectScreenshot>;
  statusNote?: string;
}>;

export type UniYatwonProject = CaseStudyProject &
  Readonly<{
    slug: "uni-yatwon";
    media: UniYatwonMedia;
  }>;

export type CompactProject = Readonly<{
  slug: string;
  title: string;
  context: string;
  presentation: "compact";
  contributions: NonEmptyReadonlyArray<string>;
}>;

export type Project = CaseStudyProject | CompactProject;
