export type Project = {
  slug: string;
  name: string;
  fullName?: string;
  program?: string;
  status: string;
  summary: string;
  href: string;
  focus?: string;
  payloadClass?: string;
};

export const projects: Project[] = [
  {
    slug: "mosaic",
    name: "MOSAIC",
    fullName: "Multisensor Orientation Sensing and Attitude Inference Comparison",
    program: "High-Altitude Student Platform (HASP), 2027 application",
    status: "Proposed / in development",
    payloadClass: "Small",
    focus:
      "Low-cost attitude estimation and sensor fusion under stratospheric conditions",
    summary:
      "MOSAIC investigates whether combining gyroscopes, accelerometers, magnetometers, and optical Sun sensors can reduce orientation drift and improve attitude estimation on a high-altitude balloon platform. The experiment is designed to collect synchronized sensor measurements throughout flight and compare four attitude-estimation configurations after recovery.",
    href: "/hasp",
  },
];
