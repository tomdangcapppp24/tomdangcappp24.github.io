# Bui Duc Anh website: requirements choices

The proposed direction is documented in [the workspace plan](../plans/bui-duc-anh-workspace-plan.md). Fill each `[Answer]:` with a letter. You can also reply in chat with the numbered choices.

## Question 1: Existing website

How should the new portfolio relate to the current owner's portfolio and NUS talk?

A) Replace the public website with Bui Duc Anh's custom materials science portfolio (recommended for this repository).
B) Add Bui Duc Anh's portfolio at a separate route and preserve the current site's public pages.
X) Other (describe after the answer tag).

[Answer]: A

## Question 2: Certificates and privacy

Which document policy should the implementation use? In every option, keep the original resume, archives and private credentials out of GitHub and deployed output. Use their safe factual content for writing only.

A) Publish only individually reviewed ordinary competition, club and volunteer certificates from the ZIPs; withhold any document containing sensitive information (recommended).
B) Show achievements and certificate descriptions as text only; publish no certificate files.
X) Other (describe the exact documents to publish after the answer tag).

[Answer]: A

## Question 3: Security Extensions

Should security extension rules be enforced for this project? The requested privacy protection applies in either case.

A) Yes — enforce all SECURITY rules as blocking constraints (recommended for production-grade applications).
B) No — skip the optional SECURITY extension rules.
X) Other (describe after the answer tag).

[Answer]: B

## Question 4: Property-Based Testing Extension

Should property-based testing (PBT) rules be enforced for this project?

A) Yes — enforce all PBT rules as blocking constraints.
B) Partial — enforce PBT rules only for pure functions and serialization round-trips.
C) No — skip PBT rules (recommended for this presentation-focused website; ordinary build and relevant interaction/privacy verification still apply).
X) Other (describe after the answer tag).

[Answer]: C
