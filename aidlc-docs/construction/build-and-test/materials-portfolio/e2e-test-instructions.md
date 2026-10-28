# Materials portfolio browser workflows

Start the production build locally:

```sh
npm run build
npm run preview -- --host 127.0.0.1
```

Open the printed local URL, normally http://127.0.0.1:4173/. Keep the server bound locally. Stop it with Ctrl+C after review. Browser review requires a real browser; jsdom does not replace these checks.

## Scenarios

1. Open root and an old talk/journal hash. Confirm the current identity, safe home fallback and preserved pathname/query.
2. Use Tab/Enter on Skip to content; focus should reach main. Activate each navigation link and the project action; headings remain clear of the header.
3. Read academic progress and conceptual-illustration labels. Ongoing study is not presented as complete and animation is not presented as real model output.
4. Scroll through Recognition. All six safe page images display and are centered. Activate each certificate preview and direct PDF link; the corresponding reviewed PDF returns successfully.
5. Close enlargement with Escape, close button and backdrop. Focus returns to the trigger and scrolling is restored. Test a page-image trigger as well as the Enlarge button.
6. Observe lattice/film motion; pause and resume it. Offscreen figures pause. Change reduced-motion settings while the page is open: animation stops and the control reflects the device preference.
7. Check 320px, 768px and 1440px widths for usable controls and no horizontal overflow. Check text reflow near 200% zoom. Record any browser/PDF-viewer limitations rather than assuming success.
8. Inspect network activity: no initial PDFs or external runtime requests. Inline images are lazy-loaded; PDF viewing occurs only after activation.

## Existing evidence and limits

Local Chrome checks during the latest code reviews verified the core navigation/PDF/dialog flows, centering, all six images, live motion/reduced-motion behavior and the three viewport widths. The final animation code had no uncaught browser errors. Evidence is summarized in the current build-and-test summary.

A 200% equivalent reflow check used 720 CSS pixels at 2x device scale for a 1440 physical-pixel page; browser-toolbar zoom was not directly exercised. A complete screen-reader audit and cross-browser matrix were not performed. Embedded PDF support varies; Open PDF remains a visible fallback. Private temporary browser tools/results are session-local and are not required runtime dependencies or deployed resources.
