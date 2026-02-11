import images from "../utils/images";


export const stories = [
  {
    id: "women-ethnic",
    title: "Women",
    image: images["Hero/lehnga1.png"],
    sizes: ["S", "M", "L"],
    filters: {
      gender: "Women",
      types: ["Lehenga", "Saree"],
    },
  },
  {
    id: "men-formal",
    title: "Men",
    image: images["PriceSection/Kurta.png"],
    sizes: ["S", "M", "L"],
    filters: {
      gender: "Men",
    },
  },
  {
    id: "party-wear",
    title: "Party Wear",
    image: images["PriceSection/Kurta1.png"],
    sizes: ["S", "M", "L"],
    filters: {
      minRating: 4.5,
    },
  },
];
