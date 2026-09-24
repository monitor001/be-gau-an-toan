import test from 'node:test';
import assert from 'node:assert/strict';
import { MODULES, SERIES } from '../src/curriculum.mjs';
import { readFileSync } from 'node:fs';

test('brand and spoken content use Bé Gấu, not Mít', () => {
  assert.match(SERIES.title, /Bé Gấu/);
  assert.doesNotMatch(SERIES.title, /Mít/);
  const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');
  assert.match(html, /Bé Gấu An Toàn/);
  assert.doesNotMatch(html, /Bé Mít/);
  assert.doesNotMatch(html, /MÍT/);
  assert.doesNotMatch(html, /\bMít\b/);
  for (const mod of MODULES) {
    for (const lesson of mod.lessons) {
      for (const scene of lesson.situations) {
        const blob = [scene.prompt, scene.hazard, ...scene.choices.flatMap((c) => [c.text, c.feedback])].join('\n');
        assert.doesNotMatch(blob, /\bMít\b/, scene.id);
      }
    }
  }
});

test('tts dump texts match Bé Gấu character lines', () => {
  const texts = JSON.parse(readFileSync(new URL('../scripts/tts-texts.json', import.meta.url), 'utf8'));
  assert.ok(texts.length > 2000);
  const mit = texts.filter((row) => /\bMít\b/.test(row.text));
  assert.equal(mit.length, 0, mit.slice(0, 3).map((r) => r.key).join(','));
  assert.ok(texts.some((row) => /Bé Gấu/.test(row.text)));
});
