import './App.css';
import {Info} from './componentes/Info.js';

// renderiza el componente para mostrarlo
// le pasamos las propiedades
function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1> Super Título un poco más de text</h1>
        <Info
          nombre='Van Gogh'
          pais='Países Bajos'
          imagen='1'
          ocupacion='Pintor'
          empresa='Acuarela'
          texto='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          />
        <Info
          nombre='Van Gogh'
          pais='Países Bajos'
          imagen='2'
          ocupacion='Pintor'
          empresa='Acuarela'
          texto='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          />
        <Info
          nombre='Van Gogh'
          pais='Países Bajos'
          imagen='3'
          ocupacion='Pintor'
          empresa='Acuarela'
          texto='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          />
      </div>
    </div>
  );
}

export default App;
