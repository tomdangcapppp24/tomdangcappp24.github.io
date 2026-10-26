import { describe, expect, it } from "vitest";
import { normalizePortfolioHash } from "./portfolioHash";

describe("static portfolio entry points", () => {
  it.each([
    "",
    "#home",
    "#research",
    "#foundations",
    "#recognition",
    "#community",
    "#main",
  ])("retains the public destination %s", (hash) => {
    expect(normalizePortfolioHash(hash)).toBe(hash);
  });
  it.each([
    "#/talks/nus-cs",
    "#/journal/old-post",
    "#unknown",
    "#<script>",
    "#%E0%A4%A",
    "#https://example.com",
  ])("safely replaces the unsupported destination %s", (hash) => {
    expect(normalizePortfolioHash(hash)).toBe("#home");
  });
});
