import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
//eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import images from "../../utils/images";


const SLIDE_INTERVAL = 4200;

export default function Hero() {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  const slides = [
    {
      id: 1,
      img: images["Hero/lehnga1.png"],
      title: "Ethnic Fits",
      subtitle: "Lehengas • Sarees • Suits",
    },
    {
      id: 2,
      img: images["QuickView/gown2.png"],
      title: "Classic  Vibes",
      subtitle: "Grace for every occasion",
    },
    {
      id: 3,
      img: images["Hero/lehnga3.png"],
      title: "Ethnic Party Look",
      subtitle: "Dresses • Mini • Glam",
    },
    {
      id: 4,
      img: images["Hero/gown1.png"],
      title: "Evening Gowns",
      subtitle: "Luxury silhouettes",
    },
    {
      id: 5,
      title: "Kurta",
      img: images["PriceSection/Kurta2.png"],
    },
    {
      id: 6,
      title: "Kurta Set",
      img: images["PriceSection/Kurta.png"],
    },
  ];

  const maxIndex = slides.length - 1;

  const next = useCallback(
    () => setIndex((p) => (p === maxIndex ? 0 : p + 1)),
    [maxIndex]
  );

  const prev = () => setIndex((p) => (p === 0 ? maxIndex : p - 1));

  /* auto slide */
  useEffect(() => {
    const id = setInterval(next, SLIDE_INTERVAL);
    return () => clearInterval(id);
  }, [next]);

  /* keyboard */
  useEffect(() => {
    const k = (e) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, [next]);

  return (
    <section className="relative h-[50vh] md:h-[70vh] overflow-hidden bg-black">
      {/* Slides */}
      <AnimatePresence initial={false}>
        <motion.div
          key={index}
          initial={{ opacity: 0.6, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          className="absolute inset-0 md:mx-12 m-4"
        >
          <img
            src={slides[index].img}
            className="h-full w-full object-cover rounded-xl"
            loading="eager"
          />

          {/* gradient overlay */}
          <div className="absolute bg-black" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="absolute inset-0 flex items-end md:items-center">
        <div className="px-12 md:px-20 pb-14 md:pb-0 max-w-2xl text-white">
          <motion.h1
            key={slides[index].title}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-6xl font-extrabold tracking-tight mb-3"
          >
            {slides[index].title}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
            className="flex gap-4"
          >
            <button
              onClick={() => navigate(`/single-product/${slides[index].id}`)}
              className="bg-white text-black font-semibold px-4 py-4 rounded-xl hover:scale-105 transition shadow-2xl items-center justify-center"
            >
              Rent Now
            </button>

            <button
              onClick={() => navigate("/lend")}
              className="border border-white/70 px-4 py-4 rounded-xl hover:bg-white hover:text-black transition"
            >
              Earn Money
            </button>
          </motion.div>

        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2  p-8 w-10 rounded-full text-7xl text-white hover:scale-110 transition"
      >
        ‹
      </button>

      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2  p-12 w-10 text-7xl text-white rounded-full hover:scale-110 transition"
      >
        ›
      </button>

      {/* Progress Bar */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-40 h-[3px] bg-white/30 rounded-full overflow-hidden">
        <motion.div
          key={index}
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: SLIDE_INTERVAL / 1000, ease: "linear" }}
          className="h-full bg-white"
        />
      </div>
    </section>
  );
}
