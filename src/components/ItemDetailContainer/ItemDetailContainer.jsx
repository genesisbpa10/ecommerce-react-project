import ItemDetail from "../ItemDetail/ItemDetail";
import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import {getProduct} from "../../mock/FakeApi";

export const ItemDetailContainer = () => {

    const [productDetail, setProductDetail] = useState({});
    const [loading, setLoading] = useState(true)    
    const { id } = useParams();

    useEffect(() => {
        getProduct(id)
        .then((resp) => {
                setProductDetail(resp)
                setLoading(false)
        })
        .catch((e) => console.log(e))
    },[id]);

    return (
        <div
        className="itemList"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
        }}>
        {loading ? (<p>Cargando...</p>) : (
        <ItemDetail productDetail={productDetail}/>
        )}
        </div>
    );
}

export default ItemDetailContainer;

