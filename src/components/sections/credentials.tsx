import { ArrowUpRight, FileCheck2 } from "lucide-react";

import { Container } from "@/components/ui/container";
import { selectedCredentials } from "@/content/credentials";

export function Credentials() {
  return (
    <section
      id="credentials"
      className="bg-background pb-16 text-foreground sm:pb-20 lg:pb-24"
      aria-labelledby="credentials-title"
    >
      <Container>
        <div className="grid gap-9 border-t border-border pt-10 lg:grid-cols-12 lg:gap-12">
          <header className="lg:col-span-4" data-section-reveal>
            <p className="text-sm font-medium text-muted-foreground">
              Professional development
            </p>
            <h2 id="credentials-title" className="mt-2 text-heading font-semibold">
              Selected credentials
            </h2>
          </header>

          <div className="grid border-t border-border lg:col-span-8 lg:border-t-0">
            {selectedCredentials.map((credential) => (
              <article
                className="grid gap-4 border-b border-border py-6 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end"
                data-section-reveal
                key={credential.id}
              >
                <div>
                  <p className="text-sm text-muted-foreground">{credential.issuer}</p>
                  <h3 className="mt-1 max-w-[38ch] text-xl font-semibold tracking-[-0.025em]">
                    {credential.title}
                  </h3>
                  <dl className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-sm text-muted-foreground">
                    <div className="flex gap-1.5">
                      <dt>Issued</dt>
                      <dd className="font-medium text-foreground">{credential.issuedAt}</dd>
                    </div>
                    <div className="flex gap-1.5">
                      <dt>Credential</dt>
                      <dd className="font-mono text-xs text-foreground">
                        {credential.credentialId}
                      </dd>
                    </div>
                  </dl>
                </div>

                <a
                  className="inline-flex min-h-11 w-fit items-center gap-2 font-semibold underline decoration-border underline-offset-4 transition-colors hover:text-primary motion-reduce:transition-none"
                  href={credential.documentUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View ${credential.title} certificate`}
                >
                  <FileCheck2 className="size-4" aria-hidden="true" />
                  View certificate
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
