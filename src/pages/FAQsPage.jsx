import { useState } from "react";
//eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

export default function FAQsPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [open, setOpen] = useState(null);
 
  const FAQs = [
  {
    category: "renters",
    q: "What is the rental duration?",
    a: "All outfits are rented for a standard 48-hour period with optional extensions.",
  },
  {
    category: "renters",
    q: "Is a security deposit required?",
    a: "Yes, a refundable deposit is collected and released after safe return.",
  },
  {
    category: "renters",
    q: "What if the outfit doesn’t fit?",
    a: "Report within 2 hours of delivery for eligible exchange or refund.",
  },
  {
    category: "lenders",
    q: "When do I get paid?",
    a: "Payments are released within 24–48 hours after return verification.",
  },
  {
    category: "lenders",
    q: "Who covers damages?",
    a: "Minor damages are covered under  Protection Policy.",
  },
  {
    category: "lenders",
    q: "How do I list my items?",
    a: "We've made it very easy for you. Click 'Rent Your Closet' on the front page of the app, then we will guide you through  simple steps.",
  },
  {
  category: "lenders",
    q: "Is there a fee to join LookHook?",
    a: "LookHook is a movement, and we don’t want anything holding you back. Because of that, LookHook is free to join",
  },
];

  const filteredFAQs =
    activeTab === "all"
      ? FAQs
      : FAQs.filter((f) => f.category === activeTab);

  return (
    <section className="min-h-screen bg-black text-white px-4 py-16">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold">
          P2P Rental FAQs
        </h1>
        <p className="text-gray-400 mt-3">
          Everything you need to know about renting & lending outfits
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex justify-center gap-4 mb-10">
        {["all", "renters", "lenders"].map((tab) => (
          <button
            key={tab}
            onClick={() => {
              setActiveTab(tab);
              setOpen(null);
            }}
            className={`px-5 py-2 rounded-full border transition
              ${
                activeTab === tab
                  ? "bg-blue-600 border-blue-600"
                  : "border-gray-600 text-gray-400 hover:border-blue-500"
              }`}
          >
            {tab === "all"
              ? "All"
              : tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* FAQs */}
      <div className="max-w-4xl mx-auto space-y-4">
        {filteredFAQs.map((item, i) => (
          <motion.div
            key={i}
            className="bg-white/10 backdrop-blur border border-white/20 rounded-xl"
          >
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full px-5 py-4 flex justify-between items-center text-left"
            >
              <span className="font-semibold">{item.q}</span>
              <span className="text-2xl">
                {open === i ? "−" : "+"}
              </span>
            </button>

            <AnimatePresence>
              {open === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="px-5 pb-4 text-gray-300"
                >
                  {item.a}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
