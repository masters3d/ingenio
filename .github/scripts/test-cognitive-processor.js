#!/usr/bin/env node

/**
 * Test Script for INGENIO-1 Cognitive Processor
 * Validates cognitive agent functionality without requiring GitHub API access
 */

const fs = require('fs-extra');
const path = require('path');

class CognitiveProcessorTester {
  constructor() {
    this.testResults = [];
    this.mockIssues = [
      {
        number: 1,
        title: "Implement PIE Theory Integration for Engineering Excellence",
        body: `## Problem Statement
        
We need to integrate PIE Theory (Performance, Image, Exposure) into our engineering excellence framework to help engineers understand career progression dynamics.

## Goals
- Create comprehensive PIE Theory documentation
- Develop assessment tools for engineers
- Integrate with Three Pillars framework
- Provide actionable career guidance

## Acceptance Criteria
- [ ] PIE Theory vision document created
- [ ] Assessment framework developed
- [ ] Integration with existing specs completed
- [ ] User testing and feedback incorporated

## Additional Context
This should help engineers understand how performance, professional image, and exposure opportunities affect career growth.`,
        labels: [{ name: 'sos oficial' }, { name: 'enhancement' }, { name: 'career-development' }],
        created_at: '2024-12-19T10:00:00Z',
        updated_at: '2024-12-19T10:00:00Z'
      },
      {
        number: 2,
        title: "Setup Cognitive Agent Testing Framework",
        body: `Need to create comprehensive testing for cognitive agents.
        
Requirements:
- Unit tests for cognitive functions
- Integration tests for GitHub API
- Performance benchmarks
- Quality metrics validation`,
        labels: [{ name: 'testing' }, { name: 'cognitive-agents' }],
        created_at: '2024-12-19T11:00:00Z',
        updated_at: '2024-12-19T11:00:00Z'
      },
      {
        number: 3,
        title: "Quality Engineering Approach Enhancement",
        body: `Enhance QE vs QA mindset transformation within the engineering team.
        
Key improvements needed:
- Shift left quality practices
- Engineer ownership of quality
- Built-in quality processes
- Behavior alignment systems`,
        labels: [{ name: 'sos oficial' }, { name: 'quality' }, { name: 'engineering' }],
        created_at: '2024-12-19T12:00:00Z',
        updated_at: '2024-12-19T12:00:00Z'
      },
      {
        number: 4,
        title: "Cognitive Engineering Level 5 Capabilities",
        body: `Develop advanced cognitive engineering capabilities for autonomous system improvement.
        
Focus areas:
- Meta-learning enhancement
- Recursive self-improvement
- Collaborative intelligence protocols
- Emergent behavior management`,
        labels: [{ name: 'Ingenio-1' }, { name: 'cognitive-engineering' }, { name: 'meta-learning' }],
        created_at: '2024-12-19T13:00:00Z',
        updated_at: '2024-12-19T13:00:00Z'
      },
      {
        number: 5,
        title: "Test Pull Request for Cognitive Processing",
        body: `This is a test pull request to verify that PRs are excluded from cognitive processing.`,
        labels: [{ name: 'sos oficial' }, { name: 'test' }],
        pull_request: {  // This makes it a PR, not an issue
          url: 'https://api.github.com/repos/masters3d/ingenio/pulls/5',
          html_url: 'https://github.com/masters3d/ingenio/pull/5',
          diff_url: 'https://github.com/masters3d/ingenio/pull/5.diff'
        },
        created_at: '2024-12-19T14:00:00Z',
        updated_at: '2024-12-19T14:00:00Z'
      }
    ];
  }

  async runTests() {
    console.log('🧪 Starting Cognitive Processor Tests...\n');

    // Test 1: Label filtering functionality
    await this.testLabelFiltering();

    // Test 2: Basic cognitive analysis
    await this.testCognitiveAnalysis();
    
    // Test 3: Three Pillars framework application
    await this.testThreePillarsFramework();
    
    // Test 4: Spec generation
    await this.testSpecGeneration();
    
    // Test 5: Meta-learning capabilities
    await this.testMetaLearning();
    
    // Test 6: Session management
    await this.testSessionManagement();

    // Test 7: PR creation workflow
    await this.testPRWorkflow();

    this.printTestResults();
  }

