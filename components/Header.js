import headerStyles from "../styles/Header.module.scss";
import Link from "next/link";
import Nav from "./Nav";

const Header = () => {
  return (
    <div className={headerStyles.header}>
      <div className={headerStyles.headerLeft}>
        <div>Logo</div>
        <div>Anne Trébout Naturopathe</div>
      </div>
      <Nav />
    </div>
  );
};

export default Header;
