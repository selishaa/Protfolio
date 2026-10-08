import { Section } from "@/components/section";
import type { EducationItem } from "@/data/resume";

type EducationProps = {
  items: EducationItem[];
};

export function Education({ items }: EducationProps) {
  return (
    <Section id="education" eyebrow="school days" title="Education">
      <ul className="space-y-4">
        {items.map((item) => (
          <li
            key={`${item.school}-${item.degree}`}
            className="rounded-3xl border border-border bg-surface p-6"
          >
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground">
                  {item.degree}
                </h3>
                <p className="text-sm font-medium text-accent">{item.school}</p>
              </div>
              <p className="shrink-0 text-sm font-medium text-secondary">
                <time dateTime={item.start}>{item.start}</time>
                {" – "}
                <time dateTime={item.end}>{item.end}</time>
              </p>
            </div>
            {item.details && item.details.length > 0 ? (
              <ul className="mt-3 space-y-1">
                {item.details.map((detail) => (
                  <li key={detail} className="text-base text-secondary">
                    {detail}
                  </li>
                ))}
              </ul>
            ) : null}
          </li>
        ))}
      </ul>
    </Section>
  );
}
