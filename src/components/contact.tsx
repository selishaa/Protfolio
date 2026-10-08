import { FileDown } from "lucide-react";
import { SocialIcons } from "@/components/social-icons";
import { Section } from "@/components/section";
import type { SocialLink } from "@/data/resume";

type ContactProps = {
  emailHref: string;
  resumeUrl: string;
  socialLinks: SocialLink[];
};

export function Contact({ emailHref, resumeUrl, socialLinks }: ContactProps) {
  return (
    <Section id="contact" eyebrow="let's chat" title="Say hi">
      <div className="rounded-3xl border border-border bg-muted/60 p-8 sm:p-10">
        <p className="max-w-xl text-lg leading-relaxed text-secondary">
          Open to sweet collaborations, curious chats, and new opportunities.
          Drop me a note — I&apos;d love to hear from you.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={emailHref}
            data-fun-burst
            className="inline-flex items-center rounded-2xl bg-accent px-5 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
          >
            Email me
          </a>
          <a
            href={resumeUrl}
            download
            className="inline-flex items-center gap-2 rounded-2xl border border-border bg-surface px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
          >
            <FileDown className="size-4" aria-hidden="true" />
            Download resume
          </a>
        </div>
        <div className="mt-8">
          <SocialIcons links={socialLinks} />
        </div>
      </div>
    </Section>
  );
}
