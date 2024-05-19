import React from 'react'

export const MiPrimerEstado = () => {

    let nombre = "Javier Pulido"

    const cambiarNombre = e => {
        nombre = "Paquito Fernandez"
    }

  return (
    <div>
        <h3>Componente: MiPrimerEstado</h3>
        <strong>
            {nombre}
        </strong>
        &nbsp;
        <button onClick={ cambiarNombre}>Cambiar</button>
    </div>
  )
}
