"use client";

import type { ReactNode } from "react";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

type AnimatedHeroProps = Readonly<{
  children: ReactNode;
}>;

export function AnimatedHero({ children }: AnimatedHeroProps) {
  const heroRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const hero = heroRef.current;

      if (!hero) {
        return;
      }

      const media = gsap.matchMedia();

      media.add("(prefers-reduced-motion: no-preference)", () => {
        const primaryLine = hero.querySelector<HTMLElement>(
          '[data-hero-line="primary"]',
        );
        const accentLine = hero.querySelector<HTMLElement>(
          '[data-hero-line="accent"]',
        );
        const artwork = hero.querySelector<HTMLElement>("[data-hero-art]");

        const intro = gsap.timeline({
          defaults: { ease: "power3.out" },
        });

        intro
          .from(
            "[data-hero-eyebrow]",
            { duration: 0.45, opacity: 0, y: 14 },
            0.05,
          )
          .from(artwork, { duration: 1.1, opacity: 0 }, 0.1)
          .from(
            "[data-hero-support]",
            { duration: 0.55, opacity: 0, y: 18 },
            0.92,
          )
          .from(
            "[data-hero-cta]",
            {
              clearProps: "opacity,transform",
              duration: 0.52,
              opacity: 0,
              stagger: 0.08,
              y: 16,
            },
            1.02,
          )
          .from(
            "[data-hero-scroll]",
            { duration: 0.45, opacity: 0, y: 10 },
            1.22,
          );

        if (primaryLine) {
          SplitText.create(primaryLine, {
            type: "lines",
            mask: "lines",
            tag: "span",
            aria: "none",
            autoSplit: true,
            linesClass: "hero-split-line",
            onSplit(split) {
              return gsap.from(split.lines, {
                autoAlpha: 0,
                delay: 0.12,
                duration: 0.78,
                ease: "power4.out",
                stagger: 0.08,
                yPercent: 115,
              });
            },
          });
        }

        if (accentLine) {
          SplitText.create(accentLine, {
            type: "lines",
            mask: "lines",
            tag: "span",
            aria: "none",
            autoSplit: true,
            linesClass: "hero-split-line",
            onSplit(split) {
              return gsap.from(split.lines, {
                autoAlpha: 0,
                delay: 0.36,
                duration: 0.92,
                ease: "expo.out",
                rotate: 1.25,
                scaleY: 0.82,
                stagger: 0.08,
                transformOrigin: "50% 100%",
                yPercent: 125,
              });
            },
          });
        }

        if (artwork) {
          gsap.to(artwork, {
            ease: "none",
            yPercent: 10,
            scrollTrigger: {
              trigger: hero,
              start: "top top",
              end: "bottom top",
              scrub: 0.6,
            },
          });
        }
      });

      return () => media.revert();
    },
    { scope: heroRef },
  );

  return (
    <section
      ref={heroRef}
      className="relative isolate min-h-svh overflow-hidden bg-hero-background text-hero-foreground"
      aria-labelledby="hero-title"
      data-dark-surface
    >
      {children}
    </section>
  );
}
