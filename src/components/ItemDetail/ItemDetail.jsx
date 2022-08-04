import React from "react";
import { CardGroup } from "react-bootstrap";
import { 
  Card, 
  CardImg, 
  CardBody, 
  CardTitle, 
  CardText } from "reactstrap";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = (props) => {
//  const {id, principalImg, name, description, height, width, price, stock} = productDetail;

  const onAdd = (amount) => {
    console.log(`Acabas de agregar ${amount} productos al carrito.`);
  };
  const onErase = () => {
    console.log("Esto va a eliminar los productos del carrito");
  };
const item = props.productDetail
  return (
    <CardGroup
      className="p-auto"
      style={{
        border: "silver solid 2px",
        borderRadius: "20px",
        width: "120vh",
        height: "80vh",
        margin: "2vh",
      }}
      key={item.id}
    >
      <Card style={{ border: "none" }}>
        <CardImg
          className="m-3 p-2"
          style={{ width: "100%", borderRadius: "15px" }}
          src={item.principalImg}
          alt={item.name}
        />
      </Card>
      <Card style={{ border: "none" }}>
        <CardBody style={{ width: "100%", height: "100%" }}>
          <CardTitle>
            {" "}
            <h2> {item.name} </h2>{" "}
          </CardTitle>
          <CardText className="text-muted">{`${item.description}${item.width} x ${item.height}`}</CardText>
          <CardText> {`Precio: ARS$ ${item.price}`} </CardText>
          <CardText> {`Stock: ${item.stock}`} </CardText>
          <ItemCount
            className="card text-center"
            initial={1}
            onAdd={onAdd}
            onErase={onErase}
            stock={item.stock}
          />
        </CardBody>
      </Card>
    </CardGroup>
  );
};

export default ItemDetail;
