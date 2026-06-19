import {BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom'
import Navbar from '../components/Navbar'
import QuienesSomos from '../pages/QuienesSomos'
import Home from '../pages/Home'
import Formulario from '../pages/Formulario'
import Personajes from '../pages/Personajes'
import Registros from '../pages/Registros'
import EditarFormulario from '../pages/ActualizarFormulario'

function AppRouter() {

    return(
        <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quienes_somos" element={<QuienesSomos />} />
            <Route path="/formulario" element={<Formulario />} />
            <Route path="/personajes" element={<Personajes />} />
            <Route path="/registros" element={<Registros/>} />
            <Route path="/put"element={<EditarFormulario/>}/>
            
        </Routes>    
        </BrowserRouter>
    )
}
export default AppRouter;