import React from "react";
import { CardGroup } from "react-bootstrap";
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ productDetail }) => {
  console.log({ productDetail });
  const { name, id, principalImg, stock, price, description, weight, height } = productDetail;

  const onAdd = (amount) => {
    console.log(`Acabas de agregar ${amount} productos (${name}) al carrito.`);
  };
  const onErase = () => {
    console.log("Esto va a eliminar los productos del carrito");
  };
  return (
    <CardGroup
      style={{ width: "120vh", height: "95vh", margin: "2vh" }}
      key={id}
    >
      <Card style={{ border: "none" }}>
        <CardImg
          className="m-3 p-2"
          style={{ width: "100%", borderRadius: "15px" }}
          src={principalImg}
          alt={name}
        />
      </Card>
      <Card style={{ border: "none" }}>
        <CardBody style={{ width: "100%", height: "100%" }}>
          <CardTitle>
            {" "}
            <h2> {name} </h2>{" "}
          </CardTitle>
          <CardText className="text-muted">{`${description}${weight} x ${height}`}</CardText>
          <CardText> {`Precio: ARS$ ${price}`} </CardText>
          <CardText> {`Stock: ${stock}`} </CardText>
          <ItemCount
            className="card text-center"
            initial={1}
            onAdd={onAdd}
            onErase={onErase}
            stock={stock}
          />
        </CardBody>
      </Card>
    </CardGroup>
  );
};

export default ItemDetail;
