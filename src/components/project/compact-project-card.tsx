import type { CompactProject } from "@/types/content";

type CompactProjectCardProps = Readonly<{
  index?: number;
  project: CompactProject;
}>;

export function CompactProjectCard({
  project,
}: CompactProjectCardProps) {
  const isMyanmarTitle = project.slug === "saik-pyo-mate-swe";

  return (
    <article
      className="flex min-h-full flex-col border border-border bg-background p-5 sm:p-6"
      data-work-reveal
    >
      <div className="flex items-start justify-between gap-6 font-mono text-xs font-semibold tracking-[0.08em] text-muted-foreground uppercase">
        <p>{project.context}</p>
      </div>

      <h4
        className={`mt-6 max-w-[14ch] text-[clamp(1.5rem,3.2vw,2.5rem)] leading-[0.96] font-semibold ${
          isMyanmarTitle ? "tracking-normal" : "tracking-[-0.05em]"
        }`}
        lang={isMyanmarTitle ? "my" : undefined}
      >
        {project.title}
      </h4>

      <div className="mt-6 border-t border-border pt-4 sm:mt-8">
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
