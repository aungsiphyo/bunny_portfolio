import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CaseStudy } from "@/components/project/case-study";
import { AnimatedProjectPage } from "@/components/project/animated-project-page";
import { HcitepyoeCaseStudy } from "@/components/project/hcitepyoe-case-study";
import { LanpyaCaseStudy } from "@/components/project/lanpya-case-study";
import { PrimeCityCaseStudy } from "@/components/project/prime-city-case-study";
import { UniYatwonCaseStudy } from "@/components/project/uni-yatwon-case-study";
import {
  detailedProjects,
  getDetailedProject,
} from "@/content/projects";

type ProjectPageProps = Readonly<{
  params: Promise<{ slug: string }>;
}>;

// Each case study is entirely slug-specific. The pages are still prerendered
// through generateStaticParams; this only opts the segment out of the shared
// instant-shell validation used for URL-independent route UI.
export const instant = false;

export function generateStaticParams() {
  return detailedProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getDetailedProject(slug);

  if (!project) {
    return {
      title: "Project not found",
    };
  }

  return {
    title: project.title,
    description: "overview" in project ? project.overview : project.context,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getDetailedProject(slug);

  if (!project) {
    notFound();
  }

  if (project.slug === "uni-yatwon") {
    return (
      <AnimatedProjectPage>
        <UniYatwonCaseStudy project={project} />
      </AnimatedProjectPage>
    );
  }

  if (project.slug === "prime-city") {
    return (
      <AnimatedProjectPage>
        <PrimeCityCaseStudy project={project} />
      </AnimatedProjectPage>
    );
  }

  if (project.slug === "lets-tech-hackathon") {
    return (
      <AnimatedProjectPage>
        <LanpyaCaseStudy project={project} />
      </AnimatedProjectPage>
    );
  }

  if (project.slug === "saik-pyo-mate-swe") {
    return (
      <AnimatedProjectPage>
        <HcitepyoeCaseStudy project={project} />
      </AnimatedProjectPage>
    );
  }

  return (
    <AnimatedProjectPage>
      <CaseStudy project={project} />
    </AnimatedProjectPage>
  );
}
