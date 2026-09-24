import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const outDir = join(root, 'art', 'briefs', 'gau-regen-batches');
mkdirSync(outDir, { recursive: true });
const prefixes = ['nuoc-', 'khac-chay-', 'khac-nga-', 'khac-thuoc-', 'khac-sac-'];
const all = JSON.parse(readFileSync(join(root, 'art/briefs/all-gau-result.json'), 'utf8'));
const items = all.filter((x) => prefixes.some((p) => x.id.startsWith(p)));
const size = 5;
for (let b = 0; b * size < items.length; b++) {
  const slice = items.slice(b * size, b * size + size);
  writeFileSync(join(outDir, `batch-${String(b).padStart(2, '0')}.json`), JSON.stringify(slice, null, 2));
}
console.log(`wrote ${Math.ceil(items.length / size)} batches, ${items.length} items`);
