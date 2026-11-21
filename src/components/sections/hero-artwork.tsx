export function HeroArtwork() {
  return (
    <div
      className="pointer-events-none absolute top-[10%] -right-[42%] h-[74%] w-[120%] opacity-70 sm:-right-[28%] sm:h-[80%] lg:top-[3%] lg:-right-[8%] lg:h-[94%] lg:w-[74%]"
      data-hero-art
      aria-hidden="true"
    >
      <svg
        className="h-full w-full"
        viewBox="0 0 1000 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="hero-blush-bloom" cx="0" cy="0" r="1">
            <stop stopColor="var(--hero-accent)" stopOpacity="0.78" />
            <stop
              offset="0.48"
              stopColor="var(--decorative-rose)"
              stopOpacity="0.34"
            />
            <stop
              offset="1"
              stopColor="var(--hero-background)"
              stopOpacity="0"
            />
          </radialGradient>
          <linearGradient
            id="hero-olive-ribbon"
            x1="184"
            y1="720"
            x2="847"
            y2="149"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="var(--highlight)" stopOpacity="0.08" />
            <stop offset="0.52" stopColor="var(--highlight)" stopOpacity="0.6" />
            <stop offset="1" stopColor="var(--surface)" stopOpacity="0.12" />
          </linearGradient>
          <filter
            id="hero-bloom-blur"
            x="-45%"
            y="-45%"
            width="190%"
            height="190%"
          >
            <feGaussianBlur stdDeviation="48" />
          </filter>
        </defs>

        <ellipse
          cx="630"
          cy="410"
          rx="330"
          ry="285"
          fill="url(#hero-blush-bloom)"
          filter="url(#hero-bloom-blur)"
        />
        <path
          d="M151 711C273 502 360 292 555 190C681 124 840 159 870 285C898 402 798 506 687 538C564 575 504 710 371 753C286 781 202 767 151 711Z"
          stroke="url(#hero-olive-ribbon)"
          strokeWidth="2"
        />
        <path
          d="M220 690C334 514 405 365 574 279C680 225 790 250 813 344C836 437 757 509 662 538C549 573 499 668 390 704C322 726 260 719 220 690Z"
          stroke="var(--hero-accent)"
          strokeOpacity="0.28"
        />
        <circle
          cx="802"
          cy="240"
          r="13"
          fill="var(--highlight)"
          fillOpacity="0.82"
        />
        <circle
          cx="239"
          cy="666"
          r="6"
          fill="var(--hero-accent)"
          fillOpacity="0.9"
        />
      </svg>
    </div>
  );
}
