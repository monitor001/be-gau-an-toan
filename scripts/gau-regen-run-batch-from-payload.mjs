/**
 * Emit GenerateImage args as JSON array from current _gen-payload.json (for agent).
 * Usage: node scripts/gau-regen-run-batch-from-payload.mjs
 */
import { readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const payload = JSON.parse(
  readFileSync(join(root, 'art/briefs/_gen-payload.json'), 'utf8'),
);
const out = payload.map((x) => ({
  description: x.description,
  filename: x.filename,
  aspect_ratio: x.aspect_ratio,
  reference_image_paths: x.reference_image_paths,
  id: x.id,
}));
process.stdout.write(JSON.stringify(out));
