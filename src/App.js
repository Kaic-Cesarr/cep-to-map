import {useEffect, useState} from 'react'

import api from "./services/api";



function App() {

  const [cep, setCep] = useState([]);


    function fetchData() {
      fetch('https://cep.awesomeapi.com.br/json/74948440')
      .then((r) => r.json())
      .then((cep) => setCep(cep))
      .catch((error) => console.error("ERRO AO BUSCAR OS DADOS"))
    }

    console.log(cep)

  return (
    <div className="container">
      <div className="input-box">
        <input placeholder="Digite o cep" onChange={setCep}/>
        <button onClick={fetchData} >Pesquisar</button>

        <div>
          <ul>
            <li>
              {cep.address}
              {cep.district}
              {cep.city}
              {cep.states}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}



export default App;


