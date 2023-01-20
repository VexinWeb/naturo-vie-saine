import navStyles from "../styles/Nav.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";

const Nav = () => {
  const router = useRouter();
  return (
    <nav className={navStyles.nav}>
      <ul>
        <li className={router.pathname.startsWith("/blog") ? "active" : ""}>
          <Link href="/blog">Blog</Link>
        </li>
        <li className={router.pathname == "/rendezvous" ? "active" : ""}>
          <Link href="/rendezvous">Rendez-vous</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
