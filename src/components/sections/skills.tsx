import { Container } from "@/components/ui/container";
import { skillCategories } from "@/content/skills";

export function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-20 bg-background py-14 text-foreground sm:py-20 lg:py-24"
      aria-labelledby="skills-title"
    >
      <Container>
        <header data-section-reveal>
          <p className="font-mono text-xs font-semibold tracking-[0.1em] text-muted-foreground uppercase">
            Technical toolkit
          </p>
          <h2
            id="skills-title"
            className="mt-3 max-w-[12ch] text-display font-semibold text-balance"
          >
            Skills
          </h2>
        </header>

        <div className="mt-10 grid border-t border-border sm:mt-12 md:grid-cols-2">
          {skillCategories.map((category) => (
            <article
              className="border-b border-border py-6 md:px-6 md:[&:nth-child(odd)]:border-r"
              data-section-reveal
              key={category.id}
            >
              <h3 className="text-lg font-semibold tracking-[-0.02em]">
                {category.title}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    className="border border-border bg-background px-3 py-1.5 text-sm font-medium"
                    key={skill}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
