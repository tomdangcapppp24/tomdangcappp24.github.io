# Bui Duc Anh — Exploring Materials Science

An English student portfolio about materials science, semiconductor modelling, academic development, and community contribution. Built with React, TypeScript and Vite for GitHub Pages.

The visual design uses ivory, graphite and copper, with local conceptual crystal-lattice and thin-film illustrations. The figures explain scientific ideas; they are not experimental results or output from the student's simulation.

## Run locally

Use a Node.js version compatible with the locked Vite toolchain (the Pages workflow uses Node 20). From this repository:

```sh
npm ci
npm run dev
```

Open the Local URL printed by Vite. Stop the server with Ctrl+C.

## Edit the portfolio

- `src/data/materialsPortfolio.ts`: public introduction, scientific project, academic study and community contributions.
- `src/data/materialsCertificates.ts`: explicit links to reviewed public certificate copies.
- `src/components/materials/PortfolioSections.tsx`: page sections, navigation and document links.
- `src/components/materials/ScientificIllustration.tsx`: conceptual SVG figures.
- `src/components/materials/CertificatePreview.tsx`: optional enlargement dialog for inline certificate pages, with close controls and direct-PDF fallback.
- `src/index.css` and `src/App.css`: typography, responsive layout, color and motion preferences.
- `index.html`: browser title and description.

Keep factual claims supported by the supplied sources. Completed coursework and an ongoing specialization are separate. The ICQ entry follows the year printed on its certificate. Do not invent contact accounts, project results, a portrait or a live demonstration.

## Public documents and private references

Original source documents and archives are local references, not public downloads. Their exact paths are ignored by Git. Keep any additional private working documents in the ignored `private-source-materials/` directory, outside `public/`. Never import them into the application or copy them into a deployment artifact.

Only the five individually reviewed public certificate copies and six page-preview images derived from those copies under `src/assets/certificates/bui-duc-anh/` are approved. Public copies are flattened scans, with selected codes/identifiers and original metadata removed. Ordinary recipient names, achievements and issuer signatures remain visible. Accessible achievement descriptions accompany the image-only PDF copies.

For a new or changed certificate:

1. Review every page, text layer, metadata and embedded content privately. Withhold any uncertain/private document.
2. Prepare and independently inspect the public copy. Do not publish an unsafe original alongside a sanitized version.
3. Update the safe decision manifest at `aidlc-docs/construction/materials-portfolio/code/certificate-review.md` without recording sensitive values.
4. Add an explicit public import and update the reviewed hash inventory in `scripts/verify-public-assets.mjs` only after review. A missing document URL should leave a factual text entry.
5. Run the checks below and inspect the complete Git changes before committing.

Ignore rules do not remove previously committed files or erase Git history. The automatic asset check supports manual review; it cannot identify every possible secret or sensitive claim.

## Check before publication

```sh
npm test
npm run build
npm run verify:public
```

The asset check compares certificate hashes, checks for private source files in proposed Git content and verifies the fresh build's entry/document paths. Review all changed files and public document contents as well. Check keyboard navigation, narrow screens, zoom, and reduced-motion behavior in a browser.

To validate a repository-subpath deployment locally:

```sh
VITE_BASE_PATH=/portfolio/ npm run build
VITE_BASE_PATH=/portfolio/ npm run verify:public
```

Rebuild for the actual target base before deploying. See [DEPLOYMENT.md](DEPLOYMENT.md) for GitHub Pages configuration. Building locally does not publish the website.
