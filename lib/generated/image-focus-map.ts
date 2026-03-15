export type ImageFocusData = {
  objectPosition: string;
  width: number;
  height: number;
  aspectRatio: number;
  orientation: "portrait" | "landscape" | "square";
  sourceKind: "local" | "remote";
  suggestedFit: "cover" | "contain";
};

export const imageFocusMap: Record<string, ImageFocusData> = {
  "/media/generated/dartmouth-proposal.png": {
    aspectRatio: 1.5,
    height: 1024,
    objectPosition: "48.6% 50.0%",
    orientation: "landscape",
    sourceKind: "local",
    suggestedFit: "cover",
    width: 1536,
  },
  "/media/generated/latent-space-landscape-v1.png": {
    aspectRatio: 1.5,
    height: 1024,
    objectPosition: "48.6% 50.0%",
    orientation: "landscape",
    sourceKind: "local",
    suggestedFit: "cover",
    width: 1536,
  },
  "/media/generated/openai-public-ai.png": {
    aspectRatio: 1.5,
    height: 1024,
    objectPosition: "48.6% 50.0%",
    orientation: "landscape",
    sourceKind: "local",
    suggestedFit: "cover",
    width: 1536,
  },
  "/media/wikimedia/ada-lovelace.jpg": {
    aspectRatio: 0.7721,
    height: 1400,
    objectPosition: "50.0% 33.6%",
    orientation: "portrait",
    sourceKind: "local",
    suggestedFit: "cover",
    width: 1081,
  },
  "/media/wikimedia/andrej-karpathy.jpg": {
    aspectRatio: 0.7364,
    height: 1400,
    objectPosition: "50.0% 32.0%",
    orientation: "portrait",
    sourceKind: "local",
    suggestedFit: "cover",
    width: 1031,
  },
  "/media/wikimedia/claude-shannon.jpg": {
    aspectRatio: 0.8,
    height: 1400,
    objectPosition: "50.0% 32.5%",
    orientation: "portrait",
    sourceKind: "local",
    suggestedFit: "cover",
    width: 1120,
  },
  "/media/wikimedia/dario-amodei.jpg": {
    aspectRatio: 0.7729,
    height: 1400,
    objectPosition: "50.0% 33.6%",
    orientation: "portrait",
    sourceKind: "local",
    suggestedFit: "cover",
    width: 1082,
  },
  "/media/wikimedia/demis-hassabis.jpg": {
    aspectRatio: 0.75,
    height: 1400,
    objectPosition: "50.0% 32.6%",
    orientation: "portrait",
    sourceKind: "local",
    suggestedFit: "cover",
    width: 1050,
  },
  "/media/wikimedia/eliezer-yudkowsky.jpg": {
    aspectRatio: 1,
    height: 1400,
    objectPosition: "50.0% 37.5%",
    orientation: "square",
    sourceKind: "local",
    suggestedFit: "cover",
    width: 1400,
  },
  "/media/wikimedia/george-boole.jpg": {
    aspectRatio: 0.745,
    height: 1400,
    objectPosition: "50.0% 32.4%",
    orientation: "portrait",
    sourceKind: "local",
    suggestedFit: "cover",
    width: 1043,
  },
  "/media/wikimedia/ilya-sutskever.jpg": {
    aspectRatio: 0.6686,
    height: 1400,
    objectPosition: "49.9% 29.7%",
    orientation: "portrait",
    sourceKind: "local",
    suggestedFit: "cover",
    width: 936,
  },
  "/media/wikimedia/sam-altman.jpg": {
    aspectRatio: 0.7557,
    height: 1400,
    objectPosition: "50.0% 32.9%",
    orientation: "portrait",
    sourceKind: "local",
    suggestedFit: "cover",
    width: 1058,
  },
  "https://cdn.prod.website-files.com/67ce28cfec624e2b733f8a52/68309ab48369f7ad9b4a40e1_open-graph.jpg":
    {
      aspectRatio: 1.9048,
      height: 1260,
      objectPosition: "49.7% 50.0%",
      orientation: "landscape",
      sourceKind: "remote",
      suggestedFit: "contain",
      width: 2400,
    },
  "https://lh3.googleusercontent.com/IKFFuhFkZzhLkWnElU90rLqcyTzNc0awe-ivw6S1nt9tVovfLLE4e4dlESx3p06fJPAz-rUUPLmB9VuBX_UV1h9C-AwRY6uBSErjz2gVhuGXed1jxg=w1200-h630-n-nu-rw":
    {
      aspectRatio: 1.9048,
      height: 630,
      objectPosition: "49.8% 50.0%",
      orientation: "landscape",
      sourceKind: "remote",
      suggestedFit: "cover",
      width: 1200,
    },
};
