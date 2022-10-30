import React from "react";
import NavBar from "../../components/navBar/NavBar";
import "./_MainStyle.scss";
import { BsChevronDoubleDown } from "react-icons/bs";
import About from "../about/About";
import Skills from "../skills/Skills";
import Projects from "../projects/Projects";

function MainPage() {
  return (
    <>
      <div className="layout">
        <NavBar />
        <div className="layout__content">
          <h1 className="layout__title">Hola, Soy David</h1>
          <p className="layout__description">Desarrollador Web - Fronted</p>
        </div>
        <BsChevronDoubleDown className="layout__iconDown" />
      </div>
      <section>
        <About />
      </section>
      <section>
        <Skills />
      </section>
      <section>
        <Projects />
      </section>
      <section></section>
    </>
  );
}

export default MainPage;
