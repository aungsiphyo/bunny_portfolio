"use client";

import type { ReactNode } from "react";
import { useLayoutEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type AnimatedProjectPageProps = Readonly<{
  children: ReactNode;
}>;

export function AnimatedProjectPage({ children }: AnimatedProjectPageProps) {
  const rootRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useGSAP(
    () => {
      const media = gsap.matchMedia();

      media.add("(prefers-reduced-motion: no-preference)", () => {
        const candidates = gsap.utils.toArray<HTMLElement>(
          "main article h1, main article h2, main article figure, [data-project-reveal]",
        );
        const reveals = candidates.filter(
          (element) =>
            !element.querySelector("video") && !element.closest("[data-no-motion]"),
        );

        reveals.forEach((element) => {
          const isFigure = element.tagName === "FIGURE";

          gsap.from(element, {
            autoAlpha: 0,
            clearProps: "opacity,transform,visibility",
            duration: isFigure ? 0.8 : 0.65,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 94%",
              once: true,
            },
            y: isFigure ? 18 : 14,
          });
        });
      });

      return () => media.revert();
    },
    { scope: rootRef },
  );

  return <div ref={rootRef}>{children}</div>;
}
