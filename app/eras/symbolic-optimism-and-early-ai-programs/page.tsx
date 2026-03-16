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
import { institutionProfiles, peopleProfiles } from "@/lib/narrative-data";

const era3People = peopleProfiles.filter((p) => p.era === "Era 3");
const era3Institutions = institutionProfiles.filter((i) => i.era === "Era 3");

const milestoneItems = [
  {
    year: "1956",
    title: "Dartmouth becomes an active research agenda",
    detail:
      "The field is no longer just named; researchers begin building programs that treat reasoning as symbol manipulation.",
  },
  {
    year: "1956-1959",
    title: "Logic Theorist and GPS define heuristic problem solving",
    detail:
      "Early AI systems show that search and means-end analysis can be programmed rather than merely theorized.",
  },
  {
    year: "1958-1960",
    title: "LISP gives AI a durable programming language",
    detail:
      "McCarthy's language becomes part of the symbolic era's working research infrastructure.",
  },
  {
    year: "1960-1965",
    title: "Automated reasoning becomes more explicit and powerful",
    detail:
      "Resolution, unification, and related methods deepen the theorem-proving side of symbolic AI.",
  },
  {
    year: "1966-1969",
    title: "Planning and robotics widen the symbolic project",
    detail:
      "Shakey, STRIPS, and related work show that symbolic AI is not only about proving theorems on paper.",
  },
];

const peopleCards = [
  {
    name: "John McCarthy",
    summary:
      "McCarthy carries Dartmouth forward into programming practice and the symbolic research culture that defines the era.",
    links: ["LISP", "symbolic AI", "MIT AI Lab"],
  },
  {
    name: "Marvin Minsky",
    summary:
      "Minsky gives the era a lab-centered face, connecting symbolic ambition to robotics and knowledge representation.",
    links: ["MIT AI Lab", "robotics", "symbolic AI"],
  },
  {
    name: "Allen Newell and Herbert Simon",
    summary:
      "Together they make heuristic problem solving a serious AI method rather than a philosophical slogan.",
    links: ["Logic Theorist", "GPS", "search and heuristics"],
  },
];

const conceptCards = [
  {
    title: "Symbolic AI",
    summary:
      "Intelligence is treated as explicit representation plus rule-guided manipulation of symbols.",
  },
  {
    title: "Search and heuristics",
    summary:
      "Programs narrow huge spaces of possibilities by using practical guidance rather than exhaustive brute force.",
  },
  {
    title: "Theorem proving",
    summary:
      "Formal reasoning becomes one of the era's clearest demonstrations that machines can perform intellectual work.",
  },
  {
    title: "Planning",
    summary:
      "Projects such as STRIPS and Shakey connect symbolic reasoning to action in an environment.",
  },
];

export const metadata: Metadata = {
  title: "Symbolic Optimism And Early AI Programs",
  description:
    "Era 3 of the AI history site, covering symbolic AI, heuristic search, theorem proving, and early labs after Dartmouth.",
};

