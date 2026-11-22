import { Container } from "@/components/ui/container";
import { profileContent } from "@/content/profile";

export function About() {
  return (
    <section
      id="about"
      className="scroll-mt-20 bg-foreground py-16 text-background sm:py-20 lg:py-24"
      aria-labelledby="about-title"
      data-dark-surface
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <header className="lg:col-span-4" data-section-reveal>
            <p className="text-sm font-semibold text-background/65">About me</p>
            <h2
              id="about-title"
              className="mt-3 max-w-[10ch] text-heading font-semibold text-balance"
            >
              A little about Bunny.
            </h2>
          </header>

          <div className="lg:col-span-7 lg:col-start-6">
            <p
              className="max-w-[32ch] text-[clamp(1.5rem,2.7vw,2.35rem)] leading-[1.08] font-medium tracking-[-0.04em] text-balance"
              data-section-reveal
            >
              {profileContent.positioning}
            </p>

            <div
              className="mt-8 grid gap-5 text-base leading-relaxed text-background/78 sm:text-lg"
              data-section-reveal
            >
              {profileContent.introduction.map((paragraph) => (
                <p className="max-w-[62ch]" key={paragraph}>
                  {paragraph}
                </p>
              ))}
            </div>

            <div
              className="mt-10 grid gap-7 border-t border-background/20 pt-7 sm:grid-cols-2"
              data-section-reveal
            >
              <div>
                <p className="text-sm text-background/60">Current</p>
                <p className="mt-2 font-semibold">{profileContent.currentStatus}</p>
              </div>
              <div>
                <p className="text-sm text-background/60">Focus</p>
                <ul className="mt-2 grid gap-1 text-background/85" role="list">
                  {profileContent.freelanceAreas.map((area) => (
                    <li key={area}>{area}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
