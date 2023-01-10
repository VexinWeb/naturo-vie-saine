import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Layout.module.scss";
import Hero from "../components/Hero";
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";

const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  return (
    <>
      <div className={styles.description}>
        <Hero />
        <Section1 />
        <Section2 />
      </div>
    </>
  );
};

export default Home;
