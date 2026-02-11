import { useParams } from "react-router-dom";
import ProductGrid from "../../components/product/ProductGrid";
import images from "../../utils/images";

const CATEGORY_TITLES = {
  graduation: "Graduation",
  "office-event": "Office Event",
  "party-wear": "Party Wear",
  "ethnic-wear": "Ethnic Wear",
  "pre-wedding": "Pre-Wedding",
  "wedding-guest": "Wedding Guest",
  "date-night": "Date Night",
  farewell: "Farewell",
};

const PRODUCTS = [
  {
    id: 1,
    title: "Black Party Dress",
    price: 1799,
    gender: "Women",
    size: "M",
    category: "graduation",
    img: images["Hero/gown1.png"],
  },
  {
    id: 2,
    title: "Tuexdo",
    price: 4999,
    gender: "Men",
    size: "L",
    category: "office-event",
    img: images["HowItWorks/TUEXDO.png"],
  },
  {
    id: 3,
    title: "Peach Dress",
    price: 3499,
    gender: "Women",
    size: "S",
    category: "party-wear",
    img: images["HowItWorks/Dress.png"],
  },
  {
    id: 4,
    title: "Kurta",
    price: 6999,
    gender: "Men",
    size: "L",
    category: "wedding-guest",
    img: images["PriceSection/Kurta1.png"],
  },
  {
    id: 5,
    title: "Jodhpuri Set",
    price: 2599,
    gender: "Men",
    size: "XL",
    category: "ethnic-wear",
    img: images["PriceSection/Kurta.png"],
  },
  {
    id: 6,
    title: "Lehenga",
    price: 8999,
    gender: "Women",
    size: "M",
    category: "pre-wedding",
    img: images["PriceSection/Lehenga.png"],
  },
  {
    id: 7,
    title: "Gown Dress",
    price: 5999,
    gender: "Women",
    size: "L",
    category: "date-night",
    img: images["PriceSection/Gown.png"],
  },
  {
    id: 8,
    title: "Suit",
    price: 7999,
    gender: "Men",
    size: "M",
    category: "farewell",
    img: images["PriceSection/Suit.png"],
  },
  
];

export default function OccasionGrid() {
  const { slug } = useParams();

  const heading = CATEGORY_TITLES[slug] || "Occasion";

  const filteredProducts = PRODUCTS.filter((p) => p.category === slug);

  return (
    <section className="bg-black">
      <ProductGrid
        heading={heading}
        products={filteredProducts}
        enableFilters={true}
      />
    </section>
  );
}
