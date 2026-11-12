import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DocBlocks } from "@/components/DocBlocks";
import { haspNav } from "@/content/hasp/nav";
import { haspSections } from "@/content/hasp/sections";

type Props = PageProps<"/hasp/[section]">;

const validSlugs = Object.keys(haspSections);

export function generateStaticParams() {
  return validSlugs.map((section) => ({ section }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { section: slug } = await params;
  const section = haspSections[slug];
  if (!section) return { title: "HASP" };
  return {
    title: `${section.title} · HASP`,
    description: section.description,
  };
}

export default async function HaspSectionPage({ params }: Props) {
  const { section: slug } = await params;
  const section = haspSections[slug];
  if (!section) notFound();

  const navIndex = haspNav.findIndex((item) => item.slug === slug);
  const prev = navIndex > 0 ? haspNav[navIndex - 1] : null;
  const next =
    navIndex >= 0 && navIndex < haspNav.length - 1 ? haspNav[navIndex + 1] : null;

  return (
    <article>
      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted">
        <Link href="/hasp" className="font-medium text-brand hover:text-brand-deep">
          HASP
        </Link>
        <span className="mx-2">/</span>
        <span className="text-ink">{section.title}</span>
      </nav>

      <p className="eyebrow">HASP · MOSAIC</p>
      <h1 className="display-title mt-3 text-[clamp(2rem,5vw,3.2rem)] text-ink">
        {section.title}
      </h1>
      <p className="mt-4 max-w-2xl text-muted">{section.description}</p>

      <div className="mt-8 border-t border-line pt-2">
        <DocBlocks section={section} showArchitecture={slug === "architecture"} />
      </div>

      <nav
        aria-label="Section pagination"
        className="mt-14 flex flex-col gap-3 border-t border-line pt-6 sm:flex-row sm:justify-between"
      >
        {prev ? (
          <Link href={prev.href} className="text-sm font-semibold text-brand">
            Previous: {prev.title}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link href={next.href} className="text-sm font-semibold text-brand sm:text-right">
            Next: {next.title}
          </Link>
        ) : null}
      </nav>
    </article>
  );
}
