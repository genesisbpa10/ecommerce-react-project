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
      <div  style={{textAlign:"center", display: "block" }}>
        <Button className="m-1" onClick={add}>+</Button>
        <Button className="m-1"
          style={{ display: "inline-block", textAlign: "end" }}
          onClick={substract}
          >
          -
        </Button>
      </div>
      <div style={{textAlign:"center"}}>
        <Button  onClick={() => onAdd(count)}>Agregar </Button>
      </div>
    
      </>
  );
};

export default ItemCount;
