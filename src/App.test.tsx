import { StrictMode } from "react";
import { afterEach, beforeAll, describe, expect, it } from "vitest";
import {
  cleanup,
  fireEvent,
  render,
  screen,
  within,
} from "@testing-library/react";
import App from "./App";
import { RecognitionSection } from "./components/materials/PortfolioSections";
import { achievements } from "./data/materialsCertificates";

// jsdom has no native modal-dialog implementation; browser QA checks real focus.
beforeAll(() => {
  HTMLDialogElement.prototype.showModal = function () {
    this.setAttribute("open", "");
  };
  HTMLDialogElement.prototype.close = function () {
    this.removeAttribute("open");
    this.dispatchEvent(new Event("close"));
  };
});

afterEach(() => {
  cleanup();
  window.history.replaceState(null, "", "/");
});

describe("materials science portfolio", () => {
  it("introduces the student and gives every primary link a real destination", () => {
    render(<App />);
    expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(1);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      /Hi, I’m Duc Anh/,
    );
    expect(
      screen.getByText(/A-level student · Nguyen Sieu/),
    ).toBeInTheDocument();
    const navigation = screen.getByRole("navigation", {
      name: "Main navigation",
    });
    for (const link of within(navigation).getAllByRole("link")) {
      const href = link.getAttribute("href")!;
      expect(document.getElementById(href.slice(1))).not.toBeNull();
    }
    expect(
      screen.getByRole("link", { name: /Explore the project/ }),
    ).toHaveAttribute("href", "#research");
    expect(
      screen.getByRole("link", { name: "Skip to content" }),
    ).toHaveAttribute("href", "#main");
  });

  it("separates ongoing study and explanatory figures from completed achievements", () => {
    render(<App />);
    expect(screen.getByText("Specialization in progress")).toBeInTheDocument();
    expect(screen.getAllByText("COMPLETED")).toHaveLength(2);
    expect(screen.getByText("Co-developer")).toBeInTheDocument();
    expect(
      screen.getByText("Conceptual illustration · not simulation output"),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("img", { name: /Conceptual crystal lattice/ }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("img", { name: /Conceptual thin-film deposition/ }),
    ).toBeInTheDocument();
  });

  it("opens only the reviewed certificates and does not eagerly embed PDFs", () => {
    const { container } = render(<App />);
    const links = screen.getAllByRole("link", {
      name: /certificate copy \(PDF, new tab\)/,
    });
    expect(links).toHaveLength(5);
    for (const achievement of achievements) {
      const link = screen.getByTestId(`certificate-${achievement.id}-link`);
      expect(link).toHaveAttribute("href", achievement.href);
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
    }
    expect(container.querySelector("iframe, object, embed, form")).toBeNull();
    expect(
      container.querySelector(
        'a[href^="mailto:"], a[href*=".docx"], a[href*=".zip"]',
      ),
    ).toBeNull();
  });

  it("retains factual recognition without a download when a document is withheld", () => {
    render(
      <RecognitionSection
        entries={[
          {
            id: "withheld",
            category: "Science",
            title: "Documented achievement",
            description: "A safe factual summary.",
            year: "2025",
          },
        ]}
      />,
    );
    expect(
      screen.getByRole("heading", { name: "Documented achievement" }),
    ).toBeInTheDocument();
    expect(screen.queryByRole("link")).not.toBeInTheDocument();
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
    expect(screen.queryByRole("img")).not.toBeInTheDocument();
  });

  it("shows all six approved certificate pages directly and lets readers enlarge one", () => {
    render(<App />);
    const recognition = screen.getByRole("region", {
      name: /Moments of progress. More to learn./,
    });
    const images = within(recognition).getAllByRole("img");
    expect(images).toHaveLength(6);
    const approvedImages = achievements.flatMap(
      (entry) => entry.previewImages ?? [],
    );
    for (const image of images) {
      expect(approvedImages).toContain(image.getAttribute("src"));
      expect(image).toHaveAttribute("loading", "lazy");
    }
    fireEvent.click(screen.getByTestId("certificate-asmo-page-2-button"));
    expect(
      screen.getByRole("dialog", { name: achievements[0].title }),
    ).toBeInTheDocument();
    fireEvent.click(screen.getByTestId("certificate-preview-close-button"));
  });

  it("previews only the selected approved certificate on demand and restores scrolling", () => {
    render(
      <StrictMode>
        <App />
      </StrictMode>,
    );
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    expect(document.querySelector("iframe")).toBeNull();
    const initialOverflow = document.body.style.overflow;
    for (const achievement of achievements) {
      fireEvent.click(
        screen.getByTestId(`certificate-${achievement.id}-preview-button`),
      );
      const dialog = screen.getByRole("dialog", { name: achievement.title });
      expect(
        within(dialog).getByTitle(
          `${achievement.title} — certificate PDF preview`,
        ),
      ).toHaveAttribute("src", `${achievement.href}#view=FitH`);
      expect(
        within(dialog).getByRole("link", { name: /Open PDF/ }),
      ).toHaveAttribute("href", achievement.href);
      expect(document.body.style.overflow).toBe("hidden");
      fireEvent.click(
        within(dialog).getByRole("button", {
          name: "Close certificate preview",
        }),
      );
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
      expect(document.querySelector("iframe")).toBeNull();
      expect(document.body.style.overflow).toBe(initialOverflow);
    }
  });

  it("replaces a legacy entry with the new site while retaining query and path", () => {
    window.history.replaceState(
      null,
      "",
      "/portfolio/?from=legacy#/talks/nus-cs",
    );
    render(<App />);
    expect(window.location.pathname).toBe("/portfolio/");
    expect(window.location.search).toBe("?from=legacy");
    expect(window.location.hash).toBe("#home");
    expect(
      screen.getByRole("heading", { name: /How does a thin film grow/ }),
    ).toBeInTheDocument();
  });

  it("keeps a direct section link and the printed certificate edition", () => {
    window.history.replaceState(null, "", "/#recognition");
    render(<App />);
    expect(window.location.hash).toBe("#recognition");
    const row = screen
      .getByRole("heading", { name: "International Chemistry Quiz — Credit" })
      .closest("article")!;
    expect(within(row).getByText("2025")).toBeInTheDocument();
    expect(
      screen.getByText("BOOKS OPEN THE DOORS"),
    ).toBeInTheDocument();
  });
});
