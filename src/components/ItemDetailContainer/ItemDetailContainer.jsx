import ItemDetail from "../ItemDetail/ItemDetail";
import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import {products} from "../../mock/FakeApi";

export const ItemDetailContainer = () => {

    const [productDetail, setProductDetail] = useState({});
    const {id} = useParams();

    useEffect(() => {
        const getProduct = new Promise(resolve => {
            setTimeout(() => {
                resolve(products);
            }, 2000)
        });
        getProduct.then(res => setProductDetail(res.find(producto => producto.id === (id))));
    },[id]);

    return (
        <ItemDetail productDetail={productDetail}/>
    );
}

export default ItemDetailContainer;

