import React, { useEffect } from "react";
import { useNavigate,Link } from "react-router-dom";

export default function Earn() {
  const navigate = useNavigate();

  useEffect(() => {
    const links = document.querySelectorAll(".how-tabs a");
    const path = window.location.pathname.toLowerCase();

    links.forEach((l) => {
      if (l.getAttribute("href").toLowerCase() === path) {
        l.classList.add("bg-blue-900", "text-white");
      } else {
        l.classList.remove("bg-blue-900", "text-white");
      }
    });
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-black to-blue-800 p-6 text-center">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-white mb-4 md:text-xl"
        >
          <i className="fas fa-arrow-left" /> Back
        </button>

        <h1 className="text-4xl font-bold">How to Earn</h1>
        <p className="text-gray-300">Turn your wardrobe into income</p>
      </div>

      {/* TAB NAVIGATION */}
      <div className="flex justify-center mt-6">
        <div className="bg-[#020617] border border-blue-500 rounded-full px-3 py-2 flex gap-2">
          <Link
            to="/rent"
            className="px-5 py-2 rounded-full  text-white font-semibold shadow"
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

      {/* Steps */}
      <section className="p-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          Start <span className="text-blue-400">Earning</span> in 4 Steps
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {["Upload Items", "Get Approval", "Deliver Safely", "Earn"].map(
            (t, i) => (
              <div
                key={i}
                className="bg-[#020617] border border-blue-500 rounded-2xl p-6 text-center shadow hover:-translate-y-1 hover:shadow-blue-900 transition"
              >
                <div className="w-16 h-16 rounded-full bg-blue-900/40 flex items-center justify-center mx-auto mb-3">
                  <i className="fas fa-check text-blue-400 text-xl" />
                </div>
                <h3 className="font-semibold text-lg mb-1">{t}</h3>
                <p className="text-gray-400 text-sm">
                  Simple and transparent process to start earning.
                </p>
              </div>
            )
          )}
        </div>
      </section>

      {/* Upload form */}
      <section className="p-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">
          List Your <span className="text-blue-400">Outfit</span>
        </h2>

        <form className="bg-[#020617]/60 backdrop-blur-xl border border-blue-500 rounded-2xl p-8 space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["Front View", "Back View", "Close-up"].map((t, i) => (
              <label
                key={i}
                className="border border-blue-500 rounded-xl p-6 text-center cursor-pointer"
              >
                {t}
                <input type="file" className="hidden" />
              </label>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              "Full Name",
              "Brand",
              "Year",
              "Size",
              "Category",
              "MRP",
              "Mobile",
              "City",
              "Address",
            ].map((p, i) => (
              <input
                key={i}
                placeholder={p}
                className="p-3 rounded-lg bg-black border border-blue-500 text-white"
              />
            ))}
          </div>

          <div className="text-center">
            <button className="px-8 py-3 bg-blue-800 rounded-xl font-semibold hover:bg-blue-700">
              Submit
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
