# Materials portfolio Code Generation plan

Status: all implementation steps and review amendments approved; formal Build and Test complete.

This document is the single source of truth for Code Generation for the `materials-portfolio` unit. Modify existing files in place, create only the specified new responsibilities, and immediately mark each completed step and story checkbox. Application code belongs under `/Users/nhamhhung/tomdangcappp24.github.io`, never inside aidlc-docs.

## Unit context

One brownfield React/TypeScript/Vite static application. Requirements, eight stories, Application Design, NFR Requirements and NFR Design are approved. Units Generation, Functional Design and Infrastructure Design are skipped by the approved workflow; use the application design and story mappings as the unit contract.

No database entities, API layer, repository service, migration or backend business logic exists. No external service or other unit is required. Native anchors and a fixed hash normalizer provide navigation. Public copy and explicit PDF imports provide content. Preserve GitHub Pages hosting and base-path behavior.

References: `inception/requirements/bui-duc-anh-requirements.md`, `inception/user-stories/bui-duc-anh/`, `inception/application-design/bui-duc-anh/`, and `construction/materials-portfolio/nfr-requirements/` and `nfr-design/` under aidlc-docs.

## Planning readiness

- [x] Read the Code Generation rule details, workspace state and reverse-engineering code structure.
- [x] Review approved unit boundaries, stories, component interfaces, privacy controls and quality criteria.
- [x] Inspect existing file inventory, package/build configuration and current worktree changes.
- [x] Document exact application paths, numbered implementation sequence and story traceability.
- [x] Create the detailed plan and record its approval prompt in the audit.
- [x] Receive explicit approval of the entire plan and generation sequence.

## Implementation sequence

### Step 1: Confirm workspace and review tooling

- [x] Recheck Git changes before edits and preserve all unrelated user work and the three original ignored inputs.
- [x] Check available local PDF text, metadata and page-rendering tools. Swift failed; isolated PyMuPDF/Playwright tools installed under /private/tmp. Reviewed PDF structure and rendered pages privately.
- [x] Check Node/npm and existing dependencies; installed 661 packages from the lockfile. Read Sites local-preview guidance; no built-in browser tool is available, local Chrome exists. No Sites publication.

Coverage: US-08; NFR-01/10.

### Step 2: Review every source certificate

- [x] Inspect the five PDFs individually: Planting trees, Le Stella club, ASMO NATIONAL, Logistics Department, and ICQ. Review visible pages, text, metadata and embedded-content concerns using available tooling.
- [x] Create `aidlc-docs/construction/materials-portfolio/code/certificate-review.md` with safe publish/withhold decisions, reasons, intended public filenames and hashes for approved copies where useful. Never record sensitive field values.
- [x] Withhold uncertain/private PDFs and retain safe achievement summaries. Prepare a reviewed safe derivative only if reliable sanitization can be verified; never expose the original alongside it. Preserve original archives locally.

Coverage: US-04/08; PR-01 through PR-04; NFR-01/02.

### Step 3: Create curated public content and certificate registry

- [x] Create `src/data/materialsPortfolio.ts` with public introduction, project, education, skills, awards, leadership/service and section labels derived from supplied facts. Clearly distinguish completed and ongoing coursework; omit grade placeholders and unavailable contact details.
- [x] Copy approved ordinary certificate files only into `src/assets/certificates/bui-duc-anh/` with stable descriptive names recorded in the review manifest.
- [x] Create `src/data/materialsCertificates.ts` with explicit imports and descriptive public entries; withheld documents have no public URL. Never import the resume or ZIPs, and do not use asset globs.

Coverage: US-01 through US-05, US-08.

### Step 4: Build conceptual scientific illustrations

- [x] Create `src/components/materials/ScientificIllustration.tsx` for a lattice and thin-film visual using local SVG/CSS. Add useful alternatives/captions, hide purely decorative primitives, and label scientific figures as conceptual.
- [x] Use no fabricated experimental results, project screenshots, portrait, live-simulator functionality or external image/font service.

Coverage: US-02/06; FR-03; NFR-04/06/07.

### Step 5: Build portfolio sections and navigation

