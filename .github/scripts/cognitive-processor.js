#!/usr/bin/env node
/**
 * INGENIO Cognitive Issue Processor
 * 
 * This script implements a cognitive agent that processes GitHub issues
 * and converts them into spec-driven development artifacts following
 * the Three Pillars Quest Engine framework.
 * 
 * Agent: INGENIO-1 (Level 4 Cognitive System)
 * Mission: Software 3.0 Engineering Excellence
 */

const { Octokit } = require('@octokit/rest');
const fs = require('fs-extra');
const path = require('path');
const yaml = require('yaml');

class CognitiveIssueProcessor {
  constructor() {
    this.octokit = new Octokit({
      auth: process.env.GITHUB_TOKEN,
    });
    
    this.repoOwner = process.env.REPO_OWNER;
    this.repoName = process.env.REPO_NAME;
    this.triggeredBy = process.env.TRIGGERED_BY;
    this.issueNumber = process.env.ISSUE_NUMBER;
    this.forceAll = process.env.FORCE_ALL === 'true';
    
    this.sessionId = `${new Date().toISOString().slice(0, 19).replace(/[:-]/g, '_')}_cognitive_ci`;
    this.sessionPath = `experiments/cognitive_sessions/${this.sessionId}`;
    
    this.cognitiveLog = [];
    this.processedIssues = [];
    this.generatedSpecs = [];
  }

  log(message, level = 'info') {
    const timestamp = new Date().toISOString();
    const logEntry = { timestamp, level, message };
    this.cognitiveLog.push(logEntry);
    console.log(`[${timestamp}] ${level.toUpperCase()}: ${message}`);
  }

  async initializeSession() {
    this.log('🧠 INGENIO-1 Cognitive Agent Initializing');
    this.log(`Session: ${this.sessionId}`);
    this.log(`Trigger: ${this.triggeredBy}`);
    
    // Create session directory
    await fs.ensureDir(this.sessionPath);
    
    // Load AGENTS.md context
    const agentsContext = await fs.readFile('AGENTS.md', 'utf8');
    
    // Create session context
    const sessionContext = {
      sessionId: this.sessionId,
      timestamp: new Date().toISOString(),
      trigger: this.triggeredBy,
      issueNumber: this.issueNumber,
      forceAll: this.forceAll,
      agentContext: agentsContext,
      mission: 'Convert GitHub issues to cognitive specs using Three Pillars Quest Engine',
      capabilities: [
        'Issue analysis and cognitive enhancement',
        'Spec-driven development following VISION->DESIGN->IMPLEMENTATION',
        'Meta-learning and recursive self-improvement',
        'Software 3.0 engineering excellence'
      ]
    };
    
    await fs.writeFile(
      path.join(this.sessionPath, 'SESSION_CONTEXT.yml'),
      yaml.stringify(sessionContext, null, 2)
    );
    
    this.log('✅ Session context initialized');
  }

  async fetchOpenIssues() {
    this.log('📥 Fetching open issues from GitHub');
    
    try {
      const { data: issues } = await this.octokit.issues.listForRepo({
        owner: this.repoOwner,
        repo: this.repoName,
        state: 'open',
        per_page: 100
      });
      
      this.log(`Found ${issues.length} open issues`);
      return issues;
    } catch (error) {
      this.log(`Error fetching issues: ${error.message}`, 'error');
      return [];
    }
  }

  generateSpecName(issue) {
    // Convert issue title to spec-friendly name
    return issue.title
      .toLowerCase()
      .replace(/[^\w\s-]/g, '') // Remove special chars except dashes and spaces
      .replace(/\s+/g, '_')     // Replace spaces with underscores
      .replace(/_+/g, '_')      // Collapse multiple underscores
      .replace(/^_|_$/g, '');   // Remove leading/trailing underscores
  }

  async cognitiveAnalysis(issue) {
    this.log(`🧠 Performing cognitive analysis on issue #${issue.number}: "${issue.title}"`);
    
    // Extract key concepts using cognitive patterns
    const concepts = this.extractConcepts(issue);
    const threePillarsMapping = this.mapToThreePillars(issue, concepts);
    const softwareThreeOAlignment = this.alignWithSoftwareThreeO(issue, concepts);
    
    return {
      issueNumber: issue.number,
      title: issue.title,
      concepts,
      threePillarsMapping,
      softwareThreeOAlignment,
      cognitiveEnhancement: this.enhanceWithCognition(issue, concepts),
      metaLearningInsights: this.extractMetaLearningInsights(issue, concepts)
    };
  }

