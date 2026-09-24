# Hoàn thiện prototype — 2026-09-24

## Đã xong (playable)

| Hạng mục | Trạng thái |
|---|---|
| Nội dung 12 module / 100 bài / 500 tình huống | OK — `node scripts/qa-schema-smoke.mjs` |
| Track UI mầm non / tiểu học / tất cả | OK — `http://127.0.0.1:5177/` |
| `parentNote` bài mầm non mới | OK — màn hoàn thành |
| Patch Cứu với / Cháy! / 111 / dao-pho prompt | OK |
| Briefs RESULT 500 | OK — `art/briefs/all-gau-result.json` |
| La bàn AGENTS / PROJECT_STATE | Đã cập nhật 12/100/500 |

## Đang chạy nền

| Hạng mục | Ghi chú |
|---|---|
| Art 125 ID mới | **DONE** 125/125 (+ full game **500/500** RESULT) |
| TTS Piper | **DONE** 3503/3503 clips · `src/audio-clips.mjs` |

## Chưa / ngoài phạm vi prototype

- Review chuyên gia / GV / thử trẻ
- Coi `khac-than` là tài liệu đã duyệt (cần parent đọc)
- Không đổi hướng active (`traffic-count-analyzer`)

## Lệnh hữu ích

```text
python serve.py 127.0.0.1 5177
node scripts/qa-schema-smoke.mjs
node scripts/dump-tts-texts.mjs && python scripts/tts_generate.py
node scripts/rebuild-audio-clips.mjs   # nếu cần rebuild manifest sau TTS
```
