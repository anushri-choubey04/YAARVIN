
export default function PriceSummary({ total }) {
  return (
    <div className="border rounded-xl p-4 mt-16">
      <h3 className="font-semibold mb-2">Price Summary</h3>

      <div className="flex justify-between">
        <span>Total</span>
        <span className="font-bold">₹{total}</span>
      </div>

      <button className="mt-4 w-full bg-black text-white py-2 rounded-lg">
        Proceed to Checkout
      </button>
    </div>
  );
}
