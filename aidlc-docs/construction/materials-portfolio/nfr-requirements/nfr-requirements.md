# Materials portfolio non-functional requirements

Status: approved with "approve and continue". Applies to the single materials-portfolio unit.

Authority: approved Bui Duc Anh requirements, eight user stories and application design. Functional Design is skipped by the approved execution plan; application design defines the static functionality.

## Quality criteria

| ID | Criterion | Verification evidence |
| --- | --- | --- |
| NFR-01 Privacy | Original resume, ZIPs, extracted private files and private credentials must not enter proposed Git content or deployed output. Sensitive source data must not appear in public copy, metadata, tests, logs or screenshots. | Inspect ignore behavior, source changes, public assets and a fresh production build separately. Do not treat a text search or ignore file alone as proof. Maps PR-01, PR-03. |
| NFR-02 Document publication | Every one of the five source PDFs receives a visible-content, text and metadata review before any public copy is created. Public files match an explicit safe allowlist. Withhold uncertain/private documents and retain safe achievement descriptions. | Safe decision manifest without sensitive values; public file inventory and functioning certificate links. Never ship an unsafe original alongside a safe derivative. Maps PR-02, PR-04, US-04. |
| NFR-03 Public identity | All reachable entry points, metadata and active public assets represent the new portfolio. No old talk/journal content, unrelated documents, false contact details or fabricated scientific evidence. | Root and representative legacy-hash checks, source/import review and build inventory. Historical Git/audit records remain unchanged. Maps FR-01, FR-07, FR-08, PR-05. |
| NFR-04 Accessibility | One main heading, semantic landmarks, useful heading order, skip link, keyboard-operable links and visible focus. Normal text contrast at least 4.5:1; large text at least 3:1. Meaningful figures have alternatives; decorative parts are ignored by assistive technology. | Relevant component/interaction checks, color-pair calculation and manual keyboard review where browser tooling is available. Report any unperformed manual checks explicitly. Maps US-06. |
| NFR-05 Responsive reading | At 320px, 768px and 1440px viewport widths, navigation, text and certificate actions remain usable without unintended horizontal overflow. At 200% text/page zoom, essential content and controls stay reachable. | Browser/layout review where available; inspect responsive CSS and document the actual review limits. Target headings are not obscured by navigation. Maps US-06. |
| NFR-06 Motion | Content is readable without animation. Respect prefers-reduced-motion; no essential content depends on movement, hover or an animation completing. | Review motion CSS and reduced-motion behavior. Prefer static scientific illustrations. Maps US-02, US-06. |
| NFR-07 Initial load | Keep the replacement lightweight: target initial JavaScript at most 150 KiB gzip and initial CSS at most 40 KiB gzip. Certificate PDFs load only after activation, not during initial render. No runtime external fonts, trackers or application APIs. | Measure fresh build entry resources and inspect asset/preload references and resource behavior. These are design budgets, not measured results. Maps PR-06 and technical quality requirements. |
| NFR-08 Static reliability | No backend or application service is required. Known anchors work; malformed/old hashes fail safely to the new home. Missing certificate approval produces a text entry without a broken action. | Navigation and conditional-document checks; production build and document-link inspection. Availability is inherited from GitHub Pages, with no new SLA promised. Maps US-04, US-07. |
| NFR-09 Hosting compatibility | The production build works with the root and repository-subpath base configurations supported by the existing Pages workflow. Certificate URLs and local assets resolve within the configured base. | Build/check representative base paths after final code changes; inspect emitted references. Do not claim a deployed URL until deployment is verified. |
| NFR-10 Maintainability | Separate approved public data from presentation and private local references. Keep meaningful navigation/privacy tests, retire obsolete feature tests with removed code, and retain reproducible locked dependency installation. | TypeScript/Vite build and relevant tests pass. Editing/deployment documentation explains safe asset selection. No extra dependency without a concrete need. |

## Scalability and availability assessment

This is a static reader-oriented portfolio. No per-user state, uploads, write API, authentication, database capacity or application-server scaling needs to be designed. Static hosting serves public resources. There is no evidence supporting a numeric traffic target or uptime commitment, so none is invented. Keep the page independent of third-party runtime services.

## Reliability and publication limits

Preserve useful content when a document cannot be published; an absent PDF must not prevent reading achievements. As authorized in generated-code review, provide on-demand previews with always-visible direct PDF links as fallback; do not load documents on initial render. Review all public copies before publication; if tooling cannot reliably inspect a source, withhold that source document. Generic build failures or incomplete browser checks must be reported accurately, with no claim of verified success.

## Verification scope

Build and Test must record actual results for all ten criteria, distinguishing automated checks, manual/browser checks and remaining limits. No backend load test or disaster-recovery infrastructure is needed. Content accuracy checks compare public claims to local sources without storing private source contents in test fixtures or logs.

## Extension compliance

| Extension or constraint | Status | Reason |
| --- | --- | --- |
| Security Baseline, SECURITY-01 through SECURITY-15 | N/A | Explicit Q3 B disables the optional extension. |
| Property-Based Testing | N/A | Explicit Q4 C disables the optional extension; full rules remain unloaded. |
| User privacy PR-01 through PR-06 | Applicable; captured | NFR-01, NFR-02, NFR-03 and NFR-07 specify controls and evidence. Implementation verification is pending. |

No enabled extension has a blocking finding for this requirements artifact. This document includes no private source data. Markdown structure and table columns were checked before creation; no diagrams or embedded structured data require parsing.
