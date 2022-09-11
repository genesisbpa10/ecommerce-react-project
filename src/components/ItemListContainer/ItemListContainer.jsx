import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/config";
import Loader from "../Loader/Loader";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { category } = useParams();

  useEffect(() => {
    const itemsCollection = category
      ? query(collection(db, "products"), where("category", "==", category))
      : collection(db, "products");
    getDocs(itemsCollection)
      .then((snapshot) => {
        const list = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setItems(list);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, [category]);

  return (
    <div
      style={{
        padding: "8vh",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      {loading ? (
        <Loader />
      ) : (
        <>
          <ItemList items={items} />
        </>
      )}
    </div>
  );
};

export default ItemListContainer;
