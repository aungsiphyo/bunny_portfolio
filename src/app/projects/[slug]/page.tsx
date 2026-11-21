import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CaseStudy } from "@/components/project/case-study";
import {
  caseStudyProjects,
  getCaseStudyProject,
} from "@/content/projects";

type ProjectPageProps = Readonly<{
  params: Promise<{ slug: string }>;
}>;

export function generateStaticParams() {
  return caseStudyProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getCaseStudyProject(slug);

  if (!project) {
    return {
      title: "Project not found",
    };
  }

  return {
    title: project.title,
    description: project.overview,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getCaseStudyProject(slug);

  if (!project) {
    notFound();
  }

  return <CaseStudy project={project} />;
}
