import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    return(
        <nav className="navbar">

            <Link to="/">Home</Link>
            <Link to="/quienes_somos">Quienes Somos</Link>
            <Link to="/formulario">Formulario</Link>
            <Link to="/personaje">Personajes</Link>
            <Link to="/registros">Registros</Link>
            <Link to="/put">Editar</Link>
        </nav>
    )

}

export default Navbar;