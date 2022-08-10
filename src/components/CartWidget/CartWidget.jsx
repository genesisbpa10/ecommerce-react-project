import React, { useContext } from "react";
import { BsCart } from "react-icons/bs";
import "./CartWidget.css";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
  const { cart } = useContext(CartContext);

  return (
    <>
      <BsCart className="mx-2 min_cart" /> <span> {cart.length} </span>
    </>
  );
};

export default CartWidget;
