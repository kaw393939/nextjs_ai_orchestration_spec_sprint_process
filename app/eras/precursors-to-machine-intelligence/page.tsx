import type { Metadata } from "next";

import {
  ChapterHero,
  ChapterSection,
  EditorialAside,
  TransitionBlock,
} from "@/components/content/chapter";
import { EditorialCardGrid } from "@/components/content/editorial/editorial-card-grid";
import { EditorialSplit } from "@/components/content/editorial/editorial-layout";
import { HistoricalAnchorGrid } from "@/components/content/editorial/narrative-card-grid";
import { EditorialSummaryGrid } from "@/components/content/editorial/editorial-summary-grid";
import { GuideCallout } from "@/components/content/guide-callout";
import { historicalAnchors } from "@/lib/narrative-data";

const precursorMilestones = [
  {
    label: "Logic",
    title: "George Boole formalizes symbolic reasoning",
    detail:
      "Reasoning starts to look like a structure that can be represented and manipulated explicitly.",
  },
  {
    label: "Machinery",
    title: "Charles Babbage makes mechanized calculation concrete",
    detail:
      "Calculation becomes a machine-design problem rather than only a human mental task.",
  },
  {
    label: "Interpretation",
    title: "Ada Lovelace sharpens the question of what machines can do",
    detail:
      "The precursor story begins separating rule-following execution from stronger claims about intelligence.",
  },
];

const precursorPeople = [
  {
    name: "George Boole",
    summary:
      "Boole gives the era its clearest account of how reasoning can become symbolic structure.",
    links: ["Formal logic", "Computability"],
  },
  {
    name: "Charles Babbage",
    summary:
      "Babbage makes mechanized procedure imaginable as a serious machine problem instead of an abstract dream.",
    links: ["Mechanized calculation", "Computability"],
  },
  {
    name: "Ada Lovelace",
    summary:
      "Lovelace helps define the conceptual boundary between executing procedures and claiming genuine intelligence.",
    links: [
      "Mechanized calculation",
      "Machine intelligence as research agenda",
    ],
  },
];

const lineageCards = [
  {
    title: "Formal logic to computability",
    summary:
      "The symbolic structure introduced in Era 1 becomes much sharper in Era 2, where Turing turns questions about rule-governed procedure into a theory of computation.",
  },
  {
    title: "Mechanized calculation to machine intelligence",
    summary:
      "Babbage and Lovelace do not build AI, but they make it easier to see why later researchers would ask whether symbolic procedure can scale into intelligence claims.",
  },
];

const minimumRouteCards = [
  {
    title: "Boole supplies structure",
    description:
      "Logic becomes explicit symbolic form, which is the first part of the later computability story.",
  },
  {
    title: "Babbage supplies machinery",
    description:
      "Procedure becomes a machine problem, which makes computation feel engineerable rather than merely philosophical.",
  },
  {
    title: "Lovelace supplies caution",
    description:
      "She keeps execution from being mistaken for intelligence, which is the conceptual brake the rest of the site keeps returning to.",
  },
];

const readingFrameCards = [
  {
    title: "Logic",
    description:
      "Boole matters because symbolic reasoning becomes representable, not because AI already exists.",
  },
  {
    title: "Machinery",
    description:
      "Babbage matters because calculation becomes a machine-design problem, which makes later computation teachable.",
  },
  {
    title: "Caution",
    description:
      "Lovelace matters because she keeps execution and intelligence from collapsing into the same claim too early.",
  },
];

const mediaRecords = [
  {
    title: "Lovelace analytical-engine story card",
    status: "Story card",
    path: "docs/content/media/records/lovelace-analytical-engine-story-card.md",
    summary:
      "A short teaching card that frames Lovelace as a conceptual checkpoint rather than as a retroactive inventor of AI.",
  },
  {
    title: "Boole to Turing story card",
    status: "Story bridge",
    path: "docs/content/media/records/boole-to-turing-story-card.md",
    summary:
      "A bridge card that makes the logical runway from symbolic reasoning into computability explicit.",
  },
];

const era1Anchors = historicalAnchors.filter(
  (anchor) => anchor.era === "Era 1"
);

export const metadata: Metadata = {
  title: "Precursors To Machine Intelligence",
  description:
    "Era 1 of the AI history site, covering symbolic logic, mechanized calculation, and the conceptual runway that leads into formal computation.",
};

