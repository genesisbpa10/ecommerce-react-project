import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import ItemCart from "../ItemCart";

const Cart = () => {
  const { cart, totalPrice, clearCart } = useContext(CartContext);
  const navigate = useNavigate()
  return (
    <div style={{height:"100"}}>
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
          <div>
            <h4>Total: ${totalPrice()}</h4>
            <button className="btn btn-outline-dark w-50 px-3" onClick={() => navigate("/checkout")}>
              Finalizar Compra
            </button>
            <button
              className="btn btn-outline-dark w-50 px-3"
              onClick={() => clearCart()}
            >
              Vaciar carrito
            </button>
            <Link to="/" className="btn btn-outline-dark px-3">
              Volver a comprar
            </Link>
          </div>
        </>
      )}
    </div>
  );
};
export default Cart;
