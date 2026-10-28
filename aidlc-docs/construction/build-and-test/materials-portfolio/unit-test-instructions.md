# Materials portfolio automated tests

Run all generated unit and component tests:

```sh
npm test
```

Verified result: 23 passed, zero failed, across two test files. Thirteen parameterized cases in `src/utils/portfolioHash.test.ts` cover valid, legacy and malformed hashes. Ten tests in `src/App.test.tsx` cover component integration: identity/navigation, academic progress, conceptual figures, public certificate links, direct previews, modal lifecycle, source-safe fallback, motion controls and reduced-motion startup.

To isolate failures:

```sh
npm test -- src/utils/portfolioHash.test.ts
npm test -- src/App.test.tsx
```

Fix the earliest actual assertion or runtime failure, then rerun the complete suite. These tests use Vitest/jsdom and Testing Library. Results are printed to the terminal. Coverage instrumentation is not configured, so no coverage percentage is claimed. Modal methods are test doubles in jsdom; real focus behavior and visual layout require the browser checks in the end-to-end instructions. Do not put raw private sources into fixtures or test output.
