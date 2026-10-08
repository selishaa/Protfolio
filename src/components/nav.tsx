"use client";

import { FileDown } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

const links = [
  { href: "#about", label: "About" },
  { href: "#vibeuno", label: "Vibeuno" },
  { href: "#now", label: "Now" },
  { href: "#projects", label: "Work" },
  { href: "#contact", label: "Say hi" },
];

type NavProps = {
  name: string;
  resumeUrl: string;
};

export function Nav({ name, resumeUrl }: NavProps) {
  return (
    <nav
      aria-label="Primary"
      className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-md"
    >
      <div className="mx-auto flex h-14 w-full max-w-5xl items-center justify-between px-5 sm:px-8">
        <a
          href="#top"
          className="font-display text-lg font-semibold tracking-tight text-foreground transition-colors hover:text-accent"
        >
          {name.split(" ")[0]}
        </a>
        <div className="flex items-center gap-1 sm:gap-2">
          <ul className="hidden items-center gap-1 md:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-lg px-3 py-1.5 text-sm font-medium text-secondary transition-colors hover:bg-muted hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={resumeUrl}
            download
            aria-label="Download resume"
            className="inline-flex size-9 items-center justify-center rounded-xl border border-border bg-surface text-secondary transition-colors hover:bg-muted hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
          >
            <FileDown className="size-4" aria-hidden="true" />
          </a>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
