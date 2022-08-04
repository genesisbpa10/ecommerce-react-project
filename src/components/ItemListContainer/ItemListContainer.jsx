import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { data } from "../../mock/FakeApi";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  const {category} = useParams();

  useEffect(() => {
    data 
    .then((resp) => {
      if(category){
        setProductList(resp.filter((product) => product.category === category))
      }else{
        setProductList(resp)
      }
      })
      .catch((error) => console.log(error))
      .finally(setLoading(false))
  }, [category])

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      
      {loading ? (
        <h1>Cargando...</h1>
      ) : (
        <>
          <ItemList productList={productList} />
        </>
      )}
    </div>
  );
};

export default ItemListContainer;