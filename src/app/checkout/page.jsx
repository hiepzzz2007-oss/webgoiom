"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Check, ChevronLeft, LockKeyhole } from "lucide-react";
import { formatPrice } from "@/data/products";
import { useCart } from "@/store/cart";
import ProductArtwork from "@/components/ProductArtwork";

function DemoQr() {
  const cells = useMemo(() => Array.from({ length: 225 }, (_, index) => {
    const x = index % 15; const y = Math.floor(index / 15);
    const finder = (ox, oy) => x >= ox && x < ox + 5 && y >= oy && y < oy + 5 && (x === ox || x === ox + 4 || y === oy || y === oy + 4 || (x === ox + 2 && y === oy + 2));
    return finder(0, 0) || finder(10, 0) || finder(0, 10) || ((x * 7 + y * 11 + x * y) % 5 < 2);
  }), []);
  return <div className="demo-qr" aria-label="Mã QR minh họa">{cells.map((active, index) => <i key={index} className={active ? "on" : ""} />)}</div>;
}

export default function CheckoutPage() {
  const items = useCart((state) => state.items);
  const clearCart = useCart((state) => state.clearCart);
  const [submitted, setSubmitted] = useState(false);
  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const shipping = subtotal >= 500000 || subtotal === 0 ? 0 : 30000;
  const total = subtotal + shipping;

  if (submitted) return <div className="order-success"><span className="success-icon"><Check size={30} /></span><span className="eyebrow">CẢM ƠN BẠN ĐÃ CHỌN ÔM NHÀ</span><h1>Đơn hàng đã <em>được ghi nhận.</em></h1><p>Đây là bản demo đồ án, chưa có thanh toán hoặc tạo đơn thực tế. Thông tin bạn vừa nhập không được gửi đi.</p><Link href="/shop" className="button button-dark">Tiếp tục khám phá</Link></div>;
  if (!items.length) return <div className="checkout-empty"><span className="eyebrow">THANH TOÁN</span><h1>Giỏ hàng đang <em>trống.</em></h1><p>Thêm chiếc gối yêu thích vào giỏ rồi quay lại nhé.</p><Link className="button button-dark" href="/shop">Đến cửa hàng</Link></div>;

  return <div className="checkout-page"><Link className="back-link" href="/shop"><ChevronLeft size={16} /> Tiếp tục mua sắm</Link><div className="checkout-heading"><span className="eyebrow">CHỈ CÒN MỘT BƯỚC NHỎ</span><h1>Hoàn tất đơn <em>hàng.</em></h1></div><form className="checkout-layout" onSubmit={(event) => { event.preventDefault(); clearCart(); setSubmitted(true); window.scrollTo({ top: 0, behavior: "smooth" }); }}><div className="checkout-form-column"><section className="form-section"><div className="form-section-heading"><span>01</span><div><h2>Thông tin giao hàng</h2><p>Để Ôm Nhà gửi chiếc gối đến bạn.</p></div></div><div className="form-grid"><label className="field full">Họ và tên<input required name="name" autoComplete="name" placeholder="Nguyễn Minh Anh" /></label><label className="field">Email<input required type="email" name="email" autoComplete="email" placeholder="ban@email.com" /></label><label className="field">Số điện thoại<input required type="tel" name="phone" autoComplete="tel" placeholder="09xx xxx xxx" /></label><label className="field full">Địa chỉ nhận hàng<input required name="address" autoComplete="street-address" placeholder="Số nhà, tên đường, phường/xã" /></label><label className="field">Tỉnh / thành phố<input required name="city" autoComplete="address-level1" placeholder="TP. Hồ Chí Minh" /></label><label className="field">Ghi chú <span>(không bắt buộc)</span><input name="note" placeholder="Giao giờ hành chính..." /></label></div></section>
    <section className="form-section payment-section"><div className="form-section-heading"><span>02</span><div><h2>Phương thức thanh toán</h2><p>Chọn cách thanh toán phù hợp.</p></div></div><label className="payment-option selected"><input type="radio" name="payment" value="qr" defaultChecked /><span className="radio-custom" /><span className="payment-copy"><strong>Quét mã QR</strong><small>VietQR / ngân hàng (mô phỏng)</small></span><span className="payment-logos">QR</span></label><div className="qr-preview"><DemoQr /><div><strong>Mã QR thanh toán demo</strong><p>Quét mã thực tế không thực hiện thanh toán.<br />Mã này chỉ minh họa giao diện đồ án.</p><span className="demo-warning"><LockKeyhole size={13} /> Không kết nối ngân hàng</span></div></div><label className="payment-option"><input type="radio" name="payment" value="cod" /><span className="radio-custom" /><span className="payment-copy"><strong>Thanh toán khi nhận hàng</strong><small>Trả tiền khi gối được giao đến bạn</small></span><span className="cod-pill">COD</span></label></section></div>
    <aside className="order-summary"><h2>Đơn hàng của bạn <span>({items.length})</span></h2><div className="summary-products">{items.map(({ key, product, color, size, quantity }) => <div className="summary-item" key={key}><div className="summary-item-art"><ProductArtwork product={product} color={color} /><span>{quantity}</span></div><div><strong>{product.name}</strong><small>{size} · tùy chỉnh màu</small></div><b>{formatPrice(product.price * quantity)}</b></div>)}</div><div className="summary-calculation"><div><span>Tạm tính</span><span>{formatPrice(subtotal)}</span></div><div><span>Giao hàng</span><span>{shipping ? formatPrice(shipping) : "Miễn phí"}</span></div><div className="summary-total"><strong>Tổng thanh toán</strong><strong>{formatPrice(total)}</strong></div></div><div className="promo-input"><input aria-label="Mã ưu đãi" placeholder="Mã ưu đãi" /><button type="button">Áp dụng</button></div><button className="button button-dark place-order" type="submit">Đặt hàng <span>·</span> {formatPrice(total)} <Check size={16} /></button><p className="secure-note"><LockKeyhole size={13} /> Thông tin được bảo vệ trong bản demo</p><p className="demo-disclaimer">Đồ án mô phỏng: không thu tiền, không gửi dữ liệu.</p></aside></form></div>;
}
