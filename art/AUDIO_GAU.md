# AUDIO regen — Bé Gấu (full wipe)

**2026-09-24:** User báo clip vẫn đọc “Mít”.

## Action
1. Kill TTS job cũ
2. Xóa **toàn bộ** `assets/audio/*.mp3`
3. Dump lại `scripts/tts-texts.json` (2628 câu, **0** Mít)
4. Tạm `AUDIO_CLIPS = {}` → trình duyệt dùng Web Speech vi-VN (đúng Bé Gấu)
5. Chạy lại `python -u scripts/tts_generate.py` (full 2628)

Khi xong: `src/audio-clips.mjs` tự cập nhật. Hard-refresh trang (Ctrl+F5).
