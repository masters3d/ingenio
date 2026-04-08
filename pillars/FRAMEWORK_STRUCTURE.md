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
└── Reflective Convergence (Retrospective - LEARNING)
    ├── State Estimation
    ├── Pattern Synthesis
    └── Learning Calibration
```

## Quick Reference Matrix

| Component | Sub-Pillar 1 | Sub-Pillar 2 | Sub-Pillar 3 | Role | Robotics | OODA |
|-----------|--------------|--------------|--------------|------|----------|------|
| **Contextual Awareness** (Prospective) | Proactive Curiosity | Cohesive Narrative | Shared Understanding | KNOWING | Perception | Observe + Orient |
| **Clear Strategy** (Actuation) | Challenge Matching | Directed Intentionality | Adaptive Control | ACTING | Actuation | Decide + Act |
| **Reflective Convergence** (Retrospective) | State Estimation | Pattern Synthesis | Learning Calibration | LEARNING | State Estimation | Loop back |
| **Objective Function** (WHY) | Reward Signal (Mastery/Reward Fn) | Degrees of Freedom (Autonomy/Action Space) | Alignment Function (Purpose/Value Alignment) | WHY | Reward/Cost Function | Defines success |

## Fractal Pattern: Sub-Pillars Mirror the Cycle

**Every pillar's three sub-pillars internally mirror the Prospective → Actuation → Retrospective cycle:**

| Main Pillar | Sub-Pillar 1 (Prospective) | Sub-Pillar 2 (Actuation) | Sub-Pillar 3 (Retrospective) |
|-------------|----------------------------|--------------------------|------------------------------|
| **Contextual Awareness** (Prospective/KNOWING) | **Proactive Curiosity** - Look forward, crawl, discover, sense the environment | **Cohesive Narrative** - Act on data, build mental models, synthesize information | **Shared Understanding** - Look back, externalize learnings, preserve for future |
| **Clear Strategy** (Actuation/ACTING) | **Challenge Matching** - Look forward, assess capabilities vs demands before acting | **Directed Intentionality** - Execute, project consciousness toward objective | **Adaptive Control** - Look back at feedback, correct course in real-time |
| **Reflective Convergence** (Retrospective/LEARNING) | **State Estimation** - Look forward at data, measure actual vs expected, gather signals | **Pattern Synthesis** - Act on findings, revise mental models, fix docs/processes | **Learning Calibration** - Look back at how you learn, improve feedback loops (meta-learning) |
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
- **New pillar**: Reflective Convergence (LEARNING/Retrospective)

### Theoretical Foundations

**Added in 4.0**:
- **Robotics frameworks**: Perception, Actuation, State Estimation
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

### Phase 3: Reflective Convergence (Retrospective - LEARNING)

**Cycle Name**: Retrospective
**Role**: LEARNING from what happened
**Robotics**: State Estimation (Kalman filter, observers, feedback control)
**OODA**: Feedback arc from Act back to Observe

**Three Sub-Pillars**:
1. **State Estimation**: Look forward at the data, measure actual vs expected, gather signals
2. **Pattern Synthesis**: Act on findings, revise mental models, fix docs and processes
3. **Learning Calibration**: Look back at how you learn, improve feedback loops themselves (meta-learning)

**Purpose**: Close the improvement loop by extracting and applying learnings.

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
    │  3. REFLECTIVE CONVERGENCE (Retrospective)│
    │     - State Estimation                   │
    │     - Pattern Synthesis                  │
    │     - Learning Calibration                  │
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

### Reflective Convergence: State Estimation
**Definition**: Look forward at the data — measure actual vs expected, gather signals before interpreting

**Key Components**:
- Compare Prediction vs Reality (measurement gap)
- Identify Contributing Factors (root cause analysis, Five Whys)
- Assess Impact (who affected, what cost, what learned)
- Document Without Blame (blameless postmortems, psychological safety)

**Theoretical Roots**: Robotics State Estimation (Kalman filter prediction-measurement), Control Theory error signals, After-Action Review

---

### Reflective Convergence: Pattern Synthesis
**Definition**: Act on findings — identify patterns (both what failed and what succeeded), synthesize observations into understanding, and revise mental models, docs, and processes

**Key Components**:
- Distinguish Signal from Noise (one-off vs systemic, special vs common cause)
- Recognize System Archetypes (Success to Successful, Tragedy of Commons, Fixes that Backfire)
- Identify Feedback Loops (reinforcing, balancing, delays)
- Extract Generalizable Lessons (underlying principles, mental models, heuristics)

**Theoretical Roots**: Machine Learning pattern extraction, Systems Thinking archetypes, Statistical Process Control, Double-Loop Learning

---

### Reflective Convergence: Learning Calibration
**Definition**: Look back at how you learn — improve the feedback loops themselves, meta-learning

**Key Components**:
- Update Mental Models (adjust map to match territory, Bayesian updating)
- Revise Strategies (change future behavior based on outcomes)
- Adjust Processes (improve team practices, tools, workflows)
- Close the Loop (feed learning back to Prospective phase, update cognitive artifacts)

**Theoretical Roots**: Bayesian Updating, Double-Loop Learning (Argyris), SLAM Replanning, Adaptive Control, Meta-Learning

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
- **Challenge Matching** outcomes feed **State Estimation** (was difficulty right-sized?)
- **Directed Intentionality** clarity enables **Pattern Synthesis** (goals make patterns visible)
- **Adaptive Control** data informs **Learning Calibration** (real-time feedback becomes learning)

### Retrospective → Prospective (Loop Closure)
- **State Estimation** enriches **Proactive Curiosity** (experiential data added to knowledge base)
- **Pattern Synthesis** improves **Cohesive Narrative** (patterns reveal system structure)
- **Learning Calibration** maintains **Shared Understanding** (learnings become cognitive artifacts)

### Objective Function Integration

**Objective Function guides all three phases**:
- **Prospective**: Curiosity driven by Reward Signal (Mastery/Reward Function desire)
- **Actuation**: Goals aligned within Degrees of Freedom (Autonomy/Action Space), aimed toward Alignment Function (Purpose/Value Alignment)
- **Retrospective**: Learning validates Reward Signal, checks Alignment Function correctness

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
- **Challenge Matching**: Task-skill match %, burnout/boredom indicators, flow state frequency
- **Directed Intentionality**: Goal clarity %, scope stability, focus time blocks
- **Adaptive Control**: Feedback loop speed, deployment frequency, MTTR

### Reflective Convergence Metrics (Retrospective)
- **State Estimation**: % of incidents with root cause analysis, time to postmortem, prediction accuracy
- **Pattern Synthesis**: % repeat incidents, documented patterns, proactive prevention rate
- **Learning Calibration**: Action item completion %, documentation update frequency, learning velocity

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
3. `pillars/reflective_convergence.md` (Retrospective/LEARNING)
4. `pillars/objective_function.md` (Objective Function/WHY) — positioned above cycle, works for any agent (human or AI)

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
**Major Changes from 3.0**: Intrinsic Motivation elevated and generalized to Objective Function (agent-agnostic - works for humans and AI), added Reflective Convergence (Retrospective/LEARNING), integrated robotics foundations, added reinforcing loop concept
