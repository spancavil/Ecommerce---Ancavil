import React, { useState } from "react";
import ButtonAgregar from "../ButtonAgregar";
import ParrafoForm from "../ParrafoForm";

const MiniForm = () => { //Declaramos un componente MiniForm con una función arrow
        const [count, setCount] = useState(0);
  return (
        <div>
            <p>Ingrese su nombre:</p>
            <input placeholder="Ej: Jorge"></input>
            <button type="button" class="btn btn-success" onClick={() => {
                setCount(count +1);
            }}>
            Submit
            </button>
            <button type="button" class="btn btn-success" onClick={() => {
                setCount(count-count);
            }}>
            Reset
            </button>
            <p>Clickeaste {count} veces</p>
            <ParrafoForm conteo={count}> 
                Contenido del children
            </ParrafoForm>
            <ButtonAgregar></ButtonAgregar>
        </div>
    );
}

export default MiniForm;
  