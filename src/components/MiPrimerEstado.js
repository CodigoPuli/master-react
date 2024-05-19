import React, {useState} from 'react'

export const MiPrimerEstado = () => {
    /*
    // Problematica
    let nombre = "Javier Pulido"

    const cambiarNombre = e => {
        nombre = "Paquito Fernandez"
    }
    */

    const [ nombre, setNombre] = useState("Javier Pulido")

    const cambiarNombre = e => {
        setNombre("Francisco")
    }

  return (
    <div>
        <h3>Componente: MiPrimerEstado</h3>
        <strong>
            {nombre}
        </strong>
        &nbsp;
        <button onClick={ cambiarNombre }>Cambiar</button>
    </div>
  )
}
