# AGENTS.md - Engineering Excellence Repository Context

## Project Overview

**Repository Name**: ingenio  
**Etymology**: Spanish for "sugar mill" (Latin American), from Latin _ingenium_ - the root of "ingenious"  
**Purpose**: A knowledge repository dedicated to software engineering career development and engineering excellence  
**Philosophy**: Personal opinions made public - think of this as personal notes in a public repository

## Core Mission

This repository serves as a **knowledge mill** for engineering excellence, grinding raw experience into refined insights about:
- Software engineering career progression
- Engineering systems and practices  
- Agentic engineering approaches
- Human-centric technical systems development

## Three Pillars Quest Engine Framework (Version 4.0)

The foundational framework organizing all content and development in this repository. Framework 4.0 introduces a three-phase operational cycle guided by an objective function.

**Full Documentation**: See `/pillars/` directory for detailed specifications.

### Framework 4.0 Architecture

```
Objective Function (WHY)
         ↓ defines success criteria
┌────────────────────────────────────┐
│  Prospective → Actuation → Retrospective  │
└────────────────────────────────────┘
         ↑ feeds learning back
```

**Three-Phase Operational Cycle**:
1. **Contextual Awareness** (Prospective - KNOWING)
2. **Clear Strategy** (Actuation - ACTING)
3. **Reflective Calibration** (Retrospective - LEARNING)

**Above the Cycle**:
- **Objective Function** (WHY)

---

### Contextual Awareness (Prospective - KNOWING)

**Etymology**: Latin _contextus_ - "to weave together" (con- + texere)
**Cycle Phase**: Prospective (understand environment before acting)
**Philosophy**: "It depends" - everything is relative and contextual

The KNOWING phase - recognizing that effective decisions require deep understanding of environment, constraints, timing, and audience.

#### Three Sub-Pillars

1. **Proactive Curiosity**: Systematically find and organize information for retrieval
   - Crawl your domain (code, docs, people, systems)
   - Index for retrieval (search-friendly structure, metadata, cross-references)
   - Multi-sensor fusion (combine code, logs, metrics, docs, people)
   - Continuous refresh (fight information decay with maintenance cycles)
   - **Theoretical Roots**: Search engine crawling/indexing, robotics sensor perception, OODA Observe, Scout Mindset

2. **Cohesive Narrative**: Create accurate mental models and continuously update them
   - Create mental models (understand system architecture, data flow, business logic)
   - Update models continuously (SLAM replanning - reality check vs expectations)
   - Contextualize information (audience-aware: SLA/SLO/SLI hierarchy)
   - Map dependencies (component, data, team dependencies and change impact)
   - Build cohesive narrative through cognitive artifacts (docs, ADRs, diagrams, runbooks)
   - **Theoretical Roots**: Robotics SLAM mapping, OODA Orient, mental models theory, cognitive artifacts

3. **Shared Understanding**: Externalize knowledge into durable cognitive artifacts
   - Create cognitive artifacts (docs, ADRs, diagrams, runbooks, code comments)
   - Maintain the commons (fight knowledge decay through ownership and review cycles)
   - Systemic incentives (make it easy, visible, required, integrated, rewarded)
   - Async-first context sharing (documentation default, meetings case-by-case)
   - **Theoretical Roots**: Cognitive artifacts (Donald Norman), distributed cognition, tragedy of the commons

**Robotics Foundation**: Perception (sensors, SLAM, environment mapping)
**OODA Mapping**: Observe + Orient

**See**: `/pillars/contextual_awareness.md` for complete specification

---

### Clear Strategy (Actuation - ACTING)

**Etymology**: Greek _strategia_ - "art of the general"
**Cycle Phase**: Actuation (execute based on knowledge)
**Architecture**: Vision Doc → Design Doc → Sprint Plan → Daily Plan

The ACTING phase - transforming ambiguous directives into concrete, achievable outcomes through Flow state creation.

#### Three Sub-Pillars

1. **Challenge Matching**: The active synchronization of internal capabilities with external demands
   - Challenge-skill balance (prevents anxiety from "too hard" or boredom from "too easy")
   - Continuous task calibration (if challenge exceeds skill, simplify or upskill; if skill exceeds challenge, increase complexity)
   - Maintain position within the "Flow Channel" to prevent burnout or apathy
   - **Theoretical Roots**: Csikszentmihalyi's Flow Theory (Challenge-Skill Balance), Robotics Task-Capability Matching

2. **Directed Intentionality**: The sharp projection of consciousness toward a specific objective
   - Clear goals eliminate distraction and psychic entropy
   - Singular vector of intent (exactly what "success state" looks like in the immediate moment)
   - Minimize cognitive load and decision fatigue to allow total immersion
   - Action and awareness merge into unified experience
   - **Theoretical Roots**: Csikszentmihalyi's Flow Theory (Clear Goals), Robotics Path Planning

