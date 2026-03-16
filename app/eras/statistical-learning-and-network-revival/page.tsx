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

const era5People = peopleProfiles.filter((p) => p.era === "Era 5");
const era5Anchors = historicalAnchors.filter((a) => a.era === "Era 5");
const era5Institutions = institutionProfiles.filter((i) => i.era === "Era 5");

const milestoneItems = [
  {
    year: "1986",
    title: "Backpropagation restores serious multi-layer learning",
    detail:
      "The neural-network story becomes credible again because training across multiple layers no longer looks purely theoretical.",
  },
  {
    year: "late 1980s-1990s",
    title: "Probabilistic reasoning and machine learning spread",
    detail:
      "Bayesian methods, statistical NLP, and benchmark-oriented learning make uncertainty and data central to AI practice.",
  },
  {
    year: "1997",
    title: "IBM Deep Blue becomes a major industrial milestone",
    detail:
      "Large-scale AI research becomes easier to teach as an institutional and engineering story, not only an academic one.",
  },
  {
    year: "2006",
    title: "Deep architectures regain momentum",
    detail:
      "Renewed work on deep models and representation learning gives neural approaches a stronger technical future.",
  },
  {
    year: "2011",
    title: "Watson reinforces data-heavy language AI",
    detail:
      "Open-domain question answering shows how ranking, evidence, and large corpora matter in modern AI systems.",
  },
];

const peopleCards = [
  {
    name: "Geoffrey Hinton",
    summary:
      "Hinton anchors the network-revival story because he helps sustain neural learning through the period when it regains serious technical credibility.",
    links: ["backpropagation revival", "deep architectures"],
  },
  {
    name: "Yann LeCun",
    summary:
      "LeCun keeps the era tied to practical learning systems, especially where neural methods begin to matter for real perception tasks.",
    links: ["neural networks", "representation learning"],
  },
  {
    name: "Yoshua Bengio",
    summary:
      "Bengio helps make the era legible as a story about learned representations, not only about faster hardware or bigger datasets.",
    links: ["representation learning", "deep learning"],
  },
];

const conceptCards = [
  {
    title: "Probabilistic learning",
    summary:
      "AI increasingly treats uncertainty, ranking, and prediction as first-class technical problems rather than side conditions.",
  },
  {
    title: "Neural networks",
    summary:
      "Networks return as a credible family of learning methods, but not yet as the single dominant story of the field.",
  },
  {
    title: "Backpropagation revival",
    summary:
      "Training across multiple layers becomes practical enough to reopen neural-network research as a serious path forward.",
  },
  {
    title: "Benchmark culture",
    summary:
      "Shared datasets and measurable performance make empirical comparison more central to AI progress claims.",
  },
];

export const metadata: Metadata = {
  title: "Statistical Learning And Network Revival",
  description:
    "Era 5 of the AI history site, covering the probabilistic turn, machine learning, neural-network revival, and the path into deep learning.",
};

