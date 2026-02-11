import React from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Delivery() {
  const navigate = useNavigate();

  const stepsRenter = [
    {
      title: "Place Order",
      desc: "Select your rental item, confirm your booking, and choose delivery.",
    },
    {
      title: "Get Delivery",
      desc: "Receive your outfit via courier, shipping, or in-person pickup.",
    },
    {
      title: "Enjoy Outfit",
      desc: "Wear your rental with confidence for your event or outing.",
    },
    {
      title: "Return Easily",
      desc: "Schedule a return pickup or drop it off hassle-free.",
    },
  ];

  const stepsLender = [
    {
      title: "Prepare Item",
      desc: "Clean, pack, and get your outfit ready for delivery.",
    },
    {
      title: "Send to Us",
      desc: "Choose courier, shipping, or in-person handover.",
    },
    {
      title: "Receive Return",
      desc: "Get your item back once the rental period is over.",
    },
    {
      title: "Earn Money",
      desc: "Receive payment securely after each successful rental.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* HEADER (same style as Earn) */}
      <div className="bg-gradient-to-r from-black to-blue-800 p-6 text-center">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-white mb-4 md:text-xl"
        >
          <i className="fas fa-arrow-left" /> Back
        </button>

        <h1 className="text-4xl font-bold">Delivery Guide</h1>
        <p className="text-gray-300">How delivery works on our platform</p>
      </div>

      {/* TABS (SAME AS EARN) */}
      <div className="flex justify-center mt-6">
        <div className="bg-[#020617] border border-blue-500 rounded-full px-3 py-2 flex gap-2">
          <Link
            to="/rent"
            className="px-5 py-2 rounded-full text-gray-300 hover:text-white hover:bg-blue-800 transition"
          >
            Rent
          </Link>

          <Link
            to="/lend"
            className="px-5 py-2 rounded-full text-gray-300 hover:text-white hover:bg-blue-800 transition"
          >
            Earn
          </Link>

          <Link
            to="/delivery"
            className="px-5 py-2 rounded-full bg-blue-900 text-white font-semibold shadow"
          >
            Delivery
          </Link>
        </div>
      </div>

      {/* DELIVERY FOR RENTER */}
      <section className="p-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          Delivery for <span className="text-blue-400">Renter</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {stepsRenter.map((step, i) => (
            <div
              key={i}
              className="bg-[#020617] border border-blue-500 rounded-2xl p-6 text-center shadow hover:-translate-y-1 hover:shadow-blue-900 transition"
            >
              <div className="w-16 h-16 rounded-full bg-blue-900/40 flex items-center justify-center mx-auto mb-3">
                <i className="fas fa-truck text-blue-400 text-xl" />
              </div>
              <h3 className="font-semibold text-lg mb-1">{step.title}</h3>
              <p className="text-gray-400 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DELIVERY FOR LENDER */}
      <section className="p-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          Delivery for <span className="text-blue-400">Lender</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {stepsLender.map((step, i) => (
            <div
              key={i}
              className="bg-[#020617] border border-blue-500 rounded-2xl p-6 text-center shadow hover:-translate-y-1 hover:shadow-blue-900 transition"
            >
              <div className="w-16 h-16 rounded-full bg-blue-900/40 flex items-center justify-center mx-auto mb-3">
                <i className="fas fa-box text-blue-400 text-xl" />
              </div>
              <h3 className="font-semibold text-lg mb-1">{step.title}</h3>
              <p className="text-gray-400 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
