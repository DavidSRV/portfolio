import React from "react";
import { skills } from "../../utils/technologies";
import "./SkillsStyle.scss";

function Skills() {
  return (
    <>
      <h3>Tecnologías y herramientas que domino</h3>
      <section className="skills__General">
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
