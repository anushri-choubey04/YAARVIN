import { createContext, useContext, useState, useEffect } from "react";

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  // Initialize wishlist directly from localStorage (synchronous, no effect needed)
  const [wishlist, setWishlist] = useState(() => {
    try {
      const data = JSON.parse(localStorage.getItem("wishlist")) || [];
      const clean = data.filter((item) => item && item.id); // Remove invalid items
      // console.log("Loaded wishlist:", clean); // Uncomment for debugging
      return clean;
    } catch (error) {
      console.error("Error loading wishlist:", error);
      return [];
    }
  });

  // Auto-sync to localStorage whenever wishlist changes (side effect)
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    // console.log("Saved wishlist to localStorage:", wishlist); // Uncomment for debugging
  }, [wishlist]);

  const toggleWishlist = (product) => {
    if (!product || !product.id) {
      console.warn("Invalid product passed to toggleWishlist:", product);
      return;
    }
    // console.log("Toggling product:", product.id, product); // Uncomment for debugging

    setWishlist((prev) => {
      const exists = prev.find((p) => p.id === product.id);
      let updated;

      if (exists) {
        updated = prev.filter((p) => p.id !== product.id);
      } else {
        updated = [...prev, product];
      }

      return updated; // localStorage sync happens in the useEffect above
    });
  };

  const isLiked = (id) => {
    if (!id) return false; // Safety check
    const result = wishlist.some((p) => p?.id === id);
    // console.log("isLiked check for ID:", id, "Result:", result); // Uncomment for debugging
    return result;
  };

  return (
    <WishlistContext.Provider value={{ wishlist, toggleWishlist, isLiked }}>
      {children}
    </WishlistContext.Provider>
  );
};

/* eslint-disable react-refresh/only-export-components */
export const useWishlist = () => useContext(WishlistContext);