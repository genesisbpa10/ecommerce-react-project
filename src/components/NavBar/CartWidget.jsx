import React from "react";
import { BsCart } from "react-icons/bs";
import { IconContext } from "react-icons";
import "./CartWidget.css";

const CartWidget = () => {
  return (
      <IconContext.Provider value={{ color: "gray", size: "1.5em" }}>
        <BsCart className="mx-2 min_cart" />
      </IconContext.Provider>
  );
};

export default CartWidget;
