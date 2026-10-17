# Ôm Nhà — cửa hàng gối ôm

Demo e-commerce bằng Next.js App Router, Tailwind CSS, React Three Fiber và Zustand.

## Chạy ứng dụng

```bash
npm install
npm run dev
```

Mở `http://localhost:3000`. Trang sản phẩm dùng ảnh 2D tĩnh; nếu chưa có ảnh chụp, website tự tạo ảnh SVG minh họa nhẹ.

## Các luồng hiện có

- Trang chủ giới thiệu thương hiệu và sản phẩm nổi bật.
- Cửa hàng lọc theo giá và kích thước 1m2 / 1m5.
- Trang sản phẩm có thư viện ảnh, chọn màu và kích thước.
- Giỏ hàng trượt, lưu trạng thái trong trình duyệt bằng Zustand persist.
- Checkout có form giao hàng, lựa chọn QR/COD và QR minh họa. Không kết nối ngân hàng, không gửi dữ liệu.

Sản phẩm hiện dùng mock data trong `src/data/products.js`.

### Thay ảnh minh họa bằng ảnh chụp sản phẩm

Trang chi tiết, thẻ sản phẩm và giỏ hàng dùng `ProductArtwork`. Nếu sản phẩm chưa có ảnh thật, component tạo hình minh họa SVG nhẹ. Để dùng ảnh chụp, đặt ảnh trong `public/images/products/`, sau đó thêm đường dẫn vào dữ liệu sản phẩm:

```js
images: [
  "/images/products/goi-om-may-em-01.webp",
  "/images/products/goi-om-may-em-02.webp",
  "/images/products/goi-om-may-em-03.webp",
],
imagesByColor: {
  "#c9b49e": ["/images/products/may-em-nau-01.webp"],
  "#eee8df": ["/images/products/may-em-trang-01.webp"],
},
```

`images` lần lượt là ảnh toàn cảnh, cận chất vải và chi tiết đường may. `imagesByColor` cho phép thay cả bộ ảnh theo màu đã chọn.
