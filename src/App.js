import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import About from "./views/About";
import Contacto from "./views/Contacto.js";
import Faqs from "./views/Faqs.js";
import Cart from "./components/Cart/Cart";
import CartProvider from "./context/CartContext";
import { initializeApp } from "firebase/app";
import { doc, getDoc,  getFirestore } from "firebase/firestore";

function App() {
//   const [value, setValue] = useState()
// useEffect(() => {
//   const db = getFirestore()
//   const sheineMomeRef = doc(db, "items", "JGAVCqVns3qnrYcuqxOR")
//   getDoc(sheineMomeRef)
//   .then((snapshot) => {
//       if(snapshot.exists()){
//         const data ={
//           id: snapshot.id,
//           ...snapshot.data()      
//           }
//           console.log(data)
//           setValue(data)
//         }
//   })
//   .catch((error) => console.error(error))
// }, [])

  return (
    <>
     <CartProvider>
      <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/about" element={<About />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/category/:category" element={<ItemListContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<ItemListContainer />} />
        </Routes>
      </CartProvider>
    </>
  );
}

export default App;
