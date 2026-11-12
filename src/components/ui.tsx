import Link from "next/link";
import type { ReactNode } from "react";

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}

export function PageHero({
  eyebrow,
  title,
  accent,
  description,
  actions,
}: {
  eyebrow?: string;
  title: string;
  accent?: string;
  description?: string;
  actions?: ReactNode;
}) {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-10 pt-14 sm:pt-20">
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h1 className="display-title mt-4 max-w-4xl text-[clamp(2.6rem,7vw,4.6rem)] text-ink animate-rise">
        {title}
        {accent ? <span className="text-brand"> {accent}</span> : null}
      </h1>
      {description ? (
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted animate-rise-delay">
          {description}
        </p>
      ) : null}
      {actions ? <div className="mt-8 flex flex-wrap gap-3 animate-rise-delay-2">{actions}</div> : null}
    </section>
  );
}

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`mx-auto max-w-6xl px-6 py-14 sm:py-16 ${className}`}>
      {children}
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-8 max-w-3xl">
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 className="display-title mt-3 text-[clamp(1.8rem,4vw,2.6rem)] text-ink">{title}</h2>
      {description ? <p className="mt-3 text-base leading-relaxed text-muted">{description}</p> : null}
    </div>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  external = false,
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  external?: boolean;
}) {
  const styles =
    variant === "primary"
      ? "bg-ink text-white hover:bg-brand-deep"
      : variant === "secondary"
        ? "border border-line bg-white text-ink hover:border-brand/40 hover:bg-brand-soft"
        : "text-brand hover:text-brand-deep";

  const className = `inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${styles}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

export function StatusLabel({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-gold-soft px-3 py-1 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-ink-soft">
      {children}
    </span>
  );
}

export function SpecTable({
  headers,
  rows,
  caption,
}: {
  headers: string[];
  rows: string[][];
  caption?: string;
}) {
  return (
    <div className="my-6 overflow-x-auto rounded-2xl border border-line">
      <table className="min-w-full border-collapse text-left text-sm">
        {caption ? <caption className="sr-only">{caption}</caption> : null}
        <thead className="bg-surface-soft">
          <tr>
            {headers.map((h) => (
              <th
                key={h}
                className="border-b border-line px-4 py-3 font-semibold text-ink whitespace-nowrap"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="odd:bg-white even:bg-surface-soft/60">
              {row.map((cell, j) => (
                <td key={j} className="border-b border-line px-4 py-3 text-muted align-top">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function Callout({ title, text }: { title: string; text: string }) {
  return (
    <aside className="my-6 rounded-2xl border border-brand/15 bg-brand-soft/70 px-5 py-4">
      <p className="text-sm font-bold text-brand-deep">{title}</p>
      <p className="mt-2 text-[0.98rem] leading-relaxed text-ink-soft">{text}</p>
    </aside>
  );
}
