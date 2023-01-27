import React from "react";
import footerStyles from "../styles/Footer.module.scss";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={footerStyles.footer}>
      <div>
        {/* <div>Téléphone : 06 06 06 06 06</div> */}
        <div>
          Mail :{" "}
          <a href="mailto:anne.trebout.naturo@gmail.com">
            anne.trebout.naturo@gmail.com
          </a>
        </div>
      </div>
      <div>
        <div>
          <a href="https://www.linkedin.com/in/julienverley">Agence VexinWeb</a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/julienverley">
            Développeur Frontend Julien Verley
          </a>
          {" | "}
          <a href="https://www.linkedin.com/in/marco-guzman-dev">
            Développeur Backend Marco Guzman
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
