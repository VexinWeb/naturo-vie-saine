import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Layout.module.scss";

const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  return (
    <>
      <div className={styles.description}>
        <h2>Qu'est-ce que la naturopathie ?</h2>
      </div>
    </>
  );
};

export default Home;
