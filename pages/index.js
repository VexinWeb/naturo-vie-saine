import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Layout.module.css";

const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  return (
    <>
      {/* <Head>
        <title>Naturopathie</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <main className={styles.main}></main>
    </>
  );
};

export default Home;
