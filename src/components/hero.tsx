"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, FileDown, Sparkles } from "lucide-react";
import Image from "next/image";
import { SocialIcons } from "@/components/social-icons";
import type { Resume } from "@/data/resume";

type HeroProps = {
  resume: Resume;
};

export function Hero({ resume }: HeroProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <header
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden site-grain"
    >
      {!prefersReducedMotion ? (
        <>
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute -left-16 top-24 size-56 rounded-full bg-accent-soft/50 blur-3xl"
            animate={{ y: [0, 18, 0], x: [0, 10, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute right-0 top-32 size-64 rounded-full bg-peach/35 blur-3xl"
            animate={{ y: [0, -22, 0], x: [0, -12, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-16 left-1/3 size-48 rounded-full bg-mint/30 blur-3xl"
            animate={{ y: [0, 14, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          />
        </>
      ) : null}

      <div className="relative mx-auto grid w-full max-w-5xl items-center gap-10 px-5 pt-24 pb-16 sm:px-8 sm:pt-28 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-4 inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-accent uppercase">
            <Sparkles className="size-4" aria-hidden="true" />
            hey, nice to meet you
          </p>
          <h1 className="font-display text-5xl leading-[1.05] font-semibold tracking-tight text-foreground sm:text-6xl md:text-7xl">
            {resume.name}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-secondary sm:text-xl">
            {resume.tagline}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#vibeuno"
              data-fun-burst
              className="inline-flex items-center gap-2 rounded-2xl bg-accent px-5 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
            >
              See Vibeuno
              <ArrowDown className="size-4" aria-hidden="true" />
            </a>
            <a
              href={resume.resumeUrl}
              download
              className="inline-flex items-center gap-2 rounded-2xl border border-border bg-surface px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
            >
              <FileDown className="size-4" aria-hidden="true" />
              Resume
            </a>
            <a
              href="#contact"
              data-fun-burst
              className="inline-flex items-center rounded-2xl border border-border bg-surface px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
            >
              Say hello
            </a>
          </div>

          <div className="mt-10">
            <SocialIcons links={resume.socialLinks} />
          </div>
        </motion.div>

        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-sm lg:max-w-none"
        >
          <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-accent-soft/50 via-peach/30 to-mint/40 blur-md" />
          <div className="relative overflow-hidden rounded-[2rem] border border-border/70 bg-surface shadow-[0_20px_50px_-28px_rgba(232,90,140,0.45)]">
            <Image
              src="/selisha.jpg"
              alt={`${resume.name} smiling portrait`}
              width={400}
              height={400}
              priority
              className="aspect-square h-auto w-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </header>
  );
}
