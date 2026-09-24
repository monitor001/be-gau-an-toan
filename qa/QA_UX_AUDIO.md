# QA UX + Audio — Bé Gấu An Toàn

**Ngày:** 2026-09-24  
**Phạm vi:** `index.html`, `src/ui.mjs`, `src/speech.mjs`, `src/game.mjs`, `src/art.mjs`, `scripts/tts-texts.json`, `src/audio-clips.mjs`, mẫu `assets/audio/*.mp3`, minh họa `assets/art/` (dao-pho).  
**Không sửa app code;** chỉ đọc + chạy test Node.

---

## 1. Brand & chuỗi UI

| Kiểm tra | Kết quả | Ghi chú |
|----------|---------|---------|
| Tiêu đề / brand “Bé Gấu An Toàn” | **PASS** | `index.html` title, header brand, footer; `SERIES.title` = `Bé Gấu An Toàn` (`curriculum.mjs`). |
| Không “Bé Mít” trong UI runtime | **PASS** | `src/ui.mjs`, nội dung `content/approved/*`: không `\bMít\b`. Test `tests/brand-gau.test.mjs` pass. |
| Placeholder HTML còn “MÍT” | **FAIL (nhẹ)** | `#activityLabel` mặc định: `HÀNH TRÌNH CỦA MÍT` (`index.html` ~88). JS ghi đè khi vào bài (`ui.mjs` `renderGame`), nhưng vẫn lộ nếu panel game hiện trước khi render hoặc khi inspect DOM. |
| Typo “Bé Gáu” | **PASS** | Không thấy trong `index.html` / `ui.mjs`. |

---

## 2. Luồng confirm-choice (không auto-advance)

| Bước | Kết quả | Căn cứ |
|------|---------|--------|
| Chạm đáp án → chỉ audio đáp án | **PASS** | `onPickChoice`: `speakChoiceText` (clip `__ans-*`), không gọi `chooseOption` (`ui.mjs` 247–263). |
| Nút “Chọn đáp án” | **PASS** | `#confirmChoiceButton`; bật khi có `pendingChoice` (`renderConfirmAndFeedback` 308–315). |
| Xác nhận → verdict → feedback TTS | **PASS** | `onConfirmChoice`: cue đúng/sai → `say(VERDICT)` → `say(feedback, { queue: true })` (266–281). DOM: `#verdict` trước `#feedback`. |
| Đúng → phải bấm “Tình huống kế tiếp” | **PASS** | `chooseOption` safe → `awaitingNext: true` (`game.mjs` 39–46); `advanceScene` chỉ từ `#nextSceneButton` (`ui.mjs` 444–456). Test `speech.test.mjs` pass. |
| Sai → ở lại cảnh, chọn lại | **PASS** | Sai: `awaitingNext: false`; `onPickChoice` xóa verdict cũ (249–257). |
| Cover how-to khớp luồng | **PASS** | Bìa bước 3: chạm nghe → “Chọn đáp án” → đúng/sai + khuyến nghị → “Tình huống kế tiếp” nếu đúng (`index.html` 36–42). |

**Không** phát hiện auto-advance sau chọn đúng.

---

## 3. Speech / TTS tiếng Việt

| Kiểm tra | Kết quả | Ghi chú |
|----------|---------|---------|
| Ưu tiên Piper `AUDIO_CLIPS` | **PASS** | `speech.mjs` 81: `clipKey && clips[clipKey]` trước Web Speech. |
| Không đọc giọng Anh-only | **PASS** | `resolveVoice()` + `if (!chosen) return false` (84–86); test “should not speak English” pass. |
| `tts-texts.json`: 0 `\bMít\b` | **PASS** | 2628 dòng, 0 Mít (script + test). |
| Có “Bé Gấu” trong dump TTS | **PASS** | 651 dòng chứa “Bé Gấu”. |
| Đồng bộ key TTS ↔ `AUDIO_CLIPS` | **PASS** | 2628 / 2628 / 2628; 0 key lệch. |
| File MP3 trên đĩa | **PASS** | `assets/audio/*.mp3` = 2628 file. |

### Mẫu tồn tại (spot-check)

| Clip | Kích thước |
|------|------------|
| `nuoc-l1-s1.mp3` | 19 348 B |
| `nuoc-l1-s1__ans-safe.mp3` | 10 048 B |
| `nuoc-l1-s1__fb-safe.mp3` | 11 615 B |
| `dao-pho-g1-l1-s1.mp3` | 27 080 B |
| `dao-pho-g1-l1-s1__ans-safe.mp3` | 10 048 B |
| `dao-pho-g1-l1-s1__fb-safe.mp3` | 11 615 B |

