# Materials portfolio NFR design patterns

Status: approved with "approve and continue". These controls are implementation requirements, not claims that checks have passed.

## Public/private asset boundary

Keep original inputs ignored and local. If private working copies or temporary previews are needed, process them in a private temporary directory outside public build inputs; do not add sensitive contents to logs or tracked notes. Do not delete the user's original files.

Review each source PDF's visible pages, extracted text and metadata before publication. Record a publish/withhold decision and safe reason in a certificate manifest; record no sensitive values. Copy only approved ordinary PDFs or independently reviewed safe derivatives into `src/assets/certificates/bui-duc-anh/`. Use explicit asset imports. No `import.meta.glob`, bulk archive extraction into assets, public-directory source dump or runtime access to the resume/archives is permitted.

Do not approve a document just because a preview looks safe: text layers, metadata, annotations, forms, attachments or embedded content can retain information. If a safe publication decision is uncertain, withhold the entire document and retain safe achievement text. Do not ship an unreviewed original alongside a derivative.

Before handoff, review proposed tracked additions/changes and a freshly generated dist separately. Compare every public certificate with the approved list; check for original source names/extensions, unintended documents, private data and old-owner content. Automated searches supplement visual/manual review. Current active assets must be clean even when Vite would tree-shake unused imports. Historic Git objects and the immutable audit remain outside the active-asset cleanup.

Coverage: NFR-01, NFR-02, NFR-03, NFR-10; PR-01 through PR-05.

## Progressive, accessible presentation

Render all five sections as semantic static content. Keep essential navigation and project information in the DOM without requiring hover or animation. Use ordinary anchors, wrapping navigation, a visible-on-focus skip link, logical headings and descriptive PDF link names. Keep target headings clear of the header with appropriate scroll margins.

Use flexible grids, bounded text measures, wrapping labels, minimum zero widths on grid children, fluid SVG dimensions and no fixed-width content that forces overflow. Review at 320px, 768px and 1440px and at 200% zoom when browser tooling permits. Calculate actual foreground/background contrast pairs and verify focus styles. Use local/system typography. Keep scientific illustrations explicitly conceptual, with meaningful alternatives and decorative primitives hidden from assistive technology.

Prefer static figures. If hover transitions or decorative animation are present, disable or reduce them under prefers-reduced-motion. Smooth scrolling must also respect that preference.

Coverage: NFR-04, NFR-05, NFR-06.

## Lightweight static delivery

Mount a lean React component tree. Remove obsolete template, talk, Markdown and provider references as the replacement makes them unnecessary; remove dependencies only after checking remaining references and updating the lockfile. No new framework is required.

Keep linked certificate PDFs and, as authorized by generated-code review, mount a native-dialog PDF preview only after activation. Do not use eager iframe/object embeds or thumbnails that fetch every PDF on page load. Keep illustration assets local and fonts self-contained. Do not load analytics or runtime application APIs. Measure compressed entry JavaScript and CSS against 150 KiB and 40 KiB gzip budgets; include all initial entry chunks, and do not use lazy-loading to conceal essential page weight.

Preserve Vite's configured base behavior by using explicit asset imports. Validate both the root build and a representative repository-subpath build, including document URLs. Leave the final output in the intended deployment configuration and record which configuration was used.

Coverage: NFR-07, NFR-09; PR-06.

## Safe fallback and maintenance

The public certificate registry contains approved documents only. An achievement without a document renders factual text without a disabled or empty link. Unknown/obsolete hashes map to the new home; valid section hashes retain normal browser behavior. Hash values are selected from fixed section IDs and never inserted as markup or interpreted as arbitrary URLs. Any hash listener is removed on unmount.

No backend creates retry, queue or failover requirements. Keep content available independently of PDF availability. Build/test failures are surfaced in development and release notes; do not claim browser or deployment verification that has not run. Keep safe editing instructions, meaningful user interaction tests and a production-output privacy check. Avoid storing raw private sources in test fixtures.

Coverage: NFR-08, NFR-10.

## Verification mapping

| Criteria | Required evidence |
| --- | --- |
| NFR-01/02 | Ignored-original checks, safe certificate decisions, allowlist comparison and source/build inspection. |
| NFR-03 | New identity in entry metadata and page; no obsolete runtime routes/assets. |
| NFR-04/05/06 | Semantic/interaction checks, contrast calculations and supported responsive/keyboard/motion review with limits stated. |
| NFR-07 | Actual gzip measurements and resource references proving no eager document or external resource load. |
| NFR-08 | Valid, legacy and malformed hash cases; document-absent fallback. |
| NFR-09 | Root and representative subpath build/link evidence. |
| NFR-10 | Passing build/tests, aligned dependencies and maintainable public editing instructions. |

## Extension compliance

Security Baseline, SECURITY-01 through SECURITY-15: N/A, disabled by Q3 B. PBT: N/A, disabled by Q4 C. Mandatory privacy controls remain applicable and are designed above. No enabled extension has a blocking finding in this design artifact. Document reviews and implementation evidence remain pending.
