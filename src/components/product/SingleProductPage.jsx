import { useParams, useNavigate } from "react-router-dom";
import { useState, useMemo } from "react";
import SimilarProducts from "./SimilarProducts";
import ReviewCard from "./ReviewCard";
import SwipeGallery from "./SwipeGallery";
import SizeGuideModal from "./SizeGuideModal";
import DeliveryTimeline from "./DeliveryTimeline";
import StickyRentBar from "./StickyRentBar";
import images from "../../utils/images";
import { Search, ShoppingBag, Heart } from "lucide-react";
import { Link } from "react-router-dom";

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
    <div className="bg-black text-white min-h-screen">
      {/* HEADER */}
      <header className="sticky h-[46px] top-0 z-50 bg-black/90 backdrop-blur-md px-2 py-4 md:px-8 flex items-center justify-between border-b border-t">
        <button onClick={() => navigate(-1)} className="text-xl">
          <i className="fas fa-arrow-left" />
        </button>
        <h2 className="absolute left-1/2 -translate-x-1/2 font-semibold text-lg md:text-2xl text-center">
          Rent Now
        </h2>

        <div className="md:hidden flex items-center gap-4">
          <Link to="/search">
            <Search size={20} strokeWidth={1.5} />
          </Link>
          <Link to="/cart">
            <ShoppingBag size={20} strokeWidth={1.5} />
          </Link>
          <Link to="/wishlist">
            <Heart size={20} strokeWidth={1.5} />
          </Link>
        </div>
      </header>

      {/* MAIN */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 px-4 pt-2 md:p-8">
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
                    activeImage === img ? "border-blue-800" : "border-gray-300"
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
        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-white">{product.title}</h1>
          <p className="text-xl font-semibold">₹{product.price} / 3 Days</p>
          <p className="text-gray-200">{product.desc}</p>

          {/* DAMAGE PROTECTION */}
          <div className="bg-black border border-white p-4 rounded-xl">
            <p className="font-semibold">🛡️Damage Protection</p>
            <p className="text-sm text-gray-400">
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
                  className={`px-5 py-2 rounded-full border border-white ${
                    selectedSize === s
                      ? "bg-blue-700 text-white"
                      : "hover:bg-blue-700 hover:text-white"
                  }`}
                >
                  {s}
                </button>
              ))}
              <button
                onClick={() => setSizeGuideOpen(true)}
                className="text-sm underline text-gray-400 mt-2"
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
                  className={`p-4 rounded-xl border border-white ${
                    rentPlan?.label === p.label
                      ? "bg-black text-white"
                      : "hover:bg-blue-700 hover:text-white"
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
            className="border px-4 py-2 bg-black text-white rounded-lg w-full"
          />

          {/* SUMMARY */}
          <div className="bg-black p-5 rounded-xl border border-gray-500 shadow space-y-2">
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
          <div className="flex gap-3 pt-2">
            <button
              onClick={() => addToCart(product)}
              className="w-1/2 border border-white/30 py-3 rounded-full
               bg-transparent text-white
               hover:bg-white hover:text-black
               transition-all duration-300"
            >
              Add to Cart
            </button>

            <button
              onClick={() => setCheckoutOpen(true)}
              className="w-1/2 bg-white text-black py-3 rounded-full
               font-semibold
               hover:scale-[1.03] active:scale-[0.98]
               transition-all duration-300 shadow-md"
            >
              Rent Now
            </button>
          </div>
        </div>
      </div>

      {/* CHECKOUT MODAL */}
      {checkoutOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
          <div className="bg-white text-black p-6 rounded-2xl w-[90%] max-w-md space-y-4">
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
      {/* <div className="max-w-6xl mx-auto px-4">
        <ReviewCard product={product} />
      </div> */}
    </div>
  );
}
