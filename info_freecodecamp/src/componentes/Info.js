import React from 'react';

// componente funcional
export function Info() {
  // retorna un jsx
  return (
    <div className="contenedor-info">
      <img className="imagen-info"
           src={require("../img/van_1.jpeg")}
           alt="Foto 1" />
      <div className="contenedor-texto-info">
        <p className="nombre-info"> Nombre </p>
        <p className="cargo-info">Ocupación</p>
        <p className="text-info">Blah blah blah</p>
      </div>

    </div>

  );

}
