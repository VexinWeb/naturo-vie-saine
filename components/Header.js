import headerStyles from "../styles/Header.module.scss";
import Link from "next/link";
import Nav from "./Nav";
import Image from "next/image";

const Header = () => {
  return (
    <div className={headerStyles.header}>
      <Link href="/" className={headerStyles.headerLeft}>
        <div className={headerStyles.headerImageContainer}>
          {/* <div> */}
          <Image
            src="/ginkgo_white.png"
            alt="logo"
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              objectFit: "contain",
            }}
            width={60}
            height={60}
          />
        </div>
        <div className={headerStyles.headerFonts}>
          <div href="/">Anne Trébout Naturopathe</div>
        </div>
      </Link>
      <Nav />
    </div>
  );
};

export default Header;
