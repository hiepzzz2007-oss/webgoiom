"use client";

import { use, useState } from "react";
import { notFound } from "next/navigation";
import { Check, Minus, Plus, ShieldCheck, Truck } from "lucide-react";
import Product3DViewer from "@/components/Product3DViewer";
import PillowArt from "@/components/PillowArt";
import { formatPrice, products } from "@/data/products";
import { useCart } from "@/store/cart";

const colors = [
  { name: "Hồng phấn", value: "#e8b9b5" }, { name: "Xanh biển", value: "#a9c9d1" },
  { name: "Kem sữa", value: "#e9ddc4" }, { name: "Oải hương", value: "#c7bdd7" },
];

export default function ProductPage({ params }) {
  const { slug } = use(params);
  const product = products.find((item) => item.slug === slug);
  const [color, setColor] = useState(product?.color || colors[0].value);
  const [size, setSize] = useState(product?.size || "1m5");
  const [quantity, setQuantity] = useState(1);
  const addItem = useCart((state) => state.addItem);
  if (!product) notFound();

  return <div className="product-detail-page"><div className="breadcrumbs"><a href="/">Trang chủ</a><span>/</span><a href="/shop">Gối ôm</a><span>/</span><strong>{product.name}</strong></div><section className="product-detail"><div className="product-visual-column"><Product3DViewer color={color} /><div className="detail-thumbnails"><div className="detail-thumb active"><PillowArt color={color} /></div><div className="detail-thumb"><span className="fabric-swatch" style={{ backgroundColor: color }} /></div><div className="detail-thumb detail-thumb-note"><span>cotton<br />hữu cơ</span></div></div></div>
    <div className="product-info"><span className="eyebrow">{product.label ? `${product.label.toUpperCase()} · ` : "ÔM NHÀ STUDIO · "}MÃ {product.id.toUpperCase()}</span><h1>{product.name}</h1><p className="product-subtitle">{product.subtitle}</p><div className="detail-price"><strong>{formatPrice(product.price)}</strong>{product.oldPrice && <del>{formatPrice(product.oldPrice)}</del>}<span>Đã gồm VAT</span></div><p className="product-description">{product.description}</p>
      <div className="selection-block"><div className="selection-title"><strong>Màu sắc</strong><span>{colors.find((item) => item.value === color)?.name}</span></div><div className="detail-swatches">{colors.map((option) => <button key={option.value} className={`detail-swatch ${color === option.value ? "selected" : ""}`} style={{ "--swatch": option.value }} onClick={() => setColor(option.value)} aria-label={option.name} title={option.name}>{color === option.value && <Check size={14} />}</button>)}</div></div>
      <div className="selection-block"><div className="selection-title"><strong>Kích thước</strong><span>Chọn theo thói quen ôm</span></div><div className="size-options">{["1m2", "1m5"].map((option) => <button key={option} className={size === option ? "selected" : ""} onClick={() => setSize(option)}>{option}<small>{option === "1m2" ? "Gọn xinh" : "Ôm thoải mái"}</small></button>)}</div></div>
      <div className="add-row"><div className="quantity-control quantity-large"><button onClick={() => setQuantity(Math.max(1, quantity - 1))} aria-label="Giảm số lượng"><Minus size={15} /></button><span>{quantity}</span><button onClick={() => setQuantity(quantity + 1)} aria-label="Tăng số lượng"><Plus size={15} /></button></div><button className="button button-dark add-to-cart" onClick={() => { for (let i = 0; i < quantity; i += 1) addItem(product, color, size); }}>Thêm vào giỏ hàng <span>·</span> {formatPrice(product.price * quantity)}</button></div>
      <div className="shipping-perks"><div><Truck size={18} /><span><strong>Giao hàng miễn phí</strong><small>Cho đơn từ 500.000đ</small></span></div><div><ShieldCheck size={18} /><span><strong>Đổi trả trong 7 ngày</strong><small>Yên tâm trải nghiệm</small></span></div></div><div className="detail-accordion"><details open><summary>Chất liệu & chăm sóc</summary><p>Vỏ cotton mềm mại, ruột bông microfiber êm nhẹ. Có thể tháo vỏ và giặt máy ở chế độ nhẹ.</p></details><details><summary>Giao hàng & đổi trả</summary><p>Đơn hàng được đóng gói cẩn thận. Bạn có thể đổi trả trong 7 ngày nếu sản phẩm còn nguyên trạng.</p></details></div>
    </div></section><section className="product-after"><span className="eyebrow">THÊM MỘT CHÚT ÊM</span><h2>Có thể bạn cũng <em>thích.</em></h2><div className="product-grid">{products.filter((item) => item.id !== product.id).slice(0, 3).map((item, i) => <a className="related-product" key={item.id} href={`/products/${item.slug}`}><PillowArt color={item.color} /><strong>{item.name}</strong><span>{formatPrice(item.price)}</span></a>)}</div></section></div>;
}
