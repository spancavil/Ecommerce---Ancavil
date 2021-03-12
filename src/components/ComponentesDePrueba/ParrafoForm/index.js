import React from 'react';

export default function ParrafoForm (props){ //Props son las propiedades que recibe del parent.
    return(
        <div>
          <p>Esta es la {props.conteo} vez que se hace click en submit. Agregamos: "{props.children}".</p>
        </div>
    )
};