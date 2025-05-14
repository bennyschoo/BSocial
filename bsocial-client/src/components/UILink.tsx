import { Link } from "react-router-dom";


interface UILinkProps {
    icon: string;
    size?: number;
    text?: string;
    to: string;
}

function UILink({ icon, size=30, text="", to}: UILinkProps) {
    
    return <>
        <Link className="d-flex gap-3 btn sidebar-button p-1" to={to}>
            <img src={icon} height={size} alt="User Interface Button"></img>
            {text && <h5 className="text-light my-auto">{text}</h5>}
        </Link>
    </>
}
export default UILink;