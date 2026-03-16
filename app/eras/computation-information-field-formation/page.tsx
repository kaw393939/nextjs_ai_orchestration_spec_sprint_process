import type { Metadata } from "next";

import {
  ChapterHero,
  ChapterSection,
  EditorialAside,
  TransitionBlock,
} from "@/components/content/chapter";
import { GuideCallout } from "@/components/content/guide-callout";
import { NarrativeCard } from "@/components/content/narrative-card";
import { LogicToAiDiagram } from "@/components/content/visualizations/logic-to-ai-diagram";
import { historicalAnchors, peopleProfiles } from "@/lib/narrative-data";

const era2People = peopleProfiles.filter((p) => p.era === "Era 2");
const era2Anchors = historicalAnchors.filter((a) => a.era === "Era 2");

const milestoneItems = [
  {
    year: "1936",
    title: "Turing defines computability",
    detail:
      "The slice begins with a rigorous account of what a machine can compute in principle.",
  },
  {
    year: "1938",
    title: "Shannon links logic to switching circuits",
    detail:
      "Logic starts to matter as machinery, not just as abstraction on paper.",
  },
  {
    year: "1943",
    title: "McCulloch and Pitts model threshold neurons",
    detail:
      "Neuron-inspired abstraction becomes part of the computational story.",
  },
  {
    year: "1948",
    title: "Information theory reshapes the technical vocabulary",
    detail:
      "Shannon gives the period a formal language for communication and signals.",
  },
  {
    year: "1955-1956",
    title: "Dartmouth names and consolidates the field",
    detail:
      "The era closes when a longer runway of ideas becomes a named research agenda.",
  },
];

const peopleCards = [
  {
    name: "Alan Turing",
    summary:
      "Turing gives the slice its strongest answer to what a machine can compute and later presses the question of machine intelligence directly.",
    links: ["Computability", "Machine intelligence as research agenda"],
  },
  {
    name: "Claude Shannon",
    summary:
      "Shannon ties logic to circuitry, formalizes information, and helps make the Dartmouth moment legible as engineering as well as theory.",
    links: ["Information theory", "Bell Labs"],
  },
  {
    name: "Warren McCulloch and Walter Pitts",
    summary:
      "Together they bring neuron-inspired abstraction into the era's story and keep the origin package from becoming purely symbolic.",
    links: ["Threshold-neuron model", "Cybernetics"],
  },
  {
    name: "John McCarthy",
    summary:
      "McCarthy stands at the field-formation end of the slice, where a scattered prehistory becomes a named research program.",
    links: ["Machine intelligence as research agenda", "Dartmouth"],
  },
];

const conceptCards = [
  {
    title: "Computability",
    summary:
      "A machine needs a precise procedure before anyone can seriously ask whether it can think.",
  },
  {
    title: "Information theory",
    summary:
      "Communication becomes measurable and technically organized, shaping the surrounding engineering culture of AI.",
  },
  {
    title: "Threshold-neuron model",
    summary:
      "Simple neuron-like units make it possible to talk about logical behavior in networks.",
  },
  {
    title: "Cybernetics",
    summary:
      "Control, feedback, and system behavior keep the slice broader than a single symbolic tradition.",
  },
  {
    title: "Machine intelligence as research agenda",
    summary:
      "The period ends when questions about intelligent machinery become organized as a field, not just isolated speculation.",
  },
];

const mediaRecords = [
  {
    title: "Logic to AI diagram",
    status: "Diagram",
    path: "docs/content/media/records/logic-to-ai-diagram.md",
    summary:
      "Explains how computation, information, neural abstraction, and Dartmouth converge in the Era 2 story.",
  },
  {
    title: "Dartmouth origin audio plan",
    status: "Audio companion",
    path: "docs/content/media/records/dartmouth-origin-audio-plan.md",
    summary:
      "Adds a short narration for readers who process chronology and contrast more clearly when it is spoken aloud.",
  },
  {
    title: "Dartmouth proposal image",
    status: "Source page",
    path: "docs/content/media/records/dartmouth-proposal-image.md",
    summary:
      "A historical source page that keeps Dartmouth attached to a named institutional object rather than retrospective legend.",
  },
  {
    title: "Shannon / Theseus image",
    status: "Source page",
    path: "docs/content/media/records/shannon-theseus-image.md",
    summary:
      "A source image record that keeps Shannon and Bell Labs visible as part of the engineering lineage of the era.",
  },
  {
    title: "Turing to Dartmouth story card",
    status: "Story card",
    path: "docs/content/media/records/turing-to-dartmouth-story-card.md",
    summary:
      "A documentary teaching card for the convergence argument that leads from computability to field formation.",
  },
  {
    title: "Shannon and Bell Labs story card",
    status: "Story card",
    path: "docs/content/media/records/shannon-bell-labs-story-card.md",
    summary:
      "A documentary teaching card that keeps the era tied to engineering institutions rather than abstract theory alone.",
  },
];

