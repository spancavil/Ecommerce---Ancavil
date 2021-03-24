import React from "react";
import CartWidget from "./CartWidget"
import logo from "../img/logo.jpg";
import { NavLink } from "react-router-dom";

export const NavBar = () => {  //Declaración de una constante en JSX (un extensión del lenguaje JavaScript) con una función flecha
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">

      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <NavLink to="/"className="navbar-brand"> 
          <img src={logo} width="50" height="50" className="d-inline-block" alt=""/>
          El gatito azul
        </NavLink>  
        <div className="navbar-nav">
          <NavLink to="/" activeClassName="current" className="nav-item nav-link"> 
            Home
          </NavLink>
          <NavLink to="/categories/simple" activeClassName="current" className="nav-item nav-link"> 
            Modelo Simple
          </NavLink>
          <NavLink to = "/categories/double" activeClassName="current" className="nav-item nav-link">
            Modelo Doble
          </NavLink>
          <NavLink to = "/contacto" activeClassName="current" className="nav-item nav-link">
          Contacto
          </NavLink>
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