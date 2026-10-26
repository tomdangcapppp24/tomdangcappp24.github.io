const publicAnchors = new Set([
  "#home",
  "#research",
  "#foundations",
  "#recognition",
  "#community",
  "#main",
]);

export function normalizePortfolioHash(hash: string): string {
  return hash === "" || publicAnchors.has(hash) ? hash : "#home";
}
