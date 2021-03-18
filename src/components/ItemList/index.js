import React from 'react';
import ItemCount from '../ItemCount';

const ItemList = ({items}) => {

    return (
        <div  className="row row-cols-1 row-cols-md-2 g-4">
                {items.map( elemento =>
                    <div className="card" key={elemento.id} style={{width: "40rem"}}>
                        <img src={elemento.src} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{elemento.description}</h5>
                            <ItemCount stock ={elemento.stock} initial = {elemento.initial}></ItemCount>
                        </div>
                    </div>
                )}
        </div>
        )
}

export default ItemList;