import { Container } from "@/components/ui/container";
import { skillCategories } from "@/content/skills";

export function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-20 bg-highlight py-20 text-highlight-foreground sm:py-28 lg:py-36"
      aria-labelledby="skills-title"
    >
      <Container>
        <header
          className="grid gap-5 sm:grid-cols-[5rem_minmax(0,1fr)] sm:items-start"
          data-section-reveal
        >
          <p
            className="pt-1 font-mono text-label font-semibold text-foreground/65"
            aria-hidden="true"
          >
            04
          </p>
          <div>
            <p className="font-mono text-xs font-semibold tracking-[0.1em] text-foreground/70 uppercase">
              Technical toolkit
            </p>
            <h2
              id="skills-title"
              className="mt-5 max-w-[8ch] text-display font-semibold text-balance"
            >
              Skills
            </h2>
          </div>
        </header>

        <div className="mt-16 grid border-t border-foreground/25 sm:mt-20 md:grid-cols-2 lg:mt-28 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <article
              className="border-b border-foreground/25 py-8 md:px-7 md:[&:nth-child(odd)]:border-r lg:border-r lg:px-8 lg:[&:nth-child(3n)]:border-r-0"
              data-section-reveal
              key={category.id}
            >
              <div className="flex items-start justify-between gap-6">
                <h3 className="text-2xl font-semibold tracking-[-0.04em]">
                  {category.title}
                </h3>
                <p
                  className="font-mono text-xs font-semibold text-foreground/60"
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, "0")}
                </p>
              </div>
              <ul className="mt-8 grid gap-2" role="list">
                {category.skills.map((skill) => (
                  <li
                    className="border-t border-foreground/20 pt-2.5 font-mono text-sm font-semibold"
                    key={skill}
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
