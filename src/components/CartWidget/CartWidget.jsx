import React, { useContext } from "react";
import { BsCart } from "react-icons/bs";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { cart } = useContext(CartContext);

  return (
    <>
      <Link style={{ color: "black", textDecorationLine: "none" }} to="/cart">
        <BsCart />{" "}
        <span>
          {" "}
          {cart.length !== 0 &&
            cart
              .map((e) => e.quantity)
              .reduce((act, actualItem) => act + actualItem)}{" "}
        </span>
      </Link>
    </>
  );
};

export default CartWidget;
