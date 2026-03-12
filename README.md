# Next.js AI Orchestration Spec Sprint Process

This repository is a teaching example for serious AI-assisted software
delivery. It is built as a working Next.js application, but its deeper purpose
is to show students and practitioners how to turn vague intent into bounded,
verifiable execution through specifications, sprint documents, implementation
passes, and QA passes.

The example product in this repository is a site about the history of
artificial intelligence. That product matters, but it is not the main lesson.
The main lesson is the method: how to use AI as a high-leverage engineering
instrument without surrendering judgment, architecture, verification, or
product quality.

## Thesis

This project is built around a simple claim: natural language is now part of
the implementation surface of software, but language only becomes useful when
it is constrained. The repository teaches a model of work where humans focus on
strategy, scope, architecture, taste, communication, and verification, while AI
is directed through explicit artifacts and objective quality gates.

This is not a claim that code no longer matters. It is a claim that
undifferentiated code generation is becoming cheaper, while judgment over code
is becoming more valuable.

## Who This Is For

This repository is written for:

- students learning serious AI-assisted product development
- engineers who want a more disciplined orchestration workflow
- educators who need a concrete example of spec-driven AI delivery
- practitioners who want to understand how process reduces drift and improves
  verification

## What The Project Is

At the repository level, this project is a working Next.js 16 application with
strict TypeScript, Tailwind CSS, and baseline automated verification.

At the teaching level, it is an example of agentic orchestration:

- turning product ideas into feature specs
- turning specs into bounded sprint contracts
- implementing one sprint at a time
- verifying each sprint with explicit quality gates
- preserving intent through durable artifacts instead of relying on chat memory

## Example Product Versus Method

The AI history site gives the repository a real product to build. It provides a
concrete surface for design, content, architecture, testing, and QA.

The method is the primary subject:

- how to manage drift when AI expands beyond the requested scope
- how to deal with context-window limits and session memory loss
- how to preserve reasoning in specs, sprint docs, and QA artifacts
- how to use verification as the standard for accepting implementation claims

The repository exists because a real process is easier to teach than a theory.

## Current State

The repository currently contains:

- a Next.js 16 App Router application
- TypeScript with strict type checking
- Tailwind CSS v4
- Vitest plus Testing Library for baseline smoke coverage
- a project-specific homepage shell for the AI history site
- process docs and sprint docs under `docs/_specs/`

Sprint 0 of the site foundation is implemented. Later site sprints are drafted
and ready for QA against the actual codebase before implementation.

The documentation foundation is now specified separately so the teaching system
can be developed with the same rigor as the application itself.

## Workflow

The process used in this repository is intentionally strict for foundational
work:

1. Write a feature spec
2. QA the spec
3. Write a sprint doc
4. QA the sprint doc
5. Implement the sprint
6. QA the implementation

The canonical process artifacts live under `docs/_specs/`. The current major
feature sets are:

- `docs/_specs/site-foundation/` for the application foundation
- `docs/_specs/documentation-foundation/` for the teaching and documentation
  system

This full workflow is meant for foundational, ambiguous, or high-impact work.
Smaller changes will use a lighter path later in the documentation roadmap.

## Why The Process Exists

The process exists to control four recurring problems in AI-assisted work:

1. Drift: the assistant starts changing adjacent concerns that were never part
   of the task.
2. Context loss: session history is not durable enough to serve as project
   memory.
3. Ambiguous completion: work feels done before it is actually verified.
4. Weak accountability: without artifacts and checks, it is hard to audit what
   was decided, built, or changed.

Specs, sprint docs, QA passes, and verification commands are the repository’s
answer to those problems.

## Documentation Roadmap

This README is the landing document. Durable student-facing reference material
is now beginning to live under `docs/`, and later documentation sprints will
expand that layer so the repository has distinct areas for:

- landing-page orientation
- technology explanations
- orchestration-method teaching
- curated design and engineering vocabulary

Until that documentation is implemented, the planning artifacts under
`docs/_specs/` remain the source of truth for the current roadmap.

The first durable student-facing document now available is:

- [Technology Orientation](docs/foundation/technology-orientation.md)

The next durable method document now available is:

- [Orchestration Method](docs/foundation/orchestration-method.md)

The next durable vocabulary document now available is:

- [Power Words](docs/foundation/power-words.md)

The next durable process-scaling document now available is:

- [Lightweight Change Path](docs/foundation/lightweight-change-path.md)

The distinction matters: the technology document explains the current and
planned stack, while the orchestration document explains how this repository
turns requests into bounded, verified work.

The power-words document explains how named frameworks and practitioner
references function as compressed engineering vocabulary in this repository.

The lightweight-change-path document explains when a narrow change can use a
smaller `Change Note` instead of the full spec-and-sprint workflow.

## Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open `http://localhost:3000` in the browser.

## Quality Commands

The project is set up for non-interactive verification:

```bash
npm run typecheck
npm run lint
npm run test
npm run build
npm run format:check
```

For local formatting and watch-mode testing:

```bash
npm run format
npm run test:watch
```

## Repository Structure

```text
.
├── app/                    # Next.js App Router entry points and global styles
├── components/             # Shared UI and layout components
├── docs/
│   ├── foundation/         # Student-facing reference docs
│   └── _specs/             # Process artifacts
├── lib/                    # Shared site config and future helpers
├── tests/                  # Automated tests
```

## Remote

The local repository is configured with this GitHub remote:

`git@github.com:kaw393939/nextjs_ai_orchestration_spec_sprint_process.git`