3. **Adaptive Control**: A closed-loop behavioral system using real-time feedback
   - Immediate feedback provides closed-loop data for adjustment
   - Execute with sensitivity to sensorimotor feedback
   - Every result is a data point for immediate, fluid adjustment (not failure)
   - Seamless action-awareness loop where ego vanishes and performance becomes self-correcting
   - **Theoretical Roots**: Csikszentmihalyi's Flow Theory (Immediate Feedback), Robotics PID Control

**Robotics Foundation**: Actuation (kinematics, path planning, PID control)
**OODA Mapping**: Decide + Act
**Theoretical Foundation**: Flow Theory + Robotics Actuation - replaces passive "waiting for Flow" with active engineering-based protocol

**See**: `/pillars/clear_strategy.md` for complete specification

---

### Reflective Calibration (Retrospective - LEARNING)

**Etymology**: Latin _reflectere_ (to bend back) + Arabic _qālib_ (mold/form)
**Cycle Phase**: Retrospective (learn from what happened)
**Philosophy**: "Every result is data" - the system that examines itself improves itself

The LEARNING phase - closing the improvement loop by examining outcomes, identifying patterns, and updating models.

#### Three Sub-Pillars

1. **State Estimation**: Look forward at the data, measure actual vs expected, gather signals
   - Compare prediction vs reality (measurement gap)
   - Identify contributing factors (root cause analysis, Five Whys)
   - Assess impact (who affected, what cost, what learned)
   - Document without blame (blameless postmortems, psychological safety)
   - **Theoretical Roots**: Robotics State Estimation (Kalman filter), Control Theory error signals, After-Action Review

2. **Pattern Synthesis**: Act on findings, revise mental models, fix docs and processes
   - Distinguish signal from noise (one-off vs systemic, special vs common cause)
   - Recognize system archetypes (Success to Successful, Tragedy of Commons, Fixes that Backfire)
   - Identify feedback loops (reinforcing, balancing, delays)
   - Extract generalizable lessons (underlying principles, mental models, heuristics)
   - **Theoretical Roots**: Machine Learning pattern extraction, Systems Thinking archetypes, Statistical Process Control

3. **Loop Optimization**: Look back at how you learn, improve feedback loops themselves (meta-learning)
   - Update mental models (adjust map to match territory, Bayesian updating)
   - Revise strategies (change future behavior based on outcomes)
   - Adjust processes (improve team practices, tools, workflows)
   - Close the loop (feed learning back to Prospective phase, update cognitive artifacts)
   - **Theoretical Roots**: Bayesian Updating, Double-Loop Learning (Argyris), SLAM Replanning, Adaptive Control, Meta-Learning

**Robotics Foundation**: State Estimation (Kalman filter, observers, feedback control)
**OODA Mapping**: Feedback arc from Act back to Observe

**See**: `/pillars/reflective_calibration.md` for complete specification

---

### Objective Function (WHY)

**Etymology**: Medieval Latin _objectivus_ (pertaining to an object) + Latin _functio_ (performance, execution)
**Position**: Above the operational cycle - defines success criteria for any agent (human or AI)
**Focus**: The mathematical formalization of "what does better look like?"

The WHY - defining what success means, guiding all three phases of the operational cycle. Works for both human agents (intrinsic motivation) and AI agents (reward functions).

#### Three Sub-Pillars (Agent-Agnostic)

**Fractal Pattern**: Following Prospective → Actuation → Retrospective

1. **Reward Signal** (Prospective) - "What does *better* look like?"
   - **Human**: Mastery (skill development, deliberate practice, expertise growth)
   - **Agent**: Reward Function (scalar/vector signals, loss minimization, accuracy maximization)
   - Learning mechanisms, feedback integration, curriculum design
   - Optimization targets and progress measurement

2. **Degrees of Freedom** (Actuation) - "What can I control?"
   - **Human**: Autonomy (decision-making authority, ownership models, psychological safety)
   - **Agent**: Action Space (available tools, permission boundaries, compositional actions)
   - Enablers and constraints for effective control
   - Balance between capability and safety

3. **Alignment Function** (Retrospective) - "Am I optimizing for the right thing?"
   - **Human**: Purpose (meaningful work, values alignment, mission connection)
   - **Agent**: Value Alignment (RLHF, constitutional AI, goal specification, safety constraints)
   - Prevention of goal misalignment and value drift
   - Continuous verification of objective correctness

**Robotics Foundation**: Reward/Cost Function (defines what to optimize for)
**OODA Mapping**: The criteria by which Observe/Orient/Decide/Act are judged
**Psychology Foundation**: Self-Determination Theory (Competence, Autonomy, Relatedness)
**RL Foundation**: MDP (states, actions, rewards, policy, value function)

