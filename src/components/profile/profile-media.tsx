import Image from "next/image";

import type { ProfileMedia as ProfileMediaData } from "@/types/content";

type ProfileMediaProps = Readonly<{
  media: ProfileMediaData;
}>;

export function ProfileMedia({ media }: ProfileMediaProps) {
  if (media.kind === "image") {
    return (
      <div
        className="relative h-full w-full"
        data-hero-portrait
      >
        <Image
          className="hero-portrait-image object-contain object-bottom"
          src={media.src}
          alt={media.alt}
          fill
          priority
          sizes="(min-width: 1024px) 42vw, (min-width: 640px) 54vw, 88vw"
        />
      </div>
    );
  }

  return (
    <div
      className="relative h-full w-full overflow-hidden"
      data-hero-portrait
      aria-hidden="true"
    >
      <div className="absolute inset-x-[12%] bottom-0 top-[10%] rounded-t-[12rem] bg-highlight" />
      <p className="absolute inset-x-0 bottom-[12%] text-center text-[clamp(5rem,18vw,11rem)] leading-none font-semibold tracking-[-0.08em] text-foreground/20">
        B.
      </p>
    </div>
  );
}
