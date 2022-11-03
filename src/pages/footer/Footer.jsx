import React from "react";
import "./_FooterStyle.scss";
import { BsWhatsapp, BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";
import { IoRocketOutline } from "react-icons/io5";
import { MdCopyright } from "react-icons/md";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__containerIcons">
        <a href="https://github.com/DavidSRV" target="_blank" rel="noreferrer">
          <BsGithub className="footer__icon --git" />
        </a>
        <a href="https://walink.co/e875fa" target="_blank" rel="noreferrer">
          <BsWhatsapp className="footer__icon --wha" />
        </a>
        <a
          href="https://www.linkedin.com/in/david-sebasti%C3%A1n-ruiz-vargas-05b197223/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin className="footer__icon --lin" />
        </a>
        <a
          href="https://www.instagram.com/davidruizvargas/"
          target="_blank"
          rel="noreferrer"
        >
          <BsInstagram className="footer__icon --inst" />
        </a>
      </div>
      <div className="footer__up">
        <IoRocketOutline />
        <p className="footer__descriptionUp">Sube al inicio de la página</p>
        <div>
          <MdCopyright />
          <p>David Ruiz 2022</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
