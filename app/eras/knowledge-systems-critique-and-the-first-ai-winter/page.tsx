import type { Metadata } from "next";

import {
  ChapterHero,
  ChapterSection,
  ChapterTimeline,
  EditorialAside,
  PullQuote,
  TransitionBlock,
} from "@/components/content/chapter";
import { EditorialCardGrid } from "@/components/content/editorial/editorial-card-grid";
import { EditorialSplit } from "@/components/content/editorial/editorial-layout";
import {
  HistoricalAnchorGrid,
  NarrativeProfileGrid,
} from "@/components/content/editorial/narrative-card-grid";
import { EditorialSummaryGrid } from "@/components/content/editorial/editorial-summary-grid";
import { GuideCallout } from "@/components/content/guide-callout";
import { historicalAnchors, peopleProfiles } from "@/lib/narrative-data";

const era4People = peopleProfiles.filter((p) => p.era === "Era 4");
const era4Anchors = historicalAnchors.filter((a) => a.era === "Era 4");

const milestoneItems = [
  {
    year: "1970-1972",
    title: "Planning and symbolic systems hit harder environments",
    detail:
      "The field tries to extend symbolic methods beyond carefully bounded demos and into broader practical settings.",
  },
  {
    year: "1972-1976",
    title: "MYCIN and knowledge engineering gain credibility",
    detail:
      "Expert systems show that narrow symbolic AI can be useful when domain knowledge is encoded carefully.",
  },
  {
    year: "1973",
    title: "The Lighthill report makes critique public",
    detail:
      "Scaling limits and combinatorial explosion become part of the field's policy and funding story.",
  },
  {
    year: "mid-1970s",
    title: "Funding becomes more conditional",
    detail:
      "Institutional patience narrows as funders ask for clearer deliverables instead of open-ended promises.",
  },
  {
    year: "late 1970s-1987",
    title: "Expert systems succeed narrowly while winter conditions remain",
    detail:
      "The field finds real applications, but the broader dream of general symbolic intelligence still looks harder than promised.",
  },
];

const peopleCards = [
  {
    name: "Edward Feigenbaum",
    summary:
      "Feigenbaum anchors the expert-systems turn, where symbolic AI becomes most persuasive in narrow scientific and industrial domains.",
    links: ["DENDRAL", "MYCIN", "knowledge engineering"],
  },
  {
    name: "Allen Newell and Herbert Simon",
    summary:
      "Their earlier symbolic success remains part of the story because the critique of the 1970s is aimed at ambitions their work helped inspire.",
    links: ["heuristic search", "general problem solving", "AI expectations"],
  },
  {
    name: "Marvin Minsky",
    summary:
      "Minsky keeps the lab-centered symbolic tradition visible even as critics and funders question how far that tradition can scale.",
    links: ["MIT AI Lab", "symbolic AI", "institutional influence"],
  },
];

const conceptCards = [
  {
    title: "Expert systems",
    summary:
      "Knowledge-rich symbolic systems work best when the domain is narrow enough to be encoded explicitly.",
  },
  {
    title: "Knowledge engineering",
    summary:
      "The act of extracting and encoding expert knowledge becomes productive but labor-intensive.",
  },
  {
    title: "AI winter",
    summary:
      "Confidence and support fall when the field's broad claims appear to outrun its robust results.",
  },
  {
    title: "Scaling limits",
    summary:
      "Combinatorial explosion and brittle representations make general symbolic intelligence harder than early optimism suggested.",
  },
];

const minimumRouteCards = [
  {
    title: "Things still worked",
    description:
      "Expert systems produced real bounded successes, so the era is not a story of total failure.",
  },
  {
    title: "The success did not generalize",
    description:
      "Knowledge engineering stayed expensive and brittle once the world stopped being narrow and hand-maintained.",
  },
  {
    title: "Institutions reacted",
    description:
      "Critique plus funding pressure turned technical limits into a public winter rather than leaving them as internal lab concerns.",
  },
];

