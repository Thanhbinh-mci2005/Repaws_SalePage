# RePaws — Sales Page

Trang bán hàng tĩnh (static landing page) cho thương hiệu **RePaws** — dòng sản phẩm chăm sóc thú cưng bền vững, sản xuất từ phụ phẩm dứa và bồ hòn Việt Nam. Nội dung và định vị thương hiệu được rút ra từ báo cáo cuối kỳ EBDB 5 – Group 3, NEU Business School.

## Sản phẩm

| SKU | Tên | Dung tích | Giá Amazon US |
|---|---|---|---|
| RPW-SHP-01 | RePaws Pineapple Shampoo | 500 ml | USD 13 |
| RPW-SPR-01 | RePaws Nourishing Pet Spray | 500 ml | USD 13 |
| RPW-BLM-01 | RePaws Pineapple Pet Balm | 500 g | USD 20 |

Bundle 3 SKU: **$41.40** (tiết kiệm 10%).

## Cấu trúc trang

1. Hero — định vị thương hiệu & USP chính (4.4★, ECOCERT, FDA-ready).
2. Trust strip — chứng nhận (ECOCERT, FDA, VNTEST, ISO 22716, Climate Pledge).
3. Sản phẩm — 3 card chi tiết + bundle tiết kiệm.
4. Brand story — kinh tế tuần hoàn từ 248,000 tấn phụ phẩm dứa.
5. Ingredients — bromelain, saponin bồ hòn, glycerin + vitamin, probiotic fermentation.
6. Bảng so sánh với mass brand & natural brand khác.
7. Reviews — 3 testimonial 4.4★ tiêu biểu.
8. Subscribe & Save — form email với mã giảm 15%.
9. FAQ — 5 câu hỏi an toàn / sản xuất / vận chuyển.
10. CTA cuối + Footer.

## Tính năng tương tác

- **Click vào product card** → mở **modal chi tiết** với 4 tab (Overview / Ingredients / How to use / Specs), gallery thumbnails, rating, qty selector và Add-to-cart riêng.
- **Mini-cart** lưu trong session (Add to Cart, đếm số lượng, xoá item, tổng tiền).
- **Form Subscribe** validate email cơ bản.
- **Sticky nav** + **mobile burger menu**.
- **Reveal-on-scroll** cho card, ingredient, review.
- Hỗ trợ keyboard (Enter/Space mở modal, Esc đóng).

## Ảnh sản phẩm

Đặt ảnh vào folder `assets/images/`:

- `logo.png` — Logo RePaws
- `product-shampoo.jpg` — Pineapple Shampoo
- `product-spray.jpg` — Nourishing Pet Spray
- `product-balm.jpg` — Pineapple Pet Balm

Xem thêm `assets/images/README.md` cho hướng dẫn chi tiết.

## Chạy local

Không cần build step:

```bash
# Mở trực tiếp
open index.html

# Hoặc serve qua python
python3 -m http.server 8000
```

Sau đó truy cập `http://localhost:8000`.

## Files

- `index.html` — markup trang
- `styles.css` — toàn bộ style (mobile-first responsive)
- `main.js` — cart, form, scroll reveal, menu

## Thông tin thương hiệu

- **Joint Venture**: GreenLeaf Vietnam JSC (60%) × ECOSOI Vietnam (40%)
- **Định vị**: "The only pet shampoo made from pineapple waste — naturally gentle, genuinely sustainable."
- **Target**: US pet owners 25–45 tuổi, household income $60k+, có chó/mèo nhỏ-vừa.
- **Kênh**: Amazon US (primary), D2C website (secondary), kế hoạch mở rộng UK trong Y3.
