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

  // Handle drag end for swipe
  const handleDragEnd = (event, info) => {
    const { offset, velocity } = info;
    const swipeThreshold = 50; // Minimum distance to trigger swipe
    const swipeVelocityThreshold = 500; // Minimum velocity to trigger swipe

    if (offset.x > swipeThreshold || velocity.x > swipeVelocityThreshold) {
      prev(); // Swipe right to go to previous
    } else if (offset.x < -swipeThreshold || velocity.x < -swipeVelocityThreshold) {
      next(); // Swipe left to go to next
    }
  };

  return (
    <section className="relative h-[50vh] md:h-[70vh] overflow-hidden py-2 px-2 bg-black">
      {/* Slides */}
      <AnimatePresence initial={false}>
        <motion.div
          key={index}
          custom={index}
          initial={{ opacity: 0.6, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          drag="x" // Enable horizontal dragging
          dragConstraints={{ left: 0, right: 0 }} // Prevent vertical drag, allow horizontal
          dragElastic={0.2} // Add some elasticity
          onDragEnd={handleDragEnd} // Handle swipe logic
          className="absolute inset-0 md:mx-12 m-4"
        >
          <img
            src={slides[index].img}
            alt={slides[index].title} // Added for SEO and accessibility
            className="h-full w-full object-cover rounded-xl"
            loading="eager"
          />

          {/* gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="absolute inset-0 flex items-end md:items-center">
        <div className="px-14 md:px-20 pb-14 md:pb-0 max-w-2xl text-white">
          <motion.h1
            key={slides[index].title}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-6xl font-extrabold tracking-tight mb-3"
          >
            {slides[index].title}
          </motion.h1>

          {slides[index].subtitle && (
            <motion.p
              key={slides[index].subtitle}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm md:text-lg mb-4 md:mb-6"
            >
              {slides[index].subtitle}
            </motion.p>
          )}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
            className="flex gap-4"
          >
            <button
              onClick={() => navigate(`/single-product/${slides[index].id}`)}
              className="bg-white text-black font-semibold px-4 py-4  rounded-xl hover:scale-105 transition shadow-2xl items-center justify-center"
              aria-label={`Rent ${slides[index].title} now`}
             >
              Rent Now
            </button>

            <button
              onClick={() => navigate("/lend")}
              className="border border-white/70 px-4 py-4  rounded-xl hover:bg-white hover:text-black transition"
              aria-label={`Earn money by lending your product ${slides[index].title}`}
            >
              Earn Money
            </button>
          </motion.div>

        </div>
      </div>

      

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
