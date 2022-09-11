import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader/Loader";

const Final = ({ orderId }) => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    setLoading(false);
  }, [orderId]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="container py-5 my-5">
          <h3>¡Gracias por su compra!</h3>
          <h4>Su orden es: {orderId} </h4>
          <button
            className="btn btn-outline-dark px-3"
            onClick={() => navigate("/")}
          >
            Volver
          </button>
        </div>
      )}
    </>
  );
};

export default Final;
