"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

type Particle = {
  id: number;
  x: number;
  y: number;
  color: string;
  rotate: number;
};

const COLORS = ["#e85a8c", "#ff9f7a", "#7ec8b0", "#ffb4cb", "#f6c35b"];

export function FunBits() {
  const prefersReducedMotion = useReducedMotion();
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const burst = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target?.closest("[data-fun-burst]")) return;

      const next = Array.from({ length: 14 }, (_, index) => ({
        id: Date.now() + index,
        x: event.clientX,
        y: event.clientY,
        color: COLORS[index % COLORS.length],
        rotate: Math.random() * 180 - 90,
      }));

      setParticles((current) => [...current, ...next]);
      window.setTimeout(() => {
        setParticles((current) =>
          current.filter((particle) => particle.id < next[0].id),
        );
      }, 900);
    };

    window.addEventListener("click", burst);
    return () => window.removeEventListener("click", burst);
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[60] overflow-hidden">
      <AnimatePresence>
        {particles.map((particle, index) => (
          <motion.span
            key={particle.id}
            className="absolute size-2 rounded-full"
            style={{
              left: particle.x,
              top: particle.y,
              backgroundColor: particle.color,
            }}
            initial={{ opacity: 1, scale: 1, x: 0, y: 0, rotate: 0 }}
            animate={{
              opacity: 0,
              scale: 0.4,
              x: Math.cos((index / 14) * Math.PI * 2) * (48 + (index % 5) * 8),
              y: Math.sin((index / 14) * Math.PI * 2) * (48 + (index % 5) * 8),
              rotate: particle.rotate,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