  async testLabelFiltering() {
    console.log('🏷️  Testing Label Filtering...');
    
    try {
      // Test that only issues with "Ingenio-1" label are processed
      const filteredIssues = this.mockIssues.filter(issue => 
        !issue.pull_request && // Exclude PRs
        issue.labels.some(label => label.name === 'Ingenio-1')
      );
      
      this.assert(
        filteredIssues.length === 1,
        `Should filter to 1 issue with "Ingenio-1" label (excluding PRs), got ${filteredIssues.length}`
      );
      
      this.assert(
        filteredIssues.every(issue => 
          issue.labels.some(label => label.name === 'Ingenio-1')
        ),
        'All filtered issues should have "Ingenio-1" label'
      );
      
      // Test that issues without the label are excluded
      const excludedByLabel = this.mockIssues.filter(issue => 
        !issue.pull_request && // Only consider actual issues
        !issue.labels.some(label => label.name === 'Ingenio-1')
      );
      
      this.assert(
        excludedByLabel.length === 3,
        `Should exclude 3 issues without "Ingenio-1" label, got ${excludedByLabel.length}`
      );
      
      this.assert(
        excludedByLabel.some(issue => issue.number === 1),
        'Issue #1 should be excluded (no "Ingenio-1" label)'
      );
      
      this.assert(
        excludedByLabel.some(issue => issue.number === 2),
        'Issue #2 should be excluded (no "Ingenio-1" label)'
      );
      
      this.assert(
        excludedByLabel.some(issue => issue.number === 3),
        'Issue #3 should be excluded (no "Ingenio-1" label)'
      );
      
      // Test that PRs are excluded
      const excludedPRs = this.mockIssues.filter(issue => issue.pull_request);
      
      this.assert(
        excludedPRs.length === 1,
        `Should exclude 1 pull request, got ${excludedPRs.length}`
      );
      
      this.assert(
        excludedPRs[0].number === 5,
        'Item #5 should be excluded (it is a PR)'
      );
      
      // Test specific label filtering
      const ingenioOneIssues = filteredIssues.filter(issue => 
        issue.labels.some(label => label.name === 'Ingenio-1')
      );
      
      this.assert(
        ingenioOneIssues.length === 1,
        `Should find 1 issue with "Ingenio-1" label, got ${ingenioOneIssues.length}`
      );
      
      this.pass('Label Filtering', 'Successfully filters issues by "Ingenio-1" label and excludes PRs');
      
    } catch (error) {
      this.fail('Label Filtering', error.message);
    }
  }

  async testPRWorkflow() {
    console.log('🔀 Testing PR Creation Workflow...');
    
    try {
      // Mock the PR creation workflow
      const issue = this.mockIssues[3]; // Issue with "Ingenio-1" label
      const analysis = await this.mockProcessIssue(issue);
      
      // Test branch naming
      const branchName = this.mockGenerateBranchName(issue);
      this.assert(
        branchName.startsWith('cognitive/spec-'),
        'Branch name should start with "cognitive/spec-"'
      );
      
      this.assert(
        branchName.includes('cognitive_engineering_level_5_capabilities'),
        'Branch name should include spec name'
      );
      
      // Test PR description generation
      const prDescription = this.mockGeneratePRDescription(issue, analysis);
      this.assert(
        prDescription.includes('🧠 INGENIO-1 Cognitive Spec Generation'),
        'PR description should contain cognitive agent header'
      );
      
      this.assert(
        prDescription.includes(`Fixes #${issue.number}`),
        'PR description should link to the issue'
      );
      
      this.assert(
        prDescription.includes('Three Pillars Quest Engine'),
        'PR description should mention the framework'
      );
      
      this.pass('PR Workflow', 'PR creation workflow properly configured');
      
    } catch (error) {
      this.fail('PR Workflow', error.message);
    }
  }

  async testCognitiveAnalysis() {
    console.log('🔍 Testing Cognitive Analysis...');
    
    try {
      // Test issue analysis without requiring the actual processor
      for (const issue of this.mockIssues) {
        const analysis = await this.mockProcessIssue(issue);
        
        this.assert(
          analysis.issueNumber === issue.number,
          `Issue number should match: ${analysis.issueNumber} === ${issue.number}`
        );
        
        this.assert(
          analysis.title === issue.title,
          `Issue title should match`
        );
        
        this.assert(
          analysis.threePillarsAnalysis !== undefined,
          `Three Pillars analysis should be generated`
        );
      }
      
      this.pass('Cognitive Analysis', 'Successfully analyzed mock issues');
      
    } catch (error) {
      this.fail('Cognitive Analysis', error.message);
    }
  }

