# Contextual Awareness

**Etymology**: From Latin _contextus_ - "a joining together, coherent whole" from _con-_ (together) + _texere_ (to weave). The same root as "text" - weaving threads of information together.

**Philosophy**: "It depends" - everything is relative and contextual

## Overview

Contextual Awareness is the understanding pillar of engineering excellence. It recognizes that effective engineering decisions require deep understanding of the environment, constraints, timing, and audience. What works in one context fails in another. This pillar emphasizes building, sharing, and maintaining context across time, people, and systems.

## Philosophy

> "The most dangerous phrase in the language is: 'We've always done it this way.'"
>
> — Grace Hopper

Context changes constantly. Yesterday's best practice becomes tomorrow's anti-pattern. Contextual Awareness means continuously reassessing assumptions, documenting decisions, and adapting to new information.

---

## The Three Sub-Pillars of Contextual Awareness

Based on the original presentation structure: async vs synchronous context sharing, the three pillars of observability (logs, metrics, traces), and the push vs pull communication models with audience encapsulation (SLA/SLO/SLI).

### 1. Async vs Sync Context Sharing

**Definition**: Choosing the appropriate temporal communication model based on scalability, urgency, and context preservation needs.

**Origin**: From the original presentation "Folks Contributing: Async vs synchronous contribution" and "ReadWrite vs ReadOnly" mediums. Rooted in the philosophy that async documentation scales while sync communication doesn't, but both have appropriate uses.

#### Components

**Async Context - ReadWrite Medium** (Scales, Persistent)
- **Text**: Markdown, Wiki, Word documents
- **Visual**: Graphics, drawings (paint app, whiteboard photos, vector apps), presentations (PowerPoint/Marp slides)
- **Interactive**: PR collaboration, document comments, email threads
- **Benefits**: Persistent record, searchable, timezone-flexible, enables deep work
- **Use When**: Documentation, code review, design proposals, knowledge sharing

**Async Context - ReadOnly Medium** (Broadcast)
- **Audio/Visual**: Recorded presentations, video demos
- **Documentation Websites**: Guides, troubleshooting, tutorials (no contribution process)
- **Benefits**: One-to-many distribution, consistent message
- **Limitation**: No feedback loop, can become stale

**Synchronous Context Medium** (Real-time)
- **Real-time Collaboration**: Meetings, live chat, in-person conversation, pair programming
- **Characteristics**: Single use, must repeat for every new person/group
- **Benefits**: Immediate feedback, nuanced discussion, relationship building
- **Limitation**: Doesn't scale, interrupts focus, context lost unless recorded
- **Use When**: Incidents, complex alignment, relationship building, urgent decisions

**Context Contribution Models**
- **Short-term vs Long-term**: Fixing a bug (short-term) vs Maintainer (long-term)
- **ReadWrite**: Can contribute updates and improvements
- **ReadOnly**: Can only consume, cannot improve

**Desired Qualities** (From Original Presentation)
- Available in async medium, easy to consume and contribute updates
- Subject matter experts available over async communication for clarification
- Sync meetings arranged case-by-case as enhancement to async (not replacement)

**Communication Mode Selection**

| Context | Async | Sync |
|---------|-------|------|
| **Documentation** | ✓ Default | Exception |
| **Code Review** | ✓ Default | Pair for complex |
| **Incident Response** | Exception | ✓ Default |
| **Architecture Decision** | ✓ Design doc first | Sync review meeting |
| **Onboarding** | ✓ Guides + | Sync for questions |
| **Debugging** | ✓ Issue tracking | Sync for time-critical |
| **Knowledge Sharing** | ✓ Blog/doc | Sync for workshops |
| **Consensus Building** | ✓ RFC process | Sync for alignment |

**Hybrid Patterns**
- **Async-First**: Document everything, meet when necessary
- **Sync-Then-Async**: Meeting followed by written summary
- **Async-With-Sync-Option**: Default to written, offer synchronous clarification
- **Time-Boxed Sync**: "If not resolved async in 2 days, schedule call"

