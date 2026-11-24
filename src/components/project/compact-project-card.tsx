import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { ProjectCover } from "@/components/project/project-cover";
import type { CompactProject } from "@/types/content";

type CompactProjectCardProps = Readonly<{
  project: CompactProject;
}>;

export function CompactProjectCard({ project }: CompactProjectCardProps) {
  const projectDetails = (
    <div
      className={
        project.cover
          ? "grid content-start gap-6"
          : "grid gap-5 sm:grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)] sm:gap-8"
      }
    >
      <div>
        <p className="text-sm text-muted-foreground">{project.context}</p>
        <div className="mt-2 flex items-start justify-between gap-4">
          <h4 className="text-[clamp(1.65rem,3vw,2.4rem)] leading-[1] font-semibold tracking-[-0.045em]">
            {project.detailHref ? (
              <Link className="hover:text-primary" href={project.detailHref}>
                {project.title}
              </Link>
            ) : (
              project.title
            )}
          </h4>
          {project.detailHref ? (
            <Link
              className="flex size-10 shrink-0 items-center justify-center rounded-full border border-foreground/25 text-foreground transition-colors hover:border-primary hover:bg-primary hover:text-foreground focus-visible:border-primary focus-visible:bg-primary motion-reduce:transition-none"
              href={project.detailHref}
              aria-label={`View project details for ${project.title}`}
            >
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </Link>
          ) : null}
        </div>
      </div>

      <ul className="grid content-start gap-1.5 text-sm" aria-label="Contributions">
        {project.contributions.map((contribution) => (
          <li className="flex gap-2.5" key={contribution}>
            <span className="text-decorative-rose" aria-hidden="true">•</span>
            <span>{contribution}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <article
      className="border-b border-border py-7"
      data-work-reveal
    >
      {project.cover && project.detailHref ? (
        <div className="grid gap-7 lg:grid-cols-[minmax(0,0.9fr)_minmax(20rem,1.1fr)] lg:items-start lg:gap-12">
          <Link
            className="block overflow-hidden rounded-[1.5rem]"
            href={project.detailHref}
            aria-label={`View project details for ${project.title}`}
          >
            <ProjectCover cover={project.cover} format="card" />
          </Link>
          {projectDetails}
        </div>
      ) : (
        projectDetails
      )}
    </article>
  );
}
