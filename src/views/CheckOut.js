import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { db } from "../firebase/config";
import { useNavigate } from "react-router";

const CheckOut = () => {
  const [comprador, setComprador] = useState({});
  const [orderId, setOrderId] = useState("");
  const { cart, totalPrice, clearCart } = useContext(CartContext);
  const navigate = useNavigate()

  const datosComprador = (e) => {
    setComprador({
      ...comprador,
      [e.target.name]: e.target.value,
      [e.target.lastname]: e.target.value,
      [e.target.telefono]: e.target.value,
      [e.target.email]: e.target.value,
    });
  }
  const finalizarCompra = (e) => {
    e.preventDefault()
    const ventasCollection = collection(db, "orders")
    addDoc(ventasCollection, {
      comprador,
      products: cart,
      total: totalPrice(),
      date: serverTimestamp(),
    })
    .then ((response) => {
      setOrderId(response.id)
      if (response) {
          clearCart()
      }
  })
  .catch ((error)=> console.log(error))
}

  return (
    <>
      {!orderId ? 
        <div>
          <h2>CheckOut</h2>
          <form onSubmit={finalizarCompra}>
            <input
              type="text"
              placeholder="Nombre "
              name="name"
              onChange={datosComprador}
              />
            <input
              type="text"
              placeholder="Apellido"
              name="lastname"
              onChange={datosComprador}
              />
            <input
              type="number"
              placeholder="Número de teléfono"
              name="telefono"
              onChange={datosComprador}
              />
            <input
              type="email"
              placeholder="tumail@gmail.com"
              name="email"
              onChange={datosComprador}
              />
            <button type="submit">Finalizar compra</button>
          </form>
        </div>
       : 
        <div>
          <h3>¡Gracias por su compra!</h3>
          <h4>Su orden es: {orderId} </h4>
          <button onClick={() => navigate("/")} >Volver</button>
        </div>
      }
    </>
  );
};

export default CheckOut;
