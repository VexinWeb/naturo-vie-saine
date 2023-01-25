import React from "react";
import { InlineWidget } from "react-calendly";

const MyCalendly = () => {
  return (
    <InlineWidget
      apiKey={process.env.REACT_APP_CALENDLY_APIKEY}
      url="https://calendly.com/anne_trebout_naturo"
      styles={{
        width: "350px",
        height: "1750px",
      }}
      pageSettings={{
        backgroundColor: "847571",
        hideEventTypeDetails: false,
        hideLandingPageDetails: false,
        primaryColor: "ffffff",
        textColor: "ffffff",
        hideGdprBanner: false,
      }}
      prefill={{
        email: "",
        firstName: "Prénom",
        lastName: "Nom",
        name: "",
        guests: ["", ""],
        customAnswers: {
          a1: "",
        },
        date: new Date(Date.now() + 86400000),
      }}
    />
  );
};

export default MyCalendly;
