import React from "react";
import MyCalendly from "../components/Calendly";
import dynamic from "next/dynamic";

// Popup Calendly avec dynamic()
// const CalendlyPop = dynamic(() => import("../components/PopupCalendly"), {
//   ssr: false,
// });

const rendezvous = () => {
  return (
    <div>
      <MyCalendly />
      {/* PopupCalendly */}
      {/* <CalendlyPop /> */}
    </div>
  );
};

export default rendezvous;
