import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/ui/container";
import { experienceEntries } from "@/content/experience";
import type { ExperienceEntry } from "@/types/content";

export function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-20 bg-foreground py-20 text-background sm:py-28 lg:py-36"
      aria-labelledby="experience-title"
      data-dark-surface
    >
      <Container>
        <header
          className="grid gap-5 sm:grid-cols-[5rem_minmax(0,1fr)] sm:items-start"
          data-section-reveal
        >
          <p
            className="pt-1 font-mono text-label font-semibold text-background/70"
            aria-hidden="true"
          >
            03
          </p>
          <div>
            <p className="font-mono text-xs font-semibold tracking-[0.1em] text-background/70 uppercase">
              Professional path
            </p>
            <h2
              id="experience-title"
              className="mt-5 max-w-[11ch] text-display font-semibold text-balance"
            >
              Experience
            </h2>
          </div>
        </header>

        <div className="mt-16 border-t border-background/25 sm:mt-20 lg:mt-28">
          {experienceEntries.map((entry, index) => (
            <ExperienceItem entry={entry} index={index} key={entry.id} />
          ))}
        </div>
      </Container>
    </section>
  );
}

type ExperienceItemProps = Readonly<{
  entry: ExperienceEntry;
  index: number;
}>;

function ExperienceItem({ entry, index }: ExperienceItemProps) {
  return (
    <article
      className="grid gap-8 border-b border-background/25 py-10 sm:py-12 lg:grid-cols-12 lg:gap-10 lg:py-16"
      data-section-reveal
    >
      <div className="flex items-start justify-between gap-6 lg:col-span-2">
        <p className="font-mono text-xs font-semibold tracking-[0.1em] text-background/70 uppercase">
          0{index + 1}
        </p>
        <p className="font-mono text-xs font-semibold tracking-[0.08em] text-background/70 uppercase lg:hidden">
          <ExperiencePeriod entry={entry} />
        </p>
      </div>

      <div className="lg:col-span-4">
        <h3 className="max-w-[14ch] text-[clamp(2.25rem,4.8vw,5rem)] leading-[0.93] font-semibold tracking-[-0.055em] text-balance">
          {entry.role}
        </h3>
        {entry.organization && entry.organizationUrl ? (
          <a
            className="mt-6 inline-flex min-h-11 items-center gap-2 border-b border-background/45 font-semibold transition-colors hover:border-hero-accent hover:text-hero-accent motion-reduce:transition-none"
            href={entry.organizationUrl}
            target="_blank"
            rel="noreferrer"
          >
            {entry.organization}
            <ArrowUpRight className="size-4" aria-hidden="true" />
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        ) : null}
        <p className="mt-6 hidden font-mono text-xs font-semibold tracking-[0.1em] text-background/70 uppercase lg:block">
          <ExperiencePeriod entry={entry} />
        </p>
      </div>

      <div className="lg:col-span-5 lg:col-start-8">
        <p className="font-mono text-xs font-semibold tracking-[0.1em] text-background/70 uppercase">
          {entry.detailsLabel}
        </p>
        <ul className="mt-5 grid border-t border-background/20" role="list">
          {entry.details.map((detail) => (
            <li
              className="flex gap-4 border-b border-background/20 py-4 leading-relaxed text-background/80"
              key={detail}
            >
              <span className="text-hero-accent" aria-hidden="true">
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
