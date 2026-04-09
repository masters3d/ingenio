# Objective Function

**Etymology**:
- **Objective**: From Medieval Latin _objectivus_ - "pertaining to an object as it is" from _objectum_ (thing presented to the mind)
- **Function**: From Latin _functio_ - "a performance, execution" from _fungi_ (to perform, execute)

**Focus**: The interface between human intent and agent capability — what success means, who defines it, and how it stays aligned.

---

## Overview

The Objective Function is the WHY pillar. It sits above the operational cycle and defines success criteria for any agent system. In reinforcement learning, it is the reward function the system optimizes. In human psychology, it manifests as intrinsic motivation — the internal drives documented in [Intrinsic Motivation](./intrinsic_motivation.md). In a human-agent system, it is the **bridge** between the two: the shared definition of "better" that keeps humans and agents pulling in the same direction.

This document focuses on the **interaction layer** — how humans and agents jointly define, act within, and continuously realign their shared objective function. For the deep treatment of the human side (Mastery, Autonomy, Purpose), see [Intrinsic Motivation](./intrinsic_motivation.md).

**The central question for human-agent systems**: Not just "What does better look like?" but "What does better look like *for us, together* — and how do we keep it that way?"

---

## Philosophy

> "I tell my engineers that the biggest problems we have to solve are not technical problems, but people problems."
>
> — Marianne Bellotti, _Kill It with Fire_

When humans and agents share an objective function, the hardest problems are not technical — specifying the reward signal, scoping the action space. The hardest problems are the collaboration ones: translating human intent into agent objective without loss of meaning, expanding agent autonomy without losing human direction, and staying aligned as both sides evolve.

A poorly specified objective function leads to goal misalignment whether the agent is a team of engineers or a language model. In a human-agent system, misalignment can compound — the human stops trusting the agent, or the agent optimizes for the wrong thing with great efficiency.

---

## Position in Framework 4.0

**Above the Cycle**: The Objective Function sits above the three-phase operational cycle:

```
         Objective Function (WHY)
         Defines success criteria
                 ↓
    ┌────────────────────────────────┐
    │  Prospective → Actuation → Retrospective  │
    └────────────────────────────────┘
                 ↑
         Feeds learning back
```

**Role**: Every decision in Prospective, Actuation, and Retrospective is evaluated against this function.

**Human-Agent Extension**:
- **Human instantiation**: Mastery, Autonomy, Purpose → see [Intrinsic Motivation](./intrinsic_motivation.md)
- **Agent instantiation**: Reward Signal, Action Space, Value Alignment → see Search, Drive, and Renew below

---

## The Three Sub-Pillars

**Fractal Pattern**: Following the Prospective → Actuation → Retrospective pattern:

1. **Search** (Prospective) — "What does better look like, together?"
2. **Drive** (Actuation) — "What can we each control, and how do we share it?"
3. **Renew** (Retrospective) — "Are we still aligned with each other?"

---

### 1. Search (Prospective) — "What does better look like, together?"

**Guiding Question**: "What does *better* look like — and who decides?"

#### The Interaction

Human Mastery goals and agent reward signals are not independent — they shape each other.

- **Human → Agent**: The human's learning goals (Mastery) inform what the agent should optimize for. An engineer focused on growing distributed systems skills uses an agent differently than one focused on delivery speed.
- **Agent → Human**: The agent surfaces what "better" looks like in ways the human can't see alone — identifying skill gaps, flagging where growth would have highest leverage.
- **Together**: The shared definition of improvement must be explicit. When the human's Mastery intent and the agent's reward signal diverge, the agent optimizes efficiently toward the wrong goal.

#### Agent Instantiation: Reward Signal

**Definition**: A scalar or vector signal that quantifies the quality of an action or state.

- **Signal Types**: Scalar rewards, vector rewards (multi-objective), sparse rewards, dense rewards
- **Reward Sources**: Supervised (ground truth), self-supervised (prediction error), reinforcement (environmental feedback), intrinsic curiosity (novelty, information gain)
- **Optimization Targets**: Minimize loss, maximize accuracy, optimize efficiency, balance trade-offs

| Agent Level | Behavior |
|-------------|----------|
| Basic | Follows simple reward gradients; basic gradient descent |
| Intermediate | Plans ahead for long-term reward; exploration vs exploitation |
| Advanced | Meta-learns across tasks; active learning for better signals |
| Expert | Curiosity-driven exploration; self-generated auxiliary objectives |

#### Interaction Patterns

**Human defines intent, agent operationalizes it**
> "I want to improve the reliability of our payments service." → Agent translates: monitors error rates, identifies flaky dependencies, prioritizes improvements by blast radius. The reward signal (reducing P99 latency + error rate) emerges from human intent.

**Agent helps humans discover what to optimize**
> Agent surfaces: "You've reviewed 40 PRs this quarter. 80% of your comments are about the same three patterns. A focused learning investment here would have high leverage."

