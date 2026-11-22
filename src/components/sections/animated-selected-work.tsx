"use client";

import type { ReactNode } from "react";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type AnimatedSelectedWorkProps = Readonly<{
  children: ReactNode;
}>;

export function AnimatedSelectedWork({ children }: AnimatedSelectedWorkProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const media = gsap.matchMedia();

      media.add("(prefers-reduced-motion: no-preference)", () => {
        const reveals = gsap.utils.toArray<HTMLElement>("[data-work-reveal]");

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
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="work"
      className="scroll-mt-20 bg-background py-16 text-foreground sm:py-20 lg:py-24"
      aria-labelledby="work-title"
    >
      {children}
    </section>
  );
}
