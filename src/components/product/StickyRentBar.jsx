export default function StickyRentBar({ total, onRent }) {
  return (
    <div className="fixed bottom-16 left-0 right-0 bg-white border-t p-3 md:hidden z-50">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-xs">Total Payable</p>
          <p className="font-bold">₹{total}</p>
        </div>
        <button
          onClick={onRent}
          className="bg-black text-white px-6 py-3 rounded-xl"
        >
          Rent Now
        </button>
      </div>
    </div>
  );
}