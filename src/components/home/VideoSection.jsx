import { useEffect, useRef } from "react";
//eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function VideoSection() {
  const navigate = useNavigate();
  const containerRef = useRef(null);

  useEffect(() => {
    const videos = Array.from(
      containerRef.current?.querySelectorAll("video.auto-video") || [],
    );

    const tryPlay = (v) => {
      const p = v.play();
      if (p && typeof p.catch === "function") p.catch(() => {});
    };

    const onEnter = (v) => {
      if (!v.src && v.dataset.src) v.src = v.dataset.src;
      tryPlay(v);
    };

    const onLeave = (v) => {
      if (!v.paused) v.pause();
    };

    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const v = entry.target;
            if (entry.isIntersecting) onEnter(v);
            else onLeave(v);
          });
        },
        { threshold: 0.25 },
      );

      videos.forEach((v) => io.observe(v));

      return () => io.disconnect();
    } else {
      videos.forEach((v) => {
        if (v.dataset.src) v.src = v.dataset.src;
        tryPlay(v);
      });
    }
  }, []);
  const BASE = import.meta.env.BASE_URL;

  const videoList = [
    "/VideoSection/DRESS1.mp4",
    "/VideoSection/DRESS2.mp4",
    "/VideoSection/DRESS3.mp4",
    "/VideoSection/DRESS4.mp4",
    "/VideoSection/DRESS5.mp4",
    "/VideoSection/DRESS6.mp4",
  ].map((v) => BASE + v);

  return (
    <section className="w-full py-4 bg-black">
      <header className="flex justify-center items-center mb-4 px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-6">
          Rent • Wear • Shine
          <motion.div
            className="h-1 w-28 bg-blue-600 rounded mx-auto mt-3 shadow-[0_0_18px_#2563eb]"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6 }}
          />
        </h2>
      </header>

      {/* ⭐ MOBILE = GRID (2 columns)
          ⭐ DESKTOP = HORIZONTAL SCROLL */}
      <main
        ref={containerRef}
        className="
    grid grid-cols-2 gap-4 
    overflow-x-auto px-4 py-4
    md:px-16
    md:flex
    md:justify-center
    md:gap-6
    md:overflow-x-auto
    md:scroll-smooth
    md:[&::-webkit-scrollbar]:hidden
    md:max-w-9xl mx-auto
  "
      >
        {videoList.map((src, i) => (
          <article
            key={i}
            onClick={() => navigate("/videos")}
            className=" group relative
                rounded-xl overflow-hidden
                shadow-xl bg-gray-200 cursor-pointer
                h-60
                md:w-80 md:h-80"
          >
            <video
              className="auto-video w-full h-full object-cover"
              playsInline
              muted
              loop
              preload="metadata"
              decoding="async"
              data-src={src}
            />

            {/* Quick Action */}
            <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-all duration-300">
              <button className="w-full bg-white text-black text-sm font-semibold py-2">
                Rent Now →
              </button>
            </div>
          </article>
        ))}
      </main>
    </section>
  );
}
