import './App.css';
import {Info} from './componentes/Info.js';

// renderiza el componente para mostrarlo
function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1> Super Título un poco más de text</h1>
        <Info />

      </div>
    </div>
  );
}

export default App;
