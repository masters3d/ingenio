# ingenio

This is repo is for notes dedicated to the career of software engineering. The word Ingenio means sugar cane mill in Latin American Spanish. https://en.wikipedia.org/wiki/Engenho

Unless stated clearly in the text. All the thoughts in these documents are *opinions* of its author. Please think of them as personal notes in a public repo.

## 🤖 GitHub Actions & Automation

This repository is equipped with GitHub Actions workflows for automated CI/CD and GitHub agent integration:

### CI/CD Pipeline (`ci.yml`)

Automatically runs on every push and pull request to the main branch:

- **Markdown Validation**: Lints all markdown files using markdownlint
- **Link Checking**: Validates all links in documentation
- **PowerShell Script Analysis**: Uses PSScriptAnalyzer to validate PowerShell scripts
- **Presentation Validation**: Checks Marp presentations and pandoc compatibility
- **Repository Structure Verification**: Ensures required files and directories exist

### GitHub Agent Integration (`github-agent.yml`)

Enables advanced repository automation and monitoring:

- **Health Monitoring**: Regular health checks of repository and GitHub API access
- **Content Analysis**: Automated quality analysis of documentation and presentations
- **Presentation Automation**: Validation and automation support for presentation workflows
- **Scheduled Maintenance**: Daily automated checks and reporting

#### Agent Usage

You can manually trigger the GitHub agent with different tasks:

```bash
# Trigger via GitHub CLI
gh workflow run "GitHub Agent Integration" -f agent_task=content_analysis

# Or use the GitHub web interface:
# Actions → GitHub Agent Integration → Run workflow
```

Available agent tasks:
- `status_check`: Basic health and status verification
- `content_analysis`: Deep analysis of markdown content and links
- `presentation_render`: Presentation automation and validation
- `full_analysis`: Complete repository analysis

### Presentation Automation

The repository includes PowerShell scripts for presentation generation:

- `presentation/render.ps1`: Converts markdown to PowerPoint using pandoc
- `presentation/doc2md.ps1`: Converts Word documents to markdown

These scripts work with:
- **Marp**: Modern presentation framework using markdown
- **Pandoc**: Universal document converter for PowerPoint generation

#### Running Presentations Locally

```powershell
cd presentation
.\render.ps1                    # Convert all presentations
.\render.ps1 -single "filename" # Convert specific presentation
```

### Configuration Files

- `.markdownlint.json`: Markdown linting rules
- `.markdown-link-check.json`: Link checking configuration
- Workflows automatically install and configure required tools

The GitHub Actions provide a foundation for automated content validation, presentation generation, and repository maintenance, making this knowledge repository more reliable and maintainable. 