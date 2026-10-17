import Image from "next/image";

function demoImage(color, category, view) {
  const safeColor = /^#[0-9a-f]{6}$/i.test(color || "") ? color : "#c9b49e";
  const sleepingPillow = category === "Gối ngủ";
  const shape = sleepingPillow
    ? `<rect x="165" y="205" width="470" height="210" rx="95" fill="url(#cloth)"/>`
    : `<path d="M147 307c0-80 47-122 124-122h258c77 0 124 42 124 122s-47 122-124 122H271c-77 0-124-42-124-122Z" fill="url(#cloth)"/>`;
  const overlay = view === 1
    ? `<circle cx="598" cy="188" r="78" fill="${safeColor}" stroke="#fff" stroke-width="12"/><path d="M552 188h92M598 142v92" stroke="#fff" stroke-opacity=".45" stroke-width="3"/>`
    : view === 2
      ? `<path d="M540 366h68v32h-68z" rx="5" fill="#f6f0e8"/><text x="574" y="387" text-anchor="middle" font-family="Times New Roman" font-size="14" fill="#6a5241">ÔM NHÀ</text>`
      : "";
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600"><defs><linearGradient id="cloth" x1=".1" y1=".1" x2=".8" y2="1"><stop stop-color="#fff" stop-opacity=".7"/><stop offset=".38" stop-color="${safeColor}"/><stop offset="1" stop-color="${safeColor}" stop-opacity=".74"/></linearGradient><filter id="shadow" x="-.3" y="-.4" width="1.7" height="1.9"><feGaussianBlur stdDeviation="18"/></filter><pattern id="weave" width="7" height="7" patternUnits="userSpaceOnUse"><path d="M0 1h7M1 0v7" stroke="#fff" stroke-opacity=".16" stroke-width=".7"/></pattern></defs><ellipse cx="400" cy="430" rx="250" ry="30" fill="#493a30" opacity=".16" filter="url(#shadow)"/>${shape}<path d="M172 304c22-52 55-75 104-76h245c48 0 82 24 103 76" fill="none" stroke="#fff" stroke-opacity=".48" stroke-width="4"/><path d="M153 308c0-76 48-119 120-119h258c74 0 116 43 116 119" fill="none" stroke="url(#weave)" stroke-width="8"/>${overlay}</svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

export function getProductImage(product, color = product.color, view = 0) {
  return product.imagesByColor?.[color]?.[view]
    || product.images?.[view]
    || product.image
    || demoImage(color, product.category, view);
}

export default function ProductArtwork({ product, color = product.color, view = 0, className = "" }) {
  const src = getProductImage(product, color, view);
  return <div className={`product-artwork ${className}`}>
    <Image className="product-artwork-image" src={src} alt={`${product.name} — ảnh sản phẩm`} fill sizes="(max-width: 680px) 50vw, (max-width: 1000px) 33vw, 25vw" unoptimized={src.startsWith("data:")} />
  </div>;
}
