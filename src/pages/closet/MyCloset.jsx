import PageHeader from "../../components/common/PageHeader";
import ClosetCard from "../../components/closet/ClosetCard";
import { useNavigate } from "react-router-dom";

export default function MyCloset() {
  const navigate = useNavigate();

  // API READY DATA
  const outfits = [
    {
      id: 1,
      title: "Red Bridal Lehenga",
      price: 2499,
      status: "available",
      image: "/Hero/lehnga2.png",
    },
    {
      id: 2,
      title: "Designer Gown",
      price: 1899,
      status: "rented",
      image: "/Hero/gown2.png",
    },
  ];

  return (
    <>
      <PageHeader
        title="My Closet"
        subtitle="Manage outfits you rent to others"
        right={
          <button
            onClick={() => navigate("/closet/upload")}
            className="bg-white text-black px-4 py-2 rounded-lg text-sm"
          >
            + Upload
          </button>
        }
      />

      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {outfits.map((o) => (
          <ClosetCard
            key={o.id}
            outfit={o}
            onEdit={() => navigate(`/closet/${o.id}`)}
          />
        ))}
      </div>
    </>
  );
}
