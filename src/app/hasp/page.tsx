import type { Metadata } from "next";
import Link from "next/link";
import { ArchitectureDiagram } from "@/components/ArchitectureDiagram";
import { Reveal } from "@/components/Reveal";
import { ButtonLink, Callout, SpecTable, StatusLabel } from "@/components/ui";
import { haspNav, mosaicMeta } from "@/content/hasp/nav";

export const metadata: Metadata = {
  title: "HASP · MOSAIC",
  description:
    "MOSAIC — Multisensor Orientation Sensing and Attitude Inference Comparison. Vanderbilt Satellite Team HASP 2027 payload proposal documentation.",
};

export default function HaspOverviewPage() {
  return (
    <article>
      <p className="eyebrow">{mosaicMeta.eyebrow}</p>
      <h1 className="display-title mt-4 text-[clamp(2.4rem,6vw,4rem)] text-ink">
        {mosaicMeta.name}
      </h1>
      <p className="mt-3 text-lg font-medium text-brand">{mosaicMeta.fullName}</p>
      <p className="mt-5 max-w-3xl text-[1.05rem] leading-relaxed text-muted">
        A Vanderbilt Satellite Team experiment investigating the reliability of affordable
        attitude-estimation systems in the stratosphere. MOSAIC combines inertial, magnetic, and
        optical measurements to study how sensor fusion can improve orientation estimates during the
        irregular motion and changing environmental conditions of high-altitude balloon flight.
      </p>

      <div className="mt-7 flex flex-wrap gap-3">
        <ButtonLink href="#documentation">Project Documentation</ButtonLink>
        <ButtonLink href="/hasp/science" variant="secondary">
          Science overview
        </ButtonLink>
      </div>

      <Reveal>
        <div className="mt-10">
          <SpecTable
            caption="MOSAIC metadata"
            headers={["Field", "Value"]}
            rows={[
              ["Institution", mosaicMeta.institution],
              ["Team", mosaicMeta.team],
              ["Platform", mosaicMeta.platform],
              ["Proposal year", mosaicMeta.proposalYear],
              ["Payload class", mosaicMeta.payloadClass],
              ["Proposal submission date", mosaicMeta.submitted],
              ["Flight status", mosaicMeta.flightStatus],
              ["Approximate target float altitude", mosaicMeta.floatAltitude],
              ["Target minimum float duration", mosaicMeta.floatDuration],
            ]}
          />
        </div>
      </Reveal>

      <Reveal>
        <section className="mt-12">
          <h2 className="display-title text-3xl text-ink">Mission in plain language</h2>
          <div className="prose-doc mt-4">
            <p>
              A gyroscope measures angular velocity, but integrated orientation drifts as bias
              accumulates. Accelerometers can provide a gravity reference for roll and pitch but do not
              independently resolve yaw. Magnetometers supply a magnetic reference but are vulnerable to
              local disturbances. A Sun sensor provides a directional reference when the Sun is visible.
            </p>
            <p>
              MOSAIC studies whether combining these imperfect measurements gives a more dependable
              orientation estimate than using a gyroscope alone.
            </p>
          </div>
          <Callout
            title="Estimation, not control"
            text="Attitude estimation determines orientation. Attitude control actively changes orientation. MOSAIC is an estimation and data-collection experiment — it does not include an active attitude-control system."
          />
        </section>
      </Reveal>

      <Reveal>
        <section className="mt-12">
          <h2 className="display-title text-3xl text-ink">System snapshot</h2>
          <ArchitectureDiagram />
        </section>
      </Reveal>

      <Reveal>
        <section id="documentation" className="mt-12 scroll-mt-28">
          <h2 className="display-title text-3xl text-ink">Project documentation</h2>
          <p className="mt-3 max-w-2xl text-muted">
            Browse the engineering sections for science, hardware, testing, and timeline details.
          </p>
          <div className="mt-6 grid gap-2 sm:grid-cols-2">
            {haspNav
              .filter((item) => item.href !== "/hasp")
              .map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-2xl border border-line px-4 py-3 text-sm font-semibold text-ink transition-colors hover:border-brand/30 hover:bg-brand-soft/50"
                >
                  {item.title}
                </Link>
              ))}
          </div>
          <p className="mt-6">
            <StatusLabel>Source</StatusLabel>{" "}
            <span className="ml-2 text-sm text-muted">
              HASP Student Payload Application for 2027 · submitted November 8, 2026
            </span>
          </p>
        </section>
      </Reveal>
    </article>
  );
}
