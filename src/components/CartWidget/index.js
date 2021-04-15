import React, { useContext } from "react";
import {CartContext} from '../../context/cartContext';
import { NavLink } from "react-router-dom";

export default function CartWidget() {

    const {cantidadTotal} = useContext(CartContext);
    //console.log(cantidadTotal)
    const CarritoVacio = () => {
        return(
        <i className="fas fa-shopping-cart"></i>
        )
    }

    const CarritoLleno = () => {
        return(
        <NavLink to="/cart">
            <i className="fas fa-shopping-cart text-danger font-size-large">({cantidadTotal})</i>
        </NavLink>
        )
    }

    return (
        <>
        {cantidadTotal === 0 ? CarritoVacio() : CarritoLleno() }
        </>
    );
}