"use client";

import { useMemo, useState } from "react";
import { SlidersHorizontal } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export default function ShopPage() {
  const [size, setSize] = useState("Tất cả");
  const [price, setPrice] = useState("Tất cả mức giá");
  const [category, setCategory] = useState("Tất cả sản phẩm");
  const filtered = useMemo(() => products.filter((product) => {
    const sizeMatches = size === "Tất cả" || product.sizes.includes(size);
    const priceMatches = price === "Tất cả mức giá" || (price === "Dưới 400.000đ" ? product.price < 400000 : product.price >= 400000);
    const categoryMatches = category === "Tất cả sản phẩm" || product.category === category;
    return sizeMatches && priceMatches && categoryMatches;
  }), [size, price, category]);
  const allSizes = [...new Set(products.flatMap((product) => product.sizes))];
  return <div className="shop-page"><div className="shop-banner"><span className="eyebrow">BỘ SƯU TẬP ÔM NHÀ</span><h1>Mềm mại vừa <em>đủ.</em></h1><p>Gối ôm cho những đêm cần nghỉ ngơi, những sáng muốn nằm thêm một chút.</p><span className="shop-banner-mark">♡</span></div>
    <section className="shop-content"><div className="shop-toolbar"><div className="shop-result"><SlidersHorizontal size={17} /><strong>Bộ lọc</strong><span>({filtered.length} sản phẩm)</span></div><div className="filter-controls"><label>Loại<select value={category} onChange={(e) => setCategory(e.target.value)}><option>Tất cả sản phẩm</option><option>Gối ôm</option><option>Gối ngủ</option></select></label><label>Kích thước<select value={size} onChange={(e) => setSize(e.target.value)}><option>Tất cả</option>{allSizes.map((item) => <option key={item}>{item}</option>)}</select></label><label>Giá<select value={price} onChange={(e) => setPrice(e.target.value)}><option>Tất cả mức giá</option><option>Dưới 400.000đ</option><option>Từ 400.000đ</option></select></label></div></div>
      {filtered.length ? <div className="product-grid shop-grid">{filtered.map((product, i) => <ProductCard key={product.id} product={product} index={i} />)}</div> : <div className="no-results"><span>♡</span><h2>Chưa tìm thấy chiếc gối phù hợp</h2><p>Thử thay đổi bộ lọc loại, kích thước hoặc giá nhé.</p><button className="button button-outline" onClick={() => { setSize("Tất cả"); setPrice("Tất cả mức giá"); setCategory("Tất cả sản phẩm"); }}>Xóa bộ lọc</button></div>}</section>
  </div>;
}
