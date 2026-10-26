import { useEffect, useId, useRef } from "react";

type Props = {
  title: string;
  href: string;
  onClose: () => void;
};

export default function CertificatePreview({ title, href, onClose }: Props) {
  const dialog = useRef<HTMLDialogElement>(null);
  const headingId = useId();

  useEffect(() => {
    const element = dialog.current;
    if (!element) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    if (!element.open) element.showModal();
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  return (
    <dialog
      ref={dialog}
      className="certificate-preview"
      aria-labelledby={headingId}
      onClose={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) dialog.current?.close();
      }}
    >
      <div className="certificate-preview-panel">
        <header className="certificate-preview-header">
          <div>
            <p className="eyebrow">Certificate preview</p>
            <h2 id={headingId}>{title}</h2>
          </div>
          <button
            type="button"
            className="preview-close"
            onClick={() => dialog.current?.close()}
            aria-label="Close certificate preview"
            data-testid="certificate-preview-close-button"
          >
            Close <span aria-hidden="true">×</span>
          </button>
        </header>
        <iframe
          src={`${href}#view=FitH`}
          title={`${title} — certificate PDF preview`}
          className="certificate-preview-frame"
        />
        <div className="certificate-preview-footer">
          <p>Preview not displaying? Open the PDF in a new tab.</p>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="preview-open-pdf"
            data-testid="certificate-preview-open-link"
          >
            Open PDF <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </dialog>
  );
}
