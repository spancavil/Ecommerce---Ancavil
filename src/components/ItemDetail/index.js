import React, { useContext, useState } from 'react';
import ItemCount from '../ItemCount';
import {Link} from 'react-router-dom';
import {CartContext} from '../../context/cartContext'
import ModalItemAgregado from '../ModalItemAgregado';

const ItemDetail = ({item}) => {
    
    const [count, setCount] = useState(0);
    const {addItem} = useContext(CartContext); //Usamos la función addItem y el cart del contexto global generado en /context/cartContext

    const addHandler = (contador)=>{
        //console.log('se agrego un item', contador)
        addItem(item,contador); //Le pasamos item, y contador a la función addItem del contexto global  
        setCount(contador)
    }
    
    //console.log(count);
    return (

        <div className="card card-detail text-center" >
                <div className="card-title pt-5"><h2>Detalle</h2></div>
                <img src={item.src} className="card-img-top" alt="..."/>
                
                <div className="card-body">
                     <h5 className="card-title py-2">{item.description}</h5>
                     <h5 className="card-title py-2">Precio: ${item.precio}.-</h5>
                     { count === 0 ?
                    <ItemCount stock ={item.stock} initial = {item.initial} onAdd={addHandler}></ItemCount>
                        :
                        <>
                        <ModalItemAgregado/>
                        <h5 className="card-title py-2">Cantidad agregada: {count}</h5>
                        <Link to='/cart'>
                            <button className='btn btn btn-outline-danger'>Ir al carrito</button>
                        </Link> 
                        </>
                    }
                </div>
        </div>
    )
}

export default ItemDetail
