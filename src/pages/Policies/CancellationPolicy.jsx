// src/pages/CancellationPolicy.jsx
import React from "react";

export default function CancellationPolicy() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Cancellation & Refund Policy
      </h1>

      {/* INTRO */}
      <section className="mb-8">
        <p>
          This Cancellation & Refund Policy applies to all rentals made on
          <strong> LookHook</strong>, a peer-to-peer clothing rental platform.
          Please read this policy carefully before placing an order.
        </p>
      </section>

      {/* SECTION 1 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Order Cancellation by Renter</h2>

        <ul className="list-disc ml-6 space-y-2">
          <li>
            <strong>More than 72 hours before delivery:</strong> Full refund
            (excluding platform convenience fees).
          </li>
          <li>
            <strong>48 – 72 hours before delivery:</strong> 50% refund of rental
            amount.
          </li>
          <li>
            <strong>Less than 48 hours before delivery:</strong> No refund.
          </li>
          <li>
            Once the outfit is shipped or handed over, the order cannot be
            cancelled.
          </li>
        </ul>
      </section>

      {/* SECTION 2 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. Order Cancellation by Lender</h2>
        <p>
          If a lender cancels an order due to unavailability, damage, or any
          other reason:
        </p>
        <ul className="list-disc ml-6 mt-2 space-y-2">
          <li>Renter will receive a full refund.</li>
          <li>
            LookHook may assist in finding a replacement outfit where possible.
          </li>
          <li>
            Repeated cancellations by lenders may lead to account suspension.
          </li>
        </ul>
      </section>

      {/* SECTION 3 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. Refunds</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>
            Refunds are processed to the original payment method within
            <strong> 5–10 business days</strong>.
          </li>
          <li>
            Convenience fees, delivery charges, and payment gateway fees are
            non-refundable.
          </li>
          <li>
            Security deposits (if applicable) are refunded after successful
            return and quality check of the outfit.
          </li>
        </ul>
      </section>

      {/* SECTION 4 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">4. Try-On & Fit Issues</h2>
        <p>
          We strongly recommend using the <strong>“Book a Try-On”</strong>
          feature before confirming your rental.
        </p>
        <ul className="list-disc ml-6 mt-2 space-y-2">
          <li>
            No refunds will be issued for fit issues if a try-on was not booked.
          </li>
          <li>
            Minor fit variations are considered normal and do not qualify for
            cancellation.
          </li>
        </ul>
      </section>

      {/* SECTION 5 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">5. Damaged, Incorrect or Unusable Items</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>
            If you receive a damaged or incorrect item, report it within
            <strong> 6 hours</strong> of delivery with photo/video proof.
          </li>
          <li>
            Upon verification, a full or partial refund may be issued.
          </li>
          <li>
            Items damaged during usage by the renter are not eligible for
            refunds and may lead to deposit deductions.
          </li>
        </ul>
      </section>

      {/* SECTION 6 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">6. Late Cancellations & No-Shows</h2>
        <p>
          If the renter fails to accept delivery or cancels after dispatch, no
          refund will be provided, and the full rental amount may be charged.
        </p>
      </section>

      {/* SECTION 7 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">7. Force Majeure</h2>
        <p>
          LookHook shall not be held liable for cancellations due to events
          beyond reasonable control, including natural disasters, strikes,
          government restrictions, or logistics disruptions.
        </p>
      </section>

      {/* SECTION 8 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">8. Policy Updates</h2>
        <p>
          LookHook reserves the right to update or modify this policy at any
          time. Changes will be effective immediately upon posting.
        </p>
      </section>

      {/* CONTACT */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">9. Contact Us</h2>
        <p>
          For cancellation or refund related queries, contact us at:
        </p>
        <p className="mt-2">
          <strong>Email:</strong>{" "}
          <a href="mailto:support@lookhook.in" className="text-blue-600 underline">
            support@lookhook.in
          </a>
          <br />
          <strong>Address:</strong> LookHook Pvt Ltd, Bengaluru, Karnataka, India
        </p>
      </section>

      <p className="text-sm text-gray-500 text-center mt-12">
        Last updated: 13-Jan-2026
      </p>
    </div>
  );
}
