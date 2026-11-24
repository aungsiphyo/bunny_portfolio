import { letsTechHackathonProject, saikPyoMateSweProject } from "./compact";
import { primeCityProject } from "./prime-city";
import { uniYatwonProject } from "./uni-yatwon";

export const caseStudyProjects = [
  uniYatwonProject,
  primeCityProject,
] as const;

export const compactProjects = [
  saikPyoMateSweProject,
  letsTechHackathonProject,
] as const;

export const detailedProjects = [
  ...caseStudyProjects,
  saikPyoMateSweProject,
  letsTechHackathonProject,
] as const;

export const projects = [...caseStudyProjects, ...compactProjects] as const;

export type CaseStudySlug = (typeof caseStudyProjects)[number]["slug"];

export function getCaseStudyProject(slug: string) {
  return caseStudyProjects.find((project) => project.slug === slug);
}

export function getDetailedProject(slug: string) {
  return detailedProjects.find((project) => project.slug === slug);
}