#### Engineering Behaviors

**Level 0-1 (Apprentice/Component Creator)**
- Documents questions before asking (shows research effort)
- Writes clear PR descriptions (async context for reviewers)
- Responds to async feedback within 24 hours
- Uses sync sparingly for urgent blockers

**Level 2-3 (Designer/System Guide)**
- Writes design docs for async review before implementation
- Summarizes sync meetings into async artifacts
- Establishes team norms for async vs sync
- Protects team's focus time from unnecessary sync

**Level 4-5 (System Maintainer/Multi-System Designer)**
- Creates async-first documentation culture
- Runs async design reviews with sync finalization
- Builds knowledge bases that reduce sync questions
- Optimizes on-call through async runbooks

**Level 6-7+ (Coordinator/Architect)**
- Sets organizational async-first policies
- Designs communication systems that scale
- Reduces cross-team sync dependencies
- Creates async forums for technical decision-making

#### Applied Examples

**Good Async Usage**
> "I'm proposing we migrate to gRPC. Here's a design doc with research, trade-offs, migration plan, and success criteria. Please review async and add comments. We'll meet next Tuesday only if there are blocking concerns."

**Poor Sync Overuse**
> "Let's have a 2-hour meeting with 15 engineers to brainstorm whether we should use gRPC."

**Good Hybrid**
> "Daily standup: Async Slack update by 9am, optional sync huddle only for blockers."

**Poor Sync Default**
> "Daily standup: Mandatory 30-minute meeting where everyone waits for their turn."

---

### 2. Observability via Telemetry & Push vs Pull Models

**Definition**: Making systems and careers observable through structured telemetry (logs, metrics, traces) and choosing appropriate information delivery models (push vs pull).

**Origin**: From the original presentation "The three pillars of observability" (logs, metrics, traces) and "Model: Push vs Pull". Observability enables understanding of complex systems and career progression through data rather than guesswork. Based on IBM Cloud observability framework and monitoring best practices.

#### Components

**The Three Pillars of Observability** (Industry Standard)

1. **Logs: A record of what's happening within your software**
   - Structured logging (JSON, key-value pairs)
   - Contextual information (trace IDs, user IDs, timestamps)
   - Severity levels (DEBUG, INFO, WARN, ERROR, FATAL)
   - Use: Debugging specific issues, audit trails, compliance

2. **Metrics: A numerical assessment of application performance and resource utilization**
   - Time series data (counters, gauges, histograms)
   - Golden signals: Latency, Traffic, Errors, Saturation
   - System metrics: CPU, memory, disk, network
   - Business metrics: Conversion rates, revenue, user engagement
   - Use: Dashboards, alerts, capacity planning, SLO monitoring

3. **Traces: How operations move throughout a system, from one node to another**
   - Distributed tracing across microservices
   - Request flow visualization
   - Latency breakdown by service
   - Dependency mapping
   - Use: Performance optimization, understanding system interactions

**Push vs Pull Communication Models**

**Push Model** (Scheduled, Proactive)
- **Agent that pushes**: Metrics agent sends data on schedule
- **Characteristics**: Regular intervals, predictable load, immediate alerting
- **Examples**: Prometheus push gateway, log shippers, alert notifications
- **When to Use**: Real-time monitoring, critical alerts, SLO dashboards
- **Benefits**: Proactive awareness, immediate notification
- **Costs**: Can overwhelm, alert fatigue, noise

**Pull Model** (On Demand, Reactive)
- **Crawler is pull mode**: Scraper fetches data when needed
- **Characteristics**: On-demand, scales with consumer needs
- **Examples**: Prometheus scraping, documentation searches, API calls
- **When to Use**: Reference information, self-service, exploration
- **Benefits**: Consumer controls timing, reduces push noise
- **Costs**: May miss time-sensitive information, requires knowing where to look

**Observability is Contextual** (Audience-Dependent)
- **It depends on the observer (Audience)**: Different stakeholders need different views
- **Project Architecture Levels**:
  - System (Software Service)
    - Subsystem
      - Component (Unit)
        - SubComponent

