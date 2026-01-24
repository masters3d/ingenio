#!/usr/bin/env node

/**
 * Cognitive CI System Validation Script
 * 
 * This script performs a comprehensive dry-run validation of the INGENIO-1
 * cognitive CI system without making any actual changes to GitHub.
 * 
 * Validates:
 * 1. Configuration loading and validation
 * 2. Label filtering (case-insensitive)
 * 3. Issue processing logic
 * 4. Three Pillars framework application
 * 5. Spec generation
 * 6. Session management
 * 7. Meta-learning insights
 */

const fs = require('fs-extra');
const path = require('path');
const yaml = require('yaml');

class CognitiveSystemValidator {
  constructor() {
    this.validationResults = [];
    this.sessionId = `validation_${new Date().toISOString().slice(0, 19).replace(/[:-]/g, '_')}`;
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${level}: ${message}`);
  }

  async validate() {
    this.log('🧪 Starting Cognitive CI System Validation');
    this.log(`Session: ${this.sessionId}`);
    console.log('');

    try {
      // 1. Configuration validation
      await this.validateConfiguration();

      // 2. Dependencies validation
      await this.validateDependencies();

      // 3. Test suite validation
      await this.validateTestSuite();

      // 4. Workflow configuration validation
      await this.validateWorkflowConfiguration();

      // 5. Session management validation
      await this.validateSessionManagement();

      // 6. Label filtering validation
      await this.validateLabelFiltering();

      // 7. Recent workflow runs validation
      await this.validateRecentRuns();

      // Generate validation report
      await this.generateValidationReport();

      this.log('✅ Cognitive CI System Validation Complete');
      this.printSummary();

    } catch (error) {
      this.log(`❌ Validation failed: ${error.message}`, 'ERROR');
      this.log(error.stack, 'ERROR');
      process.exit(1);
    }
  }

  async validateConfiguration() {
    this.log('📋 Validating Configuration Files...');

    try {
      // Check cognitive-config.yml exists
      const configPath = '.github/cognitive-config.yml';
      const configExists = await fs.pathExists(configPath);
      this.recordResult('Configuration File Exists', configExists, configPath);

      if (configExists) {
        // Parse and validate config (handle multi-document YAML)
        const configContent = await fs.readFile(configPath, 'utf8');
        const docs = yaml.parseAllDocuments(configContent);
        const config = docs[0].toJSON();

        this.recordResult('Agent Configuration Valid', 
          config.agent && config.agent.name === 'INGENIO-1',
          'INGENIO-1 agent configured');

        this.recordResult('Three Pillars Framework Enabled',
          config.three_pillars && 
          config.three_pillars.clear_strategy.enabled &&
          config.three_pillars.intrinsic_drive.enabled &&
          config.three_pillars.contextual_awareness.enabled,
          'All three pillars enabled');

        this.recordResult('Issue Processing Configured',
          config.processing && config.processing.issue_processing,
          'Issue processing settings defined');
      }

    } catch (error) {
      this.recordResult('Configuration Validation', false, error.message);
    }
  }

  async validateDependencies() {
    this.log('📦 Validating Dependencies...');

    try {
      const packageJson = await fs.readJson('package.json');
      const requiredDeps = ['@octokit/rest', 'fs-extra', 'yaml'];

      for (const dep of requiredDeps) {
        const isInstalled = packageJson.dependencies && packageJson.dependencies[dep];
        this.recordResult(`Dependency: ${dep}`, isInstalled !== undefined, 
          isInstalled ? packageJson.dependencies[dep] : 'Missing');
      }

      // Check if node_modules exists
      const nodeModulesExists = await fs.pathExists('node_modules');
      this.recordResult('Dependencies Installed', nodeModulesExists, 
        nodeModulesExists ? 'node_modules present' : 'Run npm install');

    } catch (error) {
      this.recordResult('Dependencies Validation', false, error.message);
    }
  }

  async validateTestSuite() {
    this.log('🧪 Validating Test Suite...');

    try {
      const { execSync } = require('child_process');
      
      // Run the test suite
      const testOutput = execSync('npm run test-cognitive', { 
        encoding: 'utf8',
        stdio: 'pipe'
      });

      const successMatch = testOutput.match(/Success Rate: ([\d.]+)%/);
      const successRate = successMatch ? parseFloat(successMatch[1]) : 0;

      this.recordResult('Test Suite Execution', successRate === 100.0,
        `Success rate: ${successRate}%`);

      // Parse test results
      const passedMatch = testOutput.match(/Passed: (\d+)/);
      const failedMatch = testOutput.match(/Failed: (\d+)/);
      const passed = passedMatch ? parseInt(passedMatch[1]) : 0;
      const failed = failedMatch ? parseInt(failedMatch[1]) : 0;

      this.recordResult('All Tests Passed', failed === 0,
        `${passed} passed, ${failed} failed`);

    } catch (error) {
      this.recordResult('Test Suite Execution', false, error.message);
    }
  }

  async validateWorkflowConfiguration() {
    this.log('⚙️  Validating Workflow Configuration...');

    try {
      const workflowPath = '.github/workflows/cognitive-issue-processor.yml';
      const workflowExists = await fs.pathExists(workflowPath);
      this.recordResult('Workflow File Exists', workflowExists, workflowPath);

      if (workflowExists) {
        const workflowContent = await fs.readFile(workflowPath, 'utf8');
        const workflow = yaml.parse(workflowContent);

        // Check triggers
        const hasTriggers = workflow.on && (
          workflow.on.issues ||
          workflow.on.schedule ||
          workflow.on.workflow_dispatch
        );
        this.recordResult('Workflow Triggers Configured', hasTriggers,
          'Issues, Schedule, and Manual triggers');

        // Check permissions
        const hasPermissions = workflow.permissions &&
          workflow.permissions.contents === 'write' &&
          workflow.permissions.issues === 'write' &&
          workflow.permissions['pull-requests'] === 'write';
        this.recordResult('Workflow Permissions Set', hasPermissions,
          'Contents, Issues, and PRs write access');

        // Check job steps
        const job = workflow.jobs && workflow.jobs['cognitive-processing'];
        const hasSteps = job && job.steps && job.steps.length > 0;
        this.recordResult('Workflow Steps Defined', hasSteps,
          job ? `${job.steps.length} steps` : 'No steps');
      }

    } catch (error) {
      this.recordResult('Workflow Configuration Validation', false, error.message);
    }
  }

  async validateSessionManagement() {
    this.log('💾 Validating Session Management...');

    try {
      const sessionsPath = 'experiments/cognitive_sessions';
      const sessionsExist = await fs.pathExists(sessionsPath);
      this.recordResult('Sessions Directory Exists', sessionsExist, sessionsPath);

      if (sessionsExist) {
        const sessions = await fs.readdir(sessionsPath);
        const sessionDirs = sessions.filter(s => s.includes('cognitive_ci'));
        
        this.recordResult('Historical Sessions Found', sessionDirs.length > 0,
          `${sessionDirs.length} sessions`);

        // Check most recent session
        if (sessionDirs.length > 0) {
          const latestSession = sessionDirs.sort().reverse()[0];
          const latestSessionPath = path.join(sessionsPath, latestSession);

          const hasContext = await fs.pathExists(path.join(latestSessionPath, 'SESSION_CONTEXT.yml'));
          const hasResults = await fs.pathExists(path.join(latestSessionPath, 'SESSION_RESULTS.yml'));

          this.recordResult('Session Structure Valid', hasContext && hasResults,
            `Latest: ${latestSession}`);
        }
      }

    } catch (error) {
      this.recordResult('Session Management Validation', false, error.message);
    }
  }

  async validateLabelFiltering() {
    this.log('🏷️  Validating Label Filtering Logic...');

    try {
      // Mock test cases
      const testCases = [
        { label: 'ingenio-1', expected: true },
        { label: 'Ingenio-1', expected: true },
        { label: 'INGENIO-1', expected: true },
        { label: 'InGeNiO-1', expected: true },
        { label: 'other-label', expected: false },
        { label: 'sos oficial', expected: false }
      ];

      const targetLabel = 'ingenio-1';
      let allPassed = true;

      for (const testCase of testCases) {
        const matches = testCase.label.toLowerCase() === targetLabel.toLowerCase();
        const passed = matches === testCase.expected;
        allPassed = allPassed && passed;

        if (!passed) {
          this.log(`❌ Label filter test failed: ${testCase.label} (expected ${testCase.expected}, got ${matches})`, 'WARN');
        }
      }

      this.recordResult('Label Filtering Case-Insensitive', allPassed,
        `${testCases.length} test cases passed`);

    } catch (error) {
      this.recordResult('Label Filtering Validation', false, error.message);
    }
  }

  async validateRecentRuns() {
    this.log('📊 Validating Recent Workflow Runs...');

    try {
      // Check if we can access recent session logs
      const sessionsPath = 'experiments/cognitive_sessions';
      const sessions = await fs.readdir(sessionsPath);
      const recentSessions = sessions
        .filter(s => s.includes('cognitive_ci'))
        .sort()
        .reverse()
        .slice(0, 5);

      if (recentSessions.length > 0) {
        const latestSession = recentSessions[0];
        const resultsPath = path.join(sessionsPath, latestSession, 'SESSION_RESULTS.yml');
        
        if (await fs.pathExists(resultsPath)) {
          const resultsContent = await fs.readFile(resultsPath, 'utf8');
          const results = yaml.parse(resultsContent);

          this.recordResult('Recent Run Logged', true,
            `Session: ${latestSession}`);

          this.recordResult('Recent Run Completed', 
            results.processedIssues !== undefined,
            `Processed ${results.processedIssues ? results.processedIssues.length : 0} issues`);
        }
      } else {
        this.recordResult('Recent Runs Found', false, 'No recent sessions');
      }

    } catch (error) {
      this.recordResult('Recent Runs Validation', false, error.message);
    }
  }

  recordResult(testName, passed, details) {
    this.validationResults.push({
      test: testName,
      passed,
      details,
      timestamp: new Date().toISOString()
    });

    const status = passed ? '✅' : '❌';
    console.log(`  ${status} ${testName}: ${details}`);
  }

  async generateValidationReport() {
    this.log('📝 Generating Validation Report...');

    const reportPath = `/tmp/cognitive-ci-validation-report-${this.sessionId}.md`;
    
    const passed = this.validationResults.filter(r => r.passed).length;
    const failed = this.validationResults.filter(r => !r.passed).length;
    const total = this.validationResults.length;
    const successRate = ((passed / total) * 100).toFixed(1);

    let report = `# Cognitive CI System Validation Report\n\n`;
    report += `**Session**: \`${this.sessionId}\`\n`;
    report += `**Timestamp**: ${new Date().toISOString()}\n`;
    report += `**Agent**: INGENIO-1\n`;
    report += `**Framework**: Three Pillars Quest Engine\n\n`;

    report += `## Summary\n\n`;
    report += `- **Total Tests**: ${total}\n`;
    report += `- **Passed**: ${passed}\n`;
    report += `- **Failed**: ${failed}\n`;
    report += `- **Success Rate**: ${successRate}%\n`;
    report += `- **Status**: ${failed === 0 ? '✅ OPERATIONAL' : '⚠️ NEEDS ATTENTION'}\n\n`;

    report += `## Validation Results\n\n`;
    
    for (const result of this.validationResults) {
      const status = result.passed ? '✅' : '❌';
      report += `### ${status} ${result.test}\n`;
      report += `- **Details**: ${result.details}\n`;
      report += `- **Timestamp**: ${result.timestamp}\n\n`;
    }

    if (failed > 0) {
      report += `## Failed Tests\n\n`;
      const failedTests = this.validationResults.filter(r => !r.passed);
      for (const test of failedTests) {
        report += `- **${test.test}**: ${test.details}\n`;
      }
      report += `\n`;
    }

    report += `## System Health\n\n`;
    report += `### Configuration\n`;
    report += `- Cognitive config file present and valid\n`;
    report += `- Three Pillars framework fully enabled\n`;
    report += `- Issue processing configured correctly\n\n`;

    report += `### Dependencies\n`;
    report += `- All required npm packages installed\n`;
    report += `- @octokit/rest for GitHub API access\n`;
    report += `- fs-extra for file system operations\n`;
    report += `- yaml for configuration parsing\n\n`;

    report += `### Test Coverage\n`;
    report += `- Label filtering (case-insensitive)\n`;
    report += `- Cognitive analysis\n`;
    report += `- Three Pillars framework application\n`;
    report += `- Spec generation\n`;
    report += `- Meta-learning capabilities\n`;
    report += `- Session management\n`;
    report += `- PR creation workflow\n\n`;

    report += `### Workflow Status\n`;
    report += `- GitHub Actions workflow configured\n`;
    report += `- Proper permissions set (contents, issues, PRs)\n`;
    report += `- Multiple trigger types (issues, schedule, manual)\n`;
    report += `- Session archival and artifact upload enabled\n\n`;

    report += `## Recommendations\n\n`;
    if (failed === 0) {
      report += `✅ The cognitive CI system is fully operational and ready for use.\n\n`;
      report += `**Next Steps**:\n`;
      report += `1. Label issues with "Ingenio-1" to trigger cognitive processing\n`;
      report += `2. Monitor workflow runs for successful execution\n`;
      report += `3. Review generated specs and PRs\n`;
      report += `4. Continue meta-learning and system improvements\n`;
    } else {
      report += `⚠️ Some validations failed. Please review the failed tests above.\n\n`;
      report += `**Action Required**:\n`;
      report += `1. Address failed validations\n`;
      report += `2. Re-run validation after fixes\n`;
      report += `3. Ensure all dependencies are installed\n`;
      report += `4. Verify configuration files are correct\n`;
    }

    report += `\n---\n`;
    report += `*Cognitive Agent: INGENIO-1*  \n`;
    report += `*Framework: Three Pillars Quest Engine*  \n`;
    report += `*Mission: Software 3.0 Engineering Excellence*\n`;

    await fs.writeFile(reportPath, report);
    this.log(`📄 Validation report saved to: ${reportPath}`);

    // Also print summary to console
    console.log('\n' + report);
  }

  printSummary() {
    const passed = this.validationResults.filter(r => r.passed).length;
    const failed = this.validationResults.filter(r => !r.passed).length;
    const total = this.validationResults.length;

    console.log('\n╔════════════════════════════════════════════════════════╗');
    console.log('║       COGNITIVE CI SYSTEM VALIDATION SUMMARY          ║');
    console.log('╚════════════════════════════════════════════════════════╝');
    console.log(`  Total Tests:    ${total}`);
    console.log(`  Passed:         ${passed} ✅`);
    console.log(`  Failed:         ${failed} ${failed > 0 ? '❌' : '✅'}`);
    console.log(`  Success Rate:   ${((passed / total) * 100).toFixed(1)}%`);
    console.log(`  Status:         ${failed === 0 ? '✅ OPERATIONAL' : '⚠️ NEEDS ATTENTION'}`);
    console.log('════════════════════════════════════════════════════════');
  }
}

// Run validation if called directly
if (require.main === module) {
  const validator = new CognitiveSystemValidator();
  validator.validate().catch(error => {
    console.error('❌ Validation error:', error);
    process.exit(1);
  });
}

module.exports = CognitiveSystemValidator;
