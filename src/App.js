import logo from './logo.svg';
import './App.css';
import MiComponente from './MiComponente';
import { SegundoComponente } from './SegundoComponente';
import { TercerComponente } from './TercerComponente';
import { EventosComponente } from './EventosComponente';

function App() {

  const ficha_medica = {
    altura: "173cm",
    grupo: "H+",
    estado: "Bueno",
    alergias: "Ninguna"
  }
  
  const numero = 123456

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bienvenido al master en react!!
        </p>

        {/* Cargar mi primer componente */}
        <div className='componentes'>
          <hr />
          <EventosComponente />

          <hr />
          <TercerComponente
            nombre="Javier"
            apellidos="Pulido"
            ficha={ficha_medica}
          />

          <hr />
          <SegundoComponente />
          <hr />
          <MiComponente />
        </div>
      </header>
    </div>

  );
}

export default App;
