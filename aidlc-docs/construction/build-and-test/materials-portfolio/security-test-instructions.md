# Public document and privacy verification

The optional Security Baseline is disabled. These checks implement the user's mandatory privacy requirement, not a claim of penetration testing or vulnerability scanning.

1. Run `npm run build` then `npm run verify:public` from the repository root.
2. Inspect the full proposed Git changes and untracked file list. The original DOCX and both ZIPs must remain ignored and untracked; do not force-add them. Private working files stay outside public source/build paths.
3. Confirm five reviewed public PDF hashes and six derived JPEG hashes match the verifier and [certificate review manifest](../../materials-portfolio/code/certificate-review.md). No unreviewed PDF or preview belongs in the commit or dist.
4. Review public copy, metadata, logs and artifacts for sensitive information. Automatic searches and hash checks support this review but cannot prove that every possible secret has been detected.
5. Confirm only safe derivatives are downloadable: no source metadata, private verification codes or unredacted originals were added alongside them. The original review inspected all six source pages and document structures; the manifest records safe decisions without sensitive values.

A prior non-sensitive unapproved-PDF probe was correctly rejected and removed. Do not use a real private document for negative testing. Ignore rules and deleting current files do not erase Git history. No history rewrite is part of this workflow.

No backend, authentication or private application API exists, so authentication/API penetration scenarios are N/A. No dependency vulnerability scan was performed or claimed. Both optional extensions remain disabled; private-input exclusion remains mandatory.
