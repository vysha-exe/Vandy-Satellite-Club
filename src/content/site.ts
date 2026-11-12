export const site = {
  name: "Vanderbilt Satellite Club",
  shortName: "VUSAT",
  tagline: "Student-led aerospace engineering and research at Vanderbilt University.",
  description:
    "Explore our projects, meet the team, and follow the engineering behind our high-altitude experiments.",
  instagram: "https://www.instagram.com/vandysatelliteclub/?hl=en",
  joinContactPlaceholder: "mailto:vusat-join@example.com",
  joinNote:
    "Recruitment contact is a placeholder until the club publishes a verified email or form.",
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/hasp", label: "HASP" },
  { href: "/team", label: "Team" },
  { href: "/join", label: "Get Involved" },
] as const;
