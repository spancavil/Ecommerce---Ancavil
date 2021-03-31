import React from 'react';
import {NavLink} from 'react-router-dom';

const Item = ({item}) => {
        return (
            <div className="card carditas"  style={{width: "28rem"}}>
                <NavLink to={`/detail/${item.id}`}>
                    <img src={item.src} className="card-img-top" alt="..."/>
                </NavLink>
                <div className="card-body">
                     <h5 className="card-title">{item.description}</h5>
                </div>
            </div>)

    }

export default Item;