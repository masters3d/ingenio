# Cognitive Issue Processor Workflow

## Overview

The Cognitive Issue Processor is a GitHub Actions workflow that automatically processes issues labeled with "ingenio-1" (case insensitive) and creates comprehensive engineering specifications following the Three Pillars Quest Engine framework.

## How It Works

### Triggers

The workflow can be triggered in three ways:

1. **Issue Events** (Primary):
   - When an issue is `opened`
   - When an issue is `edited`
   - When an issue is `labeled`

2. **Schedule** (Backup):
   - Runs every hour: `0 * * * *` (at the top of each hour)
   - Processes any open issues with the "ingenio-1" label that haven't been processed yet

3. **Manual Trigger** (Testing/Force):
   - Go to Actions tab → Cognitive Issue Processor → Run workflow
   - Optional: Set `force_all` to `true` to regenerate all specs

### What It Does

For each issue labeled with "ingenio-1" (case insensitive):

1. **Analyzes the issue** using cognitive patterns
2. **Generates a comprehensive spec** following Three Pillars Quest Engine
3. **Creates a dedicated branch** for the specification
4. **Commits the spec** to the branch
5. **Creates a Pull Request** for human review
6. **Posts updates** to the issue with links to the PR

### Required Labels

The issue MUST have one of these labels (case insensitive):
- `ingenio-1`
- `Ingenio-1`
- `INGENIO-1`

Without this label, the workflow will skip the issue.

## Workflow Configuration

### Dependencies

The workflow uses the existing `package.json` which includes:
- `@octokit/rest` - GitHub API client
- `yaml` - YAML parsing
- `fs-extra` - File system operations

### Permissions

The workflow requires these permissions:
- `contents: write` - To create branches and commits
- `issues: write` - To post comments on issues
- `pull-requests: write` - To create pull requests

### Environment Variables

- `GITHUB_TOKEN` - Automatically provided by GitHub Actions
- `REPO_OWNER` - Repository owner
- `REPO_NAME` - Repository name
- `TRIGGERED_BY` - Event that triggered the workflow
- `ISSUE_NUMBER` - Issue number (for issue events)
- `FORCE_ALL` - Force regeneration of all specs (for manual triggers)

## Troubleshooting

### Issue events not triggering the workflow

**Possible causes:**

1. **Workflow not on default branch**
   - The workflow file MUST be on the default branch (main) for issue events to trigger it
   - Solution: Ensure `.github/workflows/cognitive-issue-processor.yml` exists on main

2. **Repository Actions settings**
   - Check Settings → Actions → General
   - Ensure "Allow all actions and reusable workflows" is enabled
   - Ensure workflow permissions are set correctly

3. **Issue doesn't have the required label**
   - The issue must be labeled with "ingenio-1" (case insensitive)
   - Solution: Add the label to the issue

4. **Workflow was added after the issue was created**
   - GitHub Actions only triggers on events that occur AFTER the workflow is added
   - Solution: Edit or re-label the issue to trigger the workflow

### Testing the Workflow

To test if the workflow is working:

1. **Create a test issue**:
   ```
   Title: Test cognitive processing
   Label: ingenio-1
   ```

2. **Watch the Actions tab**:
   - The workflow should appear within a few seconds
   - If it doesn't, try the schedule trigger (wait up to 1 hour)

3. **Manual trigger** (for immediate testing):
   - Go to Actions → Cognitive Issue Processor → Run workflow
   - Select branch: main
   - Click "Run workflow"

### Common Issues

**"No issues with 'ingenio-1' label to process"**
- This is normal when no issues have the label
- Add the label to an issue to process it

**"Spec already exists, not creating redundant PR"**
- The spec was already generated for this issue
- A comment will be posted to the issue with instructions
- The issue can be closed

**Package.json overwritten**
- Fixed in latest version - now uses existing package.json
- The workflow runs `npm install` instead of `npm init -y`

## Architecture

```
Issue (with ingenio-1 label)
  ↓
Workflow Triggered
  ↓
Cognitive Analysis
  ↓
Spec Generation (VISION.md)
  ↓
Branch Creation (cognitive/spec-{name})
  ↓
Commit & Push
  ↓
Pull Request Creation
  ↓
Issue Comment with PR Link
```

## Output

Each processed issue generates:

1. **Spec Directory**: `specs/{spec-name}/`
2. **Vision Document**: `specs/{spec-name}/VISION.md`
3. **Git Branch**: `cognitive/spec-{spec-name}`
4. **Pull Request**: For human review before merging
5. **Cognitive Session**: `experiments/cognitive_sessions/{session-id}/`
6. **Issue Comments**: Updates on processing status

## Maintenance

### Updating Dependencies

Dependencies are managed in `package.json`. To update:

1. Modify `package.json`
2. Test locally: `npm install && node .github/scripts/test-cognitive-processor.js`
3. Commit and push changes

### Modifying the Cognitive Processor

The main logic is in `.github/scripts/cognitive-processor.js`:
- `fetchOpenIssues()` - Fetches and filters issues
- `cognitiveAnalysis()` - Analyzes issues using cognitive patterns
- `generateVisionSpec()` - Creates the spec document
- `createPullRequest()` - Creates PRs for specs

### Testing Changes

Run the test suite:
```bash
npm install
node .github/scripts/test-cognitive-processor.js
```

Expected output: `7/7 tests passing`

## References

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [AGENTS.md](../../AGENTS.md) - Agent instructions and context
- [Cognitive Config](../cognitive-config.yml) - Configuration file
- [Three Pillars Quest Engine](../../README.md) - Framework documentation
