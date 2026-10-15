import Link from "next/link";

export default function NotFound() {
  return <div className="not-found"><span className="eyebrow">ÔI, LẠC MẤT RỒI</span><h1>Trang này đang<br /><em>ngủ một chút.</em></h1><p>Đường dẫn bạn tìm không có ở đây. Mình đưa bạn về chỗ êm nhé.</p><Link className="button button-dark" href="/">Về trang chủ →</Link></div>;
}
