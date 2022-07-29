import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
// import Carousel from "./components/Carousel";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ItemListContainer  />
            }
          />
          <Route path="/item/:productId" element={<ItemDetailContainer />} />
          {/* <Route path="/carousel" element={<Carousel />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
