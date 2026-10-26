# Component interfaces

Signatures describe proposed TypeScript contracts; detailed implementation belongs to Code Generation.

| Interface or function | Input | Output and behavior |
| --- | --- | --- |
| App() | None | React element containing the single public site. |
| SiteHeader() | None; imports public section labels | Semantic header and anchor links. |
| Introduction() | None; imports public introduction copy | Section with unique `home` ID and one main heading. |
| ResearchSection() | None; imports public project copy | Section with unique `research` ID and meaningful project content. |
| FoundationsSection() | None; imports public academic copy | Section with unique `foundations` ID. |
| RecognitionSection() | None; imports public achievements and approved certificate registry | Section with unique `recognition` ID; only approved documents have actions. |
| CommunitySection() | None; imports public activities | Section with unique `community` ID. |
| ScientificIllustration(props) | A fixed illustration variant such as lattice or film | Local SVG/CSS figure with caption and accessible alternative; no external resource request. |
| SiteFooter() | None | Semantic footer with public identity and valid anchors. |
| normalizePortfolioHash(hash) | Browser hash string | A valid section hash; empty hash stays empty, unknown/legacy values map to `#home`. Never treats hash content as markup or a URL. |

Use `ReactElement` or inferred JSX return types. A section ID is a fixed union of home, research, foundations, recognition and community. Public achievement entries may contain an optional approved document URL; absence means render text without an action. All public data is compile-time content, not a persisted schema.

Native anchors supply keyboard activation and browser history. An App effect may normalize the initial legacy hash and later hash changes using replaceState, preserving the current pathname and query. It must remove any event listener on unmount. Known section hashes retain ordinary browser behavior. No scroll or input helper is necessary unless observed behavior requires it.

## Extension compliance

Security Baseline (SECURITY-01 through SECURITY-15): N/A, disabled by Q3 B. Property-Based Testing: N/A, disabled by Q4 C. User privacy remains mandatory; this design includes local-reference isolation and explicit public-certificate selection. No private source contents are included. Implementation verification is pending.
