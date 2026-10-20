import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';
const root = fileURLToPath(new URL('../', import.meta.url));
const skin = path.join(root, 'skins/diy-journal');
const failures = [];
let checked = 0;
function reference(from, ref) {
  if (!ref || /^(?:[a-z][\w+.-]*:|#|\/\/)/i.test(ref)) return;
  const clean = decodeURIComponent(ref.split(/[?#]/)[0]);
  if (!clean) return;
  checked++;
  if (!fs.existsSync(path.resolve(path.dirname(from), clean))) failures.push(`${path.relative(root, from)}: missing ${ref}`);
}
function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap(e => {
    if (['.git', 'node_modules'].includes(e.name)) return [];
    const p = path.join(dir, e.name);
    return e.isDirectory() ? walk(p) : [p];
  });
}
const manifestPath = path.join(skin, 'skin.json');
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
if (manifest.skinManifestVersion !== 2 || manifest.id !== 'diy-journal') failures.push('Unexpected manifest identity');
for (const ref of [manifest.contributes.stylesheet, manifest.contributes.patches, manifest.facets.client.entry,
  ...Object.values(manifest.preview), ...Object.values(manifest.contributes.backgroundMedia).map(x => x.src)]) reference(manifestPath, ref);
for (const file of walk(root)) {
  const ext = path.extname(file);
  if (!['.css', '.svg', '.html', '.md'].includes(ext)) continue;
  const content = fs.readFileSync(file, 'utf8');
  if (['.css', '.svg', '.html'].includes(ext)) {
    for (const match of content.matchAll(/url\(\s*['"]?([^)'"\s]+)['"]?\s*\)/g)) reference(file, match[1]);
    for (const match of content.matchAll(/(?:src|(?:xlink:)?href)\s*=\s*["']([^"']+)["']/g)) reference(file, match[1]);
  }
  if (ext === '.md') for (const match of content.matchAll(/!?\[[^\]]*\]\(([^\s)]+)\)/g)) reference(file, match[1]);
}
for (const name of ['README.md', 'README.en.md', 'INSTALL.md', 'LICENSE', 'LICENSE-ARTWORK', 'VERIFICATION.md',
  'skins/diy-journal/NOTICE', 'skins/diy-journal/ARTWORK.json']) reference(path.join(root, 'check'), name);
const hash = p => createHash('sha256').update(fs.readFileSync(p)).digest('hex');
const sums = fs.readFileSync(path.join(root, 'evidence/SHA256SUMS.txt'), 'utf8').trim().split(/\r?\n/);
if (sums.length !== 4) failures.push('Expected four native screenshots');
for (const line of sums) {
  const [expected, name] = line.trim().split(/\s+/);
  const file = path.join(root, 'evidence', name);
  if (!fs.existsSync(file) || hash(file) !== expected) failures.push(`Evidence hash mismatch: ${name}`);
}
for (const theme of ['light', 'dark']) {
  if (hash(path.join(skin, `preview/${theme}.jpg`)) !== hash(path.join(root, `evidence/diy-journal-${theme}.jpg`))) failures.push(`Catalog preview mismatch: ${theme}`);
}
if (failures.length) { console.error(failures.join('\n')); process.exitCode = 1; }
else console.log(`PASS: ${checked} local references, manifest, four evidence hashes and catalog preview identity.`);
