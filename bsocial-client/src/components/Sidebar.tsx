import { useMediaQuery } from "react-responsive";
import UILink from "./UILink.tsx";
import homeicon from "../assets/homeicon.svg";
import searchicon from "../assets/searchicon.svg";
import messageicon from "../assets/messageicon.svg";
import createicon from "../assets/createicon.svg";
import settingsicon from "../assets/settingsicon.svg";
import logo from "../assets/logo.svg";
import bsocial from "../assets/bsocial.svg";

interface SidebarProps {
    expanded: boolean;
}

function Sidebar({expanded}: SidebarProps) {

    return (
        <div className="d-flex flex-column p-3 bg-dark justify-content-between border-end border-dark position-fixed" style={{height: "100vh"}}>
            <div className="my-3">
                <UILink icon={expanded ? bsocial: logo} to="/"/>
            </div>
            <div className="d-flex flex-column gap-3">
                <UILink icon={homeicon} text={expanded ? "Home": ""} to="/" />
                <UILink icon={searchicon} text={expanded ? "Search": ""} to="/search" />
                <UILink icon={messageicon} text={expanded ? "Messages": ""} to="/messages" />
                <UILink icon={createicon} text={expanded ? "Create": ""} to="/create" />
            </div>
            <div className="my-3">
                <UILink icon={settingsicon} text={expanded ? "Settings": ""} to="/settings" />
            </div>
        </div>
    )
}

export default Sidebar;