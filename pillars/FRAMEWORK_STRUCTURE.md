# Three Pillars Framework - Complete Structure (Version 4.0)

## Framework Overview

```
Intrinsic Motivation (Objective Function - WHY)
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
│   ├── Difficulty Alignment
│   ├── Directed Intentionality
│   └── Adaptive Control
└── Reflective Calibration (Retrospective - LEARNING)
    ├── Outcome Analysis
    ├── Pattern Recognition
    └── Model Update
```

## Quick Reference Matrix

| Component | Sub-Pillar 1 | Sub-Pillar 2 | Sub-Pillar 3 | Role | Robotics | OODA |
|-----------|--------------|--------------|--------------|------|----------|------|
| **Contextual Awareness** (Prospective) | Proactive Curiosity | Cohesive Narrative | Shared Understanding | KNOWING | Perception | Observe + Orient |
| **Clear Strategy** (Actuation) | Difficulty Alignment | Directed Intentionality | Adaptive Control | ACTING | Actuation | Decide + Act |
| **Reflective Calibration** (Retrospective) | Outcome Analysis | Pattern Recognition | Model Update | LEARNING | State Estimation | Loop back |
| **Intrinsic Motivation** (Objective Function) | Mastery | Autonomy | Purpose | WHY | Reward/Cost Function | Defines success |

## Architecture Changes from Framework 3.0

### Major Restructuring

**Framework 3.0** (Three Equal Pillars):
- Clear Strategy
- Intrinsic Motivation
- Contextual Awareness

**Framework 4.0** (Objective Function + Three-Phase Cycle):
- **Intrinsic Motivation** elevated to **Objective Function** (sits above cycle, defines WHY)
- **Three-phase operational cycle**: Prospective → Actuation → Retrospective
- **New pillar**: Reflective Calibration (LEARNING/Retrospective)

### Theoretical Foundations

**Added in 4.0**:
- **Robotics frameworks**: Perception, Actuation, State Estimation
- **Control Theory**: Feedback loops, Kalman filtering, PID control
- **Objective Function**: Mathematical reward/cost function (defines success)
- **Closed-loop learning**: Retrospective feeds back to Prospective

**Retained from 3.0**:
- Flow Theory (Clear Strategy)
- OODA Loop (Contextual Awareness + Clear Strategy)
- Self-Determination Theory (Intrinsic Motivation)
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
1. **Difficulty Alignment**: Challenge-Skill Balance (Flow Channel)
2. **Directed Intentionality**: Clear Goals (eliminates psychic entropy)
3. **Adaptive Control**: Immediate Feedback (closed-loop adjustment)

**Purpose**: Execute effectively by creating Flow state conditions.

---

### Phase 3: Reflective Calibration (Retrospective - LEARNING)

**Cycle Name**: Retrospective
**Role**: LEARNING from what happened
**Robotics**: State Estimation (Kalman filter, observers, feedback control)
**OODA**: Feedback arc from Act back to Observe

**Three Sub-Pillars**:
1. **Outcome Analysis**: Examine what actually happened
2. **Pattern Recognition**: Identify recurring themes and signals
3. **Model Update**: Revise mental models and strategies based on evidence

**Purpose**: Close the improvement loop by extracting and applying learnings.

---

## Above the Cycle: Intrinsic Motivation (Objective Function - WHY)

**Role**: Defines what success means, guides all phases of the cycle
**Robotics**: Reward/Cost Function (objective function optimization)
**OODA**: The criteria by which Observe/Orient/Decide/Act are judged

**Three Sub-Pillars**:
1. **Mastery**: The urge to get better at things that matter
2. **Autonomy**: The desire to direct your own work and own outcomes
3. **Purpose**: Connection to meaningful work beyond personal gain

**Position in Framework**:
- NOT part of the operational cycle
- Sits above cycle as the defining objective function
- Answers "WHY do we act?" while cycle answers "HOW do we act?"
- Provides the success criteria for all three phases

**Integration**:
- **Prospective**: Curiosity driven by desire for Mastery
- **Actuation**: Clear goals aligned with Purpose, executed with Autonomy
- **Retrospective**: Learning demonstrates Mastery progress, clarifies Purpose

---

## Complete Cycle Flow

