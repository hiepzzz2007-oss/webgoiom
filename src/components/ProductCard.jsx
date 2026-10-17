import Link from "next/link";
import { ArrowUpRight, Heart } from "lucide-react";
import { formatPrice } from "@/data/products";
import ProductArtwork from "@/components/ProductArtwork";

export default function ProductCard({ product, index = 0 }) {
  return (
    <article className="product-card" style={{ "--card-index": index }}>
      <Link className="product-card-image" href={`/products/${product.slug}`} aria-label={`Xem ${product.name}`}>
        {product.label && <span className="product-label">{product.label}</span>}
        <span className="favorite-button" aria-hidden="true"><Heart size={17} /></span>
        <ProductArtwork product={product} />
        <span className="quick-view">Xem sản phẩm <ArrowUpRight size={15} /></span>
      </Link>
      <div className="product-card-details"><div><Link href={`/products/${product.slug}`}><h3>{product.name}</h3></Link><p>{product.subtitle}</p></div><div className="product-price"><strong>{formatPrice(product.price)}</strong>{product.oldPrice && <del>{formatPrice(product.oldPrice)}</del>}</div></div>
      <div className="swatch-row"><span className="color-swatch" style={{ backgroundColor: product.color }} /><span className="size-caption">{product.size}</span></div>
    </article>
  );
}
