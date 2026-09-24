# QA follow-up (parent) — 2026-09-24

Báo cáo [UX luồng](7f920bf6-b162-4694-89fe-35fa5a77bffd) / [a11y·hình](6546d49f-683f-40b9-b962-bcfedd52168f) đọc bản cũ; parent đã xử lý trước/sau QA:

| Phát hiện QA | Trạng thái |
|---|---|
| Loa đáp án đọc spoiler feedback | **Đã sửa** — chỉ `__ans-` / text đáp án |
| Thiếu hệ clip Piper | **Đã có** — `audio-clips.mjs` + `tts_generate.py` (đang sinh đủ 1753) |
| Minh họa chỉ tint module | **Đã có** — `scene-art.mjs` + `drawSafetyScene` |
| soundToggle / exit < 44px, thiếu aria-label | **Đã vá** (follow-up này) |
| Contrast footer / CTA | **Đã vá nhẹ** |

File QA gốc giữ nguyên làm lịch sử; lấy trạng thái từ code hiện tại + file này.
