import { createHash } from "node:crypto";
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { resolve, relative, extname } from "node:path";
import { execFileSync } from "node:child_process";

// Reviewed public derivative hashes; update only after a new document review.
const approved = new Map(
  Object.entries({
    "asmo-medals.pdf":
      "ea3ee3eec185695377288ac829d411cdcf259b884bc5290122f2b3fb053d5bab",
    "evergreen-logistics.pdf":
      "fe079735a83ec946242b44b0d530dfd8973620ff73ec57999b4b96fe802f2d9d",
    "international-chemistry-quiz.pdf":
      "a518206a14f9de213771209429e32f7747cabf5abb70e3daeed7f936861f5285",
    "le-stella.pdf":
      "bb266739f21d20784f744cbebf4e4db8b67e3e4c06355d294675af935629789a",
    "planting-trees.pdf":
      "31a4592049037e8ca6288c0c3af4b5a8cfb1ee0465b7445282e4f4f70f134322",
  }),
);
const approvedPreviews = new Map(
  Object.entries({
    "asmo-medals-page-1.jpg":
      "de7a887062de392d0dc50f6032005fe5a58218d11d850417ba7dae8766f2f966",
    "asmo-medals-page-2.jpg":
      "65995ac027c5d735881644a1ad798f14d35326569a66006b6b87e8f7a2c056de",
    "evergreen-logistics-page-1.jpg":
      "05e7554859038d83cbd3ad24cc0b9447701942b1d410e521dbfe0a17dac97f52",
    "international-chemistry-quiz-page-1.jpg":
      "3a2811accc369a292e755b17a1d2f0782c3cf360e50791e0ea41b9490dde660f",
    "le-stella-page-1.jpg":
      "dcc737a19ecfd2a2b6de476f9bbc33786db4040c2db9408bbac78ff70e97d7d3",
    "planting-trees-page-1.jpg":
      "82b9d5093c26513892fe4d1d0398076810d93ceab9712831bdb56cf4c681a1b2",
  }),
);
const root = process.cwd();
const certificateRoot = "src/assets/certificates/bui-duc-anh";
const localOnly = new Set([
  "src/assets/Resume - Bui Duc Anh.docx",
  "src/assets/Volunteer-20261025T152907Z-1-001.zip",
  "src/assets/clubs-20261025T152910Z-1-001.zip",
]);
const errors = [];
const fail = (message) => errors.push(message);
const digest = (file) =>
  createHash("sha256").update(readFileSync(file)).digest("hex");
function walk(dir) {
  if (!existsSync(dir)) return [];
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const path = `${dir}/${entry.name}`;
    if (entry.isSymbolicLink()) {
      fail(`Symlink in public input: ${path}`);
      return [];
    }
    return entry.isDirectory() ? walk(path) : [path];
  });
}
let gitFiles = [];
try {
  gitFiles = execFileSync(
    "git",
    ["ls-files", "-z", "--cached", "--others", "--exclude-standard"],
    { encoding: "utf8" },
  )
    .split("\0")
    .filter(Boolean);
} catch {
  fail("Cannot inspect proposed Git file inventory.");
}
for (const path of gitFiles.filter((path) => existsSync(path))) {
  if (
    /\.(?:zip|docx?|p12|pfx|pem|key)$/i.test(path) ||
    /(^|\/)\.env(?:\.|$)/.test(path) ||
    path.startsWith("private-source-materials/")
  )
    fail(`Disallowed file in proposed Git content: ${path}`);
  if (
    /\.pdf$/i.test(path) &&
    (!path.startsWith(`${certificateRoot}/`) ||
      !approved.has(path.slice(certificateRoot.length + 1)))
  )
    fail(`Unapproved PDF in proposed Git content: ${path}`);
}
for (const path of localOnly) {
  if (gitFiles.includes(path))
    fail(`Original input is tracked or proposed for Git: ${path}`);
  try {
    execFileSync("git", ["check-ignore", "--quiet", "--", path]);
  } catch {
    fail(`Missing original-input ignore rule: ${path}`);
  }
}
const sourcePdfs = [];
const sourcePreviews = [];
for (const path of walk("src/assets")) {
  if (localOnly.has(path)) continue;
  if (path.startsWith(`${certificateRoot}/`) && extname(path) === ".pdf") {
    const name = path.slice(certificateRoot.length + 1);
    if (approved.get(name) !== digest(path))
      fail(`Unapproved or changed certificate: ${path}`);
    sourcePdfs.push(name);
  } else if (
    path.startsWith(`${certificateRoot}/`) &&
    approvedPreviews.get(path.slice(certificateRoot.length + 1)) ===
      digest(path)
  ) {
    sourcePreviews.push(path.slice(certificateRoot.length + 1));
  } else fail(`Unexpected active source asset: ${path}`);
}
for (const name of approved.keys())
  if (!sourcePdfs.includes(name)) fail(`Approved certificate missing: ${name}`);
