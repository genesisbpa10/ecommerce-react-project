import React from "react";
import { Link } from "react-router-dom";

const ItemNotFound = () => {
  return (
    <div>
      <h1>Lo sentimos</h1>
      <p>El producto que estás buscando no existe.</p>
      <Link to="/" className="btn btn-outline-dark px-3">
        Volver a comprar
      </Link>
    </div>
  );
};

export default ItemNotFound;
