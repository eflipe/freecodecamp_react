import './App.css';
import Boton from './componentes/Boton';

function App() {
  return (
    <div className="App">
      <div className="logo-contenedor">
        <img
          src=""
          className="logo"
          alt="Logo" />
      </div>
      <div className="contenedor-calculadora">
        <div className="fila">
        <Boton>1</Boton>
        <Boton>+</Boton>
        </div>
        <div className="fila">

        </div>
        <div className="fila">

        </div>
        <div className="fila">

        </div>
        <div className="fila">

        </div>
      </div>

    </div>
  );
}

export default App;
