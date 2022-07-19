import React from "react";
import "./ItemCount.css"
import { Button, CardBody,Card, CardTitle, CardText,CardSubtitle } from "reactstrap";
import { useState } from "react";
const ItemCount = () => {
  const [count, setCount] = useState(0);
  const onAdd = () => {
    setCount(count + 1);
  };
  const onSubstract = () => {
    setCount(count - 1);
  };
  return (
    <Card
    style={{
      width: '18rem'
    }}
  >
    <img
      alt="Card image"
      src="https://picsum.photos/300/200"
    />
    <CardBody>
      <CardTitle tag="h5">
        Card title
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
        {count}
      </CardSubtitle>
      <CardText>
        Some quick example text to build on the card title and make up the bulk of the card's content.
      </CardText>
      <Button onClick={onSubstract}>
        Add
      </Button>
      <Button onClick={onAdd}>
        Substract
      </Button>
    </CardBody>
  </Card>
  );
};

export default ItemCount;
