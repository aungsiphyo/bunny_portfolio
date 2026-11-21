import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/ui/container";
import { homeSections, siteConfig } from "@/data/site";

export function SiteFooter() {
  return (
    <footer
      className="border-t border-background/15 bg-foreground py-8 text-background sm:py-10"
      data-dark-surface
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-4">
            <a
              className="inline-flex min-h-11 items-center text-3xl font-semibold tracking-[-0.06em] transition-colors hover:text-hero-accent motion-reduce:transition-none"
              href="#main-content"
              aria-label="Bunny — back to top"
            >
              bunny.
            </a>
          </div>

          <nav className="lg:col-span-4" aria-label="Footer navigation">
            <p className="font-mono text-xs font-semibold tracking-[0.1em] text-background/65 uppercase">
              Navigate
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-1">
              {homeSections.map((item) => (
                <li key={item.href}>
                  <a
                    className="inline-flex min-h-11 items-center font-semibold text-background/80 transition-colors hover:text-hero-accent motion-reduce:transition-none"
                    href={item.href}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="lg:col-span-3 lg:col-start-10" aria-label="Social links">
            <p className="font-mono text-xs font-semibold tracking-[0.1em] text-background/65 uppercase">
              Connect
            </p>
            <ul className="mt-4 grid">
              {siteConfig.socialLinks.map((link) => (
                <li key={link.href}>
                  <a
                    className="inline-flex min-h-11 items-center gap-2 font-semibold text-background/80 transition-colors hover:text-hero-accent motion-reduce:transition-none"
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {link.label}
                    <ArrowUpRight className="size-4" aria-hidden="true" />
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-background/20 pt-6 font-mono text-xs tracking-[0.06em] text-background/65 sm:flex-row sm:items-center sm:justify-between">
          <p>© Bunny (Ko Si). All rights reserved.</p>
          <p>Software Engineer · Cloud &amp; DevOps Enthusiast</p>
        </div>
      </Container>
    </footer>
  );
}
