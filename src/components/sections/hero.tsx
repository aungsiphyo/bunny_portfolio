import { ArrowDownRight, ArrowUpRight } from "lucide-react";

import { ProfileMedia } from "@/components/profile/profile-media";
import { AnimatedHero } from "@/components/sections/animated-hero";
import { Container } from "@/components/ui/container";
import { profileContent } from "@/content/profile";
import { siteConfig } from "@/data/site";

const primaryCtaClassName =
  "hero-primary-cta inline-flex min-h-12 items-center gap-3 rounded-full bg-foreground px-5 font-semibold transition-[background-color,color,transform] hover:-translate-y-0.5 hover:bg-primary motion-reduce:transform-none motion-reduce:transition-none";

const secondaryCtaClassName =
  "inline-flex min-h-12 items-center gap-3 rounded-full border border-foreground/35 px-5 font-semibold text-foreground transition-[background-color,border-color,transform] hover:-translate-y-0.5 hover:border-foreground hover:bg-foreground/[0.06] motion-reduce:transform-none motion-reduce:transition-none";

export function Hero() {
  const { hero } = siteConfig;

  return (
    <AnimatedHero>
      <Container className="relative z-10 grid min-h-[48rem] grid-rows-[auto_minmax(0,1fr)_auto] pt-28 pb-7 sm:min-h-[52rem] sm:pt-32 sm:pb-9 lg:min-h-[min(56rem,100svh)] lg:pt-32 lg:pb-10">
        <div
          className="flex items-center justify-between gap-6 text-xs font-semibold tracking-[0.12em] uppercase"
          data-hero-intro
        >
          <p className="shrink-0">{hero.introduction}</p>
          <p className="hidden shrink-0 text-right text-muted-foreground sm:block">
            Frontend · Full-stack · Cloud &amp; deployment
          </p>
        </div>

        <div className="hero-identity relative isolate min-h-0" data-hero-composition>
          <div
            className="absolute left-1/2 top-1/2 z-0 h-[70%] w-[62%] -translate-x-1/2 -translate-y-1/2 rounded-[45%_55%_48%_52%] bg-highlight sm:w-[46%] lg:h-[76%] lg:w-[34%]"
            data-hero-shape
            aria-hidden="true"
          />

          <h1
            id="hero-title"
            className="hero-identity-heading relative z-10 h-full font-semibold uppercase"
            aria-label={`${hero.name} ${hero.role.join(" ")}`}
          >
            <span className="hero-name block" aria-hidden="true" data-hero-name>
              {hero.name}
            </span>
            <span className="hero-role block" aria-hidden="true">
              <span className="block" data-hero-role-line>{hero.role[0]}</span>
              <span className="block text-right" data-hero-role-line>{hero.role[1]}</span>
            </span>
          </h1>

          <div className="hero-portrait absolute inset-x-0 bottom-0 z-20 mx-auto">
            <ProfileMedia media={profileContent.media} />
          </div>
        </div>

        <div className="relative z-30 grid gap-5 border-t border-foreground/20 pt-5 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-10">
          <div data-hero-support>
            <p className="font-semibold">{hero.positioning}</p>
            <p className="mt-1 max-w-[48ch] text-sm leading-relaxed text-muted-foreground sm:text-base">
              {hero.supportingText}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              className={primaryCtaClassName}
              href={hero.primaryCta.href}
              data-hero-cta
            >
              {hero.primaryCta.label}
              <ArrowDownRight className="size-4" aria-hidden="true" />
            </a>
            <a
              className={secondaryCtaClassName}
              href={hero.secondaryCta.href}
              data-hero-cta
            >
              {hero.secondaryCta.label}
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </Container>
    </AnimatedHero>
  );
}
