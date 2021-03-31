import React, { useState } from 'react'
import ItemCount from '../ItemCount';
import {Link} from 'react-router-dom'

const ItemDetail = ({item}) => {
    
    const [count, setCount] = useState(0);

    const addHandler = (contador)=>{
        console.log('se agrego un item', contador)
        setCount(contador)
    }
    
    console.log(count);
    return (

        <div className="card card-detail" >
                <div className="card-title pt-5"><h2>Detalle</h2></div>
                <img src={item.src} className="card-img-top" alt="..."/>
                
                <div className="card-body">
                     <h5 className="card-title py-2">{item.description}</h5>
                     <h5 className="card-title py-2">Precio: ${item.precio}.-</h5>
                     { count === 0 ?
                    <ItemCount stock ={item.stock} initial = {item.initial} onAdd={addHandler}></ItemCount>
                        :
                        <>
                        <h5 className="card-title py-2">Cantidad: {count}</h5>
                        <Link to='/cart'>
                            <button className='btn btn btn-outline-primary btn-sm'>Terminar mi compra</button>
                        </Link> 
                        </>
                    }
                </div>
        </div>
    )
}

export default ItemDetail
