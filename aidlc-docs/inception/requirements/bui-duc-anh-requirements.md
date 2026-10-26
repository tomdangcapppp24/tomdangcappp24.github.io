# Bui Duc Anh materials science portfolio requirements

Status: approved by the user with "approve and continue" on 2026-10-26.

## Intent and decisions

Build a custom English website for Bui Duc Anh using the supplied resume and two new ZIP archives as factual sources. This is a brownfield portfolio replacement affecting multiple components, content, public assets and metadata. Complexity and requirements depth: moderate/standard.

The saved answers, confirmed by the user's "approve and continue", are Q1 A, Q2 A, Q3 B and Q4 C. Replace the public site; publish only reviewed ordinary certificates; disable both optional Security Baseline and Property-Based Testing extensions. There are no contradictory answers. Privacy requirements below remain mandatory independently of extensions.

## Audience and outcome

Help admissions readers, prospective collaborators and other visitors understand his scientific interests, technical work, academic development and community contribution. The public identity is a current A-level student interested in materials science and engineering, not an employed materials engineer or an established researcher.

## Functional requirements

| ID | Requirement | Acceptance evidence |
| --- | --- | --- |
| FR-01 | Replace the public entry experience with Bui Duc Anh's identity and materials science portfolio. Retire the previous owner's portfolio, journal and NUS talk from the published application. | Root and legacy hashes resolve safely without displaying the old owner's content. |
| FR-02 | Provide an introduction, featured project, academic foundations, recognition/certificates, and leadership/community sections with working anchor navigation. | All navigation links reach the intended sections; mobile visitors can access every section. |
| FR-03 | Feature the Python Monte Carlo semiconductor thin-film growth simulation. Describe his co-developer role, deposition, relaxation, diffusion, trench filling and the parameters explored, using resume-supported claims. | No invented repository, screenshots, outcomes, live simulator or publication. Any illustrative graphic is identified as conceptual. |
| FR-04 | Present school education, academic subjects, technical skills and relevant coursework accurately. Distinguish completed courses from the ongoing specialization and omit incomplete grade placeholders. | Content matches reviewed source facts and does not present unfinished study as completed. |
| FR-05 | Present academic recognition, club participation, leadership, volunteering and basketball as distinct evidence of his interests and contribution. | No invented dates, credentials, roles, affiliations or impact figures. Source-supported numerical claims remain contextualized. |
| FR-06 | Offer an accessible certificate list with previews or open-document links for individually approved ordinary certificates. | Each public file has a review decision and a working link. Withheld documents have no downloadable original or preview URL. |
| FR-07 | Omit unavailable contact information and personal imagery. | No placeholder email, phone, social account, contact form, unrelated portrait or previous owner's resume. |
| FR-08 | Update browser title, description, page language and site identity for Bui Duc Anh. | Public metadata and accessible naming match the new portfolio. |

## Visual and interaction requirements

Use an editorial materials laboratory notebook direction: ivory background, graphite type, copper accents, scientific geometry and thin-film imagery. Prefer custom code-native scientific illustration over unrelated stock imagery. The narrative should connect scientific curiosity, computational exploration and community contribution.

Use responsive composition from 320px mobile widths through desktop, semantic headings and landmarks, readable text, visible keyboard focus, accessible link names, meaningful image alternatives and adequate contrast. Respect reduced-motion preferences. Avoid animations that prevent reading or navigating. The primary project action must lead to real project content.

## Privacy and publication requirements

