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
        const portrait = hero.querySelector<HTMLElement>("[data-hero-portrait]");
        const shape = hero.querySelector<HTMLElement>("[data-hero-shape]");
        const splitTargets = gsap.utils.toArray<HTMLElement>(
          "[data-hero-name], [data-hero-role-line]",
        );

        gsap
          .timeline({ defaults: { ease: "power3.out" } })
          .from("[data-hero-intro]", { autoAlpha: 0, duration: 0.45, y: 12 })
          .from(shape, { duration: 0.7, scale: 0.88 }, 0.1)
          .from(
            portrait,
            { autoAlpha: 0, clipPath: "inset(100% 0 0 0)", duration: 0.9, y: 24 },
            0.28,
          )
          .from("[data-hero-support]", { autoAlpha: 0, duration: 0.45, y: 12 }, 0.85)
          .from(
            "[data-hero-cta]",
            { autoAlpha: 0, duration: 0.4, stagger: 0.07, y: 10 },
            0.95,
          );

        splitTargets.forEach((target, index) => {
          SplitText.create(target, {
            type: "lines",
            mask: "lines",
            tag: "span",
            aria: "none",
            autoSplit: true,
            linesClass: "hero-split-line",
            onSplit(split) {
              return gsap.from(split.lines, {
                autoAlpha: 0,
                delay: 0.12 + index * 0.1,
                duration: 0.75,
                ease: "power4.out",
                stagger: 0.08,
                yPercent: 110,
              });
            },
          });
        });

        if (portrait) {
          gsap.to(portrait, {
            ease: "none",
            yPercent: 4,
            scrollTrigger: {
              trigger: hero,
              start: "top top",
              end: "bottom top",
              scrub: 0.5,
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
      className="relative isolate overflow-hidden bg-background text-foreground"
      aria-labelledby="hero-title"
      data-light-surface
    >
      {children}
    </section>
  );
}
