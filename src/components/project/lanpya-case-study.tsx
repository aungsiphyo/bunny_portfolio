import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import { SkipLink } from "@/components/layout/skip-link";
import { ProjectHeader } from "@/components/project/project-header";
import { Container } from "@/components/ui/container";
import type { LanpyaProject, ProjectScreenshot } from "@/types/content";

type LanpyaCaseStudyProps = Readonly<{
  project: LanpyaProject;
}>;

export function LanpyaCaseStudy({ project }: LanpyaCaseStudyProps) {
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
                  <h1 className="mt-5 text-[clamp(4.5rem,12vw,10rem)] leading-[0.82] font-semibold tracking-[-0.075em]">
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

              <figure className="mx-auto mt-10 max-w-4xl sm:mt-14 lg:mt-16">
                <Image
                  className="h-auto w-full"
                  src={project.media.hero.src}
                  alt={project.media.hero.alt}
                  width={project.media.hero.width}
                  height={project.media.hero.height}
                  sizes="(min-width: 1440px) 1344px, (min-width: 768px) calc(100vw - 64px), calc(100vw - 40px)"
                  preload
                />
                <figcaption className="mt-3 text-sm text-muted-foreground">
                  {project.media.hero.caption}
                </figcaption>
              </figure>
            </Container>
          </header>

          <section className="py-16 sm:py-24" aria-labelledby="lanpya-contribution-title">
            <Container className="grid gap-8 lg:grid-cols-12">
              <div className="lg:col-span-5" data-project-reveal>
                <p className="font-mono text-xs font-semibold tracking-[0.08em] text-muted-foreground uppercase">
                  01 · Contribution
                </p>
                <h2
                  id="lanpya-contribution-title"
                  className="mt-3 text-[clamp(2.75rem,6vw,5.75rem)] leading-[0.92] font-semibold tracking-[-0.055em]"
                >
                  Built during the hackathon
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

          <section className="py-16 sm:py-24" aria-labelledby="lanpya-product-title">
            <Container>
              <SectionHeading
                number="02"
                id="lanpya-product-title"
                title="Product experience"
                description="Selected screens from the supplied Lanpya interface."
              />
              <div className="mx-auto mt-10 grid max-w-5xl gap-8 lg:grid-cols-2">
                {project.media.productScreens.map((screen) => (
                  <MediaFigure image={screen} key={screen.src} />
                ))}
              </div>
            </Container>
          </section>

          <section className="py-16 sm:py-24" aria-labelledby="lanpya-team-title">
            <Container>
              <SectionHeading
                number="03"
                id="lanpya-team-title"
                title="Hackathon team"
                description="Team photographs supplied from Let’s Tech Hackathon."
              />
              <div className="mx-auto mt-10 grid max-w-5xl gap-8 lg:grid-cols-2">
                {project.media.teamPhotos.map((photo) => (
                  <MediaFigure image={photo} key={photo.src} />
                ))}
              </div>
            </Container>
          </section>
        </article>

        <footer className="border-t border-border py-10 sm:py-12">
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

function SectionHeading({
  number,
  id,
  title,
  description,
  light = false,
}: Readonly<{
  number: string;
  id: string;
  title: string;
  description: string;
  light?: boolean;
}>) {
  return (
    <div className="grid gap-4 lg:grid-cols-12 lg:items-end" data-project-reveal>
      <div className="lg:col-span-7">
        <p
          className={`font-mono text-xs font-semibold tracking-[0.08em] uppercase ${
            light ? "text-background/65" : "text-muted-foreground"
          }`}
        >
          {number}
        </p>
        <h2
          id={id}
          className="mt-3 text-[clamp(2.75rem,6vw,5.75rem)] leading-[0.92] font-semibold tracking-[-0.055em]"
        >
          {title}
        </h2>
      </div>
      <p
        className={`max-w-[48ch] lg:col-span-4 lg:col-start-9 ${
          light ? "text-background/70" : "text-muted-foreground"
        }`}
      >
        {description}
      </p>
    </div>
  );
}

function MediaFigure({
  image,
  className,
}: Readonly<{
  image: ProjectScreenshot;
  className?: string;
}>) {
  return (
    <figure className={className}>
      <Image
        className="h-auto w-full"
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        sizes="(min-width: 1024px) 46vw, calc(100vw - 40px)"
      />
      <figcaption className="mt-3 text-sm text-muted-foreground">
        {image.caption}
      </figcaption>
    </figure>
  );
}
