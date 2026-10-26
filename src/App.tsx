import { useEffect } from "react";
import {
  CommunitySection,
  FoundationsSection,
  Introduction,
  RecognitionSection,
  ResearchSection,
  SiteFooter,
  SiteHeader,
} from "./components/materials/PortfolioSections";
import { normalizePortfolioHash } from "./utils/portfolioHash";
import "./App.css";

export default function App() {
  useEffect(() => {
    const normalize = () => {
      const hash = normalizePortfolioHash(window.location.hash);
      if (hash !== window.location.hash) {
        window.history.replaceState(
          null,
          "",
          `${window.location.pathname}${window.location.search}${hash}`,
        );
        document
          .getElementById("home")
          ?.scrollIntoView({ behavior: "instant" });
      }
    };
    normalize();
    window.addEventListener("hashchange", normalize);
    return () => window.removeEventListener("hashchange", normalize);
  }, []);

  return (
    <>
      <SiteHeader />
      <main id="main" tabIndex={-1}>
        <Introduction />
        <ResearchSection />
        <FoundationsSection />
        <RecognitionSection />
        <CommunitySection />
      </main>
      <SiteFooter />
    </>
  );
}
