import type { CompactProject } from "@/types/content";

type CompactProjectCardProps = Readonly<{
  project: CompactProject;
}>;

export function CompactProjectCard({ project }: CompactProjectCardProps) {
  return (
    <article
      className="grid gap-5 border-b border-border py-7 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)] md:gap-8 md:odd:border-r md:odd:pr-7 md:even:pl-7"
      data-work-reveal
    >
      <div>
        <p className="text-sm text-muted-foreground">{project.context}</p>
        <h4 className="mt-2 text-[clamp(1.65rem,3vw,2.4rem)] leading-[1] font-semibold tracking-[-0.045em]">
          {project.title}
        </h4>
      </div>

      <ul className="grid content-start gap-1.5 text-sm" aria-label="Contributions">
        {project.contributions.map((contribution) => (
          <li className="flex gap-2.5" key={contribution}>
            <span className="text-decorative-rose" aria-hidden="true">•</span>
            <span>{contribution}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
