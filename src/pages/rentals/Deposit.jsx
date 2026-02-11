import PageHeader from "../../components/common/PageHeader";

export default function Deposit() {
  return (
    <section className="min-h-screen bg-slate-100  pb-24">
      <PageHeader title="Deposits & Charges" />

      <div className="bg-white rounded-xl shadow p-4 m-4 md:mx-12 space-y-3">
        <div className="flex justify-between">
          <span>Security Deposit</span>
          <span>₹2000</span>
        </div>

        <div className="flex justify-between text-red-600">
          <span>Late Fee</span>
          <span>-₹300</span>
        </div>

        <hr />

        <div className="flex justify-between font-semibold">
          <span>Refundable Amount</span>
          <span>₹1700</span>
        </div>
      </div>
    </section>
  );
}
