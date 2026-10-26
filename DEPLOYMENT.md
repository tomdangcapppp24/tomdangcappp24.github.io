# Deploy the materials portfolio to GitHub Pages

The repository retains `.github/workflows/deploy.yml`. The workflow installs locked dependencies, runs tests, derives the GitHub Pages base path, builds, checks approved public assets and deploys only `dist/`.

## Repository setup

In repository Settings → Pages, select GitHub Actions as the build/deployment source. Confirm that the deployment environment and branch settings permit the intended branch. The workflow runs on pushes to `main` and can also be started manually.

Before pushing, run:

```sh
npm ci
npm test
npm run build
npm run verify:public
```

Inspect the complete Git diff and untracked-file list. Confirm that original references, archives and private documents are absent from the commit. Do not force-add ignored inputs. Only reviewed public certificate copies may be included. See the certificate policy in [README.md](README.md).

## Base paths

For a repository named exactly `<owner>.github.io`, the existing workflow selects `/`. Other repositories select `/<repository>/`. Vite's `VITE_BASE_PATH` setting supplies base-aware JavaScript, stylesheet, favicon and certificate URLs.

A local root build uses:

```sh
npm run build
npm run verify:public
```

A representative subpath build uses:

```sh
VITE_BASE_PATH=/portfolio/ npm run build
VITE_BASE_PATH=/portfolio/ npm run verify:public
```

Use the same base for the build and verification. Do not copy private inputs into `public/` or `dist/`. `public/` files are copied even if no component imports them.

## After an intentional push

Review the Actions run and the returned Pages deployment URL. A successful local build is not evidence of deployment. Verify the actual published page, its section anchors, document links, favicon and mobile layout. Legacy talk/journal hashes should resolve safely to the new portfolio.

If verification fails, fix the failure before another release. Roll back only intended tracked application changes; preserve local private references and unrelated work. Restoring a prior commit can restore the former portfolio identity and should be a deliberate choice. This workflow does not rewrite historical Git objects.

## Data boundary

This site has no backend, login, analytics, data collection or runtime secrets. It serves public content and reviewed ordinary certificate copies. Private credentials belong outside Git and deployment artifacts; browser access controls are not a substitute for excluding them.
