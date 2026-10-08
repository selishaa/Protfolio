"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Section } from "@/components/section";

type InterestsProps = {
  items: string[];
};

export function Interests({ items }: InterestsProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <Section id="interests" eyebrow="outside the IDE" title="Ask me about">
      <p className="mb-6 max-w-2xl text-base leading-relaxed text-secondary">
        I love love love reading — especially thrillers. Also always down to talk
        travel plans, movie picks, and cute product ideas.
      </p>
      <ul className="flex flex-wrap gap-3">
        {items.map((item, index) => (
          <motion.li
            key={item}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.35,
              delay: prefersReducedMotion ? 0 : index * 0.04,
            }}
            whileHover={
              prefersReducedMotion
                ? undefined
                : { y: -4, rotate: index % 2 === 0 ? -2 : 2 }
            }
            className="rounded-2xl border border-border bg-muted px-4 py-2 text-sm font-semibold text-foreground"
          >
            {item}
          </motion.li>
        ))}
      </ul>
    </Section>
  );
}
