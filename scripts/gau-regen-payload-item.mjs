/** Print one payload item as JSON. Usage: node scripts/gau-regen-payload-item.mjs <batchIndex> <itemIndex 0-4> */
import { readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const b = Number(process.argv[2]);
const i = Number(process.argv[3]);
const path = join(root, 'art/briefs/gau-regen-batches', `_payload-${String(b).padStart(2, '0')}.json`);
const payload = JSON.parse(readFileSync(path, 'utf8'));
if (!payload[i]) process.exit(1);
console.log(JSON.stringify(payload[i]));
