//eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import images from "../../utils/images";
import { Link } from "react-router-dom";


export default function PriceSection() {

  const prices = [
    { label: "UNDER 2K", img: images["PriceSection/Kurta.png"], slug: "under2k" },
    { label: "UNDER 4K", img: images["PriceSection/Lehnga12.png"], slug: "under4k" },
    { label: "UNDER 6K", img: images["PriceSection/Kurta1.png"], slug: "under6k" },
    { label: "UNDER 8K", img: images["PriceSection/Suit.png"], slug: "under8k" },
  ];

  return (
    <section className="w-full bg-black py-2 md:py-6 md:px-10 lg:px-12 px-4 overflow-hidden">

      <h2 className="text-center text-4xl md:text-5xl font-extrabold relative text-white mb-4">
        RENT BY PRICE
      </h2>

      <motion.div
        className="h-1 w-28 mb-6 bg-blue-600 rounded mx-auto mt-3 shadow-[0_0_18px_#2563eb]"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.6 }}
      />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 md:py-10 py-4 max-w-9xl mx-auto md:px-10">

        {prices.map((p, i) => (
          <Link
            key={i}
            to={`pricesection/${p.slug}`}
            className="block group"
          >
            <div className="rounded-2xl overflow-hidden shadow-xl relative aspect-[3/4]">
              <img
                src={p.img}
                alt={p.label}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute bottom-0 w-full h-10 md:h-16 md:text-4xl bg-blue-900 text-white px-6 py-2 text-xl items-center flex justify-center font-bold tracking-wide">
                {p.label}
              </div>
            </div>
          </Link>
        ))}

      </div>
    </section>
  );
}
