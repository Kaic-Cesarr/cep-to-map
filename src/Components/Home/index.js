import api from '../../services/api'
import {useState} from 'react'

import Result from '../Results';
import { BrowserRouter, replace, Route, useNavigate} from 'react-router-dom';

function Home() {

    const [cep, setCep] = useState([]);
    const [idCep, setId] = useState('');

    const navigate = useNavigate();


    const handleChange = (event) => {
        setId(event.target.value)
    }

    function fetchData() {
        fetch(`https://cep.awesomeapi.com.br/json/${idCep}`)
        .then((r) => r.json())
        .then((cep) => setCep(cep))
        .catch((error) => console.error("ERRO AO BUSCAR OS DADOS"));

        console.log(cep)

    }








    return (
        <div>
            <div>
                <input placeholder='Digite o CEP' onChange={handleChange}/>
                <button onClick={fetchData}>Pesquisar</button>
            </div>
        </div>
    )
}

export default Home;