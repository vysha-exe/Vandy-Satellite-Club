import type { Metadata } from "next";
import { MemberCard, MemberSlot } from "@/components/MemberCard";
import { ButtonLink, PageHero, Section, SectionHeading } from "@/components/ui";
import {
  memberPlaceholders,
  teamGroups,
  teamMembers,
} from "@/content/team";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Vanderbilt Satellite Club members, proposal roster entries, and open slots for confirmed contributors.",
};

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Team · Club members"
        title="People behind"
        accent="the work."
        description="Space for club members, project leads, and advisors. Proposal roster names are labeled as historical HASP application listings until the club confirms a current roster."
        actions={
          <>
            <ButtonLink href="/join">Get Involved</ButtonLink>
            <ButtonLink href="/hasp" variant="secondary">
              View MOSAIC
            </ButtonLink>
          </>
        }
      />

      <Section className="border-t border-line pt-10">
        <div className="mb-10 rounded-3xl border border-gold/25 bg-gold-soft/60 px-5 py-4 text-sm text-ink-soft">
          The names below appear on the November 2026 HASP proposal roster. They are not automatically
          treated as a verified current full-club membership list. Add confirmed members in{" "}
          <code className="font-mono text-xs">src/content/team.ts</code>.
        </div>

        {teamGroups.map((group) => {
          const members = teamMembers.filter((m) => m.group === group.id);
          if (!members.length) return null;
          return (
            <div key={group.id} className="mb-14">
              <SectionHeading
                eyebrow="Roster"
                title={group.title}
                description={group.description}
              />
              <div className="border-t border-line">
                {members.map((member) => (
                  <MemberCard key={member.id} member={member} />
                ))}
              </div>
            </div>
          );
        })}
      </Section>

      <Section className="border-t border-line bg-surface-soft/50">
        <SectionHeading
          eyebrow="Member directory"
          title="Room for the full club."
          description="Open slots reserved for additional confirmed members — photos, roles, and disciplines can be added anytime."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {memberPlaceholders.map((slot) => (
            <MemberSlot key={slot.id} label={slot.label} hint={slot.hint} />
          ))}
        </div>
      </Section>
    </>
  );
}
