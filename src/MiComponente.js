// Importar modulos de react / dependencias 

import React from "react";

// Función del componente
const MiComponente = () => {

    let nombre = "Javier"
    let web = "javierpulidoweb.es"

    let usuario = {
        nombre: "Javier",
        apellidos: "Pulido",
        web: "javierpulidoweb.es"  
    }

    console.log(usuario)

    return (
        <div className="mi-componente">

            <hr />
            <h2>Componente creado</h2>
            <h3>Datos del usuario:</h3>
            <ul>
                <li>Nombre: <strong> {usuario.nombre} </strong> </li>
                <li>Apellidos: <strong>{usuario.apellidos} </strong></li>
                <li>Web: <strong>{usuario.web}</strong> </li>
            </ul>
            <p>Este es mi primer componente</p>
            <ul>
                <li>
                    React
                </li>
                <li>
                    Angular
                </li>
                <li>
                    Vue
                </li>
            </ul>
            </div>

     

    )
}

// Export

export default MiComponente