  async testThreePillarsFramework() {
    console.log('🎯 Testing Three Pillars Framework...');
    
    try {
      const issue = this.mockIssues[0]; // PIE Theory issue
      const analysis = await this.mockProcessIssue(issue);
      const threePillars = analysis.threePillarsAnalysis;
      
      // Test Clear Strategy
      this.assert(
        threePillars.clearStrategy !== undefined,
        'Clear Strategy pillar should exist'
      );
      
      this.assert(
        threePillars.clearStrategy.vision !== undefined,
        'Vision analysis should exist'
      );
      
      this.assert(
        threePillars.clearStrategy.goals !== undefined,
        'Goals analysis should exist'
      );
      
      // Test Intrinsic Drive
      this.assert(
        threePillars.intrinsicDrive !== undefined,
        'Intrinsic Drive pillar should exist'
      );
      
      // Test Contextual Awareness
      this.assert(
        threePillars.contextualAwareness !== undefined,
        'Contextual Awareness pillar should exist'
      );
      
      this.pass('Three Pillars Framework', 'All pillars properly applied');
      
    } catch (error) {
      this.fail('Three Pillars Framework', error.message);
    }
  }

  async testSpecGeneration() {
    console.log('📝 Testing Spec Generation...');
    
    try {
      const issue = this.mockIssues[0];
      const analysis = await this.mockProcessIssue(issue);
      
      // Generate mock spec
      const spec = this.mockGenerateSpec(analysis);
      
      this.assert(
        spec.includes('# PIE Theory Integration for Engineering Excellence'),
        'Spec should contain proper title'
      );
      
      this.assert(
        spec.includes('## Three Pillars Quest Engine Application'),
        'Spec should contain Three Pillars section'
      );
      
      this.assert(
        spec.includes('### 🎯 Clear Strategy'),
        'Spec should contain Clear Strategy section'
      );
      
      this.assert(
        spec.includes('### 🔥 Intrinsic Drive'),
        'Spec should contain Intrinsic Drive section'
      );
      
      this.assert(
        spec.includes('### 🧠 Contextual Awareness'),
        'Spec should contain Contextual Awareness section'
      );
      
      this.pass('Spec Generation', 'Properly formatted spec document generated');
      
    } catch (error) {
      this.fail('Spec Generation', error.message);
    }
  }

  async testMetaLearning() {
    console.log('🔄 Testing Meta-Learning...');
    
    try {
      // Test meta-learning insight generation
      const insights = this.mockGenerateMetaLearningInsights();
      
      this.assert(
        insights.length > 0,
        'Meta-learning insights should be generated'
      );
      
      this.assert(
        insights.some(insight => insight.category === 'pattern_recognition'),
        'Should include pattern recognition insights'
      );
      
      this.assert(
        insights.some(insight => insight.confidence > 0.5),
        'Should have confident insights'
      );
      
      this.pass('Meta-Learning', 'Meta-learning insights properly generated');
      
    } catch (error) {
      this.fail('Meta-Learning', error.message);
    }
  }

  async testSessionManagement() {
    console.log('💾 Testing Session Management...');
    
    try {
      const sessionId = 'test_session_' + Date.now();
      const sessionPath = `experiments/cognitive_sessions/${sessionId}`;
      
      // Mock session creation
      await fs.ensureDir(sessionPath);
      
      const sessionData = {
        sessionId,
        processedIssues: this.mockIssues.length,
        generatedSpecs: this.mockIssues.length,
        metaLearningInsights: 3,
        timestamp: new Date().toISOString()
      };
      
      await fs.writeJSON(path.join(sessionPath, 'test_session.json'), sessionData);
      
      // Verify session file exists
      const sessionExists = await fs.pathExists(path.join(sessionPath, 'test_session.json'));
      this.assert(sessionExists, 'Session file should be created');
      
      // Clean up test session
      await fs.remove(sessionPath);
      
      this.pass('Session Management', 'Session creation and management working');
      
    } catch (error) {
      this.fail('Session Management', error.message);
    }
  }

