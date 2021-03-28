import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
//import ConsumerApi from './ConsumerApi';
import Item from './Item';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { NavBar } from '../NavBar';
import Presentacion from './Presentacion';
import Contacto from './Contacto';
import Loading from './Loading';

const ItemListContainer = () => { //Hacemos un ItemListContainer utilizando una función flecha

    const [items, setItems] = useState([]); //Necesitamos que los item se alojen en un estado
    //Si los declaramos como constantes fuera del estado, sólo dura la ejecución del bloque y luego se borran, por eso
    //es pertinente ponerlo en un estado.

    useEffect (()=>{ //Este efecto se ejecutará cuando se monte el componente porque termina con []

        const renderiza = new Promise ((accept, reject)=>{ //Se ejecuta la promesa apenas se monte el componente.
            setTimeout(()=>{ //El timeout simula un servidor
            //Primero va el setTimeout y luego el accept.
                accept([ //Devuelve un array literal de objetos.
                    {id: 1, stock:4, src:"/img/modelo3020.jpeg", initial:0, description:"Modelo 1", precio: 2200, categoria:"simple"},
                    {id: 2, stock: 6, src: "/img/modelo3030.jpeg", initial: 0, description: "Modelo 2", precio: 5800, categoria:"double"},
                    {id: 3, stock: 7, src: "/img/modelo3030dos.jpeg", initial: 0, description: "Modelo 3", precio: 5800, categoria: "double"},
                    {id: 4, stock: 3, src: "/img/modelo3050.jpeg", initial: 0, description: "Modelo 4", precio: 7900, categoria: "double"},
                    {id: 5, stock: 2, src: "/img/modelo3050dos.jpeg", initial: 0, description: "Modelo 5", precio: 7900, categoria:"double"},
                    {id: 6, stock: 4, src: "/img/modeloMini.jpeg", initial:0, description: "Modelo 6", precio: 1700, categoria:"simple"}
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
    
    console.log (items);

    const render = () => {
        return( //Una vez que se re-renderiza la página los items setteados se llaman y son colocados en las propiedades del parent
        <div>
        <BrowserRouter>
            <NavBar></NavBar>
            <Switch>
                <Route exact path = '/'>
                    <ItemList items = {items}></ItemList>
                </Route>
            </Switch>
            <Switch>
                <Route path ='/categories/:categoriaProducto'>
                    <ItemList items = {items}></ItemList>
                </Route>
            </Switch>
            
            <Switch>
                <Route path ='/detail/:productoId'>
                    <Item items={items}></Item>
                </Route>
            </Switch>
            <Switch>
                <Route path='/nosotros'>
                    <Presentacion></Presentacion>
                </Route>
            </Switch>
            <Switch>
                <Route path ='/contacto'>
                    <Contacto></Contacto>
                </Route>
            </Switch>
        </BrowserRouter>
        </div>
        );}
    
    return (
        <>
        {items.length ===0 ? <Loading></Loading>: render()}
        </>
    )

};

export default ItemListContainer;