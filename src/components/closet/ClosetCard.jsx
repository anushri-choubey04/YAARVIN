export default function ClosetCard({ outfit, onEdit }) {
  const statusColors = {
    available: "bg-green-600",
    rented: "bg-yellow-600",
    blocked: "bg-red-600",
  };

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm">
      <img
        src={outfit.image}
        alt={outfit.title}
        className="h-56 w-full object-cover"
      />

      <div className="p-4 space-y-2">
        <h3 className="font-semibold">{outfit.title}</h3>

        <p className="text-sm text-gray-500">
          ₹{outfit.price} / day
        </p>

        <span
          className={`inline-block px-3 py-1 text-xs text-white rounded-full ${statusColors[outfit.status]}`}
        >
          {outfit.status.toUpperCase()}
        </span>

        <button
          onClick={onEdit}
          className="mt-3 w-full border rounded-lg py-2 text-sm hover:bg-black hover:text-white transition"
        >
          Manage Outfit
        </button>
      </div>
    </div>
  );
}
