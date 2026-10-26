# Materials portfolio technology decisions

Status: approved as part of NFR Requirements with "approve and continue".

| Area | Decision | Rationale |
| --- | --- | --- |
| Rendering | Retain React and TypeScript with Vite | Fits the existing package and approved static component design. |
| Layout and visuals | Native HTML semantics, CSS and local SVG | Supports the custom materials-notebook direction without a new rendering or animation library. |
| Content | Typed local public copy | Makes safe source selection explicit; no runtime DOCX/ZIP processing or raw-source publication. |
| Documents | Explicit imports of individually approved PDF assets | Vite handles base-aware URLs; a small certificate registry is reviewable and avoids bulk file discovery. |
| Navigation | Ordinary section anchors with limited legacy-hash normalization | No router dependency or server rewrite is required for the agreed experience. |
| Fonts and runtime resources | System typography or verified local assets | Avoids third-party runtime font requests and keeps load self-contained. |
| Hosting | Retain existing GitHub Pages/Actions static build | No hosting migration or infrastructure resources required. |
| Testing | Retain existing Vitest/Testing Library toolchain where used | Supports meaningful navigation, rendering and document-link checks without adding a test framework. |
| Dependency management | Keep lockfile-based installation; remove obsolete packages when retirement makes them unused | Supports reproducible builds and the agreed lightweight replacement. No version upgrade is proposed here. |
| Browser and PDF tooling | Use available local tooling during implementation; isolate private document processing from public paths | Availability has not yet been established. Withhold documents whose safety cannot be verified and report browser-check limits. |

The old template/theme provider, Markdown renderer, icon packages or Tailwind dependencies may become unnecessary after replacement. Determine actual usage during Code Generation before removing them; update the manifest and lockfile consistently. Preserve React StrictMode, the existing build commands and GitHub Pages base behavior where applicable.

No backend, API client, database, auth provider, analytics or secret-management dependency is needed. This decision does not claim dependency versions are current or vulnerability-scanned. Package installation and production measurements remain pending.

## Extension compliance

Security Baseline and PBT are N/A because explicitly disabled. Mandatory privacy is implemented through safe public data and individually reviewed asset inputs, not browser access controls for private originals. No private content is included in this artifact.
