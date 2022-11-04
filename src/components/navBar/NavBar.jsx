import React from "react";
import { Link } from "react-router-dom";
import "./_NavBarStyle.scss";

function NavBar({about, skills, projects, contact}) {

  return (
    <nav className="links__containers">
      <div className="links__general">
        <a href={about}>SOBRE MÍ</a>
        <a href="/Skills" to="">TECNOLOGÍAS</a>
        <a href="" to="/Projects">PROYECTOS</a>
        <a href="" to="/Contact">CONTÁCTAME</a>
      </div>
    </nav>
  );
}

export default NavBar;
