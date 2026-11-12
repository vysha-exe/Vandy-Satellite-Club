export type TeamMember = {
  id: string;
  name: string;
  role: string;
  discipline?: string;
  group: "leadership" | "members" | "advisors";
  status: "confirmed" | "proposal-roster" | "placeholder";
  profileUrl?: string;
  note?: string;
};

/**
 * Editable club roster.
 * Proposal names are labeled as a historical HASP application roster (Nov 2026),
 * not a verified current full-club membership list.
 * Add members by appending objects with status: "confirmed".
 */
export const teamMembers: TeamMember[] = [
  {
    id: "shirley-jiang",
    name: "Shirley Jiang",
    role: "Project Manager; Mechanical Sublead",
    discipline: "Mechanical",
    group: "leadership",
    status: "confirmed",
  },
  {
    id: "leandro-avelar",
    name: "Leandro Avelar",
    role: "Mechanical Lead",
    discipline: "Mechanical",
    group: "leadership",
    status: "confirmed",
  },
  {
    id: "taisei-tagami",
    name: "Taisei Tagami",
    role: "Electrical Lead",
    discipline: "Electrical",
    group: "leadership",
    status: "confirmed",
  },
  {
    id: "gavin-gemski",
    name: "Gavin Gemski",
    role: "Mechanical System Integration",
    discipline: "Mechanical",
    group: "members",
    status: "confirmed",
  },
  {
    id: "cristian-diaz",
    name: "Cristian Diaz",
    role: "Mechanical Sublead; Thermal Analysis",
    discipline: "Mechanical / Thermal",
    group: "members",
    status: "confirmed",
  },
  {
    id: "brian-sierawski",
    name: "Brian Sierawski",
    role: "Faculty Advisor",
    discipline: "Faculty",
    group: "advisors",
    status: "confirmed",
  },
];

export const teamGroups = [
  {
    id: "leadership",
    title: "Project leadership",
    description: "Leads guiding MOSAIC and club engineering work.",
  },
  {
    id: "members",
    title: "Engineering contributors",
    description: "Members contributing across mechanical, electrical, and integration work.",
  },
  {
    id: "advisors",
    title: "Advisors",
    description: "Faculty guidance for the club’s engineering and research work.",
  },
] as const;