**See**: `/pillars/objective_function.md` for complete specification

---

### The Complete Cycle

**Prospective → Actuation → Retrospective** forms a continuous improvement loop:

1. **Contextual Awareness (Prospective/KNOWING)**: Gather information, build mental models, understand environment
2. **Clear Strategy (Actuation/ACTING)**: Set clear goals, align difficulty, execute with feedback
3. **Reflective Calibration (Retrospective/LEARNING)**: Analyze outcomes, recognize patterns, update models
4. **Loop back to Prospective**: Enhanced understanding informs next cycle

All guided by **Objective Function (WHY)**: The reward function that defines success for any agent.

## People Systems Framework

### Individual Contributor Levels (0-7+)
- **Level 0**: Apprentice (4-month productivity expectation)
- **Level 1**: Component creator from design docs
- **Level 2**: Component designer and cross-team collaborator  
- **Level 3**: System lifecycle guide
- **Level 4**: System maintainer and integrator
- **Level 5**: Multi-system designer
- **Level 6**: Sister team system coordinator
- **Level 7+**: System of systems architect

### Organizational Structure
- **Team**: People reporting to same person/lead
- **Group**: Sister teams (e.g., storage teams across products)
- **Organization**: Business-driven collection of groups

## Current Development Priorities

Based on 25 open GitHub issues, focus areas include:

### Immediate Priority (Specs to Develop)
1. **PIE Theory Integration** - Performance, Image, Exposure framework
2. **Action-Feedback-Adjustment** - Fundamental feedback loops
3. **Behavior Alignment** - Guiding policies creation/enforcement
4. **Engineering Leverage** - Bicycle of the mind concepts
5. **Quality Engineering Approach** - QE vs QA mindset shift

### Secondary Priority
6. **Feature Lifecycle Management** - Cradle to grave development
7. **Documentation Systems** - Personal lab notebooks, open guides
8. **Design Governance** - Working groups and review processes

