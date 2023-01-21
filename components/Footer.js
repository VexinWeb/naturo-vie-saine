import React from "react";
import footerStyles from "../styles/Footer.module.scss";

const Footer = () => {
  return (
    <div className={footerStyles.footer}>
      <div>Contact par téléphone : 06 06 06 06 06</div>
      <div>
        Agence web https://vexinweb.fr | Développeur Frontend Julien Verley |
        Développeur Backend Marco Guzman
      </div>
    </div>
  );
};

export default Footer;
