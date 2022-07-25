const products = [
  {
    price:"$4000",
    id: 3,
    title: "Snake",
    url: "/img/snake.jpg",
    stock: "3",
  },
  {
    price:"$3000",
    id: 1,
    url: "/img/sheine-grey.jpg",
    title: "Sheine Grey",
    stock: "6",
  },
  {
    price:"$2000",
    id: 9,
    title: "Black",
    url: "/img/black.jpg",
    stock: "12",
  },
  {
    price:"$2800",
    id: 6,
    title: "Mome Black 2",
    url: "/img/mome-black-2.jpg",
    stock: "10",
  },
  {
    price:"$4000",
    id: 7,
    title: "Gold",
    url: "/img/gold.jpg",
    stock: "2",
  },
  {
    price:"$3000",
    id: 4,
    title: "Snake Grey ",
    url: "/img/snake-grey.jpg",
    stock: "8",
  },
  {
    price:"$2600",
    id: 5,
    title: "Mome Black ",
    url: "/img/mome-black.jpg",
    stock: "9",
  },
  {
    price:"$1900",
    id: 8,
    title: "Croco Red",
    url: "/img/croco-red.jpg",
    stock: "5",
  },
  {
    price:"$2500",
    id: 2,
    title: "Sheine Grey 2",
    url: "/img/sheine-grey-2.jpg",
    stock: "4",
  },
];

export const data = new Promise((resolve, reject) => {
  let condition = true;
  setTimeout(() => {
    if (condition) {
      resolve(products);
    } else {
      reject("Salió mal.");
    }
  }, 2000);
});
