import React from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Rent() {
  const navigate = useNavigate();

  const steps = [
    {
      icon: "fa-search",
      title: "Find Your Piece",
      desc: "Browse thousands of premium outfits curated from trusted closets and top brands.",
    },
    {
      icon: "fa-calendar-alt",
      title: "Choose Rental Duration",
      desc: "Rent for 1–30 days depending on your event and schedule.",
    },
    {
      icon: "fa-shipping-fast",
      title: "Delivery Options",
      desc: "Choose same-day delivery, in-person pickup or secure shipping.",
    },
    {
      icon: "fa-check-circle",
      title: "Get Approved",
      desc: "Your request is accepted by the lender and your outfit is booked.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* TOP HEADER */}
      <div className="bg-gradient-to-r from-black to-blue-800 p-6 shadow-sm text-center">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-white mb-4 md:text-xl"
        >
          <i className="fas fa-arrow-left" /> Back
        </button>

        <h1 className="text-4xl font-bold">How Renting Works</h1>
        <p className="text-gray-200 mt-2">
          Simple, flexible & affordable — rent outfits for every occasion.
        </p>
      </div>

      {/* TAB NAVIGATION */}
      <div className="flex justify-center mt-6">
        <div className="bg-[#020617] border border-blue-500 rounded-full px-3 py-2 flex gap-2">
          <Link
            to="/rent"
            className="px-5 py-2 rounded-full hover:bg-blue-800 text-white font-semibold shadow"
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
            className="px-5 py-2 rounded-full text-gray-300 hover:text-white hover:bg-blue-800 transition"
          >
            Delivery
          </Link>
        </div>
      </div>

      {/* CONTENT SECTION */}
      <div className="p-6 max-w-6xl mx-auto bg-gradient-to-r  rounded-3xl mt-8 pb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Rent In 4 Easy Steps
        </h2>

        {/* STEP CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-[#020617] border border-blue-500 rounded-2xl p-7 text-center shadow-xl hover:-translate-y-2 hover:shadow-2xl transition-all"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-900/40 flex items-center justify-center">
                <i className={`fas ${step.icon} text-2xl text-blue-300`} />
              </div>

              <h3 className="text-xl font-semibold text-white mb-2">
                {step.title}
              </h3>

              <p className="text-gray-300">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* INFO BOX */}
        <div className="mt-10 bg-[#020617] border border-blue-500 rounded-2xl p-6 text-center">
          <p className="text-gray-300">
            🔐 All rentals are protected under{" "}
            <span className="text-blue-400 font-semibold">
              Yaarvin Rental Protection Policy
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
