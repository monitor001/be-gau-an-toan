# REVIEW_SAFETY — Rà soát ranh giới an toàn (drafts)

> Reviewer an toàn nội dung. Ngày: 2026-09-24.  
> Phạm vi: `CONTENT_DESIGN.md` + research `an-toan-nuoc|dien|khac` + **toàn bộ** `content/drafts/*.mjs`.  
> Chỉ sửa drafts khi FAIL; không sửa AGENTS / PROJECT_STATE / code app.

## Tổng đã duyệt

| File | Bài | Tình huống |
|---|---|---|
| `content/drafts/nuoc.mjs` | 5 | 25 |
| `content/drafts/dien-g12.mjs` | 10 | 50 |
| `content/drafts/dien-g35.mjs` | 15 | 75 |
| `content/drafts/khac-ab.mjs` | 10 | 50 |
| `content/drafts/khac-cd.mjs` | 10 | 50 |
| **Tổng** | **50** | **250** |

Tiêu chí cứng (CONTENT_DESIGN + research):

1. Không tự cứu đuối / nhảy xuống nước cứu (đáp án đúng).
2. Không tự sửa điện / cắt cầu dao–aptomat / chạm dây đứt / cứu nạn điện bằng tay (đáp án đúng).
3. Không tự chữa cháy / quay lại nhà cháy / sơ cứu hóa chất sai (gây nôn…) (đáp án đúng).
4. Không hù dọa, máu, thương tích nặng.
5. Có người lớn trong đáp án an toàn khi tình huống cần tránh / gọi trợ giúp.

Unsafe choice mô tả hành vi cấm rồi bị feedback từ chối = **đúng sư phạm**, không tính FAIL.

## FAIL đã sửa (id)

| id | File | Lý do FAIL | Cách sửa |
|---|---|---|---|
| `khac-thuoc-l1-s4` | `khac-cd.mjs` | `safeText` bảo **kéo bạn** sát khu vực chai tẩy (can thiệp tay gần hóa chất). | Đổi thành: nói không; đứng xa chai; gọi người lớn. |
| `khac-thuoc-l4-s1` | `khac-cd.mjs` | `safeText` cho trẻ **cầm chai** hóa chất đặt xuống. | Đổi thành: nhắc dừng / không uống / **không cầm chai**; gọi người lớn cất. |
| `khac-thuoc-l4-s4` | `khac-cd.mjs` | `safeText` ưu tiên trẻ **tự lấy ống kem** khỏi em nhỏ (tự xử lý trước khi báo). | Đổi thành: nhắc em không đưa miệng; **gọi ngay người lớn**. |
| `khac-thuoc-l4-s5` | `khac-cd.mjs` | `safeText` khuyên trẻ **lấy chai hóa chất ra khỏi cặp** (tự xử lý hóa chất). | Đổi thành: khuyên không mang đi chơi; **báo người lớn** lấy và cất. |
| `khac-sac-l4-s2` | `khac-cd.mjs` | `safeText` cho phép trẻ **tự lấy kéo** ra chỗ riêng nếu “đã được dạy”. | Đổi thành: không chơi bằng kéo; **gọi người lớn** lấy và cất. |
| `khac-nga-l3-s1` | `khac-ab.mjs` | Bạn chạy trên cầu thang nhưng đáp án đúng **thiếu gọi người lớn** khi cần. | Bổ sung: nhắc bạn không chạy; **gọi người lớn nếu bạn vẫn chạy**. |

**Số FAIL đã sửa:** 6.

## Module đạt không cần sửa (sau rà)

- **`nuoc.mjs` (25):** Đáp án đúng bám tránh / chờ người lớn / hô gọi trên bờ. `nuoc-l5-s3` đúng: ở trên bờ, không nhảy xuống. Unsafe “nhảy xuống cứu” bị từ chối.
- **`dien-g12.mjs` (50):** Tránh / không chạm / nhờ người lớn; không dạy sửa điện hay cắt cầu dao trong `safeText`.
- **`dien-g35.mjs` (75):** Dây đứt, mưa bão, trạm, diều, aptomat — đáp án đúng = đứng xa + báo người lớn; unsafe tự cắt điện / kéo nạn nhân bị từ chối. Không hù dọa trong safe path (`dien-g5-l5-s4` từ chối kể tai nạn nặng).
- **`khac-ab.mjs` (còn lại):** Cháy/nhiệt: không tự bình chữa cháy, không quay lại nhà, 114 qua người lớn. Té ngã: không trèo lan can / nhoài cửa sổ.

## Còn BLOCKER không?

**Không.** Không còn tình huống nào trong drafts vi phạm ranh giới cứng sau khi sửa 6 id trên.

Ghi chú (không chặn APPROVE): cổng giáo viên / chuyên gia / phụ huynh trước pilot với trẻ vẫn theo research — ngoài phạm vi reviewer nội dung này.

## Kết luận

**APPROVE_ALL: yes**

(50 bài / 250 tình huống đạt ranh giới an toàn cứng sau chỉnh sửa drafts kể trên.)

---

## STATUS (cho parent)

```
STATUS: OK
SCOPE: Review an toàn toàn bộ drafts (50 bài / 250 tình huống); sửa FAIL trong drafts; ghi REVIEW_SAFETY.md
DONE: Duyệt đủ 5 file drafts; sửa 6 FAIL; viết content/REVIEW_SAFETY.md; APPROVE_ALL=yes; không BLOCKER
FILES:
  - content/REVIEW_SAFETY.md (mới)
  - content/drafts/khac-cd.mjs (sửa 5 id)
  - content/drafts/khac-ab.mjs (sửa 1 id)
DEVIATIONS: Không sửa nuoc / dien drafts (không FAIL cứng). Không sửa app / AGENTS / PROJECT_STATE.
BLOCKERS: Không
ERRORS: Không
NEXT_FOR_PARENT: Chờ REVIEW_PEDAGOGY.md (và APPROVED.md khi đủ 2 reviewer). Sau đó merge content/approved/*.mjs → triển khai prototype port 5177 nếu user/parent chốt.
```