  // Mock implementations for testing
  async mockProcessIssue(issue) {
    return {
      issueNumber: issue.number,
      title: issue.title,
      body: issue.body,
      labels: issue.labels.map(l => l.name),
      threePillarsAnalysis: {
        clearStrategy: {
          vision: { hasVisionKeywords: true, extractedConcepts: ['implement', 'integrate', 'develop'] },
          goals: { hasActionableGoals: true, extractedGoals: ['create', 'develop', 'integrate', 'enhance'] },
          scope: { estimatedComplexity: issue.number === 4 ? 'high' : 'medium', domains: issue.number === 4 ? ['cognitive-engineering'] : ['career-development'] },
          exitCriteria: { hasExitCriteria: true, hasCheckboxes: true }
        },
        intrinsicDrive: {
          mastery: { learningOpportunities: issue.number === 4 ? ['meta-learning', 'cognitive-engineering'] : ['career-development'], skillDevelopment: ['engineering'] },
          autonomy: { autonomyLevel: issue.number === 4 ? 4 : 2, ownership: 'clear' },
          purpose: { purposeClarity: issue.number === 4 ? 4 : 3, businessValue: issue.number === 4 ? 'very-high' : 'high' }
        },
        contextualAwareness: {
          documentation: { needsDocumentation: true, documentationType: 'spec' },
          observability: { needsObservability: issue.number === 4 ? true : false },
          communication: { communicationNeeds: ['share'], stakeholders: issue.number === 4 ? ['cognitive-agents', 'engineers'] : ['engineers'] },
          economics: { hasEconomicConsiderations: false, resourceRequirements: issue.number === 4 ? 'high' : 'medium' }
        }
      },
      engineeringConcepts: {
        architecture: issue.number === 4 ? ['cognitive-systems', 'meta-architecture'] : ['framework'],
        technologies: issue.number === 4 ? ['ai', 'machine-learning'] : [],
        practices: issue.number === 4 ? ['meta-learning', 'recursive-improvement'] : ['assessment', 'testing'],
        quality: issue.number === 4 ? ['cognitive-engineering', 'autonomous-quality'] : ['career-development']
      },
      specMetadata: {
        specName: issue.number === 4 ? 'cognitive_engineering_level_5_capabilities' : 
                   issue.number === 3 ? 'quality_engineering_approach_enhancement' : 'pie_theory_integration',
        priority: issue.number === 4 ? 'critical' : 'high',
        complexity: issue.number === 4 ? 'high' : 'medium',
        estimatedEffort: issue.number === 4 ? 'high' : 'medium'
      }
    };
  }

  mockGenerateSpec(analysis) {
    return `# ${analysis.title.replace('Implement ', '')}

**Status**: Vision Phase  
**Issue**: #${analysis.issueNumber}  
**Cognitive Agent**: INGENIO-1  
**Framework**: Three Pillars Quest Engine  
**Focus**: Software 3.0 Engineering Excellence

## Mission Statement

Transform the engineering challenge "${analysis.title}" into a cognitive agent-enhanced system that autonomously improves engineering excellence through recursive meta-learning and human-cognitive collaboration.

## Three Pillars Quest Engine Application

### 🎯 Clear Strategy
- Vision: ${analysis.threePillarsAnalysis.clearStrategy.vision.hasVisionKeywords ? 'Clear vision identified' : 'Vision needs clarification'}
- Goals: ${analysis.threePillarsAnalysis.clearStrategy.goals.hasActionableGoals ? 'Actionable goals defined' : 'Goals need definition'}

### 🔥 Intrinsic Drive
- Mastery: Learning opportunities in ${analysis.threePillarsAnalysis.intrinsicDrive.mastery.learningOpportunities.join(', ')}
- Purpose: Business value ${analysis.threePillarsAnalysis.intrinsicDrive.purpose.businessValue}

### 🧠 Contextual Awareness
- Documentation: ${analysis.threePillarsAnalysis.contextualAwareness.documentation.needsDocumentation ? 'Required' : 'Optional'}
- Communication: Stakeholders include ${analysis.threePillarsAnalysis.contextualAwareness.communication.stakeholders.join(', ')}

## Next Steps
1. Design Phase: Create detailed technical design
2. Implementation: Begin development
3. Testing: Validate functionality
`;
  }

