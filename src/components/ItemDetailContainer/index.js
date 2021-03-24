import React from 'react';

const ItemDetailContainer = (item) => {
    
    const render = () => {
        console.log("Se hace el render sólo cuando hay datos!");
        console.log(item.items);
        return(
        <div className="card">
            <h4 className = "card-title">ItemDetailContainer</h4>
            <img src={item.items.src} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{item.items.description}, es el elemento 0 del array de items.</h5>
                <h5 className="card-title">Precio {item.items.precio}.</h5>
            </div>
        </div>)
    }

    return( //Solo renderiza si hay datos, sino devuelve null
        <div>
         {(item.items===undefined)? null : render() }
        </div>
    );
}


export default ItemDetailContainer;