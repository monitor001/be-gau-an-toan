/** Print _payload-NN.json to stdout. Usage: node scripts/gau-regen-read-payload.mjs <N> */
import { readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const b = Number(process.argv[2]);
const path = join(root, 'art/briefs/gau-regen-batches', `_payload-${String(b).padStart(2, '0')}.json`);
process.stdout.write(readFileSync(path, 'utf8'));
