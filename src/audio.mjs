/** Âm thanh cue Web Audio — không tải tệp, không mạng. */
export function createAudioController() {
  let muted = false;
  let ctx = null;

  function ensureCtx() {
    if (!ctx) ctx = new (window.AudioContext || window.webkitAudioContext)();
    if (ctx.state === 'suspended') ctx.resume();
    return ctx;
  }

  function tone(freq, duration, type = 'sine', gain = 0.08) {
    if (muted) return;
    try {
      const audioCtx = ensureCtx();
      const osc = audioCtx.createOscillator();
      const g = audioCtx.createGain();
      osc.type = type;
      osc.frequency.value = freq;
      g.gain.value = gain;
      osc.connect(g);
      g.connect(audioCtx.destination);
      const now = audioCtx.currentTime;
      g.gain.setValueAtTime(gain, now);
      g.gain.exponentialRampToValueAtTime(0.001, now + duration);
      osc.start(now);
      osc.stop(now + duration);
    } catch { /* bỏ qua */ }
  }

  return {
    isMuted: () => muted,
    setMuted(value) { muted = Boolean(value); },
    toggle() { muted = !muted; return muted; },
    play(kind) {
      if (kind === 'start') tone(440, 0.12);
      else if (kind === 'correct') { tone(523, 0.1); setTimeout(() => tone(659, 0.12), 80); }
      else if (kind === 'wrong') tone(220, 0.15, 'triangle', 0.06);
      else if (kind === 'finish') { tone(523, 0.1); setTimeout(() => tone(659, 0.1), 90); setTimeout(() => tone(784, 0.16), 180); }
    },
  };
}
