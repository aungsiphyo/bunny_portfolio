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
      const typewriter = hero.querySelector<HTMLElement>("[data-hero-typewriter]");
      const typewriterCursor = hero.querySelector<HTMLElement>(
        ".hero-typewriter-cursor",
      );
      const fullName = typewriter?.textContent ?? "";

      media.add("(prefers-reduced-motion: no-preference)", () => {
        const portrait = hero.querySelector<HTMLElement>("[data-hero-portrait]");
        const shape = hero.querySelector<HTMLElement>("[data-hero-shape]");
        const splitTargets = gsap.utils.toArray<HTMLElement>(
          "[data-hero-role-line]",
        );

        gsap
          .timeline({ defaults: { ease: "power3.out" } })
          .from("[data-hero-intro]", { autoAlpha: 0, duration: 0.4, y: 10 })
          .from(shape, { duration: 0.75, rotation: -3, scale: 0.9 }, 0.08)
          .from(
            portrait,
            { autoAlpha: 0, duration: 0.75, scale: 0.92, y: 18 },
            0.3,
          )
          .from("[data-hero-support]", { autoAlpha: 0, duration: 0.45, y: 10 }, 0.82)
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
                delay: 0.1 + index * 0.08,
                duration: 0.65,
                ease: "power3.out",
                stagger: 0.06,
                yPercent: 55,
              });
            },
          });
        });

        media.add("(min-width: 640px)", () => {
          if (portrait) {
            gsap.to(portrait, {
              ease: "none",
              yPercent: 2,
              scrollTrigger: {
                trigger: hero,
                start: "top top",
                end: "bottom top",
                scrub: 0.6,
              },
            });
          }
        });

        if (typewriter) {
          const typeState = { characters: 0 };
          const updateTypewriter = () => {
            typewriter.textContent = fullName.slice(
              0,
              Math.round(typeState.characters),
            );
          };

          typewriter.textContent = "";

          const typewriterTimeline = gsap.timeline({ repeat: -1 });
          typewriterTimeline
            .to(typeState, {
              characters: fullName.length,
              duration: fullName.length * 0.105,
              ease: `steps(${fullName.length})`,
              onUpdate: updateTypewriter,
            })
            .set(typewriterCursor, { autoAlpha: 0 })
            .to({}, { duration: 5 })
            .set(typewriterCursor, { autoAlpha: 1 })
            .to(typeState, {
              characters: 0,
              duration: fullName.length * 0.065,
              ease: `steps(${fullName.length})`,
              onUpdate: updateTypewriter,
            })
            .to({}, { duration: 0.45 });
        }
      });

      return () => {
        media.revert();

        if (typewriter) {
          typewriter.textContent = fullName;
        }
      };
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
