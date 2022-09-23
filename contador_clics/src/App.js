import './App.css';
import {Boton} from './componentes/Boton'
import {Contador} from './componentes/Contador'
import freeCodeCampLogo from './img/freecodecamp-logo.png'
import { useState } from 'react';

// Hooks: caracteristicas especiales de React, ejemplo useState
function App() {

  const [numClics, setNumClics] = useState(0);


  const manejarClic_funcion = () => {
    console.log("Soy la función manejarClic");
    setNumClics(numClics + 1);
    console.log(numClics);

  }

  const reiniciarContador = () => {
    console.log("Soy reiniciarContador");
    setNumClics(0);
  }

  return (
    <div className="App">
      <div className="logo-contenedor">
        <img className="logo" src={freeCodeCampLogo} alt="Logo" />
      </div>
      <div className="contenedor-principal">
        <Contador numClics={numClics} />
        <Boton
        texto="Clic"
        esBotonDeClic={true}
        manejarClic={manejarClic_funcion} />
        <Boton
        texto="Reinicar"
        esBotonDeClic={false}
        manejarClic={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
