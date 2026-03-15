export type SocialLink = {
  label: string;
  href: string;
};

export type NarrativeProfile = {
  slug: string;
  name: string;
  era: string;
  kind: "person" | "institution";
  role: string;
  summary: string;
  story: string;
  officialUrl: string;
  officialLabel: string;
  imageUrl?: string;
  imageAlt?: string;
  socialLinks?: SocialLink[];
  sourceRecord: string;
};

export type HistoricalAnchor = {
  slug: string;
  era: string;
  title: string;
  summary: string;
  officialUrl: string;
  officialLabel: string;
  imageUrl?: string;
  imageAlt?: string;
  sourceRecord: string;
};

export const peopleProfiles: NarrativeProfile[] = [
  {
    slug: "andrej-karpathy",
    name: "Andrej Karpathy",
    era: "Era 7",
    kind: "person",
    role: "Public technical educator and frontier-model researcher",
    summary:
      "Karpathy makes the modern AI stack legible to a broad audience while still sitting inside the frontier-model research world.",
    story:
      "He is historically useful because Era 7 is not only about building systems. It is also about who explains them, teaches them, and makes them memorable for the public.",
    officialUrl: "https://karpathy.ai/",
    officialLabel: "Official site",
    imageUrl: "/media/wikimedia/andrej-karpathy.jpg",
    imageAlt: "Wikimedia Commons portrait of Andrej Karpathy.",
    socialLinks: [
      { label: "X", href: "https://twitter.com/karpathy" },
      { label: "GitHub", href: "https://github.com/karpathy" },
      { label: "YouTube", href: "https://www.youtube.com/@AndrejKarpathy" },
    ],
    sourceRecord: "docs/content/media/records/andrej-karpathy-portrait.md",
  },
  {
    slug: "ilya-sutskever",
    name: "Ilya Sutskever",
    era: "Era 7",
    kind: "person",
    role: "Research-lineage figure connecting deep learning, OpenAI, and SSI",
    summary:
      "Sutskever anchors the line from the deep-learning revival into large-model scaling and the later SSI safety-capability framing.",
    story:
      "He matters because the current era is shaped by researcher movement and institution-building, not only by product releases.",
    officialUrl: "https://ssi.inc/",
    officialLabel: "SSI mission page",
    imageUrl: "/media/wikimedia/ilya-sutskever.jpg",
    imageAlt: "Wikimedia Commons portrait crop of Ilya Sutskever.",
    sourceRecord: "docs/content/media/records/ilya-sutskever-portrait.md",
  },
  {
    slug: "demis-hassabis",
    name: "Demis Hassabis",
    era: "Era 7",
    kind: "person",
    role: "Leader of the science-and-general-systems branch of modern AI",
    summary:
      "Hassabis keeps the current era broader than chat by tying it to DeepMind, AlphaFold, and long-horizon general AI research.",
    story:
      "He helps the site teach that the public era includes scientific discovery, model architecture, and institution-building alongside assistants and search.",
    officialUrl: "https://deepmind.google/about/",
    officialLabel: "Google DeepMind about",
    imageUrl: "/media/wikimedia/demis-hassabis.jpg",
    imageAlt: "Wikimedia Commons portrait of Demis Hassabis.",
    sourceRecord: "docs/content/media/records/demis-hassabis-portrait.md",
  },
  {
    slug: "sam-altman",
    name: "Sam Altman",
    era: "Era 7",
    kind: "person",
    role: "Executive figure for public deployment and AGI framing",
    summary:
      "Altman makes deployment legible as a historical choice made by institutions rather than as an automatic consequence of model capability.",
    story:
      "His role helps teach the transition from research system to public infrastructure, with governance claims attached from the start.",
    officialUrl: "https://openai.com/about/",
    officialLabel: "OpenAI about",
    imageUrl: "/media/wikimedia/sam-altman.jpg",
    imageAlt: "Wikimedia Commons portrait of Sam Altman.",
    sourceRecord: "docs/content/media/records/sam-altman-portrait.md",
  },
  {
    slug: "dario-amodei",
    name: "Dario Amodei",
    era: "Era 7",
    kind: "person",
    role: "Safety-and-scaling leader at a frontier-model company",
    summary:
      "Amodei helps connect responsible scaling, constitutional AI, and frontier-model institution building.",
    story:
      "He matters because safety in Era 7 is not only a critique from outside the labs. It is also part of how some labs narrate themselves.",
    officialUrl: "https://www.anthropic.com/company",
    officialLabel: "Anthropic company",
    imageUrl: "/media/wikimedia/dario-amodei.jpg",
    imageAlt: "Wikimedia Commons portrait of Dario Amodei.",
    sourceRecord: "docs/content/media/records/dario-amodei-portrait.md",
  },
  {
    slug: "eliezer-yudkowsky",
    name: "Eliezer Yudkowsky",
    era: "Era 7",
    kind: "person",
    role: "Pre-LLM alignment and existential-risk figure",
    summary:
      "Yudkowsky keeps the current era tied to older alignment and instrumental-convergence arguments that still shape safety vocabulary.",
    story:
      "He helps show that the safety thread did not begin with ChatGPT. It arrives with its own institutions, research agenda, and public rhetoric.",
    officialUrl: "https://intelligence.org/people/eliezer-yudkowsky/",
    officialLabel: "MIRI profile",
    imageUrl: "/media/wikimedia/eliezer-yudkowsky.jpg",
    imageAlt: "Wikimedia Commons portrait of Eliezer Yudkowsky.",
    sourceRecord: "docs/content/media/records/eliezer-yudkowsky-portrait.md",
  },
];

