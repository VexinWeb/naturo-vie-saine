import bannerStyles from "../styles/Banner.module.scss";
import Image from "next/image";

const Banner = () => {
  return (
    <div className={bannerStyles.bannerImageContainer}>
      <Image
        src="/banner_frieze.png"
        alt="Banner with frieze"
        style={{
          width: "100%",
          maxHeight: "250px",
          objectFit: "cover",
        }}
        priority
        fill
      />
    </div>
  );
};

export default Banner;
