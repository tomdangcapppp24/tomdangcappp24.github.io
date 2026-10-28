# Materials portfolio integration checks

This is one frontend unit with no service/API/database integration. The relevant boundaries are App/sections, navigation/public content, reviewed documents, Vite base paths and production delivery.

## Component integration

Run `npm test -- src/App.test.tsx`. Its ten tests are included in the total 23 tests, not an additional test total. Verify root identity and anchor destinations; completed/in-progress coursework; conceptual illustration labels; five public document actions; six inline page images; absent-document fallback; modal close/scroll restoration; legacy hash behavior; and animation controls/preferences.

## Production asset integration

Run the root/subpath build sequence in [build instructions](build-instructions.md). `npm run verify:public` checks source/build inventories, original-input exclusion, exact PDF/JPEG allowlists and emitted entry/document/preview paths. All six preview images must load and enlargement must use the matching approved PDF.

## Browser boundary

Use [end-to-end instructions](e2e-test-instructions.md) to check actual PDF responses, lazy loading, focus restoration, responsive layouts and motion. A passing jsdom test is not proof of PDF rendering, responsive geometry or actual animation movement. Stop the owned preview server after review. Never expose private review directories through the server.
