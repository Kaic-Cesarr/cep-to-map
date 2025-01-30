import {useEffect, useState} from 'react'

import api from "./services/api";



function App() {

  const [cep, setCep] = useState([]);
  const [idCep, setId] = useState('')

  const handleChange = (event) => {
    setId(event.target.value)
  }

  function fetchData() {
    fetch(`https://cep.awesomeapi.com.br/json/${idCep}`)
    .then((r) => r.json())
    .then((cep) => setCep(cep))
    .catch((error) => console.error("ERRO AO BUSCAR OS DADOS"))
  }


  return (
    <div className="container">
      <div className="input-box">
        <input placeholder="Digite o cep" onChange={handleChange}/>
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


