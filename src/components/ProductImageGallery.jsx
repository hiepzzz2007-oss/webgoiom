"use client";

import { useState } from "react";
import ProductArtwork from "@/components/ProductArtwork";

const views = ["Toàn cảnh", "Chi tiết chất vải", "Đường may"];

export default function ProductImageGallery({ product, color }) {
  const [activeView, setActiveView] = useState(0);
  return <div className="product-visual-column">
    <div className="product-photo-frame">
      <ProductArtwork product={product} color={color} view={activeView} className="product-photo" />
      <span className="photo-counter">ẢNH {activeView + 1} / {views.length}</span>
      <span className="photo-help">Ảnh sản phẩm · màu sắc có thể chênh nhẹ theo màn hình</span>
    </div>
    <div className="detail-thumbnails" aria-label="Ảnh sản phẩm">
      {views.map((view, index) => <button type="button" key={view} className={`detail-thumb ${activeView === index ? "active" : ""}`} onClick={() => setActiveView(index)} aria-label={view} aria-pressed={activeView === index}>
        <ProductArtwork product={product} color={color} view={index} className="thumbnail-image" />
      </button>)}
    </div>
  </div>;
}
