import type { Metadata } from "next";

import {
  ChapterHero,
  ChapterSection,
  EditorialAside,
  PullQuote,
  TransitionBlock,
} from "@/components/content/chapter";
import { GuideCallout } from "@/components/content/guide-callout";
import { FoundationModelTurningPointsDiagram } from "@/components/content/visualizations/foundation-model-turning-points-diagram";
import { InterpretabilityGapDiagram } from "@/components/content/visualizations/interpretability-gap-diagram";

type ReadingEntry = {
  work: string;
  year: string;
  why: string;
  href: string;
  lineage: string;
};

const eraRouteByEra: Record<string, string> = {
  "Era 1": "/eras/precursors-to-machine-intelligence",
  "Era 2": "/eras/computation-information-field-formation",
  "Era 3": "/eras/symbolic-optimism-and-early-ai-programs",
  "Era 4": "/eras/knowledge-systems-critique-and-the-first-ai-winter",
  "Era 5": "/eras/statistical-learning-and-network-revival",
  "Era 6": "/eras/deep-learning-breakthroughs",
  "Era 7": "/eras/foundation-models-and-generative-ai",
};

const chronologyCards = [
  {
    era: "Era 1",
    title: "Precursors To Machine Intelligence",
    readings: [
      {
        work: "Ada Lovelace, Notes on the Analytical Engine",
        year: "1843",
        why: "Clarifies the distinction between executing procedure and making stronger claims about machine thought.",
        href: "https://www.fourmilab.ch/babbage/sketch.html",
        lineage:
          "Keeps later AI history honest by separating rule-following machinery from claims about genuine intelligence.",
      },
      {
        work: "George Boole, An Investigation of the Laws of Thought",
        year: "1854",
        why: "Shows the deep symbolic lineage behind later attempts to mechanize reasoning.",
        href: "https://archive.org/details/investigationofl00bool",
        lineage:
          "Turns reasoning into symbolic structure, which Turing later recasts as computable procedure.",
      },
    ] satisfies ReadingEntry[],
  },
  {
    era: "Era 2",
    title: "Computation, Information, And Field Formation",
    readings: [
      {
        work: "Alan Turing, On Computable Numbers",
        year: "1936",
        why: "Provides the precise theory of computation that later AI work depends on.",
        href: "https://doi.org/10.1112/plms/s2-42.1.230",
        lineage:
          "Defines what a machine can compute before the field can argue about machine intelligence.",
      },
      {
        work: "Claude Shannon, A Mathematical Theory of Communication",
        year: "1948",
        why: "Makes information part of the technical vocabulary that later AI inherits.",
        href: "https://doi.org/10.1002/j.1538-7305.1948.tb01338.x",
        lineage:
          "Gives AI a durable language for signals, encoding, and communication rather than logic alone.",
      },
      {
        work: "McCulloch and Pitts, A Logical Calculus of the Ideas Immanent in Nervous Activity",
        year: "1943",
        why: "Introduces a neuron-inspired model that keeps the origin story broader than formal logic and circuitry.",
        href: "https://doi.org/10.1007/BF02478259",
        lineage:
          "Opens the line from symbolic reasoning toward computational models of neural systems.",
      },
      {
        work: "Dartmouth proposal",
        year: "1955",
        why: "Names and consolidates artificial intelligence as a field.",
        href: "http://jmc.stanford.edu/articles/dartmouth/dartmouth.pdf",
        lineage:
          "Acts as a convergence point: computability, information, and neural abstraction become a named research agenda.",
      },
    ] satisfies ReadingEntry[],
  },
  {
    era: "Era 3",
    title: "Symbolic Optimism And Early AI Programs",
    readings: [
      {
        work: "Newell and Simon, The Logic Theory Machine",
        year: "1956",
        why: "Shows that formal reasoning can become a working program, not just a philosophical ambition.",
        href: "https://doi.org/10.1109/TIT.1956.1056797",
        lineage:
          "Turns formal reasoning into software, which makes symbolic AI feel like an executable research program.",
      },
      {
        work: "John McCarthy, Recursive Functions of Symbolic Expressions",
        year: "1960",
        why: "Helps establish symbolic AI as real research infrastructure.",
        href: "https://doi.org/10.1145/367177.367199",
        lineage:
          "Provides the language and symbolic machinery that support the next wave of theorem proving and knowledge systems.",
      },
      {
        work: "J. A. Robinson, A Machine-Oriented Logic Based on the Resolution Principle",
        year: "1965",
        why: "Sharpens the logic toolkit that later symbolic systems and proof procedures rely on.",
        href: "https://doi.org/10.1145/321250.321253",
        lineage:
          "Pushes symbolic AI from ambition toward formal methods that can scale into specialized systems.",
      },
    ] satisfies ReadingEntry[],
  },
  {
    era: "Era 4",
    title: "Knowledge Systems, Critique, And The First AI Winter",
    readings: [
      {
        work: "Buchanan, Sutherland, and Feigenbaum, The Heuristic DENDRAL Project",
        year: "1973",
        why: "Make knowledge-based systems look genuinely useful in bounded domains.",
        href: "https://doi.org/10.1145/1045154.1045159",
        lineage:
          "Shows that symbolic AI works best when it is narrow, expert, and densely supplied with domain knowledge.",
      },
      {
        work: "Shortliffe et al., Computer-Based Consultations in Clinical Therapeutics: Explanation and Rule Acquisition Capabilities of the MYCIN System",
        year: "1975",
        why: "Turns expert systems into a concrete model of how knowledge engineering can perform useful reasoning.",
        href: "https://doi.org/10.1016/0010-4809(75)90009-9",
        lineage:
          "Extends the DENDRAL lesson: progress is real, but it depends on hand-built expertise and narrow domains.",
      },
      {
        work: "James Lighthill, Artificial Intelligence: A General Survey",
        year: "1973",
        why: "Captures the strongest durable critique of broad symbolic ambitions.",
        href: "https://www.chilton-computing.org.uk/inf/literature/reports/lighthill_report/p001.htm",
        lineage:
          "Names the gap between local success and general intelligence claims, setting up the conditions for the first AI winter.",
      },
    ] satisfies ReadingEntry[],
  },
  {
    era: "Era 5",
    title: "Statistical Learning And Network Revival",
    readings: [
      {
        work: "Rumelhart, Hinton, and Williams, Learning Representations by Back-Propagating Errors",
        year: "1986",
        why: "Reopens serious multi-layer representation learning.",
        href: "https://doi.org/10.1038/323533a0",
        lineage:
          "Reintroduces trainable multi-layer networks and makes representation learning plausible again.",
      },
      {
        work: "Bengio et al., A Neural Probabilistic Language Model",
        year: "2003",
        why: "Connects language modeling to learned distributed representations and sets up the embeddings story.",
        href: "https://www.jmlr.org/papers/v3/bengio03a.html",
        lineage:
          "Builds the bridge from backprop-enabled representation learning to modern neural language modeling.",
      },
      {
        work: "Hinton, Osindero, and Teh, A Fast Learning Algorithm for Deep Belief Nets",
        year: "2006",
        why: "Marks the revival period when deep architectures stop looking historically exhausted.",
        href: "https://doi.org/10.1162/neco.2006.18.7.1527",
        lineage:
          "Helps turn neural networks from a remembered alternative into a renewed research frontier.",
      },
    ] satisfies ReadingEntry[],
  },
  {
    era: "Era 6",
    title: "Deep Learning Breakthroughs",
    readings: [
      {
        work: "Krizhevsky, Sutskever, and Hinton, ImageNet Classification with Deep Convolutional Neural Networks",
        year: "2012",
        why: "Makes deep learning look benchmark-dominant rather than speculative.",
        href: "https://papers.nips.cc/paper_files/paper/2012/hash/c399862d3b9d6b76c8436e924a68c45b-Abstract.html",
        lineage:
          "Turns deep learning into the leading empirical program and resets expectations for what scale plus data can do.",
      },
      {
        work: "Vaswani et al., Attention Is All You Need",
        year: "2017",
        why: "Provides the decisive transformer turning point.",
        href: "https://arxiv.org/abs/1706.03762",
        lineage:
          "Replaces recurrent sequence modeling with an architecture that scales far better into general-purpose language systems.",
      },
      {
        work: "Radford et al., Language Models are Unsupervised Multitask Learners",
        year: "2019",
        why: "Shows the immediate runway from transformers to general-purpose language-model behavior.",
        href: "https://cdn.openai.com/better-language-models/language_models_are_unsupervised_multitask_learners.pdf",
        lineage:
          "Makes the jump from strong language modeling toward broadly reusable pretrained behavior.",
      },
      {
        work: "Jumper et al., Highly Accurate Protein Structure Prediction with AlphaFold",
        year: "2021",
        why: "Shows that the deep-learning era is not only about language and vision but about scientific modeling too.",
        href: "https://www.nature.com/articles/s41586-021-03819-2",
        lineage:
          "Expands the deep-learning story beyond benchmarks into scientific discovery, which broadens the meaning of general AI capability.",
      },
    ] satisfies ReadingEntry[],
  },
  {
    era: "Era 7",
    title: "Foundation Models And Generative AI",
    readings: [
      {
        work: "Brown et al., Language Models are Few-Shot Learners",
        year: "2020",
        why: "Makes scale look like a new interface to capability.",
        href: "https://arxiv.org/abs/2005.14165",
        lineage:
          "Shows that larger pretrained transformers can acquire surprisingly general behavior without task-specific retraining.",
      },
      {
        work: "Bommasani et al., On the Opportunities and Risks of Foundation Models",
        year: "2021",
        why: "Gives the period its strongest early name and scope.",
        href: "https://arxiv.org/abs/2108.07258",
        lineage:
          "Changes the story from one model release to an ecosystem of reusable base systems with shared risks.",
      },
      {
        work: "Ouyang et al., Training Language Models to Follow Instructions with Human Feedback",
        year: "2022",
        why: "Explains the instruction-following path behind public assistants.",
        href: "https://arxiv.org/abs/2203.02155",
        lineage:
          "Connects large pretrained models to the assistant interface ordinary users actually meet.",
      },
      {
        work: "Bai et al., Constitutional AI: Harmlessness from AI Feedback",
        year: "2022",
        why: "Shows that alignment becomes an explicit design layer inside the foundation-model pipeline.",
        href: "https://arxiv.org/abs/2212.08073",
        lineage:
          "Extends the era from capability and interface into governance, safety, and model behavior shaping.",
      },
    ] satisfies ReadingEntry[],
  },
];

