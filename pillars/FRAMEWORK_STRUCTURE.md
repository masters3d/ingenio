# Three Pillars Framework - Complete Structure

## Framework Overview

```
Three Pillars Quest Engine Framework
├── Clear Strategy (Execution)
│   ├── Direction
│   ├── Forward Progress
│   └── Breaking Down into Actionable Steps
├── Intrinsic Drive (Motivation)
│   ├── Mastery
│   ├── Autonomy
│   └── Purpose
└── Contextual Awareness (Understanding)
    ├── Async vs Sync
    ├── Ahead of Time vs Just in Time
    └── Cognitive Artifacts
```

## Quick Reference Matrix

| Pillar | Sub-Pillar 1 | Sub-Pillar 2 | Sub-Pillar 3 |
|--------|--------------|--------------|--------------|
| **Clear Strategy** | Direction | Forward Progress | Breaking Down |
| **Intrinsic Drive** | Mastery | Autonomy | Purpose |
| **Contextual Awareness** | Async vs Sync | AoT vs JiT | Cognitive Artifacts |

## Pillar Integration Map

### Clear Strategy ↔ Intrinsic Drive
- Direction ↔ Purpose: Goals must align with meaningful work
- Forward Progress ↔ Autonomy: Self-directed execution drives advancement
- Breaking Down ↔ Mastery: Decomposition develops skill through practice

### Clear Strategy ↔ Contextual Awareness
- Direction ↔ Documentation: Shared understanding of goals
- Forward Progress ↔ Observability: Visible metrics for advancement
- Breaking Down ↔ Communication: Async context for task execution

### Intrinsic Drive ↔ Contextual Awareness
- Mastery ↔ Documentation: Learning from others' knowledge
- Autonomy ↔ Observability: Data for informed decisions
- Purpose ↔ Communication: Shared mission understanding

## IC Level Application

| IC Level | Clear Strategy Focus | Intrinsic Drive Focus | Contextual Awareness Focus |
|----------|---------------------|----------------------|---------------------------|
| 0-1 | Complete tasks, ask questions | Learn fundamentals, build skills | Read docs, write clear messages |
| 2-3 | Design components, estimate | Mentor others, make decisions | Document knowledge, create runbooks |
| 4-5 | System architecture, SLOs | Deep expertise, own systems | Build observability, manage context |
| 6-7+ | Multi-system strategy | Shape culture, mentor seniors | Organizational knowledge systems |

## Documentation Locations

| Content Type | Primary Location | Secondary Locations |
|--------------|-----------------|-------------------|
| Framework Summary | `/AGENTS.md` lines 18-107 | `/career.md` lines 12-34 |
| Detailed Specifications | `/pillars/*.md` (3 files) | - |
| Presentation Slides | `/presentation/eng_*.md` (3 files) | - |
| IC-Level Application | `/career.md` | `/pillars/README.md` |
| Integration Examples | `/specs/PIE_theory_integration/VISION.md` | Multiple specs |

## Sub-Pillar Details

### Clear Strategy: Direction
**Purpose**: Establishing where you're going and why it matters

**Key Components**:
- Vision clarity (problem statements, success criteria)
- Goal definition (milestones, time boxes, dependencies)
- Directive alignment (individual → team → organization)
- Risk assessment

**Behavioral Example (IC 2-3)**: "Defines component-level direction from system requirements, articulates why certain approaches align with team goals"

---

### Clear Strategy: Forward Progress
**Purpose**: Continuous movement toward goals through visible advancement

**Key Components**:
- Action-feedback-adjustment cycles (high/medium/low frequency)
- Incremental delivery (feature flags, progressive rollout)
- Visible progress (burn down, deployment frequency, lead time)
- Fail fast philosophy

**Behavioral Example (IC 4-5)**: "Instruments systems with observability (logs, metrics, traces), defines SLOs and monitors progress toward targets"

---

### Clear Strategy: Breaking Down into Actionable Steps
**Purpose**: Decomposing complex challenges into executable tasks

**Key Components**:
- Hierarchical planning (Vision → Design → Sprint → Daily)
- Task characteristics (SMART: Specific, Measurable, Achievable, Relevant, Time-boxed)
- Work breakdown structure (Epic → Story → Task → Sub-task)
- Exit strategy at every level

**Behavioral Example (IC 6-7+)**: "Transforms organizational goals into system-level visions, coordinates breakdown across multiple teams"

---

### Intrinsic Drive: Mastery
**Purpose**: The urge to get better at things that matter

**Key Components**:
- Skill development (deliberate practice, feedback integration)
- Learning mechanisms (doing, teaching, failing, reading)
- Expertise levels (Novice → Expert progression)
- Mastery domains (Technical, Domain, Process, People)

