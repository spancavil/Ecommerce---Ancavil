import React, { useEffect, useState} from 'react';
import ItemList from './ItemList';
//import ConsumerApi from './ConsumerApi';
import Loading from './Loading';
import Items from '../assets/Items';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => { //Hacemos un ItemListContainer utilizando una función flecha

    const {categoriaProducto}= useParams() //obtenemos la categoría (en caso de que haya categoría, sino es undefined)

    const [items, setItems] = useState([]); //Necesitamos que los item se alojen en un estado
    //Si los declaramos como constantes fuera del estado, sólo dura la ejecución del bloque y luego se borran, por eso
    //es pertinente ponerlo en un estado.

    useEffect (()=>{ //Este efecto se ejecutará cuando se monte el componente porque termina con []

        const renderiza = new Promise ((accept, reject)=>{ //Se ejecuta la promesa apenas se monte el componente.
            setTimeout(()=>{ //El timeout simula un servidor
            //Primero va el setTimeout y luego el accept.
                accept(Items) // Devolvemos items al momento de accept la promise
    
            },2000);
        })

        renderiza.then( //Una vez que tengo el resultado de la promise (cuando termina el timeOut) setteo los items con el resultado
        // del accept
        (resultado)=>{
            //console.table(resultado[0]);
            setItems(resultado); //al settear los items, se re-renderiza la página
            //console.table(resultado);
        })
    }, []);
    
    
    //Si no hay categoría, se renderiza todos los items
    const renderList = () => {
        return(
            <ItemList items = {items}></ItemList>
        )
    }

    //Si hay una categoría filtra primero los items y luego los renderiza a través de ItemList
    const renderListCat = () => {
        let productosFiltrados = items.filter(elemento => elemento.categoria === categoriaProducto)
        return(
            <ItemList items = {productosFiltrados}></ItemList>
        )
    }

    //Esto se ejecuta segundo cuando se cargan los items. En categoria producto se toma por parámetro de navegación la categoría correspondiente
    const render = () => {
        return(
        <div>
        {categoriaProducto === undefined ? 
            renderList () :
            renderListCat ()
        }
        </div>
        );}
    
    //ESTO SE EJECUTA PRIMERO DE TODO
    return (
        <>
        {items.length ===0 ? <Loading></Loading>: render()}
        </>
    )

};

export default ItemListContainer;