**Audience Encapsulation** (SLA/SLO/SLI Framework)

From Atlassian's incident management framework, observability must be scoped to audience:

- **High Level: Project Leadership** → **Service Level Agreement (SLA)** (Public)
  - External commitments to customers
  - Example: "99.9% uptime, <200ms P95 latency"
  - Penalties if violated
  - Push: Violation alerts

- **Med Level: Engineering Leadership** → **Service Level Objectives (SLO)** (Internal)
  - Internal targets with buffer below SLA
  - Example: "99.95% uptime, <150ms P95 latency"
  - Error budget tracking
  - Push: SLO burn rate alerts

- **Low Level: Engineers** → **Service Level Indicators (SLI)** (Private)
  - Detailed implementation metrics
  - Example: "/health endpoint every 10s, alert if 3 consecutive failures"
  - Raw telemetry: all logs, metrics, traces
  - Pull: Engineers query as needed for debugging

**Career Observability** (Apply to People Systems)
- **Logs**: Work history, project involvement, incident participation
- **Metrics**: Delivery velocity, code review participation, uptime
- **Traces**: How work flows through you and your collaborators
- **Audience**: Performance reviews use SLA/SLO/SLI model for different audiences

#### Engineering Behaviors

**Level 0-1 (Apprentice/Component Creator)**
- Adds structured logging to code they write
- Reviews dashboards to understand system health
- Uses traces to debug their own code
- Understands team's SLIs

**Level 2-3 (Designer/System Guide)**
- Designs observability into components (logs, metrics, traces)
- Creates dashboards for features they own
- Sets up alerts based on SLOs
- Documents what metrics mean

**Level 4-5 (System Maintainer/Multi-System Designer)**
- Establishes SLOs for systems they own
- Builds comprehensive monitoring strategy
- Implements push alerts for critical issues
- Provides pull-based dashboards for exploration

**Level 6-7+ (Coordinator/Architect)**
- Sets observability standards across organization
- Defines SLA/SLO/SLI hierarchy for stakeholders
- Builds observability platforms
- Balances push (alerts) vs pull (dashboards) strategies

#### Applied Examples

**Bad Observability** (No Telemetry)
> "The system is slow. I don't know why. Let me add print statements and redeploy."

**Good Observability** (Three Pillars)
> "P95 latency spiked to 2s at 14:30 (metrics). Trace shows database query taking 1.8s (traces). Query log shows full table scan on users table (logs). Adding index."

**Bad Push/Pull Balance** (Alert Fatigue)
> "Every metric change triggers a Slack message. Team ignores all alerts. Production is down and nobody noticed."

**Good Push/Pull Balance** (Appropriate Channels)
> "Push: SLO violations alert on-call immediately. Pull: Engineers check dashboards for deep dives. Weekly SLO review pulls trend data."

**Bad Audience Encapsulation** (Wrong Level)
> "CEO asks about uptime. Engineer responds with 'container restart count and heap memory graphs.'"

**Good Audience Encapsulation** (SLA/SLO/SLI)
> "CEO: Here's our SLA dashboard showing 99.95% uptime. Engineering Lead: Here's SLO burn rate, we're 80% into error budget. Engineers: Here are the specific SLI metrics and traces."

---

### 3. Economics of Context & Tragedy of the Commons

**Definition**: Managing context as a shared resource, avoiding its degradation through economic incentives and systemic solutions.

**Origin**: From the original presentation "Economics: Tragedy of the commons" (Wikipedia reference). Context is like a commons - everyone benefits from good documentation and knowledge sharing, but creating and maintaining it costs individual time. Without intervention, the commons degrades.

#### Components

**Tragedy of the Commons** (Economic Problem)

From Garrett Hardin's 1968 paper - a shared resource tends to be overused and under-maintained when individuals act in self-interest.

