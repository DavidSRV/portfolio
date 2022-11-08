import React from "react";
import "./_FooterStyle.scss";
import { BsWhatsapp, BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";
import { RiRocket2Line } from "react-icons/ri";
import { MdCopyright } from "react-icons/md";

function Footer() {

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
        <RiRocket2Line onClick={scrollTop} className="footer__iconUp" />
        <p className="footer__descriptionUp">Sube al inicio de la página</p>
      </div>

      <div className="footer__copy">
        <MdCopyright className="footer__copyIcon" />
        <p>David Ruiz 2022</p>
      </div>
    </footer>
  );
}

export default Footer;