export default function SymbolicOptimismAndEarlyAiProgramsPage() {
  return (
    <article className="hero-panel exemplar-panel chapter-theme chapter-theme--symbolic">
      <ChapterHero
        eyebrow="Era 3"
        period="Era 3, 1956-1969"
        title="Symbolic Optimism And Early AI Programs"
        lede="After Dartmouth, AI becomes a working research program. The period is defined by symbolic systems, search, heuristics, theorem proving, early planning, and laboratory cultures that make intelligence look programmable even before the field understands how hard scaling will be."
        scene="This chapter should feel ambitious. The field has a name, labs have momentum, and reasoning looks programmable enough that many researchers believe a broad symbolic route to intelligence is within reach."
        backHref="/"
        backLabel="Back to overview"
        links={[
          {
            href: "/eras/computation-information-field-formation",
            label:
              "Back to Era 2: Computation, Information, And Field Formation",
          },
          {
            href: "/eras/knowledge-systems-critique-and-the-first-ai-winter",
            label:
              "Continue to Era 4: Knowledge Systems, Critique, And The First AI Winter",
          },
        ]}
      >
        <div className="prose-block">
          <p>
            Era 3 is easiest to misremember as a punchline. The chapter works
            better when it is shown as the field&apos;s first serious attempt to
            operationalize reasoning at laboratory scale.
          </p>
        </div>
        <EditorialAside
          label="Lab Mood"
          title="This is the chapter where AI starts to feel buildable"
        >
          <p>
            Programs, languages, heuristics, and robotics make intelligence look
            programmable enough to justify large institutional ambition.
          </p>
        </EditorialAside>
      </ChapterHero>

      <GuideCallout
        variant="why-it-matters"
        title="Symbolic AI was a real technical program, not a historical punchline"
      >
        <p>
          It is easy to look backward and treat the symbolic era as naive. That
          misses the point. Researchers in this period built concrete methods
          for search, reasoning, planning, and programming that still shape
          later AI and computer science.
        </p>
      </GuideCallout>

      <ChapterSection
        id="era-3-chronology"
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
        quote="In Era 3, intelligence looks programmable because reasoning can be written as search over symbolic structure, explicit rules, and formal procedures."
        attribution="Era 3 framing"
      />

      <ChapterSection
        id="era-3-narrative"
        eyebrow="Core Narrative"
        title="How the era teaches the field after Dartmouth"
        prose
      >
        <div className="chapter-split">
          <div className="prose-block">
            <p>
              Era 3 works best when it is taught as the field&apos;s first
              serious attempt to operationalize reasoning. Logic Theorist and
              GPS matter because they make symbolic problem solving look
              programmable. Search and heuristics matter because they give the
              period a way to act intelligently without examining every possible
              move.
            </p>
            <p>
              The era also broadens quickly. LISP makes AI easier to build,
              theorem proving deepens the formal side of the field, and planning
              plus robotics show that symbolic systems can be used to connect
              internal representations to action. The historical strength of the
              era is exactly what later critique has to answer: symbolic AI did
              enough real work that its limitations only became visible once its
              ambitions widened.
            </p>
          </div>
          <EditorialAside
            label="What They Thought Intelligence Was"
            title="Explicit representation plus symbolic manipulation"
          >
            <p>
              Era 3 needs this premise made visible. Otherwise later critiques
              of brittleness and scaling float without a clear target.
            </p>
          </EditorialAside>
        </div>
      </ChapterSection>

      <ChapterSection
        id="era-3-people"
        eyebrow="Linked People"
        title="Who carries the symbolic era"
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
        title="Early AI was not only theorem proving"
      >
        <p>
          Theorem proving is the cleanest classroom example, but the era also
          includes planning, robotics, languages, and heuristic search. If the
          story stays only in logic puzzles, students miss why the period felt
          so expansive.
        </p>
      </GuideCallout>

      <ChapterSection
        id="era-3-concepts"
        eyebrow="Linked Concepts"
        title="The ideas that make the optimism intelligible"
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
          These ideas also prepare the next turn in the chronology: once
          symbolic AI can do theorem proving and planning in bounded settings,
          the real historical question becomes what happens when researchers,
          funders, and the public expect the same methods to scale much more
          broadly.
        </p>
      </ChapterSection>

      <ChapterSection
        id="era-3-institutions"
        eyebrow="Institutions And Pressure"
        title="Labs and funding shape the research style"
      >
        <div className="institution-grid">
          <article className="content-card">
            <h3>MIT Artificial Intelligence Laboratory</h3>
            <p>
              MIT gives the symbolic era a visible home where programming,
              robotics, and ambitious views of machine intelligence reinforce
              one another.
            </p>
          </article>
          <article className="content-card">
            <h3>DARPA</h3>
            <p>
              DARPA helps make large early AI projects possible, which matters
              because the era&apos;s optimism is not only intellectual. It is
              also institutional and strategic.
            </p>
          </article>
        </div>
        <p className="artifact-note">
          Era 3 is therefore a bridge period: the field inherits the formal
          logic of Era 2, builds symbolic systems that genuinely work, and in
          doing so creates the expectations that Era 4 will test much more
          harshly.
        </p>
      </ChapterSection>

      <ChapterSection
        id="era-3-documentary-profiles"
        eyebrow="Documentary Profiles"
        title="Portraits and institutions of the symbolic era"
      >
        <div className="documentary-grid">
          {era3People.map((person) => (
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
        <div className="documentary-grid documentary-grid--institutions">
          {era3Institutions.map((institution) => (
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
        title="Symbolic confidence creates the disappointment that follows"
        description="The winter chapter only makes sense if the optimism chapter feels real first. Era 4 inherits the ambitions, institutions, and expectations built here."
        href="/eras/knowledge-systems-critique-and-the-first-ai-winter"
        linkLabel="Continue to Era 4"
      />
    </article>
  );
}
