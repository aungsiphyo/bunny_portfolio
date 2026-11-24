import { Download } from "lucide-react";

import { AnimatedWordmark } from "@/components/layout/animated-wordmark";
import { MobileNavigation } from "@/components/layout/mobile-navigation";
import { Container } from "@/components/ui/container";
import { primaryNavigation, siteConfig } from "@/data/site";

const navigationLinkClassName =
  "inline-flex min-h-11 items-center text-sm font-semibold text-foreground/75 transition-colors hover:text-primary";

export function SiteHeader() {
  return (
    <header
      className="fixed inset-x-0 top-0 z-50 border-b border-foreground/10 bg-background/90 text-foreground backdrop-blur-md"
      aria-label="Site header"
      data-light-surface
    >
      <Container className="flex h-[4.5rem] items-center justify-between gap-6">
        <AnimatedWordmark />

        <nav className="hidden md:block" aria-label="Primary navigation">
          <ul className="flex items-center gap-5 lg:gap-7">
            {primaryNavigation.map((item) => (
              <li key={item.href}>
                <a className={navigationLinkClassName} href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                className="inline-flex min-h-10 items-center gap-2 rounded-full border border-foreground/25 px-4 text-sm font-semibold transition-colors hover:border-foreground hover:bg-foreground hover:text-background motion-reduce:transition-none"
                href={siteConfig.resume.href}
                download="Aung-Si-Phyo-Resume.pdf"
              >
                <Download className="size-4" aria-hidden="true" />
                {siteConfig.resume.label}
              </a>
            </li>
          </ul>
        </nav>

        <MobileNavigation items={primaryNavigation} resume={siteConfig.resume} />
      </Container>
    </header>
  );
}
