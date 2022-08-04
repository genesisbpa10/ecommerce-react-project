import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../mock/FakeApi";
import ItemList from "./ItemList/ItemList";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const {category} = useParams();
  useEffectt(() => {
    getProduct
    .then((resp) => {
        if(category){
            setCategories(resp.find((product) => product.category === category))
        }else{
            setCategories(resp)
        }
    })
   .catch((err) => console.log(err))
  }, [category])
  
  return(
    <>
        <ItemList productList={category}/>
    </>
  )
};

export default Categories;
