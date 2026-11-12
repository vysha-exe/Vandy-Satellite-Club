import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { MemberCard } from "@/components/MemberCard";
import { ButtonLink, PageHero, Section, SectionHeading } from "@/components/ui";
import { teamGroups, teamMembers } from "@/content/team";

export const metadata: Metadata = {
  title: "Team",
  description: "Vanderbilt Satellite Club members, leads, and advisors.",
};

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Team · Club members"
        title="People behind"
        accent="the work."
        description="Project leads, contributors, and advisors supporting Vanderbilt Satellite Club engineering."
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
        {teamGroups.map((group, groupIndex) => {
          const members = teamMembers.filter((m) => m.group === group.id);
          if (!members.length) return null;
          return (
            <Reveal key={group.id} delay={groupIndex * 60}>
              <div className="mb-14">
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
            </Reveal>
          );
        })}
      </Section>
    </>
  );
}
