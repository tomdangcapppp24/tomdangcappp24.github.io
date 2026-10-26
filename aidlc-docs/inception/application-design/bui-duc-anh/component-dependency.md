# Dependencies and communication

| Consumer | Depends on | Communication |
| --- | --- | --- |
| React entry | App, replacement global styles | Single mount with StrictMode. |
| App | Header, five sections, footer, hash normalizer | Composition; navigation uses browser anchors. |
| Header and footer | Public section IDs and labels | Static local imports. |
| Introduction, research, foundations and community | Public content module | Read-only local imports. |
| Research/intro figures | ScientificIllustration | Fixed presentation props. |
| Recognition | Public achievements and approved certificate registry | Optional public document URL per entry. |
| Certificate registry | Approved public PDFs only | Explicit Vite imports; no file globs. |
| GitHub Actions | Existing npm build and dist | Static deployment; no raw local references. |

## Data-flow visualization: text representation

1. Local private resume and archives are read by the maintainer during content and document review.
2. The maintainer produces safe public copy and individually approves ordinary certificate files.
3. Public content and explicit certificate assets become build inputs to section components.
4. App composes sections; Vite emits the static site; the browser reads only those public resources.
5. Local originals and private documents never enter the component tree, public directory, Git change or deployment artifact.

No path connects browser input to private filesystem access. No new application state is persisted. Legacy storage preferences are unused, and legacy talk/journal hashes resolve to the new home section. Historic Git objects and the append-only AI-DLC audit are not rewritten by application cleanup.

## Extension compliance

Security Baseline (SECURITY-01 through SECURITY-15): N/A, disabled by Q3 B. Property-Based Testing: N/A, disabled by Q4 C. User privacy remains mandatory; this design includes local-reference isolation and explicit public-certificate selection. No private source contents are included. Implementation verification is pending.
