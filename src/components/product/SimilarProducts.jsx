import { useRef, useState, memo } from "react";
import { useNavigate } from "react-router-dom";
//eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Rating from "@mui/material/Rating";

const SimilarProducts = memo(({ products = [] }) => {
  const navigate = useNavigate();
  const scrollRef = useRef(null);
  const [wishlist, setWishlist] = useState({});

  if (!products.length) return null;

  const scroll = (dir) => {
    scrollRef.current?.scrollBy({
      left: dir === "left" ? -320 : 320,
      behavior: "smooth",
    });
  };

  const toggleWishlist = (id, e) => {
    e.stopPropagation();
    setWishlist((p) => ({ ...p, [id]: !p[id] }));
  };

  return (
    <section className="mt-24 bg-black px-4 md:px-10 py-10">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-xl md:text-2xl font-semibold text-white">
          Similar Styles You’ll Love
        </h2>

        <div className="hidden md:flex gap-2">
          <button
            onClick={() => scroll("left")}
            className="w-10 h-10  rounded-full border border-white text-white hover:border-blue-500"
          >
            ‹
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-10 h-10 rounded-full border border-white text-white hover:border-blue-500"
          >
            ›
          </button>
        </div>
      </div>

      {/* SLIDER */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 [&::-webkit-scrollbar]:hidden"
      >
        {products.map((item) => {
          const image = item.img || item.images?.[0];

          return (
            <motion.div
              key={item.id}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 220 }}
              className="snap-start min-w-[200px] sm:min-w-[220px] md:min-w-[240px] bg-[#111] rounded-2xl overflow-hidden shadow-xl cursor-pointer"
              onClick={() => navigate(`/single-product/${item.id}`)}
            >
              {/* IMAGE */}
              <div className="relative  overflow-hidden">
                <img
                  src={image}
                  alt={item.title}
                  className="w-full h-[210px] object-cover transition-transform duration-500 hover:scale-110"
                />

                {/* Wishlist */}
                <button
                  onClick={(e) => toggleWishlist(item.id, e)}
                  className="absolute top-3 right-3 bg-white p-2 rounded-full"
                >
                  {wishlist[item.id] ? (
                    <FavoriteIcon fontSize="small" className="text-red-500" />
                  ) : (
                    <FavoriteBorderIcon fontSize="small" />
                  )}
                </button>

                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-1">
                  <span className="bg-green-600 text-white text-xs px-2 py-1 rounded-full">
                    Available
                  </span>
                  
                </div>
              </div>

              

              {/* INFO */}
              <div className="bg-white p-3 space-y-1">
                <p className="text-sm font-semibold truncate">
                  {item.title}
                </p>

                <div className="flex items-center gap-1">
                  <Rating
                    value={item.ratings || 4.5}
                    precision={0.5}
                    size="small"
                    readOnly
                  />
                  <span className="text-xs text-gray-500">
                    ({item.numOfReviews || 12})
                  </span>
                </div>

                <p className="text-green-600 font-semibold text-sm">
                  ₹{item.price}
                  <span className="text-gray-600 font-normal">
                    {" "}
                    / 48 hrs
                  </span>
                </p>

                
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
});

export default SimilarProducts;
