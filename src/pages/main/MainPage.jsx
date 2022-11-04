import React from "react";
import NavBar from "../../components/navBar/NavBar";
import "./_MainStyle.scss";
import { BsChevronDoubleDown } from "react-icons/bs";
import About from "../about/About";
import Skills from "../skills/Skills";
import Projects from "../projects/Projects";
import Cv from "../cv/Cv";
import Contact from "../contact/Contact";
import Footer from "../footer/Footer";
import { useRef } from "react";


function MainPage() {

 const about = useRef(null)
 const skills = useRef(null)
 const projects = useRef(null)
 const contact = useRef(null)

  return (
    <>
      <div className="layout">
        <NavBar about={about} skills={skills} projects={projects} contact={contact}/>
        <div className="layout__content">
          <h1 className="layout__title">Hola, Soy David</h1>
          <p className="layout__description">Desarrollador Web - Fronted</p>
        </div>
        <BsChevronDoubleDown className="layout__iconDown" />
      </div>
      <section>
        <About ref={about}/>
        <Cv />
      </section>
      <section>
        <Skills ref={skills}/>
      </section>
      <section >
        <Projects ref={projects}/>
      </section>
      <section>
        <Contact ref={contact}/>
        <Footer/>
      </section>
    </>
  );
}

export default MainPage;
