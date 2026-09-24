# ART_DESIGN — Minh họa hoạt hình theo tình huống

## Vấn đề
Canvas hiện tại (khối chữ BỒN / NGƯỜI LỚN / MÍT) **không** truyền đạt tình huống nguy hiểm rõ cho trẻ. Cần **ảnh hoạt hình thật** theo từng tình huống.

## Quyết định parent
1. Mỗi tình huống có `assets/art/<situation.id>.png`.
2. **Không canvas** — thiếu ảnh thì placeholder.
3. Style: **kết quả giáo dục** — nền chân thực + 2 người (trẻ áo hình gấu + người lớn) + **X đỏ to trên nguy hiểm** + người lớn xua tay. Chi tiết `art/STYLE.md`.
4. Briefs: `art/briefs/all-gau-result.json`.
5. Chưa duyệt chuyên gia; không thu PII.

## Pipeline subagent

| Agent | Việc | File |
|---|---|---|
| S — Style bible | Mô tả nhân vật, palette, cấm/được | `art/STYLE.md` |
| B1 — Brief nước | 25 prompt sinh ảnh `nuoc-*` | `art/briefs/nuoc.json` |
| B2 — Brief điện | 125 prompt `dien-*` | `art/briefs/dien.json` |
| B3 — Brief khác | 100 prompt khac-* | `art/briefs/khac.json` |
| G — Generate (theo đợt) | Parent/tool GenerateImage theo brief ưu tiên | `assets/art/` |

### Schema brief (mỗi tình huống)
```json
{
  "id": "nuoc-l1-s1",
  "hazard": "…",
  "prompt_vi": "mô tả cảnh tiếng Việt ngắn",
  "image_prompt_en": "English prompt for image model, cartoon, 16:9, …",
  "must_show": ["bathtub", "adult nearby or called", "Mit cat child"],
  "must_not": ["injury", "blood", "scary face", "text labels on props"]
}
```

## Thứ tự sinh ảnh (ưu tiên)
1. **Nước bài 1** (5 tình huống) — chứng minh style  
2. Cả module nước (25)  
3. Điện lớp 1–2 (50)  
4. Cháy–bếp (25) rồi còn lại  

## Hợp đồng báo cáo child
STATUS / DONE / FILES / DEVIATIONS / BLOCKERS / NEXT_FOR_PARENT  
Cấm sửa AGENTS/PROJECT_STATE; không code app trừ khi parent giao.
