import React from "react";
import ItemCount from "./ItemCount";

const onAdd = (amount) => {
  console.log(`Acabas de agregar ${amount} productos al carrito.`);
};
const onErase = () => {
  console.log("Este botón funcionará para eliminar los productos del carrito.");
};
let initial = 1;
let stock = 5;

const ItemListContainer = (props) => {
  return (
    <div className="itemList">
      <h1>{props.greetings}</h1>
      <ItemCount
        stock={stock}
        initial={initial}
        onAdd={onAdd}
        onErase={onErase}
      />
    </div>
  );
};

export default ItemListContainer;
