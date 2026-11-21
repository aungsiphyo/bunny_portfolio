import { ProfileMedia } from "@/components/profile/profile-media";
import { Container } from "@/components/ui/container";
import { profileContent } from "@/content/profile";

export function About() {
  return (
    <section
      id="about"
      className="scroll-mt-20 border-t border-border bg-background py-20 text-foreground sm:py-28 lg:py-36"
      aria-labelledby="about-title"
    >
      <Container>
        <header
          className="grid gap-5 sm:grid-cols-[5rem_minmax(0,1fr)] sm:items-start"
          data-section-reveal
        >
          <p
            className="pt-1 font-mono text-label font-semibold text-muted-foreground"
            aria-hidden="true"
          >
            02
          </p>
          <div>
            <p className="font-mono text-xs font-semibold tracking-[0.1em] text-muted-foreground uppercase">
              Profile
            </p>
            <h2
              id="about-title"
              className="mt-5 max-w-[8ch] text-display font-semibold text-balance"
            >
              About Bunny
            </h2>
          </div>
        </header>

        <div className="mt-16 grid gap-12 sm:mt-20 lg:mt-28 lg:grid-cols-12 lg:items-start lg:gap-10">
          <div className="lg:col-span-5" data-section-reveal>
            <ProfileMedia media={profileContent.media} />
          </div>

          <div className="lg:col-span-6 lg:col-start-7 lg:pt-10">
            <p
              className="max-w-[30ch] text-[clamp(1.8rem,3.7vw,3.75rem)] leading-[1.02] font-semibold tracking-[-0.045em] text-balance"
              data-section-reveal
            >
              {profileContent.positioning}
            </p>

            <div
              className="mt-10 grid gap-6 border-t border-border pt-7 text-lg leading-relaxed text-muted-foreground sm:text-xl"
              data-section-reveal
            >
              {profileContent.introduction.map((paragraph) => (
                <p className="max-w-[61ch]" key={paragraph}>
                  {paragraph}
                </p>
              ))}
            </div>

            <div
              className="mt-10 grid gap-8 border-l-2 border-decorative-rose pl-5 sm:grid-cols-2 sm:gap-10"
              data-section-reveal
            >
              <div>
                <p className="font-mono text-xs font-semibold tracking-[0.1em] text-muted-foreground uppercase">
                  Current status
                </p>
                <p className="mt-3 text-lg font-semibold">
                  {profileContent.currentStatus}
                </p>
              </div>
              <div>
                <p className="font-mono text-xs font-semibold tracking-[0.1em] text-muted-foreground uppercase">
                  Freelance focus
                </p>
                <ul className="mt-3 grid gap-1" role="list">
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
