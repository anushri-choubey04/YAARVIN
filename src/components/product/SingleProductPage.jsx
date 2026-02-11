import { useParams, useNavigate } from "react-router-dom";
import { useState, useMemo } from "react";
import SimilarProducts from "./SimilarProducts";
import ReviewCard from "./ReviewCard";
import SwipeGallery from "./SwipeGallery";
import SizeGuideModal from "./SizeGuideModal";
import DeliveryTimeline from "./DeliveryTimeline";
import StickyRentBar from "./StickyRentBar";
import images from "../../utils/images";

const ALL_PRODUCTS = [
  {
    id: 1,
    title: "MAYKR Lehenga",
    price: 1999,
    security: 1500,
    images: [
      images["Hero/lehnga1.png"],
      images["Hero/lehnga1.png"],
      images["Hero/lehnga1.png"],
      images["Hero/lehnga1.png"],
    ],
    desc: "Smart casual wear for modern occasions. Perfect for parties & celebrations.",
    condition: "Excellent",
    owner: "Verified Lender",
    sizes: ["S", "M", "L"],
    ratings: 4.5,
    numOfReviews: 12,
    reviews: [
      { rating: 5, comment: "Amazing quality!" },
      { rating: 4, comment: "Loved the fit & hygiene." },
    ],
  },
  {
    id: 2,
    title: "Classic Ethnic Vibes",
    price: 999,
    security: 1500,
    images: [
      images["QuickView/gown2.png"],
      images["QuickView/gown2.png"],
      images["QuickView/gown2.png"],
      images["QuickView/gown2.png"],
    ],
    desc: "Smart casual wear for modern occasions. Perfect for parties & celebrations.",
    condition: "Excellent",
    owner: "Verified Lender",
    sizes: ["S", "M", "L"],
    ratings: 4.5,
    numOfReviews: 12,
    reviews: [
      { rating: 5, comment: "Amazing quality!" },
      { rating: 4, comment: "Loved the fit & hygiene." },
    ],
  },
  {
    id: 3,
    title: "Western Party Look",
    price: 2999,
    security: 1500,
    images: [
      images["Hero/lehnga3.png"],
      images["Hero/lehnga3.png"],
      images["Hero/lehnga3.png"],
      images["Hero/lehnga3.png"],
    ],
    desc: "Smart casual wear for modern occasions. Perfect for parties & celebrations.",
    condition: "Excellent",
    owner: "Verified Lender",
    sizes: ["S", "M", "L"],
    ratings: 4.5,
    numOfReviews: 12,
    reviews: [
      { rating: 5, comment: "Amazing quality!" },
      { rating: 4, comment: "Loved the fit & hygiene." },
    ],
  },
  {
    id: 4,
    title: "Evening Gown",
    price: 1999,
    security: 1500,
    images: [
      images["Hero/gown1.png"],
      images["Hero/gown1.png"],
      images["Hero/gown1.png"],
      images["Hero/gown1.png"],
    ],
    desc: "Smart casual wear for modern occasions. Perfect for parties & celebrations.",
    condition: "Excellent",
    owner: "Verified Lender",
    sizes: ["S", "M", "L"],
    ratings: 4.5,
    numOfReviews: 12,
    reviews: [
      { rating: 5, comment: "Amazing quality!" },
      { rating: 4, comment: "Loved the fit & hygiene." },
    ],
  },
  {
    id: 5,
    title: "Kurta",
    price: 1999,
    security: 1500,
    images: [
      images["PriceSection/Kurta2.png"],
      images["PriceSection/Kurta2.png"],
      images["PriceSection/Kurta2.png"],
      images["PriceSection/Kurta2.png"],
    ],
    desc: "Smart casual wear for modern occasions. Perfect for parties & celebrations.",
    condition: "Excellent",
    owner: "Verified Lender",
    sizes: ["S", "M", "L", "XL"],
    ratings: 4,
    numOfReviews: 12,
    reviews: [
      { rating: 5, comment: "Amazing quality!" },
      { rating: 4, comment: "Loved the fit & hygiene." },
    ],
  },
  {
    id: 6,
    title: "Kurta Set",
    price: 3999,
    security: 1500,
    images: [
      images["PriceSection/Kurta.png"],
      images["PriceSection/Kurta.png"],
      images["PriceSection/Kurta.png"],
      images["PriceSection/Kurta.png"],
    ],
    desc: "Smart casual wear for modern occasions. Perfect for parties & celebrations.",
    condition: "Excellent",
    owner: "Verified Lender",
    sizes: ["S", "M", "L", "XL"],
    ratings: 4,
    numOfReviews: 12,
    reviews: [
      { rating: 5, comment: "Amazing quality!" },
      { rating: 4, comment: "Loved the fit & hygiene." },
    ],
  },
];

