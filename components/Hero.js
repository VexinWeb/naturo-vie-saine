import React from "react";
import heroStyles from "../styles/Hero.module.scss";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className={heroStyles.hero}>
      <Link href="/rendezvous" className={heroStyles.heroLeft}>
        {/* <div className={heroStyles.heroLeft}> */}
        {/* <div className={heroStyles.heroImageContainer}>
          <Image
            src="/vine.png"
            alt="Image d'une vigne"
            style={{ objectFit: "contain" }}
            fill
            //   style={{ position: "absolute", top: "0", right: "O" }}
            // width={150}
            // height={250}
          ></Image>
        </div> */}
        <div className={heroStyles.heroDescription}>
          <h1>Consultations en naturopathie</h1>
          <h2>à Fontenay sous Bois et Gisors</h2>
          <br />
          <p>
            Les méthodes naturelles peuvent améliorer votre santé générale.{" "}
            <br /> <br />
            En collaboration, nous établissons des plans de traitement
            personnalisés et efficaces. Je tiens compte de l'ensemble des
            aspects de votre vie pour vous aider à atteindre votre bien-être, en
            utilisant des techniques telles que l'homéopathie, l'aromathérapie
            et les conseils en nutrition.
          </p>
        </div>
        {/* </div> */}
      </Link>
      <div className={heroStyles.heroImageContainer}>
        <Image
          src="/debout.png"
          alt="portrait de Anne Trébout, naturopathe"
          fill
          style={{ objectFit: "contain" }}
        ></Image>
      </div>
    </div>
  );
};

export default Hero;
