export default function DeliveryTimeline({ rentPlan }) {
  if (!rentPlan) return null;

  return (
    <div className="bg-black text-white p-4 rounded-xl text-sm space-y-1 mt-4 border border-white">
      <p>📦 Delivery: 1 day before rental</p>
      <p>👗 Rental Period: {rentPlan.label}</p>
      <p>↩️ Return Pickup: Last day evening</p>
      <p>💰 Refund: 24–48 hrs after QC</p>
    </div>
  );
}