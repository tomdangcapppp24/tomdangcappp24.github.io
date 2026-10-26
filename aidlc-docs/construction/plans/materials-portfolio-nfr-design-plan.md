# Materials portfolio NFR design plan

Authority: approved NFR Requirements, application design, requirements and stories. One static portfolio unit; no new product decisions are introduced.

## Category assessment

| Category | Applicable evidence and design decision | Clarification |
| --- | --- | --- |
| Resilience | NFR-08: ordinary anchors and text-only fallback for withheld documents. No network retry/circuit breaker is needed without an API. | Resolved by approved scope. |
| Scalability | Static Pages hosting; no server, database or per-user state. | No new load or infrastructure target is needed. |
| Performance | NFR-07: small entry bundles, system typography and PDF loading only on activation. | Approved budgets supply the target. |
| Security/privacy | NFR-01/02/03: local-reference isolation, explicit certificate allowlist and source/build review. | Approved publication policy supplies the boundary. Optional Security Baseline stays disabled. |
| Logical components | App, public content, explicit certificate registry and offline verification. No queues, caches or infrastructure services. | Approved application design supplies the components. |

All categories were evaluated. No unresolved requirement needs a further question; no unanswered answer tags are created.

## Execution

- [x] Load NFR Design detailed rules and approved NFR Requirements/technology choices.
- [x] Evaluate all five pattern categories against explicit scope evidence.
- [x] Design controls for every NFR-01 through NFR-10 criterion.
- [x] Generate `materials-portfolio/nfr-design/nfr-design-patterns.md`.
- [x] Generate `materials-portfolio/nfr-design/logical-components.md`.
- [x] Validate Markdown, rule mappings and privacy boundaries before creation.
- [x] Update state/execution checkboxes and append the review prompt in this interaction.
- [x] Obtain explicit NFR Design approval before Code Generation planning.

Security Baseline and PBT: N/A, explicitly disabled. Mandatory user privacy is covered in the design; implementation checks remain pending.
