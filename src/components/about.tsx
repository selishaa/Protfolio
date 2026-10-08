import { Section } from "@/components/section";

type AboutProps = {
  about: string;
  firstName: string;
};

export function About({ about, firstName }: AboutProps) {
  return (
    <Section id="about" eyebrow="a little about me" title={`Hi, I'm ${firstName}`}>
      <p className="max-w-2xl text-lg leading-relaxed text-secondary">{about}</p>
    </Section>
  );
}
