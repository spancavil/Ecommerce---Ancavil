import React from "react";
import CartWidget from "./CartWidget"
import logo from "../img/logo.jpg";

export const NavBar = () => {  //Declaración de una constante en JSX (un extensión del lenguaje JavaScript) con una función flecha
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">

      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <a class="navbar-brand" href= "/#">
          <img src={logo} width="50" height="50" class="d-inline-block" alt=""/>
          El gatito azul
        </a>
        <div class="navbar-nav">
          <a class="nav-item nav-link active" href='/#'>
            Home
          </a>
          <a class="nav-item nav-link" href='/#'>
            Modelos
          </a>
          <a class="nav-item nav-link" href='/#'>
            Nosotros
          </a>
          <a class="nav-item nav-link" href='/#'>
            Contacto
          </a>
        </div>
      </div>
      <CartWidget />
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    </nav>
);
};