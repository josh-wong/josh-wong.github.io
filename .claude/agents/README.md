# Custom agents for josh-wong.github.io

This directory contains project-specific Claude Code subagents for the Docusaurus site.

## Available agents

- **builder:** Installs dependencies and validates production Docusaurus builds.
- **debugger:** Diagnoses build, route, rendering, hydration, and browser-interaction problems.
- **github-issue-creator:** Creates issues using the repository template and model-review annotation.
- **lint-checker:** Runs Vale on changed prose and reports source-level writing problems.
- **performance-profiler:** Reviews page weight, media, rendering, and Core Web Vitals.
- **pr-creator:** Creates pull requests that reproduce the repository template exactly.
- **privacy-auditor:** Reviews consent, analytics, cookies, storage, embeds, and public disclosures.
- **test-runner:** Runs the production build and coordinates route, locale, accessibility, and responsive checks.

Invoke an agent by name, such as "Use builder to validate the site" or "Use privacy-auditor to review this analytics change." Agents must follow `AGENTS.md` and the repository's actual scripts and configuration.
