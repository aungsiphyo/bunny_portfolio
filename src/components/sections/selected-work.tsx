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
          className="grid gap-5 border-b border-border pb-7 lg:grid-cols-12 lg:items-end"
          data-work-reveal
        >
          <h2
            id="work-title"
            className="text-display font-semibold text-balance lg:col-span-7"
          >
            Selected work
          </h2>
          <p className="max-w-[42ch] text-muted-foreground lg:col-span-4 lg:col-start-9">
            Selected applications showing frontend engineering, systems
            integration, and deployment ownership.
          </p>
        </header>

        <div className="mt-9 grid gap-8 lg:grid-cols-2 lg:gap-7">
          {caseStudyProjects.map((project) => (
            <FeaturedProjectCard key={project.slug} project={project} />
          ))}
        </div>

        <section
          className="mt-16 sm:mt-20"
          aria-labelledby="more-work-title"
        >
          <div className="flex items-end justify-between gap-6 border-b border-border pb-5" data-work-reveal>
            <h3 id="more-work-title" className="text-2xl font-semibold tracking-[-0.04em] sm:text-3xl">
              More work
            </h3>
            <p className="hidden text-sm text-muted-foreground sm:block">
              Hackathons and focused builds
            </p>
          </div>

          <div className="grid md:grid-cols-2">
            {compactProjects.map((project) => (
              <CompactProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>
      </Container>
    </AnimatedSelectedWork>
  );
}
