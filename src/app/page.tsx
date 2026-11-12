import Link from "next/link";
import { projects } from "@/content/projects";
import { site } from "@/content/site";
import { ButtonLink, Section, SectionHeading, StatusLabel } from "@/components/ui";

const mosaic = projects[0];

export default function HomePage() {
  return (
    <>
      <section className="grid-atmosphere border-b border-line">
        <div className="mx-auto flex min-h-[78vh] max-w-6xl flex-col justify-center px-6 pb-20 pt-16 sm:pt-20">
          <p className="eyebrow animate-rise">{site.shortName} · Vanderbilt University</p>
          <h1 className="display-title mt-5 max-w-4xl text-[clamp(2.8rem,8vw,5.2rem)] text-ink animate-rise">
            Vanderbilt
            <span className="text-brand"> Satellite Club</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted animate-rise-delay">
            {site.description}
          </p>
          <div className="mt-9 flex flex-wrap gap-3 animate-rise-delay-2">
            <ButtonLink href="/hasp">Explore MOSAIC</ButtonLink>
            <ButtonLink href={site.instagram} variant="secondary" external>
              Follow Our Work
            </ButtonLink>
          </div>
        </div>
      </section>

      <Section>
        <SectionHeading
          eyebrow="Featured project"
          title="MOSAIC"
          description={mosaic.fullName}
        />
        <div className="grid gap-8 border-t border-line pt-8 lg:grid-cols-[1.3fr_0.7fr]">
          <div>
            <div className="mb-4 flex flex-wrap gap-2">
              <StatusLabel>{mosaic.status}</StatusLabel>
              <StatusLabel>{mosaic.program}</StatusLabel>
            </div>
            <p className="text-[1.05rem] leading-relaxed text-muted">{mosaic.summary}</p>
            <Link
              href="/hasp"
              className="mt-6 inline-flex text-sm font-semibold text-brand hover:text-brand-deep"
            >
              Open project documentation →
            </Link>
          </div>
          <dl className="grid gap-5 self-start rounded-3xl bg-surface-soft p-6 sm:grid-cols-2 lg:grid-cols-1">
            {[
              ["Payload class", mosaic.payloadClass ?? "—"],
              ["Focus", mosaic.focus ?? "—"],
              ["Program year", "2027 application"],
              ["Flight status", "Proposed"],
            ].map(([label, value]) => (
              <div key={label}>
                <dt className="font-mono text-[0.68rem] uppercase tracking-[0.12em] text-muted">
                  {label}
                </dt>
                <dd className="mt-1 text-sm font-semibold text-ink">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      <Section className="border-t border-line bg-surface-soft/60">
        <SectionHeading
          eyebrow="What we do"
          title="Engineering first. Claims only when verified."
          description="Satellite-related instrumentation, experimentation, and collaboration for Vanderbilt students — without inventing projects the club has not documented."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Instrumentation",
              text: "Design sensing systems that hold up under harsh flight environments and produce recoverable data.",
            },
            {
              title: "Experimentation",
              text: "Turn research questions into testable configurations, ground validation, and careful post-flight analysis.",
            },
            {
              title: "Team collaboration",
              text: "Mechanical, electrical, thermal, and software work shared across student leads and contributors.",
            },
          ].map((item) => (
            <article key={item.title} className="border-t border-line pt-5">
              <h3 className="text-xl font-bold tracking-tight text-ink">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Directory"
          title="Find your way around."
          description="A clear index of the club site — projects, documentation, people, and how to get involved."
        />
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            { href: "/projects", label: "Projects", note: "Current and planned engineering work" },
            { href: "/hasp", label: "HASP / MOSAIC", note: "Full technical documentation hub" },
            { href: "/team", label: "Club members", note: "Roster space for leads and contributors" },
            { href: "/join", label: "Get Involved", note: "Recruitment and contact placeholder" },
            { href: "/about", label: "About", note: "Club overview and areas of work" },
            {
              href: site.instagram,
              label: "Instagram",
              note: "Official club updates",
              external: true,
            },
          ].map((item) =>
            item.external ? (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-2xl border border-line bg-white px-5 py-4 transition-colors hover:border-brand/30 hover:bg-brand-soft/40"
              >
                <span>
                  <span className="block text-base font-bold text-ink">{item.label}</span>
                  <span className="mt-1 block text-sm text-muted">{item.note}</span>
                </span>
                <span className="text-brand">→</span>
              </a>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center justify-between rounded-2xl border border-line bg-white px-5 py-4 transition-colors hover:border-brand/30 hover:bg-brand-soft/40"
              >
                <span>
                  <span className="block text-base font-bold text-ink">{item.label}</span>
                  <span className="mt-1 block text-sm text-muted">{item.note}</span>
                </span>
                <span className="text-brand">→</span>
              </Link>
            ),
          )}
        </div>
      </Section>

      <Section className="border-t border-line">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <SectionHeading
            eyebrow="Join the team"
            title="Build with VUSAT."
            description="Interested in aerospace hardware, sensing, or flight experiments? Meet the club and follow along while recruitment details are confirmed."
          />
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <ButtonLink href="/join">Get Involved</ButtonLink>
            <ButtonLink href="/team" variant="secondary">
              Meet the Club
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
