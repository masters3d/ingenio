# Three Pillars Framework - Complete Structure (Version 4.0)

## Framework Overview

```
Objective Function (WHY)
         ↓ defines success criteria
┌────────────────────────────────────┐
│  Prospective → Actuation → Retrospective  │
└────────────────────────────────────┘
         ↑ feeds learning back

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
    ├── Continuous Integration
    ├── Deliberate Practice
    └── Update Propagation
```

## Quick Reference Matrix

| Component | Sub-Pillar 1 | Sub-Pillar 2 | Sub-Pillar 3 | Role | Robotics | OODA |
|-----------|--------------|--------------|--------------|------|----------|------|
| **Contextual Awareness** (Prospective) | Proactive Curiosity | Cohesive Narrative | Shared Understanding | KNOWING | Perception | Observe + Orient |
| **Clear Strategy** (Actuation) | Challenge Matching | Directed Intentionality | Adaptive Control | ACTING | Actuation | Decide + Act |
| **Systematic Improvement** (Retrospective) | Continuous Integration | Deliberate Practice | Update Propagation | IMPROVING | Kaizen | Loop back |
| **Objective Function** (WHY) | Reward Signal (Mastery/Reward Fn) | Degrees of Freedom (Autonomy/Action Space) | Alignment Function (Purpose/Value Alignment) | WHY | Reward/Cost Function | Defines success |

## Fractal Pattern: Sub-Pillars Mirror the Cycle

**Every pillar's three sub-pillars internally mirror the Prospective → Actuation → Retrospective cycle:**

| Main Pillar | Sub-Pillar 1 (Prospective) | Sub-Pillar 2 (Actuation) | Sub-Pillar 3 (Retrospective) |
|-------------|----------------------------|--------------------------|------------------------------|
| **Contextual Awareness** (Prospective/KNOWING) | **Proactive Curiosity** - Look forward, crawl, discover, sense the environment | **Cohesive Narrative** - Act on data, build mental models, synthesize information | **Shared Understanding** - Look back, externalize learnings, preserve for future |
| **Clear Strategy** (Actuation/ACTING) | **Challenge Matching** - Look forward, assess capabilities vs demands before acting | **Directed Intentionality** - Execute, project consciousness toward objective | **Adaptive Control** - Look back at feedback, correct course in real-time |
| **Systematic Improvement** (Retrospective/IMPROVING) | **Continuous Integration** - Constantly test state against reality ("Is this still true?") | **Deliberate Practice** - Do less of / keep doing / do more of ("How do we make this better?") | **Update Propagation** - Eliminate, prevent, automate, propagate ("How do we make this permanent and spread it?") |
| **Objective Function** (WHY) | **Reward Signal** - Look forward, define what "better" looks like (Mastery/Reward Fn) | **Degrees of Freedom** - Act, determine what can be controlled (Autonomy/Action Space) | **Alignment Function** - Look back, verify optimizing for right thing (Purpose/Value Alignment) |

**Pattern Explanation**:
- **Sub-pillar 1** = Prospective phase of that pillar (gathering, sensing, assessing)
- **Sub-pillar 2** = Actuation phase of that pillar (building, executing, revising)
- **Sub-pillar 3** = Retrospective phase of that pillar (preserving, adjusting, optimizing)

This fractal structure means each pillar contains a miniature version of the full cycle within itself.

## Architecture Changes from Framework 3.0

### Major Restructuring

**Framework 3.0** (Three Equal Pillars):
- Clear Strategy
- Intrinsic Motivation (human-specific)
- Contextual Awareness

**Framework 4.0** (Objective Function + Three-Phase Cycle):
- **Intrinsic Motivation** elevated and generalized to **Objective Function** (sits above cycle, works for any agent - human or AI)
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
- Self-Determination Theory (Objective Function - human instantiation)
- Search engines, SLAM, cognitive artifacts

---

## The Three-Phase Operational Cycle

### Phase 1: Contextual Awareness (Prospective - KNOWING)

