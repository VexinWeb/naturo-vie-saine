import React from "react";
import footerStyles from "../styles/Footer.module.scss";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={footerStyles.footer}>
      <div className={footerStyles.left}>
        {/* <div>Téléphone : 06 06 06 06 06</div> */}
        <div>
          <a href="mailto:anne.trebout.naturo@gmail.com">
            @ Anne Trébout Naturopathe
          </a>
        </div>
      </div>
      {/* <div> */}
      <div className={footerStyles.right}>
        <a href="https://vexinweb.fr/">
          Site réalisé par l&apos;agence
          <Image
            href="https://vexinweb.fr/"
            src="/logo_vw.png"
            alt="Logo VexinWEB"
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              objectFit: "contain",
            }}
            width={50}
            height={50}
          ></Image>
        </a>
        {/* <a href="https://www.linkedin.com/in/julienverley">
          Développeur Frontend Julien Verley
        </a>
        <a href="https://www.linkedin.com/in/marco-guzman-dev">
          Développeur Backend Marco Guzman
        </a> */}
      </div>
      <div></div>
    </div>
    // </div>
  );
};

export default Footer;
