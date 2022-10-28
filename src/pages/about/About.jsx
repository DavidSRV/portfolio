import React from "react";
import "./AboutStyle.scss";

function About() {
  return (
    <article className="description__container">
      <h2 className="description__title">UN POCO SOBRE MÍ</h2>
      <aside className="aside1">
        <p className="description__paragraph">
          Mi nombre es David Sebastián Ruiz Vargas y soy Desarrollador Web con
          una fuerte pasión del lado del fronted, graduado de la universidad
          CESDE bajo el título de desarrollador Web. Me caracteriza mi enfoque y
          vocación hacía el Desarrollo Web. Esto siempre me impulsa a estar en
          constante aprendizaje de nuevas herramientas y tecnologías que me
          permitan mejorar y aportar tanto profesionalmente como a mi entorno de
          trabajo.
        </p>
      </aside>
      <aside>
        <p className="description__img">PONER IMAGEN</p>  
      </aside>
    </article>
  );
}

export default About;
