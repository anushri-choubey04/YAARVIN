import PageHeader from "../../components/common/PageHeader";

export default function ClosetEarnings() {
  return (
    <>
      <PageHeader
        title="My Earnings"
        subtitle="Track your rental income"
      />

      <div className="p-4 space-y-4 bg-black">
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <p className="text-xl text-black font-bold">Total Earnings:</p>
          <h2 className="text-2xl  mt-1">₹8,500</h2>
        </div>

        <div className="bg-white rounded-xl p-4 shadow-sm">
          <p className="text-xl font-bold">Recent Rentals Items:</p>
          <ul className="text-sm text-black mt-2 space-y-1">
            <li>Lehenga – ₹2,500</li>
            <li>Gown – ₹1,800</li>
            <li>Saree – ₹1,200</li>
          </ul>
        </div>
      </div>
    </>
  );
}
