import React, { useState } from "react";
import "./ItemCount.css";
import { Button, Card, CardHeader } from "reactstrap";

const ItemCount = ({ stock, initial, onAdd, onErase }) => {
  const [count, setCount] = useState(initial);

  const add = () => {
    if (count < stock) {
      setCount(count + 1);
    } else {
      alert("No hay más stock de este producto");
    }
  };
  const substract = () => {
    if (count > initial) {
      setCount(count - 1);
    }
  };

  return (
    <Card
      className="mx-auto py-3"
      color="dark"
      inverse
      style={{
        width: "18rem",
      }}
    >
      <CardHeader style={{ textAlign: "center" }}>
        <Button
          onClick={substract}
          className="mx-3 py-2 number"
          style={{
            width: 50,
            backgroundColor: "white",
            color: "black",
            borderRadius: "18px",
            textAlign: "center",
            fontSize: "24px",
            cursor: "pointer",
          }}
        >
          -
        </Button>
        <>{count}</>
        <Button
          onClick={add}
          className="mx-3 py-2 number"
          style={{
            width: 50,
            backgroundColor: "white",
            color: "black",
            borderRadius: "18px",
            textAlign: "center",
            fontSize: "24px",
            cursor: "pointer",
          }}
        >
          +
        </Button>
      </CardHeader>
      <Button className="m-2" onClick={() => onAdd(count)}>
        Agregar{" "}
      </Button>
      <Button outline className="m-2" onClick={onErase}>
        Eliminar
      </Button>
    </Card>
  );
};

export default ItemCount;
