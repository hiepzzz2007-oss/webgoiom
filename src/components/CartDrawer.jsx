"use client";

import Link from "next/link";
import { useEffect } from "react";
import { Minus, Plus, Trash2, X } from "lucide-react";
import { formatPrice } from "@/data/products";
import { useCart } from "@/store/cart";
import PillowArt from "@/components/PillowArt";

export default function CartDrawer() {
  const { isOpen, closeCart, items, changeQuantity, removeItem } = useCart();
  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (event) => event.key === "Escape" && closeCart();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [isOpen, closeCart]);
  return (
    <>
      <button className={`drawer-backdrop ${isOpen ? "is-visible" : ""}`} onClick={closeCart} aria-label="Đóng giỏ hàng" tabIndex={isOpen ? 0 : -1} />
      <aside className={`cart-drawer ${isOpen ? "is-open" : ""}`} aria-hidden={!isOpen} aria-label="Giỏ hàng">
        <div className="drawer-head"><div><span className="eyebrow">GÓC NHỎ CỦA BẠN</span><h2>Giỏ hàng <span>({items.reduce((sum, i) => sum + i.quantity, 0)})</span></h2></div><button className="icon-button" onClick={closeCart} aria-label="Đóng"><X /></button></div>
        <div className="drawer-items">
          {items.length === 0 ? <div className="empty-cart"><span className="empty-cart-icon">♡</span><h3>Giỏ hàng còn trống</h3><p>Hãy chọn một chiếc gối thật êm cho góc nghỉ ngơi của bạn.</p><Link className="button button-dark" href="/shop" onClick={closeCart}>Khám phá gối ôm</Link></div> : items.map(({ key, product, color, size, quantity }) => (
            <article className="cart-line" key={key}><div className="cart-line-art"><PillowArt color={color} /></div><div className="cart-line-info"><div className="cart-line-title"><div><h3>{product.name}</h3><p>{size} · màu tùy chọn</p></div><button className="subtle-icon" onClick={() => removeItem(key)} aria-label={`Xóa ${product.name}`}><Trash2 size={16} /></button></div><div className="cart-line-bottom"><div className="quantity-control"><button onClick={() => changeQuantity(key, -1)} aria-label="Giảm số lượng"><Minus size={13} /></button><span>{quantity}</span><button onClick={() => changeQuantity(key, 1)} aria-label="Tăng số lượng"><Plus size={13} /></button></div><strong>{formatPrice(product.price * quantity)}</strong></div></div></article>
          ))}
        </div>
        {items.length > 0 && <div className="drawer-summary"><div className="shipping-note"><span>♡</span> Miễn phí giao hàng cho đơn từ 500.000đ</div><div className="subtotal-row"><span>Tạm tính</span><strong>{formatPrice(subtotal)}</strong></div><p>Phí vận chuyển được tính ở bước thanh toán.</p><Link className="button button-dark checkout-button" href="/checkout" onClick={closeCart}>Tiến hành thanh toán <span>→</span></Link><Link href="/shop" className="continue-shopping" onClick={closeCart}>Tiếp tục mua sắm</Link></div>}
      </aside>
    </>
  );
}
