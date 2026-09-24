# QA UX Flow — Bé Mít An Toàn

So sánh với pattern đúng: `ideas/be-mit-qua-pho/src/ui.mjs`  
(loa tình huống · loa đáp án · VERDICT trước feedback · nút “Tình huống kế tiếp” · không auto-advance)

Phạm vi đọc: `index.html`, `src/ui.mjs`, `src/game.mjs`, `src/speech.mjs`, `src/audio.mjs`, `styles.css` (phần speak/verdict/choice).  
Không sửa code app trong lần QA này.

---

## 1. Checklist PASS / FAIL

| # | Tiêu chí | Kết quả | Căn cứ ngắn |
|---|----------|---------|-------------|
| **(a)** | Nút loa prompt (nghe lại tình huống) | **PASS** | `#speakSceneButton` trong `index.html` ~100; handler `ui.mjs` 407–411 đọc hazard + prompt. |
| **(b)** | Nút loa mỗi đáp án | **FAIL** | Có nút `.choice-speak` cạnh mỗi đáp án (`ui.mjs` 327–337) và style `styles.css` 7–11 — **nhưng** đọc cả `choice.feedback` (không chỉ nội dung đáp án như pattern qua-pho). |
| **(c)** | Thông báo đúng/sai **trước** khuyến nghị | **PASS** | DOM: `#verdict` trước `#feedback` (`index.html` 104–105). Logic: `renderFeedback` hiện `VERDICT` rồi mới `feedback` (`ui.mjs` 357–374). TTS: `say(VERDICT)` rồi `say(feedback, { queue: true })` (`ui.mjs` 321–323). Engine: `game.mjs` set `verdict` + `feedback` tách biệt. |
| **(d)** | Không nhảy tình huống khi chọn đúng — phải bấm nút | **PASS** | `chooseOption` safe → `awaitingNext: true` (`game.mjs` 39–46); không gọi `advanceScene` trong click đáp án. Nút `#nextSceneButton` hiện khi `awaitingNext` (`ui.mjs` 369–370, 391–401). Sai → vẫn ở cảnh, không advance. |
| **(e)** | TTS tiếng Việt / hệ clip riêng | **PARTIAL** | **PASS một phần:** `speech.mjs` dùng `SpeechSynthesisUtterance` + `lang = 'vi-VN'` + chọn voice `/^vi/`. **FAIL so với pattern:** không có `AUDIO_CLIPS` / `clipKey` / file Piper như `be-mit-qua-pho` — chỉ TTS trình duyệt + cue Web Audio (`audio.mjs`). |
| **(f)** | Trực quan điều hướng bìa → module → bài | **PASS** | `setScreen` 4 panel: cover → modules → lessons → game (`ui.mjs` 49–55). CTA “Bắt đầu học”, “← Bìa khóa học”, “← Danh sách module”, “← Danh sách bài” (`index.html` + handlers). Lưới module/bài có meta tiến độ. |

**Tóm tắt:** 4 PASS · 1 FAIL · 1 PARTIAL.

---

## 2. Lỗi cụ thể + đề xuất sửa ngắn

### Lỗi A — Loa đáp án đọc luôn khuyến nghị (spoiler) — **nghiêm trọng UX**

- **File:** `src/ui.mjs` dòng **332–336**  
- **Hiện trạng:** `say(\`${answerText}. ${choice.feedback}\`)` — bé nghe feedback trước khi chọn.  
- **Pattern đúng:** `be-mit-qua-pho` chỉ `say(choice.text…)` + clip `__ans-`.  
- **Sửa:** Chỉ đọc `choice.text` (đã trim). Feedback chỉ đọc sau khi chọn (đã có ở click đáp án).

### Lỗi B — Loa đáp án không chặn khi đang chờ “Tình huống kế tiếp”

- **File:** `src/ui.mjs` dòng **332–336** (thiếu guard)  
- **Pattern:** qua-pho `if (game.awaitingNext \|\| game.completed) return` trước khi đọc đáp án.  
- **Sửa:** Thêm cùng guard; tùy chọn `disabled` nút `.choice-speak` khi `awaitingNext`.

### Lỗi C — Không có hệ clip tiếng Việt riêng

- **File:** `src/speech.mjs` (toàn file); thiếu `audio-clips.mjs` / assets  
- **Hiện trạng:** Chỉ Web Speech; phụ thuộc giọng máy; không offline clip ổn định như qua-pho.  
- **Sửa (khi parent chốt):** Port pattern `clipKey` + `AUDIO_CLIPS` từ qua-pho; TTS giữ làm fallback.

### Lỗi D — Cue âm thanh tên lệch pattern (nhẹ)

- **File:** `src/ui.mjs` 334, 350; `src/audio.mjs` 36  
- **Hiện trạng:** Loa đáp án / vào cảnh dùng `playCue('start')`. Qua-pho dùng `'situation'`.  
- **Sửa:** Đổi tên cue hoặc map `situation` → cùng tone (đồng bộ trải nghiệm hai game).

### Ghi chú không xếp FAIL checklist

- Sau chọn đúng, không disable trực quan các `.choice-button` (chỉ chặn bằng `awaitingNext` trong handler) — chấp nhận được vì engine đã khóa advance; có thể thêm `disabled`/`aria-disabled` cho rõ hơn.  
- `#returnHubButton` text `Về bài ${module}` (`ui.mjs` 220) hơi mơ hồ so với “Về danh sách bài” trên finish — chỉnh copy khi polish.

---

## 3. Ma trận so pattern (qua-pho)

| Pattern | An Toàn |
|---------|---------|
| Loa tình huống | Có |
| Loa mỗi đáp án (chỉ text đáp án) | Có nút · **sai nội dung đọc** |
| VERDICT UI trước feedback | Đúng |
| VERDICT TTS rồi queue feedback | Đúng |
| Nút “Tình huống kế tiếp” / “Xem kết quả…” | Đúng · không auto-advance |
| Clip file + TTS fallback | Chỉ TTS |

---

STATUS: **PARTIAL**

NEXT_FOR_PARENT:
1. Sửa ngay Lỗi A (+ B) trong `ui.mjs` — loa đáp án chỉ đọc text, có guard `awaitingNext`.
2. Quyết định có port hệ clip từ qua-pho hay chấp nhận TTS-only cho An Toàn (Lỗi C).
3. Không cần đụng `game.mjs` cho checklist (a)–(d) — engine đã khớp pattern auto-advance / verdict.
