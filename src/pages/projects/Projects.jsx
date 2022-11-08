import React from "react";
import { projects } from "../../utils/projects";
import "./_ProjectsStyle.scss";

function Projects() {
  return (
    <section id="projects" className="portfolio">
      <p className="portfolio__title">PORTAFOLIO DE PROYECTOS</p>
      <p className="portfolio__subtitle">(Más proyectos muy pronto...)</p>
      <article className="portfolio__projects">
        {projects.map((item) => (
          <div className="portfolio__container" key={item.name}>
            <p className="portfolio__nameProject">{item.name}</p>
            <a href={item.urlLive} target="__blank">
              <img
                key={item.name}
                className={item.name}
                src={item.img}
                alt={item.name}
              />
            </a>
            <div className="container__links">
              <a
                className="linkUrlLive"
                target="_blank"
                rel="noreferrer"
                href={item.urlLive}
              >
                Visita la página
              </a>
              <a
                className="linkUrlRepo"
                target="_blank"
                rel="noreferrer"
                href={item.urlRepo}
              >
                Código del Proyecto
              </a>
            </div>
          </div>
        ))}
      </article>
    </section>
  );
}

export default Projects;
