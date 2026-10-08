import { Globe, Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import type { SocialLink } from "@/data/resume";

const iconMap = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  email: Mail,
  website: Globe,
} as const;

type SocialIconsProps = {
  links: SocialLink[];
};

export function SocialIcons({ links }: SocialIconsProps) {
  return (
    <ul className="flex items-center gap-2">
      {links.map((link) => {
        const Icon = iconMap[link.icon];

        return (
          <li key={link.name}>
            <a
              href={link.href}
              target={link.icon === "email" ? undefined : "_blank"}
              rel={link.icon === "email" ? undefined : "noopener noreferrer"}
              aria-label={link.name}
              className="inline-flex size-10 items-center justify-center rounded-2xl border border-border bg-surface text-secondary transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:bg-muted hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
            >
              <Icon className="size-4" aria-hidden="true" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
