"use client";

import type { ReactNode } from "react";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type AnimatedContentSectionsProps = Readonly<{
  children: ReactNode;
}>;

export function AnimatedContentSections({
  children,
}: AnimatedContentSectionsProps) {
  const rootRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const media = gsap.matchMedia();

      media.add("(prefers-reduced-motion: no-preference)", () => {
        const reveals = gsap.utils.toArray<HTMLElement>(
          "[data-section-reveal]",
        );

        reveals.forEach((element) => {
          gsap.from(element, {
            clearProps: "transform",
            duration: 0.48,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 96%",
              once: true,
            },
            y: 10,
          });
        });
      });

      return () => media.revert();
    },
    { scope: rootRef },
  );

  return <div ref={rootRef}>{children}</div>;
}
