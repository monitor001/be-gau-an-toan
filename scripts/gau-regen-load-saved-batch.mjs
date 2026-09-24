/** Load saved args for batch N into _gen-one-*.json. Usage: node scripts/gau-regen-load-saved-batch.mjs <batchIndex> */
import { readFileSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const b = Number(process.argv[2]);
const a = JSON.parse(
  readFileSync(join(root, `art/briefs/_gen-args-batch-${b}.json`), 'utf8'),
);
a.forEach((x, i) => {
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
console.log(a.map((x) => x.id).join(', '));
