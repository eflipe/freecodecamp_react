import './App.css';
import {Boton} from './componentes/Boton'
import freeCodeCampLogo from './img/freecodecamp-logo.png'


function App() {

  const manejarClic_funcion = () => {
    console.log("Soy la función manejarClic");
  }

  const reiniciarContador_funcion = () => {
    console.log("Soy reiniciarContador");
  }

  return (
    <div className="App">
      <div className="logo-contenedor">
        <img className="logo" src={freeCodeCampLogo} alt="Logo" />
      </div>
      <div className="contenedor-principal">
        <Boton
        texto="Clic"
        esBotonDeClic={true}
        manejarClic={manejarClic_funcion} />
        <Boton
        texto="Reinicar"
        esBotonDeClic={false}
        manejarClic={reiniciarContador_funcion} />
      </div>
    </div>
  );
}

export default App;
