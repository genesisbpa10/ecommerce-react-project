const products = [
  {
    albumId: 1,
    id: 3,
    title: "Snake",
    url: "/img/snake.jpg",
    stock: "3",
  },
  {
    albumId: 1,
    id: 1,
    url: "/img/sheine-grey.jpg",
    title: "Sheine Grey",
    stock: "6",
  },
  {
    albumId: 1,
    id: 9,
    title: "Black",
    url: "/img/black.jpg",
    stock: "12",
  },
  {
    albumId: 1,
    id: 6,
    title: "Mome Black 2",
    url: "/img/mome-black-2.jpg",
    stock: "10",
  },
  {
    albumId: 1,
    id: 7,
    title: "Gold",
    url: "/img/gold.jpg",
    stock: "2",
  },
  {
    albumId: 1,
    id: 4,
    title: "Snake Grey ",
    url: "/img/snake-grey.jpg",
    stock: "8",
  },
  {
    albumId: 1,
    id: 5,
    title: "Mome Black ",
    url: "/img/mome-black.jpg",
    stock: "9",
  },
  {
    albumId: 1,
    id: 8,
    title: "Croco Red",
    url: "/img/croco-red.jpg",
    stock: "5",
  },
  {
    albumId: 1,
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
