# AI assistant configuration

This file contains configuration and guidelines for AI assistants working on `josh-wong.github.io`.

## Important notes

**GIT SAFETY:** Never force push to any branch. Use `git push` without `--force` or `--force-with-lease`. Use `git revert` to undo published work.

## Documentation references

Use the repository itself as the source of truth for site behavior and content organization.

- **Repository summary:** See `README.md`.
- **Site configuration:** See `docusaurus.config.js` and `sidebars.js`.
- **Writing rules:** See `.vale.ini` and the styles under `styles/`.

## Repository description

`josh-wong.github.io` is Josh Wong's personal website, blog, and project-documentation hub at `www.080f53.com`. It is a statically generated Docusaurus site intended for readers in English and Japanese.

### Key components

Long-form project documentation lives in `docs/`, blog posts live in `blog/`, and standalone pages live in `src/pages/`. React components and swizzled Docusaurus theme components live in `src/components/` and `src/theme/`. Global styling is in `src/css/custom.css`; navigation, integrations, locales, and plugins are configured in `docusaurus.config.js`; GitHub Pages deployment is handled by `.github/workflows/deploy.yml`.

### Architecture patterns

Treat source Markdown, MDX, React components, and Docusaurus configuration as authoritative. Never edit generated `build/` or `.docusaurus/` output. Keep routes, document IDs, sidebar entries, redirects, and internal links synchronized when moving or renaming content. Preserve Docusaurus server-side rendering: browser-only APIs must be guarded or used inside client-side lifecycle code.

The site is configured for `en-us` and `ja-jp`. Keep locale settings and translated content aligned, and do not silently replace Japanese content with English. Preserve accessible navigation, semantic headings, useful alternative text, keyboard operation, readable contrast, and responsive layouts.

## Development workflow

Follow these guidelines to maintain site quality and consistency.

### Build and validation commands

Use Node.js 18 or newer, matching `package.json` and CI.

- **Install:** `npm ci`
- **Local development:** `npm start`
- **Production build:** `npm run build`
- **Serve a production build:** `npm run serve`
- **Prose lint:** `vale <changed Markdown or MDX files>`

There is no automated unit-test suite or configured JavaScript linter. Use the production build as the required structural validation, then manually inspect affected routes and interactive behavior. Do not claim tests or lint checks that the repository does not provide.

### Issue creation guidelines

When creating a GitHub issue, provide a clear description, requirements, expected outcome, technical details, reproduction steps for defects, affected routes or locales, environment details, and relevant screenshots or logs. Never omit a section; write `N/A` when one does not apply.

Every issue must include a **Model** and **Review effort** annotation in the format described in [Model and effort selection](#model-and-effort-selection).

### Model and effort selection

Every issue records a recommended **Model** and **Review effort** at creation time, using this format:

- `Model: Sonnet | Review effort: medium`
- `Model: Opus | Review effort: high`

Choose **Opus** with **high** effort for changes to privacy disclosures, consent and analytics behavior, credential handling, deployment security, or broad routing and localization architecture. Choose **Sonnet** with **low** or **medium** effort for scoped content, styling, component, and dependency work. Prefer the higher tier when privacy or security consequences are uncertain.

Before starting work on an issue, check its recommended model and effort level.

### Commit practices

- Write clear, descriptive commit messages that start with an uppercase verb, such as `Add project support page` or `Fix mobile navigation spacing`.
- Do not use Conventional Commits format. Verb-first is the only style used in this repository.
- Reference issue numbers when commits relate to a specific issue.
- Avoid auto-committing large or non-trivial changes; give the reviewer an opportunity to inspect changes first.
- When an AI agent authors or co-authors a commit, include `Co-Authored-By: [Agent Name] ([Model]) <[attribution email]>` using the official attribution identity when available.

### Branch management

- Create feature branches from `main` using `feature/description` or `fix/description`.
- Keep branches focused on a single feature or bug fix.

### Pull request creation guidelines

When creating a pull request, read and follow `.github/pull_request_template.md` exactly. Include every section in its original order and retain every checklist item.

Check an item with `[x]` when completed. If an item does not apply, leave it unchecked and append `N/A – [brief reason]`. Never omit checklist items.

Use a verb-first PR title, such as `Add project support page` or `Fix mobile navigation spacing`.

## Code and content standards

Follow the existing JavaScript, TypeScript, React, CSS, Markdown, and MDX conventions in nearby files. Use two-space indentation in JavaScript and configuration files. Keep React components focused, avoid unnecessary theme swizzling, and prefer Docusaurus APIs and aliases already used by the project.

Follow the [Microsoft Writing Style Guide](https://learn.microsoft.com/en-us/style-guide/welcome/) for documentation, UI text, issue content, and pull request content. Apply `.vale.ini` rules to prose when Vale is available.

### Structure and spacing

Add an empty line after headings and before lists. Never stack headings; include explanatory text between them. Sections must not contain only an admonition, code block, image, table, or tab. End every text file with a newline.

### Headings and capitalization

Use sentence-style capitalization for headings and bold labels. Do not end headings with colons. Do not use `Introduction` or `Overview` headings.

### Lists and formatting

Avoid excessive lists. For bulleted labels with colons, place the colon inside the bold text, as in `**Item:**`. Align Markdown table rows for readability in source form.

## Privacy and security considerations

The site's cookie policy and any project privacy pages are public commitments. Keep their statements consistent with actual behavior. Changes to Google Tag Manager, Google Analytics, Microsoft Clarity, Algolia insights, cookies, local storage, embeds, or other third-party requests require a privacy review and corresponding disclosure updates.

Preserve meaningful consent behavior in `src/theme/Root.js`; do not add tracking or storage that bypasses the user's choice. Never place secrets or private API tokens in source, MDX, client-side bundles, Docusaurus configuration, or committed workflow files. Public browser keys must be explicitly documented as safe to expose. Store private credentials in repository secrets or environment variables and keep them out of AI context.
