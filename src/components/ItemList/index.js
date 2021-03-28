import React from 'react';
import { useParams } from 'react-router';
import ItemCount from '../ItemCount';
import {NavLink} from 'react-router-dom';

const ItemList = ({items}) => {

    const {categoriaProducto} = useParams ()


    const render = ()=> {
        return (
        <div  className="row row-cols-1 row-cols-lg-2 g-4">
                {items.map( elemento =>
                <div className= "col d-flex justify-content-center my-3" key={elemento.id}>
                    <div className="card carditas"  style={{width: "28rem"}}>
                        <NavLink to={`/detail/${elemento.id}`}>
                            <img src={elemento.src} className="card-img-top" alt="..."/>
                        </NavLink>
                        <div className="card-body">
                            <h5 className="card-title">{elemento.description}</h5>
                            <ItemCount stock ={elemento.stock} initial = {elemento.initial}></ItemCount>
                        </div>
                    </div>
                </div>
                )}
        </div>
        ) 
    }
    
    return(
    <>
    { 
    (categoriaProducto === undefined) ? 
        render() :
        (
        (items = (items.filter(elemento => elemento.categoria === categoriaProducto))), //Con COMAS SEPARAMOS cada sentencia en un operador ternario
        render()
        )
    }
    </>
    )
}

export default ItemList;