**Psychology Foundation**: Competence (Self-Determination Theory), deliberate practice (Ericsson)

**Behavioral Example (IC 2-3)**: "Independently researches solutions to novel problems, shares knowledge through documentation and presentations"

---

### Intrinsic Drive: Autonomy
**Purpose**: The desire to direct your own work and own outcomes

**Key Components**:
- Decision-making authority (technical, process, priority, quality)
- Ownership models (code, feature, system, problem)
- Autonomy enablers (clear boundaries, context, psychological safety)
- Autonomy constraints (alignment, visibility, reversibility, consultation)

**Psychology Foundation**: Autonomy (Self-Determination Theory), ownership psychology

**Behavioral Example (IC 4-5)**: "Makes system-level architectural decisions, owns operational reliability and incident response"

---

### Intrinsic Drive: Purpose
**Purpose**: Connection to meaningful work beyond personal gain

**Key Components**:
- Meaning sources (user impact, technical challenge, team mission, organizational goals)
- Purpose hierarchy (task → feature → system → organization → society)
- Directive alignment (clarity, agreement, contribution, communication)
- Purpose erosion prevention

**Psychology Foundation**: Relatedness (Self-Determination Theory), flow state (Csikszentmihalyi)

**Behavioral Example (IC 6-7+)**: "Shapes organizational technical vision aligned with mission, ensures all teams understand how work serves company goals"

---

### Contextual Awareness: Async vs Sync
**Purpose**: Choosing the right temporal communication model

**Key Components**:
- Asynchronous communication (time-decoupled, persistent, searchable, scales)
- Synchronous communication (real-time, immediate feedback, relationship building)
- Communication mode selection (context-dependent decision matrix)
- Hybrid patterns (async-first, sync-then-async, time-boxed sync)

**Behavioral Example (IC 4-5)**: "Creates async-first documentation culture, runs async design reviews with sync finalization"

---

### Contextual Awareness: Ahead of Time vs Just in Time
**Purpose**: When to invest in preparation vs defer until needed

**Key Components**:
- Ahead of Time (proactive, prepared, optimized upfront)
- Just in Time (reactive, deferred, optimized when needed)
- Decision matrix (core architecture AoT, edge cases JiT)
- YAGNI principle vs Scout Rule

**Behavioral Example (IC 2-3)**: "Designs components for known requirements (AoT), adds extensibility only when pattern repeats 3x (JiT)"

---

### Contextual Awareness: Cognitive Artifacts
**Purpose**: External representations preserving context beyond individual memory

**Key Components**:
- Documentation artifacts (design docs, ADRs, runbooks, READMEs)
- Observability artifacts (logs, metrics, traces, dashboards, alerts)
- Process artifacts (issues, PRs, RFCs, post-mortems, sprint plans)
- Code as artifact (types, tests, API contracts, version control)

**Economics**: Tragedy of the commons, context decay (half-life), push vs pull models

**Behavioral Example (IC 6-7+)**: "Designs organization-wide knowledge systems, establishes RFD/RFC processes for decisions, ensures critical context survives team transitions"

---

## Common Anti-Patterns

| Pillar | Anti-Pattern | Solution |
|--------|--------------|----------|
| Clear Strategy | Analysis Paralysis | Time-box planning, default to action |
| Clear Strategy | Scope Creep | Ruthless exit strategy enforcement |
| Intrinsic Drive | Learned Helplessness | Explicitly grant decision authority |
| Intrinsic Drive | Burnout (Extrinsic-Only) | Reconnect to meaningful outcomes |
| Contextual Awareness | Meeting Culture | Async-first default |
| Contextual Awareness | Tribal Knowledge | Document as you go, cognitive artifacts |

## Measurement Framework

### Clear Strategy Metrics
- **Direction**: Alignment score, scope clarity, goal stability
- **Forward Progress**: Deployment frequency, lead time, velocity trend
- **Breaking Down**: Task completion rate, task size distribution, blocker rate

### Intrinsic Drive Metrics
- **Mastery**: Skill growth rate, learning time allocation, knowledge sharing frequency
- **Autonomy**: Decision velocity, escalation rate, ownership distribution
- **Purpose**: Mission understanding, work alignment %, engagement scores

### Contextual Awareness Metrics
- **Async vs Sync**: Meeting hours vs focus time, response SLA, sync necessity %
- **AoT vs JiT**: Premature work waste, technical debt cost, prep payoff rate
- **Cognitive Artifacts**: Documentation coverage, time to onboard, context lookup time

---

**Last Updated**: 2026-04-06
**Framework Version**: 2.0 (with sub-pillars)
**Status**: Complete and production-ready
