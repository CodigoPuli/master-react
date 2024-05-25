import React, { useEffect, useState } from 'react'
import { AvisoComponent } from './AvisoComponent'

export const PruebasComponent = () => {

    const [usuario, setUsuario] = useState("Javier Pulido")
    const [ fecha, setFecha ] = useState("01-01-1998")
    const [ contador, setContador] = useState(0)

    const modUsuario = e => {
        setUsuario(e.target.value)

    }

    const cambiarFecha = e => {
        setFecha(Date.now())
    }

    // Solo se ejectua una vez, solo al cargar el componente
    useEffect(() => {
        console.log("Has cargado el componente PruebasComponent!!")
    }, [])

    // Se ejecuta solo si cambio el usuario
    useEffect(() => {

        setContador(contador+1)
        console.log("Has modificado el usuario:"+contador)
        
    }, [fecha, usuario])


    return (
        <div>
            <h1>El efecto - Hook useEffect</h1>

            <strong> {usuario}</strong>
            <strong className={ contador >= 10 ? 'label label-green' : 'label'}>{fecha}</strong>

            <p>
            <input type="text"
                onChange={ modUsuario }
                placeholder='Cambia el nombre' 
                />

                <button onClick={cambiarFecha}>Cambiar fecha</button>
            </p>

            { usuario == "JAVIER" && <AvisoComponent />}

        </div>
    )
}
