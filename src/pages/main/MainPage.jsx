import React from "react";
import NavBar from "../../components/navBar/NavBar";
import "./_MainStyle.scss";
import { BsChevronDoubleDown } from "react-icons/bs";
import About from "../about/About";


function MainPage() {
  return (
    <>
      <div className="layout">
        <NavBar />
        <div className="layout__content">
          <h1 className="layout__title">Hola, Soy David</h1>
          <p className="layout__description">Desarrollador Web - Fronted</p>
        </div>
        <BsChevronDoubleDown  className="layout__iconDown"/>
      </div>
      <section className="section1"><About/></section>
      <section className="section2"></section>
      <section className="section3"></section>
      <section className="section4"></section>
    </>
  );
}

export default MainPage;
