import React, { useState, useContext } from 'react'
import {CartContext} from '../../context/cartContext';
import { NavLink } from "react-router-dom";
import "./styles.css"

import ModalForm from '../ModalForm';


const Cart = () => {

    const {cart, removeItem} = useContext(CartContext);

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    
    const renderCarritoVacio = () => {
        return (
            <div className = "container text-dark mx-auto">
                <div className="py-3 text-center font-italic">
                    <h5>No hay elementos en el carrito</h5>
                </div>
                <div className= "text-center">
                    <NavLink to = "/">
                        <button className = "btnCompra justify-content-center"> Home </button>
                    </NavLink>
                </div>
            </div>
        )
    }

    const calcularTotal = () => {
        let total = 0;
        for (const elemento of cart) {
            total += elemento.item.precio * elemento.quantity;
        }
        return total;
    }

    const renderCarrito = () =>{
        return(    
            <div className="card shopping-cart">
                <div className="card-header bg-dark text-light text-center">
                    <i className="fa fa-shopping-cart px-3" aria-hidden="true"></i>
                    Mi carrito
                    <div className="clearfix"></div>
                </div>
                <div className="card-body">
    
                    {cart.map(elemento => 
                    <div className="row inline mt-3" key={elemento.item.id}>
                        <div className="col-12 col-sm-12 col-md-4 text-center">
                            <img className="img-responsive" src={elemento.item.src} alt="preview" width="200"/>
                        </div>
                        <div className="col-12 col-sm-12 justify-content-center text-md-left col-md-4 d-flex align-items-center">
                            <h5 className="row">{elemento.item.description}</h5>
                        </div>
                        <div className="col-12 col-sm-12 text-center col-md-4 text-md-right row mx-auto d-flex align-items-center">
                            <div className="col-6 text-right text-md-right align-middle">
                                <h6><strong>Cantidad: {elemento.quantity}</strong></h6>
                            </div>
                            
                            <div className="col-6 text-left text-md-center">
                                <button type="button" onClick={()=>removeItem(elemento.item.id)} className="btn btn-outline-danger btn-xs">
                                    <i className="fa fa-trash" aria-hidden="true">Quitar</i>
                                </button>
                            </div>
                        </div>
                    </div>
                    )}
    
                </div>
                <div className="card-footer">
                    <div className="pull-right m-5">
                        <div className="text-center text-md-right m-3">
                        <h3> 
                            <strong>
                                Total: $<b>{calcularTotal()}.-</b>
                            </strong>
                        </h3>

                        <button className = "btn btn-outline-danger" onClick={handleClickOpen}>
                        Generar Pedido
                        </button>
                        {/*El modal sólo se abrirá cuando se haga click en Open Form*/}
                        <ModalForm open = {open} handleClose = {handleClose} cart = {cart} total ={calcularTotal()}></ModalForm>
                       
                        </div>
                    </div>
                </div>
            </div>)
    }

    return (
        <>
            {cart.length === 0 ? renderCarritoVacio() : renderCarrito()}
        </>  
    )
}

export default Cart
