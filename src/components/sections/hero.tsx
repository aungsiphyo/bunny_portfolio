import { ArrowDownRight, ArrowUpRight } from "lucide-react";

import { AnimatedHero } from "@/components/sections/animated-hero";
import { HeroArtwork } from "@/components/sections/hero-artwork";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/data/site";

const primaryCtaClassName =
  "hero-primary-cta inline-flex min-h-14 items-center justify-between gap-5 bg-hero-accent px-5 font-semibold transition-[background-color,color,transform] hover:-translate-y-0.5 hover:bg-hero-foreground motion-reduce:transform-none motion-reduce:transition-none sm:min-w-48";

const secondaryCtaClassName =
  "inline-flex min-h-14 items-center justify-between gap-5 border border-hero-foreground/45 px-5 font-semibold text-hero-foreground transition-[border-color,color,transform] hover:-translate-y-0.5 hover:border-hero-accent hover:text-hero-accent motion-reduce:transform-none motion-reduce:transition-none sm:min-w-48";

export function Hero() {
  const { hero } = siteConfig;
  const accessibleHeadline = hero.headline.join(" ");

  return (
    <AnimatedHero>
      <HeroArtwork />

      <Container className="relative z-10 flex min-h-svh flex-col pt-24 pb-6 sm:pt-28 sm:pb-8 lg:pt-32 lg:pb-10">
        <p
          className="max-w-[31rem] font-mono text-xs leading-relaxed font-semibold tracking-[0.09em] text-hero-foreground/85 uppercase sm:tracking-[0.11em]"
          data-hero-eyebrow
        >
          {hero.eyebrow}
        </p>
        <p
          className="mt-4 text-lg font-semibold tracking-[-0.02em] text-hero-foreground/90 sm:text-xl lg:text-2xl"
          data-hero-eyebrow
        >
          Bunny (Ko Si)
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
