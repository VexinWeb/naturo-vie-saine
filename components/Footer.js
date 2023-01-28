import React from "react";
import footerStyles from "../styles/Footer.module.scss";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={footerStyles.footer}>
      <div>
        {/* <div>Téléphone : 06 06 06 06 06</div> */}
        <div>
          <a href="mailto:anne.trebout.naturo@gmail.com">
            @ Anne Trébout Naturopathe
          </a>
        </div>
      </div>
      <div>
        <div>
          <a href="https://www.linkedin.com/in/julienverley">
            Site réalisé par VexinWeb
          </a>
          {" | "}
          <a href="https://www.linkedin.com/in/julienverley">
            {" "}
            Frontend Julien Verley
          </a>
          {" | "}
          <a href="https://www.linkedin.com/in/marco-guzman-dev">
            Backend Marco Guzman
          </a>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Footer;
