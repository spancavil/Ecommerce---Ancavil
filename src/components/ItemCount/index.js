import React, {useEffect, useState} from 'react';

const ItemCount = (props) =>{
        
        const [count, setCount] = useState(0);
        const [countSuma, setCountSuma] = useState(false);

        const addHandler = () => {
            props.onAdd(count)
        }

        useEffect (()=>{
            //setCount(parseInt(props.initial[0])); NO SE PUEDE, PORQUE RECIEN SE MONTA. NO ALCANZA NINGUNA PROPIEDAD.
            //console.log("App montada!");
            return;
        }, []); //Ese effect sólo se ejecutará una vez montado el componente y nada más

        useEffect(() =>{
            //console.log ("Hiciste click en +")
        }, [countSuma]); //Este effect se aplica en cada mount y además cuando se hace click en + (para practicar los effects)

        const removeHandle = () =>{
            if (count >=1)
                setCount(count - 1 );
        };

        const addHandle = () => {
            if (count < props.stock){
                setCount (count + 1);
                setCountSuma(!countSuma);
            }
        };
        //Sólo agregará el addOn (funcion del padre) en caso que el count sea mayor a cero, sino no.
        return(
            <div>
                <div className="d-flex justify-content-center">
                    <button className="btn btn btn-outline-danger btn-sm mx-3" onClick={removeHandle}>-</button>
                    <h5 className="card-text mx-3">{count}</h5>
                    <button className="btn btn btn-outline-danger btn-sm mx-3" onClick={addHandle}>+</button>
                </div>
                <p className="card-text"></p>

                {count >0 ? 
                    <button className="btn btn btn-outline-danger btn-sm" onClick={addHandler}>
                        Agregar al carrito
                    </button> :
                    null
                }
                
            </div>    
        )
    }

export default ItemCount;