import { AnimatedWordmark } from "@/components/layout/animated-wordmark";
import { MobileNavigation } from "@/components/layout/mobile-navigation";
import { Container } from "@/components/ui/container";
import { primaryNavigation } from "@/data/site";

const navigationLinkClassName =
  "inline-flex min-h-11 items-center font-mono text-xs font-semibold tracking-[0.08em] uppercase text-background/80 transition-colors hover:text-surface";

export function SiteHeader() {
  return (
    <header
      className="fixed inset-x-0 top-0 z-50 border-b border-background/15 bg-foreground/95 text-background backdrop-blur-md"
      aria-label="Site header"
      data-dark-surface
    >
      <Container className="flex h-[4.5rem] items-center justify-between gap-6">
        <AnimatedWordmark />

        <nav className="hidden md:block" aria-label="Primary navigation">
          <ul className="flex items-center gap-8 lg:gap-10">
            {primaryNavigation.map((item) => (
              <li key={item.href}>
                <a className={navigationLinkClassName} href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <MobileNavigation items={primaryNavigation} />
      </Container>
    </header>
  );
}
