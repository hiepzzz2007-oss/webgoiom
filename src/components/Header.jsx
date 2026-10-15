"use client";

import Link from "next/link";
import { ShoppingBag, Menu } from "lucide-react";
import { useCart } from "@/store/cart";

export default function Header() {
  const openCart = useCart((state) => state.openCart);
  const count = useCart((state) => state.items.reduce((sum, item) => sum + item.quantity, 0));
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand" href="/" aria-label="Ôm Nhà - Trang chủ"><span className="brand-mark">ôm</span><span>nhà</span></Link>
        <nav className="desktop-nav" aria-label="Điều hướng chính">
          <Link href="/shop">Cửa hàng</Link><a href="/#story">Câu chuyện</a><a href="/#reviews">Khách hàng</a>
        </nav>
        <div className="header-actions">
          <Link className="header-shop-link" href="/shop">Khám phá bộ sưu tập</Link>
          <button className="icon-button mobile-menu" aria-label="Mở cửa hàng" onClick={() => location.assign("/shop")}><Menu size={19} /></button>
          <button className="icon-button cart-trigger" aria-label={`Mở giỏ hàng, ${count} sản phẩm`} onClick={openCart}>
            <ShoppingBag size={19} /><span>Giỏ hàng</span>{count > 0 && <b className="cart-count">{count}</b>}
          </button>
        </div>
      </div>
    </header>
  );
}