**Cycle Name**: Prospective
**Role**: KNOWING the environment before acting
**Robotics**: Perception (sensors, SLAM, environment mapping)
**OODA**: Observe + Orient

**Three Sub-Pillars**:
1. **Proactive Curiosity**: Systematically find and organize information
2. **Cohesive Narrative**: Create accurate mental models
3. **Shared Understanding**: Externalize knowledge into cognitive artifacts

**Purpose**: Build the contextual foundation needed for effective action.

---

### Phase 2: Clear Strategy (Actuation - ACTING)

**Cycle Name**: Actuation
**Role**: ACTING in the environment based on knowledge
**Robotics**: Actuation (kinematics, path planning, PID control)
**OODA**: Decide + Act

**Three Sub-Pillars**:
1. **Challenge Matching**: Challenge-Skill Balance (Flow Channel)
2. **Directed Intentionality**: Clear Goals (eliminates psychic entropy)
3. **Adaptive Control**: Immediate Feedback (closed-loop adjustment)

**Purpose**: Execute effectively by creating Flow state conditions.

---

### Phase 3: Systematic Improvement (Retrospective - IMPROVING)

**Cycle Name**: Retrospective
**Role**: IMPROVING from what happened
**Kaizen Foundation**: Genchi Genbutsu, Hansei, Kata, Muda, Yokoten, Poka-yoke, Jidoka, PDCA/SDCA
**OODA**: Feedback arc from Act back to Observe

**Three Sub-Pillars**:
1. **Continuous Integration**: Constantly test the state of the system against expected state. "Is this still true?"
2. **Deliberate Practice**: The practiced routine of improvement — do less of / keep doing / do more of. "How do we make this better?"
3. **Update Propagation**: Eliminate waste permanently, prevent errors structurally, automate, propagate horizontally. "How do we make this permanent and spread it everywhere?"

**Purpose**: Close the improvement loop by testing state continuously, practicing improvement routines, and propagating gains permanently.

---

## Above the Cycle: Objective Function (WHY)

**Role**: Defines what success means for any agent (human or AI), guides all phases of the cycle
**Robotics**: Reward/Cost Function (objective function optimization)
**OODA**: The criteria by which Observe/Orient/Decide/Act are judged
**Focus**: The mathematical formalization of "what does better look like?"

**Three Sub-Pillars (Agent-Agnostic)**:
1. **Reward Signal** (Prospective): What does *better* look like?
   - Human: Mastery (skill development, deliberate practice)
   - Agent: Reward Function (scalar/vector signals, loss minimization)
2. **Degrees of Freedom** (Actuation): What can I control?
   - Human: Autonomy (decision authority, ownership)
   - Agent: Action Space (available tools, permissions)
3. **Alignment Function** (Retrospective): Am I optimizing for the right thing?
   - Human: Purpose (meaningful work, values alignment)
   - Agent: Value Alignment (RLHF, constitutional AI, safety)

**Position in Framework**:
- NOT part of the operational cycle
- Sits above cycle as the defining objective function
- Answers "WHY do we act?" while cycle answers "HOW do we act?"
- Provides the success criteria for all three phases
- Works for ANY agent: humans, AI systems, teams, organizations

**Integration**:
- **Prospective**: Curiosity driven by Reward Signal (Mastery/Reward Function)
- **Actuation**: Clear goals within Degrees of Freedom (Autonomy/Action Space), aligned with Purpose/Value Alignment
- **Retrospective**: Learning validates Reward Signal, checks Alignment Function

---

## Complete Cycle Flow

