import React, { useEffect, useState } from 'react'



export const AjaxComponent = () => {

  const [usuarios, setUsuarios] = useState([])
  const [cargando, setCargando] = useState(true)
  const [errores, setErrores] = useState("")


  // Generico / basico
  const getUsuariosEstaticos = () => {
    setUsuarios([
      {
        "id": 1,
        "email": "javier@reqres.in",
        "first_name": "Javier",
        "last_name": "Pulido",

      },
      {
        "id": 2,
        "email": "juan@reqres.in",
        "first_name": "Juan",
        "last_name": "Lopez",

      },
      {
        "id": 3,
        "email": "pepe@reqres.in",
        "first_name": "Pepe",
        "last_name": "Lopez",
      },
    ])
  }

  const getUsuariosAjaxPms = () => {
    fetch("https://reqres.in/api/users?page=1")
      .then(respuesta => respuesta.json())
      .then(
        resultado_final => {
          setUsuarios(resultado_final.data)
          console.log(usuarios)

        },
        error => {
          console.log(error)

        }
      )
  }

  const getUsuariosAjaxAW = () => {

    setTimeout(async () => {
      try {

        const peticion = await fetch("https://reqres.in/api/users?page=1")
        const { data } = await peticion.json();

        setUsuarios(data)
        setCargando(false)
      } catch (error) {
        console.log(error)
        setErrores(error.message)

      }

    }, 1000)

  }

  useEffect(() => {
    //getUsuariosEstaticos()
    //getUsuariosAjaxPms()

    getUsuariosAjaxAW()
  }, []);

  if (errores !== "") {
    // Cuando esta todo cargando
    return (
      <div className='errores'>
        {errores}
      </div>
    )

  } else if (cargando == true) {
    // Cuando esta todo cargando
    return (
      <div className='cargando'>
        Cargando datos...
      </div>
    )

  } else if (cargando == false && errores == "") {
    //  Cuando todo ha ido bien
    return (
      <div>
        <h2>Listado de usuarios via Ajax</h2>
        <ol className='usuarios'>
          {
            usuarios.map(usuario => {
              console.log(usuario)
              return <li key={usuario.id}>
                <img src={usuario.avatar} width="80" />
                &nbsp;
                {usuario.first_name} {usuario.last_name}

              </li>

            })
          }
        </ol>

      </div>
    )
  }


}