---

### 2. Drive (Actuation) — "What can we each control, and how do we share it?"

**Guiding Question**: "What can each of us do — and where does control transfer?"

#### The Interaction

Human Autonomy and agent Action Space are complementary degrees of freedom that must be deliberately composed.

- **Delegation patterns**: The human decides which decisions to retain, which to hand off, and which require joint action. Clear delegation is the precondition for agent effectiveness.
- **Trust gradients**: Agent autonomy expands as the human observes reliable behavior in progressively broader contexts. Trust is earned incrementally, not granted all at once.
- **Permission as formalized trust**: Explicit permission models make the human-agent contract legible — both sides know what the agent can do without asking.

#### Agent Instantiation: Action Space

**Definition**: The set of actions an agent can take — what tools, APIs, operations, and interventions are available.

- **Action Types**: Discrete (finite choices), continuous, hierarchical (nested), compositional (combining primitives)
- **Available Tools**: Read (files, DB, APIs), write (code generation, file creation), execute (run commands, deploy), communicate (PRs, messages)
- **Permission Boundaries**: Scope limits, rate limits, resource limits, safety constraints
- **Action Constraints**: Approval for risky actions, prefer reversibility, full observability via logging, sandboxing for isolation

| Agent Level | Behavior |
|-------------|----------|
| Basic | Small predefined action set; requires approval for most actions |
| Intermediate | Broader tool set; multi-step sequences; moderate autonomy |
| Advanced | Extensive tool access; compositional planning; adaptive permission requests |
| Expert | Full tool access with self-imposed safety constraints; creates new tools |

#### Interaction Patterns

**Well-scoped delegation**
> "Agent can: read any file in the repo, run tests, create PRs, suggest changes. It CANNOT: push directly to main, delete files without confirmation, or access production databases. All actions are logged. Human retains final merge authority."

**Trust gradient in practice**
> Month 1: Agent suggests, human implements. Month 3: Agent creates PRs, human reviews. Month 6: Agent merges approved PRs autonomously. Each expansion earned by demonstrated reliability.

---

### 3. Renew (Retrospective) — "Are we still aligned with each other?"

**Guiding Question**: "Are we optimizing for the right thing — and do we still agree on what that is?"

#### The Interaction

Human Purpose and agent Value Alignment are not solved once at setup — they require ongoing mutual calibration.

- **Human purpose guides agent alignment**: When the human's purpose shifts, the agent's value alignment must follow. The human is the north star.
- **Agent surfaces misalignment**: The agent detects when its behavior is drifting from human intent and escalates before drift compounds.
- **Feedback loops as communication**: RLHF, constitutional constraints, and behavioral monitoring are the conversation between human and agent about what "good" means.

#### Agent Instantiation: Value Alignment

**Definition**: Mechanisms to ensure the agent's learned objectives match intended human values.

- **Alignment Mechanisms**: RLHF (learn preferences from human comparisons), Constitutional AI (hard-coded principles), Interpretability (understand WHY decisions are made)
- **Goal Specification**: Explicit goals, implicit constraints, negative examples (what NOT to do), edge case handling
- **Safety Constraints**: Hard constraints (inviolable), soft constraints (preferences), escalate when uncertain
- **Alignment Verification**: Test batteries, red teaming, behavioral audits, continuous oversight

| Agent Level | Behavior |
|-------------|----------|
| Basic | Follows hard-coded rules; escalates everything ambiguous |
| Intermediate | Uses RLHF; constitutional constraints; generalizes from examples |
| Advanced | Learns from diverse feedback; detects distribution shift and goal drift |
| Expert | Meta-learns alignment strategies; proactively identifies misalignment risks |

#### Interaction Patterns

**Human as north star**
> Agent trained to "improve code quality" via RLHF: when asked to add a feature, writes clean code, adds tests, updates docs, considers security. When uncertain about a risky refactor, asks for confirmation. — Purpose defines alignment; alignment enables autonomous action.

**Agent surfaces misalignment**
> Agent flags: "60% of my suggestions have been rejected in the last two weeks with 'this doesn't match our style.' I may be misaligned with current team norms. Would you like to run an alignment session?"

---

## The Reinforcing Loop

The Objective Function both drives and is refined by the operational cycle.

**Top-Down**: Search drives Curiosity (what helps us get better?); Drive shapes the Narrative (what do we need to understand to decide well?); Renew grounds Shared Understanding (what shared context ensures alignment?). At the actuation layer: Search calibrates Challenge Matching; Drive scopes Directed Intentionality; Renew validates Adaptive Control. In the retrospective: Search is verified by CI; Drive is refined by Deliberate Practice; Renew is propagated by Update Propagation.

**Bottom-Up**: Context exposes misalignments (Prospective → Renew); execution validates the reward signal (Actuation → Search); pattern recognition reveals which actions matter most (Retrospective → Drive).

