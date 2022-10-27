import React from "react";
import { Link } from "react-router-dom";
import "./_NavBarStyle.scss";

function NavBar() {
  return (
    <nav className="links__containers"> 
      <div className="links__name">
        <p>DAVID R.V.</p>
      </div>
      <div className="links__general">
        <Link to="/About">ABOUT</Link>
        <Link to="/Skills">SKILLS</Link>
        <Link to="/Projects">PROJECTS</Link>
        <Link to="/Contact">CONTACT</Link>
      </div>
    </nav>
  );
}

export default NavBar;
