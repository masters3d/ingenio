---
marp: true

---

# Reflective Calibration

Chéyo Jiménez, MSE
_Apr, 2026_


---

# Reflective

- From Latin _reflectere_
  - _re-_ (back) + _flectere_ (to bend)
  - "To bend back upon itself"
- The act of examining one's own thoughts and actions

---

# Calibration

- From Arabic _qālib_ (mold/form)
- The act of adjusting to reality
- Correcting the measurement against truth

---

# Reflective Calibration

**The LEARNING Pillar**

"Every result is data — the system that examines itself improves itself"

---

# Cycle Position: Retrospective

**Prospective → Actuation → Retrospective**

1. Contextual Awareness (Prospective/KNOWING)
2. Clear Strategy (Actuation/ACTING)
3. **Reflective Calibration (Retrospective/LEARNING)** ← We are here

Closes the loop: Feeds learning back to Prospective phase

---

# Robotics Foundation

**State Estimation** (Kalman filter, observers, feedback control)

- **Prediction**: Where do we think we are?
- **Measurement**: Where does the sensor say we are?
- **Update**: Correct prediction based on measurement
- **Iterate**: Next cycle uses updated state

---

# OODA Loop Mapping

**Boyd's OODA Loop**: Observe → Orient → Decide → Act

Reflective Calibration is the **feedback arc**:
- From Act back to Observe
- Closes the continuous improvement loop
- "The team that learns fastest wins"

---

# Three Sub-Pillars of Reflective Calibration

**Framework**: State Estimation + Double-Loop Learning + Statistical Process Control

**Fractal Pattern**: Each sub-pillar mirrors Prospective → Actuation → Retrospective

1. **State Estimation** (Prospective of learning) - Look forward at data
2. **Pattern Synthesis** (Actuation of learning) - Act on findings
3. **Loop Optimization** (Retrospective of learning) - Look back at learning process

---

# Sub-Pillar 1: State Estimation

**Look forward at the data — measure actual vs expected, gather signals**

- Compare Prediction vs Reality
  - Expected: "P95 < 200ms"
  - Actual: "P95 = 350ms"
  - Gap: "150ms slower than target"
- Identify Contributing Factors (Root Cause Analysis)
  - Technical, process, communication factors
  - Five Whys technique
- Assess Impact
  - Who affected? What cost? What learned?

---

# Sub-Pillar 1: State Estimation (cont.)

**Document Without Blame** (Blameless Postmortems)

- Separate person from action
  - "The deploy script failed" not "Bob failed"
- Focus on systems
  - What about the system allowed this?
- Psychological safety
  - Honesty requires safety from punishment
- Full context
  - Decisions made sense given information at the time

---

# Example: Bad State Estimation

> "The outage happened because Sarah deployed on Friday afternoon. She should have known better. Let's add a policy: no Friday deploys."

**Problem**: Blame-focused, treats symptom not cause

---

# Example: Good State Estimation

> "We had an outage during Friday deploy. Our rollback took 45 minutes because automated rollback failed and manual process was undocumented.
>
> Root cause: missing health check caused bad deploy to pass CI. We didn't catch this because staging differs from prod.
>
> Actions: (1) Add health check to CI, (2) Document rollback, (3) Align staging with prod."

**Success**: System-focused, addresses root causes

---

# Sub-Pillar 2: Pattern Synthesis

**Act on findings — identify patterns (both what failed and what succeeded), synthesize observations into understanding, and revise mental models, docs, and processes**

- Distinguish Signal from Noise
  - One-off incident vs systemic issue
  - Special cause vs common cause variation
  - Statistical significance
- Recognize System Archetypes
  - Success to the Successful
  - Tragedy of the Commons
  - Fixes that Backfire

---

# Sub-Pillar 2: Pattern Recognition (cont.)

- Identify Feedback Loops
  - Reinforcing loops (amplify changes)
  - Balancing loops (stabilize systems)
  - Delays (time lag between action and effect)
- Extract Generalizable Lessons
  - What's the underlying principle?
  - Where else might this apply?
  - What's the mental model?

---

# Example: Bad Pattern Synthesis

> "We had 3 incidents this month caused by config errors. Let's add more code review for config changes."

**Problem**: Treats symptom, misses underlying pattern

---

# Example: Good Pattern Synthesis

> "We've had 12 incidents in 6 months, 8 involved config. Pattern: Config changes bypass automated testing and deploy directly to prod.
>
> This is a 'Tragedy of the Commons' — config is shared infrastructure but no one owns config testing.
>
> Underlying: We treat config as 'not code' but it controls production behavior.
>
> Solution: Config-as-code in version control, automated validation, staged rollout."

**Success**: Identifies systemic pattern and root mental model

---

# Sub-Pillar 3: Loop Optimization

**Look back at how you learn — improve the feedback loops themselves, meta-learning**

- Update Mental Models (Map Revision)
  - What did we believe?
  - What evidence contradicts?
  - How should model change?
- Revise Strategies (Behavioral Change)
  - What worked? What didn't?
  - What should we do differently?
  - What should we keep doing?

---

# Sub-Pillar 3: Model Update (cont.)

- Adjust Processes (System Improvement)
  - Where did process fail?
  - How can we improve?
  - How ensure adoption?
