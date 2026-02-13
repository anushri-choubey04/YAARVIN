import { useRef, useState } from "react";

export default function SwipeGallery({ images = [] }) {
  const containerRef = useRef(null);
  const [active, setActive] = useState(0);

  // detect current slide while scrolling
  const handleScroll = () => {
    if (!containerRef.current) return;
    const scrollLeft = containerRef.current.scrollLeft;
    const width = containerRef.current.clientWidth;
    const index = Math.round(scrollLeft / width);
    setActive(index);
  };

  return (
    <div className="relative w-full">
      {/* IMAGE SWIPE */}
      <div
        ref={containerRef}
        onScroll={handleScroll}
        className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar"
      >
        {images.map((img, i) => (
          <div key={i} className="min-w-full snap-center px-1">
            <img
              src={img}
              className="w-full h-[420px] object-cover rounded-2xl"
            />
          </div>
        ))}
      </div>

      {/* DOT INDICATOR (AJIO STYLE) */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <div
            key={i}
            className={`h-[6px] rounded-full transition-all duration-300 ${
              active === i
                ? "w-6 bg-white"
                : "w-2 bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
