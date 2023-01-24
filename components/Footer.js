import React from "react";
import footerStyles from "../styles/Footer.module.scss";

const Footer = () => {
  return (
    <div className={footerStyles.footer}>
      <div>
        <div>Contact par téléphone : 06 06 06 06 06</div>
        <div>Contact par mail : anne.trebout.naturo@gmail.com</div>
      </div>
      <div>
        <div>Site réalisé par l&apos;agence web https://vexinweb.fr</div>
        <div>
          Développeur Frontend Julien Verley | Développeur Backend Marco Guzman
        </div>
      </div>
    </div>
  );
};

export default Footer;