export default function SingleProductPage({ addToCart }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = ALL_PRODUCTS.find((p) => p.id === Number(id));

  // ✅ SAFE FALLBACK VALUES
  const images = product?.images || [];

  // ✅ HOOKS MUST BE UNCONDITIONAL
  const [activeImage, setActiveImage] = useState(images[0] || "");
  const [zoomStyle, setZoomStyle] = useState({});
  const [wishlisted, setWishlisted] = useState(false);
  const [selectedSize, setSelectedSize] = useState(null);
  const [rentPlan, setRentPlan] = useState(null);
  const [startDate, setStartDate] = useState("");
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [sizeGuideOpen, setSizeGuideOpen] = useState(false);

  const similarProducts = ALL_PRODUCTS.filter((p) => p.id !== product.id);

  const totalPayable = useMemo(() => {
    if (!rentPlan) return 0;
    return rentPlan.price + product.security;
  }, [rentPlan, product.security]);

  // ✅ AFTER HOOKS — SAFE RETURN
  if (!product) {
    return <p className="mt-20 text-center">Product not found</p>;
  }

  // IMAGE ZOOM
  const handleMouseMove = (e) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomStyle({
      transform: "scale(2)",
      transformOrigin: `${x}% ${y}%`,
    });
  };

  const resetZoom = () =>
    setZoomStyle({ transform: "scale(1)", transformOrigin: "center" });

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* HEADER */}
      <header className="sticky top-0 z-40 bg-black text-white px-2 md:px-8 py-3 flex items-center justify-between">
        <button onClick={() => navigate(-1)} className="text-sm opacity-80 hover:opacity-100  md:text-xl">
          <i className="fas fa-arrow-left" /> Back
        </button>

        <h1 className="absolute left-1/2 -translate-x-1/2 font-semibold text-lg md:text-2xl text-center">Rent Now</h1>

        <div className="md:hidden flex gap-2 text-lg opacity-80">
          <i className="fas fa-search" />
          <i className="fas fa-heart" />
          <i className="fas fa-shopping-bag" />
        </div>
      </header>

      {/* MAIN */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 p-2 md:p-8">
        {/* IMAGE SECTION */}
        <div>
          {/* MOBILE */}
          <div className="md:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory">
            <SwipeGallery images={images} />
          </div>

          {/* DESKTOP */}
          <div className="hidden md:grid grid-cols-[100px_1fr] gap-4">
            <div className="flex flex-col gap-3">
              {product.images.slice(0, 3).map((img, i) => (
                <img
                  key={i}
                  src={img}
                  onClick={() => setActiveImage(img)}
                  className={`cursor-pointer rounded-xl ${
                    activeImage === img ? "border-black" : "border-gray-300"
                  }`}
                />
              ))}
            </div>

            <div
              className="relative overflow-hidden rounded-2xl"
              onMouseMove={handleMouseMove}
              onMouseLeave={resetZoom}
            >
              <img
                src={activeImage}
                style={zoomStyle}
                className="w-full h-[600px] object-cover transition-transform"
              />

              {/* WISHLIST */}
              <button
                onClick={() => setWishlisted(!wishlisted)}
                className="absolute top-4 right-4 bg-white p-3 rounded-full shadow"
              >
                <i
                  className={`fas fa-heart ${
                    wishlisted ? "text-red-500" : "text-gray-400"
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* DETAILS */}
        <div className="space-y-4">
          <h1 className="text-2xl font-bold">{product.title}</h1>
          <p className="text-xl font-semibold">₹{product.price} / 3 Days</p>
          <p className="text-gray-600">{product.desc}</p>

          {/* TRUST */}
          <div className="flex gap-3 text-sm">
            <span className="bg-green-100 px-3 py-1 rounded-full">
              ✔ {product.condition}
            </span>
            <span className="bg-blue-100 px-3 py-1 rounded-full">
              🧼 Sanitized
            </span>
            <span className="bg-purple-100 px-3 py-1 rounded-full">
              👤 {product.owner}
            </span>
          </div>

          {/* DAMAGE PROTECTION */}
          <div className="bg-yellow-50 border border-yellow-400 p-4 rounded-xl">
            <p className="font-semibold">🛡️ Damage Protection</p>
            <p className="text-sm text-gray-700">
              Minor wear & tear covered. Major damage deducted from security.
            </p>
          </div>

          {/* SIZE */}
          <div>
            <p className="font-semibold mb-2">Select Size</p>
            <div className="flex gap-3">
              {product.sizes.map((s) => (
                <button
                  key={s}
                  onClick={() => setSelectedSize(s)}
                  className={`px-5 py-2 rounded-full border border-gray-500 ${
                    selectedSize === s
                      ? "bg-black text-white"
                      : "hover:bg-black hover:text-white"
                  }`}
                >
                  {s}
                </button>
              ))}
              <button
                onClick={() => setSizeGuideOpen(true)}
                className="text-sm underline text-gray-800 mt-2"
              >
                View Size Guide
              </button>

              <SizeGuideModal
                open={sizeGuideOpen}
                onClose={() => setSizeGuideOpen(false)}
              />
            </div>
          </div>
          <StickyRentBar
            total={totalPayable}
            onRent={() => setCheckoutOpen(true)}
          />

          {/* RENT PLAN */}
          <div>
            <p className="font-semibold mb-2">Choose Rental Plan</p>
            <div className="grid grid-cols-3 gap-3">
              {[
                { label: "3 Days", price: product.price },
                { label: "5 Days", price: product.price + 1200 },
                { label: "7 Days", price: product.price + 2200 },
              ].map((p) => (
                <button
                  key={p.label}
                  onClick={() => setRentPlan(p)}
                  className={`p-4 rounded-xl border border-gray-500 ${
                    rentPlan?.label === p.label
                      ? "bg-black text-white"
                      : "hover:bg-black hover:text-white"
                  }`}
                >
                  {p.label}
                  <p className="text-sm">₹{p.price}</p>
                </button>
              ))}
            </div>
            <DeliveryTimeline rentPlan={rentPlan} />
          </div>

          {/* CALENDAR */}
          <input
            type="date"
            min={new Date().toISOString().split("T")[0]}
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="border px-4 py-2 border-gray-500 rounded-lg w-full"
          />

          {/* SUMMARY */}
          <div className="bg-white p-5 rounded-xl border border-gray-500 shadow space-y-2">
            <div className="flex justify-between">
              <span>Rental</span>
              <span>₹{rentPlan?.price || 0}</span>
            </div>
            <div className="flex justify-between">
              <span>Security</span>
              <span>₹{product.security}</span>
            </div>
            <hr />
            <div className="flex justify-between font-semibold">
              <span>Total</span>
              <span>₹{totalPayable}</span>
            </div>
          </div>

          {/* ACTIONS */}
          <div className="flex gap-4">
            <button
              onClick={() => addToCart(product)}
              className="w-1/2 border border-gray-500 py-3 rounded-xl"
            >
              Add to Cart
            </button>
            <button
              onClick={() => setCheckoutOpen(true)}
              className="w-1/2 bg-black text-white py-3 rounded-xl"
            >
              Rent Now
            </button>
          </div>
        </div>
      </div>

      {/* CHECKOUT MODAL */}
      {checkoutOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-2xl w-[90%] max-w-md space-y-4">
            <h2 className="text-xl font-semibold">Checkout</h2>

            <div className="flex justify-between">
              <span>Total Payable</span>
              <span>₹{totalPayable}</span>
            </div>

            <button className="w-full border py-2 rounded-lg">
              Pay with Wallet
            </button>
            <button className="w-full border py-2 rounded-lg">
              Cash on Delivery
            </button>

            <button
              onClick={() => setCheckoutOpen(false)}
              className="w-full bg-black text-white py-3 rounded-xl"
            >
              Confirm Rental
            </button>
          </div>
        </div>
      )}

      {/* SIMILAR + REVIEWS */}
      <SimilarProducts products={similarProducts} />
      <div className="max-w-6xl mx-auto px-4 my-16">
        <ReviewCard product={product} />
      </div>
    </div>
  );
}
