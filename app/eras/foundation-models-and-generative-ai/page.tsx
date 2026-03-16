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
import {
  historicalAnchors,
  institutionProfiles,
  peopleProfiles,
} from "@/lib/narrative-data";

const milestoneItems = [
  {
    year: "2020",
    title: "GPT-3 makes scale look like a new interface to capability",
    detail:
      "Very large transformer language models show strong few-shot behavior, changing expectations about what one pretrained system might do across tasks.",
  },
  {
    year: "2020",
    title: "AlphaFold broadens the era beyond chat",
    detail:
      "Modern AI is also shown as a tool for scientific discovery, not only a public language interface.",
  },
  {
    year: "2022",
    title: "ChatGPT makes foundation-model deployment public",
    detail:
      "Conversational AI becomes a daily experience for ordinary users, bringing education, labor, trust, and governance questions to the front.",
  },
  {
    year: "2023-2024",
    title:
      "Embeddings, retrieval, and multimodal systems become normal infrastructure",
    detail:
      "Modern AI stacks increasingly combine dense vector search, language models, and cross-media inputs rather than treating each piece as a separate novelty.",
  },
  {
    year: "2025-2026",
    title: "Capability debates merge with responsibility debates",
    detail:
      "The current horizon is defined as much by reliability, labor, policy, and institutional choice as by model performance alone.",
  },
];

const peopleCards = [
  {
    name: "Ilya Sutskever",
    summary:
      "Sutskever makes the research lineage from Hinton-era deep learning through Google Brain and OpenAI legible inside the foundation-model story.",
    links: ["transformers", "large language models"],
  },
  {
    name: "Demis Hassabis",
    summary:
      "Hassabis keeps the current era broader than public chat by tying modern AI to DeepMind, AlphaFold, and the pursuit of general systems.",
    links: ["multimodality", "scientific discovery"],
  },
  {
    name: "Andrej Karpathy",
    summary:
      "Karpathy helps explain the era's public technical culture by linking OpenAI's model work to widely used teaching and explanation around how LLM systems are built.",
    links: ["large language models", "public understanding"],
  },
  {
    name: "Sam Altman",
    summary:
      "Altman makes the deployment era legible by tying frontier-model progress to mass public interfaces, infrastructure expansion, and explicit AGI governance claims.",
    links: ["public deployment", "institutional strategy"],
  },
  {
    name: "Dario Amodei",
    summary:
      "Amodei anchors the safety-first institutional path of Era 7 by linking frontier-model scaling to reliability, interpretability, and responsible-scaling language.",
    links: ["AI safety", "responsible scaling"],
  },
  {
    name: "Eliezer Yudkowsky",
    summary:
      "Yudkowsky keeps the current era connected to the pre-LLM alignment tradition that shaped paperclip, instrumental-convergence, and existential-risk arguments.",
    links: ["instrumental convergence", "alignment"],
  },
];

const conceptCards = [
  {
    title: "Foundation models",
    summary:
      "The decisive modern shift is that one pretrained model can support many downstream tasks, products, and interfaces.",
  },
  {
    title: "Large language models",
    summary:
      "LLMs turn transformer scaling into the public face of modern AI, especially once conversational deployment reaches ordinary users.",
  },
  {
    title: "Vector embeddings",
    summary:
      "Dense vectors make semantic similarity and retrieval practical enough to become part of everyday AI infrastructure.",
  },
  {
    title: "Latent space",
    summary:
      "Latent space gives a plain-language way to explain how modern systems organize internal structure without relying on handwritten symbolic rules.",
  },
  {
    title: "Multimodality",
    summary:
      "The current era increasingly links text, images, audio, video, and action rather than treating them as separate AI subfields.",
  },
  {
    title: "Mechanistic interpretability",
    summary:
      "Modern labs can deploy strong LLMs before they can fully reverse engineer the internal circuits producing those behaviors.",
  },
  {
    title: "Instrumental convergence",
    summary:
      "The paperclip-maximizer lineage matters because it argues that many goals can push powerful systems toward similar power-seeking subgoals.",
  },
];

const featuredPeople = peopleProfiles.filter((p) => p.era === "Era 7");
const featuredInstitutions = institutionProfiles.filter(
  (i) => i.era === "Era 7"
);
const era7Anchors = historicalAnchors.filter((a) => a.era === "Era 7");

export const metadata: Metadata = {
  title: "Foundation Models And Generative AI",
  description:
    "Era 7 of the AI history site, covering foundation models, large language models, embeddings, latent space, multimodality, and the public AI period through 2026.",
};

