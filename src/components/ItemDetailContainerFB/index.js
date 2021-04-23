import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router';
//import Items from '../../assets/Items'; DEPRECATED
import ItemDetail from '../ItemDetail';
import Loading from '../Loading';
import {getItem} from '../../services/item.js'
import ItemNotFound from '../ItemNotFound';

const ItemDetailContainer = () => {

    const {itemId} = useParams();
    const [item,setItem] = useState([]);
    const [flag, setFlag] = useState(false);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        getItem(itemId) // Consultamos a la db de firebase, para que traiga el item que corresponde a ese id.
        .then((res)=>{
            if (res.exists){
                setLoading(false);
                setItem(res.data());
            }
            else{
                setFlag(true);
                setLoading(false);
            }
        })
    }, [itemId])

    return (
        <>
        {loading ?
            <Loading></Loading>:
            null}

        {item.length !== 0 ? 
            <ItemDetail item={item}></ItemDetail> :
            null}
        
        {/* Se renderizará este componente en caso que no se encuentren productos que coincidan con el id brindado */}
        {flag ? 
            <ItemNotFound></ItemNotFound>:
            null
        }
        </>
    )
    
}

export default ItemDetailContainer;