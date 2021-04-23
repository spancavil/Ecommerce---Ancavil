import React from 'react';
import {NavLink} from 'react-router-dom';

const ItemNotFound = () => {
    return (
        <div>
            <div className="py-3 text-center font-italic">
                    <h5>Item no encontrado</h5>
                </div>
                <div className= "text-center">
                    <NavLink to = "/">
                        <button className = "btnCompra justify-content-center">Back to home</button>
                    </NavLink>
                </div>
        </div>
    )
}

export default ItemNotFound
