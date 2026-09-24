# CONTENT_DESIGN — Biên soạn tối đa tình huống + triển khai

## Quyết định parent (2026-09-24, theo yêu cầu user)
1. **Tên làm việc:** Bé Mít An Toàn  
2. **Mục tiêu nội dung:** càng nhiều tình huống hợp lệ càng tốt trong khung đã nghiên cứu.  
3. **Sau khi writer + reviewer thống nhất → parent triển khai prototype** (user ủy quyền).  
4. Vẫn thử nghiệm phụ; không thay `traffic-count-analyzer`; chưa tuyên bố đã duyệt; không PII.

## Quota mục tiêu (mỗi bài = 5 tình huống đủ script)

| Module | Bài | Tình huống | File writer |
|---|---|---|---|
| `nuoc` | 5 | 25 | `content/drafts/nuoc.mjs` |
| `dien` lớp 1–2 | 10 | 50 | `content/drafts/dien-g12.mjs` |
| `dien` lớp 3–5 | 15 | 75 | `content/drafts/dien-g35.mjs` |
| `khac-chay` + `khac-nga` | 10 | 50 | `content/drafts/khac-ab.mjs` |
| `khac-thuoc` + `khac-sac` | 10 | 50 | `content/drafts/khac-cd.mjs` |
| **Tổng** | **50 bài** | **250 tình huống** | |

Reviewers ghi: `content/REVIEW_SAFETY.md`, `content/REVIEW_PEDAGOGY.md`, rồi `content/APPROVED.md` (danh sách file đạt / cần sửa).

## Schema bắt buộc (mỗi tình huống)

```js
{
  id: 'nuoc-l1-s1',          // ổn định
  hazard: '…',               // nhãn ngắn
  prompt: '…',               // câu hỏi VN, có người lớn trong ngữ cảnh
  safeText: '…',
  safeFeedback: '…',         // nhẹ, khen/nhắc
  unsafeChoices: [
    { text: '…', feedback: '…' },
    { text: '…', feedback: '…' },
  ],
}
```

Mỗi bài:

```js
{
  id: 'nuoc-l1',
  moduleId: 'nuoc',
  gradeBand: '1-2' | '3-5' | '1' | '2' | …,
  title: '…',
  objective: '…',
  teacherPrompt: '…',
  situations: [ /* đúng 5 */ ],
}
```

Export: `export const LESSONS = [ … ];`

## Ranh giới cứng (writer + reviewer)
- Đáp án an toàn = nhận biết / tránh / **gọi hoặc đi cùng người lớn**.  
- Cấm: tự cứu đuối, tự sửa điện, tự chữa cháy, tự sơ cứu hóa chất, hù dọa, máu/thương tích nặng.  
- Không thu PII; không tuyên bố phê duyệt cơ quan.  
- Không sao chép nguyên văn sách; biên soạn mới.  
- `adultPresent` luôn true (engine sẽ gắn).

## Pipeline
1. Writers (song song) → drafts  
2. Reviewers → sửa lệch hoặc liệt kê FAIL; writers được resume nếu cần  
3. Parent merge `content/approved/*.mjs` → triển khai app  
4. Port local **5177**

## Triển khai (sau APPROVED)
- Engine/UI bám pattern `be-mit-qua-pho` (module → bài → 5 tình huống).  
- Disclaimer trang bìa.  
- Tests: đếm bài/tình huống + smoke browser.