- [x] Create `src/components/materials/PortfolioSections.tsx` implementing the agreed header, introduction, research, foundations, recognition, community and footer responsibilities. Components can share this file while keeping clear named boundaries.
- [x] Use fixed section IDs `home`, `research`, `foundations`, `recognition`, `community`, one main heading, semantic landmarks, wrapping navigation and a skip link. The primary action reaches the real research section.
- [x] Render achievements without approved files as text; approved certificate links identify the achievement and PDF format. No eager PDF embeds, placeholders or fake contact actions.
- [x] Give interactive links stable descriptive `data-testid` attributes as required by Code Generation rules.

Coverage: US-01 through US-07; NFR-04/08.

### Step 6: Implement the custom visual system

- [x] Replace `src/index.css` and `src/App.css` with a cohesive ivory/graphite/copper laboratory-notebook design, editorial typography, varied section layouts and restrained scientific geometry.
- [x] Implement fluid mobile-to-desktop layouts, bounded reading widths, focus visibility, sufficient contrast and unobscured anchor targets. Keep all essential content readable without hover or motion.
- [x] Use system/local typography and respect reduced-motion settings for any scroll/transition effects. No third-party runtime resource imports.

Coverage: US-01/02/06; NFR-04 through NFR-07.

### Step 7: Replace the application entry and metadata

- [x] Modify `src/App.tsx` to compose the new portfolio only. Modify `src/main.tsx` to mount the lean replacement with React StrictMode and remove obsolete provider usage.
- [x] Create `src/utils/portfolioHash.ts` with fixed-section hash normalization and clean up any App event listener on unmount. Preserve valid anchors; obsolete talk/journal or unknown hashes safely resolve to home while retaining pathname/query.
- [x] Update `index.html` title, English language, description and favicon. If needed, create a small local materials-themed `public/favicon.svg` and remove `public/vite.svg`.

Coverage: US-01/06/07; FR-01/07/08; NFR-03/08/09.

### Step 8: Retire obsolete application content and dependencies

- [x] After checking references, remove retired `src/templates/`, `src/features/nus-talk/`, `src/content/journal/`, old portfolio components/shared UI/provider files, old hooks/types/data/utilities and their obsolete tests. Preserve newly created materials components/data/hash helper and `src/test/setup.ts`.
- [x] Remove former-owner tracked documents, portraits, gallery/project images, logos and certificate assets from active `src/assets/`. Preserve all three original ignored input files and the new approved certificate directory. Do not delete unknown newly supplied user files.
- [x] Remove obsolete test files such as old template, talk, theme, navigation-data and portfolio-data tests when their targets are retired; replace `src/App.test.tsx` in the next step.
- [x] Update `package.json`, `package-lock.json`, `vite.config.ts` and ESLint configuration if affected by unused-package removal. Keep required React/Vite/TypeScript/testing dependencies, reproducible installation and base-path support. No unrelated version upgrades or history rewriting.

Coverage: US-07/08; PR-05; NFR-03/07/10.

### Step 9: Add meaningful verification

- [x] Replace `src/App.test.tsx` with new identity, navigation destinations, academic progress, conceptual-label, certificate-link and absent-document behavior checks. Add `src/utils/portfolioHash.test.ts` for valid, legacy and malformed hashes.
- [x] Create `scripts/verify-public-assets.mjs` to inspect active source/public/build file inventories, detect disallowed originals/archives and unexpected PDFs, and compare public certificate files with an explicit approved inventory. Add safe package commands and CI invocation in `.github/workflows/deploy.yml` if that is the existing Pages workflow path; otherwise modify the actual existing Pages workflow in place.
- [x] Keep check output to safe filenames and pass/fail summaries. No private fixtures or raw credential text. Automation supports document review; it does not claim to detect every possible secret.

Coverage: US-04/06/07/08; NFR-01/02/03/08/09/10.

### Step 10: Update public maintenance documentation

- [x] Update `README.md` and `DEPLOYMENT.md` in place for Bui Duc Anh's website, local editing, base paths, reviewed public certificates, ignored private references and existing Pages deployment.
- [x] Keep private source contents out of these documents. Make no claim that ignore rules remove Git history or that a deployment has occurred.

Coverage: US-08; NFR-10.

### Step 11: Verify the generated implementation

