import ItemDetail from "../ItemDetail/ItemDetail";
import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import {products} from "../../mock/FakeApi";

export const ItemDetailContainer = () => {

    const [productDetail, setProductDetail] = useState({});
    const [loading, setLoading] = useState(true)    
    const {id} = useParams();

    useEffect(() => {
        const getProduct = new Promise(resolve => {
            setTimeout(() => {
                resolve(products);
                setLoading(false)
            }, 2000)
        });
        getProduct.then(response => setProductDetail(response.find(producto => producto.id === (id))));
    },[id]);

    // useEffect(() => {
    //     const getProduct = new Promise(resolve => {
    //         setTimeout(() => {
    //             resolve(products);
    //         }, 2000)
    //     });
    //     getProduct.then(response => setProductDetail(response.find(producto => producto.categoryId === (categoryId))));
    // },[categoryId]);

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

