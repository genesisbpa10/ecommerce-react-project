import React, { useState } from "react";
import "./ItemCount.css";
import { Button } from "reactstrap";

const ItemCount = ({ initial, onAdd, stock }) => {
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
        <div className="m-auto" >
          {count}
      </div>
      <div  style={{textAlign:"center", display: "block" }}>
        <Button className=" p-auto m-3" style={{width:"3" ,borderRadius:"20px"}}  onClick={add}>+</Button>
        <Button className=" p-auto m-3" style={{width:"3" ,borderRadius:"20px"}}  onClick={substract}>-</Button>
      </div>
      <div style={{textAlign:"center"}}>
        <Button  onClick={() => onAdd(count)}>Agregar </Button>
      </div>
    
      </>
  );
};

export default ItemCount;
