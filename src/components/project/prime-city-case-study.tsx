import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";

import { SkipLink } from "@/components/layout/skip-link";
import { ProjectHeader } from "@/components/project/project-header";
import { Container } from "@/components/ui/container";
import type {
  PrimeCityProject,
  ProjectScreenshot,
} from "@/types/content";

type PrimeCityCaseStudyProps = Readonly<{
  project: PrimeCityProject;
}>;

type SectionHeadingProps = Readonly<{
  number: string;
  title: string;
  description?: string;
  light?: boolean;
}>;

export function PrimeCityCaseStudy({ project }: PrimeCityCaseStudyProps) {
  const { media } = project;

  return (
    <>
      <SkipLink />
      <ProjectHeader />

      <main id="main-content" tabIndex={-1}>
        <article>
          <header className="border-b border-border py-14 sm:py-20 lg:py-24">
            <Container>
              <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-12">
                <div className="lg:col-span-6">
                  <div className="flex items-center gap-3">
                    <Image
                      className="size-11 rounded-xl border border-border bg-black object-contain sm:size-12"
                      src={media.logo.src}
                      alt={media.logo.alt}
                      width={media.logo.width}
                      height={media.logo.height}
                      sizes="48px"
                    />
                    <p className="font-mono text-xs font-semibold tracking-[0.1em] text-muted-foreground uppercase">
                      01 · Project introduction
                    </p>
                  </div>

                  <h1 className="mt-7 max-w-[9ch] text-[clamp(4rem,10vw,8.5rem)] leading-[0.84] font-semibold tracking-[-0.075em] [word-spacing:0.12em] text-balance">
                    {project.title}
                  </h1>
                  <p className="mt-5 text-xl font-medium sm:text-2xl">
                    {project.category}
                  </p>
                  <p className="mt-5 max-w-[55ch] text-body-large text-muted-foreground">
                    {project.overview}
                  </p>

                  <dl className="mt-8 grid border-y border-border sm:grid-cols-2">
                    <div className="py-4 sm:pr-5">
                      <dt className="font-mono text-[0.68rem] font-semibold tracking-[0.08em] text-muted-foreground uppercase">
                        My contribution
                      </dt>
                      <dd className="mt-2 text-sm leading-relaxed">
                        {project.cardContribution}
                      </dd>
                    </div>
                    <div className="border-t border-border py-4 sm:border-l sm:border-t-0 sm:pl-5">
                      <dt className="font-mono text-[0.68rem] font-semibold tracking-[0.08em] text-muted-foreground uppercase">
                        Selected stack
                      </dt>
                      <dd className="mt-2 text-sm leading-relaxed">
                        {project.techStack.slice(0, 8).join(" · ")}
                      </dd>
                    </div>
                  </dl>
                </div>

                {project.cover.kind === "image" ? (
                  <figure className="mx-auto w-full max-w-[42rem] lg:col-span-6 lg:mx-0 lg:justify-self-end">
                    <div className="overflow-hidden rounded-[1.75rem] border border-border bg-black p-2 sm:p-3">
                      <Image
                        className="h-auto w-full rounded-[1.15rem]"
                        src={project.cover.src}
                        alt={project.cover.alt}
                        width={project.cover.width}
                        height={project.cover.height}
                        sizes="(min-width: 1024px) 45vw, (min-width: 640px) 75vw, calc(100vw - 40px)"
                        preload
                      />
                    </div>
                    <figcaption className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      The physical Prime City prototype at the university showcase.
                    </figcaption>
                  </figure>
                ) : null}
              </div>

              <div className="mt-12 grid gap-8 border-t border-border pt-8 lg:grid-cols-12">
                <p className="max-w-[62ch] text-body-large text-muted-foreground lg:col-span-6">
                  {project.purpose}
                </p>
                <ul className="grid gap-x-6 gap-y-3 sm:grid-cols-2 lg:col-span-6" role="list">
                  {project.coreFeatures.map((feature) => (
                    <li className="flex gap-3 text-sm leading-relaxed" key={feature}>
                      <span className="text-primary" aria-hidden="true">
                        —
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </Container>
          </header>

          <section
            className="bg-foreground py-16 text-background sm:py-24"
            aria-labelledby="prime-section-02"
            data-dark-surface
          >
            <Container>
              <SectionHeading
                number="02"
                title="Mobile experience"
                description="Selected resident and administrative screens show the actual black-and-gold Prime City interface."
                light
              />
              <div className="-mx-5 mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 lg:grid-cols-3">
                {media.mobileScreens.map((screen) => (
                  <MediaFigure image={screen} key={screen.src} portrait dark />
                ))}
              </div>
            </Container>
          </section>

          <section className="py-16 sm:py-24" aria-labelledby="prime-section-03">
            <Container>
              <SectionHeading
                number="03"
                title="Physical system"
                description="The physical model brought access, parking, lighting, displays, and connected-device communication into the same prototype."
              />
              <div className="-mx-5 mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 sm:pb-0 sm:gap-6 lg:mx-auto lg:max-w-5xl lg:gap-10">
                {media.hardwarePhotos.map((photo) => (
                  <MediaFigure image={photo} key={photo.src} portrait />
                ))}
              </div>
            </Container>
          </section>

          <section
            className="border-y border-background/15 bg-foreground py-16 text-background sm:py-24"
            aria-labelledby="prime-section-04"
            data-dark-surface
          >
            <Container>
              <SectionHeading
                number="04"
                title="Project identity"
                description="Black, gold, silver, and warm white distinguish Prime City while the portfolio’s broader visual system stays unchanged."
                light
              />
              <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(16rem,1fr)] lg:items-start lg:gap-10">
                <MediaFigure image={media.brandGuide} dark />
                <MediaFigure image={media.logo} dark />
              </div>
            </Container>
          </section>

          <section className="py-16 sm:py-24" aria-labelledby="prime-section-05">
            <Container>
              <SectionHeading
                number="05"
                title="My engineering contributions"
                description="My work covered frontend and mobile development, real-time MQTT integration, and most infrastructure and deployment responsibilities."
              />
              <ol className="mt-10 grid gap-0 border-t border-border lg:ml-auto lg:max-w-4xl">
                {project.contributions.map((contribution, index) => (
                  <li
                    className="grid grid-cols-[2rem_minmax(0,1fr)] gap-4 border-b border-border py-5 text-lg leading-relaxed sm:grid-cols-[3rem_minmax(0,1fr)]"
                    key={contribution}
                  >
                    <span className="font-mono text-xs font-semibold text-muted-foreground" aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span>{contribution}</span>
                  </li>
                ))}
              </ol>
            </Container>
          </section>

          <section
            className="border-y border-border bg-surface py-16 sm:py-24"
            aria-labelledby="prime-section-06"
          >
            <Container>
              <SectionHeading
                number="06"
                title="University showcase"
                description="The team presented the physical residential model alongside the connected software experience."
              />
              <div className="mt-10 sm:mt-12">
                {media.showcasePhotos.map((photo) => (
                  <MediaFigure image={photo} key={photo.src} />
                ))}
              </div>
            </Container>
          </section>

          <section className="py-16 sm:py-24" aria-labelledby="prime-section-07">
            <Container className="grid gap-12 lg:grid-cols-12 lg:gap-14">
              <div className="lg:col-span-6">
                <SectionHeading number="07" title="Outcome and repositories" />
                <p className="mt-8 max-w-[58ch] text-body-large text-muted-foreground">
                  {project.outcome}
                </p>
              </div>

              <div className="lg:col-span-5 lg:col-start-8 lg:pt-9">
                <p className="font-mono text-xs font-semibold tracking-[0.08em] text-muted-foreground uppercase">
                  Source repositories
                </p>
                <ul className="mt-4 grid border-t border-border">
                  {project.repositories.map((repository) => (
                    <li className="border-b border-border" key={repository.href}>
                      <a
                        className="flex min-h-16 items-center justify-between gap-4 py-3 font-medium transition-colors hover:text-primary motion-reduce:transition-none"
                        href={repository.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span className="break-all">{repository.label}</span>
                        <ExternalLink className="size-5 shrink-0" aria-hidden="true" />
                        <span className="sr-only"> (opens in a new tab)</span>
                      </a>
                    </li>
                  ))}
                </ul>
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

function SectionHeading({ number, title, description, light = false }: SectionHeadingProps) {
  const headingId = `prime-section-${number}`;

  return (
    <div className="grid gap-4 lg:grid-cols-12 lg:items-end">
      <div className="lg:col-span-7">
        <p
          className={`font-mono text-xs font-semibold tracking-[0.08em] uppercase ${
            light ? "text-background/65" : "text-muted-foreground"
          }`}
        >
          {number}
        </p>
        <h2
          id={headingId}
          className="mt-3 text-[clamp(2.75rem,6vw,5.75rem)] leading-[0.92] font-semibold tracking-[-0.055em] text-balance"
        >
          {title}
        </h2>
      </div>
      {description ? (
        <p
          className={`max-w-[52ch] leading-relaxed lg:col-span-4 lg:col-start-9 ${
            light ? "text-background/75" : "text-muted-foreground"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

function MediaFigure({
  image,
  portrait = false,
  dark = false,
}: Readonly<{
  image: ProjectScreenshot;
  portrait?: boolean;
  dark?: boolean;
}>) {
  return (
    <figure
      className={
        portrait
          ? "w-[78vw] max-w-[22rem] shrink-0 snap-center sm:w-full sm:max-w-none"
          : "w-full"
      }
    >
      <div
        className={`overflow-hidden rounded-[1.5rem] border p-2 sm:p-3 ${
          dark ? "border-background/20 bg-black" : "border-border bg-white"
        }`}
      >
        <Image
          className="h-auto w-full rounded-[1rem]"
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          sizes={
            portrait
              ? "(min-width: 1024px) 28vw, (min-width: 640px) 45vw, 78vw"
              : "(min-width: 1440px) 1344px, (min-width: 768px) calc(100vw - 64px), calc(100vw - 40px)"
          }
        />
      </div>
      <figcaption
        className={`mt-3 text-sm leading-relaxed ${
          dark ? "text-background/70" : "text-muted-foreground"
        }`}
      >
        {image.caption}
      </figcaption>
    </figure>
  );
}
