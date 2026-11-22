import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { ProjectCover } from "@/components/project/project-cover";
import type { CaseStudyProject } from "@/types/content";

type FeaturedProjectCardProps = Readonly<{
  project: CaseStudyProject;
}>;

export function FeaturedProjectCard({ project }: FeaturedProjectCardProps) {
  return (
    <article className="group" data-work-reveal>
      <Link
        className="block overflow-hidden rounded-[1.75rem] focus-visible:rounded-[1.75rem]"
        href={`/projects/${project.slug}`}
        aria-label={`View case study for ${project.title}`}
      >
        <ProjectCover cover={project.cover} />
      </Link>

      <div className="pt-6 sm:px-1">
        <p className="text-sm font-medium text-muted-foreground">
          {project.category}
        </p>
        <div className="mt-2 flex items-start justify-between gap-5">
          <h3 className="text-[clamp(2rem,4.2vw,3.4rem)] leading-[0.94] font-semibold tracking-[-0.055em]">
            {project.title}
          </h3>
          <Link
            className="featured-project-arrow flex size-11 shrink-0 items-center justify-center rounded-full border border-foreground/25 transition-[background-color,color,transform] group-hover:-translate-y-0.5 group-hover:bg-foreground motion-reduce:transform-none motion-reduce:transition-none"
            href={`/projects/${project.slug}`}
            aria-label={`View case study for ${project.title}`}
          >
            <ArrowUpRight className="size-5" aria-hidden="true" />
          </Link>
        </div>

        <p className="mt-4 max-w-[58ch] leading-relaxed text-muted-foreground">
          {project.cardSummary}
        </p>

        <dl className="mt-5 grid gap-4 border-t border-border pt-5 sm:grid-cols-2">
          <div>
            <dt className="font-mono text-[0.68rem] font-semibold tracking-[0.08em] text-muted-foreground uppercase">
              My contribution
            </dt>
            <dd className="mt-2 max-w-[48ch] text-sm leading-relaxed">
              {project.cardContribution}
            </dd>
          </div>
          <div>
            <dt className="font-mono text-[0.68rem] font-semibold tracking-[0.08em] text-muted-foreground uppercase">
              Verified result
            </dt>
            <dd className="mt-2 max-w-[48ch] text-sm leading-relaxed">
              {project.cardOutcome}
            </dd>
          </div>
        </dl>

        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Selected technology stack">
          {project.techStack.slice(0, 4).map((technology) => (
            <li
              className="rounded-full border border-border px-3 py-1 text-xs font-medium"
              key={technology}
            >
              {technology}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
