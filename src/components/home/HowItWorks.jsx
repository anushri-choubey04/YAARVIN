import { Link } from "react-router-dom";
//eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import images from "../../utils/images";


export default function HowItWorks() {
  const cards = [
    {
      img: images["HowItWorks/Dress.png"],
      title: "How to Rent",
      text: "Get your hands on designer pieces without breaking the bank.",
      link: "/rent", // route path, NOT file
    },
    {
      img: images["HowItWorks/TUEXDO.png"],
      title: "How to Earn Money",
      text: "Make money from your closet/wardrobe that you can’t wear all the time.",
      link: "/lend",
    },
    {
      img: images["HowItWorks/lehnga.png"],
      title: "How delivery works",
      text: "Get your rentals delivered right to your doorstep with our convenient delivery service.",
      link: "/delivery",
    },
  ];

  return (
    <section id="working-section" className="py-4 px-2 bg-black">
      <h2 className="text-center text-4xl md:text-5xl font-extrabold relative text-white mb-6">
        How It Works
        <motion.div
          className="h-1 w-28 mb-4 bg-blue-600 rounded mx-auto mt-3 shadow-[0_0_18px_#2563eb]"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6 }}
        />
      </h2>

      <div className="flex flex-col  md:flex-row md:max-w-7xl mx-auto gap-6 md:justify-center md:overflow-x-auto px-2 md:py-10 py-4">
        {cards.map((c, i) => (
          <div
            key={i}
            className="bg-blue-950 rounded-xl shadow-lg overflow-hidden w-full md:max-w-sm transition hover:-translate-y-1"
          >
            <img
              src={c.img}
              alt={c.title}
              className="w-full h-60 object-cover hover:scale-105 transition duration-300"
            />

            <div className="text-white text-center p-4">
              <h3 className="text-2xl font-semibold mb-2">{c.title}</h3>
              <p className="text-sm mb-3 text-gray-400">{c.text}</p>

              <Link to={c.link} className="font-bold text-lg hover:underline">
                View Details →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
