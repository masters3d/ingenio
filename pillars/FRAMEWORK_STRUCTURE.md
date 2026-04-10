# Three Pillars Framework - Complete Structure (Version 4.0)

## Framework Overview

```
Objective Function (WHY)
         ↓ defines success criteria
┌────────────────────────────────────┐
│  Prospective → Actuation → Retrospective  │
└────────────────────────────────────┘
         ↑ feeds improvement back

Three-Phase Operational Cycle:
├── Contextual Awareness (Prospective - KNOWING)
│   ├── Proactive Curiosity
│   ├── Cohesive Narrative
│   └── Shared Understanding
├── Clear Strategy (Actuation - ACTING)
│   ├── Challenge Matching
│   ├── Directed Intentionality
│   └── Adaptive Control
└── Systematic Improvement (Retrospective - IMPROVING)
    ├── Iterative Integration
    ├── Deliberate Practice
    └── Update Propagation
```

## Quick Reference Matrix

| Component | Sub-Pillar 1 | Sub-Pillar 2 | Sub-Pillar 3 | Role | Robotics | OODA |
|-----------|--------------|--------------|--------------|------|----------|------|
| **Contextual Awareness** (Prospective) | Proactive Curiosity | Cohesive Narrative | Shared Understanding | KNOWING | Perception | Observe + Orient |
| **Clear Strategy** (Actuation) | Challenge Matching | Directed Intentionality | Adaptive Control | ACTING | Actuation | Decide + Act |
| **Systematic Improvement** (Retrospective) | Iterative Integration | Deliberate Practice | Update Propagation | IMPROVING | Kaizen | Loop back |
| **Objective Function** (WHY) | Search (Mastery/Reward Signal — [intrinsic_motivation.md](./intrinsic_motivation.md)) | Drive (Autonomy/Action Space — [intrinsic_motivation.md](./intrinsic_motivation.md)) | Renew (Purpose/Value Alignment — [intrinsic_motivation.md](./intrinsic_motivation.md)) | WHY / Interface | Reward/Cost Function | Defines success |

## Fractal Pattern: Sub-Pillars Mirror the Cycle

**Every pillar's three sub-pillars internally mirror the Prospective → Actuation → Retrospective cycle:**

| Main Pillar | Sub-Pillar 1 (Prospective) | Sub-Pillar 2 (Actuation) | Sub-Pillar 3 (Retrospective) |
|-------------|----------------------------|--------------------------|------------------------------|
| **Contextual Awareness** | **Proactive Curiosity** — look forward, crawl, discover, sense the environment | **Cohesive Narrative** — act on data, build mental models, synthesize | **Shared Understanding** — look back, externalize learnings, preserve for future |
| **Clear Strategy** | **Challenge Matching** — look forward, assess capabilities vs demands | **Directed Intentionality** — execute, project consciousness toward objective | **Adaptive Control** — look back at feedback, correct course in real-time |
| **Systematic Improvement** | **Iterative Integration** — test state against reality ("Is this still true?") | **Deliberate Practice** — do less of / keep doing / do more of ("How do we make this better?") | **Update Propagation** — eliminate, prevent, automate, propagate ("How do we make this permanent?") |
| **Objective Function** | **Search** — define what "better" looks like (Mastery/Reward Signal) | **Drive** — determine what can be controlled (Autonomy/Action Space) | **Renew** — verify optimizing for right thing (Purpose/Value Alignment) |

**Pattern Explanation**:
- **Sub-pillar 1** = Prospective phase (gathering, sensing, assessing)
- **Sub-pillar 2** = Actuation phase (building, executing, revising)
- **Sub-pillar 3** = Retrospective phase (preserving, adjusting, optimizing)

This fractal structure means each pillar contains a miniature version of the full cycle within itself.

## Architecture Changes from Framework 3.0

### Major Restructuring

**Framework 3.0** (Three Equal Pillars):
- Clear Strategy
- Intrinsic Motivation (human-specific)
- Contextual Awareness

**Framework 4.0** (Objective Function + Three-Phase Cycle):
- **Intrinsic Motivation** elevated and generalized to **Objective Function** (sits above cycle, works for any agent — human or AI)
- **Three-phase operational cycle**: Prospective → Actuation → Retrospective
- **New pillar**: Systematic Improvement (IMPROVING/Retrospective)

### Theoretical Foundations

**Added in 4.0**:
- **Robotics/Kaizen frameworks**: Perception, Actuation, Kaizen + Feedback Control
- **Control Theory**: Feedback loops, Kalman filtering, PID control
- **Objective Function**: Mathematical reward/cost function (defines success)
- **Closed-loop learning**: Retrospective feeds back to Prospective

