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

export const projects = [...caseStudyProjects, ...compactProjects] as const;

export type CaseStudySlug = (typeof caseStudyProjects)[number]["slug"];

export function getCaseStudyProject(slug: string) {
  return caseStudyProjects.find((project) => project.slug === slug);
}
