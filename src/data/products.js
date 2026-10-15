export const products = [
  {
    id: "may-em",
    slug: "goi-om-may-em",
    name: "Gối ôm Mây Êm",
    subtitle: "Cotton hữu cơ · ruột bông microfiber",
    price: 389000,
    oldPrice: 459000,
    size: "1m5",
    color: "#e8b9b5",
    label: "Bán chạy",
    description:
      "Một chiếc ôm mềm vừa đủ cho những đêm dài. Vỏ cotton hữu cơ thoáng mát, ruột microfiber đàn hồi và có thể tháo rời để vệ sinh.",
  },
  {
    id: "bien-xanh",
    slug: "goi-om-bien-xanh",
    name: "Gối ôm Biển Xanh",
    subtitle: "Cotton satin · thoáng mát bốn mùa",
    price: 429000,
    oldPrice: null,
    size: "1m5",
    color: "#a9c9d1",
    label: "Mới",
    description:
      "Sắc xanh dịu mắt cùng bề mặt cotton satin mịn nhẹ. Thiết kế dài 1m5 giúp bạn thư giãn thoải mái mỗi tối.",
  },
  {
    id: "kem-sua",
    slug: "goi-om-kem-sua",
    name: "Gối ôm Kem Sữa",
    subtitle: "Cotton chải kỹ · mềm mại tự nhiên",
    price: 359000,
    oldPrice: null,
    size: "1m2",
    color: "#e9ddc4",
    label: "",
    description:
      "Tông kem ấm áp dễ phối với mọi không gian. Chất vải cotton chải kỹ mềm mại, phù hợp cho phòng ngủ tối giản.",
  },
  {
    id: "oai-huong",
    slug: "goi-om-oai-huong",
    name: "Gối ôm Oải Hương",
    subtitle: "Cotton hữu cơ · phiên bản thư giãn",
    price: 399000,
    oldPrice: null,
    size: "1m2",
    color: "#c7bdd7",
    label: "",
    description:
      "Sắc tím lavender nhẹ nhàng mang cảm giác thư thái. Ruột gối êm, nâng đỡ dễ chịu khi đọc sách hay nghỉ ngơi.",
  },
];

export const formatPrice = (value) =>
  new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(value);
