import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";

import { ProjectHeader } from "@/components/project/project-header";
import { ProjectVideo } from "@/components/project/project-video";
import { SkipLink } from "@/components/layout/skip-link";
import { Container } from "@/components/ui/container";
import type {
  ProjectScreenshot,
  UniYatwonProject,
} from "@/types/content";

type UniYatwonCaseStudyProps = Readonly<{
  project: UniYatwonProject;
}>;

type SectionHeadingProps = Readonly<{
  number: string;
  title: string;
  description?: string;
  light?: boolean;
}>;

export function UniYatwonCaseStudy({ project }: UniYatwonCaseStudyProps) {
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
                      className="size-11 rounded-xl border border-border bg-white object-contain p-1.5 sm:size-12"
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
                        My role
                      </dt>
                      <dd className="mt-2 text-sm leading-relaxed">
                        Frontend collaboration, integration, infrastructure, and deployment
                      </dd>
                    </div>
                    <div className="border-t border-border py-4 sm:border-l sm:border-t-0 sm:pl-5">
                      <dt className="font-mono text-[0.68rem] font-semibold tracking-[0.08em] text-muted-foreground uppercase">
                        Technology
                      </dt>
                      <dd className="mt-2 text-sm leading-relaxed">
                        {project.techStack.join(" · ")}
                      </dd>
                    </div>
                  </dl>
                </div>

                <figure className="mx-auto w-full max-w-[37rem] lg:col-span-6 lg:mx-0 lg:justify-self-end">
                  <div className="overflow-hidden rounded-[1.75rem] border border-border bg-white p-2 sm:p-3">
                    <Image
                      className="h-auto w-full"
                      src={media.poster.src}
                      alt={media.poster.alt}
                      width={media.poster.width}
                      height={media.poster.height}
                      sizes="(min-width: 1024px) 45vw, (min-width: 640px) 75vw, calc(100vw - 40px)"
                      preload
                    />
                  </div>
                  <figcaption className="mt-3 max-w-[60ch] text-sm leading-relaxed text-muted-foreground">
                    {media.poster.caption}
                  </figcaption>
                </figure>
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

          <section className="py-16 sm:py-24" aria-labelledby="brand-motion-heading">
            <Container>
              <SectionHeading
                number="02"
                title="Brand motion"
                description="A brief motion study introduces the project’s yellow identity. It plays silently only while in view and remains fully controllable."
              />
              <div className="mx-auto mt-10 max-w-5xl overflow-hidden rounded-[1.5rem] border border-border bg-foreground sm:mt-12">
                <ProjectVideo
                  video={media.brandMotion}
                  autoplayWhenVisible
                  className="aspect-video h-auto w-full object-contain"
                />
              </div>
            </Container>
          </section>

          <section
            className="border-y border-border bg-surface py-16 sm:py-24"
            aria-labelledby="application-showcase-heading"
          >
            <Container>
              <SectionHeading
                number="03"
                title="Application showcase"
                description="Selected product screens show the real mobile experience without decorative device frames or altered colors."
              />
              <div className="mt-10 grid gap-8 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:mx-auto lg:max-w-4xl lg:gap-10">
                {media.applicationScreens.map((screen) => (
                  <MediaFigure image={screen} key={screen.src} portrait />
                ))}
              </div>
            </Container>
          </section>

          <section
            className="bg-foreground py-16 text-background sm:py-24"
            aria-labelledby="walkthrough-heading"
            data-dark-surface
          >
            <Container className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-14">
              <div className="lg:col-span-5">
                <SectionHeading
                  number="04"
                  title="See it in action"
                  description={`A ${media.walkthrough.duration} portrait walkthrough of the mobile application. Playback begins only when you choose play.`}
                  light
                />
                <p className="mt-7 max-w-[48ch] text-sm leading-relaxed text-background/70">
                  The recording demonstrates the working feed, profiles, search, and interaction patterns in the project build.
                </p>
              </div>
              <div className="mx-auto w-full max-w-[20rem] lg:col-span-5 lg:col-start-8">
                <ProjectVideo
                  video={media.walkthrough}
                  className="h-auto w-full rounded-[1.5rem] border border-background/20 bg-black object-contain"
                />
              </div>
            </Container>
          </section>

          <section className="py-16 sm:py-24" aria-labelledby="contributions-heading">
            <Container>
              <SectionHeading
                number="05"
                title="My engineering contributions"
                description="The product was collaborative; the infrastructure and production deployment were my primary area of ownership."
              />

              <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-14">
                <ContributionGroup
                  eyebrow="Shared product work"
                  contributions={project.contributions.slice(0, 3)}
                />
                <ContributionGroup
                  eyebrow="Primary ownership"
                  contributions={project.contributions.slice(3)}
                />
              </div>
            </Container>
          </section>

          <section
            className="border-y border-border bg-surface py-16 sm:py-24"
            aria-labelledby="showcase-heading"
          >
            <Container>
              <SectionHeading
                number="06"
                title="Real-world university showcase"
                description="The project was demonstrated as a working web and mobile experience during the university project showcase."
              />
              <div className="mt-10 sm:mt-12">
                <MediaFigure image={media.showcasePhotos[0]} />
                <div className="mt-8 grid gap-8 sm:grid-cols-2 sm:gap-6 lg:mt-10 lg:gap-10">
                  {media.showcasePhotos.slice(1).map((photo) => (
                    <MediaFigure image={photo} key={photo.src} />
                  ))}
                </div>
              </div>
            </Container>
          </section>

          <section className="py-16 sm:py-24" aria-labelledby="outcome-heading">
            <Container className="grid gap-12 lg:grid-cols-12 lg:gap-14">
              <div className="lg:col-span-6">
                <SectionHeading number="07" title="Outcomes and repositories" />
                <p className="mt-8 max-w-[58ch] text-body-large text-muted-foreground">
                  {project.outcome}
                </p>
                {project.statusNote ? (
                  <p className="mt-7 border-l-2 border-primary pl-4 text-sm leading-relaxed text-muted-foreground">
                    {project.statusNote} There is no live demo link.
                  </p>
                ) : null}
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

function SectionHeading({
  number,
  title,
  description,
  light = false,
}: SectionHeadingProps) {
  const headingId =
    number === "02"
      ? "brand-motion-heading"
      : number === "03"
        ? "application-showcase-heading"
        : number === "04"
          ? "walkthrough-heading"
          : number === "05"
            ? "contributions-heading"
            : number === "06"
              ? "showcase-heading"
              : "outcome-heading";

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
}: Readonly<{ image: ProjectScreenshot; portrait?: boolean }>) {
  return (
    <figure className={portrait ? "mx-auto w-full max-w-[22rem]" : "w-full"}>
      <div className="overflow-hidden rounded-[1.5rem] border border-border bg-white p-2 sm:p-3">
        <Image
          className="h-auto w-full rounded-[1rem]"
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          sizes={
            portrait
              ? "(min-width: 768px) 352px, calc(100vw - 40px)"
              : "(min-width: 1440px) 1344px, (min-width: 768px) calc(100vw - 64px), calc(100vw - 40px)"
          }
        />
      </div>
      <figcaption className="mt-3 text-sm leading-relaxed text-muted-foreground">
        {image.caption}
      </figcaption>
    </figure>
  );
}

function ContributionGroup({
  eyebrow,
  contributions,
}: Readonly<{ eyebrow: string; contributions: readonly string[] }>) {
  return (
    <div>
      <h3 className="font-mono text-xs font-semibold tracking-[0.08em] text-muted-foreground uppercase">
        {eyebrow}
      </h3>
      <ul className="mt-4 grid border-t border-border" role="list">
        {contributions.map((contribution) => (
          <li
            className="flex gap-4 border-b border-border py-5 leading-relaxed"
            key={contribution}
          >
            <span className="text-primary" aria-hidden="true">
              —
            </span>
            <span>{contribution}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
