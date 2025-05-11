import { useMediaQuery } from "react-responsive";
import SideBarButton from "./UIButton.tsx";
import homeicon from "../assets/homeIcon.svg";
import messageicon from "../assets/messageicon.svg";
import settingsicon from "../assets/settingsicon.svg";
import logo from "../assets/logo.svg";
import bsocial from "../assets/bsocial.svg";



function Sidebar() {
    const displayText =  useMediaQuery({ minWidth: 750});


    return (
        <div className="d-flex flex-column p-3 bg-dark justify-content-between border-end border-dark position-fixed" style={{height: "100vh"}}>
            <div className="my-3">
                <SideBarButton icon={displayText ? bsocial: logo} />
            </div>
            <div className="d-flex flex-column">
                <div className="my-3">
                    <SideBarButton icon={homeicon} text={displayText ? "Home": ""} onClick={() => console.log("Home clicked")} />
                </div>
                <div className="my-3">
                    <SideBarButton icon={messageicon} text={displayText ? "Messages": ""} onClick={() => console.log("Message clicked")} />
                </div>
            </div>
            <div className="my-3">
                <SideBarButton icon={settingsicon} text={displayText ? "Settings": ""} onClick={() => console.log("Settings clicked")} />
            </div>
        </div>
    )
}

export default Sidebar;