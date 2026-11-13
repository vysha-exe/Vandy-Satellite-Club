import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { projects } from "@/content/projects";
import { PageHero, Section, StatusLabel } from "@/components/ui";

export const metadata: Metadata = {
  title: "Projects",
  description: "Project directory for Vanderbilt Satellite Team, featuring HASP / MOSAIC.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Work in"
        accent="progress."
        description="Engineering projects from Vanderbilt Satellite Team, starting with MOSAIC."
      />

      <Section className="border-t border-line pt-8">
        <div className="space-y-4">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 80}>
              <article className="rounded-3xl border border-line bg-white p-6 sm:p-8 transition-colors hover:border-brand/25">
                <div className="flex flex-wrap items-center gap-2">
                  <StatusLabel>{project.status}</StatusLabel>
                  {project.program ? <StatusLabel>{project.program}</StatusLabel> : null}
                </div>
                <h2 className="display-title mt-4 text-3xl text-ink sm:text-4xl">{project.name}</h2>
                {project.fullName ? (
                  <p className="mt-2 text-sm font-medium text-brand">{project.fullName}</p>
                ) : null}
                <p className="mt-4 max-w-3xl text-muted">{project.summary}</p>
                <Link
                  href={project.href}
                  className="mt-6 inline-flex text-sm font-semibold text-brand hover:text-brand-deep"
                >
                  Open documentation
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
