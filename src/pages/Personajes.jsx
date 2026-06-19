import usePersonaje from "../Hooks/userPersonaje";
import "./Personajes.css";

function Personaje({id}) {
    const personaje = usePersonaje(id);
        console.log("si carga")
    if (!personaje) {
        return <h2>Cargando...</h2>
    }
    return (

        <div className="personaje">
            <img
                src={personaje.image}
                alt={personaje.name}
            />
            <h2>{personaje.name}</h2>
            <p>{personaje.status}</p>
            <p>{personaje.gender}</p>
            <p>{personaje.origin.name}</p>

        </div>

    );
}

function Personajes() {

    const personajes = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

    return (
        <div className="contenedor-personajes">
            {personajes.map((id)=>(
                <Personaje key = {id} id={id} />
            ))}
        </div>
    );
}

export default Personajes;