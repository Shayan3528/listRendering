import img1 from "../Asset/Anna_Frank.jpg";
import img2 from "../Asset/ballon.jpg";
import img3 from "../Asset/lady.jpg";
import img5 from "../Asset/panda.jpg";
export const customers = [
  {
    id: 1,
    f_name: "Abby",
    l_name: "Thomas",
    gender: "M",
    married: true,
    age: 32,
    expence: 500,
    purched: ["Shampo", "Toys", "Books"],
    image: img1,
  },
  {
    id: 2,
    f_name: "Bbby",
    l_name: "Thanos",
    gender: "M",
    married: false,
    age: 40,
    image: img2,
    expence: 5000,
    purched: ["Chips", "Toys", "Books", "Brush", "Shirt"],
  },
  {
    id: 3,
    f_name: "Alex",
    l_name: "Jhon",
    gender: "M",
    married: true,
    age: 35,
    image: img3,
    expence: 30000,
    purched: ["Phone", "Toys", "Books", "water", "pen"],
  },
  {
    id: 4,
    f_name: "Bob",
    l_name: "Dilan",
    gender: "F",
    married: false,
    age: 45,
    expence: 1000,
    image: img5,
    purched: ["CD", "Music Player", "Books", "water", "T-shirt"],
  },
];
