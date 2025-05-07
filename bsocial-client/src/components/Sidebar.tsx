import SideBarButton from "./SideBarButton.tsx";
import homeicon from "../assets/homeIcon.svg";
import messageicon from "../assets/messageicon.svg";
import settingsicon from "../assets/settingsicon.svg";
import logo from "../assets/logo.svg";

function Sidebar() {

    return (
        <div className="d-flex flex-column p-3 bg-dark justify-content-between border-end border-dark position-fixed" style={{height: "100vh"}}>
            <SideBarButton icon={logo} />
            <div className="d-flex flex-column">
                <SideBarButton icon={homeicon} onClick={() => console.log("Home clicked")} />
                <SideBarButton icon={messageicon} onClick={() => console.log("Message clicked")} />
            </div>
            <SideBarButton icon={settingsicon} onClick={() => console.log("Settings clicked")} />
        </div>
    )
}

export default Sidebar;