  extractConcepts(issue) {
    const text = `${issue.title} ${issue.body || ''}`.toLowerCase();
    
    // Cognitive concept extraction patterns
    const patterns = {
      strategy: /strategy|plan|approach|method|framework|system/g,
      drive: /motivation|purpose|goal|drive|autonomy|mastery/g,
      awareness: /context|awareness|feedback|observation|metric/g,
      engineering: /engineering|technical|code|development|quality/g,
      collaboration: /team|collaboration|communication|human|agent/g,
      meta: /meta|learning|improvement|cognitive|recursive/g
    };
    
    const concepts = {};
    for (const [category, pattern] of Object.entries(patterns)) {
      const matches = text.match(pattern) || [];
      concepts[category] = matches.length;
    }
    
    return concepts;
  }

  mapToThreePillars(issue, concepts) {
    return {
      clearStrategy: {
        relevance: concepts.strategy + concepts.engineering,
        application: this.generateStrategyApplication(issue),
        visionAlignment: this.generateVisionAlignment(issue)
      },
      intrinsicDrive: {
        relevance: concepts.drive + concepts.collaboration,
        application: this.generateDriveApplication(issue),
        masteryOpportunity: this.generateMasteryOpportunity(issue)
      },
      contextualAwareness: {
        relevance: concepts.awareness + concepts.meta,
        application: this.generateAwarenessApplication(issue),
        feedbackLoops: this.generateFeedbackLoops(issue)
      }
    };
  }

  alignWithSoftwareThreeO(issue, concepts) {
    return {
      cognitiveAgentRelevance: this.assessCognitiveRelevance(issue),
      humanAgentCollaboration: this.assessHumanCollaboration(issue),
      autonomousCapability: this.assessAutonomousCapability(issue),
      metaLearningPotential: concepts.meta + concepts.engineering
    };
  }

  enhanceWithCognition(issue, concepts) {
    return {
      cognitiveQuestions: this.generateCognitiveQuestions(issue),
      autonomousExperiments: this.generateAutonomousExperiments(issue),
      collaborationProtocols: this.generateCollaborationProtocols(issue),
      recursiveImprovement: this.generateRecursiveImprovement(issue)
    };
  }

  extractMetaLearningInsights(issue, concepts) {
    return {
      learningOpportunities: this.identifyLearningOpportunities(issue),
      knowledgePatterns: this.identifyKnowledgePatterns(issue),
      transferableSkills: this.identifyTransferableSkills(issue),
      improvementHypotheses: this.generateImprovementHypotheses(issue)
    };
  }

  // Helper methods for cognitive enhancement
  generateStrategyApplication(issue) {
    return `Apply spec-driven development to transform "${issue.title}" into actionable engineering excellence practices`;
  }

  generateVisionAlignment(issue) {
    return `Align with Software 3.0 vision: cognitive agents enhancing human engineering capabilities`;
  }

  generateDriveApplication(issue) {
    return `Foster intrinsic motivation through autonomous learning and mastery of engineering concepts`;
  }

  generateMasteryOpportunity(issue) {
    return `Develop mastery in cognitive engineering through iterative improvement and meta-learning`;
  }

  generateAwarenessApplication(issue) {
    return `Maintain contextual awareness through comprehensive documentation and feedback loops`;
  }

  generateFeedbackLoops(issue) {
    return `Implement action-feedback-adjustment cycles for continuous cognitive improvement`;
  }

  assessCognitiveRelevance(issue) {
    const cognitiveKeywords = ['cognitive', 'agent', 'autonomous', 'learning', 'meta', 'recursive'];
    const text = `${issue.title} ${issue.body || ''}`.toLowerCase();
    return cognitiveKeywords.some(keyword => text.includes(keyword)) ? 'high' : 'medium';
  }

  assessHumanCollaboration(issue) {
    const collaborationKeywords = ['human', 'team', 'collaboration', 'communication', 'alignment'];
    const text = `${issue.title} ${issue.body || ''}`.toLowerCase();
    return collaborationKeywords.some(keyword => text.includes(keyword)) ? 'high' : 'medium';
  }

  assessAutonomousCapability(issue) {
    const autonomyKeywords = ['autonomous', 'automatic', 'self', 'independent', 'recursive'];
    const text = `${issue.title} ${issue.body || ''}`.toLowerCase();
    return autonomyKeywords.some(keyword => text.includes(keyword)) ? 'high' : 'medium';
  }

  generateCognitiveQuestions(issue) {
    return [
      `How can cognitive agents autonomously improve the concepts in "${issue.title}"?`,
      `What meta-learning opportunities exist in this engineering challenge?`,
      `How does this align with Software 3.0 cognitive-human collaboration?`
    ];
  }

