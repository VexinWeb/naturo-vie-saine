import React from "react";
import MyCalendly from "../components/Calendly";
import dynamic from "next/dynamic";
import Image from "next/image";
import rendezVousStyles from "../styles/RendezVous.module.scss";
import styles from "../styles/Layout.module.scss";

const rendezvous = () => {
  return (
    <main className={styles.main}>
      <div className={rendezVousStyles.rendezVous}>
        <div className={rendezVousStyles.imageContainer}>
          <Image
            src="/respond.svg"
            alt="image illustrating blog article"
            style={{ objectFit: "cover" }}
            width={350}
            height={250}
          ></Image>
        </div>
        <MyCalendly />
        <div className={rendezVousStyles.backGroundImage}></div>
      </div>
    </main>
  );
};

export default rendezvous;
