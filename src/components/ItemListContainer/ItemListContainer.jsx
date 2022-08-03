import React, { useEffect, useState } from "react";
import { data } from "../../mock/FakeApi";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    data
      .then((resp) => setProductList(resp))
      .catch((error) => console.error(error))
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
      
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <>
          <ItemList productList={productList} />
        </>
      )}
    </div>
  );
};

export default ItemListContainer;