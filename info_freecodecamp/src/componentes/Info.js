import React from 'react';
import '../styles/Info.css';

// componente funcional
export function Info(props) {
  // retorna un jsx
  return (
    <div className="contenedor-info">
      <img className="imagen-info"
           src={require(`../img/van_${props.imagen}.jpeg`)}
           alt="Foto 1" />
      <div className="contenedor-texto-info">
        <p className="nombre-info">{props.nombre} en {props.pais}</p>
        <p className="cargo-info">{props.ocupacion} en {props.empresa}</p>
        <p className="text-info">{props.texto}</p>
      </div>

    </div>

  );

}
