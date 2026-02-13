import React, { useState } from "react";
//eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import images from "../../utils/images";

// Dummy category data
const categories = [
  {
    id: 1,
    title: "Party Wear",
    image: images["Hero/gown1.png"],
    subtitle: "Gowns, Dresses & More",
  },
  {
    id: 2,
    title: "Ethnic Wear",
    image: images["PriceSection/Lehnga11.png"],
    subtitle: "Sarees, Lehengas & Kurtis",
  },
  {
    id: 3,
    title: "Office Event",
    image: images["HowItWorks/TUEXDO.png"],
    subtitle: "Blazers, Shirts & Suits",
  },
  {
    id: 4,
    title: "Pre-Wedding",
    image: images["HowItWorks/Dress.png"],
    subtitle: "Cocktail Dresses & Accessories",
  },
  {
    id: 5,
    title: "Date Night",
    image: images["QuickView/gown2.png"],
    subtitle: "Chic Outfits & Tops",
  },
  {
    id: 6,
    title: "Wedding Guest",
    image: images["PriceSection/Kurta.png"],
    subtitle: "Elegant & Trendy Wear",
  },
];

const CategorySection = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  // Filter categories by search
  const filteredCategories = categories.filter((cat) =>
    cat.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="bg-black text-white min-h-screen">
      {/* Top Heading Section */}
      <div className="bg-gradient-to-r from-black to-blue-800 p-6 shadow-sm items-center  text-center">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-white mb-4 md:text-xl"
        >
          <i className="fas fa-arrow-left" />
        </button>

        <h1 className="text-4xl font-bold">Category</h1>
        <p className="text-gray-200 mt-2">
          We’re here to provide your different category for your special day.
        </p>

        <input
          type="text"
          placeholder="Search categories..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="mt-6 md:mt-4 w-full md:w-64 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
      </div>

      {/* Category Grid */}
      <div className="mt-6 pb-10 px-2 md:px-32  items-center  grid grid-cols-2 sm:grid-cols-3  lg:grid-cols-4 gap-6">
        {filteredCategories.map((cat) => (
          <motion.div
            key={cat.id}
            whileHover={{ scale: 1.05 }}
            className="relative bg-white border border-blue-500 rounded-2xl shadow-md overflow-hidden cursor-pointer hover:shadow-xl transition-all"
          >
            <img
              src={cat.image}
              alt={cat.title}
              className="w-full h-36 sm:h-40 md:h-44 object-cover"
            />
            <div className="p-3 bg-blue-950">
              <h2 className="font-semibold text-white text-sm sm:text-base">
                {cat.title}
              </h2>
              <p className="text-gray-400 text-xs sm:text-sm">{cat.subtitle}</p>
            </div>
            {/* Optional overlay for hover effect */}
            <motion.div
              className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity rounded-2xl flex items-center justify-center"
              whileHover={{ opacity: 0.2 }}
            >
              <span className="text-white font-bold text-lg sm:text-base">
                Explore
              </span>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
