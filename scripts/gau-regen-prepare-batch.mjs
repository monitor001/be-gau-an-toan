/** Gen payload + args file for batch N. Usage: node scripts/gau-regen-prepare-batch.mjs <batchIndex> */
import { readFileSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const b = Number(process.argv[2]);
spawnSync(process.execPath, ['scripts/gau-regen-gen-batch.mjs', String(b)], {
  cwd: root,
  stdio: 'inherit',
});
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
writeFileSync(join(root, 'art/briefs/_gen-args.json'), JSON.stringify(out));
out.forEach((x, i) => {
  writeFileSync(
    join(root, `art/briefs/_gen-one-${i}.json`),
    JSON.stringify({
      description: x.description,
      filename: x.filename,
      aspect_ratio: x.aspect_ratio,
      reference_image_paths: x.reference_image_paths,
    }),
  );
});
console.log(out.map((x) => x.id).join(', '));
