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

function MainPage() {
  return (
    <>
      <div className="layout">

        <NavBar />

        <div className="layout__background"></div>

        <div className="layout__content">
          <h1 className="layout__title">David Ruiz</h1>
          <div className="prueba">
          <div className="circle1"></div>
          <div className="circle2"></div>
          </div>
        </div>

        <p className="layout__descriptionBorder">David Ruiz Vargas - Front Dev </p>

       <a href="#about"><BsChevronDoubleDown className="layout__iconDown" /></a> 
      </div>

      <About />
      <Cv />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default MainPage;
