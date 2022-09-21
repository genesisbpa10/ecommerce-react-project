import React from "react";
import { Link, useNavigate } from "react-router-dom";
import ItemCart from "../ItemCart";
import { Row, Col } from "reactstrap";
import "../ItemCart.css";

const Cart = ({ products }) => {
  const { cart, totalPrice, clearCart } = products;
  const navigate = useNavigate();
  return (
    <div className="container py-5 my-5">
      {cart.length === 0 ? (
        <>
          {" "}
          <div className="container py-5 my-5">
            <h3> Ups!</h3>
            <p>Tu carrito está vacío.</p>
            <Link to="/" className="btn btn-outline-dark px-3">
              Volver a comprar
            </Link>
          </div>
        </>
      ) : (
        <>
          <div className="container-cart-title">
            <h4>Producto</h4>
            <h4>Cantidad</h4>
            <h4>Precio</h4>
            <h4>Subtotal</h4>
          </div>{" "}
          <Col>
            {cart.map((item) => (
              <Row>
                <ItemCart key={item.id} item={item} />
              </Row>
            ))}
          </Col>
          <div>
            <h4>Total: ${totalPrice()}</h4>
            <button
              className="btn btn-outline-dark w-50 px-3"
              onClick={() => navigate("/checkout")}
            >
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
