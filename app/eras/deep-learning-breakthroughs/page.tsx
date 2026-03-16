import type { Metadata } from "next";

import {
  ChapterHero,
  ChapterSection,
  EditorialAside,
  PullQuote,
  TransitionBlock,
} from "@/components/content/chapter";
import { GuideCallout } from "@/components/content/guide-callout";
import { NarrativeCard } from "@/components/content/narrative-card";
import { historicalAnchors, peopleProfiles } from "@/lib/narrative-data";

const era6People = peopleProfiles.filter((p) => p.era === "Era 6");
const era6Anchors = historicalAnchors.filter((a) => a.era === "Era 6");

const milestoneItems = [
  {
    year: "2012",
    title: "Deep networks transform benchmark expectations",
    detail:
      "Image-recognition breakthroughs make deep learning look like the field's strongest performance story rather than a niche approach.",
  },
  {
    year: "2012-2015",
    title: "Speech and vision systems improve at scale",
    detail:
      "Large datasets, GPUs, and layered models produce gains that reshape research and product priorities.",
  },
  {
    year: "2015",
    title: "Deep learning is consolidated as a field-defining frame",
    detail:
      "The LeCun-Bengio-Hinton review gives the era a durable language of multiple learned levels of abstraction.",
  },
  {
    year: "2017",
    title: "Attention Is All You Need introduces the transformer",
    detail:
      "Sequence modeling is reorganized around attention and parallelizable training rather than older recurrent defaults.",
  },
  {
    year: "2018-2019",
    title: "Transformers become the runway to foundation models",
    detail:
      "Language and representation work start pointing directly toward the next era of large-scale generative systems.",
  },
];

const peopleCards = [
  {
    name: "Geoffrey Hinton",
    summary:
      "Hinton remains central because the deep-learning era depends on work that kept multi-layer neural learning alive long enough to scale.",
    links: ["deep learning", "network revival"],
  },
  {
    name: "Yann LeCun",
    summary:
      "LeCun helps make the era legible through concrete vision and representation-learning gains rather than only abstract architectural talk.",
    links: ["representation learning", "vision systems"],
  },
  {
    name: "Yoshua Bengio",
    summary:
      "Bengio gives the era its clearest conceptual language for deep models that learn multiple useful levels of abstraction.",
    links: ["representation learning", "deep architectures"],
  },
];

const conceptCards = [
  {
    title: "Representation learning",
    summary:
      "Models increasingly learn useful features for themselves rather than depending on people to hand-engineer every important input.",
  },
  {
    title: "Deep learning",
    summary:
      "The decisive change is layered learning at scale, not merely the existence of neural networks in the abstract.",
  },
  {
    title: "Transformers",
    summary:
      "Attention-centered architectures make sequence modeling more parallel, more scalable, and historically decisive for the next era.",
  },
  {
    title: "Scale",
    summary:
      "Data, compute, and training regimes become part of the explanation for why the era's models outperform earlier alternatives.",
  },
];

export const metadata: Metadata = {
  title: "Deep Learning Breakthroughs",
  description:
    "Era 6 of the AI history site, covering representation learning, deep learning, the transformer shift, and the runway into foundation models.",
};

