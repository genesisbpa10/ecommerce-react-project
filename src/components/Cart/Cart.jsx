import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import ItemCart from "../ItemCart";
import { Card } from "reactstrap";

const Cart = () => {
  const { cart, totalPrice } = useContext(CartContext);

  return (
    <div>
      {cart.length === 0 ? (
        <>
          {" "}
          <h3> Ups!</h3>
          <p>Tu carrito está vacío.</p>
          <Link to="/" className="btn btn-outline-dark px-3">
            Volver a comprar
          </Link>
        </>
      ) : (
        <>
          {" "}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            {cart.map((item) => (
              <ItemCart key={item.id} item={item} />
            ))}
          </div>
          <Card style={{ height: "20vh", widht: "100vh" }}>
            <h4>Total: ${totalPrice()}</h4>
            <button className="btn btn-outline-dark w-50 px-3">
              Finalizar Compra
            </button>
          </Card>
        </>
      )}
    </div>
  );
};
export default Cart;
