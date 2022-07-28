import React, { useEffect, useState } from "react";
import { data } from "../../mock/FakeApi";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({ greetings }) => {
  const [productList, setProductList] = useState([]);
  const [mensaje, setMensaje] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    data
      .then((resp) => setProductList(resp))
      .catch(() => setMensaje("Hubo un error intente más tarde"))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div
      className="itemList"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      {mensaje && <p>{mensaje}</p>}
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <>
          <h1>{greetings}</h1>
          <ItemList productList={productList} />
        </>
      )}
    </div>
  );
};

export default ItemListContainer;
