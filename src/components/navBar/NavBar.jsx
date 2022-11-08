import React from "react";
import { useRef } from "react";
import "./_NavBarStyle.scss";

function NavBar() {
  const navBar = useRef(null);

  let scrollUbication = window.pageYOffset;

  window.onscroll = () => {
    let move = window.pageYOffset;
    if (scrollUbication >= 828) {
      if (scrollUbication >= move) {
        navBar.current.style.display = "none";
        navBar.current.style.trasition = "All 1s";

      } else {
        navBar.current.style.display = "flex";
      }
    }
    scrollUbication = move;
  };

  return (
    <nav ref={navBar} className={`links__containers`}>
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