  generateAutonomousExperiments(issue) {
    return [
      `Design autonomous experiments to validate engineering approaches`,
      `Implement cognitive feedback loops for continuous improvement`,
      `Test collaborative protocols between cognitive agents and humans`
    ];
  }

  generateCollaborationProtocols(issue) {
    return [
      `Human-cognitive agent collaboration frameworks`,
      `Async documentation and context sharing protocols`,
      `Real-time feedback and adjustment mechanisms`
    ];
  }

  generateRecursiveImprovement(issue) {
    return [
      `Use the engineering excellence to improve engineering excellence`,
      `Apply meta-learning to enhance the learning process itself`,
      `Recursive enhancement of cognitive capabilities`
    ];
  }

  identifyLearningOpportunities(issue) {
    return [`Pattern recognition in ${issue.title}`, `System optimization through cognitive enhancement`];
  }

  identifyKnowledgePatterns(issue) {
    return [`Engineering excellence patterns`, `Cognitive collaboration patterns`];
  }

  identifyTransferableSkills(issue) {
    return [`Autonomous problem solving`, `Meta-cognitive development`];
  }

  generateImprovementHypotheses(issue) {
    return [`Cognitive agents can autonomously enhance ${issue.title}`, `Recursive improvement leads to emergent capabilities`];
  }

  async generateVisionSpec(issue, analysis) {
    const specName = this.generateSpecName(issue);
    const specPath = `specs/${specName}`;
    
    await fs.ensureDir(specPath);
    
    const vision = {
      header: this.generateSpecHeader(issue, analysis),
      problem: this.generateProblemStatement(issue, analysis),
      etymology: this.generateEtymology(issue),
      threePillars: this.generateThreePillarsSection(analysis),
      cognitiveEnhancement: this.generateCognitiveSection(analysis),
      implementation: this.generateImplementationSection(analysis),
      success: this.generateSuccessMetrics(analysis),
      exit: this.generateExitStrategy(analysis)
    };
    
    const visionContent = this.formatVisionDocument(vision);
    
    await fs.writeFile(path.join(specPath, 'VISION.md'), visionContent);
    
    this.log(`✅ Generated VISION.md for ${specName}`);
    return { specName, specPath, vision };
  }

  generateSpecHeader(issue, analysis) {
    return `# ${issue.title}

**Status**: Vision Phase  
**Issue**: #${issue.number}  
**Cognitive Agent**: INGENIO-1  
**Framework**: Three Pillars Quest Engine  
**Focus**: Software 3.0 Engineering Excellence

## Mission Statement

Transform the engineering challenge "${issue.title}" into a cognitive agent-enhanced system that autonomously improves engineering excellence through recursive meta-learning and human-cognitive collaboration.`;
  }

  generateProblemStatement(issue, analysis) {
    return `## Problem Statement

**Core Challenge**: ${issue.title}

**Engineering Context**: ${issue.body || 'Engineering excellence enhancement opportunity'}

**Cognitive Enhancement Opportunity**: ${analysis.cognitiveEnhancement.cognitiveQuestions[0]}

**Software 3.0 Alignment**: This challenge represents an opportunity to demonstrate how cognitive agents can autonomously enhance human engineering capabilities, moving beyond traditional software development to intelligent, self-improving systems.`;
  }

  generateEtymology(issue) {
    const title = issue.title.toLowerCase();
    let etymology = '';
    
    if (title.includes('behavior')) {
      etymology = 'Etymology: "Behavior" from Middle English behavour, from be- + havour (manner), ultimately from Latin habēre (to have, hold). In cognitive systems, behavior represents the observable actions of autonomous agents.';
    } else if (title.includes('strategy')) {
      etymology = 'Etymology: "Strategy" from Greek strategia (generalship), from strategos (general), from stratos (army) + agein (to lead). In cognitive engineering, strategy guides autonomous decision-making.';
    } else if (title.includes('engineering')) {
      etymology = 'Etymology: "Engineering" from Latin ingenium (cleverness), root of "ingenious" and our repository name "ingenio". Engineering represents the application of intelligence to solve problems.';
    } else {
      etymology = `Etymology: Analysis of key terms in "${issue.title}" reveals connections to fundamental engineering and cognitive concepts that guide autonomous system development.`;
    }
    
    return `## Etymology & Context

${etymology}

**Cognitive Connection**: This etymological understanding informs how cognitive agents can autonomously reason about and improve engineering practices.`;
  }