- Close the Loop (Prospective Integration)
  - Document for future reference (ADRs, runbooks)
  - Update cognitive artifacts
  - Set new expectations (SLOs, timelines)
  - **Feed learning back to Prospective phase**

---

# Example: Bad Loop Optimization

> "We had an incident, wrote a postmortem, and moved on. Same incident happened 2 months later."

**Problem**: No actual change, learning didn't close the loop

---

# Example: Good Loop Optimization

> "Incident: Deploy caused outage. Root cause: Health check didn't catch issue.
>
> Model update: Our staging environment is not production-like enough.
>
> Strategy revision:
> 1. Added health check to CI (immediate)
> 2. Scheduled project to bring staging to prod parity (Q2)
> 3. Updated deploy checklist to verify health checks pass
>
> Documented in ADR-042 and updated runbook. Tracked: Zero outages from this failure mode in 6 months."

**Success**: Closed loop with concrete actions and verification

---

# The Complete Cycle

**Prospective → Actuation → Retrospective**

1. **Contextual Awareness** (Prospective/KNOWING)
   - Gather information, build mental models

2. **Clear Strategy** (Actuation/ACTING)
   - Set goals, align difficulty, execute with feedback

3. **Reflective Calibration** (Retrospective/LEARNING)
   - Analyze outcomes, recognize patterns, update models

4. **Loop back to Prospective** (Improved understanding for next cycle)

---

# Integration: Reflective Calibration ↔ Clear Strategy

- **State Estimation** feeds **Adaptive Control**
  - Immediate feedback for real-time adjustment
- **Pattern Synthesis** informs **Challenge Matching**
  - Identify if challenges are too hard/easy
- **Loop Optimization** refines **Directed Intentionality**
  - Adjust goals based on what we learned

---

# Integration: Reflective Calibration ↔ Contextual Awareness

- **State Estimation** enriches **Proactive Curiosity**
  - Adds experiential data to crawled information
- **Pattern Synthesis** improves **Cohesive Narrative**
  - Patterns reveal system structure and failure modes
- **Loop Optimization** maintains **Shared Understanding**
  - Documented learnings become cognitive artifacts

---

# Integration: Reflective Calibration ↔ Intrinsic Motivation

- **State Estimation** demonstrates **Mastery** progress
  - See improvement over time, validate growth
- **Pattern Synthesis** enhances **Autonomy**
  - Understanding patterns enables independent decisions
- **Loop Optimization** clarifies **Purpose**
  - Connect learnings to meaningful outcomes

---

# Anti-Patterns to Avoid

**No Retrospectives**
- Symptom: Ship and move on, never look back
- Solution: Make retrospectives required in Definition of Done

**Blame Culture**
- Symptom: Incidents lead to punishment, hide mistakes
- Solution: Blameless postmortems, celebrate transparency

**Action Items Without Follow-Through**
- Symptom: Long lists that never get addressed
- Solution: Top 3 items, assign owners, track completion

---

# Anti-Patterns to Avoid (cont.)

**Surface-Level Analysis**
- Symptom: Stop at first cause, miss deeper patterns
- Solution: Five Whys, require root cause analysis

**Learning Without Sharing**
- Symptom: Individual learns, rest of team repeats mistake
- Solution: Cognitive artifacts (postmortems, ADRs, runbooks)

---

# Measuring Reflective Calibration

**State Estimation Metrics**
- % of incidents with root cause analysis
- Time from incident to published postmortem
- Prediction accuracy (actual vs expected outcomes)

**Pattern Synthesis Metrics**
- % of incidents that are recurring patterns
- Number of documented archetypes/anti-patterns
- Issues caught before production based on patterns

**Loop Optimization Metrics**
- % of retrospective actions completed
- Frequency of ADR, runbook, wiki updates
- Knowledge retention (new members benefit from docs)

---

# Key Behaviors by IC Level

**IC 0-1**: Review feedback, compare expected vs actual, participate in retrospectives

**IC 2-3**: Conduct postmortems, analyze metrics, document lessons in ADRs

**IC 4-5**: Write detailed postmortems, track system behavior over time, identify systemic issues

**IC 6-7+**: Establish postmortem culture, analyze multi-system patterns, connect incidents to architecture

---

# References

- **Control Theory**: Kalman filtering, state estimation, feedback control
- **OODA Loop** (Boyd): Feedback from Act back to Observe
- **Double-Loop Learning** (Argyris & Schön): Question assumptions
- **Blameless Postmortems** (Etsy, Google): Psychological safety
- **Statistical Process Control** (Deming): Signal vs noise
- **Systems Thinking** (Meadows): Feedback loops, archetypes
- **After-Action Review** (US Army): Structured reflection

---

# Summary

**Reflective Calibration: The LEARNING Pillar**

**Etymology**: _Reflectere_ (bend back) + _Qālib_ (mold/form)

**Cycle Role**: Retrospective — closes the improvement loop

**Fractal Pattern**: Sub-pillars mirror Prospective → Actuation → Retrospective

**Three Sub-Pillars**:
1. State Estimation (Prospective of learning) - Look forward at data
2. Pattern Synthesis (Actuation of learning) - Act on findings
3. Loop Optimization (Retrospective of learning) - Look back at learning process

**Philosophy**: "Every result is data — the system that examines itself improves itself"
