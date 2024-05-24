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

    const cambiarNombre = (e, nombreFijo) => {
        setNombre(nombreFijo)
        console.log(e.target)
    }

  return (
    <div>
        <h3>Componente: MiPrimerEstado</h3>
        <strong className='label'>
            {nombre}
        </strong>
        &nbsp;
        <button onClick={ e => cambiarNombre(e, "Francisco") }>Cambiar nombre por Fran</button>
        &nbsp;

        <input type="text" onChange={ e => cambiarNombre(e, e.target.value) } placeholder='Cambia el nombre' />

    </div>
  )
}
