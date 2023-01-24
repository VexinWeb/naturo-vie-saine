import React from "react";
import { InlineWidget } from "react-calendly";

const MyCalendly = () => {
  return (
    <InlineWidget
      apiKey={process.env.REACT_APP_CALENDLY_APIKEY}
      // url="https://calendly.com/vexinweb"
      url="https://calendly.com/anne_trebout_naturo"
      styles={{
        // marginTop: "50px",
        // width: "100%",
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

// const MyCalendly = () => {
//   const calendlyContainer = React.useRef(null);
//   return (
//     <>
//       <PopupWidget
//         apiKey={process.env.REACT_APP_CALENDLY_APIKEY}
//         url="https://calendly.com/marcoguzmandev"
//         rootElement={calendlyContainer}
//         text="Click here to schedule!"
//         textColor="#ffffff"
//         color="#00a2ff"
//       />
//       <div ref={calendlyContainer}></div>;
//     </>
//   );
// };

export default MyCalendly;
