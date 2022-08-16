import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { data } from "../../mock/FakeApi";
import ItemList from "../ItemList/ItemList";
// import { collection, getDocs,  getFirestore } from "firebase/firestore";


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



// const ItemListContainer = () => {
//   const [productList, setProductList] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const {category} = useParams();
// const [items, setItems] = useState([])
// useEffect(() => {
//   const db= getFirestore()
//   const itemsCollection = collection(db, "items")

//   getDocs(itemsCollection)
//   .then((snapshot) => {
//     const data =snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}))
//     setItems(data)
//     console.log(data);
   
//   })
//   .catch((error) => console.log(error))
// }, [])
