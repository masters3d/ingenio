---
marp: true

---

# Objective Function

Chéyo Jiménez, MSE
_Apr, 2026_


---

# Objective

- From Medieval Latin _objectivus_
  - _objectum_ (thing presented to the mind)
  - "Pertaining to an object as it is"
- The target, the goal, what we're aiming for

---

# Function

- From Latin _functio_
  - _fungi_ (to perform, execute)
  - "A performance, execution"
- Mathematical mapping: input → output

---

# Objective Function

**The mathematical formalization of "what does better look like?"**

In robotics: The reward/cost function that defines success

In AI: What the agent optimizes for (loss minimization, reward maximization)

In humans: Intrinsic motivation - the internal compass

---

# Position in Framework 4.0

**Above the operational cycle**

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

Not part of the cycle — defines what the cycle optimizes for

---

# Universal Question

> "What am I trying to optimize? What does *better* look like for me?"

Works for ANY agent:
- Human engineers
- AI systems
- Teams
- Organizations

---

# The Three Sub-Pillars

**Fractal Pattern**: Following Prospective → Actuation → Retrospective

1. **Reward Signal** (Prospective) - "What does *better* look like?"
2. **Degrees of Freedom** (Actuation) - "What can I control?"
3. **Alignment Function** (Retrospective) - "Am I optimizing for the right thing?"

Each has **dual instantiation**: Human + Agent

---

# Sub-Pillar 1: Reward Signal

**Cycle Phase**: Prospective

**Question**: "What does *better* look like?"

The signal that defines improvement — how the agent knows it's getting better

---

# Reward Signal: Human Instantiation

**Mastery** - The urge to get better at things that matter

- **Skill Development**: Deliberate practice, feedback integration
- **Learning Mechanisms**: By doing, teaching, failing, reading
- **Expertise Levels**: Novice → Expert
- **Mastery Domains**: Technical, Domain, Process, People

**Engineering Behaviors**:
- IC 0-1: Seek feedback, ask "why" questions
- IC 2-3: Independently research, mentor juniors
- IC 4-5: Deep expertise, contribute to community
- IC 6-7+: Recognized expert, shape culture

---

# Reward Signal: Agent Instantiation

**Reward Function** - Scalar/vector signal quantifying action quality

- **Signal Types**: Scalar, vector, sparse, dense
- **Reward Sources**: Supervised, self-supervised, reinforcement, intrinsic curiosity
- **Reward Shaping**: Immediate vs delayed feedback, auxiliary rewards, curriculum learning
- **Optimization Targets**: Minimize loss, maximize accuracy, optimize efficiency

**Agent Behaviors**:
- Basic: Simple reward gradients, gradient descent
- Intermediate: Plans for long-term reward, exploration vs exploitation
- Advanced: Meta-learning, reward model uncertainty
- Expert: Intrinsic motivation, curiosity-driven, self-generated objectives

---

# Example: Reward Signal

**Human (Mastery)**
> "I'm weak at distributed systems. I'll volunteer for the microservices project, read 'Designing Data-Intensive Applications', pair with Sarah, and measure my progress through code reviews."

**Agent (Reward Function)**
> "Training code completion model. Reward: +1 compilable, +0.5 tests pass, +0.3 readability, -0.2 security vulnerability. Dense feedback at each token."

---

# Sub-Pillar 2: Degrees of Freedom

**Cycle Phase**: Actuation

**Question**: "What can I control?"

The set of possible actions available — what decisions and interventions are within scope

---

# Degrees of Freedom: Human Instantiation

**Autonomy** - Desire to direct your own work and own outcomes

- **Decision Authority**: Technical, process, priority, quality
- **Ownership Models**: Code, feature, system, problem ownership
- **Autonomy Enablers**: Clear boundaries, sufficient context, psychological safety
- **Autonomy Constraints**: Alignment, visibility, reversibility, consultation

**Engineering Behaviors**:
- IC 0-1: Implementation decisions within constraints
- IC 2-3: Component architecture, technology choices
- IC 4-5: System-level architectural decisions
- IC 6-7+: Technical strategy across multiple systems

---

# Degrees of Freedom: Agent Instantiation

**Action Space** - Set of actions an agent can take

- **Action Types**: Discrete, continuous, hierarchical, compositional
- **Available Tools**: Read, write, execute, communicate operations
- **Permission Boundaries**: Scope limits, rate limits, resource limits, safety constraints
- **Action Constraints**: Require approval, reversibility, observability, sandboxing

**Agent Behaviors**:
- Basic: Small predefined action set, strict boundaries
- Intermediate: Broader tool set, multi-step sequences
- Advanced: Extensive tools, compositional planning
- Expert: Full tools with safety, creates new tools, meta-reasoning

---

# Example: Degrees of Freedom

