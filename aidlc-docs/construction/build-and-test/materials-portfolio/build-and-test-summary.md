# Materials portfolio Build and Test summary

Status: complete; awaiting approval to enter the placeholder Operations stage. Generated code and all review amendments were approved by the user with "approve and continue".

## Formal verification

| Check | Result |
| --- | --- |
| Automated suite | 23 tests passed, zero failed, two files. |
| Unit/component split | 13 hash cases and 10 App/component integration tests; included in the total above. |
| TypeScript/Vite | Root and `/portfolio/` builds passed. Final dist uses `/`. |
| Public asset checks | Both configurations passed: five approved PDFs, six approved page images, original inputs excluded and paths valid. |
| Entry delivery | 67.08 KiB JavaScript gzip and 5.54 KiB CSS gzip; within 150/40 KiB budgets. |
| Source/runtime privacy | Original DOCX/ZIPs remain ignored and untracked; safe publication manifest and public hashes unchanged. |
| Whitespace validation | git diff --check passed. |

Verified environment: Node 24.0.0, npm 11.3.0, Vite 7.3.0. Formal suite duration was 24.81 seconds on this run. Final Vite bundling took 1.62 seconds; these timings are environment-specific.

## Browser and content evidence

The latest implementation reviews already verified desktop/mobile rendering, native document previews and motion against the same approved application code. This formal stage reran the automated suite, both base builds and public-asset checks; it did not repeat unchanged browser scenarios unnecessarily.

- Chrome verified root/legacy navigation, keyboard skip/anchor behavior, unobscured targets, five PDF HTTP 200 responses and no initial PDFs/external runtime requests.
- All six derived inline images decoded; single-page previews were centered at 320/768/1440px without horizontal overflow.
- Enlargement, Escape/close/backdrop dismissal, focus return and scroll restoration passed browser checks.
- Final animation checks verified lattice/particle movement, global pause, offscreen pause and live system reduced-motion updates with no uncaught errors.
- Principal text/background contrast pairs were previously measured at 4.97:1 or higher. No style color changes followed that calculation.
- Public facts remain based on the supplied resume and reviewed certificates; certificate edition years take precedence over inconsistent resume periods. Scientific figures remain conceptual.

Session-local evidence is under `/private/tmp/bui-duc-anh-review/`, including motion-results.json, readability-preview-results.json, inline-results.json and screenshots. Durable code/document evidence is in the test files, asset verifier, [certificate manifest](../../materials-portfolio/code/certificate-review.md) and [code summary](../../materials-portfolio/code/code-generation-summary.md).

## Instructions delivered

[Build](build-instructions.md), [unit tests](unit-test-instructions.md), [integration](integration-test-instructions.md), [performance](performance-test-instructions.md), [privacy/security](security-test-instructions.md) and [end-to-end workflows](e2e-test-instructions.md).

## Limits and applicability

Coverage percentage is unmeasured. The 200% reflow check used an equivalent CSS viewport/device scale; actual toolbar zoom and a full assistive-technology/cross-browser audit were not performed. Native PDF support varies and direct PDF fallback is available. No backend load test, API contract test or infrastructure failover test is applicable. No dependency vulnerability scan or penetration-test result is claimed.

Security Baseline, SECURITY-01 through SECURITY-15: N/A, disabled by Q3 B. Property-Based Testing: N/A, disabled by Q4 C. User privacy PR-01 through PR-06 remains mandatory and has source review, allowlisted assets and Git/build verification evidence. No enabled extension has a blocking finding.

## Handoff

Build and Test is complete. Operations is a workflow placeholder, not automatic deployment. No commit, push, GitHub Actions deployment or Sites publication occurred. The website is ready for review of an explicitly requested publication step after the workflow handoff.
