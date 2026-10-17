import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Image as ImageIcon, Sparkles } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import PillowArt from "@/components/PillowArt";
import { products } from "@/data/products";

export default function HomePage() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-copy"><span className="eyebrow"><span className="hero-sparkle">✳</span> NGỦ ÊM HƠN, MỖI NGÀY</span><h1>Về nhà,<br /><em>ôm một giấc mơ.</em></h1><p>Những chiếc gối ôm mềm mại được làm ra để bạn thả lỏng, nghỉ ngơi và ngủ ngon hơn.</p><div className="hero-actions"><Link className="button button-dark" href="/shop">Tìm chiếc gối của bạn <ArrowRight size={16} /></Link><Link className="text-link" href="/products/goi-om-may-em">Xem ảnh sản phẩm <ImageIcon size={16} /></Link></div><div className="hero-proof"><div className="proof-avatars"><i>H</i><i>M</i><i>L</i></div><span><strong>2.400+</strong> giấc ngủ được ôm ấp</span></div></div>
        <div className="hero-art"><div className="hero-art-wash" /><div className="hero-sun" /><Image src="/images/goidemo.jpg" alt="Chiếc gối Ôm Nhà" fill priority sizes="(max-width: 900px) 90vw, 45vw" className="hero-product-image" /><div className="hero-sticker"><span>✳</span><small>made for<br />slow mornings</small></div><div className="hero-note">Cotton mềm, lòng cũng mềm <span>♡</span></div><div className="hero-index">01 — 04</div></div>
        <a href="#featured" className="scroll-cue"><span>CUỘN ĐỂ KHÁM PHÁ</span><i /></a>
      </section>

      <section className="promise-strip"><div><span>01</span><strong>Chất liệu lành tính</strong><small>Chạm dịu dàng lên da</small></div><div><span>02</span><strong>Ôm vừa vặn</strong><small>Nâng đỡ suốt đêm dài</small></div><div><span>03</span><strong>Giao hàng tận tâm</strong><small>Đổi trả trong 7 ngày</small></div><div><span>04</span><strong>Thiết kế tại Việt Nam</strong><small>Chăm chút từng đường may</small></div></section>

      <section className="section featured-section" id="featured"><div className="section-heading"><div><span className="eyebrow">MỘT CHIẾC ÔM ĐANG ĐƯỢC YÊU</span><h2>Góc ngủ thêm <em>dịu dàng.</em></h2></div><Link className="text-link" href="/shop">Xem tất cả sản phẩm <ArrowRight size={16} /></Link></div><div className="product-grid">{products.slice(0, 4).map((product, i) => <ProductCard key={product.id} product={product} index={i} />)}</div></section>

      <section className="story-section" id="story"><div className="story-visual"><div className="story-stamp">GOOD<br />NIGHT<br /><span>♡</span></div><PillowArt color="#b49a80" /></div><div className="story-copy"><span className="eyebrow">MỘT CHÚT DỊU DÀNG CHO BẠN</span><h2>Không chỉ là chiếc gối.<br /><em>Là cảm giác được trở về.</em></h2><p>Ôm Nhà bắt đầu từ một điều giản dị: ai cũng xứng đáng có một nơi thật êm để nghỉ ngơi. Mỗi chiếc gối được chọn chất liệu kỹ càng, may đo cẩn thận và gửi đi với thật nhiều thương mến.</p><Link className="button button-outline" href="/shop">Tìm hiểu bộ sưu tập <ArrowRight size={16} /></Link><span className="story-sign">thương bạn, Ôm Nhà <b>♡</b></span></div></section>

      <section className="quote-section" id="reviews"><Sparkles size={18} /><blockquote>“Từ ngày có chiếc gối này, mình có cảm giác căn phòng nhỏ ấm áp hơn hẳn.”</blockquote><span>— MINH ANH, KHÁCH HÀNG ÔM NHÀ</span><div className="quote-dots"><i className="active" /><i /><i /></div></section>
      <section className="home-cta"><div><span className="eyebrow">MỘT CHIẾC ÔM ĐANG CHỜ BẠN</span><h2>Đêm nay, ngủ <em>thật ngon nhé.</em></h2></div><Link className="button button-light" href="/shop">Chọn gối ôm <ArrowRight size={16} /></Link></section>
    </>
  );
}
