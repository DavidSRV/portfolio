import React from "react";
import "./_WorkStyle.scss";
import img from "../../../assets/img/Isotipo-original-fondo-bco.jpg";

function Work() {
  return (
    <aside className="exp__container">
      <p className="exp__title">¿Dónde he laborado?</p>
      <p className="exp__business">Soluciones Inteligentes</p>
      <a  href="https://www.solucionesinteligentesrds.com/" target="_blank" rel="noreferrer">
        <img className="exp__img" src={img} alt="Soluciones-Inteligentes" />
      </a>
      <p className="exp__description">Actualidad</p>
    </aside>
  );
}

export default Work;
