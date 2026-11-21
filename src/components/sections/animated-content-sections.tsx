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
            clearProps: "opacity,transform",
            duration: 0.64,
            ease: "power3.out",
            opacity: 0,
            scrollTrigger: {
              trigger: element,
              start: "top 88%",
              once: true,
            },
            y: 22,
          });
        });
      });

      return () => media.revert();
    },
    { scope: rootRef },
  );

  return <div ref={rootRef}>{children}</div>;
}