| ID | Requirement | Acceptance evidence |
| --- | --- | --- |
| PR-01 | Keep the original DOCX, both ZIPs, extracted private documents and private credentials out of Git tracking and deployed assets. | Ignore rules verified; inspect tracked files and production output, not only visible UI. |
| PR-02 | Review all five archive PDFs individually for text, visible content and metadata before publication. Ordinary competition, club and volunteering certificates are eligible; they are not automatically approved by filename. | Record safe publication decisions without recording sensitive values. Withhold uncertain files and use a factual text summary instead. |
| PR-03 | Do not disclose private credentials, sensitive identifiers, home addresses, birth dates or private verification data. Do not copy private source text into tracked notes, tests, logs or screenshots. | Inspect public code, documentation changes, file metadata and production artifacts for accidental disclosure. |
| PR-04 | Copy only explicitly approved certificate files into a dedicated public asset directory. Do not bulk extract source archives into the project or expose a source-file directory listing. | Public certificate list matches the allowlist exactly; original source inputs are absent. |
| PR-05 | Remove the former owner's documents and unrelated media from the current public build and active source assets as part of replacing the site. | No reachable old document links or bundled unrelated content. Historic Git commits are outside this replacement's scope; do not claim ignore rules remove history. |
| PR-06 | Do not add analytics, tracking, API keys, authentication, a backend or data collection. | New site uses local static content and assets and makes no application API requests. |

An ordinary certificate's recipient name and achievement are expected public content under the approved document policy. If a source certificate needs redaction, do not publish its unredacted original alongside a redacted preview. Use factual text instead if a safe public derivative cannot be reliably produced.

## Technical quality and verification

Retain React, TypeScript, Vite and the existing GitHub Pages static hosting approach. No Sites hosting migration is requested. Keep application files outside aidlc-docs. Remove obsolete public features and obsolete tests when they cease to describe the new site; keep meaningful tests for new navigation, certificate handling and privacy protections.

The implementation must pass the production TypeScript/Vite build and relevant tests. Verify GitHub Pages asset paths, keyboard navigation, mobile layout, reduced-motion behavior and document links. Inspect the built output and Git changes for disallowed files and stale identity. Report any browser verification limits explicitly. New dependencies require a concrete implementation need.

Build output must include only needed public resources. The original resume is a local reference; a downloadable public resume is not required. Do not fabricate a portrait, research data or live scientific simulation. A small conceptual visual can explain the project without claiming to reproduce its model.

## Extension compliance

| Extension | Status | Rationale |
| --- | --- | --- |
| Security Baseline, SECURITY-01 through SECURITY-15 | N/A: disabled | Explicit saved answer Q3 B. Its rules are not enforced for this workflow. |
| Property-Based Testing | N/A: disabled | Explicit saved answer Q4 C; full rules remain unloaded. |
| User privacy requirements PR-01 through PR-06 | Applicable | Mandatory regardless of optional extension selection; requirements capture controls and acceptance evidence. Implementation verification is pending. |

No enabled extension has a blocking finding at this requirements stage. Source PDF publication review is an implementation prerequisite, not a completed check.

## Next stage

User Stories is required because this change creates a new public experience and replaces existing visitor workflows. After explicit requirements approval, prepare the story plan and workflow plan using this document as their source of truth. Detailed stage inclusion and implementation steps remain subject to AI-DLC planning review.

## Authorized generated-code review amendment

The user requested larger fonts and certificate-preview options. Increase primary reading text to approximately 16–18px and enlarge navigation, dates, labels and controls across responsive layouts. Provide an on-demand on-page preview for each approved certificate, retain a direct Open PDF action, and include a visible fallback when embedded viewing is unavailable. Support close/Escape behavior, focus restoration, scroll restoration and no initial PDF fetch. Use only the same reviewed public copies; private-input exclusion is unchanged. This direct review request authorizes the bounded revision without restarting approved inception stages.

## Direct-preview and introduction refinement

The subsequent user review requests previews directly on the page and a smaller opening section. Six lazy-loaded JPEG previews, derived only from approved public PDFs, now appear inline in Recognition. Each can be enlarged using the existing modal, and direct PDF access remains. Hero typography is reduced to an 88px desktop headline maximum and a 52–72px mobile range; intro copy is 16px desktop and 15px mobile. Other sections retain larger reading text. No private original is made public. This explicit revision supersedes the earlier modal-only presentation.