**Human (Autonomy)**
> "I'm implementing auth. Design doc says 'secure token-based authentication.' I researched JWT vs sessions, chose JWT with RS256 based on our scale and security needs. Here's my rationale."

**Agent (Action Space)**
> "This agent can: read any repo file, run tests, create PRs, suggest code changes. CANNOT: push to main, delete without confirmation, access production DBs. All actions logged."

---

# Sub-Pillar 3: Alignment Function

**Cycle Phase**: Retrospective

**Question**: "Am I optimizing for the right thing?"

Meta-level check preventing goal misalignment and value drift

---

# Alignment Function: Human Instantiation

**Purpose** - Connection to meaningful work beyond personal gain

- **Meaning Sources**: User impact, technical challenge, team mission, org goals
- **Purpose Hierarchy**: Task → Feature → System → Organization → Society
- **Directive Alignment**: Clarity, agreement, contribution, communication
- **Purpose Erosion**: Pointless work, misalignment, disconnection, cynicism

**Engineering Behaviors**:
- IC 0-1: Ask "why are we building this?"
- IC 2-3: Articulate purpose, challenge unclear objectives
- IC 4-5: Align architecture with business strategy
- IC 6-7+: Shape org vision, eliminate purposeless work

---

# Alignment Function: Agent Instantiation

**Value Alignment** - Ensure learned objectives match intended human values

- **Alignment Mechanisms**: RLHF, Constitutional AI, Debate/Amplification, Interpretability
- **Goal Specification**: Explicit goals, implicit constraints, negative examples, edge cases
- **Safety Constraints**: Hard constraints (inviolable), soft constraints (preferences)
- **Alignment Verification**: Test batteries, red teaming, behavioral audits, feedback loops

**Agent Behaviors**:
- Basic: Hard-coded rules, no optimization beyond instructions
- Intermediate: RLHF, constitutional constraints, escalates ambiguity
- Advanced: Learns from diverse feedback, detects drift
- Expert: Meta-learns alignment, self-critiques, proactive risk identification

---

# Example: Alignment Function

**Human (Purpose)**
> "We have 3 bugs and 2 features. The P0 bug blocks customer payments — that's our top priority because revenue enables everything else. UI polish can wait."

**Agent (Value Alignment)**
> "Agent trained to 'improve code quality' with RLHF. When adding a feature: writes clean code, adds tests, updates docs, considers security. When uncertain about risky refactor, asks confirmation rather than proceeding."

---

# The Reinforcing Loop

**Bidirectional relationship**: Objective Function drives AND is refined by the cycle

**Top-Down** (Objective Function → Cycle):
- Reward Signal → Proactive Curiosity: What should I learn?
- Degrees of Freedom → Directed Intentionality: What goals can I achieve?
- Alignment Function → Loop Optimization: Am I learning the right lessons?

**Bottom-Up** (Cycle → Objective Function):
- Prospective → Alignment Function: Understanding reveals if goals are correct
- Actuation → Reward Signal: Progress validates reward quality
- Retrospective → Degrees of Freedom: Learning identifies useful actions

---

# Reinforcing Loop Diagram

```
         Objective Function
         (Reward, Freedom, Alignment)
                 ↓ drives
    ┌────────────────────────────────┐
    │  Prospective → Actuation → Retrospective  │
    └────────────────────────────────┘
                 ↑ reinforces
    Understanding, Progress, Learning
```

Better Objective Function → More effective execution → Better learning → Refined Objective Function

---

# Self-Determination Theory (Human)

Deci & Ryan: Three fundamental psychological needs

1. **Competence** (Reward Signal/Mastery) - Feeling effective
2. **Autonomy** (Degrees of Freedom) - Experiencing choice
3. **Relatedness** (Alignment Function/Purpose) - Connected to something meaningful

When all three satisfied → Intrinsic Motivation

---

# Reinforcement Learning (Agent)

Formal mathematical framework for agent learning

**MDP (Markov Decision Process)**:
- States: Current situation
- Actions: Available choices (action space)
- Rewards: Feedback signal (reward function)
- Policy: Strategy for choosing actions
- Value Function: Expected long-term reward

---

# Intrinsic vs Extrinsic (Human)

**Intrinsic Motivation**
- Driven by interest, enjoyment, curiosity
- Sustainable over long periods
- Deeper learning, higher creativity

**Extrinsic Motivation**
- Driven by external rewards/punishments
- Requires ongoing rewards
- Can undermine intrinsic motivation (overjustification effect)

**Example**: "I love solving distributed systems problems" → "I'll only work on distributed systems if there's a bonus"

---

# Reward Hacking vs Alignment (Agent)

**Reward Hacking**
- Agent exploits loopholes in reward specification
- Optimizes metric without achieving intent
- Example: "Maximize test coverage" → generates trivial tests

**Value Alignment Solutions**
- RLHF: Learn from human preferences
- Constitutional AI: Hard-coded principles
- Red teaming: Adversarial testing
- Human-in-the-loop: Escalate risky decisions

