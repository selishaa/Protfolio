"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import Image from "next/image";
import { Section } from "@/components/section";
import type { TravelSpot } from "@/data/resume";

type VibeunoSpotlightProps = {
  profileUrl: string;
  spots: TravelSpot[];
};

export function VibeunoSpotlight({ profileUrl, spots }: VibeunoSpotlightProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <Section
      id="vibeuno"
      eyebrow="built from a love of travel"
      title="Vibeuno spotlight"
    >
      <div className="overflow-hidden rounded-[2rem] border border-border bg-surface">
        <div className="relative h-40 sm:h-52">
          <Image
            src="/travel/cover.jpg"
            alt="Vibeuno cover photo from Selisha's profile"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 960px"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent" />
          <div className="absolute bottom-4 left-4 flex items-center gap-3 sm:bottom-5 sm:left-6">
            <div className="relative size-16 overflow-hidden rounded-2xl border-2 border-white shadow-md sm:size-20">
              <Image
                src="/travel/profile.jpg"
                alt="Selisha on Vibeuno"
                fill
                className="object-cover"
                sizes="80px"
              />
            </div>
            <div>
              <p className="font-display text-xl font-semibold text-foreground">
                Selisha on Vibeuno
              </p>
              <p className="text-sm text-secondary">
                23 places shared · top contributor vibes
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6 p-5 sm:p-8">
          <p className="max-w-2xl text-base leading-relaxed text-secondary sm:text-lg">
            I built Vibeuno so travelers could share real spots — the cute cafes,
            night walks, and “you have to see this” views. Here’s a little collage
            from the Vibeuno world, with a direct hop to my profile.
          </p>

          <ul className="grid grid-cols-2 gap-3 md:grid-cols-3">
            {spots.map((spot, index) => (
              <motion.li
                key={spot.city}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.45,
                  delay: prefersReducedMotion ? 0 : index * 0.05,
                }}
                whileHover={prefersReducedMotion ? undefined : { y: -4 }}
                className={`group relative overflow-hidden rounded-2xl border border-border ${
                  index === 0 ? "md:col-span-2 md:row-span-2 min-h-56" : "min-h-36"
                }`}
              >
                <Image
                  src={spot.image}
                  alt={`${spot.city} — ${spot.note}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-3 text-white">
                  <p className="inline-flex items-center gap-1 text-sm font-semibold">
                    <MapPin className="size-3.5" aria-hidden="true" />
                    {spot.city}
                  </p>
                  <p className="mt-0.5 text-xs text-white/85">{spot.note}</p>
                </div>
              </motion.li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-3">
            <a
              href={profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-fun-burst
              className="inline-flex items-center gap-2 rounded-2xl bg-accent px-5 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
            >
              Open my Vibeuno profile
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
            <a
              href="https://vibeuno.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-2xl border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
            >
              Visit Vibeuno
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
