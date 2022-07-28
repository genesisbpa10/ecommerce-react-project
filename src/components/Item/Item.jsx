import React from "react";
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";
import ItemCount from "../ItemCount/ItemCount";

const Item = ({ product }) => {
  const { id, name, principalImg, stock, price, description } = product;
  const onAdd = (amount) => {
    console.log(`Acabas de agregar ${amount} productos (${name}) al carrito.`);
  };

  return (
    <Card style={{ width: "35vh", height: "auto", margin: "2vh" }} key={id}>
      <CardImg
        style={{ width: "100%", height: "60%" }}
        src={principalImg}
        alt={name}
      />
      <CardBody>
        <CardTitle>
          {" "}
          <h2> {name} </h2>{" "}
        </CardTitle>
        <CardText className="text-muted">{description}</CardText>
        <CardText> {`Precio: ARS$ ${price}`} </CardText>
        <CardText> {`Stock: ${stock}`} </CardText>
        <ItemCount
          className="card text-center"
          initial={1}
          onAdd={onAdd}
          stock={stock}
        />
      </CardBody>
    </Card>
  );
};
export default Item;