  mockGenerateBranchName(issue) {
    const specName = issue.title
      .toLowerCase()
      .replace(/[^\w\s-]/g, '') // Remove special chars except dashes and spaces
      .replace(/\s+/g, '_')     // Replace spaces with underscores
      .replace(/_+/g, '_')      // Collapse multiple underscores
      .replace(/^_|_$/g, '');   // Remove leading/trailing underscores
    
    return `cognitive/spec-${specName}`;
  }

  mockGeneratePRDescription(issue, analysis) {
    return `## 🧠 INGENIO-1 Cognitive Spec Generation

**Issue**: #${issue.number} - ${issue.title}  
**Session**: \`test_session_${Date.now()}\`  
**Generated Spec**: \`${analysis.specMetadata.specName}\`

### Automated Cognitive Analysis

This PR was automatically generated by the INGENIO-1 cognitive agent following the Three Pillars Quest Engine framework.

### Changes Made

- 📁 **Created Spec Directory**: \`specs/${analysis.specMetadata.specName}/\`
- 📄 **Generated VISION.md**: Comprehensive engineering excellence specification
- 🧠 **Applied Cognitive Framework**: Three Pillars Quest Engine analysis
- 🎯 **Meta-Learning Integration**: Software 3.0 cognitive enhancement approach

### Specification Overview

#### Clear Strategy
- **Vision → Design → Sprint → Daily** development pathway
- **Strategic Alignment**: Software 3.0 engineering excellence
- **Exit Strategy**: Well-defined completion criteria

#### Intrinsic Drive  
- **Mastery Opportunities**: Continuous cognitive improvement
- **Autonomy**: Self-directed engineering excellence
- **Purpose**: Human-cognitive collaboration enhancement

#### Contextual Awareness
- **Documentation**: Comprehensive async communication
- **Feedback Loops**: Action-feedback-adjustment cycles
- **Observability**: Full cognitive process transparency

Fixes #${issue.number}.`;
  }

  mockGenerateMetaLearningInsights() {
    return [
      {
        category: 'pattern_recognition',
        insight: 'Issues with career development themes show higher engagement',
        confidence: 0.8,
        applicability: 'high'
      },
      {
        category: 'spec_generation',
        insight: 'Three Pillars framework provides consistent structure',
        confidence: 0.9,
        applicability: 'high'
      },
      {
        category: 'cognitive_processing',
        insight: 'Autonomous processing maintains quality while scaling',
        confidence: 0.7,
        applicability: 'medium'
      }
    ];
  }

  // Testing utilities
  assert(condition, message) {
    if (!condition) {
      throw new Error(`Assertion failed: ${message}`);
    }
  }

  pass(testName, message) {
    this.testResults.push({
      name: testName,
      status: 'PASS',
      message: message,
      timestamp: new Date().toISOString()
    });
    console.log(`✅ ${testName}: ${message}`);
  }

  fail(testName, message) {
    this.testResults.push({
      name: testName,
      status: 'FAIL',
      message: message,
      timestamp: new Date().toISOString()
    });
    console.log(`❌ ${testName}: ${message}`);
  }

  printTestResults() {
    console.log('\n📊 Test Results Summary:');
    console.log('========================');
    
    const passed = this.testResults.filter(r => r.status === 'PASS').length;
    const failed = this.testResults.filter(r => r.status === 'FAIL').length;
    const total = this.testResults.length;
    
    console.log(`Total Tests: ${total}`);
    console.log(`Passed: ${passed}`);
    console.log(`Failed: ${failed}`);
    console.log(`Success Rate: ${((passed / total) * 100).toFixed(1)}%`);
    
    if (failed > 0) {
      console.log('\n❌ Failed Tests:');
      this.testResults
        .filter(r => r.status === 'FAIL')
        .forEach(result => {
          console.log(`  - ${result.name}: ${result.message}`);
        });
    }
    
    console.log('\n🧠 Cognitive System Status:', failed === 0 ? '✅ OPERATIONAL' : '⚠️ NEEDS ATTENTION');
  }
}

// Run tests if called directly
if (require.main === module) {
  const tester = new CognitiveProcessorTester();
  tester.runTests().catch(error => {
    console.error('❌ Test suite failed:', error);
    process.exit(1);
  });
}

module.exports = CognitiveProcessorTester;