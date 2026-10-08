"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Section } from "@/components/section";
import type { SkillGroup } from "@/data/resume";

type SkillsProps = {
  groups: SkillGroup[];
};

export function Skills({ groups }: SkillsProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <Section id="skills" eyebrow="toolbox" title="Things I love using">
      <div className="space-y-8">
        {groups.map((group) => (
          <div key={group.category}>
            <h3 className="mb-3 text-sm font-semibold tracking-wide text-secondary uppercase">
              {group.category}
            </h3>
            <ul className="flex flex-wrap gap-2.5" aria-label={group.category}>
              {group.items.map((skill, index) => (
                <motion.li
                  key={skill}
                  initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.92 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.35,
                    delay: prefersReducedMotion ? 0 : index * 0.03,
                  }}
                  whileHover={
                    prefersReducedMotion
                      ? undefined
                      : { y: -3, backgroundColor: "var(--muted)" }
                  }
                  className="rounded-2xl border border-border bg-surface px-3.5 py-2 text-sm font-medium text-foreground"
                >
                  {skill}
                </motion.li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
