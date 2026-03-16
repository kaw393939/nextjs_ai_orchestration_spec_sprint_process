import type { Metadata } from "next";

import {
  ChapterHero,
  ChapterSection,
  EditorialAside,
  TransitionBlock,
} from "@/components/content/chapter";
import { GuideCallout } from "@/components/content/guide-callout";
import { FocalImage } from "@/components/media/focal-image";
import { EmbeddingsNeighborhoodDiagram } from "@/components/content/visualizations/embeddings-neighborhood-diagram";

const mathCards = [
  {
    title: "Vectors are learned coordinates",
    expression: "embedding = [0.12, -0.40, 0.91, ...]",
    explanation:
      "A model can represent a token, sentence, document, or image patch as a dense list of numbers. The useful meaning comes from the pattern across the list, not from one number in isolation.",
  },
  {
    title: "Similarity is a geometric comparison",
    expression: "cos(theta) = dot(a, b) / (|a| |b|)",
    explanation:
      "If two vectors point in similar directions, they usually represent related items. That is the intuition behind semantic similarity and nearest-neighbor retrieval.",
  },
  {
    title: "Latent space names the neighborhood story",
    expression: "nearer vectors -> more similar uses or meanings",
    explanation:
      "Latent space is a teaching label for the learned internal structure that lets models cluster related patterns and move between nearby regions.",
  },
];

const pipelineSteps = [
  {
    title: "1. Start with tokens or chunks",
    detail:
      "Words, subwords, documents, or image pieces become the units the model can encode.",
  },
  {
    title: "2. Turn them into dense representations",
    detail:
      "The system maps each unit into learned coordinates so relationships become computable.",
  },
  {
    title: "3. Compare neighborhoods and context",
    detail:
      "Attention, similarity search, and later layers use those learned representations to decide what matters together.",
  },
  {
    title: "4. Use that structure for retrieval or prediction",
    detail:
      "The model can rank nearby documents, incorporate relevant context, or predict the next token from transformed internal states.",
  },
];

const historicalAnchors = [
  {
    period: "Era 5",
    title: "Representation learning becomes the real bridge",
    detail:
      "Backpropagation and neural language models make learned distributed representations central instead of treating them as side effects.",
  },
  {
    period: "Era 6",
    title: "Transformers make contextual representations dominant",
    detail:
      "Attention-based models strengthen the idea that context changes how each token should be represented and used.",
  },
  {
    period: "Era 7",
    title: "Embeddings become infrastructure",
    detail:
      "Vector search, retrieval, recommendation, and assistant pipelines make embeddings visible as part of everyday AI systems.",
  },
];

export const metadata: Metadata = {
  title: "Embeddings, Latent Space, And The Minimum LLM Math",
  description:
    "A plain-language guide to vectors, similarity, latent space, and the minimum math needed to understand why embeddings matter in modern AI.",
};

