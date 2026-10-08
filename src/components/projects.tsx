"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { GitHubIcon } from "@/components/icons";
import { Section } from "@/components/section";
import type { ProjectItem } from "@/data/resume";

type ProjectsProps = {
  items: ProjectItem[];
};

const accentClass = {
  rose: "project-rose",
  peach: "project-peach",
  mint: "project-mint",
} as const;

export function Projects({ items }: ProjectsProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <Section id="projects" eyebrow="things I've made" title="Featured work">
      <ul className="grid gap-5 md:grid-cols-2">
        {items.map((project, index) => (
          <motion.li
            key={project.name}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.5,
              delay: prefersReducedMotion ? 0 : index * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={prefersReducedMotion ? undefined : { y: -4 }}
            className={`rounded-3xl border border-border p-6 ${accentClass[project.accent]} ${
              index === 0 ? "md:col-span-2" : ""
            }`}
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="font-display text-2xl font-semibold tracking-tight text-foreground">
                {project.name}
              </h3>
              <div className="flex shrink-0 items-center gap-1">
                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.name} GitHub repository`}
                    className="inline-flex size-9 items-center justify-center rounded-xl text-secondary transition-colors hover:bg-white/60 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 dark:hover:bg-black/20"
                  >
                    <GitHubIcon className="size-4" />
                  </a>
                ) : null}
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.name} live demo`}
                    className="inline-flex size-9 items-center justify-center rounded-xl text-secondary transition-colors hover:bg-white/60 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 dark:hover:bg-black/20"
                  >
                    <ExternalLink className="size-4" aria-hidden="true" />
                  </a>
                ) : null}
              </div>
            </div>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-secondary">
              {project.description}
            </p>
            <ul
              className="mt-5 flex flex-wrap gap-2"
              aria-label={`${project.name} tech stack`}
            >
              {project.tech.map((tech) => (
                <li
                  key={tech}
                  className="rounded-xl bg-white/55 px-2.5 py-1 text-xs font-medium text-secondary dark:bg-black/20"
                >
                  {tech}
                </li>
              ))}
            </ul>
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-accent transition-colors hover:text-foreground"
              >
                Visit project
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </a>
            ) : null}
          </motion.li>
        ))}
      </ul>
    </Section>
  );
}
