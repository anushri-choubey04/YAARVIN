import { useNavigate } from "react-router-dom";
import ProductCard from "../components/product/ProductCard";
import { useWishlist } from "../context/WishlistContext";

export default function Wishlist() {
  const navigate = useNavigate();

  const { wishlist } = useWishlist();

  return (
    <div className="min-h-screen bg-black text-white">
      {/* HEADER */}
      <header className="flex items-center border-t gap-3 px-4 py-3 border-b">
        <button onClick={() => navigate(-1)} className="text-xl">
          <i className="fas fa-arrow-left" />
        </button>
        <h2 className="absolute left-1/2 -translate-x-1/2 font-semibold text-lg md:text-2xl text-center">
          Wishlist ({wishlist.length})
        </h2>
      </header>

      {/* CONTENT */}
      {wishlist.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-[70vh] text-center px-4">
          <img
            src="https://cdn-icons-png.flaticon.com/512/833/833472.png"
            alt="Empty Wishlist"
            className="w-24 mb-6"
          />
          <h3 className="text-xl font-semibold">Your Wishlist is Empty</h3>
          <p className="text-gray-400 text-sm">
            Tap ❤️ to save your favourite items
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 md:px-32">
          {wishlist.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
