import React, { useState } from 'react';

const ButtonAgregar = () => {
    const [agregar, setAgregar] = useState("Agregar?");
    return (
        <button type="button" class="btn btn-info" onClick={()=>{
            setAgregar("Amigo agregado!");
        }}>
            {agregar}
        </button>
    )
}

export default ButtonAgregar;