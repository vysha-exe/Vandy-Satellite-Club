import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { site } from "@/content/site";
import { ButtonLink, PageHero, Section, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "Get Involved",
  description: "How to join or follow Vanderbilt Satellite Club.",
};

export default function JoinPage() {
  return (
    <>
      <PageHero
        eyebrow="Get Involved"
        title="Build with"
        accent="VUSAT."
        description="Prospective members, collaborators, and supporters can follow the club’s public work and connect through Instagram."
        actions={
          <>
            <ButtonLink href={site.joinContact} external>
              Follow on Instagram
            </ButtonLink>
            <ButtonLink href="/team" variant="secondary">
              Meet the Club
            </ButtonLink>
          </>
        }
      />

      <Section className="border-t border-line">
        <Reveal>
          <SectionHeading
            eyebrow="Recruitment"
            title="Come build with us."
            description={site.joinNote}
          />
        </Reveal>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Explore the work",
              text: "Read the MOSAIC documentation to understand the engineering focus.",
              href: "/hasp",
              label: "HASP docs",
            },
            {
              title: "Meet the club",
              text: "See project leadership and contributors on the team page.",
              href: "/team",
              label: "Team",
            },
            {
              title: "Follow updates",
              text: "Official Instagram is the current public channel for club activity.",
              href: site.instagram,
              label: "Instagram",
              external: true,
            },
          ].map((item, i) => (
            <Reveal key={item.title} delay={i * 80}>
              <article className="border-t border-line pt-5">
                <h3 className="text-lg font-bold text-ink">{item.title}</h3>
                <p className="mt-3 text-sm text-muted">{item.text}</p>
                {item.external ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex text-sm font-semibold text-brand"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    className="mt-4 inline-flex text-sm font-semibold text-brand"
                  >
                    {item.label}
                  </Link>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
