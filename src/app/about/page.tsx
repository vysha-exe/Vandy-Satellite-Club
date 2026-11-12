import type { Metadata } from "next";
import { ButtonLink, PageHero, Section, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "About",
  description:
    "Overview of Vanderbilt Satellite Club — student-led aerospace engineering and research at Vanderbilt University.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About · VUSAT"
        title="A student engineering"
        accent="club."
        description="Vanderbilt Satellite Club is a student-led community focused on aerospace instrumentation, experimentation, and collaborative engineering. This site documents verified work and clearly marks proposed plans."
        actions={
          <>
            <ButtonLink href="/team">Meet the Club</ButtonLink>
            <ButtonLink href="/hasp" variant="secondary">
              Explore MOSAIC
            </ButtonLink>
          </>
        }
      />

      <Section className="border-t border-line">
        <SectionHeading
          eyebrow="Areas of work"
          title="Where the club focuses."
          description="Workstreams grow with active projects. MOSAIC currently anchors the public technical record."
        />
        <div className="grid gap-8 md:grid-cols-2">
          {[
            {
              title: "High-altitude experimentation",
              text: "Payload concepts for platforms such as HASP, emphasizing recoverable sensing and careful validation.",
            },
            {
              title: "Attitude sensing & estimation",
              text: "Comparing affordable sensor suites and fusion approaches for orientation knowledge under flight motion.",
            },
            {
              title: "Mechanical & thermal design",
              text: "Enclosures, mounting, insulation, and environmental considerations for balloon payloads.",
            },
            {
              title: "Electrical systems & data",
              text: "Power conditioning, bus design, logging, telemetry, and post-flight analysis pipelines.",
            },
          ].map((item) => (
            <article key={item.title} className="border-t border-line pt-5">
              <h3 className="text-xl font-bold text-ink">{item.title}</h3>
              <p className="mt-3 text-muted">{item.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section className="border-t border-line bg-surface-soft/50">
        <SectionHeading
          eyebrow="Organizational context"
          title="Credible, updateable, student-owned."
          description="Content on this site prioritizes accuracy over marketing language. Proposal material is treated as planned work until the club confirms milestones."
        />
        <ul className="max-w-3xl space-y-3 text-muted">
          <li>• Public claims require verified updates or sourced proposal language.</li>
          <li>• Personal contact details from applications are not published.</li>
          <li>• Team listings distinguish proposal roster entries from confirmed members.</li>
        </ul>
      </Section>
    </>
  );
}
