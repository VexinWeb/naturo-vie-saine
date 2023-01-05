import headerStyles from "../styles/Header.module.scss";
import Link from "next/link";

const Header = () => {
  return (
    <nav className={headerStyles.header}>
      <ul>
        <li>
          <Link href="/">Blogg</Link>
        </li>
        <li>
          <Link href="/">Rendez-vous</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
