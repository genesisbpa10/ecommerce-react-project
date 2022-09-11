import { Button } from "bootstrap";
import React from "react";
import { Card, Col, Row, CardText, CardImg } from "reactstrap";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineMail, AiOutlineWhatsApp } from "react-icons/ai";

const Contacto = () => {
  return (
    <div>
      <div className="container py-4 my-5">
        <div className="row">
          <div className="col md-6">
            <h1>Contacto</h1>
            <p>
              Podés contactarnos a través de nuestras redes sociales, te
              responderemos lo más pronto posible.
            </p>
            <Row>
              <Col sm="4">
                <Card body>
                  <a
                   style={{width:"10%"}}
                   className="mx-auto"
                    target="_blank"
                    href="https://www.gmail.com/"
                  >
                    <AiOutlineMail style={{ color: "black", textDecorationLine: "none" }}/>
                  </a>
                  <CardText>Envianos mail.</CardText>
                </Card>
              </Col>
              <Col sm="4">
                <Card body>
                  <a
                   style={{width:"10%"}}
                   className="mx-auto"
                    target="_blank"
                    href="https://www.whatsapp.com/"
                  >
                    <AiOutlineWhatsApp style={{ color: "black", textDecorationLine: "none" }} />
                  </a>
                  <CardText>
                   Contactanos vía Whatsapp
                  </CardText>
                </Card>
              </Col>
              <Col sm="4">
                <Card body>
                  <a
                   style={{width:"10%"}}
                   className="mx-auto"
                    target="_blank"
                    href="https://www.instagram.com/tzure.bags/"
                  >
                    <BsInstagram style={{ color: "black", textDecorationLine: "none", size:"2em" }} />
                  </a>
                  <CardText>
                    Seguinos en Instagram
                  </CardText>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
