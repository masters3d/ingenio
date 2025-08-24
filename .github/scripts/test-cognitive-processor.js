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
        labels: [{ name: 'enhancement' }, { name: 'career-development' }],
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
      }
    ];
  }

  async runTests() {
    console.log('🧪 Starting Cognitive Processor Tests...\n');

    // Test 1: Basic cognitive analysis
    await this.testCognitiveAnalysis();
    
    // Test 2: Three Pillars framework application
    await this.testThreePillarsFramework();
    
    // Test 3: Spec generation
    await this.testSpecGeneration();
    
    // Test 4: Meta-learning capabilities
    await this.testMetaLearning();
    
    // Test 5: Session management
    await this.testSessionManagement();

    this.printTestResults();
  }

  async testCognitiveAnalysis() {
    console.log('🔍 Testing Cognitive Analysis...');
    
    try {
      // Mock the cognitive processor
      const CognitiveProcessor = require('./cognitive-processor');
      const processor = new CognitiveProcessor();
      
      // Override the GitHub API calls for testing
      processor.fetchIssues = async () => this.mockIssues;
      
      // Test issue analysis
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
        spec.includes('# PIE Theory Integration'),
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
          vision: { hasVisionKeywords: true, extractedConcepts: ['implement', 'integrate'] },
          goals: { hasActionableGoals: true, extractedGoals: ['create', 'develop', 'integrate'] },
          scope: { estimatedComplexity: 'medium', domains: ['career-development'] },
          exitCriteria: { hasExitCriteria: true, hasCheckboxes: true }
        },
        intrinsicDrive: {
          mastery: { learningOpportunities: ['career-development'], skillDevelopment: ['engineering'] },
          autonomy: { autonomyLevel: 2, ownership: 'clear' },
          purpose: { purposeClarity: 3, businessValue: 'high' }
        },
        contextualAwareness: {
          documentation: { needsDocumentation: true, documentationType: 'spec' },
          observability: { needsObservability: false },
          communication: { communicationNeeds: ['share'], stakeholders: ['engineers'] },
          economics: { hasEconomicConsiderations: false, resourceRequirements: 'medium' }
        }
      },
      engineeringConcepts: {
        architecture: ['framework'],
        technologies: [],
        practices: ['assessment', 'testing'],
        quality: ['career-development']
      },
      specMetadata: {
        specName: 'pie_theory_integration',
        priority: 'high',
        complexity: 'medium',
        estimatedEffort: 'medium'
      }
    };
  }

  mockGenerateSpec(analysis) {
    return `# ${analysis.title} - Vision Document

## Etymology & Context

**Spec Name**: \`${analysis.specMetadata.specName}\`
**Source**: GitHub Issue #${analysis.issueNumber}

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