import { useParams } from "react-router-dom";
import ProductGrid from "../components/product/ProductGrid";
import images from "../utils/images";

const QUICK_VIEW_PRODUCTS = [
  {
    id: "1",
    title: "MAYKR",
    subtitle: "Smart Casual Wear",
    price: 599,
    image: images["QuickView/gown1.png"],
    sizes: "S",
  },
  {
    id: "2",
    title: "ISHRANSH",
    subtitle: "Women's Fancy Gown",
    price: 499,
    image: images["QuickView/gown2.png"],
    sizes: ["S", "M", "L","XL"],
  },
  {
    id: "3",
    title: "FIT & FLARE",
    subtitle: "Designer Dresses",
    price: 799,
    image: images["QuickView/lehnga3.png"],
    sizes: ["S", "M", "L","XL"],
  },
  {
    id: "4",
    title: "ETHNIC",
    subtitle: "Traditional Wear",
    price: 899,
    image: images["QuickView/lehnga2.png"],
    sizes: ["S", "M", "L","XL"],
  },
  {
    id: "5",
    title: "STYLE",
    subtitle: "Stylish Collection",
    price: 699,
    image: images["PriceSection/Kurta2.png"],
    sizes: ["S", "M", "L","XL"],
  },
  {
    id: "6",
    title: "LUXE WEAR",
    subtitle: "Premium Fashion",
    price: 999,
    image: images["PriceSection/Kurta.png"],
    sizes: ["S", "M", "L","XL"],
  },
];

export default function QuickViewGrid() {
  const { quickId } = useParams();

  // If user opens /quick-view/all → show all
  const filteredProducts =
    quickId === "all"
      ? QUICK_VIEW_PRODUCTS
      : QUICK_VIEW_PRODUCTS.filter((p) => p.id === quickId);

  return (
    <section className="bg-black min-h-screen">
      <ProductGrid
        heading="Quick View"
        products={filteredProducts}
        baseRoute="/products"
        showFilters={false}
      />
    </section>
  );
}
