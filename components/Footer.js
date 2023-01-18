import React from "react";
import footerStyles from "../styles/Footer.module.scss";

const Footer = () => {
  return (
    <div className={footerStyles.footer}>
      <div>Contact par téléphone : 06 06 06 06 06</div>
      <div>
        Site réalisé par l'agence web VexinWeb https://vexinweb.fr | Frontend
        développeur Julien Verley | Backend développeur Marco Guzman
      </div>
    </div>
  );
};

export default Footer;
