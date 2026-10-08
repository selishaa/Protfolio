import { Section } from "@/components/section";
import type { ExperienceItem } from "@/data/resume";

type ExperienceProps = {
  items: ExperienceItem[];
};

export function Experience({ items }: ExperienceProps) {
  return (
    <Section id="experience" eyebrow="where I've been" title="My journey">
      <ol className="relative space-y-0 border-l border-border pl-6">
        {items.map((item) => (
          <li key={`${item.company}-${item.title}-${item.start}`} className="relative pb-10 last:pb-0">
            <span
              aria-hidden="true"
              className="absolute top-1.5 -left-[1.9rem] size-3 rounded-full border-2 border-accent bg-background"
            />
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm font-medium text-accent">{item.company}</p>
              </div>
              <p className="shrink-0 text-sm font-medium text-secondary">
                <time dateTime={item.start}>{item.start}</time>
                {" – "}
                <time dateTime={item.end}>{item.end}</time>
              </p>
            </div>
            <ul className="mt-3 space-y-2">
              {item.description.map((point) => (
                <li key={point} className="text-base leading-relaxed text-secondary">
                  {point}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}
