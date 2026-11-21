import { CompactProjectCard } from "@/components/project/compact-project-card";
import { FeaturedProjectCard } from "@/components/project/featured-project-card";
import { AnimatedSelectedWork } from "@/components/sections/animated-selected-work";
import { Container } from "@/components/ui/container";
import { caseStudyProjects, compactProjects } from "@/content/projects";

export function SelectedWork() {
  return (
    <AnimatedSelectedWork>
      <Container>
        <header
          className="grid gap-5 sm:grid-cols-[5rem_minmax(0,1fr)] sm:items-start"
          data-work-reveal
        >
          <p
            className="pt-1 font-mono text-label font-semibold text-muted-foreground"
            aria-hidden="true"
          >
            01
          </p>
          <div>
            <p className="font-mono text-xs font-semibold tracking-[0.1em] text-muted-foreground uppercase">
              Selected projects
            </p>
            <h2
              id="work-title"
              className="mt-5 max-w-[9ch] text-display font-semibold text-balance"
            >
              Selected work
            </h2>
          </div>
        </header>

        <div className="mt-20 grid gap-24 sm:mt-28 lg:mt-36 lg:gap-36">
          {caseStudyProjects.map((project, index) => (
            <FeaturedProjectCard
              index={index}
              key={project.slug}
              project={project}
            />
          ))}
        </div>

        <section
          className="mt-24 border-t border-border pt-8 sm:mt-32 sm:pt-10 lg:mt-40"
          aria-labelledby="more-work-title"
        >
          <div className="grid gap-5 sm:grid-cols-[5rem_minmax(0,1fr)]" data-work-reveal>
            <p
              className="font-mono text-label font-semibold text-muted-foreground"
              aria-hidden="true"
            >
              03—04
            </p>
            <h3
              id="more-work-title"
              className="text-[clamp(2.25rem,5vw,4.5rem)] leading-[0.95] font-semibold tracking-[-0.05em]"
            >
              More selected work
            </h3>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 sm:mt-14">
            {compactProjects.map((project, index) => (
              <CompactProjectCard
                index={index}
                key={project.slug}
                project={project}
              />
            ))}
          </div>
        </section>
      </Container>
    </AnimatedSelectedWork>
  );
}
