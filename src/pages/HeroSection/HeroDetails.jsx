import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SimilarProducts from "../../components/product/SimilarProducts";

export default function HeroDetails() {
  const navigate = useNavigate();

  /* ================= IMAGE GALLERY ================= */
  const galleryImages = [
    "/images/lehnga1.png",
    "/images/lehnga2.png",
    "/images/lehnga3.png",
  ];
  const [mainImage, setMainImage] = useState(galleryImages[0]);

  /* ================= PRODUCT STATE ================= */
  const [selectedSize, setSelectedSize] = useState(null);
  const [rentPeriod, setRentPeriod] = useState(null);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [wishlist, setWishlist] = useState([]);

  /* ================= AI SIZE STATE ================= */
  const [showSizeAI, setShowSizeAI] = useState(false);
  const [height, setHeight] = useState("");
  const [setWeight] = useState("");
  const [aiSize, setAiSize] = useState(null);

  const recommendSize = () => {
    if (height < 155) setAiSize("XS");
    else if (height < 162) setAiSize("S");
    else if (height < 170) setAiSize("M");
    else if (height < 178) setAiSize("L");
    else setAiSize("XL");
  };

  /* ================= WISHLIST ================= */
  const toggleWishlist = (id) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  /* ================= SIMILAR PRODUCTS ================= */
  const products = [
    { id: 1, img: "/QuickView/gown1.png", title: "Luna Satin Gown", price: "₹999 / 48 hrs" },
    { id: 2, img: "/QuickView/gown2.png", title: "Amara Maxi Dress", price: "₹899 / 48 hrs" },
    { id: 3, img: "/QuickView/lehnga1.png", title: "Celeste Party Wear", price: "₹1099 / 48 hrs" },
    { id: 4, img: "/QuickView/lehnga2.png", title: "Chloe Evening Lehenga", price: "₹1199 / 48 hrs" },
  ];

  const readyToRent = selectedSize && rentPeriod && startDate && endDate;

  return (
    <div className="w-full min-h-screen bg-black px-3 md:px-12 pb-28 pt-4 text-white">

      {/* ================= HEADER ================= */}
      <div className="h-[60px] flex items-center gap-3 font-semibold">
        <button onClick={() => navigate(-1)} className="text-xl text-white">
          <i className="fa-solid fa-arrow-left"></i>
        </button>
        <span className="text-white">Back</span>
      </div>

      {/* ================= MAIN SECTION ================= */}
      <div className="flex flex-col md:flex-row gap-8 mt-6">

        {/* IMAGE GALLERY */}
        <div className="flex gap-4 md:w-1/2 justify-center">
          <div className="flex flex-col gap-3">
            {galleryImages.map((img, i) => (
              <img
                key={i}
                src={img}
                loading="lazy"
                onClick={() => setMainImage(img)}
                className={`w-20 h-24 md:w-24 md:h-32 rounded-xl object-cover cursor-pointer 
                  border transition-all duration-300
                  ${mainImage === img
                    ? "border-blue-500 scale-105"
                    : "border-gray-600 hover:border-blue-500 hover:scale-105"
                  }`}
              />
            ))}
          </div>

          <div className="relative">
            <img
              src={mainImage}
              className="w-[300px] h-[420px] md:w-[480px] md:h-[620px] rounded-3xl object-cover shadow-xl transition-transform hover:scale-[1.02]"
            />

            <button
              onClick={() => toggleWishlist("main")}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white shadow flex items-center justify-center"
            >
              {wishlist.includes("main") ? (
                <i className="fa-solid fa-heart text-red-500"></i>
              ) : (
                <i className="fa-regular fa-heart text-blue-500"></i>
              )}
            </button>
          </div>
        </div>

        {/* PRODUCT DETAILS */}
        <div className="md:w-1/2">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white">
            Wine High Rise A-Line PU Mini Skirt
          </h1>
          <p className="text-gray-400 mt-2">
            Perfect for weddings, parties & premium occasions
          </p>

          <div className="mt-4">
            <p className="text-3xl font-bold text-white">₹4,990</p>
            <p className="text-blue-400 text-sm">Inclusive of all taxes</p>
          </div>

          {/* SIZE SELECT */}
          <div className="mt-6">
            <div className="flex justify-between items-center">
              <p className="font-semibold text-white">Select Size</p>
              <button
                onClick={() => setShowSizeAI(true)}
                className="text-sm text-blue-400 font-medium"
              >
                🧠 Find my size
              </button>
            </div>

            <div className="flex gap-3 flex-wrap mt-3">
              {["XS", "S", "M", "L", "XL"].map((s) => (
                <button
                  key={s}
                  onClick={() => setSelectedSize(s)}
                  className={`px-5 py-2 rounded-full border transition-all
                    ${selectedSize === s
                      ? "bg-blue-500 text-white scale-105"
                      : "border-gray-600 text-white hover:bg-blue-500 hover:text-white"
                    }`}
                >
                  {s}
                </button>
              ))}
            </div>

            {aiSize && (
              <div className="mt-3 bg-blue-50/20 p-3 rounded-xl text-sm text-white">
                Recommended Size: <b>{aiSize}</b>
                <button
                  onClick={() => setSelectedSize(aiSize)}
                  className="ml-3 text-blue-400 underline"
                >
                  Apply
                </button>
              </div>
            )}
          </div>

          {/* RENT DURATION */}
          <div className="mt-6">
            <p className="font-semibold mb-3 text-white">Rental Duration</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                { label: "3 Days", price: 2000 },
                { label: "5 Days", price: 8000 },
                { label: "7 Days", price: 12000 },
              ].map((p) => (
                <button
                  key={p.label}
                  onClick={() => setRentPeriod(p)}
                  className={`p-4 rounded-2xl border transition-all
                    ${rentPeriod?.label === p.label
                      ? "bg-blue-500 text-white scale-105"
                      : "border-gray-600 text-white hover:bg-blue-500 hover:text-white"
                    }`}
                >
                  <p className="font-semibold">{p.label}</p>
                  <p className="text-sm">₹{p.price}</p>
                </button>
              ))}
            </div>
          </div>

          {/* DATES */}
          <div className="mt-6 flex gap-4 flex-wrap">
            <input
              type="date"
              value={startDate}
              onChange={(e) => {
                setStartDate(e.target.value);
                if (endDate < e.target.value) setEndDate("");
              }}
              className="border border-gray-600 px-3 py-2 rounded-lg bg-black text-white"
            />
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              min={startDate}
              disabled={!startDate}
              className="border border-gray-600 px-3 py-2 rounded-lg bg-black text-white"
            />
          </div>

          {/* DESKTOP CTA */}
          <div className="hidden md:flex gap-4 mt-8">
            <button className="flex-1 bg-blue-500 text-white py-4 rounded-2xl font-semibold text-lg hover:bg-blue-600 transition">
              Rent Now
            </button>
            <button className="flex-1 border border-gray-600 py-4 rounded-2xl font-semibold hover:bg-blue-500 hover:text-white transition">
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>

      {/* ================= SIMILAR PRODUCTS ================= */}
      <SimilarProducts products={products} />

      {/* ================= MOBILE STICKY RENT BAR ================= */}
      <div className="fixed bottom-16 left-0 right-0 bg-black border-t border-gray-700 shadow-lg
      p-4 flex items-center justify-between md:hidden z-50">
        <div>
          <p className="text-sm text-gray-400">Rental Price</p>
          <p className="text-lg font-bold text-white">₹4,990</p>
        </div>

        <button
          disabled={!readyToRent}
          className={`px-6 py-3 rounded-xl font-semibold text-white
          ${readyToRent ? "bg-blue-500 hover:bg-blue-800" : "bg-gray-600 cursor-not-allowed"}`}
        >
          Rent Now
        </button>
      </div>

      {/* ================= AI SIZE MODAL ================= */}
      {showSizeAI && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-black rounded-2xl p-6 w-[90%] max-w-md border border-gray-700">
            <h3 className="text-xl font-bold mb-4 text-white">
              AI Size Recommendation
            </h3>

            <input
              placeholder="Height (cm)"
              className="w-full border border-gray-600 p-2 rounded-lg mb-3 bg-black text-white"
              onChange={(e) => setHeight(Number(e.target.value))}
            />
            <input
              placeholder="Weight (kg)"
              className="w-full border border-gray-600 p-2 rounded-lg mb-4 bg-black text-white"
              onChange={(e) => setWeight(Number(e.target.value))}
            />

            <button
              onClick={() => {
                recommendSize();
                setShowSizeAI(false);
              }}
              className="w-full bg-blue-800 text-white py-3 rounded-xl font-semibold hover:bg-blue-600 transition"
            >
              Get My Size
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