```
         ┌─────────────────────────────────┐
         │  Objective Function (WHY)       │
         │  Defines: What is success?      │
         └─────────────────────────────────┘
                       ↓
    ┌──────────────────────────────────────────┐
    │                                          │
    │  1. CONTEXTUAL AWARENESS (Prospective)   │
    │     - Proactive Curiosity                │
    │     - Cohesive Narrative                 │
    │     - Shared Understanding               │
    │     KNOWING: Understand environment      │
    │                                          │
    ├──────────────────────────────────────────┤
    │                                          │
    │  2. CLEAR STRATEGY (Actuation)           │
    │     - Challenge Matching                 │
    │     - Directed Intentionality            │
    │     - Adaptive Control                   │
    │     ACTING: Execute in environment       │
    │                                          │
    ├──────────────────────────────────────────┤
    │                                          │
    │  3. SYSTEMATIC IMPROVEMENT (Retrospective)│
    │     - Continuous Integration             │
    │     - Deliberate Practice                │
    │     - Update Propagation                 │
    │     IMPROVING: Test state, practice, propagate │
    │                                          │
    └──────────────────────────────────────────┘
                       ↓
            Loop back to Prospective
         (with updated understanding)
```

---

## Sub-Pillar Details

### Contextual Awareness: Proactive Curiosity
**Definition**: Systematically find and organize information for retrieval

**Key Components**:
- Crawl Your Domain (code, docs, people, systems)
- Index for Retrieval (search-friendly structure, metadata)
- Multi-Sensor Fusion (combine multiple sources)
- Continuous Refresh (fight information decay)

**Theoretical Roots**: Search engine crawling/indexing, robotics sensor perception, OODA Observe, Scout Mindset

---

### Contextual Awareness: Cohesive Narrative
**Definition**: Create accurate mental models and continuously update them

**Key Components**:
- Create Mental Models (system architecture, data flow, business logic)
- Update Models Continuously (SLAM replanning)
- Contextualize Information (audience-aware: SLA/SLO/SLI)
- Map Dependencies (component, data, team dependencies)

**Theoretical Roots**: Robotics SLAM mapping, OODA Orient, mental models theory, cognitive artifacts

---

### Contextual Awareness: Shared Understanding
**Definition**: Externalize knowledge into durable cognitive artifacts

**Key Components**:
- Create Cognitive Artifacts (docs, ADRs, diagrams, runbooks)
- Maintain the Commons (fight knowledge decay)
- Systemic Incentives (make it easy, visible, required, integrated, rewarded)
- Async-First Context Sharing (documentation default)

**Theoretical Roots**: Cognitive artifacts (Donald Norman), distributed cognition, tragedy of the commons

---

### Clear Strategy: Challenge Matching
**Definition**: The active synchronization of internal capabilities with external demands

**Key Components**:
- Challenge-Skill Balance (Flow Channel: too hard = anxiety, too easy = boredom, just right = Flow)
- Continuous Task Calibration (adjust difficulty or upskill)
- Prevent Burnout and Apathy

**Theoretical Roots**: Csikszentmihalyi's Flow Theory (Challenge-Skill Balance), Robotics Actuation (task-capability matching)

---

### Clear Strategy: Directed Intentionality
**Definition**: The sharp projection of consciousness toward a specific objective

**Key Components**:
- Clear Goals Eliminate Distraction (psychic entropy reduction)
- Singular Vector of Intent (exactly what success looks like)
- Minimize Cognitive Load (reduce decisions, eliminate ambiguity)
- Action-Awareness Merger (doing = being, ego dissolution)

**Theoretical Roots**: Csikszentmihalyi's Flow Theory (Clear Goals), Robotics Path Planning (goal-directed navigation)

---

### Clear Strategy: Adaptive Control
**Definition**: A closed-loop behavioral system using real-time feedback

**Key Components**:
- Immediate Feedback (know within seconds/minutes if action works)
- Execute with Sensorimotor Sensitivity (feel the system)
- Every Result is Data (not failure, just information)
- Seamless Action-Awareness Loop (self-correcting performance)

**Theoretical Roots**: Csikszentmihalyi's Flow Theory (Immediate Feedback), Robotics PID Control (feedback-driven actuation)

---

### Systematic Improvement: Continuous Integration
**Definition**: Constantly test the state of the system against expected state. Lock in the truth. Know immediately when reality drifts from intention.

**Key Components**:
- Compare Prediction vs Reality (measurement gap)
- Identify Contributing Factors (root cause analysis, Five Whys)
- Document Without Blame (blameless postmortems, psychological safety)
- Recognize Positive Outcomes (what went right, not just what broke)

