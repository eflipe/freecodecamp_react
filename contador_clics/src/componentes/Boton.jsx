import '../styles/Boton.css';

// props es un objeto
// texto aca es una variable
// onClick es un event listener
// manejarClic es una función
export function Boton({ texto, esBotonDeClic, manejarClic }) {
  return (
    <button type="button"
      className={ esBotonDeClic ? "boton-clic" : "boton-reiniciar" }
      onClick={manejarClic}>
      {texto}
    </button>
  );
}
