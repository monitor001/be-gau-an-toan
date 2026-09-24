import { readFileSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const prefixes = ['nuoc-', 'khac-chay-', 'khac-nga-', 'khac-thuoc-', 'khac-sac-'];
const all = JSON.parse(readFileSync(join(root, 'art/briefs/all-gau-result.json'), 'utf8'));
const items = all.filter((x) => prefixes.some((p) => x.id.startsWith(p)));
const batch = Number(process.argv[2] || 0);
const size = 5;
const slice = items.slice(batch * size, batch * size + size);
writeFileSync(
  join(root, 'art', 'briefs', '_regen-batch.json'),
  JSON.stringify(slice, null, 2),
  'utf8',
);
console.log(`batch ${batch}: ${slice.map((x) => x.id).join(', ')}`);
