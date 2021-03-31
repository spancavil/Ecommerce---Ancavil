import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router';
import Items from '../../assets/Items';
import ItemDetail from '../ItemDetail';
import Loading from '../Loading';

const ItemDetailContainer = () => {

    const {productoId} = useParams()
    const [item,setItem] = useState([])
    
    useEffect(() => {
        const promesa1 = new Promise ((acc,rej)=>{
            
            setTimeout(()=>{
                acc(
                    Items
                    )
            }, 2000)
        })

        promesa1.then ((resultado)=>{
            setItem(resultado);
        })

    }, [])

    const render = (item) =>{
        return (
            <div>
                <ItemDetail item={item}></ItemDetail>
            </div>
        )
    }

    return (
        <>
        {item.length === 0 ? 
            <Loading></Loading>: 
            render(
                item.filter(elemento=>elemento.id === parseInt(productoId))[0])
        }
        </>
    )
    
}

export default ItemDetailContainer;
