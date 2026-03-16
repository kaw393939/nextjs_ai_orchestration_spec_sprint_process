export type SiteNavigationLink = {
  href: string;
  label: string;
};

export type HeaderNavigationItem = SiteNavigationLink & {
  match: {
    exactPathnames?: string[];
    pathnamePrefixes?: string[];
    homeHashes?: string[];
  };
};

export type FooterNavigationSection = {
  title: string;
  description: string;
  links: SiteNavigationLink[];
};

export type FooterReturnSignal = {
  eyebrow: string;
  description: string;
};

export const mainNavigation: HeaderNavigationItem[] = [
  {
    href: "/",
    label: "Overview",
    match: {
      exactPathnames: ["/"],
      homeHashes: ["", "#home-opening", "#home-reading-model", "#home-scenes"],
    },
  },
  {
    href: "/eras/precursors-to-machine-intelligence",
    label: "Seven Eras",
    match: {
      pathnamePrefixes: ["/eras/"],
      homeHashes: ["#home-chronology"],
    },
  },
  {
    href: "/reading-maps/intellectual-lineage",
    label: "Reading Map",
    match: {
      exactPathnames: ["/reading-maps/intellectual-lineage"],
      pathnamePrefixes: ["/reading-maps/"],
    },
  },
  {
    href: "/people-and-institutions",
    label: "People & Institutions",
    match: {
      exactPathnames: ["/people-and-institutions"],
      pathnamePrefixes: ["/people-and-institutions/"],
    },
  },
  {
    href: "/guides/embeddings-latent-space-and-llm-math",
    label: "Math Guide",
    match: {
      exactPathnames: ["/guides/embeddings-latent-space-and-llm-math"],
      pathnamePrefixes: ["/guides/"],
    },
  },
];

export const homeSectionNavigation: HeaderNavigationItem[] = [
  {
    href: "/#home-opening",
    label: "Opening",
    match: {
      exactPathnames: ["/"],
      homeHashes: ["", "#home-opening"],
    },
  },
  {
    href: "/#home-chronology",
    label: "Timeline",
    match: {
      exactPathnames: ["/"],
      homeHashes: ["#home-chronology"],
    },
  },
  {
    href: "/#home-reading-model",
    label: "Reading model",
    match: {
      exactPathnames: ["/"],
      homeHashes: ["#home-reading-model"],
    },
  },
  {
    href: "/#home-scenes",
    label: "Scenes",
    match: {
      exactPathnames: ["/"],
      homeHashes: ["#home-scenes"],
    },
  },
];

export const footerQuickLinks: SiteNavigationLink[] = [
  {
    href: "/eras/precursors-to-machine-intelligence",
    label: "Read the seven-era run",
  },
  {
    href: "/reading-maps/intellectual-lineage",
    label: "Trace the paper lineage",
  },
  {
    href: "/people-and-institutions",
    label: "Meet the cast and institutions",
  },
];

export const footerReturnSignals: FooterReturnSignal[] = [
  {
    eyebrow: "Sequence",
    description:
      "Seven eras carry the argument from machine logic to public AI.",
  },
  {
    eyebrow: "Evidence",
    description:
      "Papers and reading maps show which documents made each turn stick.",
  },
  {
    eyebrow: "Cast",
    description:
      "People, labs, and institutions keep the history tied to actors and power.",
  },
];

export const footerNavigation: FooterNavigationSection[] = [
  {
    title: "Main Line",
    description:
      "Use the overview, era sequence, and current horizon to keep the central argument intact.",
    links: [
      { href: "/", label: "Overview" },
      {
        href: "/eras/precursors-to-machine-intelligence",
        label: "Seven eras",
      },
      {
        href: "/eras/foundation-models-and-generative-ai",
        label: "Current era",
      },
    ],
  },
  {
    title: "Companion Proof",
    description:
      "Use papers, cast, and guides when the sequence needs evidence, actors, or translation.",
    links: [
      { href: "/reading-maps/intellectual-lineage", label: "Reading map" },
      {
        href: "/people-and-institutions",
        label: "People and institutions",
      },
      {
        href: "/guides/embeddings-latent-space-and-llm-math",
        label: "Math bridge",
      },
    ],
  },
  {
    title: "Return Points",
    description:
      "These hinge chapters restore the plot quickly when you come back later.",
    links: [
      {
        href: "/eras/precursors-to-machine-intelligence",
        label: "Runway before AI",
      },
      {
        href: "/eras/computation-information-field-formation",
        label: "Dartmouth as convergence",
      },
      {
        href: "/eras/foundation-models-and-generative-ai",
        label: "Public AI era",
      },
    ],
  },
];
