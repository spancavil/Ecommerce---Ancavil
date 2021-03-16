import React from 'react';
import ItemCount from './ItemCount';

const ItemListContainer = () => { //Hacemos un ItemListContainer utilizando una función flecha
    
    //Funcion llamada por los hijos
    const onAdd = () => {
        alert("Agregado al carrito!");
    }

    return(
        <div>
            <p>(Container de componentes)</p>
            <div class="row row-cols-1 row-cols-md-2 g-4">
                <div class="col">
                <ItemCount stock = "4" src ="/img/modelo3020.jpeg" initial = "1" description = "Modelo 1" modelo ="1" onAdd = {onAdd}></ItemCount>
                </div>
                <div class="col">
                <ItemCount stock = "6" src = "/img/modelo3030.jpeg" initial = "1" description = "Modelo 2" modelo ="2" onAdd = {onAdd}></ItemCount>
                </div>
                <div class="col">
                <ItemCount stock = "10" src = "/img/modelo3030dos.jpeg" initial = "1" description = "Modelo 3" modelo ="3" onAdd = {onAdd}></ItemCount>
                </div>
                <div class="col">
                <ItemCount stock = "9" src = "img/modelo3050.jpeg" initial = "1" description = "Modelo 4" modelo ="4" onAdd = {onAdd}></ItemCount>
                </div>
                <div class="col">
                <ItemCount stock = "13" src = "img/modelo3050dos.jpeg" initial = "1" description = "Modelo 5" modelo ="5" onAdd = {onAdd}></ItemCount>
                </div>
            </div>
        </div>
    );
};

export default ItemListContainer;