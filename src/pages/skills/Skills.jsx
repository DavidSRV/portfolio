import React from "react";
import { skills } from "../../utils/technologies";
import "./SkillsStyle.scss";

function Skills() {
  return (
    <>
      <h3>Experiencia</h3>
      <p>He estado haciendo desarrollo web durante 1 año, y siempre estoy ansioso por aprender nuevas tecnologías y mejorar.</p>
      <section className="skills__General">
        <p>Tecnologias y herramientas que he usado  </p>
        <article className="skills__container">
          {skills.map((element) => (
            <div className={element.name} key={element.name}>
              <p className="skills__title">{element.name}</p>
              {element.img}
            </div>
          ))}
        </article>
      </section>
    </>
  );
}

export default Skills;
