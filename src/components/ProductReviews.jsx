"use client";

import { useEffect, useMemo, useState } from "react";
import { Star } from "lucide-react";

const starterReviews = [
  { name: "Mai Anh", rating: 5, text: "Vải mềm, màu rất đẹp và nằm ôm cực kỳ dễ chịu. Mình ngủ ngon hơn hẳn.", date: "12.09.2026" },
  { name: "Hoàng Nam", rating: 4, text: "Gối êm, đường may chắc chắn. Đóng gói cẩn thận và giao hàng nhanh.", date: "03.09.2026" },
];

function Stars({ value, interactive = false, onChange }) {
  return <span className={`rating-stars ${interactive ? "is-interactive" : ""}`} role={interactive ? "radiogroup" : "img"} aria-label={`${value} trên 5 sao`}>
    {[1, 2, 3, 4, 5].map((star) => interactive
      ? <button key={star} type="button" role="radio" aria-checked={star === value} aria-label={`${star} sao`} onClick={() => onChange(star)}><Star size={18} fill={star <= value ? "currentColor" : "none"} /></button>
      : <Star key={star} size={13} fill={star <= value ? "currentColor" : "none"} />)}
  </span>;
}

export default function ProductReviews({ productName }) {
  const [reviews, setReviews] = useState(starterReviews);
  const [rating, setRating] = useState(5);
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [notice, setNotice] = useState("");
  const [reviewsLoaded, setReviewsLoaded] = useState(false);
  const average = useMemo(() => reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length, [reviews]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(`om-nha-reviews-${productName}`);
      setReviews(saved ? JSON.parse(saved) : starterReviews);
    } catch {
      setReviews(starterReviews);
    }
    setReviewsLoaded(true);
  }, [productName]);

  useEffect(() => {
    if (reviewsLoaded) localStorage.setItem(`om-nha-reviews-${productName}`, JSON.stringify(reviews));
  }, [productName, reviews, reviewsLoaded]);

  function submitReview(event) {
    event.preventDefault();
    if (!message.trim()) {
      setNotice("Bạn hãy viết vài dòng chia sẻ trước khi gửi nhé.");
      return;
    }
    setReviews((current) => [{ name: name.trim() || "Khách hàng Ôm Nhà", rating, text: message.trim(), date: new Date().toLocaleDateString("vi-VN") }, ...current]);
    setMessage("");
    setName("");
    setRating(5);
    setNotice("Cảm ơn bạn đã chia sẻ cảm nhận!");
  }

  return <section className="reviews-section" id="reviews">
    <div className="reviews-heading"><div><span className="eyebrow">LỜI THƯƠNG GỬI TỪ KHÁCH HÀNG</span><h2>Ngủ ngon, kể <em>mình nghe.</em></h2></div><div className="rating-overview"><strong>{average.toFixed(1)}</strong><div><Stars value={Math.round(average)} /><span>{reviews.length} đánh giá</span></div></div></div>
    <div className="reviews-layout"><div className="review-list">{reviews.map((review, index) => <article className="review-card" key={`${review.date}-${review.name}-${index}`}><div className="review-card-top"><span className="review-avatar">{review.name.charAt(0).toUpperCase()}</span><div><strong>{review.name}</strong><small>{review.date}</small></div><Stars value={review.rating} /></div><p>{review.text}</p></article>)}</div>
      <form className="review-form" onSubmit={submitReview}><span className="eyebrow">CHIA SẺ CẢM NHẬN</span><h3>Đánh giá {productName}</h3><label className="review-rating-label">Mức độ hài lòng</label><Stars value={rating} interactive onChange={setRating} /><label className="field">Tên hiển thị<input value={name} onChange={(event) => setName(event.target.value)} placeholder="Tên của bạn" /></label><label className="field">Nhận xét<textarea required value={message} onChange={(event) => setMessage(event.target.value)} placeholder="Chiếc gối mang lại cho bạn cảm giác thế nào?" rows={4} /></label>{notice && <p className="review-notice" role="status">{notice}</p>}<button className="button button-dark" type="submit">Gửi đánh giá</button></form>
    </div>
  </section>;
}
