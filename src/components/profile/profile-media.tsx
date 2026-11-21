import Image from "next/image";

import type { ProfileMedia as ProfileMediaData } from "@/types/content";

type ProfileMediaProps = Readonly<{
  media: ProfileMediaData;
}>;

export function ProfileMedia({ media }: ProfileMediaProps) {
  if (media.kind === "image") {
    return (
      <div className="overflow-hidden border border-border bg-highlight">
        <Image
          className="h-auto w-full"
          src={media.src}
          alt={media.alt}
          width={media.width}
          height={media.height}
          sizes="(min-width: 1024px) 38vw, (min-width: 640px) calc(100vw - 64px), calc(100vw - 40px)"
        />
      </div>
    );
  }

  return (
    <div
      className="relative isolate aspect-[4/5] overflow-hidden border border-border bg-highlight text-highlight-foreground"
      aria-hidden="true"
    >
      <div className="absolute top-[8%] right-[8%] size-[46%] rounded-full border border-foreground/25" />
      <div className="absolute top-[15%] right-[15%] size-[32%] rounded-full border border-foreground/20" />
      <div className="absolute top-[26%] right-[26%] size-3 rounded-full bg-decorative-rose" />

      <div className="absolute inset-x-[8%] bottom-[8%] border-t border-foreground/25 pt-5">
        <p className="text-[clamp(6rem,24vw,15rem)] leading-[0.72] font-semibold tracking-[-0.09em] text-decorative-rose">
          B.
        </p>
        <div className="mt-8 flex items-center justify-end gap-5 font-mono text-xs font-semibold tracking-[0.1em] uppercase">
          <span>Ko Si</span>
        </div>
      </div>
    </div>
  );
}
