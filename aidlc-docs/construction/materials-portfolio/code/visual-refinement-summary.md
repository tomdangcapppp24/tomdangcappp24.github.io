# Reference-inspired visual refinement

The user requested visual improvements based on https://beetranngoclinhanh-cmyk.github.io/. The reference was inspected directly in local Chrome. Its warm editorial rhythm, framed artwork, personal statements and evidence cards informed an original copper/sage treatment for Duc Anh. No reference images, documents or personal facts were copied.

## Changes

- `src/components/materials/PortfolioSections.tsx`: framed lattice composition and notebook label, secondary foundations anchor, concise personal statement, research-figure label and refined footer hierarchy.
- `src/App.css`: translucent header, circular monogram, arched specimen frame, inset dark research panel, paired education cards, two-column certificate gallery, textured community feature and responsive refinements. Narrow-screen education overflow resolved with explicit shrinking grid columns.
- `src/index.css`: warmer ivory and a system-font stack. No external font request or dependency added.

The compact greeting, factual content, conceptual science labels, six direct certificate previews, five PDF links, native dialog and animation controls remain functional.

## Validation

- 23 existing tests pass.
- Root and `/tomdangcappp24.github.io/` production builds pass.
- Both public-asset verifications pass: five approved PDFs, six approved images, valid production paths and excluded original sources.
- Chrome at 320, 390, 768, 1024 and 1440 CSS pixels: no horizontal overflow, all six images decode, all four navigation targets remain unobscured.
- Five document links return PDF/HTTP 200; second-page certificate action opens the native dialog, Escape closes it and focus returns to the initiating button.
- Reduced motion disables animation; manual pause/resume works after restoring the system preference. Secondary foundations anchor works. No uncaught browser errors.
- Prettier and `git diff --check` pass.

Browser screenshots and machine-readable results are local under `/private/tmp/bui-duc-anh-review/visual-refresh-*`. Desktop/mobile screenshots were reviewed. These are browser layout/interaction checks, not a full assistive-technology or cross-browser audit.

## Handoff

Local preview: http://127.0.0.1:4173/. Changes are local and ready for review; no commit, push or deployment was performed for this amendment. Existing uncommitted documentation was preserved. Both optional extensions remain disabled and were skipped; mandatory document privacy checks passed.

## Hero spacing review correction

User screenshot identified excess horizontal space between introduction and illustration. Constrained the desktop columns to 480px and 460px, centered the pair, set a 48px gap and allowed intro copy to use its full 480px column. Removed the redundant wide-screen gap override and right alignment. Chrome verified 48px gaps at 1440/1920px, 32px at 768px and stacking at 320px, without overflow. Production build and public-asset checks pass. Final screenshot: `/private/tmp/bui-duc-anh-review/hero-gap-fixed.png`.

## Hero proportion correction

The user found the gap-only revision disproportionate. Superseding the previous fixed-column arrangement, the hero now uses a shared 1040px container, flexible text column, 400px artwork column and 64px desktop gap. Reduced the lattice SVG maximum height from 340px to 260px; tightened frame padding, label size/rotation and the question caption. Preserved greeting typography and content. At 1440px the text block is 421px tall and artwork stack 488px tall, compared with the previously dominant taller illustration. Chrome at 320/390/768/1024/1440/1920px has no overflow and text aligns with its section top line. Desktop screenshot reviewed at `/private/tmp/bui-duc-anh-review/hero-proportions-1440.png`. Production build, public-asset checks, formatting and diff checks pass. Local preview updated; no commit or publication.

## Match introduction and research section scale

Latest user screenshot requested matching first/second section size. Removed the hero-only 1040px cap. Hero now matches the research inner content width/left edge, accounting for its inset outer panel and responsive padding. Both use two equal desktop columns; introduction reading size is 17px, matching research, with existing mobile 15px retained. Artwork fills its column with a 300px maximum SVG height (260px on mobile). Browser checks at 320/390/768/1024/1440/1920px confirmed identical content widths and left edges within 1px and no horizontal overflow. At 1440px both are 1280px wide with 80px left margins. Reviewed combined screenshot `/private/tmp/bui-duc-anh-review/hero-research-matching-width.png`. Production build, public-asset verification, formatting and diff checks pass. Existing preview updated; no commit or publication.

## Larger, vertical lattice panel

Latest user request targets the lattice frame. Removed desktop/mobile SVG height caps to let the lattice fill the frame at its native aspect ratio and increased frame padding. Desktop panel now measures 608 × 708px, with a substantially larger lattice. Chrome at 320/390/768/1024/1440/1920px confirms portrait frames, no horizontal overflow and preserved matching introduction/research content edges. Production build, public-asset verification, formatting and diff checks pass. Screenshot reviewed at `/private/tmp/bui-duc-anh-review/vertical-lattice-1440.png`. Preview updated locally; no deployment.
