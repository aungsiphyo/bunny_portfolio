import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Container } from "@/components/ui/container";

export function ProjectHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <Container className="flex min-h-20 items-center justify-between gap-6">
        <Link
          className="inline-flex min-h-11 items-center text-xl font-bold tracking-[-0.055em]"
          href="/"
          aria-label="Bunny — home"
        >
          bunny.
        </Link>

        <nav aria-label="Project navigation">
          <Link
            className="inline-flex min-h-11 items-center gap-2 border-b border-transparent font-mono text-xs font-semibold tracking-[0.08em] uppercase transition-colors hover:border-foreground motion-reduce:transition-none"
            href="/#work"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            Back to Work
          </Link>
        </nav>
      </Container>
    </header>
  );
}
