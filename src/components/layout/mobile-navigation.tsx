"use client";

import { useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";

import type { NavigationItem } from "@/types/content";

type MobileNavigationProps = Readonly<{
  items: readonly NavigationItem[];
}>;

export function MobileNavigation({ items }: MobileNavigationProps) {
  const detailsRef = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      const details = detailsRef.current;

      if (event.key !== "Escape" || !details?.open) {
        return;
      }

      details.open = false;
      details.querySelector("summary")?.focus();
    }

    document.addEventListener("keydown", handleEscape);

    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  function closeMenu() {
    if (detailsRef.current) {
      detailsRef.current.open = false;
    }
  }

  return (
    <details ref={detailsRef} className="group md:hidden">
      <summary className="flex min-h-11 min-w-11 cursor-pointer list-none items-center justify-center rounded-full border border-background/25 text-background transition-colors hover:border-surface hover:text-surface [&::-webkit-details-marker]:hidden">
        <span className="sr-only">Navigation menu</span>
        <Menu className="size-5 group-open:hidden" aria-hidden="true" />
        <X className="hidden size-5 group-open:block" aria-hidden="true" />
      </summary>

      <div
        className="fixed inset-x-5 top-[5rem] max-h-[calc(100dvh-6.25rem)] overflow-y-auto border border-foreground/15 bg-surface p-3 text-surface-foreground shadow-2xl shadow-foreground/20"
        data-light-surface
      >
        <nav aria-label="Mobile primary navigation">
          <ul className="divide-y divide-foreground/15">
            {items.map((item, index) => (
              <li key={item.href}>
                <a
                  className="flex min-h-16 items-center justify-between gap-6 px-3 font-semibold tracking-[-0.03em]"
                  href={item.href}
                  onClick={closeMenu}
                >
                  <span>{item.label}</span>
                  <span
                    className="font-mono text-xs tracking-[0.08em] text-muted-foreground"
                    aria-hidden="true"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </details>
  );
}
