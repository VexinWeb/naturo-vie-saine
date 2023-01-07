import styles from "../styles/Layout.module.scss";
import Banner from "./Banner";
import Header from "./Header";
// import Home from "../pages/Home";

// Same style on all pages
// cf _app.js
const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Header />
      <Banner />
      {/* main = <Home /> */}
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default Layout;
