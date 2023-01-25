import styles from "../styles/Layout.module.scss";
import Banner from "./Banner";
import Footer from "./Footer";
import Header from "./Header";

// Apply same style on all pages, cf _app.js
const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Header />
      <Banner />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