export default function PrecursorsToMachineIntelligencePage() {
  return (
    <article className="hero-panel exemplar-panel chapter-theme chapter-theme--precursor">
      <ChapterHero
        eyebrow="Era 1"
        period="Era 1, before 1936"
        title="Precursors To Machine Intelligence"
        lede="AI does not begin with electronics or Dartmouth. It begins earlier, when logic becomes symbolic, calculation becomes mechanizable, and the difference between execution and intelligence first becomes historically visible."
        scene="Read Era 1 as the runway chapter: symbolic reasoning, machinery, and disciplined hesitation arrive before anyone can plausibly claim a formal field of AI exists."
        backHref="/"
        backLabel="Back to overview"
        links={[
          {
            href: "/eras/computation-information-field-formation",
            label:
              "Continue to Era 2: Computation, Information, And Field Formation",
          },
        ]}
      >
        <div className="prose-block">
          <p>
            Start here when the standard origin story feels too abrupt. This
            chapter makes Turing and Dartmouth feel earned rather than
            miraculous.
          </p>
        </div>
        <EditorialAside
          label="Runway Logic"
          title="The chapter matters because it separates execution from stronger claims about intelligence"
        >
          <p>
            That distinction starts early and returns repeatedly, from Lovelace
            to modern debates about fluency and understanding.
          </p>
        </EditorialAside>
      </ChapterHero>

      <GuideCallout
        variant="why-it-matters"
        title="AI history is weaker when its prehistory disappears"
      >
        <p>
          Students understand Era 2 more clearly when it arrives from an older
          world of symbolic reasoning and machine procedure. Without that
          runway, Turing and Dartmouth look more sudden and more mysterious than
          they really were.
        </p>
      </GuideCallout>

      <ChapterSection
        id="era-1-reading-frame"
        eyebrow="Reading Frame"
        title="Three ideas to hold in your head while you read"
      >
        <EditorialSummaryGrid items={readingFrameCards} />
      </ChapterSection>

      <ChapterSection
        id="era-1-minimum-route"
        eyebrow="Shortest Route"
        title="If you only need the handoff, keep these three precursor jobs"
      >
        <EditorialSummaryGrid items={minimumRouteCards} />
      </ChapterSection>

      <ChapterSection
        id="era-1-precursors"
        eyebrow="Runway"
        title="Three anchor precursors"
      >
        <EditorialCardGrid
          items={precursorMilestones.map((item) => ({
            title: item.title,
            description: item.detail,
            meta: item.label,
          }))}
        />
      </ChapterSection>

      <ChapterSection
        id="era-1-narrative"
        eyebrow="Core Narrative"
        title="Why this period belongs in the history"
        prose
      >
        <EditorialSplit
          className="chapter-split"
          leftClassName="prose-block"
          left={
            <>
              <p>
                Era 1 should not pretend that Boole, Babbage, or Lovelace were
                already doing AI in the modern sense. The value of this package
                is narrower and stronger: it makes later questions about
                computation, symbolic procedure, and machine intelligence easier
                to teach.
              </p>
              <p>
                Boole gives the story symbolic logic. Babbage gives it
                machinery. Lovelace gives it a disciplined hesitation about what
                procedure and execution do or do not prove. Together they make
                Era 2 readable as a continuation, not a miracle.
              </p>
            </>
          }
          right={
            <EditorialAside
              label="Teaching Payoff"
              title="Lovelace gives the chapter its first conceptual brake"
            >
              <p>
                Her role keeps the site from racing from mechanism to
                intelligence before readers understand how different those
                claims can be.
              </p>
            </EditorialAside>
          }
        />
      </ChapterSection>

      <ChapterSection
        id="era-1-people"
        eyebrow="Linked People"
        title="Who defines the precursor layer"
      >
        <EditorialCardGrid
          items={precursorPeople.map((person) => ({
            title: person.name,
            description: person.summary,
            meta: `Linked ideas: ${person.links.join("; ")}`,
          }))}
        />
      </ChapterSection>

      <GuideCallout
        variant="why-it-matters"
        title="Use Era 1 as a runway, then move quickly into Era 2"
      >
        <p>
          This chapter does its job once logic, machinery, and caution are in
          place. The next stop is{" "}
          <a href="/eras/computation-information-field-formation">Era 2</a>,
          where those precursor lines become computability, information theory,
          and a named research agenda. If you want the document trail instead,
          move straight to the{" "}
          <a href="/reading-maps/intellectual-lineage">reading map</a>.
        </p>
      </GuideCallout>

      <ChapterSection
        id="era-1-lineage"
        eyebrow="Cross-Era Concept Teaching"
        title="How Era 1 connects forward"
      >
        <EditorialCardGrid
          items={lineageCards.map((item) => ({
            title: item.title,
            description: item.summary,
          }))}
        />
        <p className="artifact-note">
          The live chronology now has an explicit adjacent-era handoff: this
          route builds the runway, and Era 2 narrows that runway into formal
          computation, information, neural abstraction, and Dartmouth field
          formation.
        </p>
      </ChapterSection>

      <ChapterSection
        id="era-1-media"
        eyebrow="Documents And Teaching Cards"
        title="Documents and teaching cards for the precursor layer"
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
          These records matter because Era 1 is strongest when it points to
          named documents and explicit teaching frames rather than fading into a
          generic prehistory of AI.
        </p>
      </ChapterSection>

      <ChapterSection
        id="era-1-source-anchors"
        eyebrow="Historical Source Anchors"
        title="Primary texts and visual anchors for the runway into computation"
      >
        <HistoricalAnchorGrid
          anchors={era1Anchors}
          className="source-anchor-grid"
          story="The precursor layer gets stronger when it points to specific texts, archives, and arguments instead of acting like a vague prehistory."
          getSubtitle={() => "Era 1 · primary text and source anchor"}
        />
      </ChapterSection>

      <TransitionBlock
        eyebrow="Next Chapter"
        title="The runway narrows into formal computation in Era 2"
        description="Once symbolic reasoning, machinery, and skepticism are established, the next chapter can make computation, information, and field formation feel like the continuation they are."
        href="/eras/computation-information-field-formation"
        linkLabel="Continue to Era 2"
      />
    </article>
  );
}