```
         ┌─────────────────────────────────┐
         │  Intrinsic Motivation (WHY)     │
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
    │     - Difficulty Alignment               │
    │     - Directed Intentionality            │
    │     - Adaptive Control                   │
    │     ACTING: Execute in environment       │
    │                                          │
    ├──────────────────────────────────────────┤
    │                                          │
    │  3. REFLECTIVE CALIBRATION (Retrospective)│
    │     - Outcome Analysis                   │
    │     - Pattern Recognition                │
    │     - Model Update                       │
    │     LEARNING: Extract and apply lessons  │
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

### Clear Strategy: Difficulty Alignment
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

### Reflective Calibration: Outcome Analysis
**Definition**: Examine what actually happened — compare predicted results against observed reality

**Key Components**:
- Compare Prediction vs Reality (measurement gap)
- Identify Contributing Factors (root cause analysis, Five Whys)
- Assess Impact (who affected, what cost, what learned)
- Document Without Blame (blameless postmortems, psychological safety)

**Theoretical Roots**: Robotics State Estimation (Kalman filter prediction-measurement), Control Theory error signals, After-Action Review

---

### Reflective Calibration: Pattern Recognition
**Definition**: Identify recurring themes and signals — extract generalizable insights

**Key Components**:
- Distinguish Signal from Noise (one-off vs systemic, special vs common cause)
- Recognize System Archetypes (Success to Successful, Tragedy of Commons, Fixes that Backfire)
- Identify Feedback Loops (reinforcing, balancing, delays)
- Extract Generalizable Lessons (underlying principles, mental models, heuristics)

**Theoretical Roots**: Machine Learning pattern extraction, Systems Thinking archetypes, Statistical Process Control

---

### Reflective Calibration: Model Update
**Definition**: Revise mental models and strategies based on evidence

**Key Components**:
- Update Mental Models (adjust map to match territory, Bayesian updating)
- Revise Strategies (change future behavior based on outcomes)
- Adjust Processes (improve team practices, tools, workflows)
- Close the Loop (feed learning back to Prospective phase, update cognitive artifacts)

**Theoretical Roots**: Bayesian Updating, Double-Loop Learning (Argyris), SLAM Replanning, Adaptive Control

---

### Intrinsic Motivation: Mastery
**Definition**: The urge to get better at things that matter

**Key Components**:
- Skill development (deliberate practice, feedback integration)
- Learning mechanisms (doing, teaching, failing, reading)
- Expertise levels (Novice → Expert progression)
- Mastery domains (Technical, Domain, Process, People)

**Theoretical Roots**: Self-Determination Theory (Competence), Deliberate Practice (Ericsson)

---

### Intrinsic Motivation: Autonomy
**Definition**: The desire to direct your own work and own outcomes

**Key Components**:
- Decision-making authority (technical, process, priority, quality)
- Ownership models (code, feature, system, problem)
- Autonomy enablers (clear boundaries, context, psychological safety)
- Autonomy constraints (alignment, visibility, reversibility, consultation)

**Theoretical Roots**: Self-Determination Theory (Autonomy), Agency theory

---

### Intrinsic Motivation: Purpose
**Definition**: Connection to meaningful work beyond personal gain

**Key Components**:
- Meaning sources (user impact, technical challenge, team mission, organizational goals)
- Purpose hierarchy (task → feature → system → organization → society)
- Directive alignment (clarity, agreement, contribution, communication)
- Purpose erosion prevention

**Theoretical Roots**: Self-Determination Theory (Relatedness), Meaning-making theory

---

## Cycle Integration Patterns

### Prospective → Actuation
- **Proactive Curiosity** provides context for **Difficulty Alignment** (know capabilities and demands)
- **Cohesive Narrative** enables **Directed Intentionality** (shared understanding of goals)
- **Shared Understanding** supports **Adaptive Control** (observable systems, documented feedback loops)

### Actuation → Retrospective
- **Difficulty Alignment** outcomes feed **Outcome Analysis** (was difficulty right-sized?)
- **Directed Intentionality** clarity enables **Pattern Recognition** (goals make patterns visible)
- **Adaptive Control** data informs **Model Update** (real-time feedback becomes learning)

### Retrospective → Prospective (Loop Closure)
- **Outcome Analysis** enriches **Proactive Curiosity** (experiential data added to knowledge base)
- **Pattern Recognition** improves **Cohesive Narrative** (patterns reveal system structure)
- **Model Update** maintains **Shared Understanding** (learnings become cognitive artifacts)

### Objective Function Integration

**Intrinsic Motivation guides all three phases**:
- **Prospective**: Curiosity driven by Mastery desire
- **Actuation**: Goals aligned with Purpose, executed with Autonomy
- **Retrospective**: Learning demonstrates Mastery, clarifies Purpose

---

## IC Level Application

| IC Level | Prospective Focus | Actuation Focus | Retrospective Focus | Objective Function |
|----------|-------------------|-----------------|---------------------|---------------------|
| 0-1 | Crawl domain, ask questions | Match task difficulty to skill | Review feedback, participate in retrospectives | Learn fundamentals, build skills |
| 2-3 | Index knowledge, build mental models | Calibrate challenges, set clear goals | Conduct postmortems, analyze metrics | Mentor others, make decisions |
| 4-5 | Multi-sensor fusion, cognitive artifacts | System-level alignment, feedback loops | Track patterns, identify systemic issues | Deep expertise, own systems |
| 6-7+ | Organizational memory systems | Organizational Flow state | Analyze multi-system patterns | Shape culture, mentor seniors |

---

## Common Anti-Patterns

| Phase | Anti-Pattern | Solution |
|-------|--------------|----------|
| Prospective | Discovery Failure | Systematic crawling, cross-team code search |
| Prospective | Stale Documentation | Assign owners, quarterly reviews, DoD includes docs |
| Actuation | Analysis Paralysis | Time-box planning, default to action |
| Actuation | Scope Creep | Ruthless exit strategy enforcement |
| Retrospective | No Retrospectives | Make retrospectives required in sprint cycle |
| Retrospective | Blame Culture | Blameless postmortems, psychological safety |
| Objective Function | Learned Helplessness | Explicitly grant decision authority |
| Objective Function | Burnout (Extrinsic-Only) | Reconnect to meaningful outcomes |

---

## Measurement Framework

### Contextual Awareness Metrics (Prospective)
- **Proactive Curiosity**: Time to find information, search success rate, duplicate work %
- **Cohesive Narrative**: Onboarding time, change impact accuracy, incident response time
- **Shared Understanding**: Documentation coverage, doc age, knowledge loss on turnover

### Clear Strategy Metrics (Actuation)
- **Difficulty Alignment**: Task-skill match %, burnout/boredom indicators, flow state frequency
- **Directed Intentionality**: Goal clarity %, scope stability, focus time blocks
- **Adaptive Control**: Feedback loop speed, deployment frequency, MTTR

### Reflective Calibration Metrics (Retrospective)
- **Outcome Analysis**: % of incidents with root cause analysis, time to postmortem, prediction accuracy
- **Pattern Recognition**: % repeat incidents, documented patterns, proactive prevention rate
- **Model Update**: Action item completion %, documentation update frequency, learning velocity

### Intrinsic Motivation Metrics (Objective Function)
- **Mastery**: Skill growth rate, learning time allocation, knowledge sharing frequency
- **Autonomy**: Decision velocity, escalation rate, ownership distribution
- **Purpose**: Mission understanding, work alignment %, engagement scores

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
3. `pillars/reflective_calibration.md` (Retrospective/LEARNING)
4. `pillars/intrinsic_drive.md` (Objective Function/WHY) — retained as reference, now positioned above cycle

---

## References

### Robotics & Control Theory
- **Perception**: Sensor fusion, SLAM, environment mapping
- **Actuation**: Kinematics, path planning, PID control
- **State Estimation**: Kalman filtering, observers, feedback control

### Psychology & Management
- **Flow Theory** (Csikszentmihalyi): Challenge-Skill Balance, Clear Goals, Immediate Feedback
- **Self-Determination Theory** (Deci & Ryan): Competence, Autonomy, Relatedness
- **Double-Loop Learning** (Argyris): Question underlying assumptions

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
**Major Changes from 3.0**: Intrinsic Motivation elevated to Objective Function, added Reflective Calibration (Retrospective/LEARNING), integrated robotics foundations
