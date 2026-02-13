/* eslint-disable no-unused-vars */

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import images from "../../utils/images";



export default function Category() {

  const categories = [
    { img: images["PriceSection/Kurta2.png"], title: "Graduation", slug: "graduation" },
    { img: images["PriceSection/Kurta1.png"], title: "Office Event", slug: "office-event" },
    { img: images["PriceSection/Kurta.png"], title: "Party Wear", slug: "party-wear" },
    { img: images["HowItWorks/Dress.png"], title: "Ethnic Wear", slug: "ethnic-wear" },
    { img: images["PriceSection/Lehnga11.png"], title: "Pre-Wedding", slug: "pre-wedding" },
    { img: images["PriceSection/Lehnga12.png"], title: "Wedding Guest", slug: "wedding-guest" },
    { img: images["QuickView/lehnga1.png"], title: "Date Night", slug: "date-night" },
    { img: images["Hero/lehnga2.png"], title: "Farewell", slug: "farewell" },
  ];

  // parent animation for stagger effect
  const container = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.12,
        ease: "easeOut"
      }
    }
  };

  // each card animation
  const card = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1 },
    hover: {
      scale: 1.05,
      
      transition: { type: "spring", stiffness: 160, damping: 12 }
    },
    tap: { scale: 0.98 }
  };

  return (
    <section className="w-full bg-black md:pt-6 py-2 md:px-10 lg:px-12 px-4 overflow-hidden">

      {/* HEADING */}
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center text-4xl md:text-5xl font-extrabold relative text-white mb-4"
      >
        Rent by Occasion
      </motion.h2>

    <motion.div
          className="h-1 w-28 mb-6 bg-blue-600 rounded mx-auto mt-3 shadow-[0_0_18px_#2563eb] "
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6 }}
        />

      {/* SCROLL LIST */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="flex gap-2 md:gap-5 overflow-x-auto  scroll-smooth snap-x snap-mandatory scrollbar-hide md:py-10 py-4"
      >
        {categories.map((cat, i) => (
          <Link key={i} to={`/occasion/${cat.slug}`}>
            <motion.div
              variants={card}
              whileHover="hover"
              whileTap="tap"
              className="snap-start min-w-[170px] md:min-w-[215px] group"
            >
              <div className="rounded-2xl overflow-hidden border border-gray-700 bg-neutral-900 shadow-lg 
                              hover:shadow-blue-800 hover:border-blue-800 transition duration-200">

                {/* image zoom parallax hover */}
                <motion.img
                  src={cat.img}
                  alt={cat.title}
                  className="w-full h-[240px] object-cover"
                  whileHover={{ scale: 1.12 }}
                  transition={{ duration: 0.35 }}
                />
              </div>

              {/* title */}
              <motion.p
                className="mt-3 text-center text-lg font-bold text-white tracking-wide"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
              >
                {cat.title}
              </motion.p>
            </motion.div>
          </Link>
        ))}
      </motion.div>
    </section>
  );
}
