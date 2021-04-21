import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router';
//import Items from '../../assets/Items'; DEPRECATED
import ItemDetail from '../ItemDetail';
import Loading from '../Loading';
import {getItem} from '../../services/item.js'

const ItemDetailContainer = () => {

    const {itemId} = useParams()
    const [item,setItem] = useState([])
    
    useEffect(() => {
        getItem(itemId) // Consultamos a la db de firebase, para que traiga el item que corresponde a ese id.
        .then((res)=>{
            if (res.exists){
                setItem(res.data())
            }
        })
    }, [itemId])

    return (
        <>
        {item.length === 0 ? 
            <Loading></Loading>: 
            <ItemDetail item={item}></ItemDetail>
        }
        </>
    )
    
}

export default ItemDetailContainer;