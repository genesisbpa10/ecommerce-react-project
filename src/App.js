import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import About from "./views/About";
import Contacto from "./views/Contacto.js";
import Faqs from "./views/Faqs.js";

function App() {
  return (
    <>
      <NavBar />
      
        <Routes>
          <Route path="/" element ={<ItemListContainer/>}/>
          <Route path="/about" element={<About />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/category/:category" element={<ItemListContainer />} />
          <Route path="*" element={<ItemListContainer />} />
        </Routes>
     
    </>
  );
}

export default App;