export default function DeepLearningBreakthroughsPage() {
  return (
    <article className="hero-panel exemplar-panel chapter-theme chapter-theme--breakthrough">
      <ChapterHero
        eyebrow="Era 6"
        period="Era 6, 2012-2019"
        title="Deep Learning Breakthroughs"
        lede="Deep learning becomes the field's dominant performance regime in this era. Learned multi-layer representations, large-scale training, and finally transformers reshape what AI systems can do in vision, speech, and language."
        scene="This chapter should feel faster than Era 5. Benchmarks move, scale becomes explanatory, and the transformer turns the runway toward foundation models into a direct line."
        backHref="/"
        backLabel="Back to overview"
        links={[
          {
            href: "/eras/statistical-learning-and-network-revival",
            label: "Back to Era 5: Statistical Learning And Network Revival",
          },
          {
            href: "/eras/foundation-models-and-generative-ai",
            label: "Continue to Era 7: Foundation Models And Generative AI",
          },
        ]}
      >
        <div className="prose-block">
          <p>
            What changes here is not only that neural networks return, but that
            layered systems, data, hardware, and training practice begin to move
            together as one dominant performance story.
          </p>
        </div>
        <EditorialAside
          label="Acceleration"
          title="Scale and representation become part of the explanation, not just the outcome"
        >
          <p>
            That shift is what makes the transformer runway historically
            decisive rather than technically incidental.
          </p>
        </EditorialAside>
      </ChapterHero>

      <GuideCallout
        variant="why-it-matters"
        title="Deep learning is not just neural networks again"
      >
        <p>
          Neural networks already existed before this era. What changes here is
          that layered models, larger datasets, better hardware, and improved
          training make learned representations powerful enough to dominate the
          field&apos;s benchmark and product expectations.
        </p>
      </GuideCallout>

      <ChapterSection
        id="era-6-chronology"
        eyebrow="Chronology"
        title="Five anchor points"
      >
        <ol className="timeline-list">
          {milestoneItems.map((item) => (
            <li key={item.year} className="timeline-card">
              <p className="timeline-year">{item.year}</p>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </li>
          ))}
        </ol>
      </ChapterSection>

      <PullQuote
        quote="Transformers matter because they turn scale from a performance tactic into an architectural principle that can carry the field directly into foundation models."
        attribution="Era 6 framing"
      />

      <ChapterSection
        id="era-6-narrative"
        eyebrow="Core Narrative"
        title="Why scale and representation matter here"
        prose
      >
        <div className="chapter-split">
          <div className="prose-block">
            <p>
              Era 6 should not be summarized as simple hype around larger
              models. The stronger historical claim is that deep systems
              increasingly learn intermediate structure for themselves and do so
              well enough to change the research agenda. Vision, speech, and
              language systems all start to benefit from the same general logic:
              large-scale layered models can discover useful representations
              from data rather than depending entirely on handcrafted features.
            </p>
            <p>
              The transformer is the era&apos;s decisive late turn. Attention Is
              All You Need matters because it shows that sequence models do not
              have to inherit older recurrent assumptions. Once
              attention-centered architectures prove stronger and more
              parallelizable, the field has the immediate architectural runway
              for the foundation-model and large-language-model period.
            </p>
          </div>
          <EditorialAside
            label="Runway"
            title="Transformers matter because they reorganize what scale can do"
          >
            <p>
              That is why the final handoff into Era 7 should feel immediate,
              not like a separate product story detached from research.
            </p>
          </EditorialAside>
        </div>
      </ChapterSection>

      <ChapterSection
        id="era-6-people"
        eyebrow="Linked People"
        title="Who makes the breakthrough legible"
      >
        <div className="content-grid">
          {peopleCards.map((person) => (
            <article key={person.name} className="content-card">
              <h3>{person.name}</h3>
              <p>{person.summary}</p>
              <p className="content-card__meta">
                Linked ideas: {person.links.join("; ")}
              </p>
            </article>
          ))}
        </div>
      </ChapterSection>

      <GuideCallout
        variant="why-it-matters"
        title="Transformers matter because they change the runway to LLMs"
      >
        <p>
          The transformer shift is the clearest direct bridge into the next era.
          Once attention-based models outperform older sequence designs and
          scale cleanly, the field gains the architecture that later supports
          foundation models, modern embeddings, and large language models.
        </p>
      </GuideCallout>

      <ChapterSection
        id="era-6-concepts"
        eyebrow="Linked Concepts"
        title="The ideas that define the breakthrough"
      >
        <div className="content-grid content-grid--dense">
          {conceptCards.map((concept) => (
            <article key={concept.title} className="content-card">
              <h3>{concept.title}</h3>
              <p>{concept.summary}</p>
            </article>
          ))}
        </div>
        <p className="artifact-note">
          The transformer shift is the last major hinge before foundation
          models. It makes the next era possible by turning attention and
          large-scale learned representations into the main architecture story
          for language and beyond.
        </p>
      </ChapterSection>

      <ChapterSection
        id="era-6-institutions"
        eyebrow="Institutions And Turning Point"
        title="Industrial labs and the transformer inflection"
      >
        <div className="institution-grid">
          <article className="content-card">
            <h3>Google Brain</h3>
            <p>
              Google Brain represents the era&apos;s large-scale research
              setting, where attention, compute, and deployment ambitions start
              to move together.
            </p>
          </article>
          <article className="content-card">
            <h3>Attention Is All You Need</h3>
            <p>
              The 2017 transformer paper marks the historical pivot where
              attention-centered architecture becomes the clearest direct runway
              into foundation models and large language models.
            </p>
          </article>
        </div>
      </ChapterSection>

      <ChapterSection
        id="era-6-documentary-profiles"
        eyebrow="Documentary Profiles"
        title="Portraits and source anchors for the deep learning era"
      >
        <div className="documentary-grid">
          {era6People.map((person) => (
            <NarrativeCard
              key={person.slug}
              title={person.name}
              subtitle={`${person.era} \u00b7 ${person.role}`}
              summary={person.summary}
              story={person.story}
              officialLink={{
                href: person.officialUrl,
                label: person.officialLabel,
              }}
              sourceRecord={person.sourceRecord}
              imageUrl={person.imageUrl}
              imageAlt={person.imageAlt}
              className="narrative-card--person"
            />
          ))}
        </div>
        <div className="documentary-grid documentary-grid--anchors">
          {era6Anchors.map((anchor) => (
            <NarrativeCard
              key={anchor.slug}
              title={anchor.title}
              subtitle={`${anchor.era} \u00b7 source anchor`}
              summary={anchor.summary}
              story="This anchor keeps the era tied to a named document rather than to retrospective summary alone."
              officialLink={{
                href: anchor.officialUrl,
                label: anchor.officialLabel,
              }}
              sourceRecord={anchor.sourceRecord}
              imageUrl={anchor.imageUrl}
              imageAlt={anchor.imageAlt}
              className="narrative-card--anchor"
            />
          ))}
        </div>
      </ChapterSection>

      <TransitionBlock
        eyebrow="Next Chapter"
        title="The transformer handoff becomes the public AI era"
        description="Era 7 inherits the architecture, scaling logic, and representation story of this chapter, then turns them into foundation models, assistants, multimodality, and governance debates."
        href="/eras/foundation-models-and-generative-ai"
        linkLabel="Continue to Era 7"
      />
    </article>
  );
}
