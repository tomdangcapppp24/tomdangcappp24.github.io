# Components and responsibilities

| Component or module | Responsibility and interface | Requirements |
| --- | --- | --- |
| App | Compose one public portfolio, normalize obsolete hashes, render header, main and footer. No old template/talk imports. | FR-01, FR-02, FR-08 |
| SiteHeader | Brand, skip link and ordinary anchor navigation. Links wrap at narrow widths, avoiding a modal menu unless needed. | FR-02 |
| Introduction | Student identity, scientific interests and primary project anchor. No unsupported contact or portrait. | FR-01, FR-07 |
| ResearchSection | Source-supported simulation description, methods, explored parameters and conceptual cross-section. | FR-03 |
| FoundationsSection | School, academic subjects, skills and coursework with explicit progress labels. | FR-04 |
| RecognitionSection | Achievements and safe links to approved ordinary certificates; factual text when no public file exists. | FR-05, FR-06 |
| CommunitySection | Distinct leadership, club, volunteer and basketball entries. | FR-05 |
| ScientificIllustration | Code-native SVG/CSS lattice or thin-film diagram. Captions identify conceptual content; no simulated-data claims. | FR-03 |
| SiteFooter | Identity, section links and concise closing. No fake contact or old-owner links. | FR-07, FR-08 |
| Public content module | Typed static public copy and achievement entries. Contains only selected safe facts, not a raw resume conversion. | FR-03 through FR-07 |
| Public certificate registry | Explicit imports and descriptive labels for approved ordinary PDFs. No archive discovery or runtime private-document access. | PR-01 through PR-04 |

Use semantic React components and scoped CSS in the existing package. Suggested placement: `src/components/materials/`, a dedicated public data module under `src/data/`, and `src/assets/certificates/bui-duc-anh/` for approved certificates. File count may be kept small; component boundaries describe responsibilities rather than a required file for every element.

The new entry point needs only React rendering and the replacement App. Remove unused old provider/theme/Markdown/talk dependencies after reference review. Source cleanup must preserve the three ignored original inputs and unrelated user edits. No old media belongs in the replacement's active source assets.

## Extension compliance

Security Baseline (SECURITY-01 through SECURITY-15): N/A, disabled by Q3 B. Property-Based Testing: N/A, disabled by Q4 C. User privacy remains mandatory; this design includes local-reference isolation and explicit public-certificate selection. No private source contents are included. Implementation verification is pending.
