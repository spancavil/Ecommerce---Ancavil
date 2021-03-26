import React from 'react';
import { useParams } from 'react-router';

const Item = (item) => {
    const {productoId} = useParams(); //Obtenemos por parámetro (de navegación) el id del producto.
    const posicion = parseInt (productoId - 1); //Definimos la posición del array de items, que corresponderá al item que le haremos el render.
    
    const render = () => {
        console.log(item.items[posicion]);
        return(
        <div className="card">
            <h4 className = "card-title">Detalle</h4>
            <img src={item.items[posicion].src} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{item.items[posicion].description}</h5>
                <h5 className="card-title">Precio: ${item.items[posicion].precio}.</h5>
            </div>
        </div>)
    }

    return( //Solo renderiza si hay datos, sino devuelve null
        <div>
         {(item.items===undefined)? null : render() }
        </div>
    );
}


export default Item;