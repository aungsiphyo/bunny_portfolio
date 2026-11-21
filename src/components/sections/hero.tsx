import { ArrowDownRight, ArrowUpRight } from "lucide-react";

import { AnimatedHero } from "@/components/sections/animated-hero";
import { HeroArtwork } from "@/components/sections/hero-artwork";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/data/site";

const primaryCtaClassName =
  "inline-flex min-h-14 items-center justify-between gap-5 bg-hero-accent px-5 font-semibold text-hero-accent-foreground transition-colors hover:bg-hero-foreground sm:min-w-48";

const secondaryCtaClassName =
  "inline-flex min-h-14 items-center justify-between gap-5 border border-hero-foreground/35 px-5 font-semibold text-hero-foreground transition-colors hover:border-hero-accent hover:text-hero-accent sm:min-w-48";

export function Hero() {
  const { hero } = siteConfig;
  const accessibleHeadline = hero.headline.join(" ");

  return (
    <AnimatedHero>
      <HeroArtwork />

      <Container className="relative z-10 flex min-h-svh flex-col pt-28 pb-7 sm:pt-32 sm:pb-9 lg:pt-36 lg:pb-12">
        <p
          className="max-w-[31rem] font-mono text-[0.6875rem] leading-relaxed font-semibold tracking-[0.12em] text-hero-foreground/70 uppercase sm:text-xs"
          data-hero-eyebrow
        >
          {hero.eyebrow}
        </p>

        <div className="flex flex-1 items-center py-8 sm:py-10 lg:py-12">
          <h1
            id="hero-title"
            className="w-full max-w-[88rem] text-hero font-semibold"
            aria-label={accessibleHeadline}
          >
            <span className="block pb-[0.06em]" aria-hidden="true">
              <span className="block" data-hero-line="primary">
                {hero.headline[0]}
              </span>
            </span>
            <span
              className="block pb-[0.06em] text-hero-accent"
              aria-hidden="true"
            >
              <span className="block" data-hero-line="accent">
                {hero.headline[1]}
              </span>
            </span>
          </h1>
        </div>

        <div className="grid gap-8 border-t border-hero-foreground/20 pt-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-12 lg:pt-8">
          <div className="max-w-2xl">
            <p
              className="max-w-xl text-base leading-relaxed text-hero-foreground/78 sm:text-lg lg:text-xl"
              data-hero-support
            >
              {hero.supportingText}
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                className={primaryCtaClassName}
                href={hero.primaryCta.href}
                data-hero-cta
              >
                <span>{hero.primaryCta.label}</span>
                <ArrowDownRight className="size-5" aria-hidden="true" />
              </a>
              <a
                className={secondaryCtaClassName}
                href={hero.secondaryCta.href}
                data-hero-cta
              >
                <span>{hero.secondaryCta.label}</span>
                <ArrowUpRight className="size-5" aria-hidden="true" />
              </a>
            </div>
          </div>

          <a
            className="hidden min-h-11 items-center gap-3 self-end font-mono text-xs font-semibold tracking-[0.1em] text-hero-foreground/65 uppercase transition-colors hover:text-hero-accent lg:inline-flex"
            href="#work"
            data-hero-scroll
          >
            Scroll to work
            <ArrowDownRight className="size-4" aria-hidden="true" />
          </a>
        </div>
      </Container>
    </AnimatedHero>
  );
}
