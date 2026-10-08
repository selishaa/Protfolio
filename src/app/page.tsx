import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Education } from "@/components/education";
import { Experience } from "@/components/experience";
import { FadeIn } from "@/components/fade-in";
import { FunBits } from "@/components/fun-bits";
import { Hero } from "@/components/hero";
import { Interests } from "@/components/interests";
import { Nav } from "@/components/nav";
import { Now } from "@/components/now";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { VibeunoSpotlight } from "@/components/vibeuno-spotlight";
import { resume } from "@/data/resume";

export default function Home() {
  const emailLink =
    resume.socialLinks.find((link) => link.icon === "email")?.href ??
    "mailto:selishathapa5@gmail.com";

  return (
    <div className="min-h-full">
      <FunBits />
      <Nav name={resume.name} resumeUrl={resume.resumeUrl} />
      <Hero resume={resume} />

      <main className="mx-auto flex w-full max-w-5xl flex-col gap-24 px-5 py-20 sm:gap-28 sm:px-8 sm:py-28">
        <FadeIn>
          <About about={resume.about} firstName={resume.firstName} />
        </FadeIn>

        <FadeIn delay={0.05}>
          <VibeunoSpotlight
            profileUrl={resume.vibeunoProfileUrl}
            spots={resume.travelSpots}
          />
        </FadeIn>

        <FadeIn delay={0.05}>
          <Now items={resume.now} />
        </FadeIn>

        <FadeIn delay={0.05}>
          <Interests items={resume.interests} />
        </FadeIn>

        <FadeIn delay={0.05}>
          <Projects items={resume.projects} />
        </FadeIn>

        <FadeIn delay={0.05}>
          <Experience items={resume.experience} />
        </FadeIn>

        <FadeIn delay={0.05}>
          <Skills groups={resume.skills} />
        </FadeIn>

        <FadeIn delay={0.05}>
          <Education items={resume.education} />
        </FadeIn>

        <FadeIn delay={0.05}>
          <Contact
            emailHref={emailLink}
            resumeUrl={resume.resumeUrl}
            socialLinks={resume.socialLinks}
          />
        </FadeIn>
      </main>

      <footer className="border-t border-border px-5 py-8 text-center text-sm text-secondary sm:px-8">
        <p>
          Made with care by {resume.name} · {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}