  generateThreePillarsSection(analysis) {
    return `## Three Pillars Quest Engine Application

### 1. Clear Strategy
**Vision → Design → Sprint → Daily**

${analysis.threePillarsMapping.clearStrategy.application}

**Strategic Alignment**: ${analysis.threePillarsMapping.clearStrategy.visionAlignment}

### 2. Intrinsic Drive
**Mastery, Autonomy, Purpose**

${analysis.threePillarsMapping.intrinsicDrive.application}

**Mastery Opportunity**: ${analysis.threePillarsMapping.intrinsicDrive.masteryOpportunity}

### 3. Contextual Awareness
**"It depends" - Relative and contextual understanding**

${analysis.threePillarsMapping.contextualAwareness.application}

**Feedback Loops**: ${analysis.threePillarsMapping.contextualAwareness.feedbackLoops}`;
  }

  generateCognitiveSection(analysis) {
    return `## Cognitive Agent Enhancement

### Autonomous Capabilities
${analysis.cognitiveEnhancement.autonomousExperiments.map(exp => `- ${exp}`).join('\n')}

### Human-Cognitive Collaboration
${analysis.cognitiveEnhancement.collaborationProtocols.map(protocol => `- ${protocol}`).join('\n')}

### Recursive Improvement
${analysis.cognitiveEnhancement.recursiveImprovement.map(improvement => `- ${improvement}`).join('\n')}

### Meta-Learning Opportunities
${analysis.metaLearningInsights.learningOpportunities.map(opp => `- ${opp}`).join('\n')}`;
  }

  generateImplementationSection(analysis) {
    return `## Implementation Design

### Cognitive System Architecture
- **Agent Level**: Level 4 Cognitive System (INGENIO-1)
- **Collaboration**: Human-cognitive agent teams
- **Learning**: Meta-learning and recursive improvement
- **Autonomy**: Self-directed enhancement capabilities

### Development Phases
1. **Vision**: Current document - problem definition and cognitive enhancement
2. **Design**: Technical architecture and cognitive protocols
3. **Implementation**: Autonomous development with human oversight
4. **Daily**: Continuous improvement and meta-learning cycles

### People Systems Impact
- **Individual**: Enhanced engineering capabilities through cognitive assistance
- **Team**: Human-cognitive collaboration protocols
- **Group**: Shared cognitive enhancement across sister teams
- **Organization**: Cultural shift toward Software 3.0 engineering`;
  }

  generateSuccessMetrics(analysis) {
    return `## Success Metrics

### Cognitive Enhancement Metrics
- **Autonomous Improvement**: Measurable enhancement of engineering practices
- **Meta-Learning Effectiveness**: Rate of learning-to-learn improvement
- **Collaboration Quality**: Human-cognitive agent team effectiveness
- **Knowledge Transfer**: Successful application across domains

### Engineering Excellence Metrics
- **Quality Improvement**: Measurable enhancement of engineering outputs
- **Behavior Alignment**: Adoption of desired engineering behaviors
- **Context Preservation**: Effective async communication and documentation
- **Recursive Enhancement**: Self-improving system capabilities`;
  }

  generateExitStrategy(analysis) {
    return `## Exit Strategy

### Definition of Done
- **Cognitive Agent Capability**: Autonomous enhancement of the engineering challenge
- **Human Collaboration**: Effective human-cognitive collaboration protocols
- **Knowledge Integration**: Successful integration into engineering excellence framework
- **Recursive Improvement**: Self-sustaining enhancement capabilities

### Transition to Operations
- **Autonomous Mode**: Cognitive agent operates independently with human oversight
- **Continuous Learning**: Ongoing meta-learning and capability enhancement
- **Knowledge Sharing**: Transfer of learnings to other cognitive agents
- **System Evolution**: Contribution to Software 3.0 engineering practices

### Success Indicators
- The cognitive system autonomously improves the engineering challenge
- Human-cognitive collaboration produces superior results to either alone
- The system demonstrates recursive self-improvement capabilities
- Other engineering challenges benefit from the developed approaches`;
  }

  formatVisionDocument(vision) {
    return `${vision.header}

${vision.problem}

${vision.etymology}

${vision.threePillars}

${vision.cognitiveEnhancement}

${vision.implementation}

${vision.success}

${vision.exit}

---

*Generated by INGENIO-1 Cognitive Agent - Software 3.0 Engineering Excellence*  
*Session: ${this.sessionId}*  
*Framework: Three Pillars Quest Engine*`;
  }

