import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import ConsumerApi from './ConsumerApi';
import ItemDetailContainer from './ItemDetailContainer';

const ItemListContainer = () => { //Hacemos un ItemListContainer utilizando una función flecha

    const [items, setItems] = useState([]); //Necesitamos que los item se alojen en un estado
    //Si los declaramos como constantes fuera del estado, sólo dura la ejecución del bloque y luego se borran, por eso
    //es pertinente ponerlo en un estado.

    useEffect (()=>{ //Este efecto se ejecutará cuando se monte el componente porque termina con []

        const renderiza = new Promise ((accept, reject)=>{ //Se ejecuta la promesa apenas se monte el componente.
            setTimeout(()=>{ //El timeout simula un servidor
            //Primero va el setTimeout y luego el accept.
                accept([ //Devuelve un array literal de objetos.
                    {id: 1, stock:4, src:"/img/modelo3020.jpeg", initial:0, description:"Modelo 1", precio: 2200},
                    {id: 2, stock: 6, src: "/img/modelo3030.jpeg", initial: 0, description: "Modelo 2"},
                    {id: 3, stock: 7, src: "/img/modelo3030dos.jpeg", initial: 0, description: "Modelo 3"},
                    {id: 4, stock: 3, src: "/img/modelo3050.jpeg", initial: 0, description: "Modelo 4"},
                    {id: 5, stock: 2, src: "/img/modelo3050dos.jpeg", initial: 0, description: "Modelo 5"},
                    {id: 6, stock: 4, src: "/img/modeloMini.jpeg", initial:0, description: "Modelo 6"}
                    ]
                )
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
    
    console.log (items[0]);
    return( //Una vez que se re-renderiza la página los items setteados se llaman y son colocados en las propiedades del parent
        <div>
            <p>(Container de componentes)</p>
            <ItemList items = {items}></ItemList>
            <hr className ="my-5"></hr>
            <ConsumerApi>PokeApi y passwordGenerator para el Wifi</ConsumerApi>
            <hr className ="my-5"></hr>
            <ItemDetailContainer items={items[0]}></ItemDetailContainer>
        </div>
    );

};

export default ItemListContainer;