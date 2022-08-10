import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
// import CartContext from "../../context/CartContext";

const Cart = () => {
  const {cart}= useContext(CartContext)
  console.log(cart)
  return <h1>Cart</h1>;
};

export default Cart;