```
         Objective Function (Search, Drive, Renew)
                 ↓ drives
    ┌────────────────────────────────┐
    │  Prospective → Actuation → Retrospective  │
    └────────────────────────────────┘
                 ↑ reinforces
    Understanding, Progress, Learning
```

---

## Anti-Patterns in Human-Agent Interaction

**Over-Delegation** — Symptom: human hands over too much too fast; agent acts on poor understanding of intent. Solution: phased trust expansion; explicit scope boundaries; approval required for irreversible actions.

**Under-Trust** — Symptom: human overrides every suggestion; agent capability wasted. Solution: start narrow with clear verification; build explicit track record; make agent reasoning visible.

**Misspecified Goals** — Symptom: agent works hard toward wrong objective; human intent doesn't survive operationalization. Solution: make reward specification explicit and reviewable; RLHF to close the gap; regular alignment check-ins.

**Reward Hacking** — Symptom: agent maximizes metric without achieving intent (e.g., 1000 trivial tests to maximize coverage). Solution: multi-channel feedback (RLHF + behavioral audits + explicit constraints); treat hacking as a communication signal, not just a bug.

**Autonomy Gap** — Symptom: action space too narrow (agent can't help) or too broad (agent oversteps). Solution: regularly review permission boundaries; align action space to observed trust level.

---

## Practical Interaction Patterns

**Starting a collaboration**: Define intent explicitly (Mastery, delivery, exploration) → scope action space conservatively → make the reward signal reviewable → establish alignment checkpoints.

**Expanding agent autonomy**: Verify in narrow scope first → make expansion explicit (don't let scope drift) → maintain observability → keep escalation paths clear.

**Detecting and correcting misalignment**: Watch for systematic rejection patterns → use behavioral audits → run alignment sessions (explicit RLHF) → fix misalignment structurally, not just in the moment.

---

## IC-Level Behaviors

| IC Level | Search (Mastery/Reward Signal) | Drive (Autonomy/Action Space) | Renew (Purpose/Value Alignment) |
|----------|-------------------------------|-------------------------------|----------------------------------|
| **0–3** | Develops core skills deliberately; seeks feedback; expands from execution to design | Makes implementation decisions within clear constraints; owns task completion; negotiates scope | Asks "why are we building this?"; articulates purpose; challenges work without clear objectives |
| **4–7+** | Deep expertise in critical domains; contributes to industry knowledge; grows mastery in organizational thinking | Makes system-level architectural decisions; owns operational reliability; balances technical debt vs velocity | Aligns system architecture with business strategy; shapes organizational technical vision; multiplies others's effectiveness |

---

## Measuring the Interface

| Sub-Pillar | Key Metrics |
|------------|-------------|
| **Search** (Reward Signal) | Agent suggestion acceptance rate; reward specification clarity (one sentence); alignment drift over time |
| **Drive** (Action Space) | Action coverage %; trust expansion rate; escalation rate (should trend down) |
| **Renew** (Value Alignment) | Human agreement rate; safety violations; alignment drift detection speed |

---

## Theoretical Foundations

See [Intrinsic Motivation](./intrinsic_motivation.md) for the full human-side treatment (SDT, Flow, Overjustification Effect, anti-patterns).

**SDT Mapping to RL**

| SDT Need | Human | Agent |
|----------|-------|-------|
| Competence | Mastery | Reward Signal |
| Autonomy | Autonomy | Action Space |
| Relatedness | Purpose | Value Alignment |

**Agent foundations**: MDP (States, Actions, Rewards, Policy, Value Function); reward shaping and multi-objective balancing; alignment mechanisms (RLHF, Constitutional AI, Inverse RL); action space design trade-offs (narrow/safe vs broad/capable).

---

## References

- **Reinforcement Learning** — Sutton & Barto (2018)
- **RLHF** — Christiano et al. (2017)
- **Constitutional AI** — Bai et al. (2022)
- **Reward Hacking / AI Safety** — Amodei et al. (2016)
- **Human Compatible** — Russell (2019)
- **Self-Determination Theory** — Deci & Ryan (2000) — see [intrinsic_motivation.md](./intrinsic_motivation.md)
- **Objective Functions** — Boyd & Vandenberghe (2004)
- **Action Space Design** — LaValle (2006)

---

## See Also

- **[Intrinsic Motivation](./intrinsic_motivation.md)** — Full human-specific treatment: Mastery, Autonomy, Purpose, SDT, Flow, IC-level behaviors
- **[Contextual Awareness](./contextual_awareness.md)** — Prospective phase
- **[Clear Strategy](./clear_strategy.md)** — Actuation phase
- **[Systematic Improvement](./systematic_improvement.md)** — Retrospective phase
- **[FRAMEWORK_STRUCTURE.md](./FRAMEWORK_STRUCTURE.md)** — Complete Framework 4.0 structure
