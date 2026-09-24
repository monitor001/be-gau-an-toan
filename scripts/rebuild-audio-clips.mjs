/** Rebuild src/audio-clips.mjs from assets/audio/*.mp3 (Piper VI). */
import { readdirSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dir = join(root, 'assets', 'audio');
const files = readdirSync(dir).filter((f) => f.toLowerCase().endsWith('.mp3')).sort();
const lines = [
  '// Manifest Piper VI — tạo bởi scripts/rebuild-audio-clips.mjs / tts_generate.py.',
  '// key tình huống: <id> · đáp án: <id>__ans-<choice> · khuyến nghị: <id>__fb-<choice>',
  'export const AUDIO_CLIPS = {',
];
for (const f of files) {
  const key = f.replace(/\.mp3$/i, '');
  lines.push(`  '${key}': 'assets/audio/${f}',`);
}
lines.push('};');
lines.push('');
writeFileSync(join(root, 'src', 'audio-clips.mjs'), `${lines.join('\n')}\n`, 'utf8');
console.log('AUDIO_CLIPS', files.length);
