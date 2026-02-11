import { useState } from "react";
import { Link } from "react-router-dom";
import DarkVeil from "./UI/DarkVeil.jsx";

export default function Footer() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  const sections = [
    {
      title: "How It Works",
      items: [
        { name: "How to Rent", route: "/rent" },
        { name: "Rent Your Closet", route: "/lend" },
      ],
    },
    {
      title: "Information",
      items: [
        { name: "About Us", route: "/about-us" },
        { name: "FAQs", route: "/faqs" },
      ],
    },
    {
      title: "Contact Us",
      items: [
        { name: "Contact Us", route: "/contact" },
        { name: "Careers", route: "/careers" },
      ],
    },
    {
      title: "Our Policies",
      items: [
        { name: "Privacy Policy", route: "/privacy-policy" },
        { name: "Refund Policy", route: "/refund-policy" },
        { name: "Cancellation Policy", route: "/cancellation-policy" },
      ],
    },
  ];

  return (
    <footer className="relative   bg-black/5 border-t ">
      <div className="relative  w-full md:h-[350px] h-[620px]  ">
        <div className="hidden md:block absolute inset-0 z-0 pointer-events-none">
          <DarkVeil
            speed={1.8}
            scanlineFrequency={0.8}
            noiseIntensity={0}
            scanlineIntensity={0}
          />
        </div>
        {/* Static background - mobile only */}
        <div className="block md:hidden absolute inset-0 z-0 bg-black pointer-events-none"></div>
        {/* Social icons */}
        <div className="relative z-10 flex justify-center gap-6 text-2xl mb-6 pt-8 text-white ">
          <i className="fab fa-instagram cursor-pointer hover:text-gray-400" />
          <i className="fab fa-linkedin-in cursor-pointer hover:text-gray-400" />
          <i className="fab fa-youtube cursor-pointer hover:text-gray-400" />
          <i className="fab fa-x-twitter cursor-pointer hover:text-gray-400" />
          <i className="fab fa-facebook-f cursor-pointer hover:text-gray-400" />
        </div>

        {/* MAIN CONTAINER */}
        <div className="max-w-7xl mx-auto  text-white relative z-10">
          {/* ===== MOBILE ACCORDION (unchanged) ===== */}
          <div className="md:hidden space-y-3 p-4">
            {sections.map((sec, i) => (
              <div key={i} className="border border-white/40 rounded-lg p-3">
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex justify-between font-semibold text-left text-lg md:text-xl"
                >
                  {sec.title}
                  <span
                    className={`transition ${
                      openIndex === i ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    ▼
                  </span>
                </button>

                {openIndex === i && (
                  <ul className="mt-2 ml-3 list-disc text-sm md:text-lg text-gray-400">
                    {sec.items.map((item, idx) => (
                      <li key={idx}>
                        {" "}
                        <Link
                          to={item.route}
                          className="hover:text-white transition"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
            {/* Newsletter */}
            <h3 className="font-bold text-xl mb-3 mt-6 ">
              Join us to get first free rental service
            </h3>
            <p className="text-gray-400 text-sm mb-3">
              Get exclusive new arrivals, offers and style inspiration.
            </p>

            <form className="flex flex-col gap-2 text-black">
              <input
                type="email"
                placeholder="Email"
                className="px-4 py-3 rounded-md outline-none w-full"
              />

              <button
                type="submit"
                className="bg-white text-black font-bold rounded-md px-6 py-3 w-full"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* ===== DESKTOP MULTI-COLUMN FOOTER ===== */}
          <div className="hidden md:flex justify-between gap-16 mt-10 ">
            {/* Left: 4 columns  */}
            <div className="grid grid-cols-4 gap-10 w-2/3 ">
              {sections.map((sec, i) => (
                <div key={i}>
                  <h4 className="font-bold text-xl mb-3">{sec.title}</h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    {sec.items.map((item, idx) => (
                      <li
                        key={idx}
                        className="hover:text-white cursor-pointer transition"
                      >
                        <Link to={item.route}>{item.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Right: newsletter */}
            <div className="md:w-1/3 w-full   ">
              <h3 className="font-bold text-2xl mb-2">
                Join us to get first free rental service
              </h3>

              <p className="text-gray-400 text-sm mb-3">
                Get exclusive new arrivals, offers and style inspiration.
              </p>

              <form className="flex gap-2 text-black">
                <input
                  type="email"
                  placeholder="Email"
                  className="px-4 py-3 rounded-md outline-none w-full"
                />
                <button
                  type="submit"
                  className="bg-white text-black font-bold rounded-md px-6 py-3"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* bottom line */}
        <div className=" relative z-10 mb-20 md:m-5  text-center text-gray-300 text-sm">
          © 2025 Saarvin — All Rights Reserved
        </div>
      </div>
    </footer>
  );
}
