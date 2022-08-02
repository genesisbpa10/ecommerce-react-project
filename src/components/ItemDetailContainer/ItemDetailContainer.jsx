import ItemDetail from "../ItemDetail/ItemDetail";
import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import {getProduct} from "../../mock/FakeApi";

export const ItemDetailContainer = () => {

    const [productDetail, setProductDetail] = useState({});
    const {id} = useParams();

    useEffect(() => {
        getProduct.then(response => setProductDetail(response.find(producto => producto.id === (id))));
    },[id])

    return (
        <ItemDetail productDetail={productDetail}/>
    );
}

export default ItemDetailContainer;

