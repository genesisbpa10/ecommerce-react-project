import { Link } from "react-router-dom";
import React from "react";

const About = () => {
  return (
    
      <div className="container py-4 my-5">
        <div className="row">
          <div className="col md-6 ">
            <h1>Sobre nosotros</h1>
            <h3>La marca</h3>
            <p>
              Tzure Bags es un emprendimiento de riñoneras hechas a mano,
              personalizadas y cruelty free. Al encargarnos tanto de la atención
              al cliente como de la producción de las riñoneras, buscamos
              involucrar lo más posible a nuestros clientes para desarrollar un
              producto 100% personalizado, hecho a la medida de cada uno y que
              pueda satisfacer sus necesidades.
            </p>
            <h3>Creadores</h3>
            <p>
              Somos Judith & Iara, una dupla de madre e hija que a raiz de
              diversas situaciones que nos lleva la vida, decidimos emprender
              juntas. ¡Y acá estamos! Judith, madre, es quien se encarga de la
              elaboración de todas las riñoneras, quien se da maña con todo y
              llega a resultados increíbles! Mientras que Iara, es encargada de administrar las redes y hacer lucir aún
              más las riños hermosas que hace mamá. Esto es un poco de la
              historia que hay detras de TZURE BAGS...
            </p>
            <h3>Misión</h3>
            <p>
              Proveer productos personalizados, originales, cómodos y que cuiden
              al medio ambiente.{" "}
            </p>
            <h3>Visión</h3>
            <p>
              Ampliar la gama de productos para que las personas puedan tener un
              estilo único y original, expandir los puntos de producción para
              que el negocio pueda llegar a más clientes y formar una gran
              comunidad que comparta sus valores.{" "}
            </p>

            <Link to="/contacto" className="btn btn-outline-dark px-3">
              Contáctame
            </Link>
          </div>
        </div>
      </div>
    
  );
};

export default About;
