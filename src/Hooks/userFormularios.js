import {useEffect,useState} from "react";

function useFormulario(){

    const [list,setList] = useState([]); //para almacenar los datos
    const [loading,setLoading] = useState(false); // para indicar que esta cargando
    const [error,setError] = useState (null); // para almacenar errores


    useEffect (()=>{
        const fetchFormulario = async () =>{ //funcion asincrona para obtener los datos
            setLoading(true); //indica que se esta cargando
            setError (null); // limpia cualquier error;

            try{ // intentea realizar la peticion en este caso va hacer el get
                const respuesta = await fetch("http://127.0.0.1:8000/formularios",{ //este link hace la peticion
                    mode: "cors",
                    credentials: "include",
                });

    if (!respuesta.ok){
        const texto = await respuesta.text();
        throw new Error(`Error ${respuesta.status}: ${texto}`);
    }

    const data = await respuesta.json();
    setList(data);
} catch (err) {
    console.error("Error al obtener datos: ", err);
    setError(err.message);
} finally {
    setLoading(false);
}
        };

fetchFormulario();
    },[]);
return {list,loading,error};
}

export default useFormulario;                    