"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import Link from "next/link";

gsap.registerPlugin(useGSAP, SplitText);

export function AnimatedWordmark() {
  const wordmarkRef = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const wordmark = wordmarkRef.current;

      if (!wordmark) {
        return;
      }

      const media = gsap.matchMedia();

      media.add("(prefers-reduced-motion: no-preference)", () => {
        SplitText.create(wordmark, {
          type: "chars",
          tag: "span",
          aria: "hidden",
          charsClass: "inline-block",
          onSplit(split) {
            return gsap.from(split.chars, {
              autoAlpha: 0,
              duration: 0.48,
              ease: "power3.out",
              stagger: 0.045,
              yPercent: 70,
            });
          },
        });
      });

      return () => media.revert();
    },
    { scope: wordmarkRef },
  );

  return (
    <Link
      className="relative z-10 inline-flex min-h-11 items-center text-xl font-semibold tracking-[-0.06em] text-foreground transition-colors hover:text-primary"
      href="/"
      aria-label="Ko Si, home"
    >
      <span ref={wordmarkRef} aria-hidden="true">
        kosi.
      </span>
    </Link>
  );
}
