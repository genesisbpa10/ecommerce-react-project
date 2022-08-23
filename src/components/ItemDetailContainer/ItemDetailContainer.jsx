import ItemDetail from "../ItemDetail/ItemDetail";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc} from "firebase/firestore";
import { db } from "../../firebase/config";

export const ItemDetailContainer = () => {
    const [productDetail, setProductDetail] = useState({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    
    useEffect(() => {
    const docData = doc(db, "products", id);
    getDoc(docData)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const data = {
            id: snapshot.id,
            ...snapshot.data()
          }
          setProductDetail(data);
          console.log(data); 
        }
      })
      .catch((error) => console.error(error))
       .finally(setLoading(false))
  }, []);
  useEffect(() => {
    
  }, [id])
  
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
        <ItemDetail productDetail={productDetail} />
      )}
    </div>
  );
};

export default ItemDetailContainer;