const causalChainCards = [
  {
    title: "1. Local success",
    description:
      "Expert systems work in bounded domains strongly enough to keep AI credible for medicine and science.",
  },
  {
    title: "2. Scaling limits",
    description:
      "Knowledge engineering stays labor-intensive and brittle once the domain stops being narrow and carefully controlled.",
  },
  {
    title: "3. Public critique",
    description:
      "Lighthill and related criticism make the gap between promise and robust delivery visible beyond the lab.",
  },
  {
    title: "4. Funding pressure",
    description:
      "Once critique and limited scale meet tighter institutional patience, the field enters winter conditions instead of collapse.",
  },
];

export const metadata: Metadata = {
  title: "Knowledge Systems, Critique, And The First AI Winter",
  description:
    "Era 4 of the AI history site, covering expert systems, the Lighthill critique, funding pressure, and the first AI winter.",
};

export default function KnowledgeSystemsCritiqueAndFirstAiWinterPage() {
  return (
    <article className="hero-panel exemplar-panel chapter-theme chapter-theme--winter">
      <ChapterHero
        eyebrow="Era 4"
        period="Era 4, 1970-1987"
        title="Knowledge Systems, Critique, And The First AI Winter"
        lede="The field narrows in this era rather than disappearing. Expert systems prove that symbolic methods can succeed in bounded domains, but public critique, scaling limits, and tighter funding conditions make it much harder to sustain the broader promise of general symbolic intelligence."
        scene="This chapter should feel tighter and colder than Era 3. Success still exists, but it is local, expensive, and surrounded by a growing sense that the broad promise has outrun the methods."
        backHref="/"
        backLabel="Back to overview"
        links={[
          {
            href: "/eras/symbolic-optimism-and-early-ai-programs",
            label: "Back to Era 3: Symbolic Optimism And Early AI Programs",
          },
          {
            href: "/eras/statistical-learning-and-network-revival",
            label:
              "Continue to Era 5: Statistical Learning And Network Revival",
          },
        ]}
      >
        <div className="prose-block">
          <p>
            The chapter works when readers feel both facts at once: symbolic
            systems can be genuinely useful, and those same systems can fail to
            justify the grandest claims made on their behalf.
          </p>
        </div>
        <EditorialAside
          label="Contrast"
          title="Narrow success and broad disappointment coexist here"
          tone="contrast"
        >
          <p>
            Era 4 is not a story of nothing working. It is a story of local
            achievement colliding with scaling limits and institutional doubt.
          </p>
        </EditorialAside>
      </ChapterHero>

      <GuideCallout
        variant="why-it-matters"
        title="Expert systems count as progress even inside a narrowing field"
      >
        <p>
          The first winter story is easy to oversimplify. Systems such as
          DENDRAL and MYCIN mattered because they showed that symbolic AI could
          work seriously in bounded domains. The historical problem was not the
          absence of progress, but the mismatch between narrow success and much
          broader expectations.
        </p>
      </GuideCallout>

      <ChapterSection
        id="era-4-causal-chain"
        eyebrow="Cause And Effect"
        title="How the first winter actually forms"
      >
        <EditorialSummaryGrid items={causalChainCards} />
      </ChapterSection>

      <ChapterSection
        id="era-4-minimum-route"
        eyebrow="Shortest Route"
        title="If the winter story feels too binary, keep these three facts"
      >
        <EditorialSummaryGrid items={minimumRouteCards} />
      </ChapterSection>

      <ChapterSection
        id="era-4-chronology"
        eyebrow="Chronology"
        title="Five anchor points"
      >
        <ChapterTimeline
          items={milestoneItems.map((item) => ({
            key: `${item.year}-${item.title}`,
            eyebrow: item.year,
            title: item.title,
            description: item.detail,
          }))}
        />
      </ChapterSection>

      <PullQuote
        quote="The first AI winter begins when narrow symbolic success cannot carry the weight of general claims, public expectation, and institutional patience."
        attribution="Era 4 framing"
      />

      <ChapterSection
        id="era-4-narrative"
        eyebrow="Core Narrative"
        title="Why critique and usefulness coexist here"
        prose
      >
        <EditorialSplit
          className="chapter-split"
          leftClassName="prose-block"
          left={
            <>
              <p>
                Era 4 should not be framed as the moment when AI suddenly
                stopped working. It is better understood as the period when
                symbolic AI&apos;s strengths became more specialized and its
                weaknesses became harder to hide. Expert systems worked because
                they focused on narrow, knowledge-rich settings where rules and
                representations could be maintained by hand.
              </p>
              <p>
                Those same conditions revealed the field&apos;s broader problem.
                Knowledge entry was expensive, general reasoning did not scale
                cleanly, perception remained weak, and the confidence of funders
                and critics shifted. The Lighthill critique matters because it
                made those pressures historically visible, but the winter itself
                came from the larger combination of technical, institutional,
                and expectation-management failures.
              </p>
            </>
          }
          right={
            <EditorialAside
              label="Promise Versus Limit"
              title="What worked locally could not carry the whole promise"
              tone="contrast"
            >
              <p>
                This is the causal center of the chapter and the best bridge
                into later data-driven methods.
              </p>
            </EditorialAside>
          }
        />
      </ChapterSection>

      <ChapterSection
        id="era-4-people"
        eyebrow="Linked People"
        title="Who makes the narrowing visible"
      >
        <EditorialCardGrid
          items={peopleCards.map((person) => ({
            title: person.name,
            description: person.summary,
            meta: `Linked ideas: ${person.links.join("; ")}`,
          }))}
        />
      </ChapterSection>

      <ChapterSection
        id="era-4-concepts"
        eyebrow="Linked Concepts"
        title="The causal structure of the first winter"
      >
        <EditorialCardGrid
          dense
          items={conceptCards.map((concept) => ({
            title: concept.title,
            description: concept.summary,
          }))}
        />
        <p className="artifact-note">
          This era is the handoff point to later methods: once symbolic systems
          prove difficult to scale and costly to maintain, the field becomes
          more receptive to statistical learning and later neural revival, which
          take center stage in Era 5.
        </p>
      </ChapterSection>

      <GuideCallout
        variant="why-it-matters"
        title="Era 5 is the methodological answer to this winter"
      >
        <p>
          Once narrow symbolic success stops scaling cleanly, the next chapter
          turns toward probability, data, and learned features. Move directly to{" "}
          <a href="/eras/statistical-learning-and-network-revival">Era 5</a> if
          you want to see the field&apos;s practical answer to the limits named
          here.
        </p>
      </GuideCallout>

      <ChapterSection
        id="era-4-institutions"
        eyebrow="Institutions And Turning Point"
        title="Narrow success meets public critique"
      >
        <EditorialCardGrid
          className="institution-grid"
          items={[
            {
              title: "DARPA",
              description:
                "DARPA remains important because changing funding conditions are part of the causal story, not just background scenery.",
            },
            {
              title: "Lighthill critique",
              description:
                "Lighthill does not explain everything, but the report gives the era a durable public symbol for scaling criticism and the limits of broad symbolic ambition.",
            },
          ]}
        />
        <p className="artifact-note">
          The chronology now moves directly from this constrained symbolic era
          into data-driven and probabilistic approaches, where learning from
          examples increasingly looks more scalable than encoding everything by
          hand.
        </p>
      </ChapterSection>

      <ChapterSection
        id="era-4-documentary-profiles"
        eyebrow="Documentary Profiles"
        title="Portraits and source anchors for the knowledge-systems era"
      >
        <NarrativeProfileGrid
          profiles={era4People}
          cardClassName="narrative-card--person"
        />
        <HistoricalAnchorGrid
          anchors={era4Anchors}
          className="documentary-grid--anchors"
          story="This anchor keeps the era tied to a named document rather than to retrospective summary alone."
        />
      </ChapterSection>

      <TransitionBlock
        eyebrow="Next Chapter"
        title="The search for scale shifts toward learning from data"
        description="Era 5 is the answer to the narrowing pressure in this chapter: if hand-built knowledge does not scale cleanly, the field needs stronger ways to learn from examples, probability, and benchmarks."
        href="/eras/statistical-learning-and-network-revival"
        linkLabel="Continue to Era 5"
      />
    </article>
  );
}
