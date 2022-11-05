import React from "react";
import "./_NavBarStyle.scss";

function NavBar() {
  return (
    <nav className="links__containers">
      <div className="links__general">
        <a href="#about">SOBRE MÍ</a>
        <a href="#skills">TECNOLOGÍAS</a>
        <a href="#projects">PROYECTOS</a>
        <a href="#contact">CONTÁCTAME</a>
      </div>
    </nav>
  );
}

export default NavBar;
