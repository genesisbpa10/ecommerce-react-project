import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { db } from "../firebase/config";
import { Form, Row, Col, FormGroup, Label, Input, Button } from "reactstrap";
import Final from "./Final";

const CheckOut = () => {
  const [comprador, setComprador] = useState({});
  const [orderId, setOrderId] = useState("");
  const { cart, totalPrice, clearCart } = useContext(CartContext);
  const [sameMail, setSameMail] = useState(false)

  const datosComprador = (e) => {
    setComprador({
      ...comprador,
      [e.target.name]: e.target.value,
      [e.target.lastname]: e.target.value,
      [e.target.telefono]: e.target.value,
      [e.target.email]: e.target.value,
    });
  };
  const validateEmail = (event) =>{
    if (event.target.value === comprador.email){
        setSameMail(true)
    }else setSameMail(false)
}
  const finalizarCompra = (e) => {
    e.preventDefault();
    const ventasCollection = collection(db, "orders");
    addDoc(ventasCollection, {
      comprador,
      products: cart,
      total: totalPrice(),
      date: serverTimestamp(),
    })
      .then((response) => {
        setOrderId(response.id);
        if (response) {
          clearCart();
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      {!orderId ? (
        <div className="container mx-auto py-5 my-5" style={{width:"60vh",border:"solid black 2px", borderRadius:"15px"}}>
          
        <Form
          onSubmit={finalizarCompra}
          style={{width:"100%"}}
          className="container mx-auto px-auto"
        >
          <h3>¡Completá el formulario!</h3>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="exampleName">Nombre</Label>
                <Input
                  required
                  id="example-name"
                  placeholder="Nombre "
                  name="name"
                  onChange={datosComprador}
                  />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="exampleLastname">Apellido</Label>
                <Input
                required
                  id="example-lastname"
                  type="text"
                  placeholder="Apellido"
                  name="lastname"
                  onChange={datosComprador}
                  />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="exampleNumber">Número de Teléfono</Label>
                <Input
                  required
                  id="example-number"
                  type="number"
                  placeholder="Número de teléfono"
                  name="telefono"
                  onChange={datosComprador}
                  />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="examplePassword">Contraseña</Label>
                <Input
                  required
                  id="example-password"
                  type="password"
                  placeholder="**********"
                  name="password"
                  onChange={datosComprador}
                  />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="example-email">Mail</Label>
                <Input
                  required
                  id="example-mail"
                  type="email"
                  placeholder="tumail@gmail.com"
                  name="email"
                  onChange={datosComprador}
                  />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="exampleEmailValidation">Confirmá tu mail</Label>
                <Input
                  required
                  id="example-email-validation"
                  type="email"
                  placeholder="tumail@gmail.com"
                  name="email-validation"
                  onChange={validateEmail}
                  />
                 { !sameMail ? 
                        <div >Los emails no coiniciden. Intente de nuevo.</div>
                        :<div > Los emails coinciden</div>}
              </FormGroup>
            </Col>
          </Row>
          <Button type="submit" disabled={!comprador.email}>Finalizar compra</Button>
        </Form>
      </div>
      ) : (
        <Final orderId={orderId} />
      )}
    </>
  );
};

export default CheckOut;
