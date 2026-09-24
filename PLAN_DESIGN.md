# DESIGN đã chốt (Parent) — Kế hoạch chương trình giáo dục an toàn cho trẻ nhỏ

## Vai trò trong la bàn
- **Thử nghiệm phụ**, cùng họ với `ideas/be-mit-qua-pho`.
- **Không** thay hướng active `ideas/traffic-count-analyzer`.
- Subagent chỉ **nghiên cứu / lên kế hoạch**; **không code**, không sửa `AGENTS.md` / `PROJECT_STATE.md` / file sibling.

## Mẫu sản phẩm tham chiếu (Bé Mít Qua Phố)
- Trang bìa khóa học → thẻ theo nhóm (lớp hoặc module) → thẻ bài → 5 tình huống/bài.
- Mỗi tình huống: 3 lựa chọn, 1 đáp án an toàn; phản hồi nhẹ; thử lại; luôn có người lớn đồng hành trong ngữ cảnh.
- Không thu dữ liệu cá nhân; tiến độ chỉ trong phiên nếu sau này làm prototype.
- Nội dung **chưa** được chuyên gia/giáo viên/phụ huynh duyệt; **không** tuyên bố là hướng dẫn an toàn đã phê duyệt.

## Thiết kế chương trình mới
| Mục | Quyết định parent |
|---|---|
| Đối tượng | Trẻ tiểu học (khoảng lớp 1–5 / 6–11 tuổi), luôn cùng người lớn |
| Cấu trúc mục tiêu | 3–5 **module chủ đề** (nước, điện, + chủ đề khác); mỗi module có ma trận bài theo độ tuổi/lớp |
| Độ sâu mỗi bài | 5 tình huống chọn đáp án (giống Bé Mít) — chỉ mô tả trong kế hoạch, chưa viết full script |
| Nguồn | Ưu tiên tài liệu giáo dục VN / khuyến cáo chính thức (Bộ GD&ĐT, Bộ Y tế, PCCC, điện lực…) nếu tìm được; ghi rõ URL/tên; **không bịa** số liệu hay phê duyệt |
| Ranh giới an toàn | Không hù dọa; không khuyến khích trẻ tự xử lý nguy hiểm; hướng về nhận biết + gọi người lớn; không thu PII |
| Kinh doanh | Ghi giả thuyết ngắn; **không** đặt giá/doanh thu giả |

## Phân công file (cô lập)
| Agent | Phạm vi | File ghi |
|---|---|---|
| A | An toàn nước | `research/an-toan-nuoc.md` |
| B | An toàn điện | `research/an-toan-dien.md` |
| C | Các loại an toàn khác (nhà ở/sinh hoạt) | `research/an-toan-khac.md` |
| D | Khung chương trình tổng + đối chiếu Bé Mít | `research/khung-chuong-trinh.md` |

## Cổng sau nghiên cứu (chỉ Parent)
1. Đọc 4 báo cáo → chọn phạm vi MVP (1–2 module trước).
2. Cập nhật `PROJECT_STATE.md` / `AGENTS.md` nếu giữ hướng thử nghiệm.
3. **Chưa code** cho đến khi user/parent chốt sản phẩm.

## Changelog
- 2026-09-24 — Parent chốt DESIGN và giao 4 subagent nghiên cứu song song.
