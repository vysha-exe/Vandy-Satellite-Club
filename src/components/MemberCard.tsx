import type { TeamMember } from "@/content/team";

export function MemberCard({ member }: { member: TeamMember }) {
  const initials = member.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

  return (
    <article className="group border-b border-line py-6 transition-colors hover:bg-surface-soft/70 sm:px-2">
      <div className="flex items-start gap-4">
        <div
          className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-soft font-display text-sm font-bold text-brand-deep"
          aria-hidden
        >
          {initials}
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="text-lg font-bold tracking-tight text-ink">{member.name}</h3>
          <p className="mt-1 text-sm font-medium text-brand">{member.role}</p>
          {member.discipline ? (
            <p className="mt-1 font-mono text-xs uppercase tracking-[0.08em] text-muted">
              {member.discipline}
            </p>
          ) : null}
          {member.profileUrl ? (
            <a
              href={member.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex text-sm font-semibold text-brand hover:text-brand-deep"
            >
              Profile
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
