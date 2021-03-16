import React, {useEffect, useState} from 'react';
import modelo1 from "../../img/modelo3020.jpeg";
//import modelo2 from "../../img/modelo3030.jpeg";
//import modelo3 from "../../img/modelo3050.jpeg";
//import modelo4 from "../../img/modelo3030dos.jpeg";
//import modelo5 from "../../img/modelo3050dos.jpeg";

const ItemCount = (props) =>{
        
        const [count, setCount] = useState(parseInt(props.initial));
        const [countSuma, setCountSuma] = useState(false);

        useEffect (()=>{
            //setCount(parseInt(props.initial[0]));
            console.log("App montada!");
            return;
        }, []); //Ese effect sólo se ejecutará una vez montado el componente y nada más

        useEffect(() =>{
            console.log ("Hiciste click en +")
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
                <div class="card" style={{width: "40rem"}}>
                        <img src= {modelo1} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">{props.description}</h5>
                            <div class="d-flex justify-content-around">
                                <button class="btn btn btn-outline-primary btn-sm" onClick={removeHandle}>-</button>
                                <h5 class="card-text">{count}</h5>
                                <button class="btn btn btn-outline-primary btn-sm" onClick={addHandle}>+</button>
                            </div>
                            <p class="card-text"></p>
                            <button class="btn btn btn-outline-primary btn-sm" onClick={
                                (count>0) ? props.onAdd : null}>
                                Agregar al carrito
                            </button>
                        </div>
                </div>    
        )
    }

export default ItemCount;