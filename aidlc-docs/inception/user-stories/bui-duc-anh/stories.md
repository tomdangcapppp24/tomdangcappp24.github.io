# Bui Duc Anh portfolio stories

Status: approved by the user with "approve and continue" on 2026-10-26.

Sources: [approved requirements](../../requirements/bui-duc-anh-requirements.md) and [personas](personas.md).

## US-01: Understand his scientific direction

As an admissions reader or scientifically interested peer, I want a clear introduction to Bui Duc Anh, so that I can understand his interests and the purpose of his portfolio.

Personas: P1, P2. Requirements: FR-01, FR-02, FR-08.

- Given the root page, when the introduction appears, then it identifies an A-level student interested in materials science and engineering without implying professional employment.
- Given the loaded page, when its visible identity and browser metadata are read, then the name, English language and description match this portfolio.
- Given the primary project action, when activated, then it reaches the featured project content.

## US-02: Understand the thin-film project

As a scientifically interested peer, I want to understand his contribution to the semiconductor thin-film simulation, so that I can assess the scope of his computational exploration.

Personas: P2, P1. Requirement: FR-03.

- Given the featured project, when read, then it identifies his co-developer role, Python Monte Carlo approach, modelled processes and investigated parameters supported by the resume.
- Given a scientific illustration, when displayed, then a nearby label identifies it as conceptual rather than simulation output.
- Given the project claims and actions, when inspected, then they contain no invented results, publications, repositories or live simulator claims.

## US-03: Review academic foundations

As an admissions reader, I want to distinguish completed preparation from ongoing study, so that I can assess academic readiness fairly.

Personas: P1, P2. Requirement: FR-04.

- Given education and skills content, when read, then school, subjects, laboratory practice and computational skills agree with the supplied sources.
- Given an ongoing specialization, when displayed, then it is marked in progress and distinguished from completed courses.
- Given an incomplete grade placeholder in a source, when public content is prepared, then it is omitted without an invented replacement.

## US-04: Review ordinary certificates

As an admissions reader, I want to open selected ordinary certificates, so that I can review evidence for described achievements.

Personas: P1, P3. Requirements: FR-05, FR-06, PR-02, PR-04.

- Given an approved certificate, when listed, then its title and context identify the achievement and its accessible action opens the intended public document using a valid hosted asset path.
- Given the five source PDFs, when publication decisions are made, then each has a visible-content, text and metadata review recorded without sensitive values.
- Given an unsafe or uncertain document, when the section renders, then it exposes no original or preview URL; a safe factual summary may remain.
- Given no certificates pass review, when the section renders, then achievement descriptions remain available without broken links or claims of downloadable evidence.

## US-05: Discover contribution beyond science

As an admissions reader, I want context for leadership, volunteering and extracurricular participation, so that I can understand his contribution beyond academics.

Persona: P1. Requirement: FR-05.

- Given leadership and service entries, when read, then roles, organizations, dates and numerical impact claims are source-supported and distinguish participation from leadership.
- Given club, environmental and basketball experiences, when displayed, then they contain no invented affiliations, testimonials or scientific achievements.

## US-06: Explore accessibly

As a visitor using a phone, keyboard or reduced-motion preference, I want to reach and read all content comfortably, so that my interaction method does not prevent exploration.

Personas: P1, P2. Requirements: FR-02 and visual/interaction requirements.

- Given a navigation link, when activated by keyboard or pointer, then it reaches the intended section with visible focus and an unobscured heading.
- Given a viewport from 320px through desktop widths, when displayed, then text, navigation and certificate actions remain usable without unintended horizontal overflow.
- Given reduced motion is enabled, when browsing, then decorative animation respects the preference and does not interfere with reading.
- Given non-text content, when accessed with assistive technology, then meaningful illustrations have useful alternatives and decoration creates no redundant announcements.

## US-07: See a consistent public identity

As a visitor or portfolio owner, I want all public entry points to represent Bui Duc Anh, so that outdated routes and unavailable contact details do not mislead readers.

Personas: P1, P2, P3. Requirements: FR-01, FR-07, FR-08, PR-05.

- Given an old portfolio, journal or talk hash, when opened, then it resolves safely to the new portfolio without showing the previous owner's public content.
- Given no verified contact account or portrait was supplied, when the site is inspected, then there is no fabricated address, inactive contact form, placeholder account or unrelated portrait.
- Given the public build and active source assets, when inspected, then former-owner documents and unrelated media have been removed from this replacement's active assets and output. Historic commits are not claimed to be erased.

## US-08: Publish safely from private references

As the portfolio owner, I want only approved public content to enter GitHub and deployment artifacts, so that private credentials and local references stay private.

Persona: P3. Requirements: PR-01, PR-02, PR-03, PR-04, PR-06.

- Given the original resume, archives and extracted private documents, when a Git change and production build are prepared, then these inputs are excluded from proposed tracked content and deployed assets.
- Given public code, text, tests, logs, screenshots and document metadata, when reviewed, then they disclose no private credentials, sensitive identifiers, home addresses, birth dates or private verification data.
- Given the public certificate directory, when compared with the review allowlist, then it contains only approved certificates or reviewed safe derivatives, without private originals alongside them.
- Given the running site, when inspected, then it adds no analytics, tracking, authentication, API keys, data collection or application API requests.

## Requirement coverage

| Requirement | Stories |
| --- | --- |
| FR-01 | US-01, US-07 |
| FR-02 | US-01, US-06 |
| FR-03 | US-02 |
| FR-04 | US-03 |
| FR-05 | US-04, US-05 |
| FR-06 | US-04 |
| FR-07 | US-07 |
| FR-08 | US-01, US-07 |
| PR-01 | US-08 |
| PR-02 | US-04, US-08 |
| PR-03 | US-08 |
| PR-04 | US-04, US-08 |
| PR-05 | US-07 |
| PR-06 | US-08 |
| Visual and interaction requirements | US-01, US-02, US-06 |
| Technical quality | US-04, US-06, US-07, US-08 and the later Build and Test stage |

## INVEST review and compliance

Each story has a distinct, independently assessable reader or owner outcome. Implementation and layout remain negotiable within approved requirements. Stories provide clear value, bounded scope suitable for estimation, and observable acceptance criteria. Shared verification can support several stories without coupling their approval. No extra product features or delivery schedule are introduced.

All FR/PR requirements are covered. Security Baseline, SECURITY-01 through SECURITY-15: N/A, disabled. PBT: N/A, disabled. Privacy remains applicable and is covered by US-04, US-07 and US-08; this document contains no private source content. Markdown structure, links and tables were validated before creation. PDF review and implementation verification are pending.
