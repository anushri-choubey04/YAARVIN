
import PageHeader from "../../components/common/PageHeader";

export default function RentalDetails() {
  

  return (
    <section className="min-h-screen bg-white  pb-24">
      <PageHeader title="Rentals Details" />

      <div className="bg-slate-100 rounded-xl p-4 md:mx-12 m-4">
        <img
          src="/QuickView/lehnga1.png"
          className="w-full h-60 object-cover rounded-lg"
          alt="Rental"
        />

        <h3 className="mt-4 font-semibold text-lg">
          Designer Lehenga
        </h3>

        <div className="mt-3 space-y-2 text-sm">
          <p>📅 Rent Period: 15 Jan – 20 Jan</p>
          <p>⏳ Return Due: <strong>20 Jan</strong></p>
          <p>💰 Deposit: ₹2000</p>
          <p>⚠ Late Fee: ₹300/day</p>
        </div>

        {/* RETURN BUTTON */}
        <button className="mt-6 w-full bg-black text-white py-3 rounded-xl">
          Request Return Pickup
        </button>
      </div>
    </section>
  );
}
