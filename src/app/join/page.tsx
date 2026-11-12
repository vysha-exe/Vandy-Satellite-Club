import type { Metadata } from "next";
import { site } from "@/content/site";
import { ButtonLink, Callout, PageHero, Section, SectionHeading } from "@/components/ui";

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
        description="Prospective members, collaborators, and supporters can follow the club’s public work and reach out through the contact channel once it is confirmed."
        actions={
          <>
            <ButtonLink href={site.joinContactPlaceholder}>Contact placeholder</ButtonLink>
            <ButtonLink href={site.instagram} variant="secondary" external>
              Follow on Instagram
            </ButtonLink>
          </>
        }
      />

      <Section className="border-t border-line">
        <SectionHeading
          eyebrow="Recruitment"
          title="Editable until verified."
          description="Use this page as the join destination. Replace the placeholder contact when the club publishes a verified email or form."
        />
        <Callout title="Contact note" text={site.joinNote} />
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Explore the work",
              text: "Read the MOSAIC documentation to understand the engineering focus.",
              href: "/hasp",
              label: "HASP docs →",
            },
            {
              title: "Meet the club",
              text: "See the member directory and open slots for confirmed contributors.",
              href: "/team",
              label: "Team →",
            },
            {
              title: "Follow updates",
              text: "Official Instagram is the current public channel for club activity.",
              href: site.instagram,
              label: "Instagram →",
              external: true,
            },
          ].map((item) => (
            <article key={item.title} className="border-t border-line pt-5">
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
                <ButtonLink href={item.href} variant="ghost">
                  {item.label}
                </ButtonLink>
              )}
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
