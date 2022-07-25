import React from "react";
import "./App.css";
import Carousel from "./components/Carousel";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <>
      <div
        style={{
          display: "block",
          background:"aquamarine",
          textAlign: "center",
          cursor: "pointer",
        }}
      >
        3 Cuotas sin interés
      </div>
      <NavBar />
      <Carousel />
      <ItemListContainer greetings="Hola, estamos trabajando en el ItemList y el Item..." />
    </>
  );
}

export default App;
