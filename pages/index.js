import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Layout.module.scss";
import Hero from "../components/Hero";

const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  return (
    <>
      <div className={styles.description}>
        <Hero />
      </div>
    </>
  );
};

export default Home;