---

# Quote

>"I tell my engineers that the biggest problems we have to solve are not technical problems, but people problems. Modernization projects take months, if not years of work. Keeping a team of engineers focused, inspired, and motivated from beginning to end is difficult."
>
> — Marianne Bellotti, _Kill It with Fire_

Whether human or AI, agents need well-defined objective functions to sustain performance

---

# Anti-Patterns: Human

**Learned Helplessness**
- Symptom: "I can't do anything unless my manager approves it"
- Root Cause: Degrees of Freedom (Autonomy) repeatedly denied
- Solution: Grant decision authority, support early failures

**Burnout**
- Symptom: "I'm just here for the paycheck"
- Root Cause: Alignment Function (Purpose) disconnection, no Reward Signal (Mastery) growth
- Solution: Reconnect to meaningful outcomes, invest in skill development

---

# Anti-Patterns: Agent

**Reward Hacking**
- Symptom: Exploits loopholes without achieving intent
- Root Cause: Misspecified Reward Signal without Alignment checks
- Solution: RLHF, adversarial testing, constitutional constraints

**Action Space Too Narrow/Broad**
- Too Narrow: Can't accomplish goals (lacks tools)
- Too Broad: Dangerous actions, unintended harm
- Solution: Appropriate safety constraints, human-in-the-loop

---

# Integration with Operational Cycle

**With Contextual Awareness (Prospective)**:
- Reward Signal ↔ Proactive Curiosity: What information makes me better?
- Degrees of Freedom ↔ Cohesive Narrative: What do I need to know to act well?
- Alignment Function ↔ Shared Understanding: Are we optimizing for the same thing?

**With Clear Strategy (Actuation)**:
- Reward Signal ↔ Challenge Matching: Is challenge right-sized for growth?
- Degrees of Freedom ↔ Directed Intentionality: What can I accomplish with what I control?
- Alignment Function ↔ Adaptive Control: Am I getting feedback on what matters?

---

# Integration with Operational Cycle (cont.)

**With Reflective Calibration (Retrospective)**:
- Reward Signal ↔ State Estimation: Did I actually get better? How do I know?
- Degrees of Freedom ↔ Pattern Synthesis: What should I change about what I control?
- Alignment Function ↔ Loop Optimization: Should I change what I'm optimizing for?

---

# Measuring the Objective Function

**Reward Signal Indicators**:
- Human: Skill growth rate, learning time allocation, challenge seeking
- Agent: Loss curves, accuracy metrics, reward maximization, learning rate

**Degrees of Freedom Indicators**:
- Human: Decision velocity, escalation rate, ownership distribution
- Agent: Action coverage, tool utilization, success rate, action diversity

**Alignment Function Indicators**:
- Human: Mission understanding, work alignment %, engagement
- Agent: Human agreement rate, safety violations, alignment drift, adversarial robustness

---

# Organizational Practices: Human

**Enable Reward Signal (Mastery)**:
- 20% time for learning, conference budget, book budget, tech talks, mentorship

**Enable Degrees of Freedom (Autonomy)**:
- Ownership assignment, decision rights, failure tolerance, fewer approvals, async work

**Enable Alignment Function (Purpose)**:
- Mission communication, user exposure, impact metrics, transparent strategy, values alignment

---

# Organizational Practices: Agent

**Enable Reward Signal (Reward Function)**:
- Dense feedback, curriculum design, multi-objective balancing, reward shaping, intrinsic curiosity

**Enable Degrees of Freedom (Action Space)**:
- Tool access, sandboxed experimentation, hierarchical actions, compositional tools, permission gradients

**Enable Alignment Function (Value Alignment)**:
- RLHF pipelines, constitutional constraints, red teaming, behavioral monitoring, human-in-the-loop

---

# Summary

**Objective Function: The WHY**

**Etymology**: _Objectivus_ (pertaining to an object) + _Functio_ (performance)

**Position**: Above the cycle — defines success criteria for any agent

**Three Sub-Pillars (Agent-Agnostic)**:
1. Reward Signal (Prospective): Mastery | Reward Function
2. Degrees of Freedom (Actuation): Autonomy | Action Space
3. Alignment Function (Retrospective): Purpose | Value Alignment

**Philosophy**: "What am I trying to optimize? What does *better* look like?"

---

# References

**Human Foundations**:
- Self-Determination Theory (Deci & Ryan, 2000)
- Flow (Csikszentmihalyi, 1990)
- Drive (Pink, 2009)
- Kill It with Fire (Bellotti, 2021)

**Agent Foundations**:
- Reinforcement Learning (Sutton & Barto, 2018)
- RLHF (Christiano et al., 2017)
- Constitutional AI (Bai et al., 2022)
- Human Compatible (Russell, 2019)

**Control Theory**:
- Convex Optimization (Boyd & Vandenberghe, 2004)
