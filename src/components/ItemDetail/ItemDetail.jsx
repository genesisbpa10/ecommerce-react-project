import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CardGroup } from "react-bootstrap";
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ productDetail }) => {
  const { addToCart } = useContext(CartContext);

  const navigate = useNavigate();
  const [count, setCount] = useState(1);

  const onAdd = (quantityToAdd) => {
    addToCart(productDetail, quantityToAdd);
    console.log(`Acabas de agregar ${quantityToAdd} productos al carrito.`);
    setCount(quantityToAdd);
    console.log(count);
    navigate("/cart");
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
      key={productDetail.id}
    >
      <Card style={{ border: "none" }}>
        <CardImg
          className="m-3 p-2"
          style={{ width: "100%", borderRadius: "15px" }}
          src={productDetail.principalImg}
          alt={productDetail.name}
        />
      </Card>
      <Card style={{ border: "none" }}>
        <CardBody style={{ width: "100%", height: "100%" }}>
          <CardTitle>
            {" "}
            <h2> {productDetail.name} </h2>{" "}
          </CardTitle>
          <CardText className="text-muted">
            {productDetail.description}
          </CardText>
          <CardText> {`Precio: ARS$ ${productDetail.price}`} </CardText>
          <CardText> {`Stock: ${productDetail.stock}`} </CardText>
          <ItemCount
            className="card text-center"
            initial={1}
            onAdd={onAdd}
            stock={productDetail.stock}
          />
        </CardBody>
      </Card>
    </CardGroup>
  );
};

export default ItemDetail;
