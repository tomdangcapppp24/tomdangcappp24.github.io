# Materials portfolio Code Generation summary

Status: implementation complete; awaiting explicit generated-code approval before formal Build and Test.

## Result

Replaced the previous owner's two-template portfolio and NUS talk with a custom English materials science and engineering portfolio for Bui Duc Anh. Ivory/graphite/copper styling, conceptual crystal-lattice and thin-film SVGs, five narrative sections, native anchor navigation and reviewed public certificate copies are implemented. Source copy reflects student status and distinguishes ongoing study from completed coursework.

## Main changes

- Modified `src/App.tsx`, `src/main.tsx`, `src/index.css`, `src/App.css` and `index.html` in place for the new public identity and layout.
- Created `src/components/materials/PortfolioSections.tsx` and `ScientificIllustration.tsx` for the custom visual experience.
- Created public data modules `src/data/materialsPortfolio.ts` and `materialsCertificates.ts`, plus `src/utils/portfolioHash.ts` and local favicon.
- Included five reviewed public PDF copies under `src/assets/certificates/bui-duc-anh/`. See [certificate review](certificate-review.md) for the decisions and exact hashes. Six pages were reviewed. QR/reference codes and selected class identifiers were removed where present; orientation corrected and original metadata/hidden structures excluded by rebuilding image-only public copies. Ordinary public achievement context and issuer signatures remain.
- Used the printed 2025 edition for ICQ and ASMO recognition; the ICQ resume period differed from its certificate.
- Retired former-owner active templates, talk/journal features, content, media, documents, helpers and obsolete tests. Original ignored inputs and unrelated user work were preserved. Historic Git commits and the append-only audit were not rewritten.
- Reduced runtime dependencies to React and React DOM; updated the lockfile, Vite and ESLint configuration consistently. No package upgrades were intentionally introduced.
- Added new App/hash tests and `scripts/verify-public-assets.mjs`. Updated Pages CI to run tests and public-asset verification before deployment. Updated README/DEPLOYMENT guidance.

## Verification results

| Check | Actual result |
| --- | --- |
| Relevant tests | 20 passed across two test files, including all five on-demand preview selections and scroll restoration. |
| Production build | TypeScript and Vite passed. |
| Root and `/portfolio/` base builds | Both built and passed entry/PDF path checks. Final dist rebuilt for `/`. |
| Public asset verifier | Passed with exactly five approved PDF hashes; no originals proposed for Git and no unexpected active/deployed assets. |
| Negative asset check | An unapproved PDF temporarily placed outside the allowlist was rejected; the non-sensitive probe was removed. |
| Original inputs | DOCX and both ZIPs remain locally present, ignored and untracked. No originals were published. |
| Production browser HTTP | Local preview returned 200; all five PDF links returned 200 with PDF content type. |
| Production resource loading | No initial PDF fetches and no external runtime requests. |
| Keyboard | Skip link receives visible focus and Enter moves focus to main; section links reach unobscured headings. |
| Responsive | 320px, 768px and 1440px reviewed with no horizontal overflow. Screenshots inspected. |
| Motion | Reduced-motion mode gives non-smooth scrolling; content remains visible without animation. |
| Legacy entry | Old talk hash resolves to home while pathname/query remain intact. |
| Browser errors | No uncaught page errors. |
| Text contrast | Ten principal text/background pairs passed at least 4.5:1; lowest measured ratio 4.97:1. |
| Gzip entry resources | JavaScript 66.11 KiB; CSS 4.61 KiB, within approved 150/40 KiB budgets. |
| Git diff whitespace | Passed. |

## Evidence and limits

Screenshots and isolated browser/PDF tooling are outside the repository at `/private/tmp/bui-duc-anh-review/`. `preview-desktop.png` is the public-page screenshot; `final-320.png`, `final-768.png` and `final-1440.png` show the production layouts. They are local review artifacts, not deployed site resources.

