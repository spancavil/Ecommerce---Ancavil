import React, { useEffect, useState } from "react";
import "./style.css";

const ConsumerApi = () => {
  const [poke, setPoke] = useState();
  const [pwd, setPwd] = useState([])

  useEffect(() => {
    const promesa1 = fetch("https://pokeapi.co/api/v2/pokemon/151");
    promesa1
      .then(response => response.json())
      .then(data => setPoke(data))
    
    const promesa2 = fetch ("https://makemeapassword.ligos.net/api/v1/passphrase/json?pc=1&sp=1&maxCh=50&whenNum=Anywhere&nums=6")
    promesa2
      .then(response => response.json())
      .then(dataJson => setPwd(dataJson))
  }, []);

  console.log("Fetch de PokeApi.co:");
  console.log(poke);
  console.log("Fetch de Makemeapassword:")
  console.table(pwd);
  
  return (
    <div>
      <h5>Inspeccionar consola (fetch de pokeapi y makemeapassword)</h5>
    </div>
  );
};

export default ConsumerApi;