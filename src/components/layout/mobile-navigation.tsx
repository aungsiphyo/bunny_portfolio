"use client";

import { useEffect, useRef, useState } from "react";
import { Download, Menu, X } from "lucide-react";

import type { NavigationItem, PublicDocumentLink } from "@/types/content";

type MobileNavigationProps = Readonly<{
  items: readonly NavigationItem[];
  resume: PublicDocumentLink;
}>;

export function MobileNavigation({ items, resume }: MobileNavigationProps) {
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
        className="flex min-h-11 min-w-11 items-center justify-center rounded-full border border-foreground/25 bg-background text-foreground transition-colors hover:border-primary hover:text-primary motion-reduce:transition-none"
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
          className="fixed inset-x-5 top-[5rem] max-h-[calc(100dvh-6.25rem)] overflow-y-auto rounded-2xl border border-foreground/15 bg-background p-3 text-foreground shadow-2xl shadow-foreground/15"
          data-light-surface
        >
          <nav aria-label="Mobile primary navigation">
            <ul className="divide-y divide-foreground/12">
              {items.map((item, index) => (
                <li key={item.href}>
                  <a
                    className="flex min-h-16 items-center justify-between gap-6 rounded-xl px-3 font-semibold tracking-[-0.03em] transition-colors hover:bg-surface/45 motion-reduce:transition-none"
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
              <li>
                <a
                  className="flex min-h-16 items-center justify-between gap-6 rounded-xl px-3 font-semibold tracking-[-0.03em] transition-colors hover:bg-surface/45 motion-reduce:transition-none"
                  href={resume.href}
                  download="Aung-Si-Phyo-Resume.pdf"
                  onClick={closeMenu}
                >
                  <span>{resume.label}</span>
                  <Download className="size-4 text-muted-foreground" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
