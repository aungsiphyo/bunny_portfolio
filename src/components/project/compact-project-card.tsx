import type { CompactProject } from "@/types/content";

type CompactProjectCardProps = Readonly<{
  index: number;
  project: CompactProject;
}>;

export function CompactProjectCard({
  index,
  project,
}: CompactProjectCardProps) {
  const isMyanmarTitle = project.slug === "saik-pyo-mate-swe";

  return (
    <article
      className="flex min-h-full flex-col border border-border bg-background p-5 sm:p-7 lg:p-8"
      data-work-reveal
    >
      <div className="flex items-start justify-between gap-6 font-mono text-xs font-semibold tracking-[0.08em] text-muted-foreground uppercase">
        <p>{project.context}</p>
        <p aria-hidden="true">0{index + 3}</p>
      </div>

      <h4
        className={`mt-12 max-w-[14ch] text-[clamp(2.25rem,5vw,4.75rem)] leading-[0.94] font-semibold ${
          isMyanmarTitle ? "tracking-normal" : "tracking-[-0.05em]"
        }`}
        lang={isMyanmarTitle ? "my" : undefined}
      >
        {project.title}
      </h4>

      <div className="mt-12 border-t border-border pt-5 sm:mt-16">
        <p className="font-mono text-xs font-semibold tracking-[0.08em] text-muted-foreground uppercase">
          Contributions
        </p>
        <ul className="mt-4 grid gap-2" role="list">
          {project.contributions.map((contribution) => (
            <li className="flex gap-3 leading-relaxed" key={contribution}>
              <span aria-hidden="true">—</span>
              <span>{contribution}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
