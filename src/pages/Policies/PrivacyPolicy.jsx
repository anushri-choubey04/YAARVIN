// src/pages/PrivacyPolicy.jsx
import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Privacy Policy</h1>

      {/* SECTION 1 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
        <p className="mb-2">
          When you use LookHook to rent or lend outfits, we may collect personal information like your name, email, phone number, address, and payment details. 
        </p>
        <p className="mb-2">
          We also collect information automatically, such as IP address, device information, browser type, and usage patterns, to improve our platform.
        </p>
      </section>

      {/* SECTION 2 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>To process rentals, payments, and refunds.</li>
          <li>To provide customer support and communicate important updates.</li>
          <li>To improve our platform, analyze usage, and develop new features.</li>
          <li>To send promotional emails (with your consent) about offers and new arrivals.</li>
        </ul>
      </section>

      {/* SECTION 3 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. Consent</h2>
        <p className="mb-2">
          By providing your personal information, you consent to its collection and use as described in this Privacy Policy. 
        </p>
        <p>
          You can withdraw your consent at any time by contacting us at <a href="mailto:info@lookhook.in" className="text-blue-600 underline">info@lookhook.in</a>.
        </p>
      </section>

      {/* SECTION 4 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">4. Sharing Your Information</h2>
        <p className="mb-2">
          We do not sell your personal information. We may share data with:
        </p>
        <ul className="list-disc ml-6 space-y-1">
          <li>Payment processors to complete transactions securely.</li>
          <li>Third-party service providers for analytics, marketing, or hosting services.</li>
          <li>Legal authorities when required by law.</li>
        </ul>
      </section>

      {/* SECTION 5 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">5. Security</h2>
        <p>
          We implement industry-standard security measures, including SSL encryption and secure storage, to protect your data. 
          However, no online system can be 100% secure.
        </p>
      </section>

      {/* SECTION 6 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">6. Cookies & Tracking</h2>
        <p className="mb-2">
          LookHook uses cookies and similar technologies to enhance user experience, track usage, and serve personalized content and advertisements. 
        </p>
        <p>
          You can manage or disable cookies via your browser settings, though some platform features may be affected.
        </p>
      </section>

      {/* SECTION 7 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">7. Age Restrictions</h2>
        <p>
          By using LookHook, you confirm that you are at least 18 years old. We do not knowingly collect personal information from minors.
        </p>
      </section>

      {/* SECTION 8 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">8. International Data Transfers</h2>
        <p>
          Your data may be stored or processed outside India. By using LookHook, you consent to such transfers, which comply with applicable laws.
        </p>
      </section>

      {/* SECTION 9 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">9. Your Rights</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>Access, update, or delete your personal information.</li>
          <li>Opt-out of promotional communications.</li>
          <li>Withdraw consent for processing your data at any time.</li>
        </ul>
      </section>

      {/* SECTION 10 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">10. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy periodically. Updated policies will be posted on this page with the "Last Updated" date.
        </p>
      </section>

      {/* CONTACT */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p>If you have any questions or concerns, reach out to our Privacy Officer:</p>
        <p className="mt-2">
          <strong>Email:</strong> <a href="mailto:info@lookhook.in" className="text-blue-600 underline">info@lookhook.in</a><br/>
          <strong>Address:</strong> LookHook Pvt Ltd, 123 MG Road, Bangalore, Karnataka, India
        </p>
      </section>

      <p className="text-sm text-gray-500 text-center mt-12">
        Last updated: 13-Jan-2026
      </p>
    </div>
  );
}
