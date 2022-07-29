import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getItem } from "../../mock/FakeApi";
import {useParams} from "react-router-dom";

const ItemDetailContainer = () => {
  const {productId} = useParams();
  const [loading, setLoading] = useState(true);
  const [productDetail, setProductDetail] = useState();


  useEffect(() => {
    getItem(productId)
      .then((product) => {
        setProductDetail(product);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, [productId]);//no sé si debe quedar como array vacio o [productId] u otra cosa

  return (
    <>{loading ? "Cargando..." : <ItemDetail productDetail={productDetail} />}
    </>
  );
};

export default ItemDetailContainer;
