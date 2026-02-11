import images from "../utils/images";


export const stories = [
  {
    id: 1,
    title: "Women",
    image: images["Hero/lehnga1.png"],
    sizes: ["S", "M", "L"],
    filters: {
      gender: "Women",
      types: ["Lehenga", "Saree"],
    },
  },
  {
    id: 2,
    title: "Men",
    image: images["PriceSection/Kurta.png"],
    sizes: ["S", "M", "L"],
    filters: {
      gender: "Men",
    },
  },
  {
    id: 3,
    title: "Party Wear",
    image: images["PriceSection/Kurta1.png"],
    sizes: ["S", "M", "L"],
    filters: {
      minRating: 4.5,
    },
  },
];
