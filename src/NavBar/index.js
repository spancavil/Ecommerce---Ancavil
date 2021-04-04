import React from "react";
import CartWidget from "../components/CartWidget"
import logo from "../img/logo.jpg";
import { NavLink } from "react-router-dom";
import "./styles.css"

export const NavBar = () => {  //Declaración de una constante en JSX (un extensión del lenguaje JavaScript) con una función flecha
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">

          <NavLink to="/" activeClassName="current" className="nav-item nav-link"> 
            Modelos
          </NavLink>

          <NavLink to="/categories/simple" activeClassName="current" className="nav-item nav-link"> 
            Modelo Simple
          </NavLink>

          <NavLink to = "/categories/double" activeClassName="current" className="nav-item nav-link">
            Modelo Doble
          </NavLink>

          <NavLink to="/nosotros" activeClassName="current" className="nav-item nav-link">
            Nosotros
          </NavLink>

          <NavLink to="/gatitosfelices" activeClassName="current" className="nav-item nav-link">
            Gatitos felices
          </NavLink>
          
          <NavLink to = "/contacto" activeClassName="current" className="nav-item nav-link">
          Contacto
          </NavLink>
        </div>
      </div>

      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      
      <NavLink to="/"className="navbar-brand"> 
          <img src={logo} width="50" height="50" className="d-inline-block" alt="" id="imagen"/>
          El gatito azul
      </NavLink>

      <CartWidget/>
    </nav>
);
};