const safetyThread = [
  {
    work: "Eliezer Yudkowsky, Artificial Intelligence as a Positive and Negative Factor in Global Risk",
    year: "2008",
    why: "One of the clearest early statements of advanced-AI risk that later Era 7 readers still inherit.",
    href: "https://doi.org/10.1093/oso/9780198570509.003.0021",
    lineage:
      "Moves the story from technical progress alone to the question of what more capable systems might do at civilizational scale.",
  },
  {
    work: "Stephen Omohundro, The Basic AI Drives",
    year: "2008",
    why: "Crystallizes the instrumental-convergence argument behind later paperclip teaching.",
    href: "https://doi.org/10.1201/9781351251389-3",
    lineage:
      "Explains why apparently different advanced systems might converge on similar strategic pressures.",
  },
  {
    work: "Elhage et al., A Mathematical Framework for Transformer Circuits",
    year: "2021",
    why: "Starts a concrete mechanistic-interpretability program for transformer systems.",
    href: "https://transformer-circuits.pub/2021/framework/index.html",
    lineage:
      "Shifts interpretability from general concern toward a concrete reverse-engineering research program.",
  },
  {
    work: "Olsson et al., In-Context Learning and Induction Heads",
    year: "2022",
    why: "Shows that specific transformer mechanisms can be investigated rather than treated as pure black boxes.",
    href: "https://transformer-circuits.pub/2022/in-context-learning-and-induction-heads/index.html",
    lineage:
      "Demonstrates that at least some surprising model behaviors can be tied to identifiable circuit-level mechanisms.",
  },
  {
    work: "Anthropic, Towards Monosemanticity",
    year: "2023",
    why: "Pushes the feature-level interpretability program further into the question of whether model representations can become legible.",
    href: "https://transformer-circuits.pub/2023/monosemantic-features/index.html",
    lineage:
      "Extends the circuits line from finding isolated heads to asking whether broader internal features can be named and tracked.",
  },
] satisfies ReadingEntry[];

