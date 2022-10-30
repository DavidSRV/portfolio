import React from "react";
import { Link } from "react-router-dom";
import "./_NavBarStyle.scss";

function NavBar() {
  return (
    <nav className="links__containers">
      <div className="links__general">
        <Link to="/About">SOBRE MÍ</Link>
        <Link to="/Skills">TECNOLOGÍAS</Link>
        <Link to="/Projects">PROYECTOS</Link>
        <Link to="/Contact">CONTÁCTAME</Link>
      </div>
    </nav>
  );
}

export default NavBar;
