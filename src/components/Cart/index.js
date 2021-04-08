import React, { useContext } from 'react'
import {CartContext} from '../../context/cartContext';

const Cart = () => {

    const {cart} = useContext(CartContext);
    console.table(cart);
    return (
        <div>
            <p>En construcción ... (ver consola)</p>
        </div>
    )
}

export default Cart
