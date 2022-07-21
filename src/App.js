import React from "react";
import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
function App() {

  let greetingsText = "Hola, estamos trabajando en el ItemCount...";
  return (
    <>
      <NavBar />
      <ItemListContainer greetings={greetingsText} />
    </>
  );
}

export default App;
