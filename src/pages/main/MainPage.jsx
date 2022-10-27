import React from "react";
import NavBar from "../../components/navBar/NavBar";
import "./_MainStyle.scss";

function MainPage() {
  return (
    <>
      <div className="layout">
        <NavBar />
        <div className="layout__content">
          <h1 className="layout__title">Hi, I'm David</h1>
          <p className="layout__description">Web Developer</p>
        </div>
      </div>
      <section className="section1"></section>
      <section className="section2"></section>
      <section className="section3"></section>
      <section className="section4"></section>
    </>
  );
}

export default MainPage;
