import bannerStyles from "../styles/Banner.module.scss";
import Image from "next/image";

const Banner = () => {
  return (
    <div className={bannerStyles.bannerImageContainer}>
      {/* <h1 className={bannerStyles.h1}>
        Téléconsultations et consultations en naturopathie
      </h1> */}
      <Image
        src="/banner_frieze.png"
        alt="Banner with frieze"
        style={{
          width: "100%",
          maxHeight: "250px",
          objectFit: "cover",
        }}
        width={1000}
        height={200}
      />
    </div>
  );
};

export default Banner;
