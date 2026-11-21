import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { ProjectHeader } from "@/components/project/project-header";
import { SkipLink } from "@/components/layout/skip-link";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Project not found",
};

export default function ProjectNotFound() {
  return (
    <>
      <SkipLink />
      <ProjectHeader />
      <main id="main-content" tabIndex={-1}>
        <Container className="flex min-h-[calc(100svh-5rem)] items-center py-20">
          <div className="max-w-3xl">
            <p className="font-mono text-xs font-semibold tracking-[0.1em] text-muted-foreground uppercase">
              404 · Project not found
            </p>
            <h1 className="mt-5 text-heading font-semibold">
              This case study is not available.
            </h1>
            <p className="mt-7 max-w-[55ch] text-body-large text-muted-foreground">
              Return to Selected Work to explore the published project case
              studies.
            </p>
            <Link
              className="mt-9 inline-flex min-h-12 items-center gap-3 border-b border-foreground font-semibold transition-colors hover:border-primary hover:text-primary motion-reduce:transition-none"
              href="/#work"
            >
              <ArrowLeft className="size-5" aria-hidden="true" />
              Back to Work
            </Link>
          </div>
        </Container>
      </main>
    </>
  );
}
