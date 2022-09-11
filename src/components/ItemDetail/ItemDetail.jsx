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
    <>
        <CardGroup 
          key={productDetail.id}
          className="m-auto p-auto"
          style={{
            width: "80wh",
            height: "65vh",
            margin: "2vh",
          }}
        
        >
          <Card  key={productDetail.principalImg} >
            <CardImg
            key={`${productDetail.id}${productDetail.principalImg}`}
              className="m-auto p-0"
              style={{ width: "60%", height:"80%" }}
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
              <CardText key={productDetail.id} className="text-muted">
                {productDetail.description}
              </CardText>
              <CardText> {`Precio: ARS$ ${productDetail.price}`} </CardText>
              <CardText> {`Stock: ${productDetail.stock}`} </CardText>
              <ItemCount
            
                className="card text-center"
                initial={1}
                onAdd={onAdd}
                stock={productDetail.stock}
                count={count}
                setCount={setCount}
              />
            </CardBody>
          </Card>
        </CardGroup>
      
    </>
  );
};

export default ItemDetail;
