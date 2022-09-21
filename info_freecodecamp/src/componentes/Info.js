import React from 'react';

// componente funcional
function Info() {
  // retorna un jsx
  return (
    <div className="contenedor-info">
      <img className="imagen-info"
           src={require("../img/van_1.jpeg")}
           alt="Foto 1" />

    </div>

  );

}
