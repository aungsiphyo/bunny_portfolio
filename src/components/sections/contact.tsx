import { ArrowUpRight, Mail } from "lucide-react";

import { Container } from "@/components/ui/container";
import { siteConfig } from "@/data/site";

export function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-20 bg-background pb-8 text-foreground sm:pb-10"
      aria-labelledby="contact-title"
    >
      <Container>
        <div className="rounded-[1.75rem] bg-highlight px-6 py-12 sm:px-10 sm:py-16 lg:px-14 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <header className="lg:col-span-8" data-section-reveal>
              <p className="text-sm font-semibold text-foreground/75">Get in touch</p>
              <h2
                id="contact-title"
                className="mt-3 max-w-[12ch] text-heading font-semibold text-balance"
              >
                Have something in mind? Let&apos;s build it.
              </h2>
              <a
                className="mt-7 inline-flex max-w-full items-center gap-3 text-[clamp(1.1rem,2.5vw,1.65rem)] font-semibold underline decoration-foreground/30 underline-offset-8 transition-colors hover:text-primary motion-reduce:transition-none"
                href={`mailto:${siteConfig.email}`}
              >
                <Mail className="size-5 shrink-0" aria-hidden="true" />
                <span className="break-all">{siteConfig.email}</span>
              </a>
            </header>

            <nav className="lg:col-span-3 lg:col-start-10" aria-label="Social links" data-section-reveal>
              <ul className="grid border-t border-foreground/20">
                {siteConfig.socialLinks.map((link) => (
                  <li className="border-b border-foreground/20" key={link.href}>
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
            </nav>
          </div>
        </div>
      </Container>
    </section>
  );
}
