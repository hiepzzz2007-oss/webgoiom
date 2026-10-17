import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div><Link className="brand footer-brand" href="/"><span className="brand-mark">ôm</span><span>nhà</span></Link><p>Những chiếc ôm dịu dàng, bắt đầu từ giấc ngủ ngon.</p></div>
        <div><strong>Khám phá</strong><Link href="/shop">Tất cả sản phẩm</Link><Link href="/#story">Về Ôm Nhà</Link></div>
        <div><strong>Hỗ trợ</strong><a href="mailto:xinchao@omnhashop.vn">Liên hệ với chúng mình</a><span>Đổi trả trong 7 ngày</span></div>
        <div className="newsletter"><strong>Nhận thư từ Ôm Nhà</strong><p>Một chút êm ái trong hộp thư của bạn.</p><form action="#"><label className="sr-only" htmlFor="newsletter-email">Email của bạn</label><input id="newsletter-email" type="email" placeholder="Email của bạn" /><button type="submit" aria-label="Đăng ký nhận tin">→</button></form></div>
      </div>
      <div className="footer-bottom"><span>© 2026 Ôm Nhà Studio</span><span>Được làm bằng sự dịu dàng ♡</span></div>
    </footer>
  );
}
