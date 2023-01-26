import React from "react";
import heroStyles from "../styles/Hero.module.scss";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className={heroStyles.hero}>
      <Link href="/rendezvous" className={heroStyles.heroLeft}>
        <div className={heroStyles.heroDescription}>
          <h1>Consultations en naturopathie</h1>
          <br />
          <h2>En vidéoconsultation</h2>
          <br />
          <p>
            Les méthodes naturelles peuvent améliorer votre santé générale.
            <br />
            En collaboration, nous établissons des plans de traitement
            personnalisés et efficaces. Je tiens compte de l&lsquo;ensemble des
            aspects de votre vie pour vous aider à atteindre votre bien-être, en
            utilisant des techniques telles que l&lsquo;homéopathie,
            l&lsquo;aromathérapie et les conseils en nutrition.
          </p>
        </div>
        {/* </div> */}
      </Link>
      <div className={heroStyles.heroImageContainer}>
        <Image
          src="/relaxing.svg"
          alt="portrait d'un consultant en naturopathie en téléconsultation'"
          style={{ width: "100%", maxHeight: "300px", objectFit: "contain" }}
          fill
          sizes="(max-width: 768px) 50vw,
          (max-width: 1200px) 50vw,
          25vw"
        ></Image>
      </div>
    </div>
  );
};

export default Hero;
