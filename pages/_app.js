import "../styles/globals.css";
// import "normalize.css";
import Layout from "../components/Layout";
// import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      {/* <Head>
        <title>Naturopathie</title>
        <meta name="Naturopathie" content="Naturopathie, santé, vie saine" />
      </Head> */}
      <Component {...pageProps} />
    </Layout>
  );
}
