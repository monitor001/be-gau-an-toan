/**
 * Smoke nhẹ bằng fetch HTML + import curriculum qua node (không browser automation).
 */
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { SERIES, MODULES } from '../src/curriculum.mjs';

const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');
assert.match(html, /Bé Gấu An Toàn/);
assert.match(html, /startCourseButton/);
assert.match(html, /moduleGrid/);
assert.match(html, /chưa/);

assert.equal(SERIES.totalSituations, 375);
assert.equal(MODULES.reduce((n, m) => n + m.lessons.length, 0), 75);
assert.ok(MODULES.some((m) => m.id === 'dao-pho'));

console.log('smoke-content OK:', SERIES.totalLessons, 'bài,', SERIES.totalSituations, 'tình huống');
