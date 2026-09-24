# Tổng hợp parent — 4 báo cáo nghiên cứu (2026-09-24)

> Parent tổng hợp sau khi 4 subagent đều `STATUS: OK`. **Chưa code.** Chưa chọn tên/module MVP cuối — cần user chốt.

## Kết quả batch

| Agent | File | STATUS |
|---|---|---|
| An toàn nước | `research/an-toan-nuoc.md` | OK |
| An toàn điện | `research/an-toan-dien.md` | OK |
| An toàn khác | `research/an-toan-khac.md` | OK |
| Khung tổng | `research/khung-chuong-trinh.md` | OK |

## Bản đồ chương trình đề xuất

```text
Seri (tên TBD: Bé Mít An Toàn | Bé Mít Ở Nhà)
  ├─ Module Nước …… 5 bài môi trường (MVP hẹp: bài 1–3)
  ├─ Module Điện …… 25 bài đề xuất (MVP hẹp: nhà ở lớp 1–2)
  └─ Module khác
       ├─ A Cháy & nhiệt bếp (ưu tiên #1 trong “khác”)
       ├─ B Té ngã / ban công
       ├─ C Thuốc & hóa chất
       └─ D Vật sắc
```

UX mục tiêu: `bìa → module → lớp/bài → 5 tình huống`. MVP 1 module có thể tạm `bìa → lớp → bài` như Bé Mít.

## So sánh nhanh để chọn MVP

| Tiêu chí | Nước | Điện | Cháy–bếp (khác) |
|---|---|---|---|
| Nguồn chính thức VN | Mạnh (QĐ 1717/TTg, 2993/BGDĐT, 306/BYT) | EVN/MoIT khuyến cáo; **thiếu** bộ GD&ĐT 25 bài | TT 06 + QĐ 1527 PCCC; QĐ 548 nhà an toàn |
| Rủi ro hiểu nhầm “dạy cứu hộ” | Cao nếu viết sai bài 5 → đã khóa “chỉ gọi người lớn” | Cao nếu dạy tự sửa/cắt điện → đã cấm | Cao nếu dạy tự chữa cháy → đã cấm |
| Độ hẹp MVP dễ review | 3 bài (nhà → ao → bể) | 5–10 bài lớp 1–2 nhà ở | 5 bài module A |
| Khớp chính sách đang nóng | PC đuối nước 2025–2035 | Thường xuyên tuyên truyền EVN | PCCC trong trường |

## Khuyến nghị parent (chờ user xác nhận)

1. **MVP đầu tiên: An toàn nước** — bài 1–3 (nhà, ao/hồ, bể bơi); ~15 tình huống.
2. **Tên làm việc tạm:** *Bé Mít An Toàn* (giữ “Ở Nhà” nếu muốn nhấn nhà ở sau khi thêm điện/bếp).
3. **App tách** thư mục hiện tại; chưa hub chung với Bé Mít Qua Phố.
4. **Chưa code** đến khi user chốt sản phẩm + có ít nhất outline review bởi người lớn am hiểu.
5. Vòng 2 (sau review): điện MVP-A (lớp 1–2) **hoặc** cháy–bếp module A.

## Cần user chốt

1. Tên: An Toàn / Ở Nhà / khác?
2. Module MVP: nước (khuyến nghị) / điện / cháy–bếp?
3. Độ sâu: 3 bài nước hay rộng hơn?
4. Khi nào được viết script / prototype?

## Cấm nhắc lại

Không thu PII; không tuyên bố đã duyệt; không thay hướng active `traffic-count-analyzer`.
