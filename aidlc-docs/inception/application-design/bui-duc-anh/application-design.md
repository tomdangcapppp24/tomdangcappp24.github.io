# Bui Duc Anh application design

Status: approved by the user with "approve and continue".

## Experience and structure

Create one English editorial portfolio about an A-level student's exploration of materials science. Use ivory surfaces, graphite text, copper accents and a restrained technical grid. A prominent introduction leads into a richer project section, academic foundations, recognition, and community contributions. Alternate section composition so the page does not become a sequence of identical cards.

The scientific visual vocabulary uses a crystal lattice and a thin-film cross section. These are conceptual explanations. Do not invent experimental images, data, simulation outputs, a portrait or a working project demo. Use system fonts or locally available font resources to keep the site self-contained.

## Components and contracts

[Components](components.md) assign responsibilities to App, header/footer, five content sections, scientific illustrations, public copy and a public certificate registry. [Interfaces](component-methods.md) define their inputs/outputs and stable section IDs. Components read typed static content; the certificate registry contains only explicitly approved asset imports. Optional missing document URLs produce text-only entries.

## Orchestration and dependencies

[Services](services.md) define browser rendering and offline document publication; no backend service is needed. [Dependencies](component-dependency.md) map the entry point through sections and public assets into the static build, with a text data-flow visualization. Runtime routing is ordinary anchor navigation. Unknown or old talk/journal hashes safely resolve to the new home section; the former site's features are removed from the active application.

## Accessibility and responsive behavior

Provide a skip link, one main heading, labeled section headings, semantic landmarks, visible focus, sufficient contrast and useful alternatives for scientific figures. Avoid hiding navigation on mobile by using wrapping links. Keep target headings clear of sticky navigation. Prefer static illustration; respect reduced motion for any decorative animation. Document links identify both their achievement and PDF format.

## Content and privacy boundaries

Use only source-supported public facts. Show ongoing study honestly, omit incomplete grades, and do not copy unavailable contact information or the prior owner's identity. Review every source PDF before publishing any certificate. Recipient name and achievement are expected ordinary certificate content; sensitive identifiers and private verification data remain excluded. Withhold uncertain files and preserve safe descriptions.

Original inputs stay ignored and local. Inspect source/Git changes and production output separately. Retire old active media and unused application code without rewriting historic commits or the append-only audit. No public action links to raw sources, a private directory or unreviewed documents.

## Traceability and completeness

Introduction and metadata cover US-01; research and conceptual figures cover US-02; foundations cover US-03; recognition and document review cover US-04; community covers US-05; semantic navigation and CSS cover US-06; entry-point replacement and hash handling cover US-07; offline allowlisting and Git/build inspection cover US-08. NFR Requirements and NFR Design will refine measurable acceptance and verification controls before Code Generation.

This design introduces no new product capabilities, persisted models or infrastructure. Remaining implementation questions are routine choices within these boundaries; no new factual clarification is needed. All five design artifacts are present and mutually consistent. Implementation, PDF review and browser testing remain pending.

## Extension compliance

Security Baseline (SECURITY-01 through SECURITY-15): N/A, disabled by Q3 B. Property-Based Testing: N/A, disabled by Q4 C. User privacy remains mandatory; this design includes local-reference isolation and explicit public-certificate selection. No private source contents are included. Implementation verification is pending.

## Readability and certificate-preview review revision

Authorized by the user's generated-code review request. Primary reading text and navigation/metadata/control sizes are enlarged. Recognition now owns transient selected-certificate state and mounts a native modal dialog only after a Preview action. The dialog uses the approved public PDF URL, a meaningful title, close/Escape behavior and direct-PDF fallback. Native modality supplies focus containment and return; body scrolling is restored on closure. No persistence, unreviewed asset or initial document load is added.

## Direct-preview and introduction refinement

The subsequent user review requests previews directly on the page and a smaller opening section. Six lazy-loaded JPEG previews, derived only from approved public PDFs, now appear inline in Recognition. Each can be enlarged using the existing modal, and direct PDF access remains. Hero typography is reduced to an 88px desktop headline maximum and a 52–72px mobile range; intro copy is 16px desktop and 15px mobile. Other sections retain larger reading text. No private original is made public. This explicit revision supersedes the earlier modal-only presentation.

## Authorized scientific animation refinement

The user requested animation on the landing page and thin-film project and a tighter greeting. App now owns a non-persistent motion preference and observes the device reduced-motion setting. Introduction presents a motion toggle; ScientificIllustration uses CSS motion and pauses offscreen via IntersectionObserver. All animations are illustrative, preserve accessible descriptions and can stop without hiding essential content. Greeting lines are grouped more tightly. No scientific simulator, result dataset, backend or new public asset is added.
