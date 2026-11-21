"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

import type { NavigationItem } from "@/types/content";

type MobileNavigationProps = Readonly<{
  items: readonly NavigationItem[];
}>;

export function MobileNavigation({ items }: MobileNavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key !== "Escape" || !isOpen) {
        return;
      }

      setIsOpen(false);
      buttonRef.current?.focus();
    }

    document.addEventListener("keydown", handleEscape);

    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen]);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <div className="md:hidden">
      <button
        ref={buttonRef}
        type="button"
        className="flex min-h-11 min-w-11 items-center justify-center rounded-full border border-background/45 bg-background/[0.06] text-background transition-colors hover:border-surface hover:text-surface motion-reduce:transition-none"
        aria-controls="mobile-navigation-panel"
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        onClick={() => setIsOpen((current) => !current)}
      >
        {isOpen ? (
          <X className="size-5" aria-hidden="true" />
        ) : (
          <Menu className="size-5" aria-hidden="true" />
        )}
      </button>

      {isOpen ? (
        <div
          id="mobile-navigation-panel"
          className="fixed inset-x-5 top-[5rem] max-h-[calc(100dvh-6.25rem)] overflow-y-auto border border-foreground/25 bg-surface p-3 text-surface-foreground shadow-2xl shadow-foreground/20"
          data-light-surface
        >
          <nav aria-label="Mobile primary navigation">
            <ul className="divide-y divide-foreground/20">
              {items.map((item, index) => (
                <li key={item.href}>
                  <a
                    className="flex min-h-16 items-center justify-between gap-6 px-3 font-semibold tracking-[-0.03em] transition-colors hover:bg-foreground/[0.06] motion-reduce:transition-none"
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
      ) : null}
    </div>
  );
}
