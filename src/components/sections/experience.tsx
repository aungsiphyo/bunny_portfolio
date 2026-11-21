import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/ui/container";
import { experienceEntries } from "@/content/experience";
import type { ExperienceEntry } from "@/types/content";

export function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-20 bg-background py-14 text-foreground sm:py-20 lg:py-24"
      aria-labelledby="experience-title"
    >
      <Container>
        <header data-section-reveal>
          <p className="font-mono text-xs font-semibold tracking-[0.1em] text-muted-foreground uppercase">
            Professional path
          </p>
          <h2
            id="experience-title"
            className="mt-3 max-w-[14ch] text-display font-semibold text-balance"
          >
            Experience
          </h2>
        </header>

        <div className="mt-10 border-t border-border sm:mt-14 lg:mt-16">
          {experienceEntries.map((entry) => (
            <ExperienceItem entry={entry} key={entry.id} />
          ))}
        </div>
      </Container>
    </section>
  );
}

type ExperienceItemProps = Readonly<{
  entry: ExperienceEntry;
}>;

function ExperienceItem({ entry }: ExperienceItemProps) {
  return (
    <article
      className="grid gap-8 border-b border-border py-8 sm:py-10 lg:grid-cols-12 lg:gap-10 lg:py-12"
      data-section-reveal
    >
      <div className="lg:col-span-2">
        <p className="font-mono text-xs font-semibold tracking-[0.08em] text-muted-foreground uppercase lg:hidden">
          <ExperiencePeriod entry={entry} />
        </p>
      </div>

      <div className="lg:col-span-4">
        <h3 className="max-w-[14ch] text-[clamp(1.35rem,2.6vw,1.875rem)] leading-[1.1] font-semibold tracking-[-0.03em] text-balance">
          {entry.role}
        </h3>
        {entry.organization && entry.organizationUrl ? (
          <a
            className="mt-6 inline-flex min-h-11 items-center gap-2 border-b border-border font-semibold transition-colors hover:border-primary hover:text-primary motion-reduce:transition-none"
            href={entry.organizationUrl}
            target="_blank"
            rel="noreferrer"
          >
            {entry.organization}
            <ArrowUpRight className="size-4" aria-hidden="true" />
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        ) : null}
        <p className="mt-6 hidden font-mono text-xs font-semibold tracking-[0.1em] text-muted-foreground uppercase lg:block">
          <ExperiencePeriod entry={entry} />
        </p>
      </div>

      <div className="lg:col-span-5 lg:col-start-8">
        <p className="font-mono text-xs font-semibold tracking-[0.1em] text-muted-foreground uppercase">
          {entry.detailsLabel}
        </p>
        <ul className="mt-5 grid border-t border-border" role="list">
          {entry.details.map((detail) => (
            <li
              className="flex gap-4 border-b border-border py-4 leading-relaxed text-foreground/80"
              key={detail}
            >
              <span className="text-decorative-rose" aria-hidden="true">
                —
              </span>
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
