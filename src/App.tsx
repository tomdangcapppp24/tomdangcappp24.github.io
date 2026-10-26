import { useEffect, useState } from "react";
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
  const [motionRequested, setMotionRequested] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  const motionEnabled = motionRequested && !reducedMotion;

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReducedMotion(preference.matches);
    preference.addEventListener("change", sync);
    return () => preference.removeEventListener("change", sync);
  }, []);

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
    <div
      className="portfolio-site"
      data-motion={motionEnabled ? "playing" : "paused"}
    >
      <SiteHeader />
      <main id="main" tabIndex={-1}>
        <Introduction
          motionEnabled={motionEnabled}
          reducedMotion={reducedMotion}
          onToggleMotion={() => setMotionRequested((current) => !current)}
        />
        <ResearchSection />
        <FoundationsSection />
        <RecognitionSection />
        <CommunitySection />
      </main>
      <SiteFooter />
    </div>
  );
}
