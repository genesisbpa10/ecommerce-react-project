import React from "react";
import {useState} from "react"
import { useAuth} from "../context/AuthContext";


const LogIn = () => {
    const authContext= useAuth()
    console.log(authContext);
  return (
  <>
      <h1> {registered ? "Registrate" : "Iniciar sesión" }</h1>
      <form onSubmit={submitHandler}>
        <label htmlFor="textField"> Nombre</label>
        <input type="text" id="textField"/>

        <label htmlFor="emailField"> Correo</label>
        <input type="mail" id="emailField"/>

        <label htmlFor="passwordField"> Contraseña</label>
        <input type="password" id="passwordField"/>


        <button type="submit" > {registered ? "Crear cuenta" : "Iniciar sesión" }</button>
      </form>
      <button onClick={() => setRegistered(!registered)}>
        {registered ? "Already have an account?" : "¡No tienes cuenta? Registrate gratis"}
      </button>
    </>
  );
};

export default LogIn;
