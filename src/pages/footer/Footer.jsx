import React from "react";
import "./_FooterStyle.scss";
import { BsWhatsapp, BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";
import { IoRocketOutline } from "react-icons/io5";
import { MdCopyright } from "react-icons/md";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__containerIcons">
        <BsGithub className="footer__icon --git" />
        <BsLinkedin className="footer__icon --lin" />
        <BsWhatsapp className="footer__icon --wha" />
        <BsInstagram className="footer__icon --inst" />
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
