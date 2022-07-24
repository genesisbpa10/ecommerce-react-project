import React from "react";
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";
import ItemCount from "../ItemCount/ItemCount";

const Item = ({ product }) => {
  const { id, title, url, stock } = product;
  const onAdd = (amount) => {
    console.log(`Acabas de agregar ${amount} productos (${title}) al carrito.`);
  };
  const onErase = () => {
    console.log(
      "Este botón funcionará para eliminar los productos del carrito."
    );
  };

  return (
    <Card style={{ width: "35vh", height: "65vh", margin: "2vh" }} key={id}>
      <CardImg style={{ width: "100%", height: "60%" }} src={url} alt={title} />
      <CardBody>
        <CardTitle>
          {" "}
          <h2> {title} </h2>{" "}
        </CardTitle>
        <CardText className="text-muted">{title}</CardText>
        <ItemCount initial={1} onAdd={onAdd} onErase={onErase} stock={stock} />
      </CardBody>
    </Card>
  );
};
export default Item;
