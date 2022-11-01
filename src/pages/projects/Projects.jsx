import React from "react";
import { projects } from "../../utils/projects";
import "./_ProjectsStyle.scss";

function Projects() {
  return (
    <section className="portfolio">
      <p className="portfolio__title">PORTAFOLIO DE PROYECTOS</p>
      <p className="portfolio__subtitle">(Más proyectos muy pronto...)</p>
      <article className="portfolio__projects" >
      {projects.map((item) => (
          <img key={item.name} className={item.name} src={item.img} alt={item.name} />
          ))}
          </article>
    </section>
  );
}

export default Projects;
