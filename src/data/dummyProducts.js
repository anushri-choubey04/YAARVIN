// src/data/dummyProducts.js
import images from "../utils/images";

const dummyProducts = [
  {
    id: 1,
    title: "Designer Lehenga",
    category: "Women",
    type: "Lehenga",
    price: 2499,
    rentalPrice: 899,
    deposit: 1000,
    sizes: ["S", "M", "L"],
    rating: 4.6,
    stock: 5,
    images: [
      images["Hero/lehnga1.png"],
      images["Hero/lehnga1.png"]
    ],
    description:
      "Premium bridal designer lehenga available for 48-hour rental. Dry-cleaned after every use."
  },

  {
    id: 2,
    title: "Black Tuxedo Suit",
    category: "Men",
    type: "Tuxedo",
    price: 3999,
    rentalPrice: 1299,
    deposit: 1500,
    sizes: ["M", "L", "XL"],
    rating: 4.8,
    stock: 8,
    images: [
      images["Products/tuxedo1.jpg"],
      images["Products/tuxedo1b.jpg"]
    ],
    description:
      "Stylish tuxedo perfect for weddings, parties and events. Includes blazer + pant."
  },

  {
    id: 3,
    title: "Saree – Silk Party Wear",
    category: "Women",
    type: "Saree",
    price: 1999,
    rentalPrice: 699,
    deposit: 800,
    sizes: ["Free Size"],
    rating: 4.4,
    stock: 12,
    images: [
      images["Hero/suit.jpg"],
      images["Hero/saree1b.png"]
    ],
    description:
      "Elegant silk saree suitable for receptions and festivals. Includes matching blouse piece."
  }
];

export default dummyProducts;