export default function EmbeddingsLatentSpaceAndLlmMathPage() {
  return (
    <main className="page-shell exemplar-shell">
      <article className="hero-panel exemplar-panel chapter-theme chapter-theme--guide">
        <ChapterHero
          eyebrow="Companion math guide"
          period="Math guide"
          title="Embeddings, Latent Space, And The Minimum LLM Math"
          lede="This page is the shortest useful math bridge for the modern AI era. It explains why vectors, similarity, and learned internal structure matter without pretending readers need a full course before the history makes sense."
          scene="Use this after Era 5 and before the most technical parts of Era 6 or Era 7. The goal is to give just enough geometry and vocabulary to make retrieval, embeddings, and LLM behavior less mysterious."
          backHref="/"
          backLabel="Back to overview"
          links={[
            {
              href: "/eras/statistical-learning-and-network-revival",
              label: "Back to Era 5",
            },
            {
              href: "/eras/foundation-models-and-generative-ai",
              label: "See Era 7",
            },
            {
              href: "/reading-maps/intellectual-lineage",
              label: "Read the key papers map",
            },
          ]}
        >
          <div className="prose-block">
            <p>
              The guide is intentionally modest. It exists to explain the few
              ideas that do most of the work in the modern stack, not to turn
              the site into a full linear algebra course.
            </p>
          </div>
          <EditorialAside
            label="Teaching Goal"
            title="Understanding the geometry improves the history"
          >
            <p>
              Once readers understand vectors, similarity, and latent structure,
              Era 5 through Era 7 feel like a continuous representational story
              rather than a pile of modern jargon.
            </p>
          </EditorialAside>
        </ChapterHero>

        <GuideCallout
          variant="why-it-matters"
          title="Embeddings are coordinates, not hidden meanings"
        >
          <p>
            The first mistake to avoid is thinking an embedding is a secret
            symbolic definition stored inside the model. It is better understood
            as a learned coordinate system that makes similarity and retrieval
            computationally useful.
          </p>
        </GuideCallout>

        <ChapterSection
          id="math-bridge-core"
          eyebrow="Minimum Math"
          title="Three ideas do most of the work"
        >
          <div className="content-grid content-grid--dense">
            {mathCards.map((card) => (
              <article key={card.title} className="content-card equation-card">
                <h3>{card.title}</h3>
                <p className="equation-line">{card.expression}</p>
                <p>{card.explanation}</p>
              </article>
            ))}
          </div>
        </ChapterSection>

        <GuideCallout
          variant="misconception-watch"
          title="Latent space is a teaching map, not a literal atlas"
        >
          <p>
            Different model families do not all share one identical internal
            geography. The phrase helps readers reason about proximity,
            clustering, and transformation in learned representations, but it
            should not be mistaken for a single photographed landscape inside a
            model.
          </p>
        </GuideCallout>

        <ChapterSection
          id="math-bridge-pipeline"
          eyebrow="Pipeline"
          title="From tokens to retrieval and prediction"
        >
          <ol className="timeline-list">
            {pipelineSteps.map((step) => (
              <li key={step.title} className="timeline-card">
                <h3>{step.title}</h3>
                <p>{step.detail}</p>
              </li>
            ))}
          </ol>
        </ChapterSection>

        <ChapterSection
          id="math-bridge-example"
          eyebrow="Worked Example"
          title="One modern workflow from question to model response"
        >
          <div className="content-grid content-grid--dense">
            <article className="content-card">
              <h3>1. A user asks a question</h3>
              <p>
                Start with a natural-language query such as asking for the
                causes of the first AI winter.
              </p>
            </article>
            <article className="content-card">
              <h3>2. The system embeds the query</h3>
              <p>
                The question becomes a dense vector so it can be compared with
                document chunks that live nearby in semantic space.
              </p>
            </article>
            <article className="content-card">
              <h3>3. Retrieval pulls the nearest context</h3>
              <p>
                A vector index finds passages about expert systems, Lighthill,
                and funding pressure instead of relying on exact keyword match.
              </p>
            </article>
            <article className="content-card">
              <h3>4. The model answers with that context in view</h3>
              <p>
                The response becomes more historically grounded because the LLM
                now works with retrieved evidence rather than memory alone.
              </p>
              <p className="artifact-note">
                This is why{" "}
                <a href="/eras/statistical-learning-and-network-revival">
                  Era 5
                </a>{" "}
                and{" "}
                <a href="/eras/foundation-models-and-generative-ai">Era 7</a>{" "}
                belong on the same representational line.
              </p>
            </article>
          </div>
        </ChapterSection>

        <ChapterSection
          id="math-bridge-visual"
          eyebrow="Visual Bridge"
          title="See the neighborhood story instead of only reading it"
        >
          <div className="visualization-grid">
            <EmbeddingsNeighborhoodDiagram />
            <figure className="visualization-card">
              <FocalImage
                src="/media/generated/latent-space-landscape-v1.webp"
                alt="Conceptual latent-space landscape illustration showing warm clustered semantic neighborhoods"
                width={1536}
                height={1024}
                sizes="(max-width: 900px) 100vw, 48rem"
                className="visualization-image"
              />
              <figcaption className="visualization-caption">
                Conceptual generated image, not documentary evidence. It exists
                to give first-time readers a spatial intuition for latent space
                before the more literal retrieval diagram does the tighter
                teaching work.
              </figcaption>
            </figure>
          </div>
        </ChapterSection>

        <ChapterSection
          id="math-bridge-history"
          eyebrow="Historical Continuity"
          title="Why this math belongs inside the history"
          prose
        >
          <div className="content-grid">
            {historicalAnchors.map((anchor) => (
              <article key={anchor.period} className="content-card">
                <p className="content-card__meta">{anchor.period}</p>
                <h3>{anchor.title}</h3>
                <p>{anchor.detail}</p>
              </article>
            ))}
          </div>
          <div className="prose-block">
            <p>
              The modern period feels less mysterious once readers see that
              embeddings are the continuation of a long move toward learned
              representations. Era 5 makes that move technically credible, Era 6
              makes it dominant, and Era 7 turns it into infrastructure that
              powers retrieval, assistants, and multimodal systems.
            </p>
            <p>
              That still leaves an important limit. Explaining vectors and
              similarity does not mean we have a complete mechanistic account of
              every behavior inside a large language model. The math bridge is
              meant to improve understanding, not to erase the interpretability
              gap discussed elsewhere in the site.
            </p>
          </div>
        </ChapterSection>

        <TransitionBlock
          eyebrow="Back To The Story"
          title="Use the guide to re-enter the chronology with clearer technical footing"
          description="The guide is meant to support the era pages, not replace them. Once the geometry feels clearer, the public AI chapter and the reading map become much easier to read."
          href="/eras/foundation-models-and-generative-ai"
          linkLabel="Return to Era 7"
        />
      </article>
    </main>
  );
}