for (const name of approvedPreviews.keys())
  if (!sourcePreviews.includes(name)) fail(`Approved preview missing: ${name}`);
for (const path of walk("public"))
  if (path !== "public/favicon.svg")
    fail(`Unexpected public resource: ${path}`);
for (const path of [...walk("src"), "index.html"].filter((path) =>
  /\.(?:ts|tsx|css|html)$/.test(path),
)) {
  const text = readFileSync(path, "utf8");
  if (
    /Nhâm Quốc Hùng|Nham Quoc Hung|nhamhung\.gttn|Torilab|first-local-journal/.test(
      text,
    )
  )
    fail(`Stale identity in active application: ${path}`);
  if (/import\.meta\.glob|assets\/.*\.(?:zip|docx)/i.test(text))
    fail(`Unsafe source-document access: ${path}`);
}
const built = walk("dist");
if (!existsSync("dist/index.html")) fail("Fresh production build required.");
const builtCounts = new Map();
const builtPreviewCounts = new Map();
for (const path of built) {
  if (extname(path) === ".pdf") {
    const hash = digest(path);
    const match = [...approved].find(([, expected]) => expected === hash);
    if (!match) fail(`Unapproved PDF in production output: ${path}`);
    else builtCounts.set(match[0], (builtCounts.get(match[0]) ?? 0) + 1);
  } else if (extname(path) === ".jpg") {
    const hash = digest(path);
    const match = [...approvedPreviews].find(
      ([, expected]) => expected === hash,
    );
    if (!match) fail(`Unapproved preview in production output: ${path}`);
    else
      builtPreviewCounts.set(
        match[0],
        (builtPreviewCounts.get(match[0]) ?? 0) + 1,
      );
  } else if (![".html", ".js", ".css", ".svg"].includes(extname(path)))
    fail(`Unexpected production file: ${path}`);
}
for (const name of approved.keys())
  if (builtCounts.get(name) !== 1)
    fail(`Production certificate count mismatch: ${name}`);
for (const name of approvedPreviews.keys())
  if (builtPreviewCounts.get(name) !== 1)
    fail(`Production preview count mismatch: ${name}`);
if (existsSync("dist/index.html")) {
  const html = readFileSync("dist/index.html", "utf8");
  const base = process.env.VITE_BASE_PATH ?? "/";
  for (const [, url] of html.matchAll(/(?:src|href)="([^"]+)"/g)) {
    if (
      !url.startsWith(base) ||
      !existsSync(resolve("dist", url.slice(base.length)))
    )
      fail(`Invalid production entry asset path: ${url}`);
  }
  for (const file of built.filter((path) => extname(path) === ".js")) {
    const text = readFileSync(file, "utf8");
    for (const [, url] of text.matchAll(/"([^"\s]+\.(?:pdf|jpg))"/g)) {
      if (
        !url.startsWith(base) ||
        !existsSync(resolve("dist", url.slice(base.length)))
      )
        fail(`Invalid production document/preview path in ${relative(root, resolve(file))}`);
    }
  }
}
if (errors.length) {
  for (const message of errors) console.error(message);
  process.exitCode = 1;
} else
  console.log(
    `Public asset checks passed: ${approved.size} reviewed PDFs, ${approvedPreviews.size} approved inline previews, ignored originals, clean active assets and valid production paths. Manual content/privacy review remains required.`,
  );
