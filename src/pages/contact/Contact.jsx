import React from "react";
import './_ContactStyle.scss';
import { FaRegPaperPlane } from 'react-icons/fa';

function Contact() {
  return (
    <article id="contact" className="contact">
      <FaRegPaperPlane  className="contact__icon"/>
      <p className="contact__title">Contáctame</p>
      <p className="contact__description">Si tienes una idea para un proyecto, no dudes en mandarme un email !!</p>
      <a className="contact__link" href="mailto:david.ruizvargas@hotmail.com?Subject=Interesado%20en%20tu%20hoja%20perfil%20profesional">
      Salúdame
      </a>
    </article>
  );
}

export default Contact;
