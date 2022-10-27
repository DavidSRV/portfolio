import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return <nav className="links__containers">
    <Link to="/About">Sobre mí</Link>
    <Link to="/Skills">Conocimientos</Link>
    <Link to="/Projects">Proyectos</Link>
    <Link to="/Contact">Contáctame</Link>
  </nav>;
}

export default NavBar;