**The question**: "Is this still true?"

**Kaizen Roots**: Genchi Genbutsu (go and see for yourself), Hansei (honest self-reflection), Toyota Kata first question ("What is the current condition?"), PDCA: Check

---

### Systematic Improvement: Deliberate Practice
**Definition**: The practiced routine of improvement. For each process, behavior, or component: do less of, keep doing, do more of. Simplify through disciplined repetition.

**Key Components**:
- Sort Every Process (do less of / keep doing / do more of)
- Distinguish Signal from Noise (one-off vs systemic, special vs common cause)
- Recognize System Archetypes (Success to Successful, Tragedy of Commons, Fixes that Backfire)
- Extract Generalizable Lessons (underlying principles, not just specific fixes)

**The question**: "How do we make this better?"

**Kaizen Roots**: Kata (practiced improvement routine), Muda awareness (see the seven wastes), Musk Steps 2-3 (Delete then Simplify), Ericsson's Deliberate Practice, Double-Loop Learning, PDCA: Plan-Do

---

### Systematic Improvement: Update Propagation
**Definition**: Improvements don't stay local. Eliminate waste permanently, prevent errors structurally, automate what's proven, and propagate across every place it applies. Each cycle makes the next cycle faster.

**Key Components**:
- Eliminate Waste Permanently (Muda elimination — don't defer, delete)
- Mistake-Proof the System (Poka-yoke — make regression structurally impossible)
- Automate with Intelligence (Jidoka — human judgment stays in the loop)
- Standardize Before Propagating (SDCA — lock in gains, then spread)
- Propagate Horizontally (Yokoten — spread improvements to every place they apply)

**The question**: "How do we make this permanent and spread it everywhere?"

**Kaizen Roots**: Yokoten (horizontal deployment), Muda Elimination, Poka-yoke (mistake-proofing), Jidoka (automation with intelligence), SDCA (standardize before next PDCA), Musk Steps 4-5 (Accelerate then Automate), Recursive Self-Improvement

---

### Objective Function: Reward Signal (Prospective)
**General Definition**: The signal that defines improvement - how the agent knows when it's getting better
**Question**: "What does *better* look like?"

**Human Instantiation - Mastery**:
- Skill development (deliberate practice, feedback integration)
- Learning mechanisms (doing, teaching, failing, reading)
- Expertise levels (Novice → Expert progression)
- Mastery domains (Technical, Domain, Process, People)

**Agent Instantiation - Reward Function**:
- Signal types (scalar, vector, sparse, dense rewards)
- Reward sources (supervised, self-supervised, reinforcement, curiosity)
- Reward shaping (immediate/delayed feedback, auxiliary rewards, curriculum)
- Optimization targets (minimize loss, maximize accuracy, optimize efficiency)

**Theoretical Roots**: Self-Determination Theory (Competence), Reinforcement Learning (Sutton & Barto), Deliberate Practice (Ericsson)

---

### Objective Function: Degrees of Freedom (Actuation)
**General Definition**: The set of possible actions available to the agent - what decisions and interventions are within scope
**Question**: "What can I control?"

**Human Instantiation - Autonomy**:
- Decision-making authority (technical, process, priority, quality)
- Ownership models (code, feature, system, problem)
- Autonomy enablers (clear boundaries, context, psychological safety)
- Autonomy constraints (alignment, visibility, reversibility, consultation)

**Agent Instantiation - Action Space**:
- Action types (discrete, continuous, hierarchical, compositional)
- Available tools (read, write, execute, communicate operations)
- Permission boundaries (scope limits, rate limits, resource limits, safety constraints)
- Action constraints (require approval, reversibility, observability, sandboxing)

**Theoretical Roots**: Self-Determination Theory (Autonomy), Reinforcement Learning (action spaces), Configuration Space (LaValle)

---

### Objective Function: Alignment Function (Retrospective)
**General Definition**: Meta-level check asking "Am I optimizing for the RIGHT thing?" - preventing goal misalignment and value drift
**Question**: "Am I optimizing for the right thing?"

**Human Instantiation - Purpose**:
- Meaning sources (user impact, technical challenge, team mission, organizational goals)
- Purpose hierarchy (task → feature → system → organization → society)
- Directive alignment (clarity, agreement, contribution, communication)
- Purpose erosion prevention (pointless work, misalignment, disconnection)

**Agent Instantiation - Value Alignment**:
- Alignment mechanisms (RLHF, Constitutional AI, Debate/Amplification, Interpretability)
- Goal specification (explicit goals, implicit constraints, negative examples, edge cases)
- Safety constraints (hard constraints, soft constraints, uncertainty handling)
- Alignment verification (test batteries, red teaming, behavioral audits, feedback loops)

**Theoretical Roots**: Self-Determination Theory (Relatedness), AI Safety (Amodei et al.), Human Compatible (Russell), Constitutional AI (Bai et al.)

---

## Cycle Integration Patterns

### Prospective → Actuation
- **Proactive Curiosity** provides context for **Challenge Matching** (know capabilities and demands)
- **Cohesive Narrative** enables **Directed Intentionality** (shared understanding of goals)
- **Shared Understanding** supports **Adaptive Control** (observable systems, documented feedback loops)

### Actuation → Retrospective
- **Challenge Matching** outcomes feed **Continuous Integration** (was difficulty right-sized?)
- **Directed Intentionality** clarity enables **Deliberate Practice** (goals make improvement routines visible)
- **Adaptive Control** data informs **Update Propagation** (real-time feedback becomes permanent improvement)

### Retrospective → Prospective (Loop Closure)
- **Continuous Integration** enriches **Proactive Curiosity** (experiential data added to knowledge base)
- **Deliberate Practice** improves **Cohesive Narrative** (practiced routines reveal system structure)
- **Update Propagation** maintains **Shared Understanding** (propagated improvements become cognitive artifacts)

### Objective Function Integration

**Objective Function guides all three phases**:
- **Prospective**: Curiosity driven by Reward Signal (Mastery/Reward Function desire)
- **Actuation**: Goals aligned within Degrees of Freedom (Autonomy/Action Space), aimed toward Alignment Function (Purpose/Value Alignment)
- **Retrospective**: Improvement validates Reward Signal, checks Alignment Function correctness

---

## IC Level Application

| IC Level | Prospective Focus | Actuation Focus | Retrospective Focus | Objective Function |
|----------|-------------------|-----------------|---------------------|---------------------|
| 0-1 | Crawl domain, ask questions | Match task difficulty to skill | Test state continuously, participate in improvement cycles | Learn fundamentals, build skills |
| 2-3 | Index knowledge, build mental models | Calibrate challenges, set clear goals | Conduct postmortems, practice improvement routines | Mentor others, make decisions |
| 4-5 | Multi-sensor fusion, cognitive artifacts | System-level alignment, feedback loops | Track improvement velocity, propagate fixes structurally | Deep expertise, own systems |
| 6-7+ | Organizational memory systems | Organizational Flow state | Establish Yokoten practice, build recursive improvement systems | Shape culture, mentor seniors |

---

## Common Anti-Patterns

| Phase | Anti-Pattern | Solution |
|-------|--------------|----------|
| Prospective | Discovery Failure | Systematic crawling, cross-team code search |
| Prospective | Stale Documentation | Assign owners, quarterly reviews, DoD includes docs |
| Actuation | Analysis Paralysis | Time-box planning, default to action |
| Actuation | Scope Creep | Ruthless exit strategy enforcement |
| Retrospective | No Continuous Integration | Make CI required; treat broken CI as stop-the-line event |
| Retrospective | Blame Culture | Blameless postmortems grounded in Hansei, psychological safety |
| Retrospective | Automating Inefficiency | Question → Delete → Simplify before Automate (never automate waste) |
| Objective Function | Learned Helplessness | Explicitly grant decision authority |
| Objective Function | Burnout (Extrinsic-Only) | Reconnect to meaningful outcomes |

---

## Measurement Framework

### Contextual Awareness Metrics (Prospective)
- **Proactive Curiosity**: Time to find information, search success rate, duplicate work %
- **Cohesive Narrative**: Onboarding time, change impact accuracy, incident response time
- **Shared Understanding**: Documentation coverage, doc age, knowledge loss on turnover

### Clear Strategy Metrics (Actuation)
- **Challenge Matching**: Task-skill match %, burnout/boredom indicators, flow state frequency
- **Directed Intentionality**: Goal clarity %, scope stability, focus time blocks
- **Adaptive Control**: Feedback loop speed, deployment frequency, MTTR

### Systematic Improvement Metrics (Retrospective)
- **Continuous Integration**: % of system state continuously tested, time to detect drift, blameless postmortem rate
- **Deliberate Practice**: Improvement cycle time, signal vs noise accuracy, waste identification rate
- **Update Propagation**: Recurrence rate (should trend to zero), propagation coverage %, improvement velocity

### Objective Function Metrics
- **Reward Signal**: Skill growth rate (human), loss curves (agent), learning time allocation, challenge seeking
- **Degrees of Freedom**: Decision velocity (human), action coverage (agent), escalation rate, ownership distribution
- **Alignment Function**: Mission understanding (human), human agreement rate (agent), work alignment %, safety violations

---

## Documentation Locations

| Content Type | Primary Location | Secondary Locations |
|--------------|-----------------|---------------------|
| Framework Summary | `/AGENTS.md` | `/career.md` |
| Detailed Specifications | `/pillars/*.md` (4 files) | - |
| Presentation Slides | `/presentation/eng_*.md` (4 files) | - |
| IC-Level Application | `/career.md` | `/pillars/README.md` |
| Integration Examples | Multiple `/specs/` directories | - |

**Four Pillar Specification Files**:
1. `pillars/contextual_awareness.md` (Prospective/KNOWING)
2. `pillars/clear_strategy.md` (Actuation/ACTING)
3. `pillars/reflective_convergence.md` (Retrospective/IMPROVING)
4. `pillars/objective_function.md` (Objective Function/WHY) — positioned above cycle, works for any agent (human or AI)

---

## References

### Robotics & Control Theory
- **Perception**: Sensor fusion, SLAM, environment mapping
- **Actuation**: Kinematics, path planning, PID control
- **Feedback Control**: Closed-loop systems, error signals, adaptive control

### Psychology & Management
- **Flow Theory** (Csikszentmihalyi): Challenge-Skill Balance, Clear Goals, Immediate Feedback
- **Self-Determination Theory** (Deci & Ryan): Competence, Autonomy, Relatedness
- **Double-Loop Learning** (Argyris): Question underlying assumptions
- **Deliberate Practice** (Ericsson): Structured practice at the edge of current ability

### Kaizen & Manufacturing
- **Kaizen** (Imai): Ongoing improvement involving everybody
- **Toyota Production System** (Ohno): Muda, Poka-yoke, Jidoka, Yokoten
- **Toyota Kata** (Rother): The Improvement Kata — practiced routine of improvement
- **Five-Step Algorithm** (Musk): Question → Delete → Simplify → Accelerate → Automate

### Systems & Strategy
- **OODA Loop** (Boyd): Observe, Orient, Decide, Act cycle
- **Systems Thinking** (Meadows): Feedback loops, leverage points, archetypes
- **Cybernetic Control** (Wiener): Self-regulating systems through feedback

### Software Engineering
- **DORA Metrics**: Deployment frequency, lead time, MTTR, change failure rate
- **Blameless Postmortems**: Psychological safety in incident response
- **Cognitive Artifacts** (Norman): External representations extending cognition

---

**Last Updated**: 2026-04-07
**Framework Version**: 4.0 (Objective Function + Prospective-Actuation-Retrospective Cycle)
**Status**: Production-ready
**Major Changes from 3.0**: Intrinsic Motivation elevated and generalized to Objective Function (agent-agnostic - works for humans and AI), added Systematic Improvement (Retrospective/IMPROVING) with Kaizen foundations, integrated robotics foundations, added reinforcing loop concept
