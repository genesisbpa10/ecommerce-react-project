import { Link } from "react-router-dom";
import React from "react";

const About = () => {
  return (
    <div>
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col md-6">
            <h1>Sobre nosotros</h1>
            <p></p>
            <Link to="/contact" className="btn btn-outline-dark px-3">
              Contáctame
            </Link>
          </div>
          <div className="col-m-6 d-flex justify-content-center">
            <img src="#" alt="About" height="400px" width="400px" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
