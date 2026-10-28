# Materials portfolio delivery checks

No backend throughput, stress test or invented uptime target applies to this static portfolio. The approved delivery budgets are 150 KiB gzip for initial JavaScript and 40 KiB gzip for initial CSS. Certificate PDFs must not load before a document action. Page-preview JPEGs use native lazy loading.

After a fresh build, measure entry resources:

```sh
node --input-type=module <<'JS'
import { readdirSync, readFileSync } from "node:fs";
import { gzipSync } from "node:zlib";
for (const extension of ["js", "css"]) {
  const bytes = readdirSync("dist/assets")
    .filter(name => name.endsWith("." + extension))
    .reduce((sum, name) => sum + gzipSync(readFileSync("dist/assets/" + name)).length, 0);
  console.log(extension, (bytes / 1024).toFixed(2), "KiB gzip");
}
JS
```

Latest root-artifact measurements: JavaScript 67.08 KiB and CSS 5.54 KiB with equivalent gzip level 6; both meet their budgets. Vite reports decimal kB, so its displayed values differ from KiB. The final Vite bundling step took 1.62 seconds locally; this is not a full cold-install timing or a visitor-load guarantee.

In browser developer tools, confirm no external runtime resources and no initial PDF requests. Scroll to Recognition to load preview images. Observe lattice/deposition movement, pause it with the motion toggle, scroll figures offscreen and enable reduced motion: offscreen animation pauses and the system preference disables it. No benchmark frame rate, Lighthouse score or network latency is claimed. Repeat measurements only when source/assets change or a regression is observed.
