import { useMediaQuery } from "react-responsive";
import UILink from "./UILink.tsx";
import homeicon from "../assets/homeicon.svg";
import searchicon from "../assets/searchicon.svg";
import messageicon from "../assets/messageicon.svg";
import createicon from "../assets/createicon.svg";
import settingsicon from "../assets/settingsicon.svg";
import logo from "../assets/logo.svg";
import bsocial from "../assets/bsocial.svg";
import { Ref } from "react";

interface SidebarProps {
    ref: HTMLOrSVGElement | null;
}

function Sidebar({ref}: SidebarProps) {
    //Expand Sidebar based on the screen width
    const sidebarExpanded = useMediaQuery({ minWidth: 750 });

    return (
        <div ref={ref as unknown as Ref<HTMLDivElement> } className="d-flex flex-column p-3 bg-dark justify-content-between border-end border-dark position-fixed" style={{height: "100vh"}}>
            <div className="my-3">
                <UILink icon={sidebarExpanded ? bsocial: logo} to="/"/>
            </div>
            <div className="d-flex flex-column gap-3">
                <UILink icon={homeicon} text={sidebarExpanded ? "Home": ""} to="/" />
                <UILink icon={searchicon} text={sidebarExpanded ? "Search": ""} to="/search" />
                <UILink icon={messageicon} text={sidebarExpanded ? "Messages": ""} to="/messages" />
                <UILink icon={createicon} text={sidebarExpanded ? "Create": ""} to="/create" />
            </div>
            <div className="my-3">
                <UILink icon={settingsicon} text={sidebarExpanded ? "Settings": ""} to="/settings" />
            </div>
        </div>
    )
}

export default Sidebar;