export default function StatisticalLearningAndNetworkRevivalPage() {
  return (
    <article className="hero-panel exemplar-panel chapter-theme chapter-theme--statistical">
      <ChapterHero
        eyebrow="Era 5"
        period="Era 5, 1988-2011"
        title="Statistical Learning And Network Revival"
        lede="After the first AI winter, the field becomes more empirical, probabilistic, and data-driven. Statistical learning spreads through language, speech, and pattern recognition, while neural networks gain renewed credibility and set the stage for deep learning."
        scene="This chapter is the methodological turn. The field does not simply switch ideologies; it starts trusting data, uncertainty, and measurable performance in ways that make later deep learning plausible."
        backHref="/"
        backLabel="Back to overview"
        links={[
          {
            href: "/eras/knowledge-systems-critique-and-the-first-ai-winter",
            label:
              "Back to Era 4: Knowledge Systems, Critique, And The First AI Winter",
          },
          {
            href: "/eras/deep-learning-breakthroughs",
            label: "Continue to Era 6: Deep Learning Breakthroughs",
          },
        ]}
      >
        <div className="prose-block">
          <p>
            The key educational move here is comparison: what do statistical and
            learned approaches promise that hand-built symbolic systems no
            longer seem able to provide at scale?
          </p>
        </div>
        <EditorialAside
          label="Method Shift"
          title="Probability changes what counts as a good explanation of intelligence"
        >
          <p>
            Once ranking, uncertainty, and benchmark performance become normal,
            AI no longer has to look like explicit symbolic reasoning to seem
            credible.
          </p>
        </EditorialAside>
      </ChapterHero>

      <GuideCallout
        variant="why-it-matters"
        title="Statistics change what counts as progress"
      >
        <p>
          This era matters because the field stops looking for one perfect set
          of hand-built rules and gets better at learning from uncertainty,
          noisy data, and large examples. That methodological shift is the real
          bridge out of the first winter.
        </p>
      </GuideCallout>

      <ChapterSection
        id="era-5-chronology"
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
        quote="This era changes AI less by declaring a new ideology than by changing what kinds of evidence, uncertainty, and learned performance the field starts to trust."
        attribution="Era 5 framing"
      />

      <ChapterSection
        id="era-5-narrative"
        eyebrow="Core Narrative"
        title="Why the field moves toward learning"
        prose
      >
        <div className="chapter-split">
          <div className="prose-block">
            <p>
              Era 5 works best when it is taught as a change in method rather
              than a clean ideological break. The limits of hand-built symbolic
              systems make researchers more willing to trust models that learn
              from examples, rank uncertain answers, and improve through larger
              datasets and clearer benchmarks.
            </p>
            <p>
              Neural networks belong inside that same story. Backpropagation and
              later deep-architecture work matter because they reopen a line of
              research that had been weakened after earlier criticism. But the
              better historical claim is modest: this era prepares the field for
              deep learning by making data, probability, and learned features
              feel normal and increasingly powerful.
            </p>
          </div>
          <EditorialAside
            label="Compare The Methods"
            title="Hand-built rules give way to learned features and measurable prediction"
          >
            <p>
              This is why the chapter matters: it changes not only tools but the
              standards by which the field decides what counts as progress.
            </p>
          </EditorialAside>
        </div>
      </ChapterSection>

      <ChapterSection
        id="era-5-people"
        eyebrow="Linked People"
        title="Who carries the transition"
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
        variant="misconception-watch"
        title="Neural networks do not instantly take over the field here"
      >
        <p>
          The most accurate story is broader. Era 5 belongs to probability,
          statistics, corpora, benchmark culture, and revived neural methods all
          at once. Deep learning becomes dominant later, after this transition
          has already changed what AI researchers count as credible evidence.
        </p>
      </GuideCallout>

      <ChapterSection
        id="era-5-concepts"
        eyebrow="Linked Concepts"
        title="The methods that change the field"
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
          This era is the runway for deep learning rather than its full victory
          lap. By the end of Era 5, the field is primed to trust large-scale
          learning systems far more than it did during the symbolic and
          expert-systems period.
        </p>
      </ChapterSection>

      <ChapterSection
        id="era-5-institutions"
        eyebrow="Institutions And Milestones"
        title="Industrial research starts to matter differently"
      >
        <div className="institution-grid">
          <article className="content-card">
            <h3>IBM Research</h3>
            <p>
              IBM keeps the era grounded in industrial AI milestones such as
              Deep Blue and Watson, where large-scale computation, ranking, and
              language systems become part of the public story of AI again.
            </p>
          </article>
          <article className="content-card">
            <h3>Google Brain</h3>
            <p>
              Google Brain represents the changing research environment of the
              2010s, where compute, scale, and industrial labs increasingly
              shape the future of learning systems.
            </p>
          </article>
        </div>
        <p className="artifact-note">
          Era 5 ends by pointing directly toward a new question: once models can
          learn stronger internal representations from large data, what happens
          when those same systems scale further and language architectures
          change again?
        </p>
      </ChapterSection>

      <ChapterSection
        id="era-5-documentary-profiles"
        eyebrow="Documentary Profiles"
        title="Portraits, source anchors, and institutions for the revival era"
      >
        <div className="documentary-grid">
          {era5People.map((person) => (
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
          {era5Anchors.map((anchor) => (
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
        <div className="documentary-grid documentary-grid--institutions">
          {era5Institutions.map((institution) => (
            <NarrativeCard
              key={institution.slug}
              title={institution.name}
              subtitle={`${institution.era} \u00b7 ${institution.role}`}
              summary={institution.summary}
              story={institution.story}
              officialLink={{
                href: institution.officialUrl,
                label: institution.officialLabel,
              }}
              sourceRecord={institution.sourceRecord}
              imageUrl={institution.imageUrl}
              imageAlt={institution.imageAlt}
              className="narrative-card--institution"
            />
          ))}
        </div>
      </ChapterSection>

      <TransitionBlock
        eyebrow="Next Chapter"
        title="The field is now ready to trust layered systems at scale"
        description="Era 6 inherits the empirical and representational logic of this chapter, then intensifies it through deep learning, benchmarks, and the transformer turn."
        href="/eras/deep-learning-breakthroughs"
        linkLabel="Continue to Era 6"
      />
    </article>
  );
}