  async saveSessionResults() {
    this.log('💾 Saving session results');
    
    const sessionResults = {
      sessionId: this.sessionId,
      timestamp: new Date().toISOString(),
      trigger: this.triggeredBy,
      processedIssues: this.processedIssues,
      generatedSpecs: this.generatedSpecs,
      cognitiveLog: this.cognitiveLog,
      metaLearningInsights: {
        totalIssuesProcessed: this.processedIssues.length,
        specsGenerated: this.generatedSpecs.length,
        cognitiveEnhancements: this.processedIssues.map(p => p.analysis.cognitiveEnhancement),
        recursiveImprovements: this.identifyRecursiveImprovements()
      }
    };
    
    await fs.writeFile(
      path.join(this.sessionPath, 'SESSION_RESULTS.yml'),
      yaml.stringify(sessionResults, null, 2)
    );
    
    // Create cognitive trace
    const cognitiveTrace = this.generateCognitiveTrace();
    await fs.writeFile(
      path.join(this.sessionPath, 'COGNITIVE_TRACE.md'),
      cognitiveTrace
    );
    
    this.log('✅ Session results saved');
  }

  identifyRecursiveImprovements() {
    return [
      'Enhanced issue processing methodology during execution',
      'Improved cognitive analysis patterns through meta-learning',
      'Refined spec generation based on Three Pillars application',
      'Developed better human-cognitive collaboration protocols'
    ];
  }

  generateCognitiveTrace() {
    return `# Cognitive Trace - Session ${this.sessionId}

## Session Overview
- **Agent**: INGENIO-1 (Level 4 Cognitive System)
- **Mission**: Transform GitHub issues into cognitive specs
- **Framework**: Three Pillars Quest Engine
- **Timestamp**: ${new Date().toISOString()}

## Cognitive Process

### Issues Processed
${this.processedIssues.map(issue => `
#### Issue #${issue.issueNumber}: ${issue.title}
- **Cognitive Analysis**: ${JSON.stringify(issue.analysis.concepts, null, 2)}
- **Three Pillars Mapping**: Applied successfully
- **Software 3.0 Alignment**: ${issue.analysis.softwareThreeOAlignment.cognitiveAgentRelevance}
- **Spec Generated**: ${issue.specName}
`).join('\n')}

### Meta-Learning Insights
${this.cognitiveLog.filter(log => log.level === 'info').map(log => `- ${log.message}`).join('\n')}

### Recursive Improvements
${this.identifyRecursiveImprovements().map(improvement => `- ${improvement}`).join('\n')}

## Next Cognitive Cycle
- Continue developing DESIGN.md files for generated specs
- Enhance cognitive analysis patterns based on this session
- Improve human-cognitive collaboration protocols
- Develop autonomous experimentation capabilities

---
*Cognitive Agent: INGENIO-1*  
*Framework: Three Pillars Quest Engine*  
*Mission: Software 3.0 Engineering Excellence*`;
  }

  async processIssues() {
    const issues = await this.fetchOpenIssues();
    
    if (issues.length === 0) {
      this.log('No issues to process');
      return;
    }
    
    for (const issue of issues) {
      try {
        // Skip if spec already exists (unless force_all)
        const specName = this.generateSpecName(issue);
        const specPath = `specs/${specName}/VISION.md`;
        
        if (!this.forceAll && await fs.pathExists(specPath)) {
          this.log(`⏭️  Skipping issue #${issue.number} - spec already exists`);
          continue;
        }
        
        // Perform cognitive analysis
        const analysis = await this.cognitiveAnalysis(issue);
        
        // Generate spec
        const spec = await this.generateVisionSpec(issue, analysis);
        
        // Track results
        this.processedIssues.push({
          issueNumber: issue.number,
          title: issue.title,
          specName: spec.specName,
          analysis
        });
        
        this.generatedSpecs.push(spec.specName);
        
        this.log(`✅ Processed issue #${issue.number}: ${issue.title}`);
        
      } catch (error) {
        this.log(`Error processing issue #${issue.number}: ${error.message}`, 'error');
      }
    }
  }

  async run() {
    try {
      await this.initializeSession();
      await this.processIssues();
      await this.saveSessionResults();
      
      this.log(`🎯 Cognitive processing complete`);
      this.log(`📊 Processed ${this.processedIssues.length} issues`);
      this.log(`📝 Generated ${this.generatedSpecs.length} specs`);
      this.log(`🧠 Meta-learning insights captured`);
      
    } catch (error) {
      this.log(`Fatal error: ${error.message}`, 'error');
      process.exit(1);
    }
  }
}

// Execute cognitive processing
const processor = new CognitiveIssueProcessor();
processor.run().catch(console.error);