import React from "react";
import "./AboutStyle.scss";
import img from "../../assets/img/imgDavid.png";

function About() {
  return (
    <section id="about" className="containerGeneral">
      <article className="description__container">
        <h2 className="description__title">UN POCO SOBRE MÍ</h2>
        <p className="description__paragraph1">
          Mi nombre es David Sebastián Ruiz Vargas y soy
          <strong>Desarrollador Web con una fuerte pasión</strong> por el
          fronted
        </p>
        <p className="description__paragraph2">
          Me gradué de la universidad CESDE bajo el título de desarrollador Web.
          Aquí adquirí bases fundamentales que me ayudaron a formarme
          profesionalmente
        </p>
        <p className="description__paragraph3">
          Me caracteriza mi <strong>enfoque y vocación</strong> hacía mi
          profesión. Esto siempre me impulsa a estar en constante aprendizaje de
          nuevas herramientas y tecnologías que me permitan mejorar y aportar a
          mi equipo de trabajo
        </p>
      </article>

      <aside className="img__container">
        <img className="img__photo" src={img} alt="imagen" />
      </aside>
    </section>
  );
}

export default About;
