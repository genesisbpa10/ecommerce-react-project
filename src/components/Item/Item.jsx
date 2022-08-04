import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";
import ItemCount from "../ItemCount/ItemCount";

const Item = ({product}) => {
 const{ id, name, principalImg, stock, price, category, description, height, width} = product;
  const onAdd = (amount) => {
    console.log(`Acabas de agregar ${amount} productos (${name}) al carrito.`);
  };

  return (
    <>
        <Card
          className="p-1"
          style={{ width: "44vh", height: "auto", margin: "2vh" }}
          key={id}
        >
          <CardImg
            style={{ width: "100%", height: "60%" }}
            src={principalImg}
            alt={name}
          />
          <CardBody className="p-0 my-0 mx-1">
            <CardTitle className="p-0 my-0 mx-1">
              <h3> {name} </h3>
            </CardTitle>
            <CardText className="my-0 mx-1 text-muted">
              {`${description} ${height} x ${width}`}{" "}
            </CardText>
            <CardText className="my-0 mx-1">
              {" "}
              {`Precio: ARS$ ${price}`}{" "}
            </CardText>
            <CardText className="my-0 mx-1"> {`Stock: ${stock}`} </CardText>
            <Link to={`/item/${id}`} className="btn btn-outline-dark px-3">
                Ver Más
              </Link>
            <ItemCount
              className="card text-center"
              initial={1}
              onAdd={onAdd}
              stock={stock}
            />
          </CardBody>
        </Card>
    </>
  );
};
export default Item;
