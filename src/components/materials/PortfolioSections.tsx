import { useCallback, useState } from "react";
import {
  activities,
  foundations,
  introduction,
  research,
  sectionLinks,
} from "../../data/materialsPortfolio";
import { achievements } from "../../data/materialsCertificates";
import type { Achievement } from "../../data/materialsCertificates";
import ScientificIllustration from "./ScientificIllustration";
import CertificatePreview from "./CertificatePreview";

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <span aria-hidden="true" className="arrow">
      {diagonal ? "↗" : "↘"}
    </span>
  );
}

export function SiteHeader() {
  return (
    <header className="site-header">
      <a href="#main" className="skip-link" data-testid="header-skip-link">
        Skip to content
      </a>
      <div className="header-inner page-width">
        <a
          href="#home"
          className="brand"
          data-testid="header-brand-link"
          aria-label="Bui Duc Anh — home"
        >
          <span className="brand-mark" aria-hidden="true">
            da<span>·</span>
          </span>
          <span>
            Bui Duc Anh
            <span className="brand-subtitle">Learning through science.</span>
          </span>
        </a>
        <nav aria-label="Main navigation">
          {sectionLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              data-testid={`header-${link.id}-link`}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <span className="header-location">
          <span className="status-dot" />
          {introduction.location}
        </span>
      </div>
    </header>
  );
}

export function Introduction({
  motionEnabled,
  reducedMotion,
  onToggleMotion,
}: {
  motionEnabled: boolean;
  reducedMotion: boolean;
  onToggleMotion: () => void;
}) {
  return (
    <section
      id="home"
      className="hero page-width"
      aria-labelledby="intro-title"
    >
      <div className="hero-topline">
        <p className="eyebrow">
          <span className="small-cross" aria-hidden="true">
            +
          </span>{" "}
          Materials science & engineering
        </p>
        <div className="hero-controls">
          <span className="mono hero-edition">STUDENT PORTFOLIO / 2026</span>
          <button
            type="button"
            className="motion-toggle"
            onClick={onToggleMotion}
            aria-label="Animations"
            aria-pressed={motionEnabled}
            disabled={reducedMotion}
            title={
              reducedMotion
                ? "Your reduced-motion preference is active"
                : motionEnabled
                  ? "Pause animations"
                  : "Play animations"
            }
            data-testid="hero-motion-toggle-button"
          >
            <span aria-hidden="true">{motionEnabled ? "Ⅱ" : "▷"}</span>
            {reducedMotion
              ? "Reduced motion"
              : motionEnabled
                ? "Motion on"
                : "Motion off"}
          </button>
        </div>
      </div>
      <div className="hero-grid">
        <div className="hero-copy">
          <h1 id="intro-title">
            <span className="hero-greeting">Hi, I’m</span> <em>Duc Anh.</em>
          </h1>
          <p className="hero-intro">{introduction.summary}</p>
          <a
            className="button button-dark"
            href="#research"
            data-testid="hero-research-link"
          >
            Explore the project <Arrow />
          </a>
          <span className="hero-signature">
            Bui Duc Anh <span> / </span> {introduction.role}
          </span>
        </div>
        <div className="hero-science">
          <ScientificIllustration variant="lattice" />
          <div className="hero-note">
            <span className="note-index mono">A QUESTION TO FOLLOW</span>
            <p>
              What changes at the surface? <br />
              What changes in the material?
            </p>
          </div>
        </div>
      </div>
      <div className="interest-strip">
        <span className="mono">AREAS I’M EXPLORING</span>
        {introduction.interests.map((interest) => (
          <span key={interest}>{interest}</span>
        ))}
        <span className="strip-symbol" aria-hidden="true">
          ✳
        </span>
      </div>
    </section>
  );
}

export function ResearchSection() {
  return (
    <section
      id="research"
      className="research-section"
      aria-labelledby="research-title"
    >
      <div className="page-width">
        <div className="section-topline">
          <p className="eyebrow">01 / A closer look</p>
          <span className="mono">FROM A QUESTION TO A MODEL</span>
        </div>
        <div className="research-grid">
          <div className="research-copy">
            <span className="project-kicker">FEATURED PROJECT</span>
            <h2 id="research-title">
              How does a <br />
              <em>thin film</em> grow?
            </h2>
            <p className="research-subtitle">{research.subtitle}</p>
            <p>{research.description}</p>
            <p>{research.contribution}</p>
            <div className="project-meta">
              <span>{research.role}</span>
              <span>{research.period}</span>
            </div>
          </div>
          <div className="research-visual">
            <ScientificIllustration variant="film" />
            <div className="parameter-list">
              <span className="mono">VARIABLES EXPLORED</span>
              {research.parameters.map((p, i) => (
                <span key={p}>
                  <b aria-hidden="true">0{i + 1}</b>
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="process-grid">
          {research.processes.map((p, i) => (
            <article key={p.title}>
              <span className="process-number mono">0{i + 1}</span>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
            </article>
          ))}
        </div>
        <div className="tool-row">
          <span className="mono">TOOLS I’M USING</span>
          {research.tools.map((t) => (
            <span className="tool-tag" key={t}>
              {t}
            </span>
          ))}
          <span className="research-footnote">
            A model to question, compare, and keep improving.
          </span>
        </div>
      </div>
    </section>
  );
}

export function FoundationsSection() {
  return (
    <section
      id="foundations"
      className="foundations-section page-width section-space"
      aria-labelledby="foundations-title"
    >
      <div className="section-topline">
        <p className="eyebrow">02 / Scientific foundations</p>
        <span className="mono">BUILDING THE GROUNDWORK</span>
      </div>
      <div className="section-heading">
        <h2 id="foundations-title">
          Learning the basics. <br />
          <em>Asking better questions.</em>
        </h2>
        <p>
          Mathematics, Chemistry, and Physics give me different ways to approach
          the same problem. I’m building the foundations to connect them.
        </p>
      </div>
      <div className="education-layout">
        <div className="school-block">
          <span className="mono">EDUCATION / {foundations.period}</span>
          <h3>{foundations.school}</h3>
          <p>{foundations.programme}</p>
          <div className="subject-grid">
            {foundations.subjects.map((s) => (
              <div key={s.name}>
                <span>{s.name}</span>
                <strong>{s.grade}</strong>
                <span className="mono">{s.note}</span>
              </div>
            ))}
          </div>
          <p className="igcse-note">{foundations.igcse}</p>
        </div>
        <div className="coursework-block">
          <span className="eyebrow">Continuing the groundwork</span>
          <h3>{foundations.coursework.title}</h3>
          <p className="course-provider">{foundations.coursework.provider}</p>
          <span className="progress-label">
            <span className="status-dot" />
            {foundations.coursework.status}
          </span>
          <p>{foundations.coursework.description}</p>
          <ul className="completed-courses">
            {foundations.coursework.completed.map((c) => (
              <li key={c}>
                <span aria-hidden="true">✓</span>
                {c}
                <span className="mono">COMPLETED</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="skills-grid">
        {foundations.skills.map((s, i) => (
          <article key={s.title}>
            <span className="skill-symbol" aria-hidden="true">
              {["⌁", "⌘", "∑"][i]}
            </span>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function RecognitionSection({
  entries = achievements,
}: {
  entries?: readonly Achievement[];
}) {
  const [preview, setPreview] = useState<Achievement | null>(null);
  const closePreview = useCallback(() => setPreview(null), []);
  return (
    <section
      id="recognition"
      className="recognition-section"
      aria-labelledby="recognition-title"
    >
      <div className="page-width section-space">
        <div className="section-topline">
          <p className="eyebrow">03 / Recognition</p>
          <span className="mono">PART OF THE LEARNING</span>
        </div>
        <div className="section-heading">
          <h2 id="recognition-title">
            Moments of progress. <br />
            <em>More to learn.</em>
          </h2>
          <p>
            A few achievements from my studies and activities, with the
            certificates behind them.
          </p>
        </div>
        <div className="achievement-list">
          {entries.map((entry) => (
            <article className="achievement" key={entry.id}>
              <span className="achievement-year mono">{entry.year}</span>
              <div>
                <span className="achievement-category">{entry.category}</span>
                <h3>{entry.title}</h3>
                <p>{entry.description}</p>
              </div>
              {entry.href && (
                <div className="certificate-actions">
                  <button
                    type="button"
                    className="certificate-preview-button"
                    data-testid={`certificate-${entry.id}-preview-button`}
                    aria-label={`Enlarge ${entry.title} certificate`}
                    aria-haspopup="dialog"
                    onClick={() => setPreview(entry)}
                  >
                    Enlarge <span aria-hidden="true">⊕</span>
                  </button>
                  <a
                    href={entry.href}
                    className="certificate-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid={`certificate-${entry.id}-link`}
                    aria-label={`Open ${entry.title} certificate copy (PDF, new tab)`}
                  >
                    <span>
                      Open <span className="mono">PDF</span>
                    </span>
                    <Arrow diagonal />
                  </a>
                </div>
              )}
              {entry.href && entry.previewImages && (
                <div className="certificate-inline-previews">
                  {entry.previewImages.map((src, index) => (
                    <button
                      type="button"
                      className="certificate-page-preview"
                      key={src}
                      onClick={() => setPreview(entry)}
                      aria-label={`Enlarge ${entry.title} certificate, page ${index + 1}`}
                      data-testid={`certificate-${entry.id}-page-${index + 1}-button`}
                    >
                      <img
                        src={src}
                        alt={`${entry.title} — certificate page ${index + 1}`}
                        loading="lazy"
                        decoding="async"
                      />
                      <span>
                        Page {index + 1} of {entry.previewImages!.length}{" "}
                        <span aria-hidden="true">↗</span>
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
        {preview?.href && (
          <CertificatePreview
            title={preview.title}
            href={preview.href}
            onClose={closePreview}
          />
        )}
      </div>
    </section>
  );
}

export function CommunitySection() {
  return (
    <section
      id="community"
      className="community-section page-width section-space"
      aria-labelledby="community-title"
    >
      <div className="section-topline">
        <p className="eyebrow">04 / Beyond the lab</p>
        <span className="mono">PEOPLE, PRACTICE, AND SHARED EFFORT</span>
      </div>
      <div className="section-heading">
        <h2 id="community-title">
          Outside the model. <br />
          <em>Part of a community.</em>
        </h2>
        <p>
          Some of my most practical learning happens through organising an
          activity, supporting children, or working towards a goal with a team.
        </p>
      </div>
      <div className="service-feature">
        <div className="book-count">
          <span className="mono">BOOKS OPEN THE DOORS</span>
          <strong>
            2,000<span>books</span>
          </strong>
          <p>
            With Connected World Club, I planned and led “Books Open the Doors,”
            a campaign that donated these books to underprivileged children.
          </p>
        </div>
        <div className="service-copy">
          <span className="small-cross" aria-hidden="true">
            +
          </span>
          <span className="eyebrow">Learning, together</span>
          <h3>
            A shared effort. <br />
            Something useful.
          </h3>
          <p>
            I help with learning support at Dong Da Friendship Childcare House,
            fundraising, and charitable trips. These activities give me a way to
            contribute while learning to plan, listen, and work with others.
          </p>
          <div className="service-tags">
            <span>Community learning</span>
            <span>Environmental care</span>
            <span>Teamwork</span>
          </div>
        </div>
      </div>
      <div className="activity-grid">
        {activities.map((a, i) => (
          <article key={a.title}>
            <span className="activity-index mono">0{i + 1}</span>
            <div>
              <span className="activity-period mono">{a.period}</span>
              <h3>{a.title}</h3>
              <p className="activity-role">{a.role}</p>
              <p>{a.text}</p>
            </div>
          </article>
        ))}
      </div>
      <div className="trees-note">
        <span className="trees-symbol" aria-hidden="true">
          ↟
        </span>
        <div>
          <h3>Planting Trees of Love</h3>
          <p>
            In March 2024, I took part in tree-planting and environmental
            volunteering in Khe Tien Village, Yen Bai Province, contributing to
            reforestation and local community work.
          </p>
        </div>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="page-width">
        <div className="footer-top">
          <p>
            Keep asking. <br />
            <em>Keep exploring.</em>
          </p>
          <a href="#home" data-testid="footer-top-link" className="back-to-top">
            Back to the beginning <span aria-hidden="true">↑</span>
          </a>
        </div>
        <div className="footer-bottom">
          <span>
            Bui Duc Anh <span className="footer-dot">·</span>{" "}
            {introduction.location}
          </span>
          <span className="mono">CHEMISTRY / MATERIALS / LEARNING</span>
          <span>Student portfolio · 2026</span>
        </div>
      </div>
    </footer>
  );
}
