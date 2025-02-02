import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './Components/Home'
import Result from './Components/Results';
import Error from './Components/Error'

function RoutesApp() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path='/' element={ <Home/>} />
            <Route path='/result' element={ <Result/>}/>

            <Route path='/*' element={ <Error/> } />
        </Routes>
    </BrowserRouter>
    )
}

export default RoutesApp;