const eraGuideposts: Record<string, string> = {
  "Era 1":
    "Start here if you want the prehistory that keeps later AI claims disciplined.",
  "Era 2":
    "This cluster is the origin package: computation, information, neurons, and Dartmouth field formation.",
  "Era 3":
    "Read this cluster when you want symbolic AI to feel like a serious technical program rather than a historical caricature.",
  "Era 4":
    "This cluster shows why narrow success and broader disappointment can coexist in the same chapter.",
  "Era 5":
    "This is the methodological bridge: probability, benchmarks, and learned representations change what counts as progress.",
  "Era 6":
    "Use this cluster to see the transformer runway form before foundation models make it public.",
  "Era 7":
    "This cluster is the shortest path from large pretrained models to deployment, alignment, and infrastructure debates.",
};

export const metadata: Metadata = {
  title: "Intellectual Lineage Reading Map",
  description:
    "A live reading map that traces AI history through key papers and texts from early precursors to foundation models, plus the safety and interpretability thread.",
};

export default function IntellectualLineageReadingMapPage() {
  return (
    <main className="page-shell exemplar-shell">
      <article className="hero-panel exemplar-panel chapter-theme chapter-theme--papers">
        <ChapterHero
          eyebrow="Companion reading map"
          period="Reading map"
          title="Intellectual Lineage And Key Papers"
          lede="This route turns the repository's paper lineage into a paced companion chapter. It is not a full bibliography. It is a reading map for seeing how one era hands its problems, methods, and vocabulary to the next."
          scene="Use this page when you want the chronology told through documents rather than only through summaries. The point is lineage, not ranking."
          backHref="/"
          backLabel="Back to overview"
          links={[
            {
              href: "/eras/precursors-to-machine-intelligence",
              label: "Start with Era 1",
            },
            {
              href: "/eras/foundation-models-and-generative-ai",
              label: "Jump to Era 7",
            },
            {
              href: "/guides/embeddings-latent-space-and-llm-math",
              label: "Use the math guide",
            },
          ]}
        >
          <div className="prose-block">
            <p>
              Read straight through if you want the shortest paper-based path
              across the whole site. Dip into a single era cluster if you want
              to understand why one moment changed the next decade rather than
              just which paper arrived first.
            </p>
          </div>
          <EditorialAside
            label="How To Use This"
            title="Read for the handoff from one era to the next"
          >
            <p>
              Each entry keeps one question in view: what did this paper make
              easier, sharper, or more plausible for the era that followed?
            </p>
          </EditorialAside>
        </ChapterHero>

        <GuideCallout
          variant="why-it-matters"
          title="A reading map is for lineage, not for ranking winners"
        >
          <p>
            The point of this page is to keep the chronology legible. Each text
            matters because it helps explain why the next phase of AI looked the
            way it did, not because it deserves a timeless greatest-hits badge.
          </p>
        </GuideCallout>

        <ChapterSection
          id="era-timeline"
          eyebrow="Timeline"
          title="Seven eras at a glance"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/media/generated/era-timeline.svg"
            alt="Timeline showing the seven eras of AI history from Precursors (pre-1940) through Foundation Models (2017–present)"
            width={1200}
            height={180}
            className="era-timeline-diagram"
            style={{ width: "100%", height: "auto" }}
          />
        </ChapterSection>

        <ChapterSection
          id="reading-paths"
          eyebrow="Reading Paths"
          title="Choose the path that matches the time and focus you have"
        >
          <div className="content-grid content-grid--dense">
            <article className="content-card">
              <h3>15-minute chronology</h3>
              <p>
                Read one era cluster at a time if you want the shortest
                paper-based route from precursors to foundation models.
              </p>
              <p className="artifact-note">
                <a href="#reading-map-main">Start the main chronology</a>
              </p>
            </article>
            <article className="content-card">
              <h3>Turning-point scan</h3>
              <p>
                Jump to the hinge documents if you need the decisive moments
                without committing to every reading entry on the page.
              </p>
              <p className="artifact-note">
                <a href="#reading-map-turning-points">Go to turning points</a>
              </p>
            </article>
            <article className="content-card">
              <h3>Follow the safety thread</h3>
              <p>
                Use the companion thread when your question is less about the
                whole chronology and more about how alignment vocabulary forms.
              </p>
              <p className="artifact-note">
                <a href="#reading-map-safety">Go to the safety thread</a>
              </p>
            </article>
          </div>
        </ChapterSection>

        <PullQuote
          quote="The right question for every paper here is not whether it won, but what it made thinkable for the era that followed."
          attribution="Reading principle"
          source="Intellectual Lineage map"
        />

        <ChapterSection
          id="reading-map-main"
          eyebrow="Main Chronology"
          title="Seven eras through their decisive texts"
        >
          <div className="content-grid paper-cluster-grid">
            {chronologyCards.map((card) => (
              <article
                key={card.era}
                id={`reading-map-${card.era.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                className="content-card"
              >
                <p className="content-card__meta">{card.era}</p>
                <h3>{card.title}</h3>
                <p>{eraGuideposts[card.era]}</p>
                <p className="artifact-note">
                  Start here: {card.readings[0]?.work}.{" "}
                  <a href={eraRouteByEra[card.era]}>
                    Read the matching era chapter
                  </a>
                  .
                </p>
                <div className="reading-stack">
                  {card.readings.map((reading) => (
                    <div
                      key={`${reading.year}-${reading.work}`}
                      className="reading-entry"
                    >
                      <p className="timeline-year">{reading.year}</p>
                      <h4>
                        <a href={reading.href} target="_blank" rel="noreferrer">
                          {reading.work}
                        </a>
                      </h4>
                      <p>{reading.why}</p>
                      <p className="content-card__meta">
                        Canonical source or paper link.
                      </p>
                      <p className="artifact-note">
                        Connects forward: {reading.lineage}
                      </p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </ChapterSection>

        <ChapterSection
          id="reading-map-turning-points"
          eyebrow="Visual Lineage"
          title="One modern thread through six turning points"
        >
          <FoundationModelTurningPointsDiagram />
        </ChapterSection>

        <GuideCallout
          variant="why-it-matters"
          title="Why the current era still includes an interpretability gap"
        >
          <p>
            Era 7 is unusual because deployment, social consequence, and public
            fluency advanced faster than a full mechanistic account of model
            internals. That is why the reading map needs a parallel thread for
            safety and interpretability rather than treating those debates as an
            afterthought.
          </p>
        </GuideCallout>

        <ChapterSection
          id="reading-map-gap-diagram"
          eyebrow="Visual Summary"
          title="Capability, deployment, and understanding do not move together"
        >
          <InterpretabilityGapDiagram />
        </ChapterSection>

        <TransitionBlock
          eyebrow="Parallel Reading Track"
          title="The safety thread belongs beside the main chronology, not after it"
          description="Public AI becomes harder to teach if capability papers are remembered but risk, alignment, and interpretability work are treated as optional commentary. This thread keeps those arguments visible as part of the same historical arc."
        />

        <PullQuote
          quote="Capability, deployment, and understanding do not move in lockstep, which is why the safety and interpretability thread has to sit inside the same chronology."
          attribution="Parallel thread"
          source="Reading map framing"
        />

        <ChapterSection
          id="reading-map-safety"
          eyebrow="Parallel Thread"
          title="Safety And Interpretability Thread"
        >
          <div className="content-grid">
            {safetyThread.map((item) => (
              <article
                key={`${item.year}-${item.work}`}
                className="content-card"
              >
                <p className="timeline-year">{item.year}</p>
                <h3>
                  <a href={item.href} target="_blank" rel="noreferrer">
                    {item.work}
                  </a>
                </h3>
                <p>{item.why}</p>
                <p className="artifact-note">
                  Connects forward: {item.lineage}
                </p>
              </article>
            ))}
          </div>
        </ChapterSection>
      </article>
    </main>
  );
}
