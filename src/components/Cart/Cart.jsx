import React from "react";
import { Link } from "react-router-dom";
const Cart = () => {
  return (
    <>
      <h2>Tu carrito está vacío</h2>

      <Link to="/" className="btn btn-outline-dark px-3">
        Volver
      </Link>
    </>
  );
};

export default Cart;