const storyCards = [
  {
    title: "Turing makes Dartmouth possible without causing it alone",
    summary:
      "This story card teaches the era as a runway. Computability defines what a machine can do in principle, but that does not yet name AI as a field. Dartmouth becomes legible because Turing has already made procedure rigorous.",
    path: "docs/content/media/records/turing-to-dartmouth-story-card.md",
  },
  {
    title: "Shannon keeps the origin story inside engineering as well as logic",
    summary:
      "This card keeps Bell Labs in the frame. Logic becomes circuitry, information becomes measurable, and the eventual AI field inherits a technical culture shaped by communication engineering as much as by philosophy.",
    path: "docs/content/media/records/shannon-bell-labs-story-card.md",
  },
];

export const metadata: Metadata = {
  title: "Computation, Information, And Field Formation",
  description:
    "Era 2 of the AI history site, covering computability, information theory, neural abstraction, and the Dartmouth field-formation moment.",
};

export default function ComputationInformationFieldFormationPage() {
  return (
    <article className="hero-panel exemplar-panel chapter-theme chapter-theme--formation">
      <ChapterHero
        eyebrow="Era 2"
        period="Era 2, 1936-1956"
        title="Computation, Information, And Field Formation"
        lede="The first live slice of the site argues that modern AI became thinkable before Dartmouth named the field. Turing, Shannon, McCulloch, Pitts, and McCarthy matter here because they connect formal computation, logic in machinery, information, neural abstraction, and field formation into one teachable sequence."
        scene="This is the convergence chapter of the chronology. It teaches origin as buildup: a field becomes legible only after several lines of work are already underway."
        backHref="/"
        backLabel="Back to overview"
        links={[
          {
            href: "/eras/precursors-to-machine-intelligence",
            label: "Back to Era 1: Precursors To Machine Intelligence",
          },
          {
            href: "/eras/symbolic-optimism-and-early-ai-programs",
            label: "Continue to Era 3: Symbolic Optimism And Early AI Programs",
          },
        ]}
      >
        <div className="prose-block">
          <p>
            Era 2 is also the strongest template for the rest of the site. It
            combines chronology, argument, diagram, source anchors, documentary
            cards, and concept teaching without dropping the historical thread.
          </p>
        </div>
        <EditorialAside
          label="Convergence"
          title="Dartmouth is the naming moment, not the whole origin story"
        >
          <p>
            The chapter becomes stronger when each precursor line keeps its own
            role instead of being compressed into a single heroic origin.
          </p>
        </EditorialAside>
      </ChapterHero>

      <GuideCallout
        variant="why-it-matters"
        title="This origin story is about convergence, not a single invention"
      >
        <p>
          If Dartmouth is taught as a sudden beginning, students lose the deeper
          logic of the field. Era 2 works better when the naming moment is shown
          as the end of a buildup in computation, engineering, information, and
          neural abstraction.
        </p>
      </GuideCallout>

      <ChapterSection
        id="era-2-chronology"
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

      <ChapterSection
        id="era-2-narrative"
        eyebrow="Core Narrative"
        title="How the package teaches the era"
        prose
      >
        <div className="chapter-split">
          <div className="prose-block">
            <p>
              The slice begins with Turing because the story needs a serious
              account of what computation means before it can move to stronger
              claims about machine intelligence. Shannon then changes the feel
              of the narrative by making logic matter in electrical machinery
              and by giving the period a formal theory of information.
            </p>
            <p>
              McCulloch and Pitts keep the package from turning into a pure
              story of symbols and circuits by showing how neuron-inspired units
              can be modeled computationally. Dartmouth closes the era as a
              field-formation moment: not the invention of every relevant idea,
              but the point where those lines of work become a named agenda.
            </p>
          </div>
          <EditorialAside
            label="Convergence Logic"
            title="Each strand does a different job in the origin package"
          >
            <p>
              Computation defines procedure, Shannon gives the era engineering
              and information, McCulloch-Pitts broaden the origin story, and
              Dartmouth names the research agenda those strands now support.
            </p>
          </EditorialAside>
        </div>
      </ChapterSection>

      <ChapterSection
        id="era-2-visual"
        eyebrow="Visual Convergence"
        title="Why Dartmouth is a meeting point, not a lone origin"
      >
        <LogicToAiDiagram />
      </ChapterSection>

      <ChapterSection
        id="era-2-story-layer"
        eyebrow="Documentary Story Layer"
        title="Two teaching cards that keep the convergence legible"
      >
        <div className="content-grid">
          {storyCards.map((card) => (
            <article key={card.title} className="content-card">
              <h3>{card.title}</h3>
              <p>{card.summary}</p>
              <p className="artifact-card__path">{card.path}</p>
            </article>
          ))}
        </div>
      </ChapterSection>

      <ChapterSection
        id="era-2-source-anchors"
        eyebrow="Source Anchors"
        title="Historical objects and source pages for the convergence story"
      >
        <div className="documentary-grid documentary-grid--anchors">
          {era2Anchors.map((anchor) => (
            <NarrativeCard
              key={anchor.slug}
              title={anchor.title}
              subtitle="Era 2 · source anchor"
              summary={anchor.summary}
              story="These anchors keep the era attached to named documents and source institutions, not only to retrospective explanation."
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

      <ChapterSection
        id="era-2-people"
        eyebrow="Linked People"
        title="Who carries the story"
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
        title={'Turing belongs in AI history before anyone says "AI"'}
      >
        <p>
          Computability matters here because the field later inherits a basic
          question from Turing: what kinds of processes can be made precise
          enough for machinery to carry out at all? That is part of the runway
          to AI, even before the field has its name.
        </p>
      </GuideCallout>

      <ChapterSection
        id="era-2-concepts"
        eyebrow="Linked Concepts"
        title="The technical ideas students must meet"
      >
        <div className="content-grid content-grid--dense">
          {conceptCards.map((concept) => (
            <article
              key={concept.title}
              className="content-card content-card--concept"
            >
              <h3>{concept.title}</h3>
              <p>{concept.summary}</p>
            </article>
          ))}
        </div>
        <p className="artifact-note">
          These concepts now teach across eras as well as within Era 2: formal
          logic and mechanized calculation build the runway in Era 1, and
          computability plus machine intelligence narrow that runway into a
          modern research agenda here.
        </p>
      </ChapterSection>

      <ChapterSection
        id="era-2-turning-point"
        eyebrow="Institutions And Turning Point"
        title="Bell Labs and Dartmouth do different jobs"
      >
        <div className="institution-grid">
          <article className="content-card">
            <h3>Bell Labs</h3>
            <p>
              Bell Labs gives the slice an institutional setting for
              Shannon&apos;s engineering work, which helps explain why logic and
              information are not just philosophical ideas in this story.
            </p>
          </article>
          <article className="content-card">
            <h3>
              Dartmouth Summer Research Project on Artificial Intelligence
            </h3>
            <p>
              Dartmouth closes Era 2 by naming and consolidating a field that
              the earlier decades had already made possible.
            </p>
          </article>
        </div>

        <GuideCallout
          variant="misconception-watch"
          title="Dartmouth is the naming moment, not the whole origin story"
        >
          <p>
            Saying AI was simply invented in one summer makes the history too
            smooth. The better claim is narrower and stronger: Dartmouth
            organized and named a field that earlier work had already prepared.
          </p>
        </GuideCallout>
      </ChapterSection>

      <ChapterSection
        id="era-2-media"
        eyebrow="Media And Source Trail"
        title="Media and source trail for this era"
      >
        <div className="artifact-grid">
          {mediaRecords.map((record) => (
            <article key={record.title} className="artifact-card">
              <div className="artifact-card__topline">
                <h3>{record.title}</h3>
                <span className="artifact-status artifact-status--approved">
                  {record.status}
                </span>
              </div>
              <p>{record.summary}</p>
              <p className="artifact-card__path">{record.path}</p>
            </article>
          ))}
        </div>
        <p className="artifact-note">
          The point of this section is documentary clarity: diagrams, source
          pages, and story cards show how the chapter is built from named
          objects rather than only from retrospective summary.
        </p>
      </ChapterSection>

      <ChapterSection
        id="era-2-documentary-profiles"
        eyebrow="Documentary Profiles"
        title="Portraits and source anchors for the field-formation era"
      >
        <div className="documentary-grid">
          {era2People.map((person) => (
            <NarrativeCard
              key={person.slug}
              title={person.name}
              subtitle={`${person.era} · ${person.role}`}
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
      </ChapterSection>

      <TransitionBlock
        eyebrow="Next Chapter"
        title="Field formation leads directly into symbolic confidence"
        description="Once the field has a name and a technical identity, the next chapter can show what happens when symbolic reasoning, search, and programming become active research programs."
        href="/eras/symbolic-optimism-and-early-ai-programs"
        linkLabel="Continue to Era 3"
      />
    </article>
  );
}
