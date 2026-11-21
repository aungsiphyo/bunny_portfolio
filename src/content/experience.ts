import type { ExperienceEntry } from "@/types/content";

export const schedjuiceExperience = {
  id: "schedjuice-internship",
  role: "Software Engineer Intern",
  organization: "Schedjuice",
  organizationUrl: "https://www.schedjuice.com/",
  period: {
    kind: "dated",
    start: {
      label: "August 1, 2025",
      dateTime: "2025-08-01",
    },
    end: {
      label: "October 31, 2025",
      dateTime: "2025-10-31",
    },
  },
  detailsLabel: "Responsibilities",
  details: [
    "Developed UI components using React and Next.js.",
    "Built responsive web interfaces.",
    "Worked on bug fixing, testing, and debugging.",
    "Implemented content management features using Payload CMS.",
  ],
} as const satisfies ExperienceEntry;

export const freelanceExperience = {
  id: "freelance-software-developer",
  role: "Freelance Software Developer",
  period: {
    kind: "current",
    label: "Current",
  },
  detailsLabel: "Areas of work",
  details: [
    "Frontend development",
    "Full-stack web development",
    "Cloud and deployment",
  ],
} as const satisfies ExperienceEntry;

export const experienceEntries = [
  schedjuiceExperience,
  freelanceExperience,
] as const satisfies readonly ExperienceEntry[];
