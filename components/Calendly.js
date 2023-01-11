import React from "react";
import { InlineWidget } from "react-calendly";

const MyCalendly = () => {
  return (
    <InlineWidget
      apiKey={process.env.REACT_APP_CALENDLY_APIKEY}
      url="https://calendly.com/marcoguzmandev"
      styles={{
        marginTop: "50px",
        width: "100%",
        height: "1500px",
      }}
      pageSettings={{
        backgroundColor: "847571",
        hideEventTypeDetails: false,
        hideLandingPageDetails: false,
        primaryColor: "ffffff",
        textColor: "ffffff",
      }}
      prefill={{
        email: "test@test.com",
        firstName: "Jon",
        lastName: "Snow",
        name: "Jon Snow",
        guests: ["janedoe@example.com", "johndoe@example.com"],
        customAnswers: {
          a1: "a1",
          a2: "a2",
          a3: "a3",
          a4: "a4",
          a5: "a5",
          a6: "a6",
          a7: "a7",
          a8: "a8",
          a9: "a9",
          a10: "a10",
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
