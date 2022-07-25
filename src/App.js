import React from "react";
import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greetings="Hola, estamos trabajando en el ItemList y el Item..." />
    </>
  );
}

export default App;
