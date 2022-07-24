import React, { useState } from "react";
import "./ItemCount.css";
import { Button } from "reactstrap";

const ItemCount = ({ initial, onAdd, onErase, stock }) => {
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
    
    <>
        <div className="m-auto" style={{ display: "block", width: "8vh" }}>
          {count}
      </div>
      <div style={{ display: "block" }}>
        <Button onClick={add}>+</Button>
        <Button
          style={{ display: "inline-block", textAlign: "end" }}
          onClick={substract}
          >
          -
        </Button>
      </div>
      <div>
        <Button onClick={() => onAdd(count)}>Agregar </Button>
        <Button outline onClick={onErase}>
          Eliminar
        </Button>
      </div>
    
      </>
  );
};

export default ItemCount;
