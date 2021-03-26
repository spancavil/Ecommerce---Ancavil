import React from 'react';
import { useParams } from 'react-router';
import ItemCount from '../ItemCount';
import {NavLink} from 'react-router-dom';

const ItemList = ({items}) => {

    const {categoriaProducto} = useParams ()

    console.log(categoriaProducto); //Recibe simple o double, según la selección del NavBar. Sino undef

    const render = ()=> {
        console.log("Hola!");
        console.log(items);
        return (
        <div  className="row row-cols-1 row-cols-md-2 justify-content-center">
                {items.map( elemento =>
                    <div className="card" key={elemento.id} style={{width: "40rem"}}>
                        <NavLink to={`/detail/${elemento.id}`}>
                            <img src={elemento.src} className="card-img-top" alt="..."/>
                        </NavLink>
                        <div className="card-body">
                            <h5 className="card-title">{elemento.description}</h5>
                            <ItemCount stock ={elemento.stock} initial = {elemento.initial}></ItemCount>
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