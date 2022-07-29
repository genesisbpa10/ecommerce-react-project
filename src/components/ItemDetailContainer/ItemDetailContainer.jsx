import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getItem } from "../../mock/FakeApi";
import {useParams} from "react-router-dom";

const ItemDetailContainer = () => {
  const {productId} = useParams()
  const [itemId, setItemId] = useState();
  const [loading, setLoading] = useState(true);
  const [productDetail, setProductDetail] = useState();


  useEffect(() => {
    getItem(productId)
      .then((product) => {
        setProductDetail(product);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [productId]);

  return (
    <>{loading ? "Cargando..." : <ItemDetail productDetail={productDetail} />}
    </>
  );
};

export default ItemDetailContainer;
