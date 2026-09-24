import test from 'node:test';
import assert from 'node:assert/strict';
import { pickVietnameseVoice, createSpeechController } from '../src/speech.mjs';
import { VERDICT, createGame, chooseOption, advanceScene } from '../src/game.mjs';

test('pickVietnameseVoice prefers vi-VN', () => {
  const voice = pickVietnameseVoice([
    { lang: 'en-US', name: 'English' },
    { lang: 'vi-VN', name: 'Vietnamese' },
  ]);
  assert.equal(voice.lang, 'vi-VN');
});

test('pickVietnameseVoice returns null when only English voices exist', () => {
  assert.equal(pickVietnameseVoice([{ lang: 'en-US', name: 'English' }]), null);
});

test('speak skips browser voice when no Vietnamese voice (avoids English)', () => {
  const speech = createSpeechController({
    muted: () => false,
    clips: {},
    synth: () => ({
      getVoices: () => [{ lang: 'en-US', name: 'English' }],
      speak() { throw new Error('should not speak English'); },
      cancel() {},
      addEventListener() {},
    }),
  });
  assert.equal(speech.speak('Xin chào Bé Gấu'), false);
});

test('speech uses clip when available before browser voice', () => {
  const played = [];
  const speech = createSpeechController({
    muted: () => false,
    clips: { 'verdict-correct': 'assets/audio/verdict-correct.mp3' },
    playClip: (src) => { played.push(src); return { pause() {}, ended: true, addEventListener() {} }; },
    synth: () => null,
  });
  assert.equal(speech.speak('Đúng rồi!', { clipKey: 'verdict-correct' }), 'clip');
  assert.deepEqual(played, ['assets/audio/verdict-correct.mp3']);
});

test('wrong choice does not await next; correct does', () => {
  const scenes = [{
    id: 't1',
    prompt: '?',
    hazard: 'x',
    choices: [
      { id: 'try-1', text: 'sai', safe: false, feedback: 'thử lại' },
      { id: 'safe', text: 'đúng', safe: true, feedback: 'tốt' },
      { id: 'try-2', text: 'sai2', safe: false, feedback: 'thử lại' },
    ],
  }, {
    id: 't2',
    prompt: '?',
    hazard: 'y',
    choices: [
      { id: 'safe', text: 'đúng', safe: true, feedback: 'tốt' },
      { id: 'try-1', text: 'sai', safe: false, feedback: 'thử lại' },
      { id: 'try-2', text: 'sai2', safe: false, feedback: 'thử lại' },
    ],
  }];
  let state = createGame(scenes);
  state = chooseOption(state, 'try-1');
  assert.equal(state.verdict, 'wrong');
  assert.equal(state.awaitingNext, false);
  assert.equal(VERDICT.wrong, 'Bé chọn chưa đúng rồi.');
  state = chooseOption(state, 'safe');
  assert.equal(state.awaitingNext, true);
  state = advanceScene(state);
  assert.equal(state.sceneIndex, 1);
});
