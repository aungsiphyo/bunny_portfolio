import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { ProjectCover } from "@/components/project/project-cover";
import type { CaseStudyProject } from "@/types/content";

type FeaturedProjectCardProps = Readonly<{
  index: number;
  project: CaseStudyProject;
}>;

export function FeaturedProjectCard({
  index,
  project,
}: FeaturedProjectCardProps) {
  const isReversed = index % 2 === 1;

  return (
    <article
      className="group grid gap-7 border-t border-border pt-5 sm:gap-9 sm:pt-7 lg:grid-cols-12 lg:items-start lg:gap-10"
      data-work-reveal
    >
      <div className={isReversed ? "lg:order-2 lg:col-span-7" : "lg:col-span-7"}>
        <ProjectCover cover={project.cover} />
      </div>

      <div
        className={
          isReversed
            ? "lg:order-1 lg:col-span-5 lg:pr-6"
            : "lg:col-span-5 lg:pl-6"
        }
      >
        <div className="flex items-start justify-between gap-6 font-mono text-xs font-semibold tracking-[0.08em] text-muted-foreground uppercase">
          <p>{project.category}</p>
        </div>

        <h3 className="mt-4 text-[clamp(1.75rem,3.6vw,3rem)] leading-[0.92] font-semibold tracking-[-0.04em] text-balance">
          {project.title}
        </h3>

        <p className="mt-5 max-w-[58ch] text-base leading-relaxed text-muted-foreground sm:text-lg">
          {project.overview}
        </p>

        <div className="mt-6 border-t border-border pt-5">
          <p className="font-mono text-xs font-semibold tracking-[0.08em] text-muted-foreground uppercase">
            Technology
          </p>
          <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5" aria-label="Technology stack">
            {project.techStack.slice(0, 5).map((technology) => (
              <li className="text-sm font-medium" key={technology}>
                {technology}
              </li>
            ))}
          </ul>
          {project.techStack.length > 5 && (
            <p className="mt-2 text-xs text-muted-foreground">
              +{project.techStack.length - 5} more in case study
            </p>
          )}
        </div>

        <div className="mt-6 border-l-2 border-highlight pl-4">
          <p className="font-mono text-xs font-semibold tracking-[0.08em] text-muted-foreground uppercase">
            Outcome
          </p>
          <p className="mt-2 max-w-[52ch] leading-relaxed">{project.outcome}</p>
        </div>

        <Link
          className="mt-6 inline-flex min-h-12 items-center gap-3 border-b border-foreground pb-1 font-semibold transition-colors hover:border-primary hover:text-primary"
          href={`/projects/${project.slug}`}
        >
          View case study
          <span className="sr-only"> for {project.title}</span>
          <ArrowUpRight className="size-5" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
