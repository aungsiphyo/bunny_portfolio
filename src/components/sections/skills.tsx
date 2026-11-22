import { Container } from "@/components/ui/container";
import { skillCategories } from "@/content/skills";

export function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-20 bg-background pb-16 text-foreground sm:pb-20 lg:pb-24"
      aria-labelledby="skills-title"
    >
      <Container>
        <div className="grid gap-9 border-t border-border pt-10 lg:grid-cols-12 lg:gap-12">
          <header className="lg:col-span-4" data-section-reveal>
            <p className="text-sm font-medium text-muted-foreground">Technical toolkit</p>
            <h2 id="skills-title" className="mt-2 text-heading font-semibold">
              Skills
            </h2>
          </header>

          <div className="grid sm:grid-cols-2 lg:col-span-8">
            {skillCategories.map((category) => (
              <article
                className="border-t border-border py-5 sm:px-5 sm:first:border-t-0 sm:[&:nth-child(2)]:border-t-0 sm:[&:nth-child(odd)]:border-r lg:px-6"
                data-section-reveal
                key={category.id}
              >
                <h3 className="font-semibold">{category.title}</h3>
                <p className="mt-3 max-w-[30ch] leading-relaxed text-muted-foreground">
                  {category.skills.join(" · ")}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
