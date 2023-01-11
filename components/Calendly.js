import React from "react";
import { InlineWidget } from "react-calendly";
import { PopupWidget } from "react-calendly";

const MyCalendly = () => {
  const calendlyContainer = React.useRef(null);
  return (
    <>
      <PopupWidget
        apiKey={process.env.REACT_APP_CALENDLY_APIKEY}
        url="https://calendly.com/marcoguzmandev"
        rootElement={calendlyContainer}
        text="Click here to schedule!"
        textColor="#ffffff"
        color="#00a2ff"
      />
      <div ref={calendlyContainer}></div>;
    </>
  );
};

export default MyCalendly;
