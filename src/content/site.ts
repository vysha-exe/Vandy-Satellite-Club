export const site = {
  name: "Vanderbilt Satellite Team",
  shortName: "VUSAT",
  tagline: "Student-led aerospace engineering and research at Vanderbilt University.",
  description:
    "Explore our projects, meet the team, and follow the engineering behind our high-altitude experiments.",
  instagram: "https://www.instagram.com/vandysatellite/?hl=en",
  joinContact: "https://www.instagram.com/vandysatellite/?hl=en",
  joinNote:
    "Reach out through Instagram while the team confirms a dedicated recruitment contact.",
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/hasp", label: "HASP" },
  { href: "/team", label: "Team" },
  { href: "/join", label: "Get Involved" },
] as const;
