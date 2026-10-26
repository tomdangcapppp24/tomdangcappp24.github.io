# Materials portfolio logical components

Status: approved with "approve and continue".

| Component | Responsibility | Inputs and outputs | Quality coverage |
| --- | --- | --- | --- |
| Private local references | Preserve original resume/archives and any isolated review copies outside public inputs. | Local review only; never imported by App. | NFR-01 |
| Offline certificate review | Inspect all five PDFs and decide publish/withhold. | Source PDFs to safe decision manifest and approved public copies only. | NFR-02 |
| Public data and certificate registry | Supply curated public facts and explicit approved asset URLs. | Local safe copy and approved PDFs to section rendering. | NFR-01/02/10 |
| Semantic portfolio shell | Compose five sections and native navigation; normalize legacy hashes. | Public content and fixed section IDs to accessible page. | NFR-03/04/08 |
| Responsive styles and illustrations | Apply materials-notebook composition, contrast, fluid sizing and reduced motion. | CSS/local SVG to readable visuals with conceptual captions. | NFR-04/05/06/07 |
| Vite static build | Compile only active application inputs and base-aware assets. | Public application to fresh dist. | NFR-07/09 |
| Verification workflow | Review Git changes and build inventory, run tests/builds and record real limits. | Source/build outputs to evidence, not private content dumps. | NFR-01 through NFR-10 |
| Existing Pages workflow | Deploy the verified static artifact using existing repository-base handling. | dist to GitHub Pages when deployment is authorized by the workflow. | NFR-09 |

## Data flow

1. The maintainer reads local source materials privately.
2. Only safe public facts and approved ordinary certificates cross into public source assets.
3. App renders public data; native anchors navigate and activate certificate links.
4. Vite produces the deployment artifact using the configured base.
5. Verification examines both source/Git changes and dist before handoff or publication.

The browser has no connection to private local references. The certificate decision manifest is documentation, not a source index or download endpoint exposed to visitors. No application-server, queue, database, cache, authentication or logging service is added. Private data is avoided rather than collected and hidden behind client-side controls.

## Failure boundaries

Withhold uncertain documents; render an achievement without a link. Normalize obsolete hashes without restoring old routes. Preserve ordinary content if an optional PDF is unavailable. Treat a failed build, source-privacy check or public-asset allowlist check as unresolved work before release. Report unavailable browser verification accurately.

## Compliance and validation

Both optional extensions are N/A because disabled. User privacy remains mandatory and is reflected in the one-way publication boundary. No private source contents appear here. Plain Markdown tables and text were validated before creation; the numbered flow is the accessible visualization and requires no diagram parser. Implementation checks remain pending.
