import '../estilos/Boton.css';


function Boton(props) {
  const esOperador = valor => {
    console.log(isNaN(valor))
    return isNaN(valor) && (valor !== '.') && (valor !== '=');
  };

  return (
    <div
      className={`boton-contenedor ${esOperador(props.children) ? "operador" : ''}`.trimEnd()}
      >
      {props.children}
    </div>
  );
};

export default Boton;
