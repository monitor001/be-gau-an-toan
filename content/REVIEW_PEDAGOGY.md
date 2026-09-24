# REVIEW_PEDAGOGY — Schema + sư phạm

**Reviewer:** schema + sư phạm (subagent)  
**Ngày:** 2026-09-24  
**Nguồn:** `CONTENT_DESIGN.md` + `content/drafts/*.mjs`

## Đếm theo file

| File | Bài | Tình huống | Quota | Kết quả |
|---|---:|---:|---|---|
| `nuoc.mjs` | 5 | 25 | 5 / 25 | OK |
| `dien-g12.mjs` | 10 | 50 | 10 / 50 | OK |
| `dien-g35.mjs` | 15 | 75 | 15 / 75 | OK |
| `khac-ab.mjs` | 10 | 50 | 10 / 50 | OK |
| `khac-cd.mjs` | 10 | 50 | 10 / 50 | OK |
| **Tổng** | **50** | **250** | **50 / 250** | **OK** |

**ModuleId:** `nuoc` 5 · `dien` 25 · `khac-chay` 5 · `khac-nga` 5 · `khac-thuoc` 5 · `khac-sac` 5.

**ID:** 50 lesson + 250 situation = **300 id unique** (không trùng).

## Checklist schema (mỗi bài / mỗi tình huống)

- Lesson: `id`, `moduleId`, `gradeBand`, `title`, `objective`, `teacherPrompt`, `situations.length === 5` → pass
- Situation: `id`, `hazard`, `prompt`, `safeText`, `safeFeedback`, `unsafeChoices.length === 2` (mỗi phần tử có `text` + `feedback`) → pass
- Đúng 1 safe path (`safeText` duy nhất, không mảng safe phụ) → pass
- Export `LESSONS` → pass

## Sư phạm (ngôn ngữ / phản hồi / đa dạng)

- Ngôn ngữ tiểu học, câu ngắn; phản hồi nhẹ (khen / nhắc), không hù dọa, không máu/thương tích nặng trong copy đã quét.
- Safe path bám nhận biết / tránh / gọi hoặc đi cùng người lớn; không dạy tự cứu đuối, tự sửa điện, tự chữa cháy, tự gây nôn.
- Không phát hiện copy-paste identical `prompt` / `safeText` / `safeFeedback` trong cùng bài; không cặp safeFeedback/safeText gần trùng nặng (Jaccard ≥ 0.85).

## Lỗi đã sửa (nhẹ)

1. **`dien-g3-l3-s5`** (`dien-g35.mjs`): prompt/safe thiếu tín hiệu người lớn → thêm cô trực sân + báo cô trong safe path.
2. **`khac-nga-l5-s5`** (`khac-ab.mjs`): prompt/safe thiếu người lớn trong ngữ cảnh chọn chỗ chơi → thêm bà + hỏi bà trước.

Không sửa schema khác; không đụng `app/src`; không đụng `REVIEW_SAFETY.md`.

## APPROVE_SCHEMA

**APPROVE_SCHEMA: yes**

Đã copy 5 file sang `content/approved/` (khớp drafts sau sửa).

## NOTE

**Chờ safety:** `content/REVIEW_SAFETY.md` chưa có (sibling safety chưa xong). Schema/sư phạm vẫn approve; merge triển khai prototype nên chờ safety sibling xong hoặc parent quyết định.
