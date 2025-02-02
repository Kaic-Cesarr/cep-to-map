// import {useEffect, useState} from 'react'
// import api from "./services/api";


import RoutesApp from "./routes";
function App() {
  return(
    <div className="App">
      <RoutesApp />
    </div>
  );
}

export default App;


// function App() {

//   const [cep, setCep] = useState([]);
//   const [idCep, setId] = useState('')

//   const handleChange = (event) => {
//     setId(event.target.value)
//   }

//   function fetchData() {
//     fetch(`https://cep.awesomeapi.com.br/json/${idCep}`)
//     .then((r) => r.json())
//     .then((cep) => setCep(cep))
//     .catch((error) => console.error("ERRO AO BUSCAR OS DADOS"))
//   }


//   return (
//     <div className="container">
//       <div className="input-box">
//         <input placeholder="Digite o cep" onChange={handleChange}/>
//         <button onClick={fetchData} >Pesquisar</button>

//         <div className='result'>
//           <ul >
//             <li>Rua: {cep.address}</li>
//             <li>Bairro: {cep.district}</li>
//             <li>Cidade: {cep.city}</li>
//             <li>Estado: {cep.state}</li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }



// export default App;