export const institutionProfiles: NarrativeProfile[] = [
  {
    slug: "openai",
    name: "OpenAI",
    era: "Era 7",
    kind: "institution",
    role: "Research-and-deployment institution behind the public AI turn",
    summary:
      "OpenAI matters because it turns frontier-model capability into mass public interface and product infrastructure.",
    story:
      "This is one of the clearest cases where deployment itself becomes a historical fact, not merely a technical consequence.",
    officialUrl: "https://openai.com/about/",
    officialLabel: "OpenAI about",
    imageUrl: "/media/generated/openai-public-ai.png",
    imageAlt:
      "Illustration of a modern AI research office at dusk representing the public AI deployment era.",
    socialLinks: [
      { label: "X", href: "https://x.com/OpenAI" },
      { label: "YouTube", href: "https://www.youtube.com/OpenAI" },
      { label: "LinkedIn", href: "https://www.linkedin.com/company/openai" },
      { label: "GitHub", href: "https://github.com/openai" },
      { label: "Instagram", href: "https://www.instagram.com/openai/" },
    ],
    sourceRecord: "docs/content/media/records/openai-institution-image.md",
  },
  {
    slug: "google-deepmind",
    name: "Google DeepMind",
    era: "Era 7",
    kind: "institution",
    role: "Science, models, and responsibility at frontier scale",
    summary:
      "Google DeepMind keeps the modern story broader than chat by foregrounding AlphaFold, Gemini, and the Brain/DeepMind merger.",
    story:
      "It gives the site a way to teach the current era through science, infrastructure, and institutional continuity as well as through assistants.",
    officialUrl: "https://deepmind.google/about/",
    officialLabel: "Google DeepMind about",
    imageUrl:
      "https://lh3.googleusercontent.com/IKFFuhFkZzhLkWnElU90rLqcyTzNc0awe-ivw6S1nt9tVovfLLE4e4dlESx3p06fJPAz-rUUPLmB9VuBX_UV1h9C-AwRY6uBSErjz2gVhuGXed1jxg=w1200-h630-n-nu-rw",
    imageAlt: "Google DeepMind official about-page social image.",
    socialLinks: [
      { label: "X", href: "https://x.com/googledeepmind" },
      {
        label: "Instagram",
        href: "https://www.instagram.com/googledeepmind",
      },
      { label: "YouTube", href: "https://www.youtube.com/@googledeepmind" },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/company/googledeepmind/",
      },
      { label: "GitHub", href: "https://github.com/google-deepmind" },
    ],
    sourceRecord:
      "docs/content/media/records/google-deepmind-institution-image.md",
  },
  {
    slug: "anthropic",
    name: "Anthropic",
    era: "Era 7",
    kind: "institution",
    role: "Safety-first frontier-model company",
    summary:
      "Anthropic matters because reliability, interpretability, and steerability are part of the company narrative, not only part of the critique around it.",
    story:
      "It helps the site teach that safety becomes organizational posture as well as technical work during the public foundation-model era.",
    officialUrl: "https://www.anthropic.com/company",
    officialLabel: "Anthropic company",
    imageUrl:
      "https://cdn.prod.website-files.com/67ce28cfec624e2b733f8a52/68309ab48369f7ad9b4a40e1_open-graph.jpg",
    imageAlt: "Anthropic official company social image.",
    socialLinks: [
      { label: "X", href: "https://x.com/AnthropicAI" },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/company/anthropicresearch",
      },
      { label: "YouTube", href: "https://www.youtube.com/@anthropic-ai" },
    ],
    sourceRecord: "docs/content/media/records/anthropic-institution-image.md",
  },
];

