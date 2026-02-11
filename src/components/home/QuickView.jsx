import React from "react";
import { Link } from "react-router-dom";//eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import images from "../../utils/images";



const products = [
  {
    Id: 1,
    title: "MAYKR",
    subtitle: "Smart Casual Wear",
    price: "Under ₹599",
    image: images["QuickView/gown1.png"],
  },
  {
    Id: 2,
    title: "ISHRANSH",
    subtitle: "Women's Fancy Gown",
    price: "Under ₹499",
    image: images["QuickView/gown2.png"],
  },
  {
    Id: 3,
    title: "FIT & FLARE",
    subtitle: "Designer Dresses",
    price: "Under ₹799",
    image: images["QuickView/lehnga3.png"],
  },
  {
    Id: 4,
    title: "ETHNIC",
    subtitle: "Traditional Wear",
    price: "Under ₹899",
    image: images["QuickView/lehnga2.png"],
  },
  {
    Id: 5,
    title: "STYLE",
    subtitle: "Stylish Collection",
    price: "Under ₹699",
    image: images["PriceSection/Kurta2.png"],
  },
  {
    Id: 6,
    title: "LUXE WEAR",
    subtitle: "Premium Fashion",
    price: "Under ₹999",
    image: images["PriceSection/Kurta.png"],
  },
];

export default function QuickView() {
  return (
    <section className=" mx-auto px-4 py-4 md:px-16  bg-black overflow-hidden">
      {/* Header */}
      <div className="text-center mb-10 ">
        <h2 className="text-center text-4xl md:text-5xl font-extrabold text-white mb-2 md:mb-4">
          Quick View
          <motion.div
          className="h-1 w-28 mb-4 bg-blue-600 rounded mx-auto mt-3 shadow-[0_0_18px_#2563eb]"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6 }}
        />
        </h2>
      </div>

      {/* Carousel */}
      <div className="flex gap-4 md:gap-6  md:py-10 py-4 overflow-x-auto scrollbar-hide scroll-smooth">
        {products.map((item, index) => (
          <Link to={`/quick-view/${item.Id}`} key={item.Id}>

          <div
            key={index}
            className="group relative  min-w-[240px] border border-blue-800 border-r-4 rounded-2xl shadow-md hover:-translate-y-2 hover:scale-105 transition-all duration-500 overflow-hidden"
          >
            {/* Image */}
            <div className="relative aspect-square overflow-hidden rounded-t-2xl">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 overflow-hidden"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/0 flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-400 overflow-hidden">
                <p className="text-white text-sm mb-4 pt-4 tracking-wide">
                  Explore {item.title} - {item.subtitle}
                </p>
              </div>
            </div>

            {/* Info */}
            <div className="text-center  p-4 backdrop-blur-md bg-blue-950 rounded-b-2xl">
              <h3 className="font-semibold text-lg text-white">
                {item.title}
              </h3>
              <p className="text-sm text-gray-400">{item.subtitle}</p>
              <p className="mt-1 font-bold text-white">{item.price}</p>
            </div>
          </div>
          </Link>
        ))}
      </div>
    </section>
  );
}