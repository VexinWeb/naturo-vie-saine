import React from "react";
import heroStyles from "../styles/Hero.module.scss";
import Image from "next/image";

const Hero = () => {
  return (
    <div className={heroStyles.hero}>
      <div className={heroStyles.heroLeft}>
        <div>
          <Image
            src="/tree.png"
            alt="icône d'un arbre"
            style={{ objectFit: "contain" }}
            //   style={{ position: "absolute", top: "0", right: "O" }}
            width={200}
            height={200}
          ></Image>
        </div>
        <div className={heroStyles.heroDescription}>
          <h1>Téléconsultations en naturopathie</h1>
          <h2>à Fontenay sous Bois et Gisors</h2>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet neque
            quasi, culpa repellendus necessitatibus tempore sequi vitae earum
            ratione architecto hic optio saepe praesentium excepturi doloremque
            est mollitia rerum inventore id dignissimos ut omnis odit quaerat.
          </p>
        </div>
      </div>
      <div className={heroStyles.heroImageContainer}>
        <Image
          src="/debout.png"
          alt="portrait de Anne Trébout, naturopathe"
          width={300}
          height={300}
          style={{ objectFit: "contain" }}
        ></Image>
      </div>
    </div>
  );
};

export default Hero;