*(Không nghe waveform trong QA này — chỉ xác nhận file post-regen Piper theo `art/AUDIO_GAU.md`.)*

---

## 4. Disclaimer / prototype / PII / người lớn

| Vị trí | Nội dung | PASS |
|--------|----------|------|
| Bìa | Prototype, chưa duyệt chuyên gia, không thu dữ liệu cá nhân | ✓ |
| Topbar | “Chơi cùng người lớn nhé!” | ✓ |
| Game | “Đây là trò chơi… Không thu tên hay dữ liệu cá nhân.” | ✓ |
| Finish | `finishSafetyNote`: cùng người lớn, chưa duyệt chuyên gia (`ui.mjs` 223) | ✓ |
| Footer | thử nghiệm · chưa phê duyệt · không thu dữ liệu | ✓ |

---

## 5. Minh họa & canvas (dao-pho)

| Kiểm tra | Kết quả |
|----------|---------|
| Runtime dùng ảnh PNG theo `situation.id` | **PASS** — `showSituationArt` (`art.mjs`); `dao-pho-g1-l1-s1.png`, `nuoc-l1-s1.png` có trên đĩa. |
| Canvas vẽ cảnh dao-pho | **PASS (không dùng)** — không `getContext` / không import `scene-art.mjs` trong `src/`. Thiếu ảnh → placeholder CSS `.is-pending-art` trên `<img>`, canvas ẩn (`ui.mjs` 372–380). |
| `scene-art.mjs` | **Ghi chú:** file canvas cũ còn trong repo, **không** nối vào UI; coverage art 375/375 kể cả dao-pho (`art/STATUS.md`). |
| Flash canvas trống lúc probe ảnh | **PARTIAL** — `art.mjs` bật `canvasEl.hidden = false` trong lúc thử URL; canvas không được vẽ → có thể nhấp nháy khung trống ngắn trước khi PNG load. |

---

## 6. Test tự động đã chạy

```text
node --test tests/brand-gau.test.mjs tests/speech.test.mjs
→ 7/7 pass
```

---

## IMPROVEMENTS

1. **Sửa placeholder `#activityLabel`** trên bìa HTML: đổi `HÀNH TRÌNH CỦA MÍT` → nhãn trung tính (“BƯỚC 3 · HỌC TÌNH HUỐNG”) hoặc “BÉ GẤU AN TOÀN”; mở rộng `brand-gau.test.mjs` cấm `\bMít\b` / `MÍT` trong toàn `index.html`.
2. **Probe art:** giữ canvas `hidden` cho đến khi hết candidate; chỉ hiện `<img>` hoặc `.is-pending-art` — tránh flash canvas trống.
3. **Dọn `src/scene-art.mjs`** hoặc ghi rõ deprecated trong `ART_DESIGN.md` để tránh tái gắn canvas thay ảnh dao-pho.
4. **Cập nhật QA cũ** (`qa/UX_FLOW.md`, `qa/UX_A11Y_ART.md`): vẫn ghi “Bé Mít” / TTS-only — lệch thực tế (Piper đủ 2628 + luồng confirm); nên sửa tiêu đề/tham chiếu hoặc trỏ sang file này.
5. **Art brief nội bộ** (`art/briefs/khac.json`…): prompt vẫn “Mít (mèo con)” — không user-facing nhưng lệch brand khi gen lại ảnh; đồng bộ “Bé Gấu + áo gấu” như `STYLE.md`.
6. **Sau chọn đúng:** tùy chọn `disabled` + `aria-disabled` trên `.choice-button` khi `awaitingNext` (hiện chỉ guard trong handler pick).
7. **QA thính giác (manual):** nghe 2–3 clip dao-pho + nuoc sau regen Piper để xác nhận không còn “Mít” trong waveform (file text đã sạch).

---

STATUS: **PARTIAL** — Luồng confirm-choice, Piper/TTS, disclaimer và audio key/file **PASS**; brand HTML placeholder “MÍT” và flash canvas khi load art **chưa PASS** hoàn toàn.

**NEXT_FOR_PARENT:** (1) một dòng sửa `index.html` + test brand; (2) tùy chọn polish `art.mjs` probe; (3) manual listen spot-check post-regen.
