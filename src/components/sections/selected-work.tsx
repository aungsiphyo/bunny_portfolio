import { CompactProjectCard } from "@/components/project/compact-project-card";
import { FeaturedProjectCard } from "@/components/project/featured-project-card";
import { AnimatedSelectedWork } from "@/components/sections/animated-selected-work";
import { Container } from "@/components/ui/container";
import { caseStudyProjects, compactProjects } from "@/content/projects";

export function SelectedWork() {
  return (
    <AnimatedSelectedWork>
      <Container>
        <header data-work-reveal>
          <p className="font-mono text-xs font-semibold tracking-[0.1em] text-muted-foreground uppercase">
            Selected projects
          </p>
          <h2
            id="work-title"
            className="mt-3 max-w-[14ch] text-display font-semibold text-balance"
          >
            Selected work
          </h2>
        </header>

        <div className="mt-12 grid gap-16 sm:mt-16 lg:mt-20 lg:gap-20">
          {caseStudyProjects.map((project, index) => (
            <FeaturedProjectCard
              index={index}
              key={project.slug}
              project={project}
            />
          ))}
        </div>

        <section
          className="mt-16 border-t border-border pt-6 sm:mt-20 sm:pt-8 lg:mt-24"
          aria-labelledby="more-work-title"
        >
          <div data-work-reveal>
            <h3
              id="more-work-title"
              className="text-heading font-semibold tracking-tight"
            >
              More selected work
            </h3>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 sm:mt-10">
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
