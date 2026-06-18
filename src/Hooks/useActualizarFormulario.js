import { useState} from "react";

function usePut(){

    const [data,setData] = useState(null);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(null);

    const actualizar = async (id,datos)=>{
        console.log("Se hizo click",id,datos)
        setLoading(true);
        setError(null);

            

            try{
                const respuesta = await fetch(`http://127.0.0.1:8000/formularios/${id}`,{
                    method: "PUT",
                    headers:{
                        "Content-Type": "application/json"

                    },
                    body: JSON.stringify(datos)
                });

                if (!respuesta.ok){
                    const texto=await respuesta.text();
                    throw new Error (`Error ${respuesta.status}: ${texto}`);
                }

                const resultado = await respuesta.json();
                setList(resultado);

            } catch (err){
                console.error("Error al obtener datos: ",err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        
    return {actualizar,data,loading,error};
    }


export default usePut;