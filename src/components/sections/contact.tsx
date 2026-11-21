import { ArrowUpRight, Mail } from "lucide-react";

import { Container } from "@/components/ui/container";
import { siteConfig } from "@/data/site";

export function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-20 border-t border-border bg-background py-14 text-foreground sm:py-20 lg:py-24"
      aria-labelledby="contact-title"
    >
      <Container>
        <header data-section-reveal>
          <p className="font-mono text-xs font-semibold tracking-[0.1em] text-muted-foreground uppercase">
            Get in touch
          </p>
          <h2
            id="contact-title"
            className="mt-3 max-w-[14ch] text-[clamp(2rem,5vw,3.5rem)] leading-[0.92] font-semibold tracking-[-0.04em] text-balance"
          >
            Start a conversation.
          </h2>
        </header>

        <div className="mt-10 grid gap-12 sm:mt-14 lg:mt-16 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8" data-section-reveal>
            <p className="max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
              For freelance work, engineering opportunities, or collaboration,
              email me directly.
            </p>
            <a
              className="group mt-8 inline-flex max-w-full items-center gap-3 border-b-2 border-decorative-rose pb-2 text-[clamp(1.25rem,3vw,2.25rem)] leading-tight font-semibold tracking-[-0.045em] transition-colors hover:border-primary hover:text-primary motion-reduce:transition-none"
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
            <ul className="mt-5 grid border-t border-border">
              {siteConfig.socialLinks.map((link) => (
                <li className="border-b border-border" key={link.href}>
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
