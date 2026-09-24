# Pipeline nội dung — trạng thái

## Writers (đang chạy)

| Agent | File | Quota |
|---|---|---|
| [Nước](16c92f3b-c7ea-455b-be9b-bcbaaa9a3cfe) | `content/drafts/nuoc.mjs` | 5×5 = 25 |
| [Điện 1–2](ba68d1e5-0c34-4283-a52d-f9567ad4c6dd) | `content/drafts/dien-g12.mjs` | 10×5 = 50 |
| [Điện 3–5](aa9573bb-5011-4567-bd74-36870301ea37) | `content/drafts/dien-g35.mjs` | 15×5 = 75 |
| [Cháy+Ngã](2cb2dfa7-6cff-43f5-ae35-7ef7774553d5) | `content/drafts/khac-ab.mjs` | 10×5 = 50 |
| [Thuốc+Sắc](7095a9e2-a47d-4e57-b467-8228f79294eb) | `content/drafts/khac-cd.mjs` | 10×5 = 50 |

**Tổng mục tiêu: 50 bài · 250 tình huống**

## Tiếp theo (tự động)
1. 2 reviewer (an toàn sư phạm + thống nhất schema) → `content/APPROVED.md`
2. Parent merge vào `content/approved/` + gắn `src/curriculum.mjs` / UI
3. Smoke test port **5177**

## Đã dựng sẵn
- `CONTENT_DESIGN.md`, `src/game.mjs`, `src/audio.mjs`, `serve.py`
