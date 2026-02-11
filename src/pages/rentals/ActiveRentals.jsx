import { useNavigate } from "react-router-dom";
import PageHeader from "../../components/common/PageHeader";
import images from "../../utils/images";

const ACTIVE_RENTALS = [
  {
    id: "r1",
    title: "Designer Lehenga",
    image: images["QuickView/lehnga1.png"],
    rentTill: "2026-01-20",
    deposit: 2000,
    status: "Active",
  },
  {
    id: "r2",
    title: "Party Gown",
    image: images["QuickView/gown1.png"],
    rentTill: "2026-01-18",
    deposit: 1500,
    status: "Return Soon",
  },
];

export default function ActiveRentals() {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen bg-slate-100  pb-24">
      <PageHeader title="My Active Rentals" />

      <div className="p-4 space-y-4 md:mx-12">
        {ACTIVE_RENTALS.map((r) => (
          <div
            key={r.id}
            onClick={() => navigate(`/rentals/${r.id}`)}
            className="bg-white rounded-xl shadow cursor-pointer flex gap-4 p-3 "
          >
            <img
              src={r.image}
              alt={r.title}
              className="w-24 h-28 object-cover rounded-lg"
            />

            <div className="flex-1">
              <h3 className="font-semibold">{r.title}</h3>
              <p className="text-sm text-gray-500">
                Return by {r.rentTill}
              </p>
              <p className="text-sm mt-1">
                Deposit: ₹{r.deposit}
              </p>

              <span
                className={`inline-block mt-2 px-2 py-1 text-xs rounded ${
                  r.status === "Return Soon"
                    ? "bg-red-100 text-red-600"
                    : "bg-green-100 text-green-600"
                }`}
              >
                {r.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
