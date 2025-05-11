
interface UIButtonProps {
    icon: string;
    size?: number;
    text?: string;
    onClick?: () => void;
}

function SideBarButton({ icon, size=30, text="", onClick }: UIButtonProps) {
    
    return <>
        <button className="d-flex gap-3 btn sidebar-button p-1" onClick={onClick}>
            <img src={icon} height={size} alt="User Interface Button"></img>
            {text && <h5 className="text-light my-auto">{text}</h5>}
        </button>
    </>
}
export default SideBarButton;