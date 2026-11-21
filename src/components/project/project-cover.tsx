import Image from "next/image";

import type { ProjectCover as ProjectCoverData } from "@/types/content";

type ProjectCoverProps = Readonly<{
  cover: ProjectCoverData;
  format?: "card" | "case-study";
  preload?: boolean;
}>;

const formatClassNames = {
  card: "aspect-[4/3] sm:aspect-[16/10]",
  "case-study": "aspect-[4/3] sm:aspect-[16/9]",
} as const;

export function ProjectCover({
  cover,
  format = "card",
  preload = false,
}: ProjectCoverProps) {
  const frameClassName = `relative isolate overflow-hidden ${formatClassNames[format]}`;

  if (cover.kind === "image") {
    return (
      <div className="relative isolate overflow-hidden">
        <Image
          className="h-auto w-full"
          src={cover.src}
          alt={cover.alt}
          width={cover.width}
          height={cover.height}
          sizes={
            format === "case-study"
              ? "(min-width: 1440px) 1344px, (min-width: 768px) calc(100vw - 64px), calc(100vw - 40px)"
              : "(min-width: 1024px) 55vw, (min-width: 640px) calc(100vw - 64px), calc(100vw - 40px)"
          }
          preload={preload}
        />
      </div>
    );
  }

  return (
    <div
      className={`${frameClassName} ${
        cover.variant === "yellow"
          ? "project-cover--uni-yatwon"
          : "project-cover--prime-city"
      }`}
      aria-hidden="true"
    >
      <div
        className="absolute inset-0 transition-transform duration-700 ease-out motion-reduce:transform-none motion-reduce:transition-none group-hover:scale-[1.015]"
        data-project-art
      >
        {cover.variant === "yellow" ? <UniYatwonArtwork /> : <PrimeCityArtwork />}
      </div>
    </div>
  );
}

function UniYatwonArtwork() {
  return (
    <svg
      className="h-full w-full"
      viewBox="0 0 960 720"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      focusable="false"
    >
      <g stroke="currentColor" strokeWidth="1" opacity="0.12">
        <path d="M0 120H960M0 600H960" />
        <path d="M120 0V720M840 0V720" />
      </g>

      <circle cx="782" cy="98" r="210" fill="currentColor" opacity="0.07" />
      <circle cx="782" cy="98" r="126" stroke="currentColor" opacity="0.3" />
      <circle cx="782" cy="98" r="12" fill="currentColor" />

      <text
        x="82"
        y="105"
        fill="currentColor"
        fontFamily="var(--font-geist-mono), monospace"
        fontSize="18"
        fontWeight="700"
        letterSpacing="5"
      >
        UNI / YATWON
      </text>

      <path d="M82 151H366" stroke="currentColor" strokeWidth="3" opacity="0.55" />
      <path d="M82 174H262" stroke="currentColor" strokeWidth="3" opacity="0.3" />

      <path
        d="M101 289V449C101 544 163 603 258 603C353 603 415 544 415 449V289"
        stroke="currentColor"
        strokeWidth="66"
      />
      <path
        d="M485 290L589 437L694 290M589 437V603"
        stroke="currentColor"
        strokeWidth="66"
        strokeLinejoin="bevel"
      />

      <path
        d="M258 529C362 447 440 449 541 503C626 548 715 528 848 408"
        stroke="var(--project-accent)"
        strokeWidth="10"
      />
      <circle cx="258" cy="529" r="22" fill="var(--project-accent)" />
      <circle cx="541" cy="503" r="22" fill="var(--project-accent)" />
      <circle cx="848" cy="408" r="22" fill="var(--project-accent)" />
      <circle cx="258" cy="529" r="40" stroke="currentColor" strokeWidth="3" opacity="0.32" />
      <circle cx="541" cy="503" r="40" stroke="currentColor" strokeWidth="3" opacity="0.32" />
      <circle cx="848" cy="408" r="40" stroke="currentColor" strokeWidth="3" opacity="0.32" />

      <path d="M80 650H880" stroke="currentColor" strokeWidth="2" opacity="0.32" />
      <circle cx="80" cy="650" r="7" fill="currentColor" />
      <circle cx="880" cy="650" r="7" fill="currentColor" />
    </svg>
  );
}

function PrimeCityArtwork() {
  return (
    <svg
      className="h-full w-full"
      viewBox="0 0 960 720"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      focusable="false"
    >
      <g stroke="currentColor" opacity="0.11">
        <path d="M0 120H960M0 240H960M0 360H960M0 480H960M0 600H960" />
        <path d="M120 0V720M240 0V720M360 0V720M480 0V720M600 0V720M720 0V720M840 0V720" />
      </g>

      <text
        x="72"
        y="94"
        fill="currentColor"
        fontFamily="var(--font-geist-mono), monospace"
        fontSize="18"
        fontWeight="700"
        letterSpacing="5"
      >
        PRIME / CITY
      </text>
      <path d="M72 126H360" stroke="currentColor" strokeWidth="3" opacity="0.55" />
      <path d="M72 150H254" stroke="currentColor" strokeWidth="3" opacity="0.28" />

      <path
        d="M72 572H239V430H392V238H566V350H756V572H887"
        stroke="currentColor"
        strokeWidth="18"
        strokeLinejoin="miter"
      />
      <path
        d="M155 572V493H286V572M461 572V452H650V572"
        stroke="currentColor"
        strokeWidth="6"
        opacity="0.64"
      />
      <circle cx="72" cy="572" r="20" fill="currentColor" />
      <circle cx="392" cy="238" r="20" fill="currentColor" />
      <circle cx="756" cy="572" r="20" fill="currentColor" />
      <circle cx="887" cy="572" r="9" fill="currentColor" opacity="0.62" />

      <path
        d="M684 176C736 124 821 124 873 176M712 205C749 168 808 168 845 205M741 234C762 213 795 213 816 234"
        stroke="currentColor"
        strokeWidth="8"
        strokeLinecap="round"
      />
      <rect x="760" y="256" width="36" height="36" fill="currentColor" />

      <rect x="72" y="212" width="122" height="122" stroke="currentColor" strokeWidth="5" />
      <path d="M102 273H164M133 242V304" stroke="currentColor" strokeWidth="8" />

      <path d="M72 648H888" stroke="currentColor" strokeWidth="2" opacity="0.34" />
      <path d="M72 632V664M888 632V664" stroke="currentColor" strokeWidth="2" />
      <g fill="currentColor">
        <circle cx="475" cy="648" r="6" opacity="0.4" />
        <circle cx="497" cy="648" r="6" opacity="0.68" />
        <circle cx="519" cy="648" r="6" />
      </g>
    </svg>
  );
}
