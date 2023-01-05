import styles from "../styles/Layout.module.css";
import Header from "./Header";

// Same style on all pages
// cf _app.js
const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default Layout;