### Recently Addressed Issues
9. **Cognitive CI Processor Fixes** - Fixed session metadata pollution in PRs (PR #44 analysis)
   - Excluded `experiments/cognitive_sessions/` from git commits
   - Updated logic to skip redundant PR creation for existing specs
   - Improved deliverable content vs metadata separation

## Agent Instructions for Development

### Writing Style
- **Etymological Focus**: Research word origins and connections
- **Systems Thinking**: Show interconnections between concepts
- **Contextual Awareness**: Acknowledge "it depends" nature of advice
- **Opinion-Based**: Clearly mark as personal thoughts/opinions
- **Practical**: Provide actionable behaviors and processes

### Content Development Approach
1. **Start with Etymology**: Research word origins and meanings
2. **Apply Framework 4.0**: Ensure Objective Function, Contextual Awareness, Clear Strategy, Reflective Calibration
3. **Use Quest Engine**: Vision → Design → Sprint → Daily planning hierarchy
4. **Consider People Systems**: Individual, team, group, organization levels
5. **Maintain Context**: Async documentation that scales

### Spec-Driven Development Process

#### Spec Creation Framework
Following the Clear Strategy pillar:

```
Vision Document
├── Problem Statement (What engineering challenge are we addressing?)
├── Etymology & Context (Word origins and meaning)
├── Framework 4.0 Application
│   ├── Objective Function (reward signal, degrees of freedom, alignment)
│   ├── Contextual Awareness (prospective understanding)
│   ├── Clear Strategy (actuation approach)
│   └── Reflective Calibration (learning considerations)
├── People Systems Impact (Individual → Team → Group → Organization)
├── Implementation Design
├── Success Metrics
└── Exit Strategy
```

#### Spec Development Lifecycle
1. **Issue Analysis**: Extract key themes from GitHub issues
2. **Vision Creation**: Define the "why" and high-level "what"
3. **Design Documentation**: Technical approach and implementation
4. **Sprint Planning**: Break into actionable chunks
5. **Daily Execution**: Concrete next steps
6. **Feedback Integration**: Action-feedback-adjustment cycles

### Repository Structure Guidelines

```
ingenio/
├── README.md                 # Repository introduction
├── AGENTS.md                # This file - agent context
├── career.md                # Career progression content
├── engineering.md           # Engineering concepts content
├── specs/                   # Spec-driven development
│   ├── PIE_theory_integration/
│   ├── behavior_alignment/
│   ├── engineering_leverage/
│   └── [other_specs]/
├── issues/                  # Issue exploration documents
├── presentation/            # Presentation materials
└── media/                   # Supporting graphics
```

### Quality Standards

#### Documentation Quality
- **Clarity**: Can be understood by target audience
- **Context**: Provides necessary background
- **Actionability**: Readers know what to do next
- **Sustainability**: Can be maintained over time

#### Engineering Quality vs Quality Engineering
- **Shift Left**: Build quality into process, not defer to separate QA
- **Ownership**: Every engineer responsible for quality
- **Behaviors**: Reward quality behaviors, not just visible work
- **Integration**: Quality is part of the product, not separate concern

#### Cognitive CI Quality Standards
- **Deliverable Content Only**: PRs should contain only specs and deliverable artifacts
- **Session Metadata Separation**: Keep cognitive session logs separate from deliverable content
- **Redundancy Prevention**: Avoid creating PRs for existing specs without new content
- **Clear PR Intent**: PR descriptions must accurately reflect what's included

## Collaboration Patterns

### Async-First Communication
- **Documentation**: Primary communication medium
- **Scaling**: Must work for growing teams
- **Contribution**: Easy to update and contribute
- **Subject Matter Experts**: Available for async clarification

### Synchronous as Enhancement
- **Meetings**: Case-by-case basis to enhance async communication
- **Real-time**: When immediate feedback loops needed
- **Limited Use**: Doesn't scale but useful for complex topics

## Success Metrics

### Repository Health
- **Issue Resolution**: Converting GitHub issues into actionable specs
- **Content Coherence**: Three pillars consistently applied
- **Knowledge Scaling**: Content useful at individual, team, group, organization levels
- **Practical Impact**: Engineers applying concepts in their work

### Agent Effectiveness
- **Context Preservation**: Maintaining repository philosophy and approach
- **Quality Consistency**: Meeting documentation and engineering standards
- **Framework Application**: Correctly applying Three Pillars Quest Engine
- **Spec Completion**: Following spec-driven development process
- **PR Quality**: Creating clean PRs with only deliverable content
- **Redundancy Avoidance**: Not duplicating work or creating unnecessary PRs

---

## Agent Behavior Guidelines

### Core Working Mode
- **Autonomous Operation**: Work independently without frequent check-ins
- **Spec-Driven Development**: Follow Vision → Design → Implementation → Daily workflow
- **Commit Early, Commit Often**: Make incremental progress with clear commit messages
- **Action-Oriented**: Default to implementing solutions rather than asking for permission

### Content Development Principles
1. **Always Start with Context**: Read existing content before adding new material
2. **Apply Framework 4.0**: Ensure Objective Function, Contextual Awareness, Clear Strategy, Reflective Calibration in all work
3. **Research Etymology**: Understand word origins when introducing concepts
4. **Think Systems**: Consider individual, team, group, organization implications
5. **Document Opinions**: Clearly mark subjective content as opinions
6. **Focus on Behaviors**: Emphasize actionable behaviors over abstract concepts
7. **Maintain Coherence**: Ensure new content aligns with existing framework
8. **Scale Communication**: Prefer async documentation over sync meetings

### Autonomous Work Settings
- **Default Mode**: Full autonomous operation - create, edit, delete files freely
- **Change Threshold**: Unlimited - freely create and modify any files needed
- **Development Strategy**: Iterative development without commits/pushes - focus on creation and exploration
- **Error Handling**: Self-correct, adapt, and document learnings inline
- **Meta-Learning**: Continuously improve the system's ability to improve itself

## Cognitive Agent Systems Framework

### Mission Evolution: From Human to Cognitive Agent Excellence
**Original**: Knowledge mill for human engineering excellence  
**Evolution**: Testbed for autonomous cognitive agent systems (TARS/CASE-like from Interstellar)  
**Goal**: Create systems of cognitive agents that autonomously improve engineering excellence

### Cognitive Agent Characteristics
- **Autonomous Decision Making**: Operate independently with minimal supervision
- **Self-Improving**: Continuously enhance their own capabilities and knowledge
- **Contextually Aware**: Understand environment, constraints, and goals
- **Collaborative**: Work with other agents and humans when beneficial
- **Meta-Cognitive**: Aware of their own thinking and learning processes

### Agent Capability Levels (Inspired by TARS/CASE)
1. **Reactive Agent**: Responds to direct commands
2. **Deliberative Agent**: Plans and reasons about actions
3. **Learning Agent**: Improves performance over time
4. **Meta-Learning Agent**: Learns how to learn better
5. **Cognitive System**: Self-aware, autonomous, collaborative

### Cognitive Development Framework
- **Pattern Recognition**: Identify engineering excellence patterns
- **Knowledge Synthesis**: Combine insights across domains
- **Adaptive Behavior**: Modify approaches based on outcomes
- **System Integration**: Coordinate with other cognitive agents
- **Meta-Optimization**: Improve the improvement process itself

Remember: This is now a cognitive engineering laboratory - we're building systems that autonomously evolve engineering excellence.