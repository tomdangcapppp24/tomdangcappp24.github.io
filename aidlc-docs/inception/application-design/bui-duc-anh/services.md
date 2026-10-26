# Services and orchestration

No server-side service layer is introduced. Static rendering and an offline publication workflow cover this site.

## Runtime composition

The entry point mounts App in React StrictMode. App composes public sections; sections read local public data and the explicit certificate registry. Browser anchors provide navigation and the browser opens public PDFs. No runtime fetch reads the resume, ZIPs or private directories. No contact backend, authentication, analytics or database exists.

## Offline document publication boundary

Review source PDFs locally outside public paths. Inspect visible pages, extracted text and metadata. Record each source file's safe publish/withhold decision in a documentation manifest without sensitive values. Copy only approved ordinary PDFs or reviewed safe derivatives into the public certificate directory and import each explicitly. If review cannot establish safety, withhold the document and use a factual description.

This is a maintainer workflow, not a browser feature or source archive extractor shipped with the application. A sanitized preview never makes an unsafe original publishable. The original resume and ZIPs remain local and ignored.

## Build and publication

Vite resolves explicit asset imports with the existing GitHub Pages base path. Inspect both the proposed Git changes and dist: an unused source asset can still leak through Git, while a file in public can reach dist without a code import. Clear stale build output before validating a fresh build. Do not commit or publish until the required privacy checks and applicable review gates are complete.

## Extension compliance

Security Baseline (SECURITY-01 through SECURITY-15): N/A, disabled by Q3 B. Property-Based Testing: N/A, disabled by Q4 C. User privacy remains mandatory; this design includes local-reference isolation and explicit public-certificate selection. No private source contents are included. Implementation verification is pending.
