import headerStyles from "../styles/Header.module.scss";
import Link from "next/link";
import Nav from "./Nav";
import Image from "next/image";
// import { IBM_Plex_Sans_Devanagari } from "@next/font/google";

const Header = () => {
  return (
    <div className={headerStyles.header}>
      <div className={headerStyles.headerLeft}>
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
            width={70}
            height={70}
          />
        </div>
        <div className={headerStyles.headerFonts}>
          <Link href="/">Anne Trébout Naturopathe</Link>
        </div>
      </div>
      <Nav />
    </div>
  );
};

export default Header;
