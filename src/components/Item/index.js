import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Loading from '../Loading';

const Item = () => {

    const [items, setItems] = useState ([]);
    const productoId = useParams();
    const posicion = (productoId.productoId-1);

    useEffect (()=>{
        const promesaItem = new Promise ((acc,rej)=>{
            setTimeout (()=>{
                acc([ //Devuelve un array literal de objetos.
                    {id: 1, stock:4, src:"/img/modelo3020.jpeg", initial:0, description:"Modelo 1", precio: 2200, categoria:"simple"},
                    {id: 2, stock: 6, src: "/img/modelo3030.jpeg", initial: 0, description: "Modelo 2", precio: 5800, categoria:"double"},
                    {id: 3, stock: 7, src: "/img/modelo3030dos.jpeg", initial: 0, description: "Modelo 3", precio: 5800, categoria: "double"},
                    {id: 4, stock: 3, src: "/img/modelo3050.jpeg", initial: 0, description: "Modelo 4", precio: 7900, categoria: "double"},
                    {id: 5, stock: 2, src: "/img/modelo3050dos.jpeg", initial: 0, description: "Modelo 5", precio: 7900, categoria:"double"},
                    {id: 6, stock: 4, src: "/img/modeloMini.jpeg", initial:0, description: "Modelo 6", precio: 1700, categoria:"simple"}
                    ]
                )
            }, 2000)
        })

        promesaItem.then ((resultado) => {
            setItems(resultado);
        })
    }, []);

    const render = ()=>{
        return (
            <div class= "card">
                <h5 className = "card-title mt-3">Detalle</h5>
                <img src={items[posicion].src} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{items[posicion].description}</h5>
                    <h5 className="card-title">Precio: ${items[posicion].precio}.-</h5>
                </div>
            </div>
        )
    }

    //console.log (items);
    //console.log (posicion);


    return(
        <>
            {(items.length === 0) ? <Loading></Loading> : render()}
        </>
        )

}

export default Item;