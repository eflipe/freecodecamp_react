import React from 'react';
import '../styles/Info.css';

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
        <p className="text-info">Excepteur aut dolore iudicem, velit fidelissimae cernantur cillum singulis.
        Ipsum litteris in quem illum. Malis nostrud fidelissimae.Velit iis quamquam in
        cernantur labore multos in legam. Quamquam te constias, possumus graviterque se
        quibusdam sed quae si eiusmod eu noster, export aliquip sed praetermissum. 
        Senserit malis arbitror appellat sed aut id despicationes id quis litteris qui
        labore duis, expetendis relinqueret ad ingeniis.</p>
      </div>

    </div>

  );

}
