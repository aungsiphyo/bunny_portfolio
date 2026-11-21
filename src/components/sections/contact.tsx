import { ArrowUpRight, Mail } from "lucide-react";

import { Container } from "@/components/ui/container";
import { siteConfig } from "@/data/site";

export function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-20 bg-surface py-20 text-surface-foreground sm:py-28 lg:py-36"
      aria-labelledby="contact-title"
      data-light-surface
    >
      <Container>
        <header
          className="grid gap-5 sm:grid-cols-[5rem_minmax(0,1fr)] sm:items-start"
          data-section-reveal
        >
          <p
            className="pt-1 font-mono text-label font-semibold text-muted-foreground"
            aria-hidden="true"
          >
            05
          </p>
          <div className="min-w-0">
            <p className="font-mono text-xs font-semibold tracking-[0.1em] text-muted-foreground uppercase">
              Get in touch
            </p>
            <h2
              id="contact-title"
              className="mt-5 max-w-[12ch] text-[clamp(3.45rem,12vw,9rem)] leading-[0.86] font-semibold tracking-[-0.065em] text-balance"
            >
              Start a conversation.
            </h2>
          </div>
        </header>

        <div className="mt-16 grid gap-12 sm:mt-20 lg:mt-28 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8" data-section-reveal>
            <p className="max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
              For freelance work, engineering opportunities, or collaboration,
              email me directly.
            </p>
            <a
              className="group mt-8 inline-flex max-w-full items-center gap-3 border-b-2 border-foreground pb-2 text-[clamp(1.55rem,4.4vw,4.75rem)] leading-tight font-semibold tracking-[-0.045em] transition-colors hover:border-primary hover:text-primary motion-reduce:transition-none"
              href={`mailto:${siteConfig.email}`}
            >
              <Mail className="size-[0.8em] shrink-0" aria-hidden="true" />
              <span className="break-all">{siteConfig.email}</span>
            </a>
          </div>

          <div className="lg:col-span-3 lg:col-start-10" data-section-reveal>
            <p className="font-mono text-xs font-semibold tracking-[0.1em] text-muted-foreground uppercase">
              Elsewhere
            </p>
            <ul className="mt-5 grid border-t border-foreground/25">
              {siteConfig.socialLinks.map((link) => (
                <li className="border-b border-foreground/25" key={link.href}>
                  <a
                    className="flex min-h-14 items-center justify-between gap-4 py-3 font-semibold transition-colors hover:text-primary motion-reduce:transition-none"
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="size-5" aria-hidden="true" />
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
