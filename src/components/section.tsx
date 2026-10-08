import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  title: string;
  eyebrow?: string;
  children: ReactNode;
};

export function Section({ id, title, eyebrow, children }: SectionProps) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="scroll-mt-24">
      {eyebrow ? (
        <p className="mb-2 text-sm font-semibold tracking-wide text-accent uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={`${id}-heading`}
        className="font-display mb-8 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
      >
        {title}
      </h2>
      {children}
    </section>
  );
}
