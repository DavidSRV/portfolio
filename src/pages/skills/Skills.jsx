import React from "react";
import { skills } from "../../utils/technologies";
import "./SkillsStyle.scss";
import Work from "./work/Work";

function Skills() {
  return (
    <>
      <h3 className="title__skills">Experiencia</h3>
      <p className="description__skills">
        He estado desarrollando apliaciones y paginas web durante 1 año. <br />
        Siempre estoy ansioso por aprender nuevas tecnologías y mejorar.
      </p>
      <section className="skills__Exp">
        <aside className="skills__General">
          <p className="skills__description">
            Tecnologias y herramientas que he usado
          </p>
          <article className="skills__container">
            {skills.map((element) => (
              <div className={element.name} key={element.name}>
                <p className="skills__title">{element.name}</p>
                {element.img}
              </div>
            ))}
          </article>
        </aside>
        <Work />
      </section>
    </>
  );
}

export default Skills;
