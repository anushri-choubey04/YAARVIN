import { useParams } from "react-router-dom";
import ProductGrid from "../../components/product/ProductGrid";
import images from "../../utils/images";

const ALL_PRODUCTS = [
  {
    id: 1,
  
    title: "Smart Wear",
    price: 1999,
    image: images["QuickView/gown1.png"],
    size: "M",
  },
  {
    id: 2,
    
    title: "Women's Fancy Gown",
    price: 3499,
    image: images["QuickView/gown2.png"],
    size: "L",
  },
  {
    id: 3,
    title: "ETHNIC SET",
    
    price: 5999,
    image: images["PriceSection/Lehnga12.png"],
    size: "S",
  },
  {
    id: 4,
    title: "DESIGNER SUIT",
    
    price: 7999,
    image: images["PriceSection/Suit.png"],
    size: "XL",
  },
  {
    id: 5,
   
    title: "Evening Gown",
    price: 2499,
    image: images["Hero/gown2.png"],
    size: "M",
  },
  {
    id: 6,
    title: "Party Dress",
    
    price: 3999,
    image: images["HowItWorks/Dress.png"],
    size: "L",
  },
];

const PRICE_MAP = {
  under2k: { max: 2000, label: "Under ₹2K" },
  under4k: { max: 4000, label: "Under ₹4K" },
  under6k: { max: 6000, label: "Under ₹6K" },
  under8k: { max: 8000, label: "Under ₹8K" },
};

export default function PriceGrid() {
  const { priceRange } = useParams();

  const config = PRICE_MAP[priceRange];

  const filteredProducts = ALL_PRODUCTS.filter((p) => p.price <= config.max);

  return (
    <section className="bg-black">
      <ProductGrid
        heading={config.label}
        products={filteredProducts}
        baseRoute="/products"
        showFilters={false}
      />
    </section>
  );
}
