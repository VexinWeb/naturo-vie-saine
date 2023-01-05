import navStyles from "../styles/Nav.module.scss";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
      <ul>
        <li>
          <Link href="/">Blog</Link>
        </li>
        <li>
          <Link href="/">Rendez-vous</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
