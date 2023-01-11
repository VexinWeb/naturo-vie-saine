import dynamic from "next/dynamic";

const Calendly = dynamic(() => import("./PopupCalendly"), { ssr: false });

const MyCalendly = () => <Calendly />;

export default MyCalendly