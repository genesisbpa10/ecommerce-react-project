import React from "react";
import "./ItemCount.css";
import { Button } from "reactstrap";
import { Badge } from "@mui/material";
const ItemCount = ({ initial, onAdd, stock, count, setCount}) => {

  const add = () => {
    if (count < stock) {
      setCount(count + 1)
      console.log(count);
    } 
  };
  const substract = () => {
    if (count > initial) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <div className="m-auto">{`Cantidad a agregar: ${count}`}</div>
      <div >
                {count === stock && <Badge pill bg="primary">Stock disponible del producto</Badge>}
                {stock === 0 && <Badge pill bg="danger">Este producto se encuentra agotado</Badge>}
            </div>
      <div style={{ textAlign: "center", display: "block" }}>
        <Button
          className=" p-auto m-3"
          style={{ width: "3", borderRadius: "20px" }}
          onClick={add}
        >
          +
        </Button>
        <Button
          className=" p-auto m-3"
          style={{ width: "3", borderRadius: "20px" }}
          onClick={substract}
        >
          -
        </Button>
      </div>
      <div>
      </div>
      <div style={{ textAlign: "center" }}>
        <Button onClick={() => onAdd(count)}>Agregar </Button>
      </div>
    </>
  );
};

export default ItemCount;
