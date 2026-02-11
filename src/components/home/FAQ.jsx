import { useState } from "react";
//eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function FAQ() {
  const [open, setOpen] = useState(null);
  const navigate = useNavigate();

  const faqs = [
    {
      q: "How does same day/urgent delivery work?",
      a: "Saarvin delivers clothes to your door as soon as 1 hour after placing your order.",
    },
    {
      q: "What is the cleaning policy?",
      a: "Saarvin leaves cleaning preferences fully up to Lenders.",
    },
    {
      q: "How are items/clothes protected?",
      a: "Your items are always protected under our Saarvin Protection Policy.",
    },
    {
      q: "What if I damage an item?",
      a: "If an item is damaged, our Saarvin Protection Policy has you covered.",
    },
    {
      q: "When do I get paid for the product I rented out?",
      a: "It’s recommended to agree on payment terms in advance and document them if needed.",
    },
  ];

  const toggle = (i) => setOpen(open === i ? null : i);

  return (
    <motion.section
      className="relative mx-auto py-4 px-4 overflow-hidden bg-black"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* animated gradient background glow */}
      <motion.div
        className="absolute inset-0 blur-[10px] opacity-50 pointer-events-none"
        initial={{
          background: "radial-gradient(circle,#1e3a8a,transparent 40%)",
        }}
        animate={{
          background: [
            "radial-gradient(circle at 10% 10%,#1e3a8a,transparent 40%)",
            "radial-gradient(circle at 80% 30%,#2563eb,transparent 40%)",
            "radial-gradient(circle at 30% 80%,#0ea5e9,transparent 40%)",
          ],
        }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "mirror" }}
      />

      {/* Heading */}
      <div className="text-center md:mb-20 mb-14 relative">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white">
          Frequently Asked Questions
        </h2>

        <motion.div
          className="h-1 w-28 bg-blue-600 rounded mx-auto mt-3 shadow-[0_0_18px_#2563eb]"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6 }}
        />
      </div>

      {/* Accordion */}
      <motion.div
        className="space-y-4 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1 } },
        }}
      >
        {faqs.map((item, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, y: 25 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ y: -2 }}
            className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-xl md:max-w-4xl mx-auto"
          >
            {/* Header */}
            <button
              onClick={() => toggle(i)}
              className="w-full flex items-center justify-between px-4 py-4 text-left"
            >
              <div className="flex gap-4 items-center text-white">
                <span className="text-blue-400 font-extrabold text-xl">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <span className="font-semibold text-lg">{item.q}</span>
              </div>

              {/* Animated '+' to '-' */}
              <motion.span
                animate={{ rotate: open === i ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="text-3xl font-bold text-blue-400"
              >
                {open === i ? "−" : "+"}
              </motion.span>
            </button>

            {/* Content */}
            <AnimatePresence initial={false}>
              {open === i && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.15, ease: "easeInOut" }}
                  className="px-6 pb-5 text-gray-200 overflow-hidden"
                >
                  {item.a}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>
      <button
        onClick={() => navigate("/faqs")}
        className="relative z-10 mt-10 mx-auto block px-6 py-2 rounded-full border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white transition"
      >
        View All FAQs
      </button>
    </motion.section>
  );
}