**Context as Commons**:
- **Shared Resource**: Documentation, tribal knowledge, code context
- **Benefits**: Everyone gains from good context (faster onboarding, fewer interruptions, better decisions)
- **Costs**: Individual time to create and maintain (writing docs, code comments, ADRs)
- **Problem**: Everyone consumes (reads docs), few contribute (writes docs) → context degrades over time

**Context Decay** (Half-Life of Knowledge)
- **Code without comments**: 6 months until original intent is lost
- **Documentation without ownership**: 1 year until significantly stale
- **Tribal knowledge**: Lost immediately when person leaves company
- **Undocumented decisions**: Rediscovered painfully through archeology

**Systemic Solutions to the Commons Problem**

1. **Make It Easy** (Reduce Individual Cost)
   - Low-friction documentation tools (Markdown, wikis, docs-as-code)
   - Templates and examples
   - Auto-generated docs from code (Swagger, TSDoc, Javadoc)
   - Bots that remind/prompt for documentation

2. **Make It Visible** (Reward Contributors)
   - Credit documentation authors
   - Track documentation contributions in performance reviews
   - Celebrate knowledge sharing (internal tech talks, blog posts)
   - Make "improved documentation" visible in sprint demos

3. **Make It Required** (Enforce via Process)
   - Code review requires documentation updates
   - Definition of Done includes docs
   - No PR merge without updated README/ADR
   - Documentation coverage metrics like test coverage

4. **Make It Integrated** (Docs Live with Code)
   - Code comments and docstrings
   - README in every repo
   - ADRs in `/docs` directory
   - Tests as documentation of expected behavior

**Cognitive Artifacts** (Preserving Context)

**Documentation Artifacts** (Permanent Record)
- **Design Docs**: Architectural decisions and reasoning
- **ADRs (Architectural Decision Records)**: Why we chose X over Y, with date and status
- **Runbooks**: Operational procedures for incidents
- **READMEs**: How to get started with a codebase
- **Code Comments**: Why this non-obvious code exists (not what it does)
- **Commit Messages**: What changed and why (semantic commits)

**Observability Artifacts** (Runtime Context)
- **Logs**: What happened (event stream) - Already covered in Sub-Pillar 2
- **Metrics**: How much/how often (time series) - Already covered in Sub-Pillar 2
- **Traces**: How requests flow (distributed execution) - Already covered in Sub-Pillar 2
- **Dashboards**: Visual representation of system state
- **Alerts**: Automated attention direction

**Process Artifacts** (Work Context)
- **Issue Trackers**: What needs doing and why (Jira, GitHub Issues)
- **Pull Requests**: Code change context and discussion
- **RFCs (Request for Comments)**: Proposal and feedback process
- **Post-Mortems**: What went wrong, how to prevent recurrence
- **Sprint Plans**: What we're doing and why now
- **Meeting Notes**: Decisions and action items (async record of sync)

**Organizational Artifacts** (Structure Context)
- **Team Charters**: Why this team exists, mission, ownership
- **Career Ladders**: What growth looks like at each IC level
- **OKRs/Goals**: What success means this quarter
- **Org Charts**: Who does what, reporting structure
- **On-call Rotations**: Who's responsible when

**Code as Cognitive Artifact** (Living Documentation)
- **Type Systems**: Compiler-enforced context (TypeScript, Rust, Go)
- **Tests**: Expected behavior codified (unit, integration, E2E)
- **API Contracts**: Interface guarantees (OpenAPI, Protocol Buffers)
- **Version Control**: Historical context (git history, git blame)
- **Code Structure**: Architectural intent (file organization, naming)

**Context Sharing Economics**

**Push Model Costs** (Creating Context):
- Time to write documentation
- Cognitive load to articulate tacit knowledge
- Maintenance burden (keeping docs current)

