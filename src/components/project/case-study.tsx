import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";

import { ProjectCover } from "@/components/project/project-cover";
import { ProjectHeader } from "@/components/project/project-header";
import { SkipLink } from "@/components/layout/skip-link";
import { Container } from "@/components/ui/container";
import type { CaseStudyProject } from "@/types/content";

type CaseStudyProps = Readonly<{
  project: CaseStudyProject;
}>;

type NumberedSectionProps = Readonly<{
  number: string;
  title: string;
  children: React.ReactNode;
}>;

export function CaseStudy({ project }: CaseStudyProps) {
  return (
    <>
      <SkipLink />
      <ProjectHeader />

      <main id="main-content" tabIndex={-1}>
        <article>
          <header className="overflow-hidden border-b border-border pb-16 pt-14 sm:pb-24 sm:pt-20 lg:pb-28 lg:pt-24">
            <Container>
              <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
                <div className="lg:col-span-8">
                  <p className="font-mono text-xs font-semibold tracking-[0.1em] text-muted-foreground uppercase">
                    Case study · {project.category}
                  </p>
                  <h1 className="mt-6 max-w-[10ch] text-[clamp(4rem,11vw,10rem)] leading-[0.84] font-semibold tracking-[-0.075em] text-balance">
                    {project.title}
                  </h1>
                </div>

                <p className="max-w-[50ch] text-body-large text-muted-foreground lg:col-span-4 lg:pb-2">
                  {project.overview}
                </p>
              </div>

              <div className="group mt-12 sm:mt-16 lg:mt-20">
                <ProjectCover
                  cover={project.cover}
                  format="case-study"
                  preload
                />
              </div>
            </Container>
          </header>

          <div className="py-16 sm:py-24 lg:py-32">
            <Container className="grid gap-16 lg:grid-cols-12 lg:gap-x-12 lg:gap-y-28">
              <div className="lg:col-span-7 lg:col-start-2">
                <NumberedSection number="01" title="Problem and purpose">
                  <p className="max-w-[62ch] text-body-large text-muted-foreground">
                    {project.purpose}
                  </p>
                </NumberedSection>
              </div>

              <div className="lg:col-span-5 lg:col-start-7">
                <NumberedSection number="02" title="Core features">
                  <ul className="grid border-t border-border" role="list">
                    {project.coreFeatures.map((feature) => (
                      <li
                        className="flex gap-4 border-b border-border py-4 leading-relaxed"
                        key={feature}
                      >
                        <span className="text-muted-foreground" aria-hidden="true">
                          —
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </NumberedSection>
              </div>

              <div className="lg:col-span-7 lg:col-start-2">
                <NumberedSection number="03" title="My contributions">
                  <ol className="grid gap-7">
                    {project.contributions.map((contribution, index) => (
                      <li
                        className="grid grid-cols-[2rem_minmax(0,1fr)] gap-4 border-t border-border pt-5 text-lg leading-relaxed sm:grid-cols-[3rem_minmax(0,1fr)]"
                        key={contribution}
                      >
                        <span
                          className="font-mono text-xs font-semibold text-muted-foreground"
                          aria-hidden="true"
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span>{contribution}</span>
                      </li>
                    ))}
                  </ol>
                </NumberedSection>
              </div>

              <div className="lg:col-span-4 lg:col-start-9">
                <NumberedSection number="04" title="Technology">
                  <ul className="flex flex-wrap gap-2" aria-label="Technology stack">
                    {project.techStack.map((technology) => (
                      <li
                        className="border border-border px-3 py-2 font-mono text-xs font-semibold"
                        key={technology}
                      >
                        {technology}
                      </li>
                    ))}
                  </ul>
                </NumberedSection>
              </div>
            </Container>
          </div>

          <section
            className="bg-foreground py-16 text-background sm:py-24 lg:py-28"
            aria-labelledby="outcome-heading"
            data-dark-surface
          >
            <Container className="grid gap-8 lg:grid-cols-12 lg:items-start">
              <div className="lg:col-span-4">
                <p className="font-mono text-xs font-semibold tracking-[0.08em] text-background/70 uppercase">
                  05 · Result
                </p>
                <h2
                  id="outcome-heading"
                  className="mt-4 text-[clamp(2.75rem,6vw,5.75rem)] leading-[0.92] font-semibold tracking-[-0.055em]"
                >
                  Outcome
                </h2>
              </div>
              <div className="lg:col-span-7 lg:col-start-6">
                <p className="max-w-[58ch] text-body-large">{project.outcome}</p>
                {project.statusNote ? (
                  <p className="mt-7 border-l-2 border-highlight pl-4 text-sm text-background/75">
                    {project.statusNote}
                  </p>
                ) : null}
              </div>
            </Container>
          </section>

          <section
            className="border-b border-border bg-surface py-16 sm:py-24"
            aria-labelledby="repositories-heading"
          >
            <Container className="grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="font-mono text-xs font-semibold tracking-[0.08em] text-muted-foreground uppercase">
                  06 · Source
                </p>
                <h2
                  id="repositories-heading"
                  className="mt-4 text-[clamp(2.5rem,5vw,4.75rem)] leading-[0.94] font-semibold tracking-[-0.05em]"
                >
                  Repositories
                </h2>
              </div>

              <ul className="grid border-t border-foreground/25 lg:col-span-7 lg:col-start-6">
                {project.repositories.map((repository) => (
                  <li className="border-b border-foreground/25" key={repository.href}>
                    <a
                      className="flex min-h-16 items-center justify-between gap-4 py-3 font-medium transition-colors hover:text-primary motion-reduce:transition-none"
                      href={repository.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span className="break-all">{repository.label}</span>
                      <ExternalLink
                        className="size-5 shrink-0"
                        aria-hidden="true"
                      />
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  </li>
                ))}
              </ul>
            </Container>
          </section>
        </article>

        <footer className="py-10 sm:py-12">
          <Container>
            <Link
              className="inline-flex min-h-12 items-center gap-3 border-b border-foreground font-semibold transition-colors hover:border-primary hover:text-primary motion-reduce:transition-none"
              href="/#work"
            >
              <ArrowLeft className="size-5" aria-hidden="true" />
              Back to Work
            </Link>
          </Container>
        </footer>
      </main>
    </>
  );
}

function NumberedSection({
  number,
  title,
  children,
}: NumberedSectionProps) {
  const headingId = `case-study-${number}`;

  return (
    <section aria-labelledby={headingId}>
      <p
        className="font-mono text-xs font-semibold tracking-[0.08em] text-muted-foreground uppercase"
        aria-hidden="true"
      >
        {number}
      </p>
      <h2
        id={headingId}
        className="mb-8 mt-3 text-[clamp(2.35rem,5vw,4.75rem)] leading-[0.94] font-semibold tracking-[-0.05em]"
      >
        {title}
      </h2>
      {children}
    </section>
  );
}
