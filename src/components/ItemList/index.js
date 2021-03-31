import React from 'react';
import Item from '../Item';

const ItemList = ({items}) => {
        return (
        <div  className="row row-cols-1 row-cols-lg-2 g-4">
                {items.map( elemento =>
                    <div className= "col d-flex justify-content-center my-3" key={elemento.id}>
                        <Item item={elemento}></Item>
                    </div>
                )}
        </div>
        ) 
}


export default ItemList;