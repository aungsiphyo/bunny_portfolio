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
      <circle cx="751" cy="116" r="188" fill="currentColor" opacity="0.08" />
      <circle cx="751" cy="116" r="112" stroke="currentColor" opacity="0.34" />
      <circle cx="751" cy="116" r="13" fill="currentColor" />
      <path
        d="M-46 629C136 470 295 409 459 426C618 443 758 377 1006 166"
        stroke="currentColor"
        strokeWidth="2"
        opacity="0.42"
      />
      <path
        d="M-29 671C186 521 326 486 498 496C661 505 811 418 994 257"
        stroke="currentColor"
        strokeWidth="2"
        opacity="0.22"
      />
      <path
        d="M174 160H470V508H174V160Z"
        fill="currentColor"
        opacity="0.94"
      />
      <path d="M215 211H430" stroke="var(--project-accent)" strokeWidth="9" />
      <path
        d="M215 258H380"
        stroke="var(--project-accent)"
        strokeWidth="9"
        opacity="0.72"
      />
      <path
        d="M215 322C256 286 305 289 343 322C382 355 424 352 462 313"
        stroke="var(--project-accent)"
        strokeWidth="12"
      />
      <circle cx="225" cy="435" r="32" fill="var(--project-accent)" />
      <circle cx="311" cy="435" r="32" fill="var(--project-accent)" opacity="0.68" />
      <circle cx="397" cy="435" r="32" fill="var(--project-accent)" opacity="0.38" />
      <path d="M470 224L621 293V582L470 508V224Z" fill="currentColor" opacity="0.72" />
      <path
        d="M510 294L581 327"
        stroke="var(--project-accent)"
        strokeWidth="8"
        opacity="0.8"
      />
      <path
        d="M510 342L581 375"
        stroke="var(--project-accent)"
        strokeWidth="8"
        opacity="0.52"
      />
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
      <g stroke="currentColor" opacity="0.13">
        <path d="M0 120H960M0 240H960M0 360H960M0 480H960M0 600H960" />
        <path d="M120 0V720M240 0V720M360 0V720M480 0V720M600 0V720M720 0V720M840 0V720" />
      </g>
      <path
        d="M95 553H273V387H417V211H593V345H795V553H865"
        stroke="currentColor"
        strokeWidth="16"
      />
      <path
        d="M184 553V463H321V553M496 553V431H680V553"
        stroke="currentColor"
        strokeWidth="5"
        opacity="0.72"
      />
      <circle cx="95" cy="553" r="19" fill="currentColor" />
      <circle cx="417" cy="211" r="19" fill="currentColor" />
      <circle cx="795" cy="553" r="19" fill="currentColor" />
      <circle cx="865" cy="553" r="9" fill="currentColor" opacity="0.62" />
      <path
        d="M697 148C748 97 832 97 883 148M724 176C760 140 820 140 856 176M753 205C773 185 807 185 827 205"
        stroke="currentColor"
        strokeWidth="8"
        strokeLinecap="round"
      />
      <rect x="773" y="227" width="33" height="33" fill="currentColor" />
      <path d="M118 125H392" stroke="currentColor" strokeWidth="3" opacity="0.5" />
      <path d="M118 157H304" stroke="currentColor" strokeWidth="3" opacity="0.3" />
      <rect x="118" y="195" width="112" height="112" stroke="currentColor" strokeWidth="5" />
      <path d="M148 251H200M174 225V277" stroke="currentColor" strokeWidth="8" />
    </svg>
  );
}
