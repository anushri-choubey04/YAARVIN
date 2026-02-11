import { useNavigate } from "react-router-dom";

export default function OutfitSuccess() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h2 className="text-2xl font-bold">🎉 Outfit Uploaded!</h2>
      <p className="text-gray-600 mt-2">
        Your outfit is now live for rent.
      </p>

      <button
        onClick={() => navigate("/closet")}
        className="mt-6 px-6 py-3 bg-black text-white rounded-lg"
      >
        Go to My Closet
      </button>
    </div>
  );
}
