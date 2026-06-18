import useFormulario from "../Hooks/userFormularios";

function Registros(){

    const{list,loading,error} = useFormulario ();

    return (
        <div  className="registros-pago">

        <h1>Registros de formularios</h1>

        {loading && <p>Cargando...</p>}
        {error && <p>Error: {error}</p>}
        

        {loading && <p>Cargando registros...</p>}
        {error && <p className="error">Error:{error}</p>}

        {!loading && !error && (
            <div className="tabla-container">
                {list.length > 0 ? (
                    <table className="tabla-formularios">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>Correo</th>
                                <th>Edad</th>
                                <th>Peso</th>
                                <th>Genero</th>
                            </tr>                
                        </thead>
                        <tbody>
                        {list.map((item, index) => (
                            <tr key={item.id ?? index}>
                                <td>{item.id}</td>
                                <td>{item.nombre}</td>
                                <td>{item.apellido}</td>
                                <td>{item.correo}</td>
                                <td>{item.edad}</td>
                                <td>{item.peso}</td>
                                <td>{item.genero}</td>
                            </tr>
                        ))}
                    </tbody>                
                </table>
        ) : (
            <p>No hay registros disponibles</p>
        )}             
        </div>
        )}
        </div>
    )
};

export default Registros;