export default function FoundationModelsAndGenerativeAiPage() {
  return (
    <article className="hero-panel exemplar-panel chapter-theme chapter-theme--foundation">
      <ChapterHero
        eyebrow="Era 7"
        period="Era 7, 2020-2026"
        title="Foundation Models And Generative AI"
        lede="The current era begins when transformer-based systems become reusable foundation models, large language models move into public life, and embeddings, multimodality, and deployment debates reshape what AI means in work, education, search, and science."
        scene="This final chapter of the current chronology is not an endless present. It is a bounded historical period in which pretrained transformer systems become public infrastructure while debates about reliability, labor, governance, and understanding move to the center of the story."
        backHref="/"
        backLabel="Back to overview"
        links={[
          {
            href: "/eras/deep-learning-breakthroughs",
            label: "Back to Era 6: Deep Learning Breakthroughs",
          },
          {
            href: "/people-and-institutions",
            label: "Browse people and institutions",
          },
        ]}
      >
        <div className="prose-block">
          <p>
            The chapter works when it is read as synthesis: architecture,
            infrastructure, retrieval, multimodality, public deployment, and
            safety all converge on the same surface.
          </p>
        </div>
        <EditorialAside
          label="Synthesis"
          title="This is the first chapter where capability and responsibility debates fully merge"
          tone="contrast"
        >
          <p>
            That merger is what makes Era 7 feel historically different from a
            simple continuation of benchmark progress.
          </p>
        </EditorialAside>
      </ChapterHero>

      <GuideCallout
        variant="why-it-matters"
        title="LLM fluency is not the same thing as settled understanding"
      >
        <p>
          Modern systems can sound authoritative, helpful, and impressively
          general. That does not mean historians or engineers should treat
          fluent output as proof that the underlying problem of machine
          understanding is solved. Era 7 is partly about how public deployment
          made that distinction much harder to ignore.
        </p>
      </GuideCallout>

      <ChapterSection
        id="era-7-reading-lanes"
        eyebrow="Reading Lanes"
        title="Choose the lane that matches what you need from the modern era"
      >
        <div className="content-grid content-grid--dense">
          <article className="content-card">
            <h3>Public deployment</h3>
            <p>
              Start here if your question is how models became part of work,
              education, search, and everyday public interfaces.
            </p>
            <p className="artifact-note">
              <a href="#era-7-chronology">Start with chronology</a>
            </p>
          </article>
          <article className="content-card">
            <h3>Technical stack</h3>
            <p>
              Use this lane if you want embeddings, retrieval, multimodality,
              and transformers to stay connected as one system story.
            </p>
            <p className="artifact-note">
              <a href="#era-7-concepts">Go to concepts</a>
            </p>
          </article>
          <article className="content-card">
            <h3>Safety and governance</h3>
            <p>
              Follow this lane if reliability, institutional posture, and
              alignment debates are the reason you are on the page.
            </p>
            <p className="artifact-note">
              <a href="#era-7-institutions">Go to institutions</a>
            </p>
          </article>
        </div>
      </ChapterSection>

      <ChapterSection
        id="era-7-chronology"
        eyebrow="Chronology"
        title="Five anchor points"
      >
        <ol className="timeline-list">
          {milestoneItems.map((item) => (
            <li key={`${item.year}-${item.title}`} className="timeline-card">
              <p className="timeline-year">{item.year}</p>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </li>
          ))}
        </ol>
      </ChapterSection>

      <PullQuote
        quote="Foundation models become historical when one pretrained system stops being a single demonstration and starts acting like reusable public infrastructure."
        attribution="Era 7 framing"
      />

      <ChapterSection
        id="era-7-narrative"
        eyebrow="Core Narrative"
        title="Why modern AI becomes public and infrastructural"
        prose
      >
        <div className="chapter-split">
          <div className="prose-block">
            <p>
              Era 7 is not best understood as a generic victory lap for bigger
              models. The stronger historical claim is that pretrained
              transformer systems become reusable bases for many downstream
              tasks, which turns a research architecture into a platform model.
              That is why the concept of a foundation model matters more than a
              simple list of brand names.
            </p>
            <p>
              Public deployment changes the era just as much as scaling does.
              Once conversational systems, coding tools, retrieval pipelines,
              and multimodal assistants enter ordinary workflows, debates over
              trust, labor, governance, and educational use move from the edge
              of AI history into the center of it. This repository therefore
              teaches the current period through its 2026 horizon, not as an
              unlimited present.
            </p>
          </div>
          <EditorialAside
            label="System View"
            title="Think of Era 7 as one stack, not a list of disconnected novelties"
          >
            <p>
              Transformers make LLMs possible, embeddings support retrieval,
              latent space explains learned internal structure, multimodality
              extends that structure across media, and deployment turns the
              whole system into public infrastructure.
            </p>
          </EditorialAside>
        </div>
      </ChapterSection>

      <ChapterSection
        id="era-7-people"
        eyebrow="Linked People"
        title="Who makes the modern turn legible"
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

      <ChapterSection
        id="era-7-documentary-visuals"
        eyebrow="Documentary Visuals"
        title="Portraits and institutions in the public AI era"
      >
        <p className="artifact-note">
          These profiles keep the period tied to identifiable people and
          institutions instead of letting the modern stack dissolve into product
          names and abstractions. Images and official links serve the history
          here because they attach claims to real actors, labs, and
          public-facing organizations.
        </p>
        <div className="documentary-grid">
          {featuredPeople.map((person) => (
            <NarrativeCard
              key={person.slug}
              title={person.name}
              subtitle={person.role}
              summary={person.summary}
              story={person.story}
              officialLink={{
                href: person.officialUrl,
                label: person.officialLabel,
              }}
              sourceRecord={person.sourceRecord}
              imageUrl={person.imageUrl}
              imageAlt={person.imageAlt}
              socialLinks={person.socialLinks}
              className="narrative-card--person"
            />
          ))}
        </div>
        <div className="documentary-grid">
          {featuredInstitutions.map((institution) => (
            <NarrativeCard
              key={institution.slug}
              title={institution.name}
              subtitle={institution.role}
              summary={institution.summary}
              story={institution.story}
              officialLink={{
                href: institution.officialUrl,
                label: institution.officialLabel,
              }}
              sourceRecord={institution.sourceRecord}
              imageUrl={institution.imageUrl}
              imageAlt={institution.imageAlt}
              socialLinks={institution.socialLinks}
              className="narrative-card--institution"
              imageFit={institution.slug === "openai" ? "cover" : "contain"}
            />
          ))}
        </div>
      </ChapterSection>

      <GuideCallout
        variant="why-it-matters"
        title="Embeddings and latent space are the modern bridge from data to meaning"
      >
        <p>
          In plain language, embeddings let systems turn words, documents,
          images, or other items into dense vectors so similar things can be
          found near each other. Latent space is the teaching idea that names
          this internal representational neighborhood. That is why retrieval and
          semantic similarity matter so much in modern AI stacks. If this is the
          point where the chapter becomes too technical, step into the{" "}
          <a href="/guides/embeddings-latent-space-and-llm-math">
            math bridge guide
          </a>{" "}
          and then come back.
        </p>
      </GuideCallout>

      <GuideCallout
        variant="why-it-matters"
        title="Why researchers still say we do not fully understand how LLMs work"
      >
        <p>
          Modern LLMs are not mysterious in every sense. Researchers know a
          great deal about their training setup, scaling behavior, and many
          regularities in what they can do. But that is not the same as a clean
          mechanistic account of the internal circuits producing each behavior.
          Era 7 therefore includes a real interpretability gap: systems are
          useful and deployable before they are deeply understood.
        </p>
      </GuideCallout>

      <ChapterSection
        id="era-7-concepts"
        eyebrow="Linked Concepts"
        title="The ideas that define the current horizon"
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
          The modern stack is easiest to teach as continuity rather than
          rupture: transformers make LLMs possible, embeddings support
          retrieval, latent space explains learned internal structure, and
          multimodality expands the same representation story across media.
          Mechanistic interpretability explains why that same stack is still
          only partly transparent, while instrumental convergence explains why
          the paperclip-maximizer thought experiment remains part of current
          safety vocabulary.
        </p>
      </ChapterSection>

      <ChapterSection
        id="era-7-institutions"
        eyebrow="Institutions And Turning Point"
        title="Deployment choices become historical facts"
      >
        <div className="institution-grid">
          <article className="content-card">
            <h3>OpenAI</h3>
            <p>
              OpenAI helps define Era 7 because it turns large language models
              into a widely used public interface and makes iterative deployment
              part of the modern AI story.
            </p>
          </article>
          <article className="content-card">
            <h3>DeepMind</h3>
            <p>
              DeepMind keeps the current era broader than chat by tying modern
              AI to AlphaFold, scientific discovery, multimodal work, and the
              institutional merger that becomes Google DeepMind.
            </p>
          </article>
          <article className="content-card">
            <h3>Anthropic</h3>
            <p>
              Anthropic gives Era 7 a distinct safety-and-interpretability
              institution, where reliability, steerability, and responsible
              scaling are treated as central parts of frontier-model work.
            </p>
          </article>
          <article className="content-card">
            <h3>Foundation model deployment and public use</h3>
            <p>
              The real turning point is not only stronger models. It is the
              decision to place them into public workflows, where capability
              claims immediately collide with questions of trust, education,
              labor, and governance.
            </p>
          </article>
        </div>
      </ChapterSection>

      <ChapterSection
        id="era-7-source-anchors"
        eyebrow="Source Anchors"
        title="The architecture paper that made this era possible"
      >
        <div className="documentary-grid documentary-grid--anchors">
          {era7Anchors.map((anchor) => (
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
        eyebrow="Chronology Complete"
        title="The current horizon is strongest when read back through the whole sequence"
        description="Era 7 closes the current chronology, but it makes the most sense when readers move back through the cast page, paper lineage, and earlier chapters that prepared the public AI era."
        href="/people-and-institutions"
        linkLabel="Use the cast and institutions page"
      />
    </article>
  );
}
