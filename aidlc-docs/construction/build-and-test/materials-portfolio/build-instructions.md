# Materials portfolio build instructions

Unit: materials-portfolio. Application root: `/Users/nhamhhung/tomdangcappp24.github.io`.

## Prerequisites

Use Node.js 20.19+ compatible with the locked toolchain and npm. The verified local environment is Node 24.0.0/npm 11.3.0; the Pages workflow uses Node 20. No secrets, server or database are required. Keep the existing lockfile and sufficient disk space for node_modules and dist. Linux, macOS or Windows with a compatible Node environment can build the static application; browser/PDF review tooling is separate.

## Build and verify

Run from the application root:

```sh
npm ci
npm test
npm run build
npm run verify:public
```

Use the default root base for this user-site repository. To verify repository-subpath behavior:

```sh
VITE_BASE_PATH=/portfolio/ npm run build
VITE_BASE_PATH=/portfolio/ npm run verify:public
npm run build
npm run verify:public
```

The environment-prefix syntax above is for POSIX shells; in PowerShell set `$env:VITE_BASE_PATH='/portfolio/'`, run build/verification, then remove that environment variable before the final root build. GitHub Actions derives the actual repository base automatically.

Expected output: passing TypeScript compilation and Vite production build; dist contains HTML, favicon, entry JavaScript/CSS, five reviewed PDFs and six preview JPEGs. The verifier must accept the exact approved file hashes and base-aware asset paths. The final local artifact for this handoff uses `/`.

## Failure handling

For missing dependencies use locked installation rather than changing package versions. For TypeScript errors fix the reported source error and rebuild. For a certificate-hash or unexpected-file failure, review the actual file and the safe publication manifest; do not weaken the verifier to bypass it. Never force-add ignored originals. A local build is not a deployment.
