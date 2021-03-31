import React from 'react'
import ItemCount from '../ItemCount';

const ItemDetail = ({item}) => {
    return (
        <div className="card card-detail" >
                <div className="card-title pt-5"><h2>Detalle</h2></div>
                <img src={item.src} className="card-img-top" alt="..."/>
                
                <div className="card-body">
                     <h5 className="card-title py-2">{item.description}</h5>
                     <h5 className="card-title py-2">Precio: ${item.precio}.-</h5>
                    <ItemCount stock ={item.stock} initial = {item.initial}></ItemCount>
                </div>
        </div>
    )
}

export default ItemDetail
