// Đọc tiếng Việt: ưu tiên file Piper local (AUDIO_CLIPS), rồi Web Speech vi-VN.
// Không gọi API TTS mạng. Không thu âm người chơi.

import { AUDIO_CLIPS } from './audio-clips.mjs';

export const SPEECH_LANG = 'vi-VN';

function browserSynth() {
  return typeof window === 'undefined' ? null : (window.speechSynthesis ?? null);
}

function playClipElement(src) {
  const element = new Audio(src);
  element.play().catch(() => {});
  return element;
}

export function pickVietnameseVoice(voices = []) {
  if (!voices.length) return null;
  const exact = voices.find((voice) => (voice.lang || '').toLowerCase() === 'vi-vn');
  if (exact) return exact;
  const vietnamese = voices.find((voice) => (voice.lang || '').toLowerCase().startsWith('vi'));
  if (vietnamese) return vietnamese;
  return voices.find((voice) => /vietnam|việt|viet/i.test(voice.name || '')) ?? null;
}

export function createSpeechController({
  synth = browserSynth,
  clips = AUDIO_CLIPS,
  playClip = playClipElement,
  muted = () => false,
} = {}) {
  let voice = null;
  let currentClip = null;
  let voicesReady = false;

  function stopClip() {
    if (!currentClip) return;
    try { currentClip.pause(); } catch { /* bỏ qua */ }
    currentClip = null;
  }

  function playFile(src, queue) {
    const previous = currentClip;
    const start = () => { currentClip = playClip(src); };
    if (queue && previous && !previous.ended) {
      const go = () => start();
      previous.addEventListener('ended', go, { once: true });
      previous.addEventListener('error', go, { once: true });
      return 'clip';
    }
    stopClip();
    start();
    return 'clip';
  }

  function resolveVoice() {
    const instance = typeof synth === 'function' ? synth() : synth;
    if (!instance) return null;
    const list = instance.getVoices?.() ?? [];
    if (!voice || !voicesReady) {
      voice = pickVietnameseVoice(list);
      if (list.length) voicesReady = true;
    }
    return voice;
  }

  // Một số trình duyệt tải giọng bất đồng bộ.
  try {
    const instance = typeof synth === 'function' ? synth() : synth;
    instance?.addEventListener?.('voiceschanged', () => {
      voice = null;
      voicesReady = false;
      resolveVoice();
    });
  } catch { /* bỏ qua */ }

  function speak(text, { clipKey = null, queue = false } = {}) {
    if (!text) return false;
    if (muted()) return false;
    if (clipKey && clips[clipKey]) return playFile(clips[clipKey], queue);
    const instance = typeof synth === 'function' ? synth() : synth;
    if (!instance || typeof instance.speak !== 'function') return false;
    const chosen = resolveVoice();
    // Không đọc bằng giọng Anh/mặc định — chỉ Web Speech khi có giọng Việt.
    if (!chosen) return false;
    if (!queue) {
      stopClip();
      instance.cancel();
    }
    const utterance = new SpeechSynthesisUtterance(String(text));
    utterance.lang = SPEECH_LANG;
    try { utterance.voice = chosen; } catch { /* giữ lang vi-VN */ }
    utterance.rate = 0.95;
    utterance.pitch = 1.05;
    instance.speak(utterance);
    return 'voice';
  }

  return {
    speak,
    cancel() {
      stopClip();
      const instance = typeof synth === 'function' ? synth() : synth;
      instance?.cancel?.();
    },
    isAvailable() {
      const instance = typeof synth === 'function' ? synth() : synth;
      return Boolean(instance && typeof instance.speak === 'function');
    },
    hasClip: (clipKey) => Boolean(clips[clipKey]),
    pickVoice: resolveVoice,
  };
}
