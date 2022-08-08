import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { CardGroup } from "react-bootstrap";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Button,
  CardFooter
} from "reactstrap";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = (props) => {
  const item = props.productDetail
  const navigate = useNavigate();
  const [count, setCount] = useState(item.initial);
  const [goToCart, setGoToCart] = useState(false);

  const onAdd = (quantityToAdd) => {
    console.log(`Acabas de agregar ${quantityToAdd} productos al carrito.`);
    setCount(quantityToAdd)
    console.log(count)
    //Navegar al "/cart"
    navigate("/cart")
    setGoToCart(true)
  };
  const onErase = () => {
    console.log("Esto va a eliminar los productos del carrito");
  };
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
