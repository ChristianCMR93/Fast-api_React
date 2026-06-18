import { useState } from "react";
import usePut from "../Hooks/useActualizarFormulario";


function EditarFormulario(){

    const {actualizar} = usePut();

    const [id,setId] = useState("");
    const [nombre,setNombre] = useState("");
    const [apellido,setApellido] = useState("");
    const [correo,setCorreo] = useState("");
    const [edad,setEdad] = useState("");
    const [peso,setPeso] = useState("");
    const [genero,setGenero] =useState("");

    return (

        <div className="Actualizar-formu">

            <input 
                placeholder="ID"
                value={id}
                onChange={(e) =>setId(e.target.value)}
            />


            <input
                placeholder="Nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
            />

            <button 
                onClick={()=>
                    actualizar(id,{nombre})
                }               
            >
                Actualizar
            </button>

            <input
                placeholder="Apellido"
                value={apellido}
                onChange={(e) => setApellido(e.target.value)}
            />

            <button 
                onClick={()=>
                    actualizar(id,{apellido})
                }               
            >
                Actualizar
            </button>

            <input
                placeholder="Correo"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}            
            />

            <button 
                onClick={()=>
                    actualizar(id,{correo})
                }               
            >
                Actualizar
            </button>

            <input
                placeholder="Edad"
                value={edad}
                onChange={(e)=> setEdad (e.target.value)}
            />

            <button 
                onClick={()=>
                    actualizar(id,{edad})
                }               
            >
                Actualizar
            </button>

            <input
                placeholder="Peso"
                value={peso}
                onChange={(e)=> setPeso (e.target.value)}
            />

            <button 
                onClick={()=>
                    actualizar(id,{peso})
                }               
            >
                Actualizar
            </button>

            <input
                placeholder="Genero"
                value={genero}
                onChange={(e) => setGenero(e.target.value)}
            />

            <button 
                onClick={()=>
                    actualizar(id,{genero})
                }               
            >
                Actualizar
            </button>
            

        </div>
    );
}

export default EditarFormulario;