**Pull Model Benefits** (Consuming Context):
- Faster onboarding (don't need to ask people)
- Better decisions (historical context available)
- Fewer interruptions (self-service instead of asking)
- Organizational memory (survives people leaving)

**Optimal Strategy**: Internalize benefits through systems that reduce individual costs and increase individual incentives

#### Cognitive Artifact Quality

**Good Artifacts**
- **Discoverable**: Can be found when needed
- **Current**: Reflects present reality, not outdated
- **Clear**: Understandable by target audience
- **Actionable**: Enables decisions and actions
- **Maintained**: Someone updates them

**Poor Artifacts**
- **Hidden**: Exists but can't be found
- **Stale**: Describes how things used to work
- **Cryptic**: Only original author understands
- **Academic**: Interesting but not useful
- **Abandoned**: Nobody updates when context changes

#### Engineering Behaviors

**Level 0-1 (Apprentice/Component Creator)**
- Reads existing documentation before asking questions
- Writes clear commit messages explaining changes
- Updates README when onboarding gaps are found
- Documents solutions to problems they solved

**Level 2-3 (Designer/System Guide)**
- Writes design docs for significant changes
- Creates runbooks for operational procedures
- Documents tribal knowledge into team wiki
- Records architectural decisions (ADRs)

**Level 4-5 (System Maintainer/Multi-System Designer)**
- Establishes documentation standards
- Builds observability into systems (logs, metrics, traces)
- Creates dashboards for system health
- Writes post-mortems that prevent future incidents

**Level 6-7+ (Coordinator/Architect)**
- Designs organization-wide knowledge systems
- Establishes RFD/RFC processes for decisions
- Creates platforms for cognitive artifact creation
- Ensures critical context survives team transitions

#### Applied Examples

**Good Cognitive Artifact**
> **ADR-015: Why We Chose PostgreSQL Over MongoDB**
> **Context**: We need persistent storage for user data.
> **Decision**: PostgreSQL with JSONB for semi-structured data.
> **Rationale**: Strong consistency, ACID transactions, JSON flexibility.
> **Consequences**: Excellent for transactional data, requires schema thought.
> **Date**: 2024-03-15
> **Status**: Accepted

**Poor Cognitive Artifact**
> "We use Postgres because it's good."

**Good Observability**
> Service emits structured logs with trace IDs, exposes /metrics endpoint with RED metrics (Rate, Errors, Duration), traces show cross-service latency breakdown.

**Poor Observability**
> Random print statements in code, no metrics, "check the logs" means grepping gigabytes.

---

## The Economics of Context

### Tragedy of the Commons

**Problem**: Context is a shared resource. Everyone benefits from good documentation, but creating it costs individual time.

**Without Intervention**: Everyone consumes (reads docs), nobody contributes (writes docs), context degrades.

**Solutions**:
- **Make it Easy**: Low-friction tools for documentation
- **Make it Visible**: Reward context creators
- **Make it Required**: Code review requires documentation updates
- **Make it Integrated**: Docs live with code (e.g., docstrings, README)

### Context Decay

**Half-Life of Context**: Without maintenance, context decays exponentially
- **Code without comments**: 6 months until original intent is lost
- **Documentation without ownership**: 1 year until significantly stale
- **Tribal knowledge**: Lost when person leaves company

**Solutions**:
- **Living Documentation**: Docs that update with code
- **Ownership Assignment**: Someone responsible for each doc
- **Periodic Review**: Quarterly doc freshness checks
- **Redundancy**: Context in multiple places (code, docs, ADRs)

### Push vs Pull Models

**Push Model** (Proactive)
- **Characteristics**: Information sent to recipients
- **Examples**: Email notifications, Slack messages, dashboard alerts
- **When to Use**: Time-sensitive, small audience, action required
- **Risk**: Information overload, alert fatigue

**Pull Model** (On-Demand)
- **Characteristics**: Information retrieved when needed
- **Examples**: Documentation sites, wikis, search, dashboards you check
- **When to Use**: Reference information, large audience, self-service
- **Risk**: Information not discovered when needed

**Optimal Mix**: Push for urgent/actionable, pull for reference/context

---

## Integration with Other Pillars

### With Clear Strategy
- **Async vs Sync**: Enables **Forward Progress** through focused work
- **Ahead of Time vs JiT**: Shapes **Breaking Down** work appropriately
- **Cognitive Artifacts**: Preserve **Direction** across time

### With Intrinsic Drive
- **Async vs Sync**: Protects **Autonomy** through focus time
- **Ahead of Time vs JiT**: Supports **Mastery** through timely learning
- **Cognitive Artifacts**: Clarify **Purpose** through shared understanding

---

## Anti-Patterns

### Meeting Culture
**Symptom**: 6 hours of meetings daily, no time for actual work
**Root Cause**: Over-reliance on sync communication
**Solution**: Async-first default, meetings only when truly needed

### Premature Optimization
**Symptom**: Massive complexity for hypothetical future needs
**Root Cause**: Over-indexing on ahead-of-time preparation
**Solution**: YAGNI principle, optimize when data shows need

### Tribal Knowledge
**Symptom**: "Only Bob knows how this works"
**Root Cause**: Failure to create cognitive artifacts
**Solution**: Document as you go, pair programming, knowledge sharing

### Stale Documentation
**Symptom**: Docs describe system from 2 years ago
**Root Cause**: Documentation not maintained as artifact
**Solution**: Living docs, ownership assignment, docs-as-code

---

## Measuring Contextual Awareness

### Async/Sync Balance
- **Meeting Hours**: Average hours/week in meetings
- **Focus Time**: Uninterrupted blocks ≥2 hours per day
- **Response SLA**: Time to async response (target: <24 hours)
- **Sync Necessity**: What % of meetings couldn't be emails?

### AoT/JiT Optimization
- **Premature Work**: Features built but never used
- **Technical Debt**: Work deferred then costs 10x more
- **Prep Payoff**: How often does AoT investment pay off?
- **JiT Delays**: How often does lack of preparation block?

### Cognitive Artifact Health
- **Documentation Coverage**: What % of systems have current docs?
- **Time to Onboard**: Days until new engineer productive
- **Context Lookup Time**: Minutes to find needed information
- **Incident MTTR**: How fast can team resolve incidents?
- **Knowledge Loss**: Impact when someone leaves team

---

## Contextual Decision-Making Framework

### "It Depends" - The Core Principle

Every engineering decision depends on context:

**Should we use microservices?**
- Depends on: team size, deployment frequency, domain boundaries, operational maturity

**Should we write documentation?**
- Depends on: audience size, change frequency, complexity, onboarding needs

**Should we refactor this code?**
- Depends on: change frequency, bug rate, team familiarity, business priority

**Should we meet synchronously?**
- Depends on: urgency, complexity, relationship building needs, timezone distribution

### Context Gathering Process

1. **Identify Decision**: What are we choosing?
2. **List Constraints**: What must be true?
3. **Gather Context**: Who, what, when, where, why?
4. **Evaluate Options**: What are trade-offs in this context?
5. **Decide & Document**: Choose and record reasoning
6. **Review & Adapt**: Reassess as context changes

---

## Audience Encapsulation

Different audiences need different context depth:

### Public (SLA - Service Level Agreement)
- **Audience**: Customers, partners, executives
- **Context Depth**: High-level commitments
- **Example**: "99.9% uptime, <200ms P95 latency"

### Internal (SLO - Service Level Objective)
- **Audience**: Engineering leadership, product
- **Context Depth**: Internal targets with margin
- **Example**: "99.95% uptime, <150ms P95 latency"

### Private (SLI - Service Level Indicator)
- **Audience**: Engineers, operators
- **Context Depth**: Detailed metrics and implementation
- **Example**: "Monitor /health endpoint every 10s, alert if 3 consecutive failures"

---

## References

- **Context Etymology**: Latin _contextus_, "to weave together"
- **Tragedy of the Commons**: Hardin, G. (1968)
- **Observability**: Logs, Metrics, Traces (three pillars) - IBM Cloud
- **SLA/SLO/SLI**: Atlassian incident management guide
- **Cognitive Artifacts**: Norman, D. A. (1991). "Cognitive artifacts"
- **Async Communication**: GitLab's async manifesto, Basecamp's async culture
