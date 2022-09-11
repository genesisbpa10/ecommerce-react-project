import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./ItemCart.css"
import { MdDeleteForever} from "react-icons/md";


const ItemCart = ({ item }) => {
  const { removeFromCart } = useContext(CartContext);
  return (
    <div className='container-cart'>

    <div className="name-product" >
      
      <p >{item.name}</p>
    </div>
    <div>
      
      <p>{item.quantity}</p>
    </div>
    <div>
      
      <p>${item.price}</p>
    </div>
    <div>
      
      <p>${item.quantity * item.price}</p>
    </div>
    <div>
      <MdDeleteForever
      size="3em"
        className='delete-icon'
        onClick={() => removeFromCart(item.id)}
      ></MdDeleteForever>
    </div>
   
  </div>
  );
};
export default ItemCart;

    // <Card
    //   key={item.id}
    //   className="my-2 py-3 display-flex flex-wrap space-between"
    // >
    //   <CardBody style={{ width: "50%" }}>
    //     <CardImg
    //       alt="Imagen del producto en el carrito"
    //       src={item.principalImg}
    //     />
    //   </CardBody>
    //   <CardBody style={{ width: "50%" }}>
    //     <CardTitle>
    //       <h1>{item.name}</h1>
    //     </CardTitle>
    //     <CardText>Precio: ${item.price}</CardText>
    //     <CardText>Cantidad: {item.quantity}</CardText>
    //     <CardText>Subtotal: ${item.price * item.quantity}</CardText>
    //     <button
    //       className="btn btn-outline-dark "
    //       onClick={() => removeFromCart(item.id)}
    //     >
    //       Borrar
    //     </button>
    //   </CardBody>
    // </Card>