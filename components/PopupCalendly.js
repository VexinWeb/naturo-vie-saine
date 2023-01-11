import { PopupButton } from "react-calendly";

const PopupCalendly = () => {
    return (
        <div className="cal_div">
            <PopupButton
                url="https://calendly.com/vexinweb"
                rootElement={document.getElementById("__next")}
                text="Click here to schedule!"
            />
        </div>
    );
}

export default PopupCalendly;