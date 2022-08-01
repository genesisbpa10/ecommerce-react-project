import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import {products} from "../../mock/FakeApi"

const ItemDetailContainer = () => {
  
  const [loading, setLoading] = useState(true);

  const [productDetail, setProductDetail] = useState({})
  console.log("item", productDetail)

  const {id} =useParams()
  console.log(id);


  const getItem = new Promise((resolve) => {
    setTimeout(() => {
        resolve(products.filter(product => product.id === parseInt(id)));
    })
    }, 2000)
    
    useEffect(() => {
      getItem
      .then((response) => setProductDetail(response))
      .catch((error) => console.log(error))
      .finally(setLoading(false))
    },[id])
    
  return (
    <>
      {loading ? "Cargando..." : <ItemDetail productDetail={productDetail} />}
    </>
  );
} 
export default ItemDetailContainer;