The 200% reflow check used the equivalent 720 CSS-pixel viewport at 2x device scale for a 1440 physical-pixel page. Browser toolbar zoom was not directly exercised. No claim of a complete assistive-technology audit is made. All five PDFs are image-only copies with accessible factual descriptions in the page; the PDFs themselves do not contain selectable text.

Swift PDFKit did not compile locally; isolated PyMuPDF supplied document rendering/metadata/structure review. Initial test failures exposed heading word-spacing and an over-broad stale-route check; those were corrected. Initial browser resource checking used development module requests, which include PDF import stubs; final resource checks ran against production output to measure real PDF fetch behavior.

No commit, push, GitHub Actions deployment or Sites publication occurred. The automatic allowlist check supports manual document review; it cannot detect every possible secret or sensitive statement. Formal Build and Test instructions/handoff remain pending generated-code approval.

## Story and quality coverage

| Stories | Implementation evidence |
| --- | --- |
| US-01 | New introduction, metadata, student identity and project action. |
| US-02 | Source-supported co-developer project, process/parameter descriptions and labeled conceptual figures. |
| US-03 | Academic subjects and completed/in-progress coursework distinction. |
| US-04 | Reviewed public PDF registry, verified links and tested text-only fallback. |
| US-05 | Club, book campaign, volunteering, leadership and basketball context. |
| US-06 | Semantic structure, focus/skip link, responsive layouts, contrast and reduced motion. |
| US-07 | Root/legacy navigation and retired former-owner content/assets. |
| US-08 | Local original preservation, allowlisted public copies, CI/source/build checks and safe editing guidance. |

NFR-01/02: document review, ignore checks and source/build inventory. NFR-03: entry replacement and active-asset cleanup. NFR-04/05/06: semantic, contrast and browser evidence with zoom/audit limits above. NFR-07: measured bundles and production request inspection. NFR-08: tested hash and absent-document behavior. NFR-09: both base builds and asset-path checks. NFR-10: lean dependencies, passing build/tests and editing documentation.

## Extension compliance

Security Baseline, SECURITY-01 through SECURITY-15: N/A, disabled by Q3 B. PBT: N/A, disabled by Q4 C. User privacy PR-01 through PR-06: applicable; the supplied originals remain excluded and only reviewed public copies enter active/deployed assets. No enabled extension has a blocking finding. No private source contents are included in this summary.

## Readability and certificate-preview revision

Completed the user's generated-code review request. Increased the page's text sizes across desktop and mobile: principal reading text is now approximately 16–18px, with larger navigation, controls and metadata. Recognition rows now offer Preview and Open PDF. The new `src/components/materials/CertificatePreview.tsx` mounts a native modal and PDF frame only after activation, using the existing approved public copies. It includes a descriptive title, close button, Escape/backdrop dismissal and a visible direct-PDF fallback. Focus returns to the triggering button, the frame is removed on close, and body scrolling is restored. The effect is safe under React StrictMode.

All 20 tests passed, production root/subpath builds and public-asset checks passed, and local Chrome verified all five previews, Escape, close button, backdrop dismissal, focus return and layouts at 320/768/1440px. No uncaught page errors occurred. Initial PDF loading remains absent; certificate hashes are unchanged. No private input, public document or dependency was added. Native embedded PDF support varies by browser; Open PDF remains available as fallback.

Updated screenshots: `/private/tmp/bui-duc-anh-review/preview-larger-text.png`, `recognition-larger-text.png`, `certificate-preview-desktop.png` and `certificate-preview-mobile.png`. Browser results are in the same private temporary directory. No commit, push or deployment occurred. Formal Build and Test still awaits generated-code approval. Both optional extensions remain disabled; privacy controls remain satisfied.

## Direct previews and smaller opening section

Completed the next review request: certificate pages appear directly in Recognition, with lazy-loaded JPEGs derived exclusively from the approved sanitized public PDFs. Six images cover all five documents, including both ASMO pages. Clicking a page or Enlarge opens the optional larger PDF view; Open PDF remains available. Original document hashes are unchanged and preview-image hashes were added to the public-asset verifier and review manifest.

The hero headline now caps at 88px (86.4px measured at 1440px), with 16px introductory copy and a 14px primary action. Mobile headline range is 52–72px, with 15px introduction text. Larger typography elsewhere is preserved.

Latest verification: 21 tests passed; root and subpath production builds and public-asset checks passed. Local Chrome decoded all six inline images, verified layouts at 320/768/1440px, checked page-click enlargement and focus return, and reported no uncaught errors. No PDFs load before enlargement/open activation. New previews have no EXIF/XMP content and preserve the reviewed redactions. No commit, push or deployment occurred. Both optional extensions remain disabled.

Latest screenshots: `/private/tmp/bui-duc-anh-review/smaller-introduction.png` and `inline-certificates-1440.png`. Earlier modal-only screenshots and 20-test results above are historical.

## Centering refinement

Centered inline certificate cards across the full achievement row using the existing flex layout, including the single-page chemistry certificate. Paired ASMO pages still share a row when space permits. Production build and approved-asset checks passed; local Chrome measured horizontal centers within two pixels of the viewport center at 1440/768/320px, with no page overflow. Screenshot: `/private/tmp/bui-duc-anh-review/centered-certificate.png`. No new documents or dependencies; both optional extensions remain disabled.

## Reference-inspired language revision

Reviewed https://bao252512.github.io/ using a read-only local browser after the web reader could not fetch it (HTTP 200, public portfolio title confirmed). Its relevant writing traits are conversational first-person introductions, short reflective headings, questions leading into projects, specific accounts of participation and an open acknowledgement of ongoing study. These traits guide original wording for Duc Anh, rather than transferring the reference person's biography or accomplishments.

Updated the hero to a personal introduction, rewrote project and academic explanations, made activity descriptions first-person, simplified recognition/community framing and revised the closing/title. Facts remain grounded in the supplied resume and reviewed certificate years; layout, smaller hero typography, centered inline previews and document privacy controls are preserved. The private local reference-page text was not copied into the repository.

All 21 tests passed after updating copy-sensitive assertions; the production build and public-asset verifier passed. Chrome checked new text at 320/768/1440px with no horizontal overflow. Screenshot: `/private/tmp/bui-duc-anh-review/reference-inspired-language.png`. No public documents, dependencies, commit, push or deployment added. Both optional extensions remain disabled. Generated-code review is still pending.

## Scientific animation and compact greeting

Added CSS-only landing entrance, gentle lattice drift/breathing and orbital motion, plus falling atoms, surface arrival ripples and a moving highlight along the conceptual thin-film surface. Scientific captions remain explicit that these visuals are conceptual and not simulation output. No animation library or new public asset was introduced.

An accessible Motion on/off control pauses both illustrations; the system reduced-motion preference disables animation, including when changed while the page is open. IntersectionObserver pauses offscreen figures and disconnects on unmount. The greeting now uses two compact block lines with tighter line-height and a smaller gap to its paragraph; the approved smaller type sizes are retained.

Twenty-three tests passed. TypeScript/Vite build and public-asset checks passed. Local Chrome verified changing lattice/particle transforms, exact pause behavior, offscreen pausing, live reduced-motion changes, an approximately -1.44px greeting line-box gap and no horizontal overflow at 320/768/1440px. No uncaught browser errors. Screenshots: `/private/tmp/bui-duc-anh-review/compact-greeting.png` and `animated-thin-film.png`; screenshots are static frames of moving illustrations. No commit, push or deployment occurred. Both optional extensions remain disabled; approved document assets and privacy controls are unchanged. Generated-code approval is still pending.

## Approval and formal handoff

The user approved the generated code and review amendments with "approve and continue". Formal Build and Test is now complete; see [current handoff summary](../../build-and-test/materials-portfolio/build-and-test-summary.md). Earlier pending-review statements above document historical checkpoints. No deployment has occurred.
