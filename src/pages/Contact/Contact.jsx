import React from "react";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Top Heading Section */}
      <div className="bg-gradient-to-r from-black to-blue-800 p-6 shadow-sm items-center  text-center">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-white mb-4 md:text-xl"
        >
          <i className="fas fa-arrow-left" /> Back
        </button>

        <h1 className="text-4xl font-bold">Help & Support</h1>
        <p className="text-gray-200 mt-2">
          We’re here to help you with orders, returns, payments and more.
        </p>
      </div>

      <div className="p-5 max-w-5xl mx-auto bg-gradient-to-r from-black to-blue-800 rounded-b-3xl mt-6 pb-10">
        {/* QUICK ACTION CARDS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {[
            { icon: "fa-undo", label: "Returns & Refunds" },

            { icon: "fa-headset", label: "Chat Support" },

            { icon: "fa-shield-alt", label: "Security & Privacy" },
            { icon: "fa-tags", label: "Offers & Coupons" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-[#0f172a] border border-blue-800 rounded-xl p-4 flex flex-col items-center justify-center gap-2 hover:bg-blue-800 transition"
            >
              <i className={`fas ${item.icon} text-blue-400 text-2xl`} />
              <span className="text-sm text-gray-200">{item.label}</span>
            </div>
          ))}
        </div>

        {/* CONTACT INFO */}
        <section className="bg-[#020617] border border-blue-900 rounded-xl p-6 mb-5">
          <h2 className="text-xl font-semibold mb-2 text-blue-400">
            Contact Us
          </h2>

          <p className="text-gray-300 mb-1">
            📞 <span className="text-white font-medium">+91 959-959-5513</span>
          </p>

          <p className="text-gray-300 mb-1">
            ✉️ <span className="text-white font-medium">yaarvin@gmail.com</span>
          </p>

          <p className="text-gray-400 mt-2">
            ⏰ Support Time:{" "}
            <span className="text-white">10 AM – 9 PM (All Days)</span>
          </p>
        </section>

        {/* SELF SERVICE SECTION */}
        <section className="bg-[#020617] border border-blue-900 rounded-xl p-6 mb-5">
          <h2 className="text-xl font-semibold text-blue-400 mb-3">
            Popular Help Topics
          </h2>

          <ul className="space-y-2 text-gray-300">
            <li>• How to track my order?</li>
            <li>• Return & Refund Policy</li>
            <li>• How to cancel an order?</li>
            <li>• Payment failed but money deducted</li>
            <li>• Change address or phone number</li>
          </ul>
        </section>

        {/* GRIEVANCE SECTION */}
        <section className="bg-[#020617] border border-blue-900 rounded-xl p-6">
          <h2 className="text-xl font-semibold text-blue-400 mb-3">
            Grievance / Escalation
          </h2>

          <p className="text-gray-300 mb-2">
            If your issue is unresolved beyond 48 hours, you may escalate by
            emailing:
          </p>

          <p className="text-white font-medium">
            grievance.support@yaarvin.com
          </p>

          <p className="text-gray-400 text-sm mt-2">
            Please include Order ID, Registered Mobile Number & Issue Details.
          </p>
        </section>
      </div>
    </div>
  );
}