**Retained from 3.0**:
- Flow Theory (Clear Strategy)
- OODA Loop (Contextual Awareness + Clear Strategy)
- Self-Determination Theory (Objective Function — human instantiation, detailed in [`intrinsic_motivation.md`](./intrinsic_motivation.md))
- Search engines, SLAM, cognitive artifacts

**Companion Document Added**:
- [`intrinsic_motivation.md`](./intrinsic_motivation.md) — The human motivation companion document (Mastery, Autonomy, Purpose, SDT, Flow, IC-level behaviors). `objective_function.md` focuses on the human-agent interaction layer.

---

## The Three-Phase Operational Cycle

### Phase 1: Contextual Awareness (Prospective - KNOWING)

**Role**: KNOWING the environment before acting | **Robotics**: Perception | **OODA**: Observe + Orient

The KNOWING phase — recognizing that effective decisions require deep understanding of environment, constraints, timing, and audience.

- **Proactive Curiosity**: Systematically find and organize information (crawl domain, index for retrieval, multi-sensor fusion, continuous refresh)
- **Cohesive Narrative**: Create accurate mental models and continuously update them (SLAM-style replanning, audience-aware contextualization, dependency mapping)
- **Shared Understanding**: Externalize knowledge into durable cognitive artifacts (docs, ADRs, diagrams, runbooks — async-first, maintained over time)

→ See [`contextual_awareness.md`](./contextual_awareness.md) for complete specification.

---

### Phase 2: Clear Strategy (Actuation - ACTING)

**Role**: ACTING in the environment based on knowledge | **Robotics**: Actuation | **OODA**: Decide + Act

The ACTING phase — transforming ambiguous directives into concrete, achievable outcomes through Flow state creation.

- **Challenge Matching**: Challenge-Skill Balance — too hard = anxiety, too easy = boredom, right-sized = Flow
- **Directed Intentionality**: Clear Goals eliminate psychic entropy — singular vector of intent, minimize cognitive load
- **Adaptive Control**: Immediate Feedback closes the loop — every result is data for real-time adjustment

→ See [`clear_strategy.md`](./clear_strategy.md) for complete specification.

---

### Phase 3: Systematic Improvement (Retrospective - IMPROVING)

**Role**: IMPROVING from what happened | **Kaizen Foundation**: Genchi Genbutsu, Hansei, Kata, Muda, Yokoten, Poka-yoke, Jidoka, PDCA/SDCA | **OODA**: Feedback arc from Act back to Observe

The IMPROVING phase — closing the improvement loop by continuously testing state, practicing improvement routines, and propagating gains permanently.

- **Iterative Integration**: Constantly test state against expected state — blameless postmortems, compare prediction vs reality ("Is this still true?")
- **Deliberate Practice**: Practiced improvement routine — do less of / keep doing / do more of, distinguish signal from noise ("How do we make this better?")
- **Update Propagation**: Eliminate waste permanently, mistake-proof the system, automate what's proven, propagate horizontally ("How do we make this permanent and spread it everywhere?")

→ See [`systematic_improvement.md`](./systematic_improvement.md) for complete specification.

---

## Above the Cycle: Objective Function (WHY)

**Role**: Defines what success means for any agent (human or AI) | **Robotics**: Reward/Cost Function | **OODA**: The criteria by which all phases are judged

NOT part of the operational cycle — it defines what the cycle optimizes for.

**Three Sub-Pillars (Agent-Agnostic)**:
1. **Search** (Prospective): What does *better* look like?
   - Human: Mastery (skill development, deliberate practice) — see [`intrinsic_motivation.md`](./intrinsic_motivation.md)
   - Agent: Reward Signal (scalar/vector signals, loss minimization)
2. **Drive** (Actuation): What can I/we control?
   - Human: Autonomy (decision authority, ownership) — see [`intrinsic_motivation.md`](./intrinsic_motivation.md)
   - Agent: Action Space (available tools, permissions)
3. **Renew** (Retrospective): Am I optimizing for the right thing?
   - Human: Purpose (meaningful work, values alignment) — see [`intrinsic_motivation.md`](./intrinsic_motivation.md)
   - Agent: Value Alignment (RLHF, constitutional AI, safety)

→ See [`objective_function.md`](./objective_function.md) for the human-agent interaction specification.
→ See [`intrinsic_motivation.md`](./intrinsic_motivation.md) for the human motivation specification.

---

## Complete Cycle Flow

```
         ┌─────────────────────────────────┐
         │  Objective Function (WHY)       │
         │  Defines: What is success?      │
         └─────────────────────────────────┘
                       ↓
    ┌──────────────────────────────────────────┐
    │  1. CONTEXTUAL AWARENESS (Prospective)   │
    │     KNOWING: Understand environment      │
    ├──────────────────────────────────────────┤
    │  2. CLEAR STRATEGY (Actuation)           │
    │     ACTING: Execute in environment       │
    ├──────────────────────────────────────────┤
    │  3. SYSTEMATIC IMPROVEMENT (Retrospective)│
    │     IMPROVING: Test state, practice, propagate │
    └──────────────────────────────────────────┘
                       ↓
            Loop back to Prospective
         (with permanently improved system)
```