- [x] Run meaningful new tests and the production TypeScript/Vite build; fix observed failures. Validate a root base and representative subpath build, and leave the final artifact configured for this repository.
- [x] Run the public-asset verifier and inspect Git changes, document copies, metadata and output for unapproved documents, private inputs, stale identity and wrong asset paths.
- [x] Measure actual gzip entry JavaScript/CSS against approved budgets and calculate principal text/focus contrast pairs. Verify PDF assets are linked, not fetched eagerly.
- [x] Use supported local preview/browser tooling for keyboard, 320px/768px/1440px, 200% zoom and reduced-motion checks where available. Report actual limits; do not claim jsdom validates visual layout. Fix observed issues before review.

Coverage: all eight stories and NFR-01 through NFR-10. This is implementation verification; the later formal Build and Test stage still produces its required instructions and handoff.

### Step 12: Prepare the generated-code handoff

- [x] Create `aidlc-docs/construction/materials-portfolio/code/code-generation-summary.md` with changed/created/retired responsibilities, safe certificate decisions, story/NFR evidence, check results, preview information and remaining limits.
- [x] Update all completed plan and story checkboxes immediately; append the generated-code review prompt to audit.md and update aidlc-state.md.
- [x] Present the required two-option review: Request Changes or Continue to Next Stage for Build and Test. Do not claim deployment or proceed through the generated-code approval gate automatically.

## Unit story completion

- [x] US-01: introduction and scientific direction.
- [x] US-02: source-supported project and conceptual illustration.
- [x] US-03: accurate academic development.
- [x] US-04: ordinary reviewed certificate evidence and withheld-file fallback.
- [x] US-05: leadership and community contribution.
- [x] US-06: accessible responsive exploration.
- [x] US-07: consistent identity across entry points.
- [x] US-08: private-reference protection and safe public assets.

## Approval boundary and compliance

Approval covers all twelve implementation steps, including retirement of the former site's active code/assets and associated tests, dependency cleanup, new verification and safe certificate selection. Original private inputs and unrelated user changes are preserved. No commit, push, hosting migration or deployment is performed merely by preparing this plan; do not publish before applicable review gates and privacy verification.

Security Baseline, SECURITY-01 through SECURITY-15: N/A, disabled. PBT: N/A, disabled. Mandatory user privacy: applicable and covered by Steps 1–3, 8–12. No enabled extension has a blocking finding for this planning artifact. Markdown structure, paths and checklist sequence checked before creation; no diagrams or embedded structured data require parsing.

## Generated-code review amendment: readability and previews

Authorized directly by the user's request: increase font size for visibility and add certification preview options. This is a revision of the current generated-code review, not a new workflow. Original privacy requirements and certificate hashes remain authoritative.

- [x] Increase body, navigation, metadata and control typography across desktop/mobile; adjust layouts for longer/larger text.
- [x] Add an on-demand accessible certificate preview dialog using only the approved PDF URL; retain Open PDF and provide a visible fallback. Support keyboard close, focus return and scroll restoration without fetching certificates on initial load.
- [x] Add meaningful preview interaction checks and run tests, build, asset/privacy verification, and responsive/keyboard browser review.
- [x] Update code summary, relevant design/requirements notes, state and audit; present the generated-code review again.

## Review amendment: direct previews and smaller introduction

- [x] Reduce the opening headline, paragraph and primary action sizes as requested; retain readable text in other sections.
- [x] Render inline certificate images derived only from the reviewed public PDFs. Keep optional enlargement and Open PDF actions; extend the approved-asset hashes for the safe preview derivatives.
- [x] Verify inline previews, typography, responsive layouts, tests, production builds and privacy checks; update state, summary and audit.

## Review amendment: centered certificate previews

- [x] Center inline preview cards across the full achievement row, retaining paired pages and responsive sizing.
- [x] Check the build, public assets and desktop/mobile centering; update state, summary and audit.

## Review amendment: reference-site language

- [x] Read the public reference website and identify its tone, wording patterns and content structure.
- [x] Adapt Duc Anh’s public copy in that direction while retaining source-supported facts, privacy controls and the approved layout.
- [x] Verify the copy changes with relevant tests/build and privacy checks; update state, summary and audit.

## Review amendment: scientific motion and tighter greeting

- [x] Add subtle landing/lattice and illustrative thin-film deposition motion, a global pause control, reduced-motion support, and offscreen animation pausing. Keep scientific labels explicitly conceptual.
- [x] Tighten the two greeting lines and nearby introductory spacing without enlarging the approved type.
- [x] Verify animation controls/preferences, layout, tests/build/privacy and responsive browser behavior; update state, summary and audit.
