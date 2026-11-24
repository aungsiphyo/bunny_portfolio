import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import { SkipLink } from "@/components/layout/skip-link";
import { ProjectHeader } from "@/components/project/project-header";
import { Container } from "@/components/ui/container";
import type { HcitepyoeProject, ProjectScreenshot } from "@/types/content";

type HcitepyoeCaseStudyProps = Readonly<{
  project: HcitepyoeProject;
}>;

export function HcitepyoeCaseStudy({ project }: HcitepyoeCaseStudyProps) {
  const portraitScreen = project.media.productScreens.find((screen) =>
    screen.src.endsWith("profile-creation.png"),
  );
  const landscapeScreens = project.media.productScreens.filter(
    (screen) => screen !== portraitScreen,
  );

  return (
    <>
      <SkipLink />
      <ProjectHeader />

      <main id="main-content" tabIndex={-1}>
        <article>
          <header className="border-b border-border py-14 sm:py-20 lg:py-24">
            <Container>
              <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
                <div className="lg:col-span-8">
                  <p className="font-mono text-xs font-semibold tracking-[0.1em] text-muted-foreground uppercase">
                    Hackathon project
                  </p>
                  <h1 className="mt-5 max-w-[11ch] text-[clamp(3.5rem,9vw,8rem)] leading-[0.86] font-semibold tracking-[-0.07em]">
                    {project.title}
                  </h1>
                </div>
                <div className="lg:col-span-4 lg:pb-2">
                  <p className="max-w-[42ch] text-body-large text-muted-foreground">
                    {project.context}
                  </p>
                  {project.repositories.map((repository) => (
                    <a
                      className="mt-5 inline-flex min-h-11 items-center gap-2 border-b border-foreground font-semibold transition-colors hover:border-primary hover:text-primary motion-reduce:transition-none"
                      href={repository.href}
                      key={repository.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {repository.label}
                      <ArrowUpRight className="size-4" aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </div>

              <MediaFigure
                className="mx-auto mt-10 max-w-4xl sm:mt-14 lg:mt-16"
                image={project.media.hero}
                preload
              />
            </Container>
          </header>

          <section className="py-16 sm:py-24" aria-labelledby="hcitepyoe-contribution-title">
            <Container className="grid gap-8 lg:grid-cols-12">
              <div className="lg:col-span-5" data-project-reveal>
                <p className="font-mono text-xs font-semibold tracking-[0.08em] text-muted-foreground uppercase">
                  01 · Contribution
                </p>
                <h2
                  id="hcitepyoe-contribution-title"
                  className="mt-3 text-[clamp(2.75rem,6vw,5.75rem)] leading-[0.92] font-semibold tracking-[-0.055em]"
                >
                  Engineering contribution
                </h2>
              </div>
              <ul className="grid border-t border-border lg:col-span-6 lg:col-start-7">
                {project.contributions.map((contribution, index) => (
                  <li
                    className="grid grid-cols-[2rem_minmax(0,1fr)] gap-4 border-b border-border py-5 text-lg"
                    key={contribution}
                    data-project-reveal
                  >
                    <span className="font-mono text-xs text-muted-foreground" aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {contribution}
                  </li>
                ))}
              </ul>
            </Container>
          </section>

          <section
            className="py-16 sm:py-24"
            aria-labelledby="hcitepyoe-product-title"
          >
            <Container>
              <div className="grid gap-4 lg:grid-cols-12 lg:items-end" data-project-reveal>
                <div className="lg:col-span-7">
                  <p className="font-mono text-xs font-semibold tracking-[0.08em] text-muted-foreground uppercase">
                    02 · Product screens
                  </p>
                  <h2
                    id="hcitepyoe-product-title"
                    className="mt-3 text-[clamp(2.75rem,6vw,5.75rem)] leading-[0.92] font-semibold tracking-[-0.055em]"
                  >
                    Product experience
                  </h2>
                </div>
                <p className="max-w-[48ch] text-muted-foreground lg:col-span-4 lg:col-start-9">
                  Selected screens from the supplied Hcitepyoe Matesway interface.
                </p>
              </div>

              <div className="mx-auto mt-10 grid max-w-6xl gap-8 lg:grid-cols-[minmax(15rem,0.7fr)_minmax(0,2fr)] lg:items-start">
                {portraitScreen ? (
                  <MediaFigure
                    className="mx-auto w-full max-w-sm lg:max-w-none"
                    image={portraitScreen}
                  />
                ) : null}
                <div className="grid gap-8 sm:grid-cols-2">
                  {landscapeScreens.map((screen) => (
                    <MediaFigure image={screen} key={screen.src} />
                  ))}
                </div>
              </div>
            </Container>
          </section>
        </article>

        <footer className="py-10 sm:py-12">
          <Container>
            <Link
              className="inline-flex min-h-12 items-center gap-3 border-b border-foreground font-semibold transition-colors hover:border-primary hover:text-primary motion-reduce:transition-none"
              href="/#work"
            >
              <ArrowLeft className="size-5" aria-hidden="true" />
              Back to Work
            </Link>
          </Container>
        </footer>
      </main>
    </>
  );
}

function MediaFigure({
  image,
  className,
  preload = false,
}: Readonly<{
  image: ProjectScreenshot;
  className?: string;
  preload?: boolean;
}>) {
  return (
    <figure className={className}>
      <a
        className="group block overflow-hidden"
        href={image.src}
        target="_blank"
        rel="noreferrer"
        aria-label={`View full-size image: ${image.caption}`}
      >
        <Image
          className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.01] motion-reduce:transform-none motion-reduce:transition-none"
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          sizes="(min-width: 1024px) 40vw, calc(100vw - 40px)"
          preload={preload}
        />
      </a>
      <figcaption className="mt-3 flex items-center justify-between gap-4 text-sm text-muted-foreground">
        <span>{image.caption}</span>
        <span className="inline-flex shrink-0 items-center gap-1 font-medium text-foreground">
          Full size
          <ArrowUpRight className="size-3.5" aria-hidden="true" />
        </span>
      </figcaption>
    </figure>
  );
}