---

## IC Level Application

| IC Level | Prospective Focus | Actuation Focus | Retrospective Focus | Objective Function |
|----------|-------------------|-----------------|---------------------|---------------------|
| 0–1 | Crawl domain, ask questions | Match task difficulty to skill | Test state continuously, participate in improvement cycles | Learn fundamentals, build skills |
| 2–3 | Index knowledge, build mental models | Calibrate challenges, set clear goals | Conduct postmortems, practice improvement routines | Mentor others, make decisions |
| 4–5 | Multi-sensor fusion, cognitive artifacts | System-level alignment, feedback loops | Track improvement velocity, propagate fixes structurally | Deep expertise, own systems |
| 6–7+ | Organizational memory systems | Organizational Flow state | Establish Yokoten practice, build recursive improvement systems | Shape culture, mentor seniors |

---

## Common Anti-Patterns

| Phase | Anti-Pattern | Solution |
|-------|--------------|----------|
| Prospective | Discovery Failure | Systematic crawling, cross-team code search |
| Prospective | Stale Documentation | Assign owners, quarterly reviews, DoD includes docs |
| Actuation | Analysis Paralysis | Time-box planning, default to action |
| Actuation | Scope Creep | Ruthless exit strategy enforcement |
| Retrospective | No Iterative Integration | Make CI required; treat broken CI as stop-the-line event |
| Retrospective | Blame Culture | Blameless postmortems grounded in Hansei, psychological safety |
| Retrospective | Automating Inefficiency | Question → Delete → Simplify before Automate |
| Objective Function | Learned Helplessness | Explicitly grant decision authority |
| Objective Function | Burnout (Extrinsic-Only) | Reconnect to meaningful outcomes |

---

## Documentation Locations

| Content Type | Location |
|--------------|----------|
| Framework Summary | `/AGENTS.md`, `/career.md` |
| Detailed Specifications | `/pillars/*.md` (5 files) |
| Presentation Slides | `/presentation/eng_*.md` |
| IC-Level Application | `/career.md`, `/pillars/README.md` |

**Pillar Specification Files**:
1. [`contextual_awareness.md`](./contextual_awareness.md) — Prospective/KNOWING
2. [`clear_strategy.md`](./clear_strategy.md) — Actuation/ACTING
3. [`systematic_improvement.md`](./systematic_improvement.md) — Retrospective/IMPROVING
4. [`objective_function.md`](./objective_function.md) — WHY / Human-Agent Interface
5. [`intrinsic_motivation.md`](./intrinsic_motivation.md) — Human Motivation (Mastery, Autonomy, Purpose)

---

## References

- **Flow Theory** (Csikszentmihalyi) — Challenge-Skill Balance, Clear Goals, Immediate Feedback
- **Self-Determination Theory** (Deci & Ryan) — Competence, Autonomy, Relatedness
- **OODA Loop** (Boyd) — Observe, Orient, Decide, Act cycle
- **Kaizen** (Imai) / **Toyota Production System** (Ohno) — Muda, Poka-yoke, Jidoka, Yokoten
- **Toyota Kata** (Rother) — practiced improvement routine
- **Deliberate Practice** (Ericsson) — structured practice at the edge of current ability
- **Robotics**: Sensor fusion, SLAM, PID control (Perception-Actuation loop foundations)
- **DORA Metrics** — Deployment frequency, lead time, MTTR, change failure rate
- **Cognitive Artifacts** (Norman) — external representations extending cognition

---

**Framework Version**: 4.0 (Objective Function + Prospective-Actuation-Retrospective Cycle)
**Major Changes from 3.0**: Intrinsic Motivation elevated to agent-agnostic Objective Function; added Systematic Improvement (Retrospective); integrated robotics foundations; added closed-loop reinforcing cycle

---

## Measurement Framework (Summary)

For detailed metrics, see each pillar's specification file. Key indicators by phase:

| Phase | Signal | Key Metrics |
|-------|--------|-------------|
| **Contextual Awareness** | Time to find information, onboarding speed, documentation coverage | Search success rate, change impact accuracy, knowledge loss on turnover |
| **Clear Strategy** | Flow state frequency, goal clarity, MTTR | Task-skill match %, scope stability, deployment frequency |
| **Systematic Improvement** | Recurrence rate (target: zero), improvement velocity | Postmortem rate, waste identification, propagation coverage % |
| **Objective Function** | Alignment health, autonomy, meaningful work | Skill growth rate / agent loss curves, decision velocity, mission understanding |
