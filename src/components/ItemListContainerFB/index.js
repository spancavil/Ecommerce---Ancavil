import React , { useState, useEffect} from 'react';
import { useParams } from 'react-router';
//import Items from '../../assets/Items'; DEPRECATED
import ItemList from '../ItemList';
import Loading from '../Loading';
import {getFirestore} from '../../firebase'

const ItemListContainerFB = () => {

    const {categoriaProducto}= useParams() //obtenemos la categoría (en caso de que haya categoría, sino es undefined)

    const [items, setItems] = useState([]); //Necesitamos que los item se alojen en un estado
    //Si los declaramos como constantes fuera del estado, sólo dura la ejecución del bloque y luego se borran, por eso
    //es pertinente ponerlo en un estado.
    const getItemFilter= (categoriaProducto) => { //Filtramos items según la categoría
        const db = getFirestore();
        const itemsCollection = db.collection('Items');
        //console.log("Filtrado.")
        return itemsCollection
                        .where('categoria', '==', categoriaProducto)
                        .get();
    }

    const getItem = () => { //Si no hay categoría, traemos toda la db
        const db = getFirestore();
        const itemsCollection = db.collection('Items');
        //console.log ("No Filter.");
        return itemsCollection.get();
    }

    const setItemsFn = (response) => {
            if (response.size>0){
                const itemsMapped = response.docs.map(doc => { //Lo trae desordenado al array
                    return {id:doc.id,  ...doc.data()}
                })

                itemsMapped.sort(function (a,b){ //Ordenamos el array según el nombre del modelo
                    if (a.description > b.description){
                        return 1
                    }
                    if (a.description < b.description){
                        return -1
                    }
                    else return 0;
                })
                
                setItems(itemsMapped)
            }
    }

    useEffect (()=>{
        if (categoriaProducto !== undefined){ //Primero vemos si hay o no categoriaProducto
            getItemFilter(categoriaProducto) //Cargamos la db filtrando categoria
                .then((res) => setItemsFn(res))
        } else {
            getItem() //Cargo la db entera
                .then((res)=> setItemsFn(res))
        }
    }, [categoriaProducto]);

    //Esto se ejecuta segundo cuando se cargan los items.
    const render = () => {
        return(
            <ItemList items = {items}></ItemList>
        )
    }

    //ESTO SE EJECUTA PRIMERO DE TODO
    return (
        <>
            {items.length === 0 ? <Loading></Loading>: render()}
        </>
    )
}

export default ItemListContainerFB;