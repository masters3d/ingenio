---
marp: true

---

# Systematic Improvement

Chéyo Jiménez, MSE
_Apr, 2026_


---

# Kaizen (改善)

- From Japanese _kai_ (change) + _zen_ (good/better)
  - "Change for the better"
  - The ongoing improvement of all functions involving everybody
- Combined with Musk's Five-Step Algorithm as ordering discipline
  - Question → Delete → Simplify → Accelerate → Automate

---

# Core Principle

"Never automate inefficiency."

The order matters: **question → simplify → accelerate → automate**

---

# Systematic Improvement

**The IMPROVING Pillar**

"The system that improves itself outlasts every other"

---

# Cycle Position: Retrospective

**Prospective → Actuation → Retrospective**

1. Contextual Awareness (Prospective/KNOWING)
2. Clear Strategy (Actuation/ACTING)
3. **Systematic Improvement (Retrospective/IMPROVING)** ← We are here

Closes the loop: Feeds permanently improved system back to Prospective phase

---

# Kaizen Foundation

**Genchi Genbutsu (現地現物)** — "Go and see for yourself"

- Don't trust reports — verify at the source
- The automated Gemba walk

**Hansei (反省)** — "Honest self-reflection"

- The system honestly examines itself
- No ego, no blame — just the delta between expected and actual

---

# OODA Loop Mapping

**Boyd's OODA Loop**: Observe → Orient → Decide → Act

Systematic Improvement is the **feedback arc**:
- From Act back to Observe
- Closes the continuous improvement loop
- "The team that improves itself fastest wins"

---

# Three Sub-Pillars of Systematic Improvement

**Framework**: Kaizen + Musk's Five-Step Algorithm + Recursive Self-Improvement

**Fractal Pattern**: Each sub-pillar mirrors Prospective → Actuation → Retrospective

1. **Iterative Integration** (Prospective of improving) - Is this still true?
2. **Deliberate Practice** (Actuation of improving) - How do we make this better?
3. **Update Propagation** (Retrospective of improving) - How do we make this permanent and spread it everywhere?

---

# Inner Loop Structure

```
┌──→ Iterative Integration (Is this still true?)
│           ↓
│    Deliberate Practice (do less of / keep doing / do more of)
│           │
│  ready to standardize? ──NO──┘
│           │
│          YES
│           ↓
└── Update Propagation (eliminate → prevent → automate → propagate)
```

Sub-Pillars 1 and 2 cycle rapidly together until the improvement is stable. Only when it's ready to standardize (PDCA → SDCA boundary) does it exit to Update Propagation.

---

# Sub-Pillar 1: Iterative Integration

**Constantly test state against expected state. Lock in the truth.**

- Compare Prediction vs Reality
  - Expected: "P95 < 200ms"
  - Actual: "P95 = 350ms"
  - Gap: "150ms slower than target"
- Identify Contributing Factors (Root Cause Analysis)
  - Technical, process, communication factors
  - Five Whys technique
- Document Without Blame

---

# Sub-Pillar 1: Iterative Integration (cont.)

**Blameless Hansei** (honest self-reflection without blame)

- Separate person from action
  - "The deploy script failed" not "Bob failed"
- Focus on systems
  - What about the system allowed this?
- Psychological safety
  - Honesty requires safety from punishment
- The system constantly examines itself — continuous, not periodic

---

# Example: Bad Iterative Integration

> "The outage happened because Sarah deployed on Friday afternoon. She should have known better. Let's add a policy: no Friday deploys."

**Problem**: Blame-focused, treats symptom not cause

---

# Example: Good Iterative Integration

> "We had an outage during Friday deploy. Our rollback took 45 minutes because automated rollback failed and manual process was undocumented.
>
> Root cause: missing health check caused bad deploy to pass CI. We didn't catch this because staging differs from prod.
>
> Actions: (1) Add health check to CI, (2) Document rollback, (3) Align staging with prod."

**Success**: System-focused, addresses root causes

---

