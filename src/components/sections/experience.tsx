import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/ui/container";
import { experienceEntries } from "@/content/experience";
import type { ExperienceEntry } from "@/types/content";

export function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-20 bg-background py-16 text-foreground sm:py-20 lg:py-24"
      aria-labelledby="experience-title"
    >
      <Container>
        <header className="grid gap-4 lg:grid-cols-12 lg:items-end" data-section-reveal>
          <h2 id="experience-title" className="text-heading font-semibold lg:col-span-7">
            Experience
          </h2>
          <p className="max-w-[38ch] text-muted-foreground lg:col-span-4 lg:col-start-9">
            Professional experience across product interfaces, full-stack work,
            and deployment.
          </p>
        </header>

        <div className="mt-9 border-t border-border sm:mt-12">
          {experienceEntries.map((entry) => (
            <ExperienceItem entry={entry} key={entry.id} />
          ))}
        </div>
      </Container>
    </section>
  );
}

type ExperienceItemProps = Readonly<{ entry: ExperienceEntry }>;

function ExperienceItem({ entry }: ExperienceItemProps) {
  return (
    <article
      className="grid gap-6 border-b border-border py-8 lg:grid-cols-12 lg:gap-10 lg:py-10"
      data-section-reveal
    >
      <div className="lg:col-span-4">
        <p className="text-sm font-medium text-muted-foreground">
          <ExperiencePeriod entry={entry} />
        </p>
        <h3 className="mt-2 text-[clamp(1.5rem,2.5vw,2.15rem)] leading-[1.05] font-semibold tracking-[-0.04em]">
          {entry.role}
        </h3>
        {entry.organization && entry.organizationUrl ? (
          <a
            className="mt-4 inline-flex min-h-11 items-center gap-2 font-semibold underline decoration-border underline-offset-4 transition-colors hover:text-primary motion-reduce:transition-none"
            href={entry.organizationUrl}
            target="_blank"
            rel="noreferrer"
          >
            {entry.organization}
            <ArrowUpRight className="size-4" aria-hidden="true" />
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        ) : null}
      </div>

      <div className="lg:col-span-7 lg:col-start-6">
        <p className="text-sm font-medium text-muted-foreground">{entry.detailsLabel}</p>
        <ul className="mt-3 grid gap-x-8 gap-y-3 sm:grid-cols-2" role="list">
          {entry.details.map((detail) => (
            <li className="flex gap-3 leading-relaxed" key={detail}>
              <span className="text-decorative-rose" aria-hidden="true">•</span>
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

function ExperiencePeriod({ entry }: Readonly<{ entry: ExperienceEntry }>) {
  if (entry.period.kind === "current") {
    return entry.period.label;
  }

  return (
    <>
      <time dateTime={entry.period.start.dateTime}>{entry.period.start.label}</time>
      <span aria-hidden="true"> — </span>
      <time dateTime={entry.period.end.dateTime}>{entry.period.end.label}</time>
    </>
  );
}
