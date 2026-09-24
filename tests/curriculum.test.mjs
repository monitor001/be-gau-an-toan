import { createGame, chooseOption, advanceScene } from '../src/game.mjs';
import { MODULES, SERIES, createCurriculumState, selectLesson, completeLesson, getCurriculumProgress } from '../src/curriculum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('series counts match design quota', () => {
  assert.equal(SERIES.totalLessons, 75);
  assert.equal(SERIES.totalSituations, 375);
  assert.equal(SERIES.moduleCount, 7);
  assert.equal(MODULES.length, 7);
  const daoPho = MODULES.find((m) => m.id === 'dao-pho');
  assert.ok(daoPho);
  assert.equal(daoPho.lessonCount, 25);
  assert.equal(daoPho.situationCount, 125);
});

test('every lesson has 5 situations and 3 choices with one safe', () => {
  for (const mod of MODULES) {
    for (const lesson of mod.lessons) {
      assert.equal(lesson.situations.length, 5, lesson.id);
      for (const scene of lesson.situations) {
        assert.equal(scene.choices.length, 3, scene.id);
        assert.equal(scene.choices.filter((c) => c.safe).length, 1, scene.id);
        assert.equal(scene.adultPresent, true);
        assert.ok(scene.hazard && scene.prompt);
      }
    }
  }
});

test('game engine advances after correct choice', () => {
  const lesson = MODULES[0].lessons[0];
  let state = createGame(lesson.situations);
  const safe = state.scenes[0].choices.find((c) => c.safe);
  state = chooseOption(state, safe.id);
  assert.equal(state.verdict, 'correct');
  assert.equal(state.awaitingNext, true);
  state = advanceScene(state);
  assert.equal(state.sceneIndex, 1);
});

test('curriculum progress tracks completed lessons', () => {
  let curriculum = createCurriculumState();
  const lessonId = MODULES[0].lessons[0].id;
  curriculum = selectLesson(curriculum, lessonId);
  assert.ok(curriculum.currentGame);
  curriculum = completeLesson({ ...curriculum, currentLessonId: lessonId });
  const progress = getCurriculumProgress(curriculum);
  assert.equal(progress.completed, 1);
  assert.equal(progress.total, 75);
});