export const historicalAnchors: HistoricalAnchor[] = [
  {
    slug: "dartmouth-proposal",
    era: "Era 2",
    title: "Dartmouth proposal and naming moment",
    summary:
      "This is the clearest historical object for teaching Dartmouth as field formation rather than sudden invention.",
    officialUrl:
      "https://home.dartmouth.edu/about/artificial-intelligence-ai-coined-dartmouth",
    officialLabel: "Dartmouth history page",
    imageUrl: "/media/generated/dartmouth-proposal.png",
    imageAlt:
      "Illustration of the 1956 Dartmouth Summer Research Project where AI was named as a field.",
    sourceRecord: "docs/content/media/records/dartmouth-proposal-image.md",
  },
  {
    slug: "shannon-theseus",
    era: "Era 2",
    title: "Claude Shannon and the Theseus machine story",
    summary:
      "Shannon belongs here as an engineer and builder, not only as an abstract theorist. The machine story helps teach the logic-to-machinery bridge.",
    officialUrl:
      "http://belllabs-site-claude-shannon.s3-website-us-east-1.amazonaws.com/",
    officialLabel: "Bell Labs historical material",
    imageUrl: "/media/wikimedia/claude-shannon.jpg",
    imageAlt: "Wikimedia Commons portrait of Claude Shannon.",
    sourceRecord: "docs/content/media/records/shannon-theseus-image.md",
  },
  {
    slug: "lovelace-analytical-engine",
    era: "Era 1",
    title: "Lovelace and the Analytical Engine",
    summary:
      "This source keeps the precursor story grounded in a real historical text rather than in a vague prehistory of AI.",
    officialUrl: "https://www.fourmilab.ch/babbage/sketch.html",
    officialLabel: "Lovelace and Menabrea notes",
    imageUrl: "/media/wikimedia/ada-lovelace.jpg",
    imageAlt: "Wikimedia Commons portrait of Ada Lovelace.",
    sourceRecord:
      "docs/content/media/records/lovelace-analytical-engine-story-card.md",
  },
  {
    slug: "boole-to-turing",
    era: "Era 1",
    title: "Boole to Turing logical runway",
    summary:
      "The point of this anchor is the handoff: symbolic logic becomes the runway for computability rather than remaining a disconnected precursor anecdote.",
    officialUrl: "https://archive.org/details/investigationofl00bool",
    officialLabel: "Boole source archive",
    imageUrl: "/media/wikimedia/george-boole.jpg",
    imageAlt: "Wikimedia Commons portrait of George Boole.",
    sourceRecord: "docs/content/media/records/boole-to-turing-story-card.md",
  },
];
