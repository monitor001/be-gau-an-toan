/**
 * Prepare batch N for agent GenerateImage (writes _gen-payload.json, prints items JSON).
 * After agent generates: node scripts/gau-regen-copy-advance.mjs N
 * Usage: node scripts/gau-regen-generate-batch-loop.mjs <N>
 */
import { spawnSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const b = process.argv[2];
spawnSync(process.execPath, ['scripts/gau-regen-gen-batch.mjs', b], { cwd: root, stdio: 'inherit' });
const payload = JSON.parse(readFileSync(join(root, 'art/briefs/_gen-payload.json'), 'utf8'));
console.log(JSON.stringify(payload.map((x) => ({
  description: x.description,
  filename: x.filename,
  aspect_ratio: x.aspect_ratio,
  reference_image_paths: x.reference_image_paths,
  id: x.id,
})), null, 2));
