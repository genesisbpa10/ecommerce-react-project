import React from "react";
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
import CheckOut from "./views/CheckOut";

function App() {
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
          <Route path="/checkout" element={<CheckOut />} />
        </Routes>
      </CartProvider>
    </>
  );
}

export default App;
