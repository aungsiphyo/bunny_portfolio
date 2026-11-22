import Image from "next/image";

import { Container } from "@/components/ui/container";
import type { NonEmptyReadonlyArray, ProjectScreenshot } from "@/types/content";

type ProjectGalleryProps = Readonly<{
  projectTitle: string;
  screenshots: NonEmptyReadonlyArray<ProjectScreenshot>;
}>;

export function ProjectGallery({
  projectTitle,
  screenshots,
}: ProjectGalleryProps) {
  return (
    <section
      className="border-b border-border py-16 sm:py-24"
      aria-labelledby="project-gallery-heading"
    >
      <Container>
        <header className="grid gap-4 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="font-mono text-xs font-semibold tracking-[0.08em] text-muted-foreground uppercase">
              Product evidence
            </p>
            <h2
              id="project-gallery-heading"
              className="mt-3 text-[clamp(2.35rem,5vw,4.75rem)] leading-[0.94] font-semibold tracking-[-0.05em]"
            >
              {projectTitle} in use
            </h2>
          </div>
        </header>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {screenshots.map((screenshot) => (
            <figure key={screenshot.src}>
              <Image
                className="h-auto w-full border border-border object-contain"
                src={screenshot.src}
                alt={screenshot.alt}
                width={screenshot.width}
                height={screenshot.height}
                sizes="(min-width: 1024px) 46vw, 100vw"
              />
              <figcaption className="mt-3 max-w-[62ch] text-sm leading-relaxed text-muted-foreground">
                {screenshot.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
