import React from "react";
import { useContext } from "react";
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";
import { CartContext } from "../context/CartContext";

const ItemCart = ({ item }) => {
  const { removeFromCart } = useContext(CartContext);
  return (
    <Card
      className="p-1"
      style={{ width: "44vh", height: "auto", margin: "2vh" }}
      key={item.id}
    >
      <CardImg src={item.principalImg} />
      <CardBody>
        <CardTitle>
          <h1>{item.name}</h1>
        </CardTitle>
        <CardText>Precio: ${item.price}</CardText>
        <CardText>Cantidad: {item.quantity}</CardText>
        <CardText>Subtotal: ${item.price * item.quantity}</CardText>
      </CardBody>
      <button onClick={() => removeFromCart(item.id)}>Borrar</button>
    </Card>
  );
};

export default ItemCart;
