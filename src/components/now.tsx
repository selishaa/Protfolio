import { Section } from "@/components/section";
import type { NowItem } from "@/data/resume";

type NowProps = {
  items: NowItem[];
};

export function Now({ items }: NowProps) {
  return (
    <Section id="now" eyebrow="right now" title="Currently">
      <ul className="grid gap-4 md:grid-cols-3">
        {items.map((item) => (
          <li
            key={item.label}
            className="rounded-3xl border border-border bg-surface p-5 transition-colors hover:bg-muted/70"
          >
            <p className="text-xs font-semibold tracking-wide text-accent uppercase">
              {item.label}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-secondary sm:text-base">
              {item.detail}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
