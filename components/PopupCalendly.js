import { PopupButton } from "react-calendly";

const PopupCalendly = () => {
  return (
    <div className="cal_div">
      <PopupButton
        url="https://calendly.com/vexinweb"
        rootElement={document.getElementById("__next")}
        text="Click here to schedule!"
        pageSettings={{
          backgroundColor: "ffffff",
          hideEventTypeDetails: false,
          hideLandingPageDetails: false,
          primaryColor: "00a2ff",
          textColor: "4d5055",
          hideGdprBanner: false,
        }}
      />
    </div>
  );
};

export default PopupCalendly;
