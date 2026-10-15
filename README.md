# Ôm Nhà — cửa hàng gối ôm

Demo e-commerce bằng Next.js App Router, Tailwind CSS, React Three Fiber và Zustand.

## Chạy ứng dụng

```bash
npm install
npm run dev
```

Mở `http://localhost:3000`. Để xem mô hình 3D, thêm file `pillow.glb` vào `public/models/pillow.glb`. Khi chưa có file này, vùng xem 3D sẽ hiện lời nhắc; các trang cửa hàng, giỏ hàng và checkout demo vẫn hoạt động.

## Các luồng hiện có

- Trang chủ giới thiệu thương hiệu và sản phẩm nổi bật.
- Cửa hàng lọc theo giá và kích thước 1m2 / 1m5.
- Trang sản phẩm có xoay/zoom 3D, chọn màu theo thời gian thực và chọn kích thước.
- Giỏ hàng trượt, lưu trạng thái trong trình duyệt bằng Zustand persist.
- Checkout có form giao hàng, lựa chọn QR/COD và QR minh họa. Không kết nối ngân hàng, không gửi dữ liệu.

Sản phẩm hiện dùng mock data trong `src/data/products.js`.
