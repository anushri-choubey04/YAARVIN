// ProductsPage.jsx
import { useLocation } from "react-router-dom";
import ProductGrid from "./ProductGrid";
import dummyProducts from "../../data/dummyProducts";

export default function ProductsPage() {
  const location = useLocation();
  const { storyFilters, heading } = location.state || {};

  let filteredProducts = [...dummyProducts];

  if (storyFilters) {
    if (storyFilters.gender) {
      filteredProducts = filteredProducts.filter(
        (p) => p.category === storyFilters.gender
      );
    }

    if (storyFilters.types) {
      filteredProducts = filteredProducts.filter((p) =>
        storyFilters.types.includes(p.type)
      );
    }

    if (storyFilters.minRating) {
      filteredProducts = filteredProducts.filter(
        (p) => p.rating >= storyFilters.minRating
      );
    }
  }

  return (
    <ProductGrid
      products={filteredProducts}
      heading={heading || "All Products"}
    />
  );
}
