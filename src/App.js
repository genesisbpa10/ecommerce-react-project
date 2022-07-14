import React from "react";
import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

function App() {
  let greetingsText="Hola, estamos en proceso de construccion... ¡Vuelva pronto!"

  return (
    <>
      <NavBar />
      <ItemListContainer greetings={greetingsText} />
    </>
  );
}

export default App;
