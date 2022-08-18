import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { category } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "products");

    getDocs(itemsCollection)
      .then((snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setItems(data);
      })
      .catch((error) => console.log(error))
      .finally(setLoading(false));
  }, []);

  useEffect(() => {
    if (category) {
      const db = getFirestore();
      const itemsCollectionQuery = query(
        collection(db, "products"),
        where("category", "==", category)
      );

      getDocs(itemsCollectionQuery)
        .then((snapshot) => {
          const data = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setItems(data);
        })
        .catch((error) => console.log(error))
        .finally(setLoading(false));
    }
  }, [category]);

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
          <ItemList items={items} />
        </>
      )}
    </div>
  );
};

export default ItemListContainer;
