import { useNavigate } from "react-router-dom";
import { useWishlist } from "../../context/WishlistContext";

export default function ProductCard({ product }) {
  const navigate = useNavigate();
  const { toggleWishlist, isLiked } = useWishlist();

  // Ensure a valid, unique ID (fallback to _id if id is missing)
  const productId = product?.id || product?._id;
  if (!productId) {
    console.warn("Product missing ID:", product);
    return null; // Or render a placeholder
  }

  const liked = isLiked(productId);
  // console.log("Product ID:", productId, "Liked:", liked); // Uncomment for debugging

  const mrp = Math.round(product.price * 1.25);
  const discount = Math.round(((mrp - product.price) / mrp) * 100);

  return (
    <div className="group h-[310px] md:h-[330px] cursor-pointer overflow-hidden bg-neutral-800 rounded-xl border shadow-lg transition duration-200">
      {/* IMAGE */}
      <div
        className="relative overflow-hidden"
        onClick={() => navigate(`/single-product/${productId}`)}
      >
        <img
          src={product.image || product.img}
          alt={product.title}
          className="h-[220px] md:h-[240px] w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* ❤️ Wishlist */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            // Pass the product with ensured ID
            toggleWishlist({ ...product, id: productId });
          }}
          className="absolute top-3 right-3 bg-black backdrop-blur p-2 rounded-full shadow"
        >
          <i
            className={`fa-heart ${
              liked ? "fas text-red-500" : "far text-white"
            }`}
          />
        </button>

        {/* DISCOUNT */}
        <span className="absolute top-3 left-3 bg-green-600 text-white text-xs px-2 py-1 rounded">
          {discount}% OFF
        </span>
      </div>

      {/* CONTENT */}
      <div className="p-2">
        <h3 className="text-white font-semibold text-sm line-clamp-2">
          {product.title}
        </h3>

        <div className="flex items-center gap-2 mt-1">
          <span className="text-white font-bold text-lg">₹{product.price}</span>
          <span className="text-gray-400 line-through text-sm">₹{mrp}</span>
        </div>

        {product.size && (
          <p className="text-gray-300 text-xs mt-1">
            Size: <b>{product.size}</b>
          </p>
        )}
      </div>
    </div>
  );
}