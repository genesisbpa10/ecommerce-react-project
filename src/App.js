import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import About from "./views/About";
import Contacto from "./views/Contacto.js";
import Faqs from "./views/Faqs.js";
import CartProvider from "./context/CartContext";
import AuthProvider from "./context/AuthContext";
import CheckOut from "./views/CheckOut";
import CartContainer from "./components/CartContainer/CartContainer";
import LogIn from "./auth/LogIn";

function App() {
  return (
    <><AuthProvider>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/about" element={<About />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/category/:category" element={<ItemListContainer />} />
          <Route path="/cart" element={<CartContainer />} />
          <Route path="*" element={<ItemListContainer />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/login" element={<LogIn />} />
        </Routes>
      </CartProvider>
    </AuthProvider>
    </>
  );
}

export default App;
