//eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import images from "../../utils/images";


export default function PriceSection() {
  const prices = [
  { label: "UNDER 2K", img: images["PriceSection/Kurta.png"], link: "/pricesection/under2k" },
  { label: "UNDER 4K", img: images["PriceSection/Lehnga12.png"], link: "/pricesection/under4k" },
  { label: "UNDER 6K", img: images["PriceSection/Kurta1.png"], link: "/pricesection/under6k" },
  { label: "UNDER 8K", img: images["PriceSection/Suit.png"], link: "/pricesection/under8k" },
];


  return (
    <section className="text-center py-8 px-4   bg-black mx-auto">
      <h2 className="text-4xl md:text-5xl font-extrabold text-white">
        RENT BY PRICE
      </h2>
      <motion.div
          className="h-1 w-28  mb-10 bg-blue-600 rounded mx-auto mt-3 shadow-[0_0_18px_#2563eb]"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6 }}
        />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 md:py-10 py-4 max-w-9xl mx-auto md:px-10">
        {prices.map((p, i) => (
          <a href={p.link} key={i} className="block group">
            <div className="rounded-2xl overflow-hidden shadow-xl relative aspect-[3/4]">
              <img
                src={p.img}
                alt={p.label}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* gradient overlay */}
              <div className="absolute inset-0 " />

              {/* label */}
              <div className="absolute bottom-0 w-full h-10 md:h-16 md:text-4xl bg-blue-900 text-white px-6 py-2  text-xl">
                {p.label}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