# Sub-Pillar 2: Deliberate Practice

**The practiced routine of improvement. Do less of / keep doing / do more of.**

- Sort Every Process
  - Do less of (waste, friction, low value)
  - Keep doing (what's working)
  - Do more of (what generates value)
- Distinguish Signal from Noise
  - One-off incident vs systemic issue
  - Special cause vs common cause variation

---

# Sub-Pillar 2: Deliberate Practice (cont.)

**Kata (型)** — the practiced improvement routine

- Recognize System Archetypes
  - Success to the Successful
  - Tragedy of the Commons
  - Fixes that Backfire
- Extract Generalizable Lessons
  - What's the underlying principle?
  - Where else might this apply?
  - Each cycle refines the system further — inner loop with CI

---

# Example: Bad Deliberate Practice

> "We had 3 incidents this month caused by config errors. Let's add more code review for config changes."

**Problem**: Treats symptom, misses underlying pattern

---

# Example: Good Deliberate Practice

> "We've had 12 incidents in 6 months, 8 involved config. Do less of: direct config deploys without validation. Keep: manual review for high-risk changes. Do more of: config-as-code with staged rollout.
>
> Root pattern: We treat config as 'not code' but it controls production behavior.
>
> Experiment: Move config to version control with automated validation for 30 days."

**Success**: Do-less/keep/more framing with root pattern identification

---

# Sub-Pillar 3: Update Propagation

**Eliminate, prevent, automate, propagate. Each cycle faster than the last.**

- Eliminate Waste Permanently (Muda elimination — don't defer, delete)
- Mistake-Proof the System (Poka-yoke — make regression structurally impossible)
- Automate with Intelligence (Jidoka — human judgment stays in the loop)
- Standardize Before Propagating (SDCA — lock in gains, then spread)
- Propagate Horizontally (Yokoten — spread to every place it applies)

---

# Sub-Pillar 3: Update Propagation (cont.)

**Yokoten (横展)** — Horizontal deployment

- When one team finds a better way, it spreads to every team with the same problem
- Never keep improvements local
- Recursive Self-Improvement: each cycle faster than the last

**The ratchet**: SDCA locks in gains before next PDCA cycle

---

# Example: Bad Update Propagation

> "We had an incident, wrote a postmortem, and moved on. Same incident happened 2 months later."

**Problem**: No structural fix, no propagation, regression possible

---

# Example: Good Update Propagation

> "Structural fix: Added health check to CI (Poka-yoke). Standardized: Updated deploy checklist, ADR-042, updated runbook (SDCA). Propagated: Found 3 other services with same issue, applied fix to all (Yokoten). Automated: Health check runs automatically on every deploy (Jidoka).
>
> Result: Zero outages from this failure mode in 6 months."

**Success**: Eliminate → prevent → automate → propagate

---

# The Complete Cycle

**Prospective → Actuation → Retrospective**

1. **Contextual Awareness** (Prospective/KNOWING)
   - Gather information, build mental models

2. **Clear Strategy** (Actuation/ACTING)
   - Set goals, align difficulty, execute with feedback

3. **Systematic Improvement** (Retrospective/IMPROVING)
   - Test state continuously, practice improvement routines, propagate gains permanently

4. **Loop back to Prospective** (Permanently improved system for next cycle)

---

# Integration: Systematic Improvement ↔ Clear Strategy

- **Iterative Integration** feeds **Adaptive Control**
  - Continuous state testing provides real-time adjustment data
- **Deliberate Practice** informs **Challenge Matching**
  - Practiced routines identify if challenges are too hard/easy
- **Update Propagation** refines **Directed Intentionality**
  - Permanently improved system enables clearer, better-calibrated goals

---

# Integration: Systematic Improvement ↔ Contextual Awareness

- **Iterative Integration** enriches **Proactive Curiosity**
  - Continuous state testing adds experiential data to knowledge base
- **Deliberate Practice** improves **Cohesive Narrative**
  - Practiced routines reveal system structure and failure modes
- **Update Propagation** maintains **Shared Understanding**
  - Propagated improvements become permanent cognitive artifacts

---

# Integration: Systematic Improvement ↔ Objective Function

- **Iterative Integration** demonstrates **Search** progress
  - Human: See improvement over time (Mastery)
  - Agent: Validate loss decrease (Reward Signal)
- **Deliberate Practice** enhances **Drive**
  - Human: Understanding enables decisions (Autonomy)
  - Agent: Patterns expand action coverage (Action Space)
- **Update Propagation** clarifies **Renew**
  - Human: Permanent improvements connect to meaning (Purpose)
  - Agent: Propagated improvements verify optimization target (Value Alignment)

---

# Anti-Patterns to Avoid

**No Iterative Integration**
- Symptom: Ship and move on, never test current state
- Solution: Make state testing required; treat broken tests as stop-the-line event

**Blame Culture**
- Symptom: Incidents lead to punishment, hide mistakes
- Solution: Blameless postmortems grounded in Hansei, celebrate transparency

**Automating Inefficiency**
- Symptom: Automate a broken or wasteful process to "save time"
- Solution: Question → Delete → Simplify before Automate. Never automate waste.

---

# Anti-Patterns to Avoid (cont.)

**Action Items Without Follow-Through**
- Symptom: Long lists that never get addressed, same incidents recur
- Solution: Top 3 items, structural fix (not intent), assign owners, track completion

**Local Improvements Only**
- Symptom: One team solves a problem; other teams have the same problem and don't know
- Solution: Yokoten — make horizontal propagation a standard part of completing any improvement

---

# Measuring Systematic Improvement

**Iterative Integration Metrics**
- % of system state continuously tested against expected state
- Time to detect when reality drifts from intention
- Blameless postmortem rate (not blame-focused)

**Deliberate Practice Metrics**
- Improvement cycle time (from identifying problem to running experiment)
- Signal vs noise accuracy (% of investigated issues that were systemic)
- Practice consistency (applied routinely, not just after incidents)

**Update Propagation Metrics**
- Recurrence rate (% of incidents that are repeats — should trend to zero)
- Propagation coverage (% of improvements spread to all applicable areas)
- Improvement velocity (rate of improvement is increasing — recursive acceleration)

---

# Key Behaviors by IC Level

**IC 0-1**: Participate in CI, ask "is this still true?", share improvements with the team

**IC 2-3**: Conduct blameless postmortems, apply do-less/keep/more sorting, automate manual steps after simplifying

**IC 4-5**: Build structural mistake-proofing, track improvement velocity, implement Yokoten practice

**IC 6-7+**: Establish organizational improvement culture, build recursive improvement systems, spread gains to every team

---

# References

- **Kaizen** (Imai): Ongoing improvement involving everybody
- **Toyota Production System** (Ohno): Muda, Poka-yoke, Jidoka, Yokoten
- **Toyota Kata** (Rother): The Improvement Kata
- **Deliberate Practice** (Ericsson): Structured practice at the edge of current ability
- **Five-Step Algorithm** (Musk): Question → Delete → Simplify → Accelerate → Automate
- **OODA Loop** (Boyd): Feedback from Act back to Observe
- **Double-Loop Learning** (Argyris): Question underlying assumptions
- **Blameless Postmortems** (Etsy, Google): Psychological safety
- **Statistical Process Control** (Deming): Signal vs noise

---

# Summary

**Systematic Improvement: The IMPROVING Pillar**

**Etymology**: _Kaizen_ (改善) — "change for the better"

**Cycle Role**: Retrospective — closes the improvement loop permanently

**Fractal Pattern**: Sub-pillars mirror Prospective → Actuation → Retrospective

**Three Sub-Pillars**:
1. Iterative Integration (Prospective of improving) - Is this still true?
2. Deliberate Practice (Actuation of improving) - How do we make this better?
3. Update Propagation (Retrospective of improving) - How do we make this permanent and spread it everywhere?

**Philosophy**: "The system that improves itself outlasts every other"
