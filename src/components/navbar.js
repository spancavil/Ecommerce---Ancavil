import React from "react";
import CartWidget from "./CartWidget"
import logo from "../img/logo.jpg";

export const NavBar = () => {  //Declaración de una constante en JSX (un extensión del lenguaje JavaScript) con una función flecha
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">

      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <a className="navbar-brand" href= "/#">
          <img src={logo} width="50" height="50" className="d-inline-block" alt=""/>
          El gatito azul
        </a>
        <div className="navbar-nav">
          <a className="nav-item nav-link active" href='/#'>
            Home
          </a>
          <a className="nav-item nav-link" href='/#'>
            Modelos
          </a>
          <a className="nav-item nav-link" href='/#'>
            Nosotros
          </a>
          <a className="nav-item nav-link" href='/#'>
            Contacto
          </a>
        </div>
      </div>
      <CartWidget />
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    </nav>
);
};