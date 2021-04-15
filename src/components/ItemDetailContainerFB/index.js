import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router';
//import Items from '../../assets/Items'; DEPRECATED
import ItemDetail from '../ItemDetail';
import Loading from '../Loading';

import {getFirestore} from '../../firebase'

const getItems = (itemId) => {
    const db = getFirestore();
    const itemsCollection = db.collection('Items'); //Items con MAYUSCULA porque ASI ESTA EN FIREBASE
    const item = itemsCollection.doc(itemId);
    return item.get();
}

const ItemDetailContainer = () => {

    const {itemId} = useParams()
    const [item,setItem] = useState([])
    
    useEffect(() => {
        //console.log(itemId);
        getItems(itemId) //Es una promesa por eso despues tiene un then
        .then((res)=>{
            console.log("Existe